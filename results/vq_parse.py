# -*- coding: utf-8 -*-
import sys
import colorcet as cc
import datetime
import colorsys

class EncodeData:
    encoder = ''
    set     = ''
    quality = ''
    bitrate = ''
    ssim    = ''
    vmaf    = ''
    fps     = ''

    def __init__(self, encoder_, set_, quality_, bitrate_, ssim_, vmaf_, fps_):
        self.encoder = encoder_
        self.set     = set_
        self.quality = quality_
        self.bitrate = bitrate_
        self.ssim    = ssim_
        self.vmaf    = vmaf_
        self.fps     = fps_
        
    def get_value(self, param):
        if param == 'encoder':
            return self.encoder
        if param == 'set':
            return self.set
        if param == 'quality':
            return self.quality
        if param == 'bitrate':
            return self.bitrate
        if param == 'ssim':
            return self.ssim
        if param == 'vmaf':
            return self.vmaf
        if param == 'fps':
            return self.fps
        return ''

def read_file(dataname, filename, dict_enc_set_data):
    with open(filename,'r') as f:
        for line in f.readlines():
            line_data = line.split(',')
            if len(line_data) >= 7 and len(line_data[0].strip()) > 0:
                encoder = dataname + ' ' + line_data[0].strip()
                set     = line_data[1].strip()
                quality = line_data[2].strip()
                bitrate = line_data[3].strip()
                ssim    = line_data[4].strip()
                vmaf    = line_data[5].strip()
                fps     = line_data[6].strip()

                if not encoder in dict_enc_set_data:
                    dict_enc_set_data[encoder] = dict()

                enc_set_data = dict_enc_set_data[encoder]
                if not set in enc_set_data:
                    enc_set_data[set] = []
                    
                set_data = enc_set_data[set]
                set_data.append(EncodeData(encoder, set, quality, bitrate, ssim, vmaf, fps))
            
    return dict_enc_set_data

def get_date_prefix():
    tdatetime = datetime.datetime.now()
    tstr = tdatetime.strftime('%Y%m%d')
    return tstr
    
def create_aspect_ratio_stg():
    return '' + \
        'var aspect_ratio_bitrate_ssim = 0.75;\n' + \
        'var aspect_ratio_bitrate_vmaf = 0.75;\n' + \
        'var aspect_ratio_bitrate_fps = 0.75;\n' + \
        '\n'

def get_scatter_header(target_id, name):
    header = 'var ctx_t' + str(target_id) + '_' + name + '_data = document.getElementById(\'chart_t' + str(target_id) + '_' + name + '\');\n'
    header = header + 'const chart_t' + str(target_id) + '_' + name + '_data = new Chart(ctx_t' + str(target_id) + '_' + name + '_data,\n'
    header = header + '{\n'
    header = header + '  type: \'scatter\',\n'
    header = header + '  parsing: false,\n'
    header = header + '  normalized: true,\n'
    return header

def get_chart_options(name, aspect_ratio, x_label, x_min, x_max, y_label, y_min, y_max):
    options = r'''
  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: $ASPECT_RATIO$,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: '$GRAPH_TITLE$',
        display: true,
        font: {
          size: 16,
        }
      },
      // 凡例の設定
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          fontSize: 12,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            var value = context.parsed;
            return context.dataset.label + ': $X_LABEL$ = ' + value.x + ', $Y_LABEL$ = ' + value.y;
          },
        },
      },
    },
    // x軸,y軸の設定
    scales: {
      x: {
        type: 'linear',
        display: true,
        position: 'bottom',
        min: $X_AXIS_MIN$,
        max: $X_AXIS_MAX$,
        title: {
          display: true,
          text: '$X_LABEL$',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: $Y_AXIS_MIN$,
        max: $Y_AXIS_MAX$,
        title: {
          display: true,
          text: '$Y_LABEL$',
          font: {
            size: 12,
          }
        },
      }
    },
  },
'''

    options = options.replace('$ASPECT_RATIO$', aspect_ratio)
    options = options.replace('$GRAPH_TITLE$', name)
    #options = options.replace('$X_AXIS_MAX$', str(x_max))
    options = options.replace('$X_LABEL$', x_label)
    options = options.replace('$Y_LABEL$', y_label)
    if not x_min is None:
        options = options.replace('$X_AXIS_MIN$', str(x_min))
    else:
        options = options.replace('min: $X_AXIS_MIN$', '//min:')

    if not x_max is None:
        options = options.replace('$X_AXIS_MAX$', str(x_max))
    else:
        options = options.replace('max: $X_AXIS_MAX$', '//max:')

    if not y_min is None:
        options = options.replace('$Y_AXIS_MIN$', str(y_min))
    else:
        options = options.replace('min: $Y_AXIS_MIN$', '//min:')

    if not y_max is None:
        options = options.replace('$Y_AXIS_MAX$', str(y_max))
    else:
        options = options.replace('max: $Y_AXIS_MAX$', '//max:')

    return options

def get_chart_footer():
    return r'''
});
'''

def check_is_target(label, target_list):
    for list in target_list:
        flag = True
        for target_str in list:
            if target_str[0] == '+':
                if not target_str[1:] in label:
                    flag = False
            elif not target_str[0] == '-':
                if not target_str in label:
                    flag = False
        for target_str in list:
            if target_str[0] == '-':
                if target_str[1:] in label:
                    flag = False
        if flag:
            return True
    return False
    
def color_check(color, enc_colorhue):
    if color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114 > 0.9:
        return False
    if enc_colorhue is None:
        return True
        
    color_hsv = colorsys.rgb_to_hsv(color[0], color[1], color[2])
    sat = color_hsv[1]
    if sat < 0.2:
        return False
    return True

def get_new_color(color_list, used_color_idx, enc_colorhue):
    color_idx = 0
    while color_idx < len(color_list):
        while color_idx in used_color_idx:
            color_idx += 1
    
        color = color_list[color_idx]
        while not color_check(color, enc_colorhue):
            color_idx += 1
            while color_idx in used_color_idx:
                color_idx += 1
            color = color_list[color_idx]

        if enc_colorhue is None:
            used_color_idx.append(color_idx)
            return color

        color_hsv = colorsys.rgb_to_hsv(color[0], color[1], color[2])
        hue = color_hsv[0]
        if enc_colorhue[0] < enc_colorhue[1]:
            if enc_colorhue[0] <= hue and hue < enc_colorhue[1]:
                used_color_idx.append(color_idx)
                return color
        else:
            if enc_colorhue[0] <= hue and hue <= 1.0:
                used_color_idx.append(color_idx)
                return color
            if 0.0 <= hue and hue < enc_colorhue[1]:
                used_color_idx.append(color_idx)
                return color

        color_idx += 1

    color_idx = 0
    while color_idx in used_color_idx:
        color_idx += 1

    used_color_idx.append(color_idx)
    return color_list[color_idx]

def get_point_style(label, used_point_style):
    default_point_style = 'circle'
    if 'x264' in label:
        return default_point_style
    if 'x265' in label:
        return default_point_style
    if 'svtav1' in label:
        return default_point_style

    list_point_style = [ 'cross', 'crossRot', 'rect', 'rectRot', 'star', 'triangle' ]
    for encoder in [ 'QSVEncC', 'NVEncC', 'VCEEncC' ]:
        enc_pos = label.find(encoder)
        if enc_pos > 0:
            gpu_name = label[0:enc_pos].strip()

            if not encoder in used_point_style:
                used_point_style[encoder] = dict()
            dict_encoder_used_point_style = used_point_style[encoder]

            if gpu_name in dict_encoder_used_point_style:
                return dict_encoder_used_point_style[gpu_name]

            for point_style in list_point_style:
                if not point_style in dict_encoder_used_point_style.values():
                    dict_encoder_used_point_style[gpu_name] = point_style
                    return point_style

            dict_encoder_used_point_style[gpu_name] = default_point_style
            return default_point_style

    return default_point_style


def create_chart_js(dict_enc_set_data, dict_enc_colorhue, vbr_mode, label_x, label_y, quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    lines = 0
    for enc_set_data in dict_enc_set_data.values():
        lines += len(enc_set_data)
    
    color_list = cc.glasbey_category10
    color_list += cc.glasbey_bw_minc_20_minl_30
    used_color_idx = []
    used_point_style = dict()
    
    datastring = ''
    datastring = datastring + '  data: {\n'
    datastring = datastring + '    datasets: [\n'
    coloridx = 0

    for encoder, enc_set_data in dict_enc_set_data.items():
        # エンコーダの色テーブルの選択
        enc_colorhue = None # デフォルト
        for colorenc_name in dict_enc_colorhue:
            if colorenc_name in encoder:
                enc_colorhue = dict_enc_colorhue[colorenc_name]
                break

        for set, set_data in enc_set_data.items():
            if ('VBR' in set) == vbr_mode:
                label = encoder + ' ' + set.replace('_preset_', ' P')
                if check_is_target(label, drop_list):
                    continue
                hidden = 'true' if check_is_target(label, hidden_list) else 'false'
                dotted_line = check_is_target(label, dotted_list)
                dashed_line = check_is_target(label, dashed_list)
                color = get_new_color(color_list, used_color_idx, enc_colorhue)
                point_style = get_point_style(label, used_point_style)
                
                for replace_data in replace_list:
                    label = label.replace(replace_data[0], replace_data[1])
                
                datastring += '      {\n' \
                 + '        label: \"' + label + '\",\n' \
                 + '        showLine: true,\n' \
                 + '        pointStyle: \"' + point_style + '\",\n' \
                 + '        hidden: ' + hidden + ',\n' \
                 + '        lineTension: 0.4,\n' \
                 + '        borderWidth: 1.5,\n' \
                 + "        backgroundColor: 'rgba(255, 255, 255, 0.0)',\n" \
                 + "        borderColor: 'rgba(" + str(int(color[0]*255)) + ", " + str(int(color[1]*255)) + ", " + str(int(color[2]*255)) + ", 0.9)',\n"
                if dashed_line and dotted_line:
                    datastring += '        borderDash: [3,1],\n'
                elif dashed_line:
                    datastring += '        borderDash: [12,2],\n'
                elif dotted_line:
                    datastring += '        borderDash: [4,2],\n'
                datastring += '        data:['
                for data in set_data:
                    data_x = data.get_value(label_x)
                    data_y = data.get_value(label_y)
                    if float(data_x) < bitrate_max_cut:
                        datastring += '\n          { x: ' + data_x + ', y: ' + data_y + ' },'
                datastring = datastring.rstrip(',')
                datastring += '\n        ]\n'
                datastring += '      },\n'

    datastring += '    ],\n'
    datastring += '  },\n'

    return datastring


def create_scatter_bitrate_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    return get_scatter_header(target_id, get_date_prefix() + vbr_data_prefix + '_bitrate_ssim') + \
        create_chart_js(dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'ssim', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list) + \
        get_chart_options('bitrate - ssim', 'aspect_ratio_bitrate_ssim', 'bitrate (kbps)', 0, bitrate_max, 'ssim', 0.95, 1.00) + \
        get_chart_footer()

def create_scatter_bitrate_vmaf(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    return get_scatter_header(target_id, get_date_prefix() + vbr_data_prefix + '_bitrate_vmaf') + \
        create_chart_js(dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'vmaf', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list) + \
        get_chart_options('bitrate - vmaf', 'aspect_ratio_bitrate_vmaf', 'bitrate (kbps)', 0, bitrate_max, 'vmaf', 80, 100) + \
        get_chart_footer()

def create_scatter_bitrate_fps(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    return get_scatter_header(target_id, get_date_prefix() + vbr_data_prefix + '_bitrate_fps') + \
        create_chart_js(dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'fps', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list) + \
        get_chart_options('bitrate - fps', 'aspect_ratio_bitrate_fps', 'bitrate (kbps)', 0, bitrate_max, 'fps', 0, None) + \
        get_chart_footer()

if __name__ == '__main__':
    dict_enc_set_data = dict()
    
    iarg = 1
    target_id = 1
    vbr_mode = False
    write_aspect = True
    quality_only = False
    bitrate_max = None
    hidden_list = []
    dotted_list = []
    dashed_list = []
    drop_list   = []
    replace_list = []
    bitrate_max_cut = 100000000
    dict_enc_colorhue = dict()
    while iarg < len(sys.argv):
        if sys.argv[iarg] == '-no-write-aspect':
            write_aspect = False
        elif sys.argv[iarg] == '-vbr':
            vbr_mode = True
        elif sys.argv[iarg] == '-bitrate-max':
            bitrate_max = int(sys.argv[iarg+1])
            iarg += 1
        elif sys.argv[iarg] == '-bitrate-max-cut':
            bitrate_max_cut = int(sys.argv[iarg+1])
            iarg += 1
        elif sys.argv[iarg] == '-target':
            target_id = int(sys.argv[iarg+1])
            iarg += 1
        elif sys.argv[iarg] == '-quality-only':
            quality_only = True
        elif sys.argv[iarg] == '-hidden':
            hidden_list.append(sys.argv[iarg+1].split())
            iarg += 1
        elif sys.argv[iarg] == '-dashed':
            dashed_list.append(sys.argv[iarg+1].split())
            iarg += 1
        elif sys.argv[iarg] == '-dotted':
            dotted_list.append(sys.argv[iarg+1].split())
            iarg += 1
        elif sys.argv[iarg] == '-drop':
            drop_list.append(sys.argv[iarg+1].split())
            iarg += 1
        elif sys.argv[iarg] == '-replace':
            replace_list.append(sys.argv[iarg+1].split(','))
            iarg += 1
        elif sys.argv[iarg] == '-color':
            enc_color = sys.argv[iarg+1].split(',')
            enc_color_encoder = enc_color[0]
            enc_color_hue_range = enc_color[1].split('-')
            dict_enc_colorhue[enc_color_encoder] = [ float(enc_color_hue_range[0]) / 360.0, float(enc_color_hue_range[1]) / 360.0 ]
            iarg += 1
        else:
            break

        iarg += 1

    print('vbr_mode ' + str(vbr_mode), file=sys.stderr)
    print('target_id ' + str(target_id), file=sys.stderr)
    print('bitrate_max ' + str(bitrate_max), file=sys.stderr)
    print('write_aspect ' + str(write_aspect), file=sys.stderr)
    print('dict_enc_colorhue ' + str(dict_enc_colorhue), file=sys.stderr)


    for ifile in range(iarg, len(sys.argv)):
        arg_data = sys.argv[ifile].split(',')
        read_file(arg_data[0], arg_data[1], dict_enc_set_data)

    if write_aspect:
        print(create_aspect_ratio_stg())
    print(create_scatter_bitrate_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list))
    print(create_scatter_bitrate_vmaf(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list))
    print(create_scatter_bitrate_fps(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list))