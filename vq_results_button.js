function chart_show_hide_data(chart, data_name, enabled_presets, show_no_10bit, enabled_devices_gpu, checked) {
    for (var i = 0; i < chart.data.datasets.length; i++) {
        var label_name = chart.data.datasets[i].label;
        if (label_name.indexOf(data_name) !== -1) {
            var should_be_shown = checked;
            //表示に切り替えるとき(should_be_shown)、
            //enabled_presetsの指定があれば有効にすべきものかを確認する
            if (!!enabled_presets && should_be_shown) {
                //すべてのenabled_presetsのうち、ひとつでも該当するものがあれば表示する
                should_be_shown = false;
                for (var j = 0; j < enabled_presets.length; j++) {
                    if (label_name.indexOf(enabled_presets[j]) !== -1) {
                        should_be_shown = true;
                        break;
                    }
                }
            }
            //表示に切り替えるとき(should_be_shown)、
            //show_no_10bitの指定があれば10bitなら表示しないようにする
            if (show_no_10bit && should_be_shown) {
                if (label_name.indexOf('10bit') !== -1) {
                    should_be_shown = false;
                }
            }
            //表示に切り替えるとき(should_be_shown)、
            //enabled_devices_gpuの指定があれば有効にすべきものかを確認する
            if (!!enabled_devices_gpu && should_be_shown) {
                //すべてのenabled_devices_gpuのうち、ひとつでも該当するものがあれば表示する
                should_be_shown = false;
                for (var j = 0; j < enabled_devices_gpu.length; j++) {
                    if (label_name.indexOf(enabled_devices_gpu[j]) !== -1) {
                        should_be_shown = true;
                        break;
                    }
                }
            }
            chart.setDatasetVisibility(i, should_be_shown);
        }
    }
}

function check_click(chart, target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart) {
    target_list.forEach(function(target) {
        chart_show_hide_data(chart, target, enabled_presets, show_no_10bit, enabled_devices_gpu, checked);
    })
    if (update_chart) {
        chart.update();
    }
}

function set_checked(check_name, value) {
    check = document.getElementById(check_name);
    check.checked = value;
}

function check_all_set(check_name, target_group) {
    all_checked   = true
    all_unchecked = true
    target_group.forEach(function(target_child_name) {
        child_check = document.getElementById(target_child_name);
        if (child_check.checked) {
            all_unchecked = false;
        } else {
            all_checked = false;
        }
    });
    check = document.getElementById(check_name);
    if (all_checked) {
        check.checked = true
    } else if (all_unchecked) {
        check.checked = false
    }
}

function call_check_click(check_name, show_slow_preset_only, show_no_10bit, show_latest_gpu_only, checked, update_chart) {
    target_group_cpu   = [ "check_x264", "check_x265", "check_svt_av1" ];
    target_group_qsv   = [ "check_qsv_h264", "check_qsv_hevc", "check_qsv_av1" ];
    target_group_nvenc = [ "check_nvenc_h264", "check_nvenc_hevc", "check_nvenc_av1" ];
    target_group_vce   = [ "check_vce_h264", "check_vce_hevc", "check_vce_av1" ];
    target_group_h264  = [ "check_x264", "check_qsv_h264", "check_nvenc_h264", "check_vce_h264" ];
    target_group_hevc  = [ "check_x265", "check_qsv_hevc", "check_nvenc_hevc", "check_vce_hevc" ];
    target_group_av1   = [ "check_svt_av1", "check_qsv_av1", "check_nvenc_av1", "check_vce_av1"];
    enabled_presets_cpu = [ "veryslow", "P4" ];
    enabled_presets_gpu = [ "quality" ];
    enabled_devices_qsv = [ "Arc A380" ];
    enabled_devices_nvenc = [ "rtx4080" ];
    enabled_devices_vce = [ "rx7900xt" ];
    enabled_devices_gpu = [ ];
    target_list = [ ];
    enabled_presets = enabled_presets_gpu;
    if (check_name == "check_cpu") {
        target_list.push("x264");
        target_list.push("x265");
        target_list.push("svtav1");
        target_group_cpu.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
        enabled_presets = enabled_presets_cpu;
    } else if (check_name == "check_qsv") {
        target_list.push("QSVEncC");
        target_list.push("QSV");
        enabled_devices_gpu = enabled_devices_qsv;
        target_group_qsv.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
    } else if (check_name == "check_nvenc") {
        target_list.push("NVEncC");
        target_list.push("NVENC");
        enabled_devices_gpu = enabled_devices_nvenc;
        target_group_nvenc.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
    } else if (check_name == "check_vce") {
        target_list.push("VCEEncC");
        target_list.push("VCE");
        enabled_devices_gpu = enabled_devices_vce;
        target_group_vce.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
    } else if (check_name == "check_h264") {
        target_list.push("x264");
        target_list.push("H.264");
        enabled_devices_gpu.concat(enabled_devices_qsv);
        enabled_devices_gpu.concat(enabled_devices_nvenc);
        enabled_devices_gpu.concat(enabled_devices_vce);
        target_group_h264.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
        enabled_presets = enabled_presets.concat(enabled_presets_cpu);
    } else if (check_name == "check_hevc") {
        target_list.push("x265");
        target_list.push("HEVC");
        enabled_devices_gpu.concat(enabled_devices_qsv);
        enabled_devices_gpu.concat(enabled_devices_nvenc);
        enabled_devices_gpu.concat(enabled_devices_vce);
        target_group_hevc.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
        enabled_presets = enabled_presets.concat(enabled_presets_cpu);
    } else if (check_name == "check_av1") {
        target_list.push("svtav1");
        target_list.push("AV1");
        enabled_devices_gpu.concat(enabled_devices_qsv);
        enabled_devices_gpu.concat(enabled_devices_nvenc);
        enabled_devices_gpu.concat(enabled_devices_vce);
        target_group_av1.forEach(function(target_child_name) {
            set_checked(target_child_name, checked);
        });
        enabled_presets = enabled_presets.concat(enabled_presets_cpu);
    } else if (check_name == "check_x264") {
        target_list.push("x264");
        enabled_presets = enabled_presets_cpu;
    } else if (check_name == "check_x265") {
        target_list.push("x265");
        enabled_presets = enabled_presets_cpu;
    } else if (check_name == "check_svt_av1") {
        target_list.push("svtav1");
        enabled_presets = enabled_presets_cpu;
    } else if (check_name == "check_qsv_h264") {
        target_list.push("QSVEncC H.264");
        target_list.push("QSVEncC VBR H.264");
        target_list.push("QSV H.264");
        target_list.push("QSV VBR H.264");
        enabled_devices_gpu = enabled_devices_qsv;
    } else if (check_name == "check_qsv_hevc") {
        target_list.push("QSVEncC HEVC");
        target_list.push("QSVEncC VBR HEVC");
        target_list.push("QSV HEVC");
        target_list.push("QSV VBR HEVC");
        enabled_devices_gpu = enabled_devices_qsv;
    } else if (check_name == "check_qsv_av1") {
        target_list.push("QSVEncC AV1");
        target_list.push("QSVEncC VBR AV1");
        target_list.push("QSV AV1");
        target_list.push("QSV VBR AV1");
        enabled_devices_gpu = enabled_devices_qsv;
    } else if (check_name == "check_nvenc_h264") {
        target_list.push("NVEncC H.264");
        target_list.push("NVEncC VBR H.264");
        target_list.push("NVENC H.264");
        target_list.push("NVENC VBR H.264");
        enabled_devices_gpu = enabled_devices_nvenc;
    } else if (check_name == "check_nvenc_hevc") {
        target_list.push("NVEncC HEVC");
        target_list.push("NVEncC VBR HEVC");
        target_list.push("NVENC HEVC");
        target_list.push("NVENC VBR HEVC");
        enabled_devices_gpu = enabled_devices_nvenc;
    } else if (check_name == "check_nvenc_av1") {
        target_list.push("NVEncC AV1");
        target_list.push("NVEncC VBR AV1");
        target_list.push("NVENC AV1");
        target_list.push("NVENC VBR AV1");
        enabled_devices_gpu = enabled_devices_nvenc;
    } else if (check_name == "check_vce_h264") {
        target_list.push("VCEEncC H.264");
        target_list.push("VCEEncC VBR H.264");
        target_list.push("VCE H.264");
        target_list.push("VCE VBR H.264");
        enabled_devices_gpu = enabled_devices_vce;
    } else if (check_name == "check_vce_hevc") {
        target_list.push("VCEEncC HEVC");
        target_list.push("VCEEncC VBR HEVC");
        target_list.push("VCE HEVC");
        target_list.push("VCE VBR HEVC");
        enabled_devices_gpu = enabled_devices_vce;
    } else if (check_name == "check_vce_av1") {
        target_list.push("VCEEncC AV1");
        target_list.push("VCEEncC VBR AV1");
        target_list.push("VCE AV1");
        target_list.push("VCE VBR AV1");
        enabled_devices_gpu = enabled_devices_vce;
    }
    if (!show_slow_preset_only || enabled_presets.length == 0) {
        enabled_presets = null;
    }
    if (!show_latest_gpu_only || enabled_devices_gpu.length == 0) {
        enabled_devices_gpu = null;
    }
    check_click(chart_t1_20250506_bitrate_ssim_data,        target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_bitrate_ms_ssim_data,     target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_bitrate_vmaf_data,        target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_bitrate_fps_data,         target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_vbr_bitrate_ssim_data,    target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_vbr_bitrate_ms_ssim_data, target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_vbr_bitrate_vmaf_data,    target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t1_20250506_vbr_bitrate_fps_data,     target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_bitrate_ssim_data,        target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_bitrate_ms_ssim_data,     target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_bitrate_vmaf_data,        target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_bitrate_fps_data,         target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_vbr_bitrate_ssim_data,    target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_vbr_bitrate_ms_ssim_data, target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_vbr_bitrate_vmaf_data,    target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);
    check_click(chart_t2_20250506_vbr_bitrate_fps_data,     target_list, enabled_presets, show_no_10bit, enabled_devices_gpu, checked, update_chart);

    check_all_set("check_cpu",   target_group_cpu);
    check_all_set("check_qsv",   target_group_qsv);
    check_all_set("check_nvenc", target_group_nvenc);
    check_all_set("check_vce",   target_group_vce);
    check_all_set("check_h264",  target_group_h264);
    check_all_set("check_hevc",  target_group_hevc);
    check_all_set("check_av1",   target_group_av1);
}


function callback_check_click() {
    check_name = this.id;
    checked = this.checked;
    toggle_only_quality = document.getElementById('toggle_only_quality')
    toggle_only_8bit = document.getElementById('toggle_only_8bit')
    toggle_only_latest_gpu = document.getElementById('toggle_only_latest_gpu')
    call_check_click(check_name, toggle_only_quality.checked, toggle_only_8bit.checked, toggle_only_latest_gpu.checked, checked, true);
}

var check_button_names = [
    "check_x264",
    "check_x265",
    "check_svt_av1",
    "check_qsv_h264",
    "check_qsv_hevc",
    "check_qsv_av1",
    "check_nvenc_h264",
    "check_nvenc_hevc",
    "check_nvenc_av1",
    "check_vce_h264",
    "check_vce_hevc",
    "check_vce_av1",
    "check_cpu",
    "check_qsv",
    "check_nvenc",
    "check_vce",
    "check_h264",
    "check_hevc",
    "check_av1",
];

check_button_names.forEach(function(check_name){
    check = document.getElementById(check_name);
    check.addEventListener("click", callback_check_click);
});

window.onload = function() {
  var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
  langSet(wDef);

  toggle_only_quality = document.getElementById('toggle_only_quality')
  toggle_only_8bit = document.getElementById('toggle_only_8bit')
  toggle_only_latest_gpu = document.getElementById('toggle_only_latest_gpu')
  check_button_names.forEach(function(check_name) {
      call_check_click(check_name, toggle_only_quality.checked, toggle_only_8bit.checked, toggle_only_latest_gpu.checked, check.checked, false);
  });
  chart_t1_20250506_bitrate_ssim_data.update('none');
  chart_t1_20250506_bitrate_ms_ssim_data.update('none');
  chart_t1_20250506_bitrate_vmaf_data.update('none');
  chart_t1_20250506_bitrate_fps_data.update('none');
  chart_t1_20250506_vbr_bitrate_ssim_data.update('none');
  chart_t1_20250506_vbr_bitrate_ms_ssim_data.update('none');
  chart_t1_20250506_vbr_bitrate_vmaf_data.update('none');
  chart_t1_20250506_vbr_bitrate_fps_data.update('none');
  chart_t2_20250506_bitrate_ssim_data.update('none');
  chart_t2_20250506_bitrate_ms_ssim_data.update('none');
  chart_t2_20250506_bitrate_vmaf_data.update('none');
  chart_t2_20250506_bitrate_fps_data.update('none');
  chart_t2_20250506_vbr_bitrate_ssim_data.update('none');
  chart_t2_20250506_vbr_bitrate_ms_ssim_data.update('none');
  chart_t2_20250506_vbr_bitrate_vmaf_data.update('none');
  chart_t2_20250506_vbr_bitrate_fps_data.update('none');
};