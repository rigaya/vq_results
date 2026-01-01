# -*- coding: utf-8 -*-

import subprocess
import os
import sys
import time
import parse
import joblib
import threading
import ctypes
import shutil
import datetime
import json
import traceback

temp_dir=r'F:\temp'
source_file_1=r'X:\Encoders\sakuranotoki_op.mp4'
source_file_1_10bit=r'X:\Encoders\sakuranotoki_op_x265_10bit_lossless.mp4'
input_fps_1='30/1'
input_res_1='1920x1080'
input_codec_1_8bit='h264'
input_codec_1_10bit='hevc'

source_file_2=r'X:\Encoders\sample_movie_1080p_new_short8.mp4'
source_file_2_10bit=r'X:\Encoders\sample_movie_1080p_new_short8_x265_10bit_lossless.mp4'
input_fps_2='30000/1001'
input_res_2='1920x1080'
input_codec_2_8bit='h264'
input_codec_2_10bit='hevc'

ffmpeg_path=r'X:\ssim_benchmark\ffmpeg.exe'
NVEncC_path=r'X:\Encoders\x64\NVEncC64.exe'
QSVEncC_path=r'X:\Encoders\x64\QSVEncC64.exe'
VCEEncC_path=r'X:\Encoders\x64\VCEEncC64.exe'
x264_path=r'X:\Encoders\x64\x264_3223_x64.exe'
x265_path=r'X:\Encoders\x64\x265_4.1+200_x64.exe'
svtav1_path=r'X:\Encoders\x64\SvtAv1EncApp_3.1.0-185_x64_clang.exe'
vvenc_path=r'X:\Encoders\x64\vvencapp_1.13.1.exe'
# VP9は1.15.2
#muxer_path=r'X:\Encoders\x86\muxer.exe'
muxer_path=r'X:\Encoders\x64\mp4box.exe'
vmaf_model_path=r'X\\:/Encoders/vmaf_float_v0.6.1.json'
vmaf_threads=1
ffvship_nvidia_path=r'X:\Encoders\x64\FFVship_nvidia\FFVship.exe'
ffvship_amd_path=r'X:\Encoders\x64\FFVship_amd\FFVship.exe'
ffvship_path = ffvship_nvidia_path
ffvship_device=0

test_x264               = False
test_x265               = False
test_svtav1             = False
test_vvenc_qp           = False
test_vvenc_vbr          = False
test_nvenc_h264         = False
test_nvenc_h264_vbr     = False
test_nvenc_hevc         = False
test_nvenc_hevc_vbr     = False
test_nvenc_av1          = False
test_nvenc_av1_vbr      = False
test_qsvenc_h264        = False
test_qsvenc_h264_vbr    = False
test_qsvenc_hevc        = False
test_qsvenc_hevc_vbr    = False
test_qsvenc_vp9         = False
test_qsvenc_vp9_cqp     = False
test_qsvenc_vp9_vbr     = False
test_qsvenc_av1         = False
test_qsvenc_av1_vbr     = False
test_qsvenc_avsw        = 0  # HWENC_AVSW_* のいずれかを設定するモード値
test_vce_cqp            = False
test_vce_h264_vbr       = False
test_vce_h264_vbr_b     = False
test_vce_h264_qvbr      = False
test_vce_h264_qvbr_b    = False
test_vce_hevc_vbr       = False
test_vce_hevc_vbr_b     = False
test_vce_hevc_qvbr      = False
test_vce_av1_qvbr       = False
test_vce_av1_vbr        = False
vce_disable_qvbr_pa     = False
vce_disable_10bit       = False
test_ffmpeg_vp9_crf     = False
test_ffmpeg_vp9_vbr     = False


delete_tmp_files    = False

PIPE_NONE   = 0
PIPE_RAW_8  = 1
PIPE_RAW_10 = 2
PIPE_Y4M_8  = 3
PIPE_Y4M_10 = 4

HWENC_AVSW_NONE  = 0  # --avsw を使用しない
HWENC_AVSW_10BIT = 1  # 10bit エンコード時のみ --avsw を使用
HWENC_AVSW_ALL   = 2  # 8/10bit を問わず常に --avsw を使用

process = 1
lock = threading.Lock()

affinity_mask = None

def should_use_hwenc_avsw(is_10bit: bool) -> bool:
    """
    ハードウェアエンコーダー(NVEnc/QSVEnc/VCEEnc)で --avsw を使用するかどうかを判定する。
    test_qsvenc_avsw に HWENC_AVSW_* のいずれかの値が入る。
    """
    global test_qsvenc_avsw
    if test_qsvenc_avsw == HWENC_AVSW_ALL:
        return True
    if test_qsvenc_avsw == HWENC_AVSW_10BIT and is_10bit:
        return True
    return False

def apply_affinity_prefix(command: str) -> str:
    if affinity_mask is not None and len(affinity_mask.strip()) > 0:
        # Windows cmd.exe: wrap whole command so that pipes/redirections work inside inner cmd
        return 'start "" /B /WAIT /AFFINITY ' + affinity_mask + ' ' + command
    return command

def out_vid_path(encoder, set, value, input, out_ext):
    videofilename = os.path.basename(input) + "_" + encoder + "_" + set + "_" + value + out_ext
    return os.path.join(temp_dir, videofilename.replace(" ", "_"))

def run_muxer_old(encoder, set, value, input, in_ext, out_ext, fps, tmp_path):
    cmd = "\"" + muxer_path + "\" -i \"" + out_vid_path(encoder, set, value, input, in_ext) + "\"?fps=" + fps + " -o \"" + out_vid_path(encoder, set, value, input, out_ext) + "\""
    print(cmd)

    try:
        p = subprocess.run(cmd, shell=True)
        ret = p.returncode
    except:
        ret = 1

    return ret

def run_muxer(encoder, set, value, input, in_ext, out_ext, fps, tmp_path):
    cmd = "\"" + muxer_path + "\" -add \"" + out_vid_path(encoder, set, value, input, in_ext) + "\":fps=" + fps + " -new \"" + out_vid_path(encoder, set, value, input, out_ext) + "\""
    print(cmd)

    try:
        p = subprocess.run(cmd, shell=True)
        ret = p.returncode
    except:
        ret = 1

    return ret

def run_encoder(encoder, set, value, encoder_path, pipe_required, args, input, out_ext, tmp_path):
    # ffmpeg(libvpx-vp9) は独自に処理
    if encoder == 'libvpx-vp9':
        out_path = out_vid_path(encoder, set, value, input, out_ext)
        cmd = "\"" + encoder_path + "\" -y -i \"" + input + "\" " + args + " \"" + out_path + "\"" \
            + " 2> \"" + tmp_path + "\""
        print(cmd)
        try:
            p = subprocess.run(cmd, shell=True)
            ret = p.returncode
        except:
            ret = 1
        return ret

    output_option = "-b" if encoder == 'svtav1' else '-o'
    input_tmp = 'stdin' if encoder == 'svtav1' else '-'
    cmd = ""
    if pipe_required == PIPE_RAW_8:
        cmd = "\"" + ffmpeg_path + "\" -loglevel error -y -i \"" + input + "\" -pix_fmt yuv420p -f rawvideo -an - | "
    elif pipe_required == PIPE_RAW_10:
        cmd = "\"" + ffmpeg_path + "\" -loglevel error -y -i \"" + input + "\" -pix_fmt yuv420p10le -strict -1 -an -f rawvideo - | "
    elif pipe_required == PIPE_Y4M_8:
        cmd = "\"" + ffmpeg_path + "\" -loglevel error -y -i \"" + input + "\" -pix_fmt yuv420p -strict -1 -an -f yuv4mpegpipe - | "
    elif pipe_required == PIPE_Y4M_10:
        cmd = "\"" + ffmpeg_path + "\" -loglevel error -y -i \"" + input + "\" -pix_fmt yuv420p10le -strict -1 -an -f yuv4mpegpipe - | "
    else:
        input_tmp = '\"' + input + '\"'

    cmd_log = " > \"" + tmp_path + "\" 2>&1" if encoder == 'VVenC' else " 2> \"" + tmp_path + "\""

    cmd = cmd \
        + "\"" + encoder_path + "\" " + args + " " + input_tmp + " " + output_option + " \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
        + cmd_log
    print(cmd)

    try:
        p = subprocess.run(cmd, shell=True)
        ret = p.returncode
    except:
        ret = 1

    return ret
    
def get_fps_from_log(tmp_path):
    try:
        last_line = ""
        avg_speed = ""
        with open(tmp_path, encoding='utf-8') as log_file:
            for line in log_file:
                if ("kbps" in line or "kb/s" in line or "kbits/s" in line) and "fps" in line:
                    last_line = line
                elif "Fps(avg):" in line:
                    last_line = line
                elif "Average Speed" in line:
                    avg_speed = line
        if len(avg_speed) > 0:
            return avg_speed.split()[2]
        elif "fps=" in last_line:
            tokens = last_line.replace("=", " ").split()
            fps = ""
            frame = ""
            elapsed = ""
            for i in range(len(tokens)):
                token = tokens[i]
                if token == "fps" and i + 1 < len(tokens):
                    fps = tokens[i + 1]
                elif token == "frame" and i + 1 < len(tokens):
                    frame = tokens[i + 1]
                elif token == "elapsed" and i + 1 < len(tokens):
                    elapsed = tokens[i + 1]
            if frame != "" and elapsed != "":
                print("frame: " + frame + " elapsed: " + elapsed)
                # elapsed の書式例: 0:01:24.33（h:mm:ss.xx）
                hms = elapsed.split(':')
                if len(hms) == 3:
                    elapsed_seconds = int(hms[0]) * 3600 + int(hms[1]) * 60 + float(hms[2])
                elif len(hms) == 2:
                    elapsed_seconds = int(hms[0]) * 60 + float(hms[1])
                else:
                    elapsed_seconds = float(elapsed)
                print("elapsed_seconds: " + str(elapsed_seconds))
                print("fps: " + str(float(frame) / elapsed_seconds))
                return str(float(frame) / elapsed_seconds)
            return fps
        elif "Fps(avg):" in last_line:
            line_split = last_line.split()
            for i in range(len(line_split)):
                if "Fps(avg):" in line_split[i]:
                    return line_split[i+1]
        else:
            line_split = last_line.split()
            for i in range(len(line_split)):
                if "fps" in line_split[i]:
                    return line_split[i-1].lstrip('(')
    except:
        print("error opening " + tmp_path + " file.\n")
        print(traceback.format_exc())

def get_bitrate_from_log(tmp_path):
    try:
        avg_bitrate_line = ""
        last_line = ""
        with open(tmp_path, encoding='utf-8') as log_file:
            for line in log_file:
                if "kbps" in line or "kb/s" in line or "kbits/s" in line:
                    last_line = line
                if "avg_bitrate=" in line:
                    avg_bitrate_line = line
        if len(avg_bitrate_line) > 0:
            last_line = avg_bitrate_line.replace("=", " ")
        elif "kbits/s" in line:
            last_line = last_line.replace("=", " ")
        line_split = last_line.split()
        for i in range(len(line_split)):
            if "kbps" in line_split[i] or "kb/s" in line_split[i]:
                return line_split[i-1]
            elif "kbits/s" in line_split[i]:
                return line_split[i].replace('kbits/s', '')
            elif "avg_bitrate" in line_split[i]:
                return line_split[i+1]
    except:
        print("error opening " + tmp_path + " file.\n")
        print(traceback.format_exc())

#def cal_ssim_ffmpeg(encoder, set, value, pipe_required, input, input_res, out_ext, tmp_path):
#    if pipe_required == PIPE_RAW_10 or pipe_required == PIPE_Y4M_10:
#        input_tmp = 'pipe:0'
#        cmd = "\"" + ffmpeg_path + "\" -loglevel error -y -i \"" + input + "\" -pix_fmt yuv420p10le -strict -1 -an -f yuv4mpegpipe - | "
#        #input_tmp = input
#        #cmd = ""
#    else:
#        input_tmp = input
#        cmd = ""
#
#    input_w = input_res.split('x')[0]
#    input_h = input_res.split('x')[1]
#    cmd_crop = "crop=w=" + input_w + ":h=" + input_h + ":x=0:y=0"
#    cmd = cmd \
#        + "\"" + ffmpeg_path + "\" -y" \
#        + " -i \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
#        + " -i \"" + input_tmp + "\" " \
#        + " -filter_complex \"[0:v]" + cmd_crop + "[0v];[1:v]null[1v];[0v][1v]ssim\" -an -f null - " \
#        + " 2> \"" + tmp_path + "\""
#    print(cmd)
#
#    try:
#        p = subprocess.run(cmd, shell=True)
#        ret = p.returncode
#    except:
#        print("failed to run ffmpeg\n");
#        ret = 1
#
#    return ret
#
#def get_ssim_from_log(tmp_path):
#    try:
#        with open(tmp_path, encoding='utf-8') as log_file:
#            for line in log_file:
#                if "SSIM" in line and "All:" in line:
#                    r = parse.search("SSIM Y:{:f} ({:f}) U:{:f} ({:f}) V:{:f} ({:f}) All:{:f} ({:f})", line[line.find(']')+1:])
#                    #print(r)
#                    return r[6]
#                        
#    except:
#        print("error opening " + tmp_path + " file.\n")
#        print(traceback.format_exc())

def encoder_to_codec(encoder, set):
    encoder_low = encoder.lower()
    set_low = set.lower()
    if encoder_low == 'x264':
        return 'h264'
    elif encoder_low == 'x265':
        return 'hevc'
    elif encoder_low == 'svtav1':
        return 'av1'
    elif encoder_low == 'nvencc' or encoder_low == 'qsvencc' or encoder_low == 'vceencc' or encoder_low == 'rkmppenc':
        if 'h.264' in set_low or 'h264' in set_low:
            return 'h264'
        elif 'hevc' in set_low or 'h.265' in set_low or 'h265' in set_low:
            return 'hevc'
        elif 'av1' in set_low:
            return 'av1'
    return None

def cal_vmaf_ffmpeg(encoder, set, value, pipe_required, input, input_res, input_codec, out_ext, decoder, tmp_path):
    output_codec = encoder_to_codec(encoder, set)
    input_decoder_cmd = ''
    output_codec_cmd = ''
    if decoder != None and decoder != 'sw':
        input_decoder_cmd = " -c:v " + input_codec + '_' + decoder
        if output_codec != None:
            output_codec_cmd = " -c:v " + output_codec + '_' + decoder

    if pipe_required == PIPE_RAW_10 or pipe_required == PIPE_Y4M_10:
        input_tmp = 'pipe:0'
        producer_cmd = "\"" + ffmpeg_path + "\" -loglevel error -y" \
            + input_decoder_cmd + " -i \"" + input + "\" -pix_fmt yuv420p10le -strict -1 -an -f yuv4mpegpipe -"
        input_decoder_cmd = ''
    else:
        input_tmp = input
        producer_cmd = None

    crop_required = encoder.lower() == 'vceencc' and output_codec == 'av1'

    # 調べるファイルを最初に入力し、圧縮前の元の動画を2番目に入力する。
    input_w = input_res.split('x')[0]
    input_h = input_res.split('x')[1]
    cmd_crop = "null"
    cmd_psnr = ";[0v][1v]psnr=ts_sync_mode=1"
    cmd_ssim = ";[0v][1v]ssim=ts_sync_mode=1"
    if crop_required:
        cmd_crop = "crop=w=" + input_w + ":h=" + input_h + ":x=0:y=0"
        cmd_psnr = ""
        cmd_ssim = ""

    consumer_cmd = "\"" + ffmpeg_path + "\" -y" \
        + output_codec_cmd  + " -i \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
        + input_decoder_cmd + " -i \"" + input_tmp + "\" " \
        + " -filter_complex \"[0:v]" + cmd_crop + "[0v]" + cmd_psnr + cmd_ssim +";[1:v]null[1v];[0v][1v]libvmaf=n_threads=" + str(vmaf_threads) + ":ts_sync_mode=1\" -an -f null - " \
        + " 2> \"" + tmp_path + "\""

    cmd = (producer_cmd + " | " if producer_cmd else "") + consumer_cmd
    cmd = apply_affinity_prefix(cmd)
    print(cmd)
    # libvmaf=feature=name=float_ssim|name=psnr
    #    + " -filter_complex libvmaf=n_threads=" + str(vmaf_threads) + ":model_path=" + vmaf_model_path + " -an -f null - " \

    try:
        p = subprocess.run(cmd, shell=True)
        ret = p.returncode
    except:
        print("failed to run ffmpeg\n");
        ret = 1

    if crop_required: 
        consumer_cmd2 = "\"" + ffmpeg_path + "\" -y" \
            + output_codec_cmd  + " -i \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
            + input_decoder_cmd + " -i \"" + input_tmp + "\" " \
            + " -filter_complex \"[0:v]" + cmd_crop + "[0v]" + cmd_psnr + cmd_ssim +";[1:v]null[1v];[0v][1v]psnr=ts_sync_mode=1\" -an -f null - " \
            + " 2>> \"" + tmp_path + "\""
        cmd = (producer_cmd + " | " if producer_cmd else "") + consumer_cmd2
        cmd = apply_affinity_prefix(cmd)
        print(cmd)
        try:
            p = subprocess.run(cmd, shell=True)
            ret = p.returncode
        except:
            print("failed to run ffmpeg\n");
            ret = 1

        consumer_cmd3 = "\"" + ffmpeg_path + "\" -y" \
            + output_codec_cmd  + " -i \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
            + input_decoder_cmd + " -i \"" + input_tmp + "\" " \
            + " -filter_complex \"[0:v]" + cmd_crop + "[0v]" + cmd_psnr + cmd_ssim +";[1:v]null[1v];[0v][1v]ssim=ts_sync_mode=1\" -an -f null - " \
            + " 2>> \"" + tmp_path + "\""
        cmd = (producer_cmd + " | " if producer_cmd else "") + consumer_cmd3
        cmd = apply_affinity_prefix(cmd)
        print(cmd)
        try:
            p = subprocess.run(cmd, shell=True)
            ret = p.returncode
        except:
            print("failed to run ffmpeg\n");
            ret = 1

    return ret

def get_vmaf_from_log(tmp_log_path):
    try:
        psnr_mean = 0.0
        ssim_mean = 0.0
        vmaf_mean = 0.0
        float_ms_ssim_mean = 0.0
        with open(tmp_log_path, encoding='utf-8') as log_file:
            for line in log_file:
                if "VMAF score:" in line:
                    r = parse.search("VMAF score: {:f}", line)
                    if r:
                        vmaf_mean = r[0]
                if "SSIM Y" in line and "All:" in line:
                    r = parse.search("SSIM Y:{:f} ({:f}) U:{:f} ({:f}) V:{:f} ({:f}) All:{:f} ({:f})", line[line.find(']')+1:])
                    if r:
                        ssim_mean = r[6]
                elif "PSNR y" in line and "average:" in line and "min:" in line and "max:" in line:
                    r = parse.search("PSNR y:{:f} u:{:f} v:{:f} average:{:f}", line[line.find(']')+1:])
                    if r:
                        psnr_mean = r[3]

        return [psnr_mean, ssim_mean, float_ms_ssim_mean, vmaf_mean]
    except Exception as e:
        print(f"Error reading {tmp_log_path}: {e}")
        print(traceback.format_exc())

def cal_ffvship_ssimulacra2(source_path, encoded_path, tmp_log_path):
    ffvship_dev_cmd = ""
    if ffvship_device > 0:
        ffvship_dev_cmd = " --gpu-id " + str(ffvship_device)
    cmd = apply_affinity_prefix("\"" + ffvship_path + "\" --source \"" + source_path + "\" --encoded \"" + encoded_path + "\"" + ffvship_dev_cmd) + " > \"" + tmp_log_path + "\" 2>&1"
    print(cmd)
    try:
        p = subprocess.run(cmd, shell=True)
        return p.returncode
    except:
        print("failed to run FFVship (SSIMULACRA2)\n")
        return 1

def cal_ffvship_butteraugli(source_path, encoded_path, tmp_log_path):
    ffvship_dev_cmd = ""
    if ffvship_device > 0:
        ffvship_dev_cmd = " --gpu-id " + str(ffvship_device)
    cmd = apply_affinity_prefix("\"" + ffvship_path + "\" --source \"" + source_path + "\" --encoded \"" + encoded_path + "\"" + ffvship_dev_cmd + " -m Butteraugli") + " > \"" + tmp_log_path + "\" 2>&1"
    print(cmd)
    try:
        p = subprocess.run(cmd, shell=True)
        return p.returncode
    except:
        print("failed to run FFVship (Butteraugli)\n")
        return 1

def get_ffvship_ssimulacra2_average(tmp_log_path):
    try:
        in_section = False
        with open(tmp_log_path, encoding='utf-8') as log_file:
            for line in log_file:
                if "SSIMULACRA2" in line:
                    in_section = True
                elif in_section and "Average" in line:
                    try:
                        val = float(line.split(':')[-1].strip())
                        return val
                    except:
                        pass
                elif in_section and len(line.strip()) == 0:
                    in_section = False
    except:
        print("error opening " + tmp_log_path + " file.\n")
        print(traceback.format_exc())
    return 0.0

def get_ffvship_butteraugli_2norm_average(tmp_log_path):
    try:
        in_section = False
        with open(tmp_log_path, encoding='utf-8') as log_file:
            for line in log_file:
                if "2-Norm" in line:
                    in_section = True
                elif in_section and "Average" in line:
                    try:
                        val = float(line.split(':')[-1].strip())
                        return val
                    except:
                        pass
                elif in_section and ("3-Norm" in line or "INF-Norm" in line):
                    in_section = False
    except:
        print("error opening " + tmp_log_path + " file.\n")
        print(traceback.format_exc())
    return 0.0

def copy_tree_with_progress(src_root, dst_root):
    files_to_copy = []
    for root, dirs, files in os.walk(src_root):
        for fname in files:
            files_to_copy.append(os.path.join(root, fname))
    total_files = len(files_to_copy)
    copied_files = 0

    for root, dirs, files in os.walk(src_root):
        rel = os.path.relpath(root, src_root)
        dest_dir = os.path.join(dst_root, rel) if rel != '.' else dst_root
        if not os.path.isdir(dest_dir):
            os.makedirs(dest_dir)
        for fname in files:
            src_path = os.path.join(root, fname)
            dst_path = os.path.join(dest_dir, fname)
            shutil.copy2(src_path, dst_path)
            copied_files += 1
            if total_files > 0:
                # 約2%毎に進捗を表示（最後も必ず表示）
                step = max(1, total_files // 50)
                if copied_files % step == 0 or copied_files == total_files:
                    percent = copied_files * 100.0 / total_files
                    print("copy " + str(copied_files) + "/" + str(total_files) + " (" + "{:.1f}".format(percent) + "%): " + os.path.relpath(src_path, src_root))
        
def extract_frame(encoder, set, value, input, out_ext, target_frames, enable_crop, x, y, w, h):
    out_filename = encoder + "_" + set + "_" + value
    if enable_crop:
        out_filename = out_filename + "_crop"
    out_path = os.path.join(temp_dir, out_filename + "_%04d.png")

    cmd_select= ""
    for frmaeid in target_frames:
        if len(cmd_select) > 0:
            cmd_select = cmd_select + '+'
        cmd_select = cmd_select + 'eq(n\\,' + str(frmaeid) + ')'
    
    cmd_crop = ""
    if enable_crop:
        cmd_crop = ',crop=w=' + str(w) + ':h=' + str(h) + ':x=' + str(x) + ':y=' + str(y)

    cmd = "\"" + ffmpeg_path + "\" -y -i \"" + out_vid_path(encoder, set, value, input, out_ext) + "\"" \
        + " -an -vf select=\'" + cmd_select + "\'" + cmd_crop + " -vsync 0" \
        + " \"" + os.path.join(temp_dir, out_filename + "_" + str(target_frames[0]) + "_%04d.png") + "\" 2> nul"
    print(cmd)

    try:
        p = subprocess.run(cmd, shell=True)
        ret = p.returncode
    except:
        print("failed to run ffmpeg\n");
        ret = 1

    return ret

def write_log(encoder, set, value, bitrate, psnr_y_mean, float_ssim_mean, float_ms_ssim_mean, vmaf_mean, ssimulacra2_avg, butteraugli_2norm_avg, fps, log_path):
    try:
        lock.acquire()
        with open(log_path,'a') as f:
            f.write(encoder + ', ' + set + ', ' + value + ', ' + str(bitrate) + ", " + str(psnr_y_mean) + ", " + str(float_ssim_mean) + ", " + str(float_ms_ssim_mean) + ", " + str(vmaf_mean) + ", " + str(ssimulacra2_avg) + ", " + str(butteraugli_2norm_avg) + ", " + str(fps) + '\n')        
    except:
        print("error opening " + log_path + " file.\n")
        print(traceback.format_exc())
    finally:
        lock.release()
	
def find_unique_timestamp_from_dir(root_dir, prefix):
    # root_dir 配下で prefix に一致するディレクトリを探し、
    # 一意に決まる場合はそのサフィックス(=timestamp)を返す。
    # 見つからない、または複数ある場合はメッセージを出してエラー終了。
    try:
        candidates = [name for name in os.listdir(root_dir) if name.startswith(prefix) and os.path.isdir(os.path.join(root_dir, name))]
    except Exception:
        candidates = []
    if len(candidates) == 1:
        return candidates[0][len(prefix):]
    elif len(candidates) == 0:
        print('Error: no directory matches "' + prefix + '*" under "' + root_dir + '". Specify "-date" or ensure exactly one directory exists.')
        sys.exit(1)
    else:
        print('Error: multiple directories match "' + prefix + '*" under "' + root_dir + '": ' + ", ".join(candidates) + '. Specify "-date" to disambiguate.')
        sys.exit(1)

def get_ssim(encoder, set, value, encoder_path, run_encode, run_vmaf, pipe_required, args, input, input_codec, input_fps, input_res, out_ext, decoder, log_path):
    tmp_filenamebase = "tmp_" + encoder + "_" + set + "_" + value
    tmp_filenamebase = tmp_filenamebase.replace(" ", "_")
    tmp_path = os.path.join(temp_dir, tmp_filenamebase + ".enc.txt")
    enc_ext = ".265" if encoder == 'x265' else out_ext
    enc_ext = ".av1" if encoder == 'svtav1' else enc_ext
    enc_ext = ".266" if encoder == 'VVenC' or encoder == 'vvenc' else enc_ext
    if run_encode:
        run_encoder(encoder, set, value, encoder_path, pipe_required, args, input, enc_ext, tmp_path)

        if enc_ext != out_ext:
            tmp_path_mux = os.path.join(temp_dir, tmp_filenamebase + ".mux.txt")
            run_muxer(encoder, set, value, input, enc_ext, out_ext, input_fps, tmp_path_mux)
            if delete_tmp_files:
                os.remove(out_vid_path(encoder, set, value, input, enc_ext))

        #extract_frame(encoder, set, value, input, out_ext, [ 768, 1747 ], False,   0,   0,   0,   0)
        #extract_frame(encoder, set, value, input, out_ext, [ 768 ],       True,  320,   0, 480, 360)
        #extract_frame(encoder, set, value, input, out_ext, [ 1747 ],      True,  640, 180, 480, 360)

    if run_vmaf:
        #cal_ssim_ffmpeg(encoder, set, value, pipe_required, input, input_res, out_ext, tmp_path)
        #ssim = get_ssim_from_log(tmp_path)
        
        bitrate = get_bitrate_from_log(tmp_path)
        fps = get_fps_from_log(tmp_path)
        print("bitrate: " + bitrate + " fps: " + fps)

        tmp_path_vmaf = os.path.join(temp_dir, tmp_filenamebase + ".vmaf.txt")
        #cal_vmaf_ffmpeg(encoder, set, value, pipe_required, input, input_res, input_codec, out_ext, decoder, tmp_path_vmaf, tmp_filenamebase + ".json")
        #psnr_y_mean, float_ssim_mean, float_ms_ssim_mean, vmaf_mean = get_vmaf_from_log(tmp_path_vmaf, tmp_filenamebase + ".json")
        if os.path.isfile(tmp_path_vmaf):
            psnr_y_mean, float_ssim_mean, float_ms_ssim_mean, vmaf_mean = get_vmaf_from_log(tmp_path_vmaf)
            if psnr_y_mean <= 0.0: # 値が取れなかった
                os.remove(tmp_path_vmaf)
        if not os.path.isfile(tmp_path_vmaf):
            cal_vmaf_ffmpeg(encoder, set, value, pipe_required, input, input_res, input_codec, out_ext, decoder, tmp_path_vmaf)
        psnr_y_mean, float_ssim_mean, float_ms_ssim_mean, vmaf_mean = get_vmaf_from_log(tmp_path_vmaf)
        #vmaf = 0

        # Run FFVship metrics
        encoded_path = out_vid_path(encoder, set, value, input, out_ext)
        tmp_path_ffvship_ssimu2 = os.path.join(temp_dir, tmp_filenamebase + ".ffvship_ssimu2.txt")
        tmp_path_ffvship_butter = os.path.join(temp_dir, tmp_filenamebase + ".ffvship_butter.txt")
        if not os.path.isfile(tmp_path_ffvship_ssimu2):
            cal_ffvship_ssimulacra2(input, encoded_path, tmp_path_ffvship_ssimu2)
        if not os.path.isfile(tmp_path_ffvship_butter):
            cal_ffvship_butteraugli(input, encoded_path, tmp_path_ffvship_butter)
        ssimulacra2_avg = get_ffvship_ssimulacra2_average(tmp_path_ffvship_ssimu2)
        butteraugli_2norm_avg = get_ffvship_butteraugli_2norm_average(tmp_path_ffvship_butter)

        write_log(encoder, set, value, bitrate, psnr_y_mean, float_ssim_mean, float_ms_ssim_mean, vmaf_mean, ssimulacra2_avg, butteraugli_2norm_avg, fps, log_path)
        if delete_tmp_files:
            os.remove(out_vid_path(encoder, set, value, input, out_ext))
            os.remove(tmp_path_vmaf)
            if os.path.isfile(tmp_path_ffvship_ssimu2):
                os.remove(tmp_path_ffvship_ssimu2)
            if os.path.isfile(tmp_path_ffvship_butter):
                os.remove(tmp_path_ffvship_butter)

def get_qual_list(encoder, codec, test_qual_list, qual_min, qual_max, qual_step):
    if not test_qual_list is None:
        return test_qual_list
    
    if encoder == 'svtav1':
        qual_min_default = 18
        qual_max_default = 62
        qual_step_default = 6
    elif encoder == 'vvenc':
        qual_min_default = 20
        qual_max_default = 38
        qual_step_default = 4
    elif encoder == 'nvenc':
        if 'AV1' in codec:
            qual_min_default = 16
            qual_max_default = 55
            qual_step_default = 6
        else:
            qual_min_default = 16
            qual_max_default = 44
            qual_step_default = 4
    elif encoder == 'vceenc':
        qual_min_default = 14
        qual_max_default = 52
        qual_step_default = 6
    else:
        qual_min_default = 16
        qual_max_default = 44
        qual_step_default = 4

    if qual_min < 0:
        qual_min = qual_min_default
    if qual_max < 0:
        qual_max = qual_max_default
    if qual_step < 0:
        qual_step = qual_step_default
    return list(range(qual_min, qual_max, qual_step))

if __name__ == '__main__':
    computer_name = os.environ.get("COMPUTERNAME")
    print(sys.version_info)
    
    vmaf_threads = os.cpu_count()
    print("threads " + str(vmaf_threads))

    target = 1
    test_speed = 1
    run_encode = True
    run_vmaf = True
    iarg = 0
    device = 0
    out_dir = None
    check_speed_only = False
    sleep_after_run = False
    option_qual_list = None
    qual_min = -1
    qual_max = -1
    qual_step = -1
    bitrate_min  = None
    bitrate_max  = None
    bitrate_step = None
    svtav1_preset = [ 3, 5, 7, 10 ]
    enc_preset_quality = True
    enc_preset_normal = True
    decoder = None
    extra_options = ""
    timestamp_str = None
    while iarg < len(sys.argv):
        if sys.argv[iarg] == "-sleep":
            sleep_after_run = True
            print("sleep_after_run")
        elif sys.argv[iarg] == "-affinity":
            iarg=iarg+1
            affinity_mask = sys.argv[iarg]
            print("affinity:" + affinity_mask)
        elif sys.argv[iarg] == "-speed":
            check_speed_only = True
            print("check_speed_only")
        elif sys.argv[iarg] == "-mode":
            iarg=iarg+1
            run_encode = False
            run_vmaf = False
            for mode in sys.argv[iarg].split(','):
                if mode == 'enc' or mode == 'encode':
                    run_encode = True
                if mode == 'vmaf':
                    run_vmaf = True
            print("mode: run encode " + str(run_encode) + ' / vmaf ' + str(run_vmaf))
        elif sys.argv[iarg] == "-decoder":
            iarg=iarg+1
            decoder = sys.argv[iarg]
            print("decoder:" + decoder)
        elif sys.argv[iarg] == "-ffvship":
            iarg=iarg+1
            vendor = sys.argv[iarg].lower()
            vendor_id = 0
            if len(vendor.split(':')) > 1:
                ffvship_device = int(vendor.split(':')[1])
                vendor = vendor.split(':')[0]
            if vendor in ('nvidia', 'nv', 'cuda'):
                ffvship_path = ffvship_nvidia_path
                print("ffvship:nvidia:" + str(ffvship_device))
            elif vendor in ('amd', 'radeon'):
                ffvship_path = ffvship_amd_path
                print("ffvship:amd:" + str(ffvship_device))
            else:
                ffvship_path = ffvship_nvidia_path
                print("ffvship:unknown vendor '" + vendor + "', use default nvidia")
        elif sys.argv[iarg] == "-x264":
            test_x264 = True
            print("x264")
        elif sys.argv[iarg] == "-x265":
            test_x265 = True
            print("x265")
        elif sys.argv[iarg] == "-svtav1":
            test_svtav1 = True
            print("svtav1")
        elif sys.argv[iarg] == "-svtav1-preset":
            iarg=iarg+1
            svtav1_preset = []
            for preset in sys.argv[iarg].split(','):
                svtav1_preset.append(int(preset))
            print("svtav1-preset: " + str(svtav1_preset))
        elif sys.argv[iarg] == "-svtav1-pmax":
            iarg=iarg+1
            svtav1_Pmax = int(sys.argv[iarg])
            print("svtav1_Pmax:" + str(svtav1_Pmax))
        elif sys.argv[iarg] == "-svtav1-pstep":
            iarg=iarg+1
            svtav1_Pstep = int(sys.argv[iarg])
            print("svtav1_Pstep:" + str(svtav1_Pstep))
        elif sys.argv[iarg] == "-vvenc":
            test_vvenc_qp = True
            test_vvenc_vbr = True
            print("vvenc")
        elif sys.argv[iarg] == "-vvenc-crf":
            test_vvenc_qp = True
            print("vvenc-qp")
        elif sys.argv[iarg] == "-vvenc-vbr":
            test_vvenc_vbr = True
            print("vvenc-vbr")
        elif sys.argv[iarg] == "-nvenc":
            test_nvenc_h264 = True
            test_nvenc_hevc = True
            print("nvenc")
        elif sys.argv[iarg] == "-nvenc-h264":
            test_nvenc_h264 = True
            print("nvenc-h264")
        elif sys.argv[iarg] == "-nvenc-h264-vbr":
            test_nvenc_h264_vbr = True
            print("nvenc-h264-vbr")
        elif sys.argv[iarg] == "-nvenc-hevc":
            test_nvenc_hevc = True
            print("nvenc-hevc")
        elif sys.argv[iarg] == "-nvenc-hevc-vbr":
            test_nvenc_hevc_vbr = True
            print("nvenc-hevc-vbr")
        elif sys.argv[iarg] == "-nvenc-av1":
            test_nvenc_av1 = True
            print("nvenc-av1")
        elif sys.argv[iarg] == "-nvenc-av1-vbr":
            test_nvenc_av1_vbr = True
            print("nvenc-av1-vbr")
        elif sys.argv[iarg] == "-qsvenc" or sys.argv[iarg] == "-qsvenc-ff":
            test_qsvenc_h264 = True
            test_qsvenc_hevc = True
            print("qsvenc_h264")
            print("qsvenc_hevc")
        elif sys.argv[iarg] == "-qsvenc-h264" or sys.argv[iarg] == "-qsvenc-h264-ff":
            test_qsvenc_h264 = True
            print("qsvenc_h264")
        elif sys.argv[iarg] == "-qsvenc-h264-vbr" or sys.argv[iarg] == "-qsvenc-h264-vbr-ff":
            test_qsvenc_h264_vbr = True
            print("qsvenc_h264_vbr")
        elif sys.argv[iarg] == "-qsvenc-hevc" or sys.argv[iarg] == "-qsvenc-hevc-ff":
            test_qsvenc_hevc = True
            print("qsvenc_hevc")
        elif sys.argv[iarg] == "-qsvenc-hevc-vbr" or sys.argv[iarg] == "-qsvenc-hevc-vbr-ff":
            test_qsvenc_hevc_vbr = True
            print("qsvenc_hevc_vbr")
        elif sys.argv[iarg] == "-qsvenc-av1" or sys.argv[iarg] == "-qsvenc-av1-ff":
            test_qsvenc_av1 = True
            print("qsvenc_av1")
        elif sys.argv[iarg] == "-qsvenc-av1-vbr" or sys.argv[iarg] == "-qsvenc-av1-vbr-ff":
            test_qsvenc_av1_vbr = True
            print("qsvenc_av1_vbr")
        elif sys.argv[iarg] == "-qsvenc-avsw":
            # 既存オプションとの互換性維持: -qsvenc-avsw は「常に --avsw」を意味する
            test_qsvenc_avsw = HWENC_AVSW_ALL
            print("qsvenc_avsw: all")
        elif sys.argv[iarg] == "-hwenc-avsw":
            # 全 hwenc 向け avsw モード指定: -hwenc-avsw none|10bit|all
            iarg = iarg + 1
            if iarg >= len(sys.argv):
                print("Error: -hwenc-avsw requires an argument: none|10bit|all")
                sys.exit(1)
            mode = sys.argv[iarg].lower()
            if mode in ("none", "off", "0"):
                test_qsvenc_avsw = HWENC_AVSW_NONE
                print("hwenc_avsw: none")
            elif mode in ("10bit", "10"):
                test_qsvenc_avsw = HWENC_AVSW_10BIT
                print("hwenc_avsw: 10bit only")
            elif mode in ("all", "on", "1"):
                test_qsvenc_avsw = HWENC_AVSW_ALL
                print("hwenc_avsw: all")
            else:
                print("Error: unknown -hwenc-avsw mode '" + mode + "'. Use none|10bit|all.")
                sys.exit(1)
        elif sys.argv[iarg] == "-qsvenc-vp9":
            test_qsvenc_vp9 = True
            print("qsvenc_vp9")
        elif sys.argv[iarg] == "-qsvenc-vp9-cqp":
            test_qsvenc_vp9_cqp = True
            print("qsvenc_vp9_cqp")
        elif sys.argv[iarg] == "-qsvenc-vp9-vbr":
            test_qsvenc_vp9_vbr = True
            print("qsvenc_vp9_vbr")
        elif sys.argv[iarg] == "-vceenc-qvbr":
            test_vce_h264_qvbr = True
            test_vce_hevc_qvbr = True
            test_vce_av1_qvbr = True
            print("vceenc")
        elif sys.argv[iarg] == "-vceenc-vbr":
            test_vce_h264_vbr = True
            test_vce_hevc_vbr = True
            test_vce_av1_vbr = True
            print("vceenc vbr")
        elif sys.argv[iarg] == "-vceenc-cqp":
            test_vce_cqp = True
            print("vce_cqp")
        elif sys.argv[iarg] == "-vceenc-h264-vbr":
            test_vce_h264_vbr = True
            print("vce_h264_vbr")
        elif sys.argv[iarg] == "-vceenc-hevc-vbr":
            test_vce_hevc_vbr = True
            print("vce_hevc_vbr")
        elif sys.argv[iarg] == "-vceenc-av1-vbr":
            test_vce_av1_vbr = True
            print("vce_av1_vbr")
        elif sys.argv[iarg] == "-vceenc-h264-qvbr":
            test_vce_h264_qvbr = True
            print("vce_h264_qvbr")
        elif sys.argv[iarg] == "-vceenc-hevc-qvbr":
            test_vce_hevc_qvbr = True
            print("vce_hevc_qvbr")
        elif sys.argv[iarg] == "-vceenc-av1-qvbr":
            test_vce_av1_qvbr = True
            print("vce_av1_qvbr")
        elif sys.argv[iarg] == "-ffmpeg-vp9":
            test_ffmpeg_vp9_crf = True
            test_ffmpeg_vp9_vbr = True
            print("ffmpeg-vp9")
        elif sys.argv[iarg] == "-ffmpeg-vp9-crf":
            test_ffmpeg_vp9_crf = True
            print("ffmpeg-vp9-crf")
        elif sys.argv[iarg] == "-ffmpeg-vp9-vbr":
            test_ffmpeg_vp9_vbr = True
            print("ffmpeg-vp9-vbr")
        elif sys.argv[iarg] == "-vceenc-disable-qvbr-pa":
            vce_disable_qvbr_pa = True
            print("vce_disable_qvbr_pa")
        elif sys.argv[iarg] == "-vceenc-disable-10bit":
            vce_disable_10bit = True
            print("vce_disable_10bit")
        elif sys.argv[iarg] == "-outdir":
            iarg=iarg+1
            out_dir = sys.argv[iarg]
            print("outdir:" + out_dir)
        elif sys.argv[iarg] == "-temp":
            iarg=iarg+1
            temp_dir = sys.argv[iarg]
            print("temp:" + temp_dir)
        elif sys.argv[iarg] == "-target":
            iarg=iarg+1
            target = int(sys.argv[iarg])
            print("target:" + str(target))
        elif sys.argv[iarg] == "-process":
            iarg=iarg+1
            process = int(sys.argv[iarg])
            print("process:" + str(process))
        elif sys.argv[iarg] == "-device":
            iarg=iarg+1
            device = int(sys.argv[iarg])
            print("device:" + str(device))
        elif sys.argv[iarg] == "-qual-list":
            iarg=iarg+1
            option_qual_list = []
            for qval in sys.argv[iarg].split(','):
                option_qual_list.append(int(qval))
            print("qual-list:" + str(option_qual_list))
        elif sys.argv[iarg] == "-qual-min":
            iarg=iarg+1
            qual_min = int(sys.argv[iarg])
            print("qual_min:" + str(qual_min))
        elif sys.argv[iarg] == "-qual-max":
            iarg=iarg+1
            qual_max = int(sys.argv[iarg])
            print("qual_max:" + str(qual_max))
        elif sys.argv[iarg] == "-qual-step":
            iarg=iarg+1
            qual_step = int(sys.argv[iarg])
            print("qual_step:" + str(qual_step))
        elif sys.argv[iarg] == "-bitrate-min":
            iarg=iarg+1
            bitrate_min = int(sys.argv[iarg])
            print("bitrate_min:" + str(bitrate_min))
        elif sys.argv[iarg] == "-bitrate-max":
            iarg=iarg+1
            bitrate_max = int(sys.argv[iarg])
            print("bitrate_max:" + str(bitrate_max))
        elif sys.argv[iarg] == "-bitrate-step":
            iarg=iarg+1
            bitrate_step = int(sys.argv[iarg])
            print("bitrate_step:" + str(bitrate_step))
        elif sys.argv[iarg] == "-enc-preset":
            iarg=iarg+1
            enc_preset_quality = False
            enc_preset_normal = False
            for preset in sys.argv[iarg].split(','):
                if preset == 'quality':
                    enc_preset_quality = True
                if preset == 'normal':
                    enc_preset_normal = True
            print("enc-preset: quality " + str(enc_preset_quality) + ' / normal ' + str(enc_preset_normal))
        elif sys.argv[iarg] == "-extra-opt":
            iarg=iarg+1
            extra_options = sys.argv[iarg]
            print("extra_options:" + extra_options)
        elif sys.argv[iarg] == "-vmaf-threads":
            iarg=iarg+1
            vmaf_threads = int(sys.argv[iarg])
            print("threads " + str(vmaf_threads))
        elif sys.argv[iarg] == "-date":
            iarg=iarg+1
            timestamp_str = sys.argv[iarg]
            print("date:" + timestamp_str)
        iarg=iarg+1
        
    input_fps=""
    input_res=""
    input_codec_8bit=""
    input_codec_10bit=""
    now = datetime.datetime.now()
    if timestamp_str is None:
        if run_vmaf and not run_encode:
            prefix = 'ssim_' if target == 1 else 'ssim2_' if target == 2 else 'ssim_'
            timestamp_str = find_unique_timestamp_from_dir(temp_dir, prefix)
        else:
            timestamp_str = now.strftime("%Y%m%d_%H%M%S")
    if target == 1:
        temp_dir=os.path.join(temp_dir, f'ssim_{timestamp_str}')
        source_file=source_file_1
        source_file_10bit=source_file_1_10bit
        input_fps=input_fps_1
        input_res=input_res_1
        input_codec_8bit=input_codec_1_8bit
        input_codec_10bit=input_codec_1_10bit
    elif target == 2:
        temp_dir=os.path.join(temp_dir, f'ssim2_{timestamp_str}')
        source_file=source_file_2
        source_file_10bit=source_file_2_10bit
        input_fps=input_fps_2
        input_res=input_res_2
        input_codec_8bit=input_codec_2_8bit
        input_codec_10bit=input_codec_2_10bit

    input_file = source_file
    input_file_10 = source_file_10bit
    
    if not bitrate_step is None:
        test_bitrate_list = list(range(bitrate_min, bitrate_max, bitrate_step))
    else:
        test_bitrate_list = [ 400, 800, 1200, 2000, 4000, 7000 ]

    if not os.path.isdir(temp_dir):
        os.makedirs(temp_dir)
    
    # if not os.path.isfile(input_file):
        # cmd = "\"" + ffmpeg_path + "\" -i \"" + source_file + "\" -pix_fmt yuv420p -strict -1 -an -f yuv4mpegpipe \"" + input_file + "\""
        # try:
            # p = subprocess.run(cmd, shell=True)
            # ret = p.returncode
        # except:
            # ret = 1
    
    # if not os.path.isfile(input_file_10):
        # cmd = "\"" + ffmpeg_path + "\" -i \"" + source_file + "\" -pix_fmt yuv420p10le -strict -1 -an -f yuv4mpegpipe \"" + input_file_10 + "\""
        # try:
            # p = subprocess.run(cmd, shell=True)
            # ret = p.returncode
        # except:
            # ret = 1

    log_date = now.strftime('%Y%m%d_%H%M%S')
    log_name = "ssim" + str(target) + "_log_" + os.environ['COMPUTERNAME'] + ".txt"
    log_path = os.path.join(temp_dir, log_name)
    print('log name: ' + log_name) 

    if test_x264:
        test_qual_list = get_qual_list('x264', 'H.264', option_qual_list, qual_min, qual_max, qual_step)
        if enc_preset_normal:
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x264', 'medium crf', str(crf), x264_path, run_encode, run_vmaf, PIPE_Y4M_8, '--demuxer y4m --crf ' + str(crf) + ' ' + extra_options, input_file, input_codec_8bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

        if enc_preset_quality:
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x264', 'veryslow crf', str(crf), x264_path, run_encode, run_vmaf, PIPE_Y4M_8, '--demuxer y4m --preset veryslow --crf ' + str(crf) + ' ' + extra_options, input_file, input_codec_8bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

    if test_x265:
        test_qual_list = get_qual_list('x265', 'H.265', option_qual_list, qual_min, qual_max, qual_step)
        if enc_preset_normal:
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x265', 'medium crf', str(crf), x265_path, run_encode, run_vmaf, PIPE_Y4M_8, '--y4m --crf ' + str(crf) + ' ' + extra_options + ' --input ', input_file, input_codec_8bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x265', 'medium 10bit crf', str(crf), x265_path, run_encode, run_vmaf, PIPE_Y4M_10, '--y4m --input-depth 10 --output-depth 10 --crf ' + str(crf) + ' ' + extra_options + ' --input ', input_file_10, input_codec_10bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

        if enc_preset_quality:
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x265', 'veryslow crf', str(crf), x265_path, run_encode, run_vmaf, PIPE_Y4M_8, '--y4m --preset veryslow --crf ' + str(crf) + ' ' + extra_options, input_file, input_codec_8bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('x265', 'veryslow 10bit crf', str(crf), x265_path, run_encode, run_vmaf, PIPE_Y4M_10, '--y4m --input-depth 10 --output-depth 10 --preset veryslow --crf ' + str(crf) + ' ' + extra_options, input_file_10, input_codec_10bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

    if test_svtav1:
        test_qual_list = get_qual_list('svtav1', 'AV1', option_qual_list, qual_min, qual_max, qual_step)
        for ipreset in svtav1_preset:
            input_frame_info = '-w ' + input_res.split('x')[0] + ' -h ' + input_res.split('x')[1] \
                + ' --fps-num ' + input_fps.split('/')[0] + ' --fps-denom ' \
                + input_fps.split('/')[1] + ' --progress 2 ' \
                + ' --preset ' + str(ipreset)  + ' --scd 1 ' \
                + extra_options

            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('svtav1', '8bit_preset_' + str(ipreset), str(crf), svtav1_path, run_encode, run_vmaf, PIPE_RAW_8, input_frame_info + ' --crf ' + str(crf) + ' ' + extra_options + ' -i ', input_file, input_codec_8bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('svtav1', '10bit_preset_' + str(ipreset), str(crf), svtav1_path, run_encode, run_vmaf, PIPE_RAW_10, input_frame_info + ' --input-depth 10 --crf ' + str(crf) + ' -i ', input_file_10, input_codec_10bit, input_fps, input_res, ".mp4", decoder, log_path) \
                for crf in test_qual_list])

    # ====================================================================================================================================================================================================================
    # ---- ffmpeg (libvpx-vp9) -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # ====================================================================================================================================================================================================================
    if test_ffmpeg_vp9_crf or test_ffmpeg_vp9_vbr:
        test_qual_list = get_qual_list('libvpx-vp9', 'VP9', option_qual_list, qual_min, qual_max, qual_step)
        vp9_cpu_used_list = [ 0, 3 ]
        for cpu_used in vp9_cpu_used_list:
            if test_ffmpeg_vp9_crf:
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('libvpx-vp9', 'cpu' + str(cpu_used) + ' crf', str(crf), ffmpeg_path, run_encode, run_vmaf, PIPE_NONE,
                                              '-c:v libvpx-vp9 -row-mt 1 -deadline good -g 300 -cpu-used ' + str(cpu_used) + ' -crf ' + str(crf) + ' -b:v 0 -an -pix_fmt yuv420p ' + extra_options,
                                              input_file, input_codec_8bit, input_fps, input_res, ".webm", None, log_path) \
                    for crf in test_qual_list])
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('libvpx-vp9', 'cpu' + str(cpu_used) + ' 10bit crf', str(crf), ffmpeg_path, run_encode, run_vmaf, PIPE_NONE,
                                              '-c:v libvpx-vp9 -row-mt 1 -deadline good -g 300 -cpu-used ' + str(cpu_used) + ' -crf ' + str(crf) + ' -b:v 0 -an -pix_fmt yuv420p10le -profile:v 2 ' + extra_options,
                                              input_file_10, input_codec_10bit, input_fps, input_res, ".webm", None, log_path) \
                    for crf in test_qual_list])
            if test_ffmpeg_vp9_vbr:
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('libvpx-vp9', 'cpu' + str(cpu_used) + ' vbr', str(bitrate), ffmpeg_path, run_encode, run_vmaf, PIPE_NONE,
                                              '-c:v libvpx-vp9 -row-mt 1 -deadline good -g 300 -cpu-used ' + str(cpu_used) + ' -b:v ' + str(bitrate) + 'k -an -pix_fmt yuv420p ' + extra_options,
                                              input_file, input_codec_8bit, input_fps, input_res, ".webm", None, log_path) \
                    for bitrate in test_bitrate_list])
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('libvpx-vp9', 'cpu' + str(cpu_used) + ' 10bit vbr', str(bitrate), ffmpeg_path, run_encode, run_vmaf, PIPE_NONE,
                                              '-c:v libvpx-vp9 -row-mt 1 -deadline good -g 300 -cpu-used ' + str(cpu_used) + ' -b:v ' + str(bitrate) + 'k -an -pix_fmt yuv420p10le -profile:v 2 ' + extra_options,
                                              input_file_10, input_codec_10bit, input_fps, input_res, ".webm", None, log_path) \
                    for bitrate in test_bitrate_list])

    # ====================================================================================================================================================================================================================
    # ---- VVenC (VVC / H.266) --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # ====================================================================================================================================================================================================================
    if test_vvenc_qp or test_vvenc_vbr:
        test_qual_list = get_qual_list('vvenc', 'VVC', option_qual_list, qual_min, qual_max, qual_step)
        vvenc_presets = [ 'faster', 'medium' ]
        for vpreset in vvenc_presets:
            input_frame_info = ' -s ' + input_res.split('x')[0] + 'x' + input_res.split('x')[1] \
                + ' --framerate ' + input_fps.split('/')[0] + ' --framescale ' + input_fps.split('/')[1] \
                + ' --preset ' + str(vpreset) \
                + extra_options
            if test_vvenc_qp:
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('VVenC', '10bit_preset_' + vpreset, str(qp), vvenc_path, run_encode, run_vmaf, PIPE_RAW_10,
                                              '-c yuv420_10 ' + input_frame_info + ' --refreshsec 5 --qp ' + str(qp) + ' --qpa 1 ' + extra_options + ' -i ',
                                              input_file_10, input_codec_10bit, input_fps, input_res, ".mp4", None, log_path) \
                    for qp in test_qual_list])
            if test_vvenc_vbr:
                joblib.Parallel(n_jobs=process, backend='threading')( \
                    [joblib.delayed(get_ssim)('VVenC', '10bit_preset_' + vpreset + ' VBR', str(bitrate), vvenc_path, run_encode, run_vmaf, PIPE_RAW_10,
                                              '-c yuv420_10 ' + input_frame_info + ' --refreshsec 5 -p 1 -b ' + str(bitrate) + 'k -m 2x ' + extra_options + ' -i ',
                                              input_file_10, input_codec_10bit, input_fps, input_res, ".mp4", None, log_path) \
                    for bitrate in test_bitrate_list])

    # ====================================================================================================================================================================================================================
    # ---- NVEnc ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # ====================================================================================================================================================================================================================
    enc_opt_common  = ' -d ' + str(device) + ' '
    enc_opt_quality = ' --preset quality --multipass 2pass-full --lookahead 32 --weightp --bref-mode each '
    enc_opt_quality_hevc_av1 = ' --tune uhq '
    enc_opt_normal  = ' '
    enc_opt_h264    = ' -c h264 -b 3 --level 5.1 '
    enc_opt_hevc    = ' -c hevc -b 8 --level 6 '
    enc_opt_hevc_10 = ' -c hevc -b 8 --level 6  --output-depth 10 --profile main10 '
    enc_opt_av1     = ' -c av1 -b 7 --max-bitrate 60000 '
    enc_opt_av1_10  = ' -c av1 -b 7 --max-bitrate 60000 --output-depth 10 '
    # ---- NVEnc qvbr --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_nvenc_h264:
        enc_codec_list['H.264']       = enc_opt_h264
    if test_nvenc_hevc:
        enc_codec_list['HEVC']        = enc_opt_hevc
        enc_codec_list['HEVC 10bit']  = enc_opt_hevc_10
    if test_nvenc_av1:
        enc_codec_list['AV1']         = enc_opt_av1
        enc_codec_list['AV1 10bit']   = enc_opt_av1_10

    enc_preset_list = dict()
    if enc_preset_quality:
        enc_preset_list[ 'quality' ] = enc_opt_quality
    if enc_preset_normal:
        enc_preset_list[ 'normal'  ] = enc_opt_normal

    decoder_nvenc = decoder if decoder != None else 'cuvid'

    for codec, enc_opt_codec in enc_codec_list.items():
        test_qual_list = get_qual_list('nvenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        is_10bit = '10bit' in codec
        for preset, enc_opt_preset in enc_preset_list.items():
            input_codec = input_codec_10bit if is_10bit else input_codec_8bit
            enc_opt_preset_job = enc_opt_preset
            if codec == 'HEVC' or codec == 'AV1':
                enc_opt_preset_job += enc_opt_quality_hevc_av1
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('NVEncC', codec + ' ' + preset, str(vbrq), NVEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset_job + ' --qvbr ' + str(vbrq) + ' ' + extra_options + ' -i ', \
                                          input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder_nvenc, log_path) \
                for vbrq in test_qual_list])

    # ---- NVEnc vbr --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_nvenc_h264_vbr:
        enc_codec_list['VBR H.264']       = enc_opt_h264
    if test_nvenc_hevc_vbr:
        enc_codec_list['VBR HEVC']        = enc_opt_hevc
        enc_codec_list['VBR HEVC 10bit']  = enc_opt_hevc_10
    if test_nvenc_av1_vbr:
        enc_codec_list['VBR AV1']         = enc_opt_av1
        enc_codec_list['VBR AV1 10bit']   = enc_opt_av1_10

    enc_preset_list = dict()
    if enc_preset_quality:
        enc_preset_list[ 'quality' ] = enc_opt_quality
    if enc_preset_normal:
        enc_preset_list[ 'normal'  ] = enc_opt_normal

    for codec, enc_opt_codec in enc_codec_list.items():
        is_10bit = '10bit' in codec
        input_codec = input_codec_10bit if is_10bit else input_codec_8bit
        test_qual_list = get_qual_list('nvenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        for preset, enc_opt_preset in enc_preset_list.items():
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('NVEncC', codec + ' ' + preset, str(bitrate), NVEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset + ' --vbr ' + str(bitrate) + ' ' + extra_options + ' -i ', \
                                          input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder_nvenc, log_path) \
                for bitrate in test_bitrate_list])

    # ====================================================================================================================================================================================================================
    # ---- QSVEnc --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # ====================================================================================================================================================================================================================
    enc_opt_common  = ' -d ' + str(device) + ' '
    enc_opt_quality = ' -u 1 --extbrc --mbbrc --scenario-info game_streaming --tune perceptual --i-adapt --b-adapt --b-pyramid --weightp --weightb --adapt-ref --adapt-ltr --adapt-cqm '
    enc_opt_quality_hevc = ' -b 8 --la-depth 60 --la-quality slow '
    enc_opt_quality_av1 = ' --gop-ref-dist 8 '
    enc_opt_normal  = ' -u 4 '
    enc_opt_h264    = ' -c h264 --level 5.1 '
    enc_opt_hevc    = ' -c hevc --level 6 --max-bitrate 60000 '
    enc_opt_hevc_10 = ' -c hevc --level 6 --max-bitrate 60000  --output-depth 10 --profile main10 '
    enc_opt_av1     = ' -c av1 --max-bitrate 60000 '
    enc_opt_av1_10  = ' -c av1 --max-bitrate 60000 --output-depth 10 '
    enc_opt_vp9     = ' -c vp9 '
    enc_opt_vbr_la  = ' --vbr '
    # ---- QSVEnc icq --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_qsvenc_h264:
        enc_codec_list['H.264']          = enc_opt_h264
    if test_qsvenc_hevc:
        enc_codec_list['HEVC']           = enc_opt_hevc
        enc_codec_list['HEVC 10bit']     = enc_opt_hevc_10
    if test_qsvenc_av1:
        enc_codec_list['AV1']            = enc_opt_av1
        enc_codec_list['AV1 10bit']      = enc_opt_av1_10

    enc_preset_list = dict()
    if enc_preset_quality:
        enc_preset_list[ 'quality' ] = enc_opt_quality
    if enc_preset_normal:
        enc_preset_list[ 'normal' ]  = enc_opt_normal

    decoder_qsv = decoder if decoder != None else 'qsv'

    for codec, enc_opt_codec in enc_codec_list.items():
        is_10bit = '10bit' in codec
        input_codec = input_codec_10bit if is_10bit else input_codec_8bit
        test_qual_list = get_qual_list('qsvenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        for preset, enc_opt_preset in enc_preset_list.items():
            enc_opt_preset_job = enc_opt_preset
            if preset == 'quality':
                if codec == 'AV1':
                    enc_opt_preset_job += enc_opt_quality_av1
                elif codec == 'HEVC':
                    enc_opt_preset_job += enc_opt_quality_hevc
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('QSVEncC', codec + ' ' + preset, str(vbrq), QSVEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset_job + ' --icq ' + str(vbrq) + ' ' + extra_options + ' -i ', \
                                          input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder_qsv, log_path) \
                for vbrq in test_qual_list])

    # ---- QSVEnc vbr --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_qsvenc_h264_vbr:
        enc_codec_list['VBR H.264']          = enc_opt_h264
    if test_qsvenc_hevc_vbr:
        enc_codec_list['VBR HEVC']           = enc_opt_hevc
        enc_codec_list['VBR HEVC 10bit']     = enc_opt_hevc_10
    if test_qsvenc_av1_vbr:
        enc_codec_list['VBR AV1']            = enc_opt_av1
        enc_codec_list['VBR AV1 10bit']      = enc_opt_av1_10
    if test_qsvenc_vp9:
        enc_codec_list['VBR VP9 FF']         = enc_opt_vp9

    enc_preset_list = dict()
    if enc_preset_quality:
        enc_preset_list[ 'quality' ] = enc_opt_quality
    if enc_preset_normal:
        enc_preset_list[ 'normal' ]  = enc_opt_normal

    for codec, enc_opt_codec in enc_codec_list.items():
        is_10bit = '10bit' in codec
        input_codec = input_codec_10bit if is_10bit else input_codec_8bit
        test_qual_list = get_qual_list('qsvenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        for preset, enc_opt_preset in enc_preset_list.items():
            enc_opt_preset_job = enc_opt_preset
            if preset == 'quality':
                if codec == 'AV1':
                    enc_opt_preset_job += enc_opt_quality_av1
                elif codec == 'HEVC':
                    enc_opt_preset_job += enc_opt_quality_hevc
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('QSVEncC', codec + ' ' + preset, str(bitrate), QSVEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset_job + enc_opt_vbr_la + str(bitrate) + ' ' + extra_options + ' -i ', \
                                            input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder, log_path) \
                for bitrate in test_bitrate_list])

    # ====================================================================================================================================================================================================================
    # ---- VCEEnc --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # ====================================================================================================================================================================================================================
    enc_opt_common  = ' -d ' + str(device) + ' ' + extra_options + ' '
    enc_opt_quality_av1 = ' -u slower'
    enc_opt_quality     = ' -u slower'
    if not vce_disable_qvbr_pa:
        enc_opt_quality_av1 += ' --screen-content-tools palette-mode=on,force-integer-mv=off --aq-mode none --pa lookahead=32,taq=2,paq=caq'
        enc_opt_quality     += ' --pa lookahead=32,taq=2,paq=caq'
    enc_opt_normal  = ' '
    enc_opt_h264    = ' -c h264 --level 5.1 --max-bitrate 60000 -b 3 --b-pyramid'
    enc_opt_hevc    = ' -c hevc --level 6 --max-bitrate 60000 '
    enc_opt_hevc_10 = ' -c hevc --level 6 --max-bitrate 60000 --output-depth 10 --profile main10 '
    enc_opt_av1     = ' -c av1 --max-bitrate 60000 '
    enc_opt_av1_10  = ' -c av1 --max-bitrate 60000 --output-depth 10 '
    # ---- VCEEnc qvbr --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_vce_h264_qvbr:
        enc_codec_list['H.264'] = enc_opt_h264 + (' --pa lookahead=32,paq=caq' if not vce_disable_qvbr_pa else '')
    if test_vce_hevc_qvbr:
        enc_codec_list['HEVC'] = enc_opt_hevc + (' --pa lookahead=32,paq=caq' if not vce_disable_qvbr_pa else '')
        #if not vce_disable_10bit:
        #    enc_codec_list['HEVC 10bit'] = enc_opt_hevc_10 + (' --pa lookahead=32,paq=caq' if not vce_disable_qvbr_pa else '')
    if test_vce_av1_qvbr:
        enc_codec_list['AV1'] = enc_opt_av1 + ' --pa'
        #if not vce_disable_10bit:
        #    enc_codec_list['AV1 10bit'] = enc_opt_av1_10 + (' --pa' if not vce_disable_qvbr_pa else '')

    enc_preset_list = dict()
    if enc_preset_quality:
        enc_preset_list[ 'quality' ] = []
    if enc_preset_normal:
        enc_preset_list[ 'normal' ]  = enc_opt_normal

    for codec, enc_opt_codec in enc_codec_list.items():
        is_10bit = '10bit' in codec
        input_codec = input_codec_10bit if is_10bit else input_codec_8bit
        test_qual_list = get_qual_list('vceenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        for preset, enc_opt_preset in enc_preset_list.items():
            if preset == 'quality':
                enc_opt_preset = enc_opt_quality_av1 if codec == 'AV1' else enc_opt_quality
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('VCEEncC', codec + ' ' + preset, str(qvbr), VCEEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset + ' --qvbr ' + str(qvbr) + ' ' + extra_options + ' -i ', \
                                            input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder, log_path) \
                for qvbr in test_qual_list])

    # ---- VCEEnc vbr --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    enc_codec_list  = dict()
    if test_vce_h264_vbr:
        enc_codec_list['VBR H.264'] = enc_opt_h264
    if test_vce_hevc_vbr:
        enc_codec_list['VBR HEVC'] = enc_opt_hevc
        if not vce_disable_10bit:
            enc_codec_list['VBR HEVC 10bit'] = enc_opt_hevc_10
    if test_vce_av1_vbr:
        enc_codec_list['VBR AV1'] = enc_opt_av1
        if not vce_disable_10bit:
            enc_codec_list['VBR AV1 10bit'] = enc_opt_av1_10

    for codec, enc_opt_codec in enc_codec_list.items():
        is_10bit = '10bit' in codec
        input_codec = input_codec_10bit if is_10bit else input_codec_8bit
        test_qual_list = get_qual_list('vceenc', codec, option_qual_list, qual_min, qual_max, qual_step)
        pipe_mode = PIPE_NONE
        for preset, enc_opt_preset in enc_preset_list.items():
            if preset == 'quality':
                enc_opt_preset = enc_opt_quality_av1 if 'AV1' in codec else enc_opt_quality
                if is_10bit:
                    continue
            vbr_mode = ' --vbrhq ' if preset == 'quality' and not vce_disable_qvbr_pa else ' --vbr '
            enc_opt_avsw = ' --avsw ' if should_use_hwenc_avsw(is_10bit) else ''
            joblib.Parallel(n_jobs=process, backend='threading')( \
                [joblib.delayed(get_ssim)('VCEEncC', codec + ' ' + preset, str(bitrate), VCEEncC_path, run_encode, run_vmaf, pipe_mode, \
                                          enc_opt_common + enc_opt_avsw + enc_opt_codec + enc_opt_preset + vbr_mode + str(bitrate) + ' ' + extra_options + ' -i ', \
                                            input_file_10 if is_10bit else input_file, input_codec, input_fps, input_res, ".mp4", decoder, log_path) \
                for bitrate in test_bitrate_list])

    # ---- finish --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if out_dir is not None:
        dest_root = out_dir
        if not os.path.isdir(dest_root):
            os.makedirs(dest_root)
        if os.path.isfile(log_path):
            out_dir_basename = os.path.basename(os.path.normpath(dest_root))
            name_orig, ext_orig = os.path.splitext(log_name)
            log_name_with_outdir = (name_orig + "_" + out_dir_basename + ext_orig) if out_dir_basename else log_name
            dst_log = os.path.join(dest_root, log_name_with_outdir)
            if os.path.exists(dst_log):
                name, ext = os.path.splitext(log_name_with_outdir)
                index = 1
                while True:
                    candidate_name = name + "." + str(index) + ext
                    candidate_path = os.path.join(dest_root, candidate_name)
                    if not os.path.exists(candidate_path):
                        dst_log = candidate_path
                        break
                    index += 1
            shutil.copyfile(log_path, dst_log)
            print("log copied to: " + dst_log)
        if not run_vmaf:
            dst_temp_root = os.path.join(dest_root, os.path.basename(temp_dir))
            print("copy temp folder to: " + dst_temp_root)
            copy_tree_with_progress(temp_dir, dst_temp_root)
    else:
        if os.path.isfile(log_path):
            shutil.copyfile(log_path, log_name)

    if sleep_after_run:
        ctypes.windll.PowrProf.SetSuspendState(0, 1, 0)