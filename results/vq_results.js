var aspect_ratio_bitrate_ssim = 0.75;
var aspect_ratio_bitrate_vmaf = 0.75;
var aspect_ratio_bitrate_fps = 0.75;


var ctx_t1_20240505_bitrate_ssim_data = document.getElementById('chart_t1_20240505_bitrate_ssim');
const chart_t1_20240505_bitrate_ssim_data = new Chart(ctx_t1_20240505_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 6249.35, y: 0.99023 },
          { x: 3887.93, y: 0.986392 },
          { x: 2464.23, y: 0.980555 },
          { x: 1631.88, y: 0.972556 },
          { x: 1152.31, y: 0.963388 },
          { x: 841.33, y: 0.950645 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 0.991612 },
          { x: 3807.65, y: 0.987795 },
          { x: 2438.16, y: 0.981968 },
          { x: 1616.83, y: 0.973997 },
          { x: 1140.02, y: 0.96498 },
          { x: 834.34, y: 0.952188 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6858.27, y: 0.993794 },
          { x: 4505.80, y: 0.991705 },
          { x: 2744.03, y: 0.987886 },
          { x: 1681.01, y: 0.982167 },
          { x: 1058.94, y: 0.973968 },
          { x: 671.68, y: 0.962801 },
          { x: 460.41, y: 0.948637 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6726.69, y: 0.994779 },
          { x: 4437.48, y: 0.992758 },
          { x: 2719.63, y: 0.988965 },
          { x: 1669.78, y: 0.983201 },
          { x: 1053.81, y: 0.975019 },
          { x: 668.88, y: 0.963839 },
          { x: 458.77, y: 0.94991 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6213.53, y: 0.993139 },
          { x: 4145.39, y: 0.990877 },
          { x: 3004.77, y: 0.988298 },
          { x: 1792.40, y: 0.982304 },
          { x: 1142.37, y: 0.974004 },
          { x: 784.67, y: 0.963525 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 0.994183 },
          { x: 4062.71, y: 0.991946 },
          { x: 2964.40, y: 0.989367 },
          { x: 1772.45, y: 0.983216 },
          { x: 1134.62, y: 0.974877 },
          { x: 779.22, y: 0.964251 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 5968.44, y: 0.993355 },
          { x: 3968.07, y: 0.991151 },
          { x: 2859.49, y: 0.988641 },
          { x: 1708.19, y: 0.982852 },
          { x: 1092.80, y: 0.974803 },
          { x: 748.49, y: 0.964498 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 0.994384 },
          { x: 3906.13, y: 0.992225 },
          { x: 2835.05, y: 0.989744 },
          { x: 1697.47, y: 0.983859 },
          { x: 1085.75, y: 0.975763 },
          { x: 743.02, y: 0.9653 }
        ]
      },
    ],
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

var ctx_t1_20240505_bitrate_vmaf_data = document.getElementById('chart_t1_20240505_bitrate_vmaf');
const chart_t1_20240505_bitrate_vmaf_data = new Chart(ctx_t1_20240505_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 6249.35, y: 97.348478 },
          { x: 3887.93, y: 95.37471 },
          { x: 2464.23, y: 91.652245 },
          { x: 1631.88, y: 85.603308 },
          { x: 1152.31, y: 78.21675 },
          { x: 841.33, y: 67.984784 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 97.356346 },
          { x: 3807.65, y: 95.873756 },
          { x: 2438.16, y: 93.186286 },
          { x: 1616.83, y: 88.941098 },
          { x: 1140.02, y: 83.646555 },
          { x: 834.34, y: 76.031198 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6858.27, y: 98.449611 },
          { x: 4505.80, y: 97.689614 },
          { x: 2744.03, y: 95.890143 },
          { x: 1681.01, y: 92.229596 },
          { x: 1058.94, y: 86.282712 },
          { x: 671.68, y: 77.046809 },
          { x: 460.41, y: 65.466315 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6726.69, y: 98.2561 },
          { x: 4437.48, y: 97.648485 },
          { x: 2719.63, y: 96.259754 },
          { x: 1669.78, y: 93.597775 },
          { x: 1053.81, y: 89.316049 },
          { x: 668.88, y: 82.73278 },
          { x: 458.77, y: 74.411523 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6213.53, y: 98.324896 },
          { x: 4145.39, y: 97.52724 },
          { x: 3004.77, y: 96.504808 },
          { x: 1792.40, y: 93.277417 },
          { x: 1142.37, y: 87.7316 },
          { x: 784.67, y: 79.229472 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 98.153593 },
          { x: 4062.71, y: 97.518608 },
          { x: 2964.40, y: 96.730681 },
          { x: 1772.45, y: 94.27549 },
          { x: 1134.62, y: 90.154717 },
          { x: 779.22, y: 83.992342 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 5968.44, y: 98.407664 },
          { x: 3968.07, y: 97.676489 },
          { x: 2859.49, y: 96.694844 },
          { x: 1708.19, y: 93.682708 },
          { x: 1092.80, y: 88.426847 },
          { x: 748.49, y: 80.269564 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 98.223843 },
          { x: 3906.13, y: 97.63171 },
          { x: 2835.05, y: 96.893363 },
          { x: 1697.47, y: 94.583093 },
          { x: 1085.75, y: 90.672675 },
          { x: 743.02, y: 84.776632 }
        ]
      },
    ],
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

var ctx_t1_20240505_bitrate_fps_data = document.getElementById('chart_t1_20240505_bitrate_fps');
const chart_t1_20240505_bitrate_fps_data = new Chart(ctx_t1_20240505_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 6249.35, y: 37.25 },
          { x: 3887.93, y: 38.27 },
          { x: 2464.23, y: 39.07 },
          { x: 1631.88, y: 39.27 },
          { x: 1152.31, y: 39.08 },
          { x: 841.33, y: 39.23 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 34.80 },
          { x: 3807.65, y: 35.72 },
          { x: 2438.16, y: 36.19 },
          { x: 1616.83, y: 36.45 },
          { x: 1140.02, y: 36.44 },
          { x: 834.34, y: 36.38 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6858.27, y: 59.41 },
          { x: 4505.80, y: 62.68 },
          { x: 2744.03, y: 66.96 },
          { x: 1681.01, y: 71.33 },
          { x: 1058.94, y: 75.13 },
          { x: 671.68, y: 76.66 },
          { x: 460.41, y: 80.22 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6726.69, y: 56.67 },
          { x: 4437.48, y: 61.00 },
          { x: 2719.63, y: 66.78 },
          { x: 1669.78, y: 72.41 },
          { x: 1053.81, y: 76.44 },
          { x: 668.88, y: 80.77 },
          { x: 458.77, y: 83.88 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6213.53, y: 264.67 },
          { x: 4145.39, y: 266.14 },
          { x: 3004.77, y: 266.26 },
          { x: 1792.40, y: 265.83 },
          { x: 1142.37, y: 265.50 },
          { x: 784.67, y: 264.93 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 184.74 },
          { x: 4062.71, y: 184.90 },
          { x: 2964.40, y: 185.20 },
          { x: 1772.45, y: 185.59 },
          { x: 1134.62, y: 186.10 },
          { x: 779.22, y: 186.34 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 5968.44, y: 242.10 },
          { x: 3968.07, y: 242.04 },
          { x: 2859.49, y: 244.23 },
          { x: 1708.19, y: 244.49 },
          { x: 1092.80, y: 245.79 },
          { x: 748.49, y: 246.95 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 228.34 },
          { x: 3906.13, y: 228.39 },
          { x: 2835.05, y: 229.69 },
          { x: 1697.47, y: 230.63 },
          { x: 1085.75, y: 231.08 },
          { x: 743.02, y: 230.96 }
        ]
      },
    ],
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

var ctx_t2_20240505_bitrate_ssim_data = document.getElementById('chart_t2_20240505_bitrate_ssim');
const chart_t2_20240505_bitrate_ssim_data = new Chart(ctx_t2_20240505_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 7088.83, y: 0.992793 },
          { x: 4414.30, y: 0.990801 },
          { x: 2595.68, y: 0.988312 },
          { x: 1510.13, y: 0.984422 },
          { x: 907.39, y: 0.978662 },
          { x: 539.53, y: 0.969709 },
          { x: 414.52, y: 0.960597 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 0.994209 },
          { x: 4170.07, y: 0.992421 },
          { x: 2480.42, y: 0.989877 },
          { x: 1461.78, y: 0.986153 },
          { x: 887.66, y: 0.980324 },
          { x: 518.18, y: 0.971482 },
          { x: 403.54, y: 0.962287 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6817.12, y: 0.99463 },
          { x: 3893.41, y: 0.992834 },
          { x: 1929.28, y: 0.98986 },
          { x: 944.52, y: 0.985485 },
          { x: 513.15, y: 0.979245 },
          { x: 300.15, y: 0.970851 },
          { x: 201.19, y: 0.95955 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6669.44, y: 0.995607 },
          { x: 3814.25, y: 0.993873 },
          { x: 1903.58, y: 0.990895 },
          { x: 940.43, y: 0.986535 },
          { x: 511.27, y: 0.980549 },
          { x: 298.40, y: 0.972357 },
          { x: 198.82, y: 0.961141 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 4876.84, y: 0.993662 },
          { x: 2944.40, y: 0.991888 },
          { x: 2033.83, y: 0.990219 },
          { x: 975.33, y: 0.985502 },
          { x: 539.01, y: 0.978104 },
          { x: 348.16, y: 0.968424 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 0.994686 },
          { x: 2865.86, y: 0.992902 },
          { x: 1987.68, y: 0.991232 },
          { x: 960.80, y: 0.986402 },
          { x: 535.57, y: 0.979266 },
          { x: 343.97, y: 0.969701 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 4683.04, y: 0.993797 },
          { x: 2840.02, y: 0.992046 },
          { x: 1979.55, y: 0.99045 },
          { x: 961.41, y: 0.985948 },
          { x: 530.94, y: 0.978895 },
          { x: 339.78, y: 0.969422 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 0.994808 },
          { x: 2782.30, y: 0.993077 },
          { x: 1948.98, y: 0.991486 },
          { x: 952.63, y: 0.986886 },
          { x: 529.20, y: 0.980135 },
          { x: 336.28, y: 0.970747 }
        ]
      },
    ],
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

var ctx_t2_20240505_bitrate_vmaf_data = document.getElementById('chart_t2_20240505_bitrate_vmaf');
const chart_t2_20240505_bitrate_vmaf_data = new Chart(ctx_t2_20240505_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 7088.83, y: 95.351031 },
          { x: 4414.30, y: 93.75314 },
          { x: 2595.68, y: 91.040659 },
          { x: 1510.13, y: 87.06178 },
          { x: 907.39, y: 80.756804 },
          { x: 539.53, y: 71.493958 },
          { x: 414.52, y: 64.145641 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 95.701188 },
          { x: 4170.07, y: 94.530306 },
          { x: 2480.42, y: 92.619459 },
          { x: 1461.78, y: 89.815377 },
          { x: 887.66, y: 85.333348 },
          { x: 518.18, y: 78.756682 },
          { x: 403.54, y: 73.348073 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6817.12, y: 96.561476 },
          { x: 3893.41, y: 94.935491 },
          { x: 1929.28, y: 91.906041 },
          { x: 944.52, y: 87.229049 },
          { x: 513.15, y: 80.760463 },
          { x: 300.15, y: 71.265534 },
          { x: 201.19, y: 59.555032 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6669.44, y: 96.610474 },
          { x: 3814.25, y: 95.433286 },
          { x: 1903.58, y: 93.317515 },
          { x: 940.43, y: 90.069799 },
          { x: 511.27, y: 85.445113 },
          { x: 298.40, y: 78.758804 },
          { x: 198.82, y: 70.242218 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 4876.84, y: 95.489604 },
          { x: 2944.40, y: 93.593358 },
          { x: 2033.83, y: 91.892534 },
          { x: 975.33, y: 87.340412 },
          { x: 539.01, y: 80.959882 },
          { x: 348.16, y: 71.459232 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 95.852727 },
          { x: 2865.86, y: 94.490694 },
          { x: 1987.68, y: 93.291854 },
          { x: 960.80, y: 90.145278 },
          { x: 535.57, y: 85.570069 },
          { x: 343.97, y: 78.802158 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 4683.04, y: 95.631214 },
          { x: 2840.02, y: 93.793796 },
          { x: 1979.55, y: 92.168287 },
          { x: 961.41, y: 87.892448 },
          { x: 530.94, y: 81.921762 },
          { x: 339.78, y: 72.957155 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 95.962026 },
          { x: 2782.30, y: 94.656086 },
          { x: 1948.98, y: 93.519064 },
          { x: 952.63, y: 90.559594 },
          { x: 529.20, y: 86.293051 },
          { x: 336.28, y: 79.941693 }
        ]
      },
    ],
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

var ctx_t2_20240505_bitrate_fps_data = document.getElementById('chart_t2_20240505_bitrate_fps');
const chart_t2_20240505_bitrate_fps_data = new Chart(ctx_t2_20240505_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 7088.83, y: 36.14 },
          { x: 4414.30, y: 36.56 },
          { x: 2595.68, y: 37.32 },
          { x: 1510.13, y: 37.93 },
          { x: 907.39, y: 38.04 },
          { x: 539.53, y: 38.29 },
          { x: 414.52, y: 38.19 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 34.02 },
          { x: 4170.07, y: 34.23 },
          { x: 2480.42, y: 35.06 },
          { x: 1461.78, y: 35.59 },
          { x: 887.66, y: 35.97 },
          { x: 518.18, y: 35.92 },
          { x: 403.54, y: 35.89 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 6817.12, y: 56.18 },
          { x: 3893.41, y: 61.59 },
          { x: 1929.28, y: 69.28 },
          { x: 944.52, y: 77.10 },
          { x: 513.15, y: 81.19 },
          { x: 300.15, y: 85.55 },
          { x: 201.19, y: 89.25 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6669.44, y: 55.15 },
          { x: 3814.25, y: 61.15 },
          { x: 1903.58, y: 69.13 },
          { x: 940.43, y: 77.66 },
          { x: 511.27, y: 84.43 },
          { x: 298.40, y: 91.08 },
          { x: 198.82, y: 94.26 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 4876.84, y: 267.63 },
          { x: 2944.40, y: 267.63 },
          { x: 2033.83, y: 268.07 },
          { x: 975.33, y: 267.47 },
          { x: 539.01, y: 270.53 },
          { x: 348.16, y: 268.42 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 183.58 },
          { x: 2865.86, y: 185.23 },
          { x: 1987.68, y: 184.13 },
          { x: 960.80, y: 182.86 },
          { x: 535.57, y: 184.77 },
          { x: 343.97, y: 181.76 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 4683.04, y: 248.05 },
          { x: 2840.02, y: 248.36 },
          { x: 1979.55, y: 248.63 },
          { x: 961.41, y: 248.58 },
          { x: 530.94, y: 248.93 },
          { x: 339.78, y: 249.21 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC FF 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 234.51 },
          { x: 2782.30, y: 233.42 },
          { x: 1948.98, y: 232.44 },
          { x: 952.63, y: 231.63 },
          { x: 529.20, y: 236.17 },
          { x: 336.28, y: 236.04 }
        ]
      },
    ],
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

