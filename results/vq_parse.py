# -*- coding: utf-8 -*-
import sys
import colorcet as cc
import datetime
import colorsys
import re
import os

class EncodeData:
    encoder = ''
    set     = ''
    quality = ''
    bitrate = ''
    psnr_y  = ''
    ssim    = ''
    ms_ssim    = ''
    vmaf    = ''
    fps     = ''

    def __init__(self, encoder_, set_, quality_, bitrate_, psnr_y_, ssim_, ms_ssim_, vmaf_, fps_):
        self.encoder = encoder_
        self.set     = set_
        self.quality = quality_
        self.bitrate = bitrate_
        self.psnr_y  = psnr_y_
        self.ssim    = ssim_
        self.ms_ssim = ms_ssim_
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
        if param == 'psnr_y':
            return self.psnr_y
        if param == 'ssim':
            return self.ssim
        if param == 'ms_ssim':
            return self.ms_ssim
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
                psnr_y  = line_data[4].strip()
                ssim    = line_data[5].strip()
                ms_ssim = line_data[6].strip()
                vmaf    = line_data[7].strip()
                fps     = line_data[8].strip()

                if not encoder in dict_enc_set_data:
                    dict_enc_set_data[encoder] = dict()

                enc_set_data = dict_enc_set_data[encoder]
                if not set in enc_set_data:
                    enc_set_data[set] = []
                    
                set_data = enc_set_data[set]
                set_data.append(EncodeData(encoder, set, quality, bitrate, psnr_y, ssim, ms_ssim, vmaf, fps))
            
    return dict_enc_set_data

def get_date_prefix():
    tdatetime = datetime.datetime.now()
    tstr = tdatetime.strftime('%Y%m%d')
    return tstr
    
def create_aspect_ratio_stg():
    return '' + \
        'var aspect_ratio_bitrate_ssim = 0.6;\n' + \
        'var aspect_ratio_bitrate_ms_ssim = 0.6;\n' + \
        'var aspect_ratio_bitrate_vmaf = 0.6;\n' + \
        'var aspect_ratio_bitrate_fps = 0.6;\n' + \
        '\n'

def get_scatter_header(target_id, name, imports_str):
    header = '' # imports_str
    header = header + 'var ctx_t' + str(target_id) + '_' + name + '_data = document.getElementById(\'chart_t' + str(target_id) + '_' + name + '\');\n'
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


def create_chart_js(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, label_x, label_y, quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    color_list = cc.glasbey_category10
    color_list += cc.glasbey_bw_minc_20_minl_30
    used_color_idx = []
    used_point_style = dict()
    
    data_definitions = []
    dataset_vars = []

    vbr_str = 'vbr' if vbr_mode else 'cbr'
    
    # datasets配列名を生成
    datasets_array_name = f"datasets_{target_id}_{vbr_str}_{label_x}_{label_y}"

    for encoder, enc_set_data in dict_enc_set_data.items():
        enc_colorhue = None
        for colorenc_name in dict_enc_colorhue:
            if colorenc_name in encoder:
                enc_colorhue = dict_enc_colorhue[colorenc_name]
                break

        for set_name, set_data in enc_set_data.items():
            if ('VBR' in set_name) == vbr_mode:
                original_label = f"{encoder} {set_name.replace('_preset_', ' P')}"
                if check_is_target(original_label, drop_list):
                    continue

                label = original_label
                for replace_data in replace_list:
                    label = label.replace(replace_data[0], replace_data[1])

                safe_encoder_name = re.sub(r'[^a-zA-Z0-9_]', '_', encoder)
                safe_set_name = re.sub(r'[^a-zA-Z0-9_]', '_', set_name)
                
                variable_name = f"data_{target_id}_{vbr_str}_{label_x}_{label_y}_{safe_encoder_name}_{safe_set_name}"
                dataset_vars.append(variable_name)
                
                hidden = 'true' if check_is_target(original_label, hidden_list) else 'false'
                dotted_line = check_is_target(original_label, dotted_list)
                dashed_line = check_is_target(original_label, dashed_list)
                color = get_new_color(color_list, used_color_idx, enc_colorhue)
                point_style = get_point_style(original_label, used_point_style)

                border_dash = ''
                if dashed_line and dotted_line:
                    border_dash = 'borderDash: [3,1],'
                elif dashed_line:
                    border_dash = 'borderDash: [12,2],'
                elif dotted_line:
                    border_dash = 'borderDash: [4,2],'

                points = ',\n'.join([f"          {{ x: {d.get_value(label_x)}, y: {d.get_value(label_y)} }}" for d in set_data if float(d.get_value(label_x)) < bitrate_max_cut])
                
                data_object_str = f"""const {variable_name} = {{
    label: "{label}",
    showLine: true,
    pointStyle: "{point_style}",
    hidden: {hidden},
    lineTension: 0.4,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: 'rgba({int(color[0]*255)}, {int(color[1]*255)}, {int(color[2]*255)}, 0.9)',
    {border_dash}
    data: [
{points}
    ]
}};"""
                data_definitions.append(data_object_str)

    # datasets配列の定義を作成
    newline_sep = ',\n  '
    datasets_array_str = f"""const {datasets_array_name} = [
  {newline_sep.join(dataset_vars)}
];"""
    
    return data_definitions, dataset_vars, datasets_array_name, datasets_array_str

def create_scatter_bitrate_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    name = get_date_prefix() + vbr_data_prefix + '_bitrate_ssim'
    data_defs, var_names, datasets_array_name, datasets_array_def = create_chart_js(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'ssim', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list)
    
    chart_body = f"""  data: {{
    datasets: {datasets_array_name}
  }},
"""
    chart_body += get_chart_options('bitrate - ssim', 'aspect_ratio_bitrate_ssim', 'bitrate (kbps)', 0, bitrate_max, 'ssim', 0.95, 1.00)
    
    return name, chart_body, data_defs, datasets_array_name, datasets_array_def

def create_scatter_bitrate_ms_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    name = get_date_prefix() + vbr_data_prefix + '_bitrate_ms_ssim'
    data_defs, var_names, datasets_array_name, datasets_array_def = create_chart_js(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'ms_ssim', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list)

    chart_body = f"""  data: {{
    datasets: {datasets_array_name}
  }},
"""
    chart_body += get_chart_options('bitrate - ms_ssim', 'aspect_ratio_bitrate_ms_ssim', 'bitrate (kbps)', 0, bitrate_max, 'ms_ssim', 0.95, 1.00)

    return name, chart_body, data_defs, datasets_array_name, datasets_array_def

def create_scatter_bitrate_vmaf(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    name = get_date_prefix() + vbr_data_prefix + '_bitrate_vmaf'
    data_defs, var_names, datasets_array_name, datasets_array_def = create_chart_js(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'vmaf', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list)

    chart_body = f"""  data: {{
    datasets: {datasets_array_name}
  }},
"""
    chart_body += get_chart_options('bitrate - vmaf', 'aspect_ratio_bitrate_vmaf', 'bitrate (kbps)', 0, bitrate_max, 'vmaf', 80, 100)
    
    return name, chart_body, data_defs, datasets_array_name, datasets_array_def

def create_scatter_bitrate_fps(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list):
    vbr_data_prefix = '_vbr' if vbr_mode else ''
    name = get_date_prefix() + vbr_data_prefix + '_bitrate_fps'
    data_defs, var_names, datasets_array_name, datasets_array_def = create_chart_js(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, 'bitrate', 'fps', quality_only, bitrate_max_cut, hidden_list, dashed_list, dotted_list, drop_list, replace_list)

    chart_body = f"""  data: {{
    datasets: {datasets_array_name}
  }},
"""
    chart_body += get_chart_options('bitrate - fps', 'aspect_ratio_bitrate_fps', 'bitrate (kbps)', 0, bitrate_max, 'fps', 0, None)

    return name, chart_body, data_defs, datasets_array_name, datasets_array_def

def add_summary_to_js(output_file):
    if not output_file or not os.path.exists(output_file):
        print(f"Error: Output file '{output_file}' not found for -add-summary.", file=sys.stderr)
        sys.exit(1)

    chart_variables = []
    with open(output_file, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(r'const\s+(chart_t[^\s=]+_data)\s*=\s*new Chart', content)
        if matches:
            chart_variables = list(dict.fromkeys(matches))

    if chart_variables:
        summary_script = '\nwindow.all_charts = [\n'
        summary_script += ',\n'.join([f'    {var}' for var in chart_variables])
        summary_script += '\n];\n\n'
        summary_script += """window.all_charts.forEach(chart => {
    if (chart && chart.data && chart.data.datasets) {
        chart.all_datasets = chart.data.datasets;
        chart.data.datasets = [];
        chart.update('none');
    }
});
"""
        with open(output_file, 'a', encoding='utf-8') as f:
            f.write(summary_script)
        print(f"Appended chart summary to {output_file}", file=sys.stderr)
    else:
        print("No charts found to create summary.", file=sys.stderr)

if __name__ == '__main__':
    if '-add-summary' in sys.argv:
        output_file = None
        try:
            o_index = sys.argv.index('-o')
            output_file = sys.argv[o_index + 1]
        except (ValueError, IndexError):
            print("Error: -o must be specified for -add-summary.", file=sys.stderr)
            sys.exit(1)
        add_summary_to_js(output_file)
        sys.exit(0)

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
    output_file = None
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
        elif sys.argv[iarg] == '-o':
            output_file = sys.argv[iarg+1]
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

    all_data_definitions = []
    all_datasets_arrays = []
    chart_info_list = []

    # SSIM
    name, chart_body, data_defs, datasets_array_name, datasets_array_def = create_scatter_bitrate_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list)
    all_data_definitions.extend(data_defs)
    all_datasets_arrays.append(datasets_array_def)
    chart_info_list.append({'name': name, 'chart_body': chart_body, 'datasets_array_name': datasets_array_name})

    # MS-SSIM
    name, chart_body, data_defs, datasets_array_name, datasets_array_def = create_scatter_bitrate_ms_ssim(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list)
    all_data_definitions.extend(data_defs)
    all_datasets_arrays.append(datasets_array_def)
    chart_info_list.append({'name': name, 'chart_body': chart_body, 'datasets_array_name': datasets_array_name})

    # VMAF
    name, chart_body, data_defs, datasets_array_name, datasets_array_def = create_scatter_bitrate_vmaf(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list)
    all_data_definitions.extend(data_defs)
    all_datasets_arrays.append(datasets_array_def)
    chart_info_list.append({'name': name, 'chart_body': chart_body, 'datasets_array_name': datasets_array_name})

    # FPS
    name, chart_body, data_defs, datasets_array_name, datasets_array_def = create_scatter_bitrate_fps(target_id, dict_enc_set_data, dict_enc_colorhue, vbr_mode, bitrate_max, bitrate_max_cut, quality_only, hidden_list, dashed_list, dotted_list, drop_list, replace_list)
    all_data_definitions.extend(data_defs)
    all_datasets_arrays.append(datasets_array_def)
    chart_info_list.append({'name': name, 'chart_body': chart_body, 'datasets_array_name': datasets_array_name})

    if output_file:
        data_output_file = os.path.splitext(output_file)[0] + '_data.js'
        with open(data_output_file, 'a', encoding='utf-8') as f:
            # 個別のデータオブジェクトを書き込み
            for item in all_data_definitions:
                f.write(item + '\n\n')
            
            # datasets配列を書き込み
            for datasets_array in all_datasets_arrays:
                f.write(datasets_array + '\n\n')
        
        with open(output_file, 'a', encoding='utf-8') as f:
            if write_aspect:
                f.write(create_aspect_ratio_stg())

            for chart_info in chart_info_list:
                datasets_array_name = chart_info['datasets_array_name']
                
                imports_str = f"import {{ {datasets_array_name} }} from './{os.path.basename(data_output_file)}';\n"
                
                header = get_scatter_header(target_id, chart_info['name'], imports_str)
                footer = get_chart_footer()
                full_chart_str = f"{header}{chart_info['chart_body']}{footer}\n"
                f.write(full_chart_str)
    else:
        # If no output file, print to stdout (or handle as error)
        # For now, printing a message as the logic is complex for stdout
        print("Please specify an output file with -o to generate chart scripts.", file=sys.stderr)