function applyTheme(theme) {
    const root = document.documentElement;
    if (!root) return;

    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    } else {
        // auto: OS/ブラウザの prefers-color-scheme に任せる
        root.removeAttribute('data-theme');
    }
}

const check_button_names = [
    "check_x264", "check_x265", "check_svt_av1", "check_vvenc",
    "check_qsv_h264", "check_qsv_hevc", "check_qsv_av1",
    "check_nvenc_h264", "check_nvenc_hevc", "check_nvenc_av1",
    "check_vce_h264", "check_vce_hevc", "check_vce_av1",
    "check_cpu", "check_qsv", "check_nvenc", "check_vce",
    "check_h264", "check_hevc", "check_av1", "check_vvc",
];

const check_groups = {
    "check_cpu":   [ "check_x264", "check_x265", "check_svt_av1", "check_vvenc" ],
    "check_qsv":   [ "check_qsv_h264", "check_qsv_hevc", "check_qsv_av1" ],
    "check_nvenc": [ "check_nvenc_h264", "check_nvenc_hevc", "check_nvenc_av1" ],
    "check_vce":   [ "check_vce_h264", "check_vce_hevc", "check_vce_av1" ],
    "check_h264":  [ "check_x264", "check_qsv_h264", "check_nvenc_h264", "check_vce_h264" ],
    "check_hevc":  [ "check_x265", "check_qsv_hevc", "check_nvenc_hevc", "check_vce_hevc" ],
    "check_av1":   [ "check_svt_av1", "check_qsv_av1", "check_nvenc_av1", "check_vce_av1"],
    "check_vvc":   [ "check_vvenc" ],
};

function get_rule_for_checkbox(check_name) {
    let keywords = [];
    let presets = [];
    let devices = [];

    const enabled_presets_cpu = [ "veryslow", "P3" ];
    const enabled_presets_cpu_vvenc = [ "medium" ];
    const enabled_presets_gpu = [ "quality" ];
    const enabled_devices_qsv = [ "Arc B580", "u7 258v", "u5 245k" ];
    const enabled_devices_nvenc = [ "rtx4080" ];
    const enabled_devices_vce = [ "rx7900xt" ];

    presets = enabled_presets_gpu;

    if (check_name == "check_x264") {
        keywords.push("x264");
        presets = enabled_presets_cpu;
    } else if (check_name == "check_x265") {
        keywords.push("x265");
        presets = enabled_presets_cpu;
    } else if (check_name == "check_svt_av1") {
        keywords.push("svtav1");
        presets = enabled_presets_cpu;
    } else if (check_name == "check_vvenc") {
        keywords.push("VVenC");
        presets = enabled_presets_cpu_vvenc;
    } else if (check_name == "check_qsv_h264") {
        keywords.push("QSVEncC H.264", "QSVEncC VBR H.264", "QSV H.264", "QSV VBR H.264");
        devices = enabled_devices_qsv;
    } else if (check_name == "check_qsv_hevc") {
        keywords.push("QSVEncC HEVC", "QSVEncC VBR HEVC", "QSV HEVC", "QSV VBR HEVC");
        devices = enabled_devices_qsv;
    } else if (check_name == "check_qsv_av1") {
        keywords.push("QSVEncC AV1", "QSVEncC VBR AV1", "QSV AV1", "QSV VBR AV1");
        devices = enabled_devices_qsv;
    } else if (check_name == "check_nvenc_h264") {
        keywords.push("NVEncC H.264", "NVEncC VBR H.264", "NVENC H.264", "NVENC VBR H.264");
        devices = enabled_devices_nvenc;
    } else if (check_name == "check_nvenc_hevc") {
        keywords.push("NVEncC HEVC", "NVEncC VBR HEVC", "NVENC HEVC", "NVENC VBR HEVC");
        devices = enabled_devices_nvenc;
    } else if (check_name == "check_nvenc_av1") {
        keywords.push("NVEncC AV1", "NVEncC VBR AV1", "NVENC AV1", "NVENC VBR AV1");
        devices = enabled_devices_nvenc;
    } else if (check_name == "check_vce_h264") {
        keywords.push("VCEEncC H.264", "VCEEncC VBR H.264", "VCE H.264", "VCE VBR H.264");
        devices = enabled_devices_vce;
    } else if (check_name == "check_vce_hevc") {
        keywords.push("VCEEncC HEVC", "VCEEncC VBR HEVC", "VCE HEVC", "VCE VBR HEVC");
        devices = enabled_devices_vce;
    } else if (check_name == "check_vce_av1") {
        keywords.push("VCEEncC AV1", "VCEEncC VBR AV1", "VCE AV1", "VCE VBR AV1");
        devices = enabled_devices_vce;
    }
    return { keywords, presets, devices };
}

function update_charts(with_animation) {
    const charts = window.all_charts || [];
    if (charts.length === 0) return;

    const show_max_quality = document.getElementById('toggle_show_max_quality').checked;
    const show_std_quality = document.getElementById('toggle_show_std_quality').checked;
    const show_8bit = document.getElementById('toggle_show_8bit').checked;
    const show_10bit = document.getElementById('toggle_show_10bit').checked;
    const show_latest_gpu_only = document.getElementById('toggle_only_latest_gpu').checked;

    const active_rules = [];
    check_button_names.forEach(check_id => {
        if (!check_groups[check_id] && document.getElementById(check_id) && document.getElementById(check_id).checked) {
            active_rules.push(get_rule_for_checkbox(check_id));
        }
    });

    charts.forEach(chart => {
        if (!chart.all_datasets) return;

        const new_datasets = chart.all_datasets.filter(dataset => {
            const label_name = dataset.label;
            const is_10bit = label_name.indexOf('10bit') !== -1;

            if (is_10bit && !show_10bit) {
                return false;
            }
            if (!is_10bit && !show_8bit) {
                return false;
            }

            if (active_rules.length === 0) {
                return false; 
            }

            const is_visible = active_rules.some(rule => {
                if (!rule.keywords.some(kw => label_name.indexOf(kw) !== -1)) {
                    return false;
                }

                const is_max_quality_dataset = rule.presets.some(p => label_name.indexOf(p) !== -1);
                if (is_max_quality_dataset && !show_max_quality) {
                    return false;
                }
                if (!is_max_quality_dataset && !show_std_quality) {
                    return false;
                }

                if (show_latest_gpu_only && rule.devices.length > 0) {
                    const is_gpu_label = rule.devices.length > 0;
                    if (is_gpu_label && !rule.devices.some(d => label_name.indexOf(d) !== -1)) {
                        return false;
                    }
                }
                return true;
            });

            return is_visible;
        });

        chart.data.datasets = new_datasets;
        chart.update(with_animation ? 'default' : 'none');
    });
}

function set_checked(check_name, value) {
    const check = document.getElementById(check_name);
    if (check) {
        check.checked = value;
    }
}

function sync_checkboxes(clicked_id, is_checked) {
    if (check_groups[clicked_id]) {
        check_groups[clicked_id].forEach(child_id => set_checked(child_id, is_checked));
    }

    for (const group_id in check_groups) {
        const child_ids = check_groups[group_id];
        const group_check = document.getElementById(group_id);
        if (!group_check) continue;

        const child_elements = child_ids.map(id => document.getElementById(id)).filter(el => el);
        if (child_elements.length === 0) continue;

        const all_checked = child_elements.every(el => el.checked);
        const all_unchecked = child_elements.every(el => !el.checked);

        if (all_checked) {
            group_check.checked = true;
            group_check.indeterminate = false;
        } else if (all_unchecked) {
            group_check.checked = false;
            group_check.indeterminate = false;
        } else {
            group_check.checked = false;
            group_check.indeterminate = true;
        }
    }
}


function on_toggle_change() {
    update_charts(true);
}

window.addEventListener('load', function() {
    if (typeof langSet === "function") {
        var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
        langSet(wDef);
    }
    
    const el_max_quality = document.getElementById('toggle_show_max_quality');
    const el_std_quality = document.getElementById('toggle_show_std_quality');
    const el_8bit = document.getElementById('toggle_show_8bit');
    const el_10bit = document.getElementById('toggle_show_10bit');
    const el_latest_gpu_only = document.getElementById('toggle_only_latest_gpu');

    if (el_max_quality) {
        el_max_quality.addEventListener('change', on_toggle_change);
    }
    if (el_std_quality) {
        el_std_quality.addEventListener('change', on_toggle_change);
    }
    if (el_8bit) {
        el_8bit.addEventListener('change', on_toggle_change);
    }
    if (el_10bit) {
        el_10bit.addEventListener('change', on_toggle_change);
    }
    if (el_latest_gpu_only) {
        el_latest_gpu_only.addEventListener('change', on_toggle_change);
    }

    // 念のため、change イベントでもグローバルに拾って更新する（クリックイベント取りこぼし対策）
    document.addEventListener('change', function (e) {
        const target = e.target;
        if (!target || target.type !== 'checkbox') return;
        const id = target.id;
        if (!id) return;

        // check_button_names に含まれるチェックボックスのみ同期＆更新
        if (check_button_names.indexOf(id) !== -1) {
            sync_checkboxes(id, target.checked);
            update_charts(true);
        }
    });

    check_button_names.forEach(check_id => {
        const check = document.getElementById(check_id);
        if (check && check.checked) {
            sync_checkboxes(check_id, check.checked);
        }
    });
    update_charts(false);

    // テーマ切り替えラジオボタンの初期化
    (function initThemeSwitch() {
        const themeAuto = document.getElementById('themeAuto');
        const themeLight = document.getElementById('themeLight');
        const themeDark = document.getElementById('themeDark');

        if (!themeAuto || !themeLight || !themeDark) {
            return;
        }
        

        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            themeLight.checked = true;
        } else if (currentTheme === 'dark') {
            themeDark.checked = true;
        } else {
            themeAuto.checked = true;
        }

        themeAuto.addEventListener('change', function () {
            if (this.checked) {
                applyTheme('auto');
            }
        });
        themeLight.addEventListener('change', function () {
            if (this.checked) {
                applyTheme('light');
            }
        });
        themeDark.addEventListener('change', function () {
            if (this.checked) {
                applyTheme('dark');
            }
        });
    })();
}); 