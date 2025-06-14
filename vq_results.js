var aspect_ratio_bitrate_ssim = 0.6;
var aspect_ratio_bitrate_ms_ssim = 0.6;
var aspect_ratio_bitrate_vmaf = 0.6;
var aspect_ratio_bitrate_fps = 0.6;

var ctx_t1_20250614_bitrate_ssim_data = document.getElementById('chart_t1_20250614_bitrate_ssim');
const chart_t1_20250614_bitrate_ssim_data = new Chart(ctx_t1_20250614_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_cbr_bitrate_ssim__x264_medium_crf,
      data_1_cbr_bitrate_ssim__x264_veryslow_crf,
      data_1_cbr_bitrate_ssim__x265_medium_crf,
      data_1_cbr_bitrate_ssim__x265_medium_10bit_crf,
      data_1_cbr_bitrate_ssim__x265_veryslow_crf,
      data_1_cbr_bitrate_ssim__x265_veryslow_10bit_crf,
      data_1_cbr_bitrate_ssim__svtav1_8bit_preset_4,
      data_1_cbr_bitrate_ssim__svtav1_10bit_preset_4,
      data_1_cbr_bitrate_ssim__svtav1_8bit_preset_6,
      data_1_cbr_bitrate_ssim__svtav1_10bit_preset_6,
      data_1_cbr_bitrate_ssim__svtav1_8bit_preset_10,
      data_1_cbr_bitrate_ssim__svtav1_10bit_preset_10,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_quality,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_normal,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_H_264_FF_quality,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_H_264_FF_normal,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_1_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_H_264_quality,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_H_264_normal,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_quality,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_normal,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_10bit_quality,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_10bit_normal,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_quality,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_normal,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_H_264_quality,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_H_264_normal,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_HEVC_quality,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_HEVC_normal,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_AV1_quality,
      data_1_cbr_bitrate_ssim_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_bitrate_ms_ssim_data = document.getElementById('chart_t1_20250614_bitrate_ms_ssim');
const chart_t1_20250614_bitrate_ms_ssim_data = new Chart(ctx_t1_20250614_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_cbr_bitrate_ms_ssim__x264_medium_crf,
      data_1_cbr_bitrate_ms_ssim__x264_veryslow_crf,
      data_1_cbr_bitrate_ms_ssim__x265_medium_crf,
      data_1_cbr_bitrate_ms_ssim__x265_medium_10bit_crf,
      data_1_cbr_bitrate_ms_ssim__x265_veryslow_crf,
      data_1_cbr_bitrate_ms_ssim__x265_veryslow_10bit_crf,
      data_1_cbr_bitrate_ms_ssim__svtav1_8bit_preset_4,
      data_1_cbr_bitrate_ms_ssim__svtav1_10bit_preset_4,
      data_1_cbr_bitrate_ms_ssim__svtav1_8bit_preset_6,
      data_1_cbr_bitrate_ms_ssim__svtav1_10bit_preset_6,
      data_1_cbr_bitrate_ms_ssim__svtav1_8bit_preset_10,
      data_1_cbr_bitrate_ms_ssim__svtav1_10bit_preset_10,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_quality,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_normal,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_H_264_FF_quality,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_H_264_FF_normal,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_1_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_H_264_quality,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_H_264_normal,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_quality,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_normal,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_10bit_quality,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_10bit_normal,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_quality,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_normal,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_H_264_quality,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_H_264_normal,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_HEVC_quality,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_HEVC_normal,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_AV1_quality,
      data_1_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ms_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ms_ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ms_ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ms_ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_bitrate_vmaf_data = document.getElementById('chart_t1_20250614_bitrate_vmaf');
const chart_t1_20250614_bitrate_vmaf_data = new Chart(ctx_t1_20250614_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_cbr_bitrate_vmaf__x264_medium_crf,
      data_1_cbr_bitrate_vmaf__x264_veryslow_crf,
      data_1_cbr_bitrate_vmaf__x265_medium_crf,
      data_1_cbr_bitrate_vmaf__x265_medium_10bit_crf,
      data_1_cbr_bitrate_vmaf__x265_veryslow_crf,
      data_1_cbr_bitrate_vmaf__x265_veryslow_10bit_crf,
      data_1_cbr_bitrate_vmaf__svtav1_8bit_preset_4,
      data_1_cbr_bitrate_vmaf__svtav1_10bit_preset_4,
      data_1_cbr_bitrate_vmaf__svtav1_8bit_preset_6,
      data_1_cbr_bitrate_vmaf__svtav1_10bit_preset_6,
      data_1_cbr_bitrate_vmaf__svtav1_8bit_preset_10,
      data_1_cbr_bitrate_vmaf__svtav1_10bit_preset_10,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_quality,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_normal,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_H_264_FF_quality,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_H_264_FF_normal,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_1_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_H_264_quality,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_H_264_normal,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_quality,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_normal,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_10bit_quality,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_10bit_normal,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_quality,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_normal,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_H_264_quality,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_H_264_normal,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_HEVC_quality,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_HEVC_normal,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_AV1_quality,
      data_1_cbr_bitrate_vmaf_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_vmaf,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - vmaf',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', vmaf = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 80,
        max: 100,
        title: {
          display: true,
          text: 'vmaf',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_bitrate_fps_data = document.getElementById('chart_t1_20250614_bitrate_fps');
const chart_t1_20250614_bitrate_fps_data = new Chart(ctx_t1_20250614_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_cbr_bitrate_fps__x264_medium_crf,
      data_1_cbr_bitrate_fps__x264_veryslow_crf,
      data_1_cbr_bitrate_fps__x265_medium_crf,
      data_1_cbr_bitrate_fps__x265_medium_10bit_crf,
      data_1_cbr_bitrate_fps__x265_veryslow_crf,
      data_1_cbr_bitrate_fps__x265_veryslow_10bit_crf,
      data_1_cbr_bitrate_fps__svtav1_8bit_preset_4,
      data_1_cbr_bitrate_fps__svtav1_10bit_preset_4,
      data_1_cbr_bitrate_fps__svtav1_8bit_preset_6,
      data_1_cbr_bitrate_fps__svtav1_10bit_preset_6,
      data_1_cbr_bitrate_fps__svtav1_8bit_preset_10,
      data_1_cbr_bitrate_fps__svtav1_10bit_preset_10,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_quality,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_normal,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_H_264_FF_quality,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_H_264_FF_normal,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_1_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_H_264_quality,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_H_264_normal,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_quality,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_normal,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_10bit_quality,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_10bit_normal,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_AV1_quality,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_AV1_normal,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_AV1_10bit_quality,
      data_1_cbr_bitrate_fps_rtx4080_NVEncC_AV1_10bit_normal,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_H_264_quality,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_H_264_normal,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_HEVC_quality,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_HEVC_normal,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_AV1_quality,
      data_1_cbr_bitrate_fps_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_fps,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - fps',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', fps = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0,
        //max:,
        title: {
          display: true,
          text: 'fps',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_vbr_bitrate_ssim_data = document.getElementById('chart_t1_20250614_vbr_bitrate_ssim');
const chart_t1_20250614_vbr_bitrate_ssim_data = new Chart(ctx_t1_20250614_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_vbr_bitrate_ms_ssim_data = document.getElementById('chart_t1_20250614_vbr_bitrate_ms_ssim');
const chart_t1_20250614_vbr_bitrate_ms_ssim_data = new Chart(ctx_t1_20250614_vbr_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ms_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ms_ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ms_ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ms_ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_vbr_bitrate_vmaf_data = document.getElementById('chart_t1_20250614_vbr_bitrate_vmaf');
const chart_t1_20250614_vbr_bitrate_vmaf_data = new Chart(ctx_t1_20250614_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_vmaf,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - vmaf',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', vmaf = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 80,
        max: 100,
        title: {
          display: true,
          text: 'vmaf',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t1_20250614_vbr_bitrate_fps_data = document.getElementById('chart_t1_20250614_vbr_bitrate_fps');
const chart_t1_20250614_vbr_bitrate_fps_data = new Chart(ctx_t1_20250614_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_H_264_quality,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_H_264_normal,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_quality,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_normal,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_quality,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_normal,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_1_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_fps,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - fps',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', fps = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0,
        //max:,
        title: {
          display: true,
          text: 'fps',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_bitrate_ssim_data = document.getElementById('chart_t2_20250614_bitrate_ssim');
const chart_t2_20250614_bitrate_ssim_data = new Chart(ctx_t2_20250614_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_cbr_bitrate_ssim__x264_medium_crf,
      data_2_cbr_bitrate_ssim__x264_veryslow_crf,
      data_2_cbr_bitrate_ssim__x265_medium_crf,
      data_2_cbr_bitrate_ssim__x265_medium_10bit_crf,
      data_2_cbr_bitrate_ssim__x265_veryslow_crf,
      data_2_cbr_bitrate_ssim__x265_veryslow_10bit_crf,
      data_2_cbr_bitrate_ssim__svtav1_8bit_preset_4,
      data_2_cbr_bitrate_ssim__svtav1_10bit_preset_4,
      data_2_cbr_bitrate_ssim__svtav1_8bit_preset_6,
      data_2_cbr_bitrate_ssim__svtav1_10bit_preset_6,
      data_2_cbr_bitrate_ssim__svtav1_8bit_preset_10,
      data_2_cbr_bitrate_ssim__svtav1_10bit_preset_10,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_quality,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_normal,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_H_264_FF_quality,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_H_264_FF_normal,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_2_cbr_bitrate_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_H_264_quality,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_H_264_normal,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_quality,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_normal,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_10bit_quality,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_HEVC_10bit_normal,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_quality,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_normal,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_ssim_rtx4080_NVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_ssim_rx9070xt_VCEEncC_AV1_normal,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_ssim_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_bitrate_ms_ssim_data = document.getElementById('chart_t2_20250614_bitrate_ms_ssim');
const chart_t2_20250614_bitrate_ms_ssim_data = new Chart(ctx_t2_20250614_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_cbr_bitrate_ms_ssim__x264_medium_crf,
      data_2_cbr_bitrate_ms_ssim__x264_veryslow_crf,
      data_2_cbr_bitrate_ms_ssim__x265_medium_crf,
      data_2_cbr_bitrate_ms_ssim__x265_medium_10bit_crf,
      data_2_cbr_bitrate_ms_ssim__x265_veryslow_crf,
      data_2_cbr_bitrate_ms_ssim__x265_veryslow_10bit_crf,
      data_2_cbr_bitrate_ms_ssim__svtav1_8bit_preset_4,
      data_2_cbr_bitrate_ms_ssim__svtav1_10bit_preset_4,
      data_2_cbr_bitrate_ms_ssim__svtav1_8bit_preset_6,
      data_2_cbr_bitrate_ms_ssim__svtav1_10bit_preset_6,
      data_2_cbr_bitrate_ms_ssim__svtav1_8bit_preset_10,
      data_2_cbr_bitrate_ms_ssim__svtav1_10bit_preset_10,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_quality,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_normal,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_H_264_FF_quality,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_H_264_FF_normal,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_2_cbr_bitrate_ms_ssim_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_H_264_quality,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_H_264_normal,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_quality,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_normal,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_10bit_quality,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_HEVC_10bit_normal,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_quality,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_normal,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_ms_ssim_rtx4080_NVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_ms_ssim_rx9070xt_VCEEncC_AV1_normal,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_ms_ssim_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ms_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ms_ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ms_ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ms_ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_bitrate_vmaf_data = document.getElementById('chart_t2_20250614_bitrate_vmaf');
const chart_t2_20250614_bitrate_vmaf_data = new Chart(ctx_t2_20250614_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_cbr_bitrate_vmaf__x264_medium_crf,
      data_2_cbr_bitrate_vmaf__x264_veryslow_crf,
      data_2_cbr_bitrate_vmaf__x265_medium_crf,
      data_2_cbr_bitrate_vmaf__x265_medium_10bit_crf,
      data_2_cbr_bitrate_vmaf__x265_veryslow_crf,
      data_2_cbr_bitrate_vmaf__x265_veryslow_10bit_crf,
      data_2_cbr_bitrate_vmaf__svtav1_8bit_preset_4,
      data_2_cbr_bitrate_vmaf__svtav1_10bit_preset_4,
      data_2_cbr_bitrate_vmaf__svtav1_8bit_preset_6,
      data_2_cbr_bitrate_vmaf__svtav1_10bit_preset_6,
      data_2_cbr_bitrate_vmaf__svtav1_8bit_preset_10,
      data_2_cbr_bitrate_vmaf__svtav1_10bit_preset_10,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_quality,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_normal,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_H_264_FF_quality,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_H_264_FF_normal,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_2_cbr_bitrate_vmaf_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_H_264_quality,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_H_264_normal,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_quality,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_normal,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_10bit_quality,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_HEVC_10bit_normal,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_quality,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_normal,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_vmaf_rtx4080_NVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_vmaf_rx9070xt_VCEEncC_AV1_normal,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_vmaf_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_vmaf,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - vmaf',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', vmaf = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 80,
        max: 100,
        title: {
          display: true,
          text: 'vmaf',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_bitrate_fps_data = document.getElementById('chart_t2_20250614_bitrate_fps');
const chart_t2_20250614_bitrate_fps_data = new Chart(ctx_t2_20250614_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_cbr_bitrate_fps__x264_medium_crf,
      data_2_cbr_bitrate_fps__x264_veryslow_crf,
      data_2_cbr_bitrate_fps__x265_medium_crf,
      data_2_cbr_bitrate_fps__x265_medium_10bit_crf,
      data_2_cbr_bitrate_fps__x265_veryslow_crf,
      data_2_cbr_bitrate_fps__x265_veryslow_10bit_crf,
      data_2_cbr_bitrate_fps__svtav1_8bit_preset_4,
      data_2_cbr_bitrate_fps__svtav1_10bit_preset_4,
      data_2_cbr_bitrate_fps__svtav1_8bit_preset_6,
      data_2_cbr_bitrate_fps__svtav1_10bit_preset_6,
      data_2_cbr_bitrate_fps__svtav1_8bit_preset_10,
      data_2_cbr_bitrate_fps__svtav1_10bit_preset_10,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_quality,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_normal,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_H_264_FF_quality,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_H_264_FF_normal,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_quality,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_normal,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_10bit_quality,
      data_2_cbr_bitrate_fps_Arc_B580_QSVEncC_HEVC_FF_10bit_normal,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_H_264_quality,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_H_264_normal,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_quality,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_normal,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_10bit_quality,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_HEVC_10bit_normal,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_AV1_quality,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_AV1_normal,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_AV1_10bit_quality,
      data_2_cbr_bitrate_fps_rtx4080_NVEncC_AV1_10bit_normal,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_fps_rx9070xt_VCEEncC_AV1_normal,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_H_264_quality,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_H_264_normal,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_HEVC_quality,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_HEVC_normal,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_AV1_quality,
      data_2_cbr_bitrate_fps_rx7900xt_VCEEncC_AV1_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_fps,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - fps',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', fps = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0,
        //max:,
        title: {
          display: true,
          text: 'fps',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_vbr_bitrate_ssim_data = document.getElementById('chart_t2_20250614_vbr_bitrate_ssim');
const chart_t2_20250614_vbr_bitrate_ssim_data = new Chart(ctx_t2_20250614_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_ssim_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_vbr_bitrate_ms_ssim_data = document.getElementById('chart_t2_20250614_vbr_bitrate_ms_ssim');
const chart_t2_20250614_vbr_bitrate_ms_ssim_data = new Chart(ctx_t2_20250614_vbr_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_ms_ssim_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_ms_ssim_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_ms_ssim,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - ms_ssim',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', ms_ssim = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0.95,
        max: 1.0,
        title: {
          display: true,
          text: 'ms_ssim',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_vbr_bitrate_vmaf_data = document.getElementById('chart_t2_20250614_vbr_bitrate_vmaf');
const chart_t2_20250614_vbr_bitrate_vmaf_data = new Chart(ctx_t2_20250614_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_vmaf_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_vmaf_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_vmaf,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - vmaf',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', vmaf = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 80,
        max: 100,
        title: {
          display: true,
          text: 'vmaf',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

var ctx_t2_20250614_vbr_bitrate_fps_data = document.getElementById('chart_t2_20250614_vbr_bitrate_fps');
const chart_t2_20250614_vbr_bitrate_fps_data = new Chart(ctx_t2_20250614_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_fps_Arc_B580_QSVEncC_VBR_AV1_10bit_normal,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_H_264_quality,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_H_264_normal,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_quality,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_normal,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_10bit_quality,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_HEVC_10bit_normal,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_quality,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_normal,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_10bit_quality,
      data_2_vbr_bitrate_fps_rtx4080_NVEncC_VBR_AV1_10bit_normal
    ]
  },

  options: {
    // レスポンシブ対応
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: aspect_ratio_bitrate_fps,
    locale: 'ja-JP',
    plugins: {
      // グラフタイトルの設定
      title: {
        text: 'bitrate - fps',
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
            return context.dataset.label + ': bitrate (kbps) = ' + value.x + ', fps = ' + value.y;
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
        min: 0,
        max: 8000,
        title: {
          display: true,
          text: 'bitrate (kbps)',
          font: {
            size: 12,
          }
        },
      },
      y: {
        type: 'linear',
        display: true,
        min: 0,
        //max:,
        title: {
          display: true,
          text: 'fps',
          font: {
            size: 12,
          }
        },
      }
    },
  },

});

