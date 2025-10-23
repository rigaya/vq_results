var aspect_ratio_bitrate_ssim = 1.0;
var aspect_ratio_bitrate_ms_ssim = 1.0;
var aspect_ratio_bitrate_vmaf = 1.0;
var aspect_ratio_bitrate_fps = 1.0;

var ctx_t1_20251023_bitrate_ssim_data = document.getElementById('chart_t1_20251023_bitrate_ssim');
const chart_t1_20251023_bitrate_ssim_data = new Chart(ctx_t1_20251023_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1__bitrate_ssim
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

var ctx_t1_20251023_bitrate_vmaf_data = document.getElementById('chart_t1_20251023_bitrate_vmaf');
const chart_t1_20251023_bitrate_vmaf_data = new Chart(ctx_t1_20251023_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1__bitrate_vmaf
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

var ctx_t1_20251023_bitrate_fps_data = document.getElementById('chart_t1_20251023_bitrate_fps');
const chart_t1_20251023_bitrate_fps_data = new Chart(ctx_t1_20251023_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1__bitrate_fps
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

var ctx_t1_20251023_vbr_bitrate_ssim_data = document.getElementById('chart_t1_20251023_vbr_bitrate_ssim');
const chart_t1_20251023_vbr_bitrate_ssim_data = new Chart(ctx_t1_20251023_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1_vbr_bitrate_ssim
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

var ctx_t1_20251023_vbr_bitrate_vmaf_data = document.getElementById('chart_t1_20251023_vbr_bitrate_vmaf');
const chart_t1_20251023_vbr_bitrate_vmaf_data = new Chart(ctx_t1_20251023_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1_vbr_bitrate_vmaf
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

var ctx_t1_20251023_vbr_bitrate_fps_data = document.getElementById('chart_t1_20251023_vbr_bitrate_fps');
const chart_t1_20251023_vbr_bitrate_fps_data = new Chart(ctx_t1_20251023_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_1_vbr_bitrate_fps
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

var ctx_t2_20251023_bitrate_ssim_data = document.getElementById('chart_t2_20251023_bitrate_ssim');
const chart_t2_20251023_bitrate_ssim_data = new Chart(ctx_t2_20251023_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2__bitrate_ssim
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

var ctx_t2_20251023_bitrate_vmaf_data = document.getElementById('chart_t2_20251023_bitrate_vmaf');
const chart_t2_20251023_bitrate_vmaf_data = new Chart(ctx_t2_20251023_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2__bitrate_vmaf
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

var ctx_t2_20251023_bitrate_fps_data = document.getElementById('chart_t2_20251023_bitrate_fps');
const chart_t2_20251023_bitrate_fps_data = new Chart(ctx_t2_20251023_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2__bitrate_fps
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

var ctx_t2_20251023_vbr_bitrate_ssim_data = document.getElementById('chart_t2_20251023_vbr_bitrate_ssim');
const chart_t2_20251023_vbr_bitrate_ssim_data = new Chart(ctx_t2_20251023_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2_vbr_bitrate_ssim
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

var ctx_t2_20251023_vbr_bitrate_vmaf_data = document.getElementById('chart_t2_20251023_vbr_bitrate_vmaf');
const chart_t2_20251023_vbr_bitrate_vmaf_data = new Chart(ctx_t2_20251023_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2_vbr_bitrate_vmaf
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

var ctx_t2_20251023_vbr_bitrate_fps_data = document.getElementById('chart_t2_20251023_vbr_bitrate_fps');
const chart_t2_20251023_vbr_bitrate_fps_data = new Chart(ctx_t2_20251023_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: datasets_2_vbr_bitrate_fps
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


window.all_charts = [
    chart_t1_20251023_bitrate_ssim_data,
    chart_t1_20251023_bitrate_vmaf_data,
    chart_t1_20251023_bitrate_fps_data,
    chart_t1_20251023_vbr_bitrate_ssim_data,
    chart_t1_20251023_vbr_bitrate_vmaf_data,
    chart_t1_20251023_vbr_bitrate_fps_data,
    chart_t2_20251023_bitrate_ssim_data,
    chart_t2_20251023_bitrate_vmaf_data,
    chart_t2_20251023_bitrate_fps_data,
    chart_t2_20251023_vbr_bitrate_ssim_data,
    chart_t2_20251023_vbr_bitrate_vmaf_data,
    chart_t2_20251023_vbr_bitrate_fps_data
];

window.all_charts.forEach(chart => {
    if (chart && chart.data && chart.data.datasets) {
        chart.all_datasets = chart.data.datasets;
        chart.data.datasets = [];
        chart.update('none');
    }
});
