var aspect_ratio_bitrate_ssim = 0.75;
var aspect_ratio_bitrate_vmaf = 0.75;
var aspect_ratio_bitrate_fps = 0.75;


var ctx_t1_20221225_bitrate_ssim_data = document.getElementById('chart_t1_20221225_bitrate_ssim');
const chart_t1_20221225_bitrate_ssim_data = new Chart(ctx_t1_20221225_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.43, y: 0.99276 },
          { x: 4052.42, y: 0.989209 },
          { x: 2588.64, y: 0.98371 },
          { x: 1678.17, y: 0.975717 },
          { x: 1127.55, y: 0.964713 },
          { x: 772.39, y: 0.949544 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 5585.68, y: 0.99277 },
          { x: 3551.68, y: 0.989095 },
          { x: 2290.37, y: 0.983528 },
          { x: 1489.82, y: 0.975464 },
          { x: 1007.55, y: 0.964662 },
          { x: 700.82, y: 0.950206 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7952.01, y: 0.99472 },
          { x: 4955.72, y: 0.992631 },
          { x: 3091.93, y: 0.98945 },
          { x: 1925.04, y: 0.984588 },
          { x: 1192.35, y: 0.977315 },
          { x: 744.75, y: 0.966943 },
          { x: 465.87, y: 0.952778 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7793.56, y: 0.995672 },
          { x: 4866.57, y: 0.993693 },
          { x: 3047.20, y: 0.990536 },
          { x: 1896.93, y: 0.985595 },
          { x: 1173.26, y: 0.978275 },
          { x: 733.48, y: 0.967893 },
          { x: 458.42, y: 0.953709 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 8064.61, y: 0.995543 },
          { x: 4995.62, y: 0.993769 },
          { x: 3142.85, y: 0.991165 },
          { x: 1972.09, y: 0.987207 },
          { x: 1224.92, y: 0.981311 },
          { x: 753.14, y: 0.973109 },
          { x: 449.48, y: 0.961887 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 8056.75, y: 0.996319 },
          { x: 5017.77, y: 0.994701 },
          { x: 3165.64, y: 0.992186 },
          { x: 1990.91, y: 0.98825 },
          { x: 1241.81, y: 0.982426 },
          { x: 763.71, y: 0.974227 },
          { x: 454.01, y: 0.963115 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 7367.58, y: 0.995507 },
          { x: 5249.95, y: 0.994539 },
          { x: 3912.77, y: 0.993447 },
          { x: 2765.43, y: 0.991882 },
          { x: 1906.95, y: 0.989697 },
          { x: 1319.27, y: 0.986856 },
          { x: 930.11, y: 0.983235 },
          { x: 641.09, y: 0.97817 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7269.19, y: 0.99627 },
          { x: 5094.42, y: 0.99532 },
          { x: 3765.05, y: 0.994226 },
          { x: 2677.27, y: 0.992711 },
          { x: 1863.72, y: 0.990573 },
          { x: 1296.29, y: 0.98775 },
          { x: 918.60, y: 0.984133 },
          { x: 637.02, y: 0.979099 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7469.02, y: 0.994912 },
          { x: 5445.49, y: 0.993894 },
          { x: 4096.81, y: 0.99272 },
          { x: 2905.92, y: 0.990954 },
          { x: 2022.35, y: 0.988516 },
          { x: 1392.05, y: 0.985171 },
          { x: 978.88, y: 0.981025 },
          { x: 672.37, y: 0.975371 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7664.48, y: 0.995785 },
          { x: 5441.23, y: 0.994761 },
          { x: 4051.34, y: 0.993589 },
          { x: 2871.24, y: 0.991858 },
          { x: 2005.45, y: 0.989487 },
          { x: 1382.09, y: 0.986205 },
          { x: 973.38, y: 0.982103 },
          { x: 669.68, y: 0.976461 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 8156.37, y: 0.9939 },
          { x: 5962.51, y: 0.992834 },
          { x: 4434.29, y: 0.991599 },
          { x: 3083.31, y: 0.989671 },
          { x: 2102.21, y: 0.986872 },
          { x: 1424.42, y: 0.983017 },
          { x: 981.21, y: 0.978204 },
          { x: 661.24, y: 0.971808 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6166.43, y: 0.994147 },
          { x: 4472.21, y: 0.992812 },
          { x: 3081.20, y: 0.990806 },
          { x: 2100.17, y: 0.988007 },
          { x: 1423.09, y: 0.984312 },
          { x: 978.91, y: 0.979529 },
          { x: 659.20, y: 0.972964 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6698.41, y: 0.992098 },
          { x: 4987.10, y: 0.990658 },
          { x: 3434.47, y: 0.988342 },
          { x: 2283.32, y: 0.984862 },
          { x: 1514.08, y: 0.980113 },
          { x: 1005.32, y: 0.974149 },
          { x: 651.72, y: 0.966164 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6760.43, y: 0.993272 },
          { x: 4962.96, y: 0.991822 },
          { x: 3418.77, y: 0.989499 },
          { x: 2275.44, y: 0.986023 },
          { x: 1512.29, y: 0.981278 },
          { x: 1002.54, y: 0.975221 },
          { x: 648.56, y: 0.967463 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6140.65, y: 0.990873 },
          { x: 3887.73, y: 0.986789 },
          { x: 2491.08, y: 0.980811 },
          { x: 1725.80, y: 0.972764 },
          { x: 1247.48, y: 0.963563 },
          { x: 948.24, y: 0.950462 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6065.19, y: 0.99075 },
          { x: 3875.66, y: 0.986734 },
          { x: 2520.83, y: 0.980964 },
          { x: 1751.71, y: 0.973158 },
          { x: 1273.55, y: 0.964258 },
          { x: 962.64, y: 0.951376 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 6383.41, y: 0.9918 },
          { x: 4113.14, y: 0.988284 },
          { x: 2638.44, y: 0.98276 },
          { x: 1807.53, y: 0.97522 },
          { x: 1272.17, y: 0.965944 },
          { x: 953.26, y: 0.953295 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.85, y: 0.9918 },
          { x: 4249.17, y: 0.988425 },
          { x: 2747.01, y: 0.983148 },
          { x: 1894.81, y: 0.976145 },
          { x: 1324.02, y: 0.967018 },
          { x: 965.68, y: 0.953706 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.96, y: 0.990225 },
          { x: 3910.04, y: 0.986353 },
          { x: 2493.69, y: 0.980516 },
          { x: 1658.08, y: 0.972483 },
          { x: 1177.89, y: 0.963299 },
          { x: 866.62, y: 0.950464 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 0.991591 },
          { x: 3834.12, y: 0.987745 },
          { x: 2468.93, y: 0.98191 },
          { x: 1645.50, y: 0.973929 },
          { x: 1167.40, y: 0.964837 },
          { x: 859.27, y: 0.951998 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        data:[
          { x: 6413.96, y: 0.991859 },
          { x: 4139.74, y: 0.98837 },
          { x: 2657.66, y: 0.982909 },
          { x: 1817.28, y: 0.975398 },
          { x: 1274.17, y: 0.966108 },
          { x: 938.58, y: 0.953227 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.30, y: 0.991801 },
          { x: 4248.67, y: 0.988424 },
          { x: 2747.27, y: 0.983147 },
          { x: 1894.73, y: 0.976143 },
          { x: 1318.77, y: 0.966994 },
          { x: 949.00, y: 0.953469 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6963.88, y: 0.993754 },
          { x: 4588.28, y: 0.991639 },
          { x: 2802.59, y: 0.987729 },
          { x: 1722.17, y: 0.981864 },
          { x: 1084.91, y: 0.973509 },
          { x: 684.17, y: 0.962012 },
          { x: 465.75, y: 0.947525 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6875.83, y: 0.994711 },
          { x: 4548.22, y: 0.992649 },
          { x: 2792.12, y: 0.988766 },
          { x: 1715.74, y: 0.982836 },
          { x: 1082.62, y: 0.974459 },
          { x: 682.56, y: 0.962902 },
          { x: 464.63, y: 0.948564 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 6404.50, y: 0.992024 },
          { x: 5100.41, y: 0.990295 },
          { x: 3346.56, y: 0.985929 },
          { x: 2240.21, y: 0.979592 },
          { x: 1526.31, y: 0.97079 },
          { x: 1013.93, y: 0.958537 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6441.23, y: 0.991983 },
          { x: 5007.74, y: 0.990081 },
          { x: 3310.62, y: 0.985715 },
          { x: 2203.72, y: 0.979218 },
          { x: 1505.42, y: 0.970329 },
          { x: 1023.37, y: 0.958013 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 0.993273 },
          { x: 4089.97, y: 0.991038 },
          { x: 2945.71, y: 0.988483 },
          { x: 1755.95, y: 0.982588 },
          { x: 1118.75, y: 0.974357 },
          { x: 765.70, y: 0.963794 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 0.994299 },
          { x: 4019.68, y: 0.992103 },
          { x: 2913.10, y: 0.989569 },
          { x: 1740.59, y: 0.983552 },
          { x: 1112.13, y: 0.975321 },
          { x: 761.54, y: 0.964555 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 6607.55, y: 0.993715 },
          { x: 5100.24, y: 0.992688 },
          { x: 3871.84, y: 0.991021 },
          { x: 2872.74, y: 0.988898 },
          { x: 2089.46, y: 0.985779 },
          { x: 1436.03, y: 0.981011 },
          { x: 976.86, y: 0.974026 },
          { x: 672.69, y: 0.964602 },
          { x: 451.94, y: 0.952307 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6697.02, y: 0.993515 },
          { x: 5188.49, y: 0.992537 },
          { x: 3972.91, y: 0.990874 },
          { x: 2949.43, y: 0.988745 },
          { x: 2137.85, y: 0.985574 },
          { x: 1477.95, y: 0.980766 },
          { x: 1010.06, y: 0.97373 },
          { x: 692.44, y: 0.963988 },
          { x: 465.83, y: 0.951608 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7176.54, y: 0.994728 },
          { x: 5328.99, y: 0.993874 },
          { x: 3949.45, y: 0.99224 },
          { x: 2904.87, y: 0.990069 },
          { x: 2098.22, y: 0.986866 },
          { x: 1439.31, y: 0.982038 },
          { x: 979.84, y: 0.975082 },
          { x: 675.21, y: 0.965579 },
          { x: 452.52, y: 0.953311 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7321.35, y: 0.994583 },
          { x: 5432.58, y: 0.993718 },
          { x: 4045.20, y: 0.992089 },
          { x: 2985.18, y: 0.989922 },
          { x: 2148.55, y: 0.98667 },
          { x: 1482.15, y: 0.98183 },
          { x: 1010.24, y: 0.974742 },
          { x: 694.01, y: 0.964962 },
          { x: 465.99, y: 0.952556 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 7876.63, y: 0.992284 },
          { x: 4996.79, y: 0.988708 },
          { x: 3139.15, y: 0.983484 },
          { x: 2007.44, y: 0.976033 },
          { x: 1299.75, y: 0.964807 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7885.67, y: 0.992635 },
          { x: 4828.34, y: 0.989411 },
          { x: 2962.74, y: 0.984886 },
          { x: 1836.87, y: 0.978595 },
          { x: 1154.82, y: 0.969739 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7430.86, y: 0.993111 },
          { x: 4535.24, y: 0.989636 },
          { x: 2775.20, y: 0.984608 },
          { x: 1735.85, y: 0.97743 },
          { x: 1088.48, y: 0.966942 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 7390.00, y: 0.992579 },
          { x: 4610.56, y: 0.988912 },
          { x: 2883.60, y: 0.983676 },
          { x: 1806.65, y: 0.976117 },
          { x: 1169.79, y: 0.964838 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 6352.39, y: 0.992804 },
          { x: 3937.42, y: 0.989815 },
          { x: 2429.53, y: 0.98552 },
          { x: 1529.95, y: 0.979444 },
          { x: 980.45, y: 0.970747 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.92, y: 0.99382 },
          { x: 3918.58, y: 0.990878 },
          { x: 2416.48, y: 0.98661 },
          { x: 1520.49, y: 0.980622 },
          { x: 967.59, y: 0.971898 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7382.92, y: 0.992571 },
          { x: 4608.95, y: 0.988907 },
          { x: 2882.85, y: 0.983709 },
          { x: 1804.11, y: 0.976168 },
          { x: 1167.38, y: 0.965026 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6357.12, y: 0.992798 },
          { x: 3931.57, y: 0.98981 },
          { x: 2430.71, y: 0.985552 },
          { x: 1531.08, y: 0.979529 },
          { x: 979.04, y: 0.970918 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.40, y: 0.993813 },
          { x: 3921.41, y: 0.990893 },
          { x: 2417.50, y: 0.986639 },
          { x: 1518.92, y: 0.98066 },
          { x: 966.27, y: 0.97205 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        data:[
          { x: 6672.06, y: 0.992999 },
          { x: 4585.39, y: 0.990951 },
          { x: 3204.15, y: 0.988264 },
          { x: 2275.82, y: 0.984798 },
          { x: 1634.61, y: 0.980298 },
          { x: 1185.89, y: 0.974489 },
          { x: 939.78, y: 0.969072 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6446.44, y: 0.993955 },
          { x: 4431.43, y: 0.991963 },
          { x: 3135.92, y: 0.98932 },
          { x: 2237.02, y: 0.985822 },
          { x: 1614.05, y: 0.981284 },
          { x: 1175.36, y: 0.975396 },
          { x: 932.59, y: 0.969917 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 2496.78, y: 0.972452 },
          { x: 3046.02, y: 0.977077 },
          { x: 3797.86, y: 0.98048 },
          { x: 4719.71, y: 0.983758 },
          { x: 5603.07, y: 0.986436 },
          { x: 6668.72, y: 0.987972 },
          { x: 7493.08, y: 0.98939 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2525.39, y: 0.971983 },
          { x: 3082.94, y: 0.976674 },
          { x: 3841.55, y: 0.980092 },
          { x: 4776.00, y: 0.983419 },
          { x: 5680.69, y: 0.986161 },
          { x: 6749.06, y: 0.987728 },
          { x: 7591.47, y: 0.989187 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 2497.29, y: 0.972453 },
          { x: 3046.67, y: 0.977079 },
          { x: 3798.34, y: 0.980479 },
          { x: 4720.38, y: 0.983757 },
          { x: 5603.75, y: 0.986436 },
          { x: 6669.22, y: 0.987973 },
          { x: 7493.72, y: 0.98939 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2526.04, y: 0.971985 },
          { x: 3083.58, y: 0.976675 },
          { x: 3842.40, y: 0.980091 },
          { x: 4776.71, y: 0.983418 },
          { x: 5681.58, y: 0.986161 },
          { x: 6749.43, y: 0.987728 },
          { x: 7592.21, y: 0.989186 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 1159.43, y: 0.969663 },
          { x: 1434.49, y: 0.974057 },
          { x: 1830.99, y: 0.978419 },
          { x: 2443.25, y: 0.982552 },
          { x: 3036.50, y: 0.985219 },
          { x: 3824.26, y: 0.987628 },
          { x: 4935.91, y: 0.989799 },
          { x: 6161.73, y: 0.991272 },
          { x: 7500.47, y: 0.9926 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1231.28, y: 0.968449 },
          { x: 1526.08, y: 0.973052 },
          { x: 1958.77, y: 0.97763 },
          { x: 2619.04, y: 0.981938 },
          { x: 3261.82, y: 0.984723 },
          { x: 4115.53, y: 0.987207 },
          { x: 5313.38, y: 0.98946 },
          { x: 6615.51, y: 0.991003 },
          { x: 8048.71, y: 0.992383 }
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

var ctx_t1_20221225_bitrate_vmaf_data = document.getElementById('chart_t1_20221225_bitrate_vmaf');
const chart_t1_20221225_bitrate_vmaf_data = new Chart(ctx_t1_20221225_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.43, y: 97.910992 },
          { x: 4052.42, y: 96.213902 },
          { x: 2588.64, y: 92.645365 },
          { x: 1678.17, y: 86.237617 },
          { x: 1127.55, y: 76.275741 },
          { x: 772.39, y: 62.762584 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 5585.68, y: 98.020159 },
          { x: 3551.68, y: 96.398358 },
          { x: 2290.37, y: 92.985808 },
          { x: 1489.82, y: 86.703102 },
          { x: 1007.55, y: 77.06472 },
          { x: 700.82, y: 64.054992 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7952.01, y: 98.642661 },
          { x: 4955.72, y: 97.985327 },
          { x: 3091.93, y: 96.625592 },
          { x: 1925.04, y: 93.850177 },
          { x: 1192.35, y: 88.706724 },
          { x: 744.75, y: 80.457433 },
          { x: 465.87, y: 68.571043 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7793.56, y: 98.463377 },
          { x: 4866.57, y: 97.914473 },
          { x: 3047.20, y: 96.814349 },
          { x: 1896.93, y: 94.689814 },
          { x: 1173.26, y: 90.964259 },
          { x: 733.48, y: 84.965886 },
          { x: 458.42, y: 76.214221 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 8064.61, y: 98.956287 },
          { x: 4995.62, y: 98.597113 },
          { x: 3142.85, y: 97.851951 },
          { x: 1972.09, y: 96.240001 },
          { x: 1224.92, y: 92.869049 },
          { x: 753.14, y: 86.945058 },
          { x: 449.48, y: 77.518025 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 8056.75, y: 98.739158 },
          { x: 5017.77, y: 98.437707 },
          { x: 3165.64, y: 97.834475 },
          { x: 1990.91, y: 96.604325 },
          { x: 1241.81, y: 94.208861 },
          { x: 763.71, y: 90.052737 },
          { x: 454.01, y: 83.46872 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 7367.58, y: 98.868726 },
          { x: 5249.95, y: 98.646023 },
          { x: 3912.77, y: 98.319966 },
          { x: 2765.43, y: 97.730682 },
          { x: 1906.95, y: 96.65443 },
          { x: 1319.27, y: 94.887871 },
          { x: 930.11, y: 92.124974 },
          { x: 641.09, y: 87.891513 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7269.19, y: 98.899374 },
          { x: 5094.42, y: 98.670251 },
          { x: 3765.05, y: 98.332661 },
          { x: 2677.27, y: 97.739802 },
          { x: 1863.72, y: 96.660528 },
          { x: 1296.29, y: 94.881028 },
          { x: 918.60, y: 92.078818 },
          { x: 637.02, y: 87.803291 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7469.02, y: 98.795387 },
          { x: 5445.49, y: 98.541217 },
          { x: 4096.81, y: 98.188246 },
          { x: 2905.92, y: 97.510902 },
          { x: 2022.35, y: 96.340387 },
          { x: 1392.05, y: 94.334236 },
          { x: 978.88, y: 91.283363 },
          { x: 672.37, y: 86.612392 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7664.48, y: 98.832077 },
          { x: 5441.23, y: 98.582459 },
          { x: 4051.34, y: 98.213841 },
          { x: 2871.24, y: 97.517992 },
          { x: 2005.45, y: 96.357987 },
          { x: 1382.09, y: 94.357569 },
          { x: 973.38, y: 91.28084 },
          { x: 669.68, y: 86.609709 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 8156.37, y: 98.618293 },
          { x: 5962.51, y: 98.314922 },
          { x: 4434.29, y: 97.898059 },
          { x: 3083.31, y: 97.074051 },
          { x: 2102.21, y: 95.65902 },
          { x: 1424.42, y: 93.291149 },
          { x: 981.21, y: 89.787617 },
          { x: 661.24, y: 84.449483 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6166.43, y: 98.43187 },
          { x: 4472.21, y: 97.992902 },
          { x: 3081.20, y: 97.136199 },
          { x: 2100.17, y: 95.720908 },
          { x: 1423.09, y: 93.330982 },
          { x: 978.91, y: 89.783718 },
          { x: 659.20, y: 84.396493 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6698.41, y: 97.969596 },
          { x: 4987.10, y: 97.395629 },
          { x: 3434.47, y: 96.285051 },
          { x: 2283.32, y: 94.327097 },
          { x: 1514.08, y: 91.314523 },
          { x: 1005.32, y: 86.768194 },
          { x: 651.72, y: 80.147011 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6760.43, y: 97.953412 },
          { x: 4962.96, y: 97.36341 },
          { x: 3418.77, y: 96.247274 },
          { x: 2275.44, y: 94.289322 },
          { x: 1512.29, y: 91.264346 },
          { x: 1002.54, y: 86.644254 },
          { x: 648.56, y: 79.955709 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6140.65, y: 97.398331 },
          { x: 3887.73, y: 95.281621 },
          { x: 2491.08, y: 91.251277 },
          { x: 1725.80, y: 85.279777 },
          { x: 1247.48, y: 78.07709 },
          { x: 948.24, y: 67.724503 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6065.19, y: 97.097154 },
          { x: 3875.66, y: 94.971981 },
          { x: 2520.83, y: 91.083413 },
          { x: 1751.71, y: 85.296838 },
          { x: 1273.55, y: 78.509483 },
          { x: 962.64, y: 68.43333 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 6383.41, y: 97.760828 },
          { x: 4113.14, y: 95.947523 },
          { x: 2638.44, y: 92.277182 },
          { x: 1807.53, y: 86.376488 },
          { x: 1272.17, y: 78.69254 },
          { x: 953.26, y: 68.053875 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.85, y: 97.500641 },
          { x: 4249.17, y: 95.685122 },
          { x: 2747.01, y: 92.147478 },
          { x: 1894.81, y: 86.802874 },
          { x: 1324.02, y: 79.269105 },
          { x: 965.68, y: 68.222146 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.96, y: 97.358061 },
          { x: 3910.04, y: 95.383029 },
          { x: 2493.69, y: 91.650949 },
          { x: 1658.08, y: 85.601792 },
          { x: 1177.89, y: 78.196181 },
          { x: 866.62, y: 67.878801 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 97.36635 },
          { x: 3834.12, y: 95.870396 },
          { x: 2468.93, y: 93.184321 },
          { x: 1645.50, y: 88.913081 },
          { x: 1167.40, y: 83.639551 },
          { x: 859.27, y: 76.000712 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        data:[
          { x: 6413.96, y: 97.748489 },
          { x: 4139.74, y: 95.929417 },
          { x: 2657.66, y: 92.277938 },
          { x: 1817.28, y: 86.40048 },
          { x: 1274.17, y: 78.761771 },
          { x: 938.58, y: 68.029537 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.30, y: 97.500159 },
          { x: 4248.67, y: 95.684252 },
          { x: 2747.27, y: 92.138865 },
          { x: 1894.73, y: 86.805015 },
          { x: 1318.77, y: 79.292217 },
          { x: 949.00, y: 68.144361 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6963.88, y: 98.424955 },
          { x: 4588.28, y: 97.644506 },
          { x: 2802.59, y: 95.773032 },
          { x: 1722.17, y: 91.959082 },
          { x: 1084.91, y: 85.815856 },
          { x: 684.17, y: 76.267268 },
          { x: 465.75, y: 64.603067 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6875.83, y: 98.23804 },
          { x: 4548.22, y: 97.612075 },
          { x: 2792.12, y: 96.174957 },
          { x: 1715.74, y: 93.377255 },
          { x: 1082.62, y: 88.980972 },
          { x: 682.56, y: 82.189137 },
          { x: 464.63, y: 73.615568 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 6404.50, y: 97.905851 },
          { x: 5100.41, y: 97.28587 },
          { x: 3346.56, y: 95.149971 },
          { x: 2240.21, y: 91.031046 },
          { x: 1526.31, y: 84.282515 },
          { x: 1013.93, y: 73.503811 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6441.23, y: 97.618578 },
          { x: 5007.74, y: 96.803654 },
          { x: 3310.62, y: 94.451604 },
          { x: 2203.72, y: 89.910484 },
          { x: 1505.42, y: 83.065008 },
          { x: 1023.37, y: 72.800772 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 98.368696 },
          { x: 4089.97, y: 97.61102 },
          { x: 2945.71, y: 96.639164 },
          { x: 1755.95, y: 93.54675 },
          { x: 1118.75, y: 88.161249 },
          { x: 765.70, y: 79.92393 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 98.191778 },
          { x: 4019.68, y: 97.58864 },
          { x: 2913.10, y: 96.825909 },
          { x: 1740.59, y: 94.440492 },
          { x: 1112.13, y: 90.481543 },
          { x: 761.54, y: 84.495033 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 6607.55, y: 98.322862 },
          { x: 5100.24, y: 97.895247 },
          { x: 3871.84, y: 97.05861 },
          { x: 2872.74, y: 95.924492 },
          { x: 2089.46, y: 94.001861 },
          { x: 1436.03, y: 90.736117 },
          { x: 976.86, y: 85.384142 },
          { x: 672.69, y: 77.837239 },
          { x: 451.94, y: 67.992475 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6697.02, y: 98.266743 },
          { x: 5188.49, y: 97.825962 },
          { x: 3972.91, y: 96.997788 },
          { x: 2949.43, y: 95.825258 },
          { x: 2137.85, y: 93.833074 },
          { x: 1477.95, y: 90.526067 },
          { x: 1010.06, y: 85.114624 },
          { x: 692.44, y: 77.290654 },
          { x: 465.83, y: 67.316677 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7176.54, y: 98.300223 },
          { x: 5328.99, y: 97.961562 },
          { x: 3949.45, y: 97.344076 },
          { x: 2904.87, y: 96.473321 },
          { x: 2098.22, y: 94.998028 },
          { x: 1439.31, y: 92.664116 },
          { x: 979.84, y: 88.883541 },
          { x: 675.21, y: 83.463034 },
          { x: 452.52, y: 76.233351 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7321.35, y: 98.267813 },
          { x: 5432.58, y: 97.918172 },
          { x: 4045.20, y: 97.302177 },
          { x: 2985.18, y: 96.403918 },
          { x: 2148.55, y: 94.90967 },
          { x: 1482.15, y: 92.526162 },
          { x: 1010.24, y: 88.679133 },
          { x: 694.01, y: 83.067533 },
          { x: 465.99, y: 75.745955 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 7876.63, y: 98.44143 },
          { x: 4996.79, y: 97.177046 },
          { x: 3139.15, y: 94.273382 },
          { x: 2007.44, y: 88.861458 },
          { x: 1299.75, y: 79.863244 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7885.67, y: 98.541324 },
          { x: 4828.34, y: 97.599962 },
          { x: 2962.74, y: 95.496716 },
          { x: 1836.87, y: 91.551171 },
          { x: 1154.82, y: 85.010886 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7430.86, y: 98.151933 },
          { x: 4535.24, y: 97.091418 },
          { x: 2775.20, y: 95.065014 },
          { x: 1735.85, y: 91.555703 },
          { x: 1088.48, y: 85.706888 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 7390.00, y: 98.518319 },
          { x: 4610.56, y: 97.327355 },
          { x: 2883.60, y: 94.647841 },
          { x: 1806.65, y: 89.395302 },
          { x: 1169.79, y: 80.666722 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 6352.39, y: 98.460339 },
          { x: 3937.42, y: 97.519809 },
          { x: 2429.53, y: 95.478109 },
          { x: 1529.95, y: 91.402874 },
          { x: 980.45, y: 84.692226 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.92, y: 98.252593 },
          { x: 3918.58, y: 97.437854 },
          { x: 2416.48, y: 95.808683 },
          { x: 1520.49, y: 92.954307 },
          { x: 967.59, y: 88.146423 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7382.92, y: 98.516842 },
          { x: 4608.95, y: 97.323914 },
          { x: 2882.85, y: 94.649344 },
          { x: 1804.11, y: 89.40478 },
          { x: 1167.38, y: 80.751317 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6357.12, y: 98.45369 },
          { x: 3931.57, y: 97.518022 },
          { x: 2430.71, y: 95.48653 },
          { x: 1531.08, y: 91.413898 },
          { x: 979.04, y: 84.75535 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.40, y: 98.254553 },
          { x: 3921.41, y: 97.43791 },
          { x: 2417.50, y: 95.816908 },
          { x: 1518.92, y: 92.953953 },
          { x: 966.27, y: 88.168097 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        data:[
          { x: 6672.06, y: 98.608638 },
          { x: 4585.39, y: 98.070331 },
          { x: 3204.15, y: 97.109062 },
          { x: 2275.82, y: 95.395103 },
          { x: 1634.61, y: 92.633976 },
          { x: 1185.89, y: 88.614121 },
          { x: 939.78, y: 84.597083 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6446.44, y: 98.33575 },
          { x: 4431.43, y: 97.837823 },
          { x: 3135.92, y: 96.977261 },
          { x: 2237.02, y: 95.607022 },
          { x: 1614.05, y: 93.563043 },
          { x: 1175.36, y: 90.588792 },
          { x: 932.59, y: 87.665292 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 2496.78, y: 77.84217 },
          { x: 3046.02, y: 82.448646 },
          { x: 3797.86, y: 85.863819 },
          { x: 4719.71, y: 89.298008 },
          { x: 5603.07, y: 92.021427 },
          { x: 6668.72, y: 93.553162 },
          { x: 7493.08, y: 94.889309 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2525.39, y: 77.314803 },
          { x: 3082.94, y: 81.988851 },
          { x: 3841.55, y: 85.419743 },
          { x: 4776.00, y: 88.931351 },
          { x: 5680.69, y: 91.729698 },
          { x: 6749.06, y: 93.320264 },
          { x: 7591.47, y: 94.70816 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 2497.29, y: 77.833682 },
          { x: 3046.67, y: 82.44943 },
          { x: 3798.34, y: 85.864052 },
          { x: 4720.38, y: 89.298797 },
          { x: 5603.75, y: 92.020739 },
          { x: 6669.22, y: 93.552199 },
          { x: 7493.72, y: 94.890218 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2526.04, y: 77.312997 },
          { x: 3083.58, y: 81.986541 },
          { x: 3842.40, y: 85.411577 },
          { x: 4776.71, y: 88.933608 },
          { x: 5681.58, y: 91.729424 },
          { x: 6749.43, y: 93.320542 },
          { x: 7592.21, y: 94.707911 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 1159.43, y: 85.284693 },
          { x: 1434.49, y: 88.426896 },
          { x: 1830.99, y: 91.45547 },
          { x: 2443.25, y: 94.079882 },
          { x: 3036.50, y: 95.562859 },
          { x: 3824.26, y: 96.674424 },
          { x: 4935.91, y: 97.55172 },
          { x: 6161.73, y: 98.040581 },
          { x: 7500.47, y: 98.430608 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1231.28, y: 84.802815 },
          { x: 1526.08, y: 88.047513 },
          { x: 1958.77, y: 91.173914 },
          { x: 2619.04, y: 93.843169 },
          { x: 3261.82, y: 95.398197 },
          { x: 4115.53, y: 96.539681 },
          { x: 5313.38, y: 97.450018 },
          { x: 6615.51, y: 97.961958 },
          { x: 8048.71, y: 98.382407 }
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

var ctx_t1_20221225_bitrate_fps_data = document.getElementById('chart_t1_20221225_bitrate_fps');
const chart_t1_20221225_bitrate_fps_data = new Chart(ctx_t1_20221225_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.43, y: 241.57 },
          { x: 4052.42, y: 262.02 },
          { x: 2588.64, y: 273.62 },
          { x: 1678.17, y: 286.25 },
          { x: 1127.55, y: 295.36 },
          { x: 772.39, y: 302.32 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 5585.68, y: 44.20 },
          { x: 3551.68, y: 49.07 },
          { x: 2290.37, y: 53.53 },
          { x: 1489.82, y: 57.25 },
          { x: 1007.55, y: 62.01 },
          { x: 700.82, y: 65.86 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7952.01, y: 79.81 },
          { x: 4955.72, y: 88.51 },
          { x: 3091.93, y: 96.59 },
          { x: 1925.04, y: 105.90 },
          { x: 1192.35, y: 112.92 },
          { x: 744.75, y: 108.43 },
          { x: 465.87, y: 114.24 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7793.56, y: 52.54 },
          { x: 4866.57, y: 57.96 },
          { x: 3047.20, y: 63.72 },
          { x: 1896.93, y: 69.44 },
          { x: 1173.26, y: 75.87 },
          { x: 733.48, y: 81.53 },
          { x: 458.42, y: 86.91 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 8064.61, y: 3.01 },
          { x: 4995.62, y: 3.55 },
          { x: 3142.85, y: 4.15 },
          { x: 1972.09, y: 4.85 },
          { x: 1224.92, y: 5.69 },
          { x: 753.14, y: 6.76 },
          { x: 449.48, y: 8.23 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 8056.75, y: 2.30 },
          { x: 5017.77, y: 2.64 },
          { x: 3165.64, y: 3.22 },
          { x: 1990.91, y: 3.79 },
          { x: 1241.81, y: 4.40 },
          { x: 763.71, y: 5.14 },
          { x: 454.01, y: 6.22 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 7367.58, y: 11.632 },
          { x: 5249.95, y: 12.026 },
          { x: 3912.77, y: 12.513 },
          { x: 2765.43, y: 13.198 },
          { x: 1906.95, y: 14.020 },
          { x: 1319.27, y: 15.066 },
          { x: 930.11, y: 16.259 },
          { x: 641.09, y: 17.763 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7269.19, y: 9.546 },
          { x: 5094.42, y: 10.117 },
          { x: 3765.05, y: 10.542 },
          { x: 2677.27, y: 11.259 },
          { x: 1863.72, y: 12.154 },
          { x: 1296.29, y: 13.426 },
          { x: 918.60, y: 14.304 },
          { x: 637.02, y: 15.647 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7469.02, y: 35.465 },
          { x: 5445.49, y: 37.564 },
          { x: 4096.81, y: 38.982 },
          { x: 2905.92, y: 41.625 },
          { x: 2022.35, y: 45.188 },
          { x: 1392.05, y: 48.989 },
          { x: 978.88, y: 53.252 },
          { x: 672.37, y: 58.949 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7664.48, y: 32.922 },
          { x: 5441.23, y: 34.747 },
          { x: 4051.34, y: 35.707 },
          { x: 2871.24, y: 38.010 },
          { x: 2005.45, y: 40.836 },
          { x: 1382.09, y: 44.645 },
          { x: 973.38, y: 48.432 },
          { x: 669.68, y: 52.838 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 8156.37, y: 112.218 },
          { x: 5962.51, y: 113.413 },
          { x: 4434.29, y: 112.479 },
          { x: 3083.31, y: 115.467 },
          { x: 2102.21, y: 118.268 },
          { x: 1424.42, y: 122.448 },
          { x: 981.21, y: 127.091 },
          { x: 661.24, y: 130.760 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6166.43, y: 91.662 },
          { x: 4472.21, y: 92.265 },
          { x: 3081.20, y: 93.838 },
          { x: 2100.17, y: 96.082 },
          { x: 1423.09, y: 98.209 },
          { x: 978.91, y: 101.932 },
          { x: 659.20, y: 105.078 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6698.41, y: 248.609 },
          { x: 4987.10, y: 254.512 },
          { x: 3434.47, y: 264.043 },
          { x: 2283.32, y: 275.785 },
          { x: 1514.08, y: 288.202 },
          { x: 1005.32, y: 299.218 },
          { x: 651.72, y: 311.534 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6760.43, y: 185.963 },
          { x: 4962.96, y: 189.933 },
          { x: 3418.77, y: 192.439 },
          { x: 2275.44, y: 197.642 },
          { x: 1512.29, y: 202.158 },
          { x: 1002.54, y: 207.571 },
          { x: 648.56, y: 211.125 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6140.65, y: 92.98 },
          { x: 3887.73, y: 96.34 },
          { x: 2491.08, y: 99.03 },
          { x: 1725.80, y: 100.60 },
          { x: 1247.48, y: 102.23 },
          { x: 948.24, y: 101.03 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6065.19, y: 115.34 },
          { x: 3875.66, y: 118.33 },
          { x: 2520.83, y: 114.51 },
          { x: 1751.71, y: 112.65 },
          { x: 1273.55, y: 117.13 },
          { x: 962.64, y: 115.96 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 6383.41, y: 142.16 },
          { x: 4113.14, y: 143.60 },
          { x: 2638.44, y: 144.02 },
          { x: 1807.53, y: 144.58 },
          { x: 1272.17, y: 143.89 },
          { x: 953.26, y: 144.70 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.85, y: 160.87 },
          { x: 4249.17, y: 165.45 },
          { x: 2747.01, y: 166.17 },
          { x: 1894.81, y: 166.64 },
          { x: 1324.02, y: 170.69 },
          { x: 965.68, y: 167.13 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.96, y: 70.46 },
          { x: 3910.04, y: 71.41 },
          { x: 2493.69, y: 72.17 },
          { x: 1658.08, y: 72.90 },
          { x: 1177.89, y: 73.14 },
          { x: 866.62, y: 72.42 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 61.15 },
          { x: 3834.12, y: 62.22 },
          { x: 2468.93, y: 63.00 },
          { x: 1645.50, y: 63.44 },
          { x: 1167.40, y: 63.15 },
          { x: 859.27, y: 63.97 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        data:[
          { x: 6413.96, y: 160.53 },
          { x: 4139.74, y: 163.23 },
          { x: 2657.66, y: 165.46 },
          { x: 1817.28, y: 166.54 },
          { x: 1274.17, y: 167.55 },
          { x: 938.58, y: 167.91 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6538.30, y: 196.14 },
          { x: 4248.67, y: 199.81 },
          { x: 2747.27, y: 200.84 },
          { x: 1894.73, y: 202.66 },
          { x: 1318.77, y: 203.10 },
          { x: 949.00, y: 203.84 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6963.88, y: 111.01 },
          { x: 4588.28, y: 117.03 },
          { x: 2802.59, y: 124.09 },
          { x: 1722.17, y: 129.24 },
          { x: 1084.91, y: 133.80 },
          { x: 684.17, y: 137.64 },
          { x: 465.75, y: 141.04 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6875.83, y: 102.63 },
          { x: 4548.22, y: 109.30 },
          { x: 2792.12, y: 115.88 },
          { x: 1715.74, y: 120.40 },
          { x: 1082.62, y: 124.42 },
          { x: 682.56, y: 127.36 },
          { x: 464.63, y: 130.46 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 6404.50, y: 279.42 },
          { x: 5100.41, y: 280.91 },
          { x: 3346.56, y: 282.70 },
          { x: 2240.21, y: 284.11 },
          { x: 1526.31, y: 286.53 },
          { x: 1013.93, y: 288.50 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6441.23, y: 376.87 },
          { x: 5007.74, y: 377.27 },
          { x: 3310.62, y: 378.53 },
          { x: 2203.72, y: 378.62 },
          { x: 1505.42, y: 381.97 },
          { x: 1023.37, y: 385.52 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 362.95 },
          { x: 4089.97, y: 363.70 },
          { x: 2945.71, y: 365.99 },
          { x: 1755.95, y: 368.01 },
          { x: 1118.75, y: 371.05 },
          { x: 765.70, y: 371.65 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 234.44 },
          { x: 4019.68, y: 235.18 },
          { x: 2913.10, y: 234.89 },
          { x: 1740.59, y: 233.67 },
          { x: 1112.13, y: 233.70 },
          { x: 761.54, y: 234.47 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 6607.55, y: 260.97 },
          { x: 5100.24, y: 264.38 },
          { x: 3871.84, y: 259.46 },
          { x: 2872.74, y: 259.78 },
          { x: 2089.46, y: 260.27 },
          { x: 1436.03, y: 262.15 },
          { x: 976.86, y: 261.29 },
          { x: 672.69, y: 262.43 },
          { x: 451.94, y: 263.62 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6697.02, y: 345.48 },
          { x: 5188.49, y: 344.70 },
          { x: 3972.91, y: 346.83 },
          { x: 2949.43, y: 347.36 },
          { x: 2137.85, y: 347.93 },
          { x: 1477.95, y: 347.48 },
          { x: 1010.06, y: 345.33 },
          { x: 692.44, y: 347.17 },
          { x: 465.83, y: 342.04 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7176.54, y: 203.57 },
          { x: 5328.99, y: 203.84 },
          { x: 3949.45, y: 206.20 },
          { x: 2904.87, y: 204.90 },
          { x: 2098.22, y: 206.76 },
          { x: 1439.31, y: 205.49 },
          { x: 979.84, y: 205.80 },
          { x: 675.21, y: 207.04 },
          { x: 452.52, y: 207.89 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7321.35, y: 202.29 },
          { x: 5432.58, y: 202.24 },
          { x: 4045.20, y: 204.10 },
          { x: 2985.18, y: 204.81 },
          { x: 2148.55, y: 203.69 },
          { x: 1482.15, y: 203.53 },
          { x: 1010.24, y: 202.88 },
          { x: 694.01, y: 203.63 },
          { x: 465.99, y: 205.02 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 7876.63, y: 188.19 },
          { x: 4996.79, y: 190.03 },
          { x: 3139.15, y: 192.03 },
          { x: 2007.44, y: 194.29 },
          { x: 1299.75, y: 195.40 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7885.67, y: 125.70 },
          { x: 4828.34, y: 144.91 },
          { x: 2962.74, y: 160.55 },
          { x: 1836.87, y: 174.18 },
          { x: 1154.82, y: 186.18 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7430.86, y: 134.95 },
          { x: 4535.24, y: 149.14 },
          { x: 2775.20, y: 161.97 },
          { x: 1735.85, y: 172.43 },
          { x: 1088.48, y: 184.18 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 7390.00, y: 165.48 },
          { x: 4610.56, y: 166.69 },
          { x: 2883.60, y: 166.93 },
          { x: 1806.65, y: 164.98 },
          { x: 1169.79, y: 163.69 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 6352.39, y: 108.61 },
          { x: 3937.42, y: 108.70 },
          { x: 2429.53, y: 108.95 },
          { x: 1529.95, y: 108.58 },
          { x: 980.45, y: 109.05 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.92, y: 111.09 },
          { x: 3918.58, y: 111.08 },
          { x: 2416.48, y: 111.26 },
          { x: 1520.49, y: 111.41 },
          { x: 967.59, y: 111.44 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7382.92, y: 209.48 },
          { x: 4608.95, y: 210.63 },
          { x: 2882.85, y: 210.45 },
          { x: 1804.11, y: 207.48 },
          { x: 1167.38, y: 206.22 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6357.12, y: 135.21 },
          { x: 3931.57, y: 135.10 },
          { x: 2430.71, y: 135.46 },
          { x: 1531.08, y: 135.19 },
          { x: 979.04, y: 135.40 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6324.40, y: 137.87 },
          { x: 3921.41, y: 138.02 },
          { x: 2417.50, y: 138.36 },
          { x: 1518.92, y: 138.48 },
          { x: 966.27, y: 138.56 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        data:[
          { x: 6672.06, y: 190.72 },
          { x: 4585.39, y: 189.97 },
          { x: 3204.15, y: 188.86 },
          { x: 2275.82, y: 188.95 },
          { x: 1634.61, y: 188.51 },
          { x: 1185.89, y: 188.97 },
          { x: 939.78, y: 189.22 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6446.44, y: 176.67 },
          { x: 4431.43, y: 175.07 },
          { x: 3135.92, y: 174.62 },
          { x: 2237.02, y: 174.50 },
          { x: 1614.05, y: 174.41 },
          { x: 1175.36, y: 173.63 },
          { x: 932.59, y: 173.46 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 2496.78, y: 61.30 },
          { x: 3046.02, y: 53.89 },
          { x: 3797.86, y: 60.98 },
          { x: 4719.71, y: 48.19 },
          { x: 5603.07, y: 50.89 },
          { x: 6668.72, y: 51.28 },
          { x: 7493.08, y: 53.43 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2525.39, y: 74.00 },
          { x: 3082.94, y: 74.15 },
          { x: 3841.55, y: 73.93 },
          { x: 4776.00, y: 75.00 },
          { x: 5680.69, y: 74.93 },
          { x: 6749.06, y: 73.50 },
          { x: 7591.47, y: 74.43 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 2497.29, y: 132.72 },
          { x: 3046.67, y: 132.52 },
          { x: 3798.34, y: 132.48 },
          { x: 4720.38, y: 132.58 },
          { x: 5603.75, y: 134.03 },
          { x: 6669.22, y: 133.41 },
          { x: 7493.72, y: 132.34 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2526.04, y: 165.24 },
          { x: 3083.58, y: 165.41 },
          { x: 3842.40, y: 165.35 },
          { x: 4776.71, y: 165.18 },
          { x: 5681.58, y: 166.92 },
          { x: 6749.43, y: 166.50 },
          { x: 7592.21, y: 165.97 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 1159.43, y: 109.23 },
          { x: 1434.49, y: 110.43 },
          { x: 1830.99, y: 109.21 },
          { x: 2443.25, y: 110.56 },
          { x: 3036.50, y: 108.19 },
          { x: 3824.26, y: 110.86 },
          { x: 4935.91, y: 109.91 },
          { x: 6161.73, y: 110.82 },
          { x: 7500.47, y: 110.45 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1231.28, y: 241.64 },
          { x: 1526.08, y: 244.28 },
          { x: 1958.77, y: 234.82 },
          { x: 2619.04, y: 248.15 },
          { x: 3261.82, y: 182.59 },
          { x: 4115.53, y: 246.74 },
          { x: 5313.38, y: 246.66 },
          { x: 6615.51, y: 199.61 },
          { x: 8048.71, y: 177.35 }
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

var ctx_t1_20221225_vbr_bitrate_ssim_data = document.getElementById('chart_t1_20221225_vbr_bitrate_ssim');
const chart_t1_20221225_vbr_bitrate_ssim_data = new Chart(ctx_t1_20221225_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 900.80, y: 0.933184 },
          { x: 900.80, y: 0.933184 },
          { x: 999.75, y: 0.941018 },
          { x: 1352.82, y: 0.956737 },
          { x: 1717.39, y: 0.965572 },
          { x: 3417.07, y: 0.980594 },
          { x: 5223.59, y: 0.985997 },
          { x: 6822.96, y: 0.988746 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 902.88, y: 0.933031 },
          { x: 902.88, y: 0.933031 },
          { x: 1000.91, y: 0.94075 },
          { x: 1355.25, y: 0.956519 },
          { x: 1721.54, y: 0.965447 },
          { x: 3416.90, y: 0.980525 },
          { x: 5224.49, y: 0.985972 },
          { x: 6823.06, y: 0.988726 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1059.01, y: 0.955901 },
          { x: 1059.01, y: 0.955901 },
          { x: 1183.38, y: 0.960303 },
          { x: 1582.59, y: 0.969705 },
          { x: 1979.87, y: 0.975193 },
          { x: 3947.11, y: 0.985718 },
          { x: 5899.53, y: 0.989421 },
          { x: 7829.71, y: 0.991459 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.03, y: 0.956318 },
          { x: 1055.03, y: 0.956318 },
          { x: 1179.00, y: 0.960691 },
          { x: 1575.85, y: 0.969841 },
          { x: 1970.97, y: 0.975122 },
          { x: 3929.81, y: 0.985643 },
          { x: 5880.52, y: 0.989383 },
          { x: 7807.69, y: 0.991415 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1056.80, y: 0.956126 },
          { x: 1056.80, y: 0.956126 },
          { x: 1180.13, y: 0.960457 },
          { x: 1571.15, y: 0.969806 },
          { x: 1963.89, y: 0.975186 },
          { x: 3903.71, y: 0.98581 },
          { x: 5822.50, y: 0.989548 },
          { x: 7716.54, y: 0.991546 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.19, y: 0.955846 },
          { x: 1057.19, y: 0.955846 },
          { x: 1180.55, y: 0.960239 },
          { x: 1574.24, y: 0.969438 },
          { x: 1965.54, y: 0.974809 },
          { x: 3915.94, y: 0.985513 },
          { x: 5839.70, y: 0.989337 },
          { x: 7748.87, y: 0.991392 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 446.18, y: 0.911532 },
          { x: 653.40, y: 0.93086 },
          { x: 901.19, y: 0.947264 },
          { x: 1194.29, y: 0.959078 },
          { x: 1488.29, y: 0.966106 },
          { x: 2976.77, y: 0.980375 },
          { x: 4661.82, y: 0.98546 },
          { x: 6223.38, y: 0.988134 },
          { x: 7897.38, y: 0.989901 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 462.96, y: 0.910326 },
          { x: 659.93, y: 0.929696 },
          { x: 902.44, y: 0.946255 },
          { x: 1195.93, y: 0.958395 },
          { x: 1484.99, y: 0.965598 },
          { x: 2984.35, y: 0.980295 },
          { x: 4661.34, y: 0.985499 },
          { x: 6228.16, y: 0.988066 },
          { x: 7899.00, y: 0.989852 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 0.91329 },
          { x: 647.66, y: 0.932748 },
          { x: 891.22, y: 0.949154 },
          { x: 1186.36, y: 0.961037 },
          { x: 1472.37, y: 0.967924 },
          { x: 2942.47, y: 0.981944 },
          { x: 4575.30, y: 0.9871 },
          { x: 6082.05, y: 0.989646 },
          { x: 7692.57, y: 0.991497 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 0.912223 },
          { x: 656.71, y: 0.931298 },
          { x: 894.59, y: 0.948045 },
          { x: 1188.13, y: 0.960185 },
          { x: 1478.52, y: 0.967394 },
          { x: 2952.89, y: 0.981802 },
          { x: 4588.21, y: 0.986928 },
          { x: 6079.99, y: 0.989565 },
          { x: 7684.86, y: 0.991438 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1056.87, y: 0.957313 },
          { x: 1056.87, y: 0.957313 },
          { x: 1180.03, y: 0.961317 },
          { x: 1571.17, y: 0.970014 },
          { x: 1964.03, y: 0.975206 },
          { x: 3903.53, y: 0.985809 },
          { x: 5822.56, y: 0.989546 },
          { x: 7716.96, y: 0.991546 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.15, y: 0.957 },
          { x: 1057.15, y: 0.957 },
          { x: 1180.61, y: 0.961092 },
          { x: 1574.12, y: 0.969622 },
          { x: 1965.38, y: 0.974865 },
          { x: 3915.95, y: 0.985516 },
          { x: 5839.98, y: 0.989338 },
          { x: 7748.84, y: 0.991392 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 0.930408 },
          { x: 760.79, y: 0.959313 },
          { x: 1119.85, y: 0.970871 },
          { x: 1481.63, y: 0.976986 },
          { x: 1827.15, y: 0.98056 },
          { x: 3450.60, y: 0.988017 },
          { x: 4672.01, y: 0.990459 },
          { x: 5723.69, y: 0.991675 },
          { x: 6249.97, y: 0.99237 },
          { x: 6567.17, y: 0.992808 },
          { x: 6719.61, y: 0.993039 },
          { x: 6881.24, y: 0.99329 },
          { x: 6998.28, y: 0.993423 },
          { x: 7068.34, y: 0.993526 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.04, y: 0.92843 },
          { x: 761.89, y: 0.957829 },
          { x: 1122.74, y: 0.96973 },
          { x: 1483.38, y: 0.976061 },
          { x: 1830.47, y: 0.980009 },
          { x: 3450.43, y: 0.987747 },
          { x: 4719.19, y: 0.990322 },
          { x: 5806.93, y: 0.991527 },
          { x: 6314.94, y: 0.992319 },
          { x: 6679.50, y: 0.992781 },
          { x: 6847.63, y: 0.993039 },
          { x: 6990.75, y: 0.993292 },
          { x: 7126.45, y: 0.993416 },
          { x: 7200.91, y: 0.993508 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.45, y: 0.932112 },
          { x: 763.34, y: 0.960458 },
          { x: 1125.75, y: 0.971826 },
          { x: 1482.21, y: 0.978139 },
          { x: 1827.16, y: 0.981748 },
          { x: 3429.05, y: 0.989151 },
          { x: 4623.34, y: 0.991525 },
          { x: 5616.67, y: 0.9927 },
          { x: 6172.44, y: 0.993427 },
          { x: 6442.66, y: 0.993833 },
          { x: 6576.87, y: 0.994039 },
          { x: 6749.13, y: 0.994336 },
          { x: 6849.51, y: 0.994425 },
          { x: 6939.49, y: 0.994536 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.99, y: 0.928873 },
          { x: 762.98, y: 0.958359 },
          { x: 1124.29, y: 0.970604 },
          { x: 1489.21, y: 0.977043 },
          { x: 1841.27, y: 0.980929 },
          { x: 3463.79, y: 0.988814 },
          { x: 4701.86, y: 0.991356 },
          { x: 5718.27, y: 0.992637 },
          { x: 6289.88, y: 0.993328 },
          { x: 6611.13, y: 0.993762 },
          { x: 6765.26, y: 0.993981 },
          { x: 6912.62, y: 0.994244 },
          { x: 7063.64, y: 0.994384 },
          { x: 7141.20, y: 0.994495 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 453.72, y: 0.951131 },
          { x: 797.37, y: 0.965823 },
          { x: 1151.75, y: 0.973893 },
          { x: 1510.68, y: 0.978783 },
          { x: 1860.06, y: 0.981843 },
          { x: 3513.36, y: 0.988495 },
          { x: 4913.76, y: 0.990963 },
          { x: 6236.74, y: 0.992392 },
          { x: 7460.40, y: 0.993269 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 457.37, y: 0.949854 },
          { x: 797.33, y: 0.964836 },
          { x: 1153.32, y: 0.973094 },
          { x: 1514.73, y: 0.978028 },
          { x: 1863.57, y: 0.981265 },
          { x: 3516.02, y: 0.98814 },
          { x: 4899.29, y: 0.990701 },
          { x: 6213.46, y: 0.992061 },
          { x: 7474.98, y: 0.993058 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 453.16, y: 0.952139 },
          { x: 797.04, y: 0.966783 },
          { x: 1150.77, y: 0.974887 },
          { x: 1513.00, y: 0.979808 },
          { x: 1863.73, y: 0.982827 },
          { x: 3527.56, y: 0.989487 },
          { x: 5026.67, y: 0.991877 },
          { x: 6514.11, y: 0.993238 },
          { x: 7933.66, y: 0.994199 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 458.88, y: 0.950836 },
          { x: 797.92, y: 0.965747 },
          { x: 1155.13, y: 0.974083 },
          { x: 1516.33, y: 0.978953 },
          { x: 1863.34, y: 0.982316 },
          { x: 3527.46, y: 0.989155 },
          { x: 5025.74, y: 0.991639 },
          { x: 6458.52, y: 0.99297 },
          { x: 7901.05, y: 0.993931 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1147.69, y: 0.960323 },
          { x: 1147.69, y: 0.960323 },
          { x: 1292.73, y: 0.963043 },
          { x: 1596.05, y: 0.967717 },
          { x: 2035.38, y: 0.973648 },
          { x: 3833.96, y: 0.98447 },
          { x: 5647.54, y: 0.988693 },
          { x: 7053.12, y: 0.991044 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1160.58, y: 0.959946 },
          { x: 1160.58, y: 0.959946 },
          { x: 1292.53, y: 0.962541 },
          { x: 1588.96, y: 0.967643 },
          { x: 2045.51, y: 0.973243 },
          { x: 3810.47, y: 0.98415 },
          { x: 5644.21, y: 0.988479 },
          { x: 6993.84, y: 0.990737 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 387.30, y: 0.927751 },
          { x: 751.38, y: 0.958923 },
          { x: 1106.95, y: 0.971029 },
          { x: 1464.81, y: 0.976976 },
          { x: 1816.58, y: 0.980693 },
          { x: 3400.85, y: 0.988209 },
          { x: 4573.54, y: 0.990627 },
          { x: 5332.66, y: 0.991582 },
          { x: 5825.48, y: 0.992309 },
          { x: 6108.64, y: 0.992665 },
          { x: 6381.03, y: 0.992917 },
          { x: 6535.60, y: 0.993131 },
          { x: 6587.98, y: 0.993207 },
          { x: 6729.12, y: 0.993313 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.65, y: 0.925692 },
          { x: 753.77, y: 0.957372 },
          { x: 1111.27, y: 0.969783 },
          { x: 1469.32, y: 0.976106 },
          { x: 1820.91, y: 0.97993 },
          { x: 3428.08, y: 0.987813 },
          { x: 4624.11, y: 0.990333 },
          { x: 5373.89, y: 0.991343 },
          { x: 5901.14, y: 0.992114 },
          { x: 6244.05, y: 0.992489 },
          { x: 6498.55, y: 0.992748 },
          { x: 6665.76, y: 0.992988 },
          { x: 6799.50, y: 0.99314 },
          { x: 6936.47, y: 0.993237 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 386.78, y: 0.929529 },
          { x: 751.07, y: 0.960277 },
          { x: 1456.58, y: 0.97836 },
          { x: 1801.71, y: 0.981856 },
          { x: 3339.70, y: 0.989327 },
          { x: 4454.18, y: 0.991633 },
          { x: 5167.98, y: 0.992623 },
          { x: 5659.74, y: 0.993337 },
          { x: 5922.15, y: 0.99365 },
          { x: 6161.40, y: 0.993942 },
          { x: 6362.01, y: 0.994158 },
          { x: 6432.50, y: 0.994205 },
          { x: 6533.59, y: 0.994318 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.42, y: 0.926649 },
          { x: 754.67, y: 0.958491 },
          { x: 1107.22, y: 0.971142 },
          { x: 1461.70, y: 0.977443 },
          { x: 1812.72, y: 0.981121 },
          { x: 3385.39, y: 0.989019 },
          { x: 4517.66, y: 0.991446 },
          { x: 5226.46, y: 0.992448 },
          { x: 5755.53, y: 0.99315 },
          { x: 6083.01, y: 0.993528 },
          { x: 6259.34, y: 0.993719 },
          { x: 6460.85, y: 0.993945 },
          { x: 6604.42, y: 0.994103 },
          { x: 6680.70, y: 0.994172 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 461.52, y: 0.911277 },
          { x: 825.91, y: 0.944753 },
          { x: 1066.38, y: 0.955581 },
          { x: 1546.67, y: 0.968039 },
          { x: 2031.47, y: 0.974696 },
          { x: 3972.64, y: 0.985262 },
          { x: 5909.46, y: 0.98924 },
          { x: 7845.96, y: 0.991368 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 469.52, y: 0.907813 },
          { x: 816.74, y: 0.944856 },
          { x: 1052.60, y: 0.955181 },
          { x: 1532.63, y: 0.967285 },
          { x: 2015.79, y: 0.974265 },
          { x: 3917.17, y: 0.985259 },
          { x: 5817.74, y: 0.989263 },
          { x: 7732.42, y: 0.991425 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 379.40, y: 0.93564 },
          { x: 860.17, y: 0.961774 },
          { x: 1223.28, y: 0.969989 },
          { x: 1635.02, y: 0.975456 },
          { x: 2044.83, y: 0.979073 },
          { x: 4001.32, y: 0.986704 },
          { x: 5941.48, y: 0.989832 },
          { x: 7875.91, y: 0.991642 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 390.98, y: 0.931822 },
          { x: 869.82, y: 0.958112 },
          { x: 1236.23, y: 0.966869 },
          { x: 1642.03, y: 0.972954 },
          { x: 2051.91, y: 0.976929 },
          { x: 4002.07, y: 0.985496 },
          { x: 5938.27, y: 0.988964 },
          { x: 7870.39, y: 0.990972 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 373.51, y: 0.92685 },
          { x: 860.77, y: 0.959049 },
          { x: 1217.93, y: 0.968564 },
          { x: 1624.68, y: 0.97487 },
          { x: 2034.07, y: 0.978979 },
          { x: 3984.26, y: 0.987331 },
          { x: 5930.61, y: 0.990643 },
          { x: 7857.64, y: 0.99244 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 380.52, y: 0.922764 },
          { x: 863.82, y: 0.955557 },
          { x: 1220.60, y: 0.96558 },
          { x: 1632.84, y: 0.972473 },
          { x: 2042.49, y: 0.976951 },
          { x: 3989.16, y: 0.986158 },
          { x: 5928.87, y: 0.989764 },
          { x: 7865.01, y: 0.991785 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 400.77, y: 0.908126 },
          { x: 812.76, y: 0.948959 },
          { x: 1055.97, y: 0.959504 },
          { x: 1533.18, y: 0.970677 },
          { x: 2010.59, y: 0.97665 },
          { x: 3938.33, y: 0.986223 },
          { x: 5873.88, y: 0.989896 },
          { x: 7810.54, y: 0.991953 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 461.05, y: 0.908791 },
          { x: 811.42, y: 0.948144 },
          { x: 1053.21, y: 0.958973 },
          { x: 1529.91, y: 0.970629 },
          { x: 2005.01, y: 0.976701 },
          { x: 3910.10, y: 0.986523 },
          { x: 5818.60, y: 0.990121 },
          { x: 7725.56, y: 0.992065 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 399.22, y: 0.941795 },
          { x: 872.00, y: 0.966992 },
          { x: 1241.18, y: 0.97445 },
          { x: 1647.79, y: 0.979247 },
          { x: 2053.24, y: 0.982368 },
          { x: 4024.97, y: 0.988915 },
          { x: 5989.90, y: 0.991545 },
          { x: 7949.37, y: 0.99306 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.82, y: 0.93765 },
          { x: 866.91, y: 0.965777 },
          { x: 1238.56, y: 0.973461 },
          { x: 1637.07, y: 0.978244 },
          { x: 2049.29, y: 0.981486 },
          { x: 4002.58, y: 0.988426 },
          { x: 5940.59, y: 0.991141 },
          { x: 7868.08, y: 0.992736 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.58, y: 0.943018 },
          { x: 870.46, y: 0.968435 },
          { x: 1238.85, y: 0.97571 },
          { x: 1644.36, y: 0.980471 },
          { x: 2053.80, y: 0.983571 },
          { x: 4024.66, y: 0.99001 },
          { x: 5993.55, y: 0.992579 },
          { x: 7939.84, y: 0.994039 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 385.45, y: 0.939041 },
          { x: 867.01, y: 0.967201 },
          { x: 1240.10, y: 0.974666 },
          { x: 1638.92, y: 0.979378 },
          { x: 2048.68, y: 0.982576 },
          { x: 3995.23, y: 0.98938 },
          { x: 5936.30, y: 0.992074 },
          { x: 7869.09, y: 0.993637 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 397.38, y: 0.909532 },
          { x: 812.65, y: 0.949589 },
          { x: 1056.16, y: 0.959859 },
          { x: 1533.69, y: 0.970857 },
          { x: 2010.69, y: 0.976717 },
          { x: 3939.83, y: 0.986237 },
          { x: 5872.18, y: 0.989893 },
          { x: 7810.23, y: 0.991935 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 459.28, y: 0.910145 },
          { x: 811.88, y: 0.948673 },
          { x: 1051.29, y: 0.959406 },
          { x: 1528.51, y: 0.970642 },
          { x: 2006.27, y: 0.976746 },
          { x: 3915.04, y: 0.98654 },
          { x: 5818.49, y: 0.990114 },
          { x: 7722.64, y: 0.992057 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 397.96, y: 0.942311 },
          { x: 872.03, y: 0.967271 },
          { x: 1241.85, y: 0.974557 },
          { x: 1646.97, y: 0.979283 },
          { x: 2053.73, y: 0.982432 },
          { x: 4026.91, y: 0.988924 },
          { x: 5992.29, y: 0.991538 },
          { x: 7952.90, y: 0.993057 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.06, y: 0.938242 },
          { x: 866.12, y: 0.966015 },
          { x: 1238.97, y: 0.973576 },
          { x: 1636.18, y: 0.978331 },
          { x: 2052.45, y: 0.981545 },
          { x: 3999.95, y: 0.988413 },
          { x: 5939.99, y: 0.991132 },
          { x: 7859.72, y: 0.992714 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.23, y: 0.943888 },
          { x: 869.63, y: 0.968603 },
          { x: 1240.17, y: 0.975872 },
          { x: 1645.12, y: 0.98054 },
          { x: 2053.75, y: 0.983582 },
          { x: 4024.20, y: 0.989995 },
          { x: 5987.16, y: 0.992568 },
          { x: 7941.30, y: 0.994045 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 384.96, y: 0.93964 },
          { x: 867.15, y: 0.967399 },
          { x: 1238.79, y: 0.97477 },
          { x: 1637.00, y: 0.979471 },
          { x: 2047.39, y: 0.982606 },
          { x: 3998.14, y: 0.989393 },
          { x: 5938.03, y: 0.992081 },
          { x: 7868.55, y: 0.99364 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 395.08, y: 0.938477 },
          { x: 879.16, y: 0.965951 },
          { x: 1238.56, y: 0.973645 },
          { x: 1644.93, y: 0.978727 },
          { x: 2053.65, y: 0.981992 },
          { x: 4002.94, y: 0.988683 },
          { x: 5937.75, y: 0.991268 },
          { x: 7851.72, y: 0.992709 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.62, y: 0.938228 },
          { x: 869.66, y: 0.965228 },
          { x: 1231.12, y: 0.973212 },
          { x: 1634.99, y: 0.978331 },
          { x: 2044.67, y: 0.981667 },
          { x: 3965.06, y: 0.988541 },
          { x: 5884.13, y: 0.991132 },
          { x: 7780.98, y: 0.992613 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.77, y: 0.939593 },
          { x: 876.98, y: 0.966817 },
          { x: 1237.08, y: 0.974749 },
          { x: 1646.99, y: 0.979961 },
          { x: 2047.86, y: 0.983108 },
          { x: 3984.65, y: 0.989885 },
          { x: 5920.88, y: 0.992448 },
          { x: 7832.64, y: 0.993841 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.04, y: 0.939247 },
          { x: 871.46, y: 0.966261 },
          { x: 1229.51, y: 0.974221 },
          { x: 1634.97, y: 0.979416 },
          { x: 2041.75, y: 0.982733 },
          { x: 3968.29, y: 0.989653 },
          { x: 5887.66, y: 0.992201 },
          { x: 7783.95, y: 0.993648 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1155.12, y: 0.94063 },
          { x: 1160.24, y: 0.940991 },
          { x: 1270.85, y: 0.943931 },
          { x: 1529.44, y: 0.949948 },
          { x: 1878.72, y: 0.956035 },
          { x: 3707.92, y: 0.972936 },
          { x: 5550.01, y: 0.982544 },
          { x: 7385.82, y: 0.986996 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 549.12, y: 0.91486 },
          { x: 781.40, y: 0.927671 },
          { x: 1168.97, y: 0.94485 },
          { x: 1527.42, y: 0.956092 },
          { x: 1900.84, y: 0.964093 },
          { x: 3746.82, y: 0.981101 },
          { x: 5582.21, y: 0.986857 },
          { x: 7374.56, y: 0.990008 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 807.30, y: 0.955905 },
          { x: 875.14, y: 0.957592 },
          { x: 1150.72, y: 0.963579 },
          { x: 1512.44, y: 0.969397 },
          { x: 1880.97, y: 0.973633 },
          { x: 3723.34, y: 0.984276 },
          { x: 5548.43, y: 0.989113 },
          { x: 6552.90, y: 0.991057 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 0.922121 },
          { x: 801.55, y: 0.946777 },
          { x: 1190.70, y: 0.959843 },
          { x: 1578.91, y: 0.96714 },
          { x: 1969.00, y: 0.972116 },
          { x: 3914.32, y: 0.982292 },
          { x: 5851.89, y: 0.986421 },
          { x: 7685.19, y: 0.988848 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 412.04, y: 0.923123 },
          { x: 801.31, y: 0.947824 },
          { x: 1189.64, y: 0.960789 },
          { x: 1578.24, y: 0.967955 },
          { x: 1969.73, y: 0.97299 },
          { x: 3916.37, y: 0.983129 },
          { x: 5852.50, y: 0.987143 },
          { x: 7677.65, y: 0.98964 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1170.82, y: 0.941012 },
          { x: 1180.82, y: 0.941378 },
          { x: 1281.32, y: 0.944179 },
          { x: 1531.48, y: 0.950118 },
          { x: 1881.03, y: 0.956588 },
          { x: 3706.75, y: 0.974158 },
          { x: 5551.12, y: 0.982752 },
          { x: 7384.58, y: 0.987014 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 528.00, y: 0.905748 },
          { x: 775.15, y: 0.919524 },
          { x: 1169.73, y: 0.939257 },
          { x: 1558.92, y: 0.950867 },
          { x: 1947.59, y: 0.959247 },
          { x: 3894.94, y: 0.976716 },
          { x: 5832.05, y: 0.983017 },
          { x: 7674.48, y: 0.986183 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 917.27, y: 0.96086 },
          { x: 945.26, y: 0.961538 },
          { x: 1170.85, y: 0.965733 },
          { x: 1520.24, y: 0.97117 },
          { x: 1886.92, y: 0.974969 },
          { x: 3732.42, y: 0.985033 },
          { x: 5555.66, y: 0.989556 },
          { x: 6534.87, y: 0.991263 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 411.34, y: 0.92594 },
          { x: 801.43, y: 0.949278 },
          { x: 1190.65, y: 0.961779 },
          { x: 1579.84, y: 0.968825 },
          { x: 1969.97, y: 0.973218 },
          { x: 3915.06, y: 0.983267 },
          { x: 5859.65, y: 0.986964 },
          { x: 7678.05, y: 0.989149 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 411.10, y: 0.926854 },
          { x: 800.94, y: 0.950154 },
          { x: 1190.40, y: 0.962271 },
          { x: 1578.61, y: 0.969194 },
          { x: 1969.20, y: 0.973677 },
          { x: 3915.56, y: 0.98408 },
          { x: 5853.84, y: 0.987935 },
          { x: 7684.88, y: 0.990062 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1136.39, y: 0.970287 },
          { x: 1137.89, y: 0.970318 },
          { x: 1263.52, y: 0.971387 },
          { x: 1606.46, y: 0.974137 },
          { x: 1943.11, y: 0.976539 },
          { x: 3819.26, y: 0.984272 },
          { x: 5689.53, y: 0.988275 },
          { x: 7575.18, y: 0.990726 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.62, y: 0.925403 },
          { x: 785.13, y: 0.950313 },
          { x: 1173.39, y: 0.962211 },
          { x: 1563.42, y: 0.968963 },
          { x: 1947.60, y: 0.973404 },
          { x: 3797.15, y: 0.983401 },
          { x: 5657.04, y: 0.987315 },
          { x: 7510.07, y: 0.989758 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.69, y: 0.926592 },
          { x: 785.10, y: 0.9517 },
          { x: 1174.87, y: 0.96358 },
          { x: 1562.35, y: 0.970134 },
          { x: 1950.99, y: 0.974509 },
          { x: 3810.33, y: 0.984408 },
          { x: 5693.72, y: 0.988203 },
          { x: 7549.09, y: 0.990455 }
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

var ctx_t1_20221225_vbr_bitrate_vmaf_data = document.getElementById('chart_t1_20221225_vbr_bitrate_vmaf');
const chart_t1_20221225_vbr_bitrate_vmaf_data = new Chart(ctx_t1_20221225_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 900.80, y: 58.822152 },
          { x: 900.80, y: 58.822152 },
          { x: 999.75, y: 64.358752 },
          { x: 1352.82, y: 75.829688 },
          { x: 1717.39, y: 82.722608 },
          { x: 3417.07, y: 93.330829 },
          { x: 5223.59, y: 96.371989 },
          { x: 6822.96, y: 97.47955 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 902.88, y: 58.816922 },
          { x: 902.88, y: 58.816922 },
          { x: 1000.91, y: 64.259867 },
          { x: 1355.25, y: 75.727699 },
          { x: 1721.54, y: 82.658823 },
          { x: 3416.90, y: 93.313141 },
          { x: 5224.49, y: 96.353482 },
          { x: 6823.06, y: 97.472769 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1059.01, y: 74.42925 },
          { x: 1059.01, y: 74.42925 },
          { x: 1183.38, y: 77.891962 },
          { x: 1582.59, y: 85.212529 },
          { x: 1979.87, y: 89.250127 },
          { x: 3947.11, y: 95.891762 },
          { x: 5899.53, y: 97.600344 },
          { x: 7829.71, y: 98.280345 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.03, y: 74.659439 },
          { x: 1055.03, y: 74.659439 },
          { x: 1179.00, y: 78.034855 },
          { x: 1575.85, y: 84.970328 },
          { x: 1970.97, y: 88.799797 },
          { x: 3929.81, y: 95.527412 },
          { x: 5880.52, y: 97.326695 },
          { x: 7807.69, y: 98.042536 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1056.80, y: 74.533208 },
          { x: 1056.80, y: 74.533208 },
          { x: 1180.13, y: 77.9369 },
          { x: 1571.15, y: 85.03828 },
          { x: 1963.89, y: 89.00364 },
          { x: 3903.71, y: 95.769508 },
          { x: 5822.50, y: 97.521624 },
          { x: 7716.54, y: 98.221063 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.19, y: 74.322887 },
          { x: 1057.19, y: 74.322887 },
          { x: 1180.55, y: 77.747826 },
          { x: 1574.24, y: 84.654924 },
          { x: 1965.54, y: 88.573169 },
          { x: 3915.94, y: 95.46191 },
          { x: 5839.70, y: 97.302703 },
          { x: 7748.87, y: 98.046548 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 446.18, y: 40.466134 },
          { x: 653.40, y: 57.080141 },
          { x: 901.19, y: 69.137235 },
          { x: 1194.29, y: 77.628418 },
          { x: 1488.29, y: 82.972817 },
          { x: 2976.77, y: 93.241511 },
          { x: 4661.82, y: 96.216862 },
          { x: 6223.38, y: 97.403441 },
          { x: 7897.38, y: 98.013236 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 462.96, y: 40.196277 },
          { x: 659.93, y: 56.320168 },
          { x: 902.44, y: 68.37659 },
          { x: 1195.93, y: 77.181188 },
          { x: 1484.99, y: 82.643655 },
          { x: 2984.35, y: 93.213479 },
          { x: 4661.34, y: 96.246944 },
          { x: 6228.16, y: 97.39062 },
          { x: 7899.00, y: 98.010591 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 54.072742 },
          { x: 647.66, y: 66.771218 },
          { x: 891.22, y: 76.079028 },
          { x: 1186.36, y: 82.627184 },
          { x: 1472.37, y: 86.500981 },
          { x: 2942.47, y: 93.940428 },
          { x: 4575.30, y: 96.233505 },
          { x: 6082.05, y: 97.174055 },
          { x: 7692.57, y: 97.747148 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 53.928113 },
          { x: 656.71, y: 66.089549 },
          { x: 894.59, y: 75.548093 },
          { x: 1188.13, y: 82.271523 },
          { x: 1478.52, y: 86.241558 },
          { x: 2952.89, y: 93.906855 },
          { x: 4588.21, y: 96.194624 },
          { x: 6079.99, y: 97.170959 },
          { x: 7684.86, y: 97.744398 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1056.87, y: 75.556649 },
          { x: 1056.87, y: 75.556649 },
          { x: 1180.03, y: 78.603552 },
          { x: 1571.17, y: 85.202055 },
          { x: 1964.03, y: 89.016201 },
          { x: 3903.53, y: 95.774645 },
          { x: 5822.56, y: 97.520582 },
          { x: 7716.96, y: 98.215448 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.15, y: 75.289739 },
          { x: 1057.15, y: 75.289739 },
          { x: 1180.61, y: 78.385067 },
          { x: 1574.12, y: 84.814722 },
          { x: 1965.38, y: 88.611583 },
          { x: 3915.95, y: 95.466361 },
          { x: 5839.98, y: 97.301627 },
          { x: 7748.84, y: 98.046804 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 56.914229 },
          { x: 760.79, y: 77.784056 },
          { x: 1119.85, y: 85.853529 },
          { x: 1481.63, y: 90.246182 },
          { x: 1827.15, y: 92.506887 },
          { x: 3450.60, y: 96.769888 },
          { x: 4672.01, y: 97.838835 },
          { x: 5723.69, y: 98.205418 },
          { x: 6249.97, y: 98.343795 },
          { x: 6567.17, y: 98.442955 },
          { x: 6719.61, y: 98.491679 },
          { x: 6881.24, y: 98.53531 },
          { x: 6998.28, y: 98.561731 },
          { x: 7068.34, y: 98.574403 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.04, y: 56.394197 },
          { x: 761.89, y: 76.761816 },
          { x: 1122.74, y: 85.144471 },
          { x: 1483.38, y: 89.558084 },
          { x: 1830.47, y: 92.243946 },
          { x: 3450.43, y: 96.677265 },
          { x: 4719.19, y: 97.803016 },
          { x: 5806.93, y: 98.169563 },
          { x: 6314.94, y: 98.327017 },
          { x: 6679.50, y: 98.425309 },
          { x: 6847.63, y: 98.484959 },
          { x: 6990.75, y: 98.53078 },
          { x: 7126.45, y: 98.556714 },
          { x: 7200.91, y: 98.564857 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.45, y: 67.313507 },
          { x: 763.34, y: 82.56077 },
          { x: 1125.75, y: 88.507165 },
          { x: 1482.21, y: 91.768392 },
          { x: 1827.16, y: 93.582697 },
          { x: 3429.05, y: 96.795363 },
          { x: 4623.34, y: 97.696762 },
          { x: 5616.67, y: 98.021147 },
          { x: 6172.44, y: 98.180371 },
          { x: 6442.66, y: 98.26565 },
          { x: 6576.87, y: 98.309164 },
          { x: 6749.13, y: 98.361954 },
          { x: 6849.51, y: 98.373262 },
          { x: 6939.49, y: 98.390256 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.99, y: 66.342092 },
          { x: 762.98, y: 81.535952 },
          { x: 1124.29, y: 87.860014 },
          { x: 1489.21, y: 91.25401 },
          { x: 1841.27, y: 93.213865 },
          { x: 3463.79, y: 96.681629 },
          { x: 4701.86, y: 97.65448 },
          { x: 5718.27, y: 98.000428 },
          { x: 6289.88, y: 98.153691 },
          { x: 6611.13, y: 98.25148 },
          { x: 6765.26, y: 98.29196 },
          { x: 6912.62, y: 98.340846 },
          { x: 7063.64, y: 98.364328 },
          { x: 7141.20, y: 98.379678 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 453.72, y: 69.85623 },
          { x: 797.37, y: 81.735982 },
          { x: 1151.75, y: 87.752867 },
          { x: 1510.68, y: 90.981348 },
          { x: 1860.06, y: 92.894306 },
          { x: 3513.36, y: 96.624009 },
          { x: 4913.76, y: 97.61517 },
          { x: 6236.74, y: 98.069764 },
          { x: 7460.40, y: 98.336337 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 457.37, y: 68.70108 },
          { x: 797.33, y: 80.911512 },
          { x: 1153.32, y: 87.205282 },
          { x: 1514.73, y: 90.504665 },
          { x: 1863.57, y: 92.565633 },
          { x: 3516.02, y: 96.43315 },
          { x: 4899.29, y: 97.499395 },
          { x: 6213.46, y: 97.953155 },
          { x: 7474.98, y: 98.241296 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 453.16, y: 76.79248 },
          { x: 797.04, y: 85.518694 },
          { x: 1150.77, y: 89.96035 },
          { x: 1513.00, y: 92.413655 },
          { x: 1863.73, y: 93.874085 },
          { x: 3527.56, y: 96.760993 },
          { x: 5026.67, y: 97.593833 },
          { x: 6514.11, y: 97.992715 },
          { x: 7933.66, y: 98.213871 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 458.88, y: 76.111752 },
          { x: 797.92, y: 84.95544 },
          { x: 1155.13, y: 89.559503 },
          { x: 1516.33, y: 91.983629 },
          { x: 1863.34, y: 93.608574 },
          { x: 3527.46, y: 96.629943 },
          { x: 5025.74, y: 97.499466 },
          { x: 6458.52, y: 97.910533 },
          { x: 7901.05, y: 98.130172 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1147.69, y: 77.397733 },
          { x: 1147.69, y: 77.397733 },
          { x: 1292.73, y: 79.581257 },
          { x: 1596.05, y: 83.260844 },
          { x: 2035.38, y: 87.801132 },
          { x: 3833.96, y: 95.089676 },
          { x: 5647.54, y: 97.151951 },
          { x: 7053.12, y: 98.059702 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1160.58, y: 76.669708 },
          { x: 1160.58, y: 76.669708 },
          { x: 1292.53, y: 78.77681 },
          { x: 1588.96, y: 82.653585 },
          { x: 2045.51, y: 87.091051 },
          { x: 3810.47, y: 94.422859 },
          { x: 5644.21, y: 96.780559 },
          { x: 6993.84, y: 97.691619 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 387.30, y: 57.129687 },
          { x: 751.38, y: 79.104535 },
          { x: 1106.95, y: 87.115282 },
          { x: 1464.81, y: 90.986665 },
          { x: 1816.58, y: 93.239952 },
          { x: 3400.85, y: 97.183935 },
          { x: 4573.54, y: 98.071423 },
          { x: 5332.66, y: 98.250496 },
          { x: 5825.48, y: 98.375562 },
          { x: 6108.64, y: 98.42776 },
          { x: 6381.03, y: 98.454794 },
          { x: 6535.60, y: 98.478808 },
          { x: 6587.98, y: 98.481704 },
          { x: 6729.12, y: 98.485788 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.65, y: 56.29169 },
          { x: 753.77, y: 78.060125 },
          { x: 1111.27, y: 86.352904 },
          { x: 1469.32, y: 90.509428 },
          { x: 1820.91, y: 92.880238 },
          { x: 3428.08, y: 97.04876 },
          { x: 4624.11, y: 97.984472 },
          { x: 5373.89, y: 98.182148 },
          { x: 5901.14, y: 98.323439 },
          { x: 6244.05, y: 98.390125 },
          { x: 6498.55, y: 98.418704 },
          { x: 6665.76, y: 98.442912 },
          { x: 6799.50, y: 98.454655 },
          { x: 6936.47, y: 98.46356 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 386.78, y: 66.702567 },
          { x: 751.07, y: 83.329427 },
          { x: 1456.58, y: 92.369529 },
          { x: 1801.71, y: 94.021055 },
          { x: 3339.70, y: 97.109119 },
          { x: 4454.18, y: 97.834785 },
          { x: 5167.98, y: 98.065617 },
          { x: 5659.74, y: 98.174459 },
          { x: 5922.15, y: 98.226712 },
          { x: 6161.40, y: 98.257475 },
          { x: 6362.01, y: 98.288246 },
          { x: 6432.50, y: 98.294318 },
          { x: 6533.59, y: 98.301201 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.42, y: 65.833166 },
          { x: 754.67, y: 82.623506 },
          { x: 1107.22, y: 88.850801 },
          { x: 1461.70, y: 91.979479 },
          { x: 1812.72, y: 93.735998 },
          { x: 3385.39, y: 97.000273 },
          { x: 4517.66, y: 97.773685 },
          { x: 5226.46, y: 98.007335 },
          { x: 5755.53, y: 98.127749 },
          { x: 6083.01, y: 98.192334 },
          { x: 6259.34, y: 98.216367 },
          { x: 6460.85, y: 98.250937 },
          { x: 6604.42, y: 98.260584 },
          { x: 6680.70, y: 98.266118 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 461.52, y: 40.272059 },
          { x: 825.91, y: 63.963382 },
          { x: 1066.38, y: 72.567119 },
          { x: 1546.67, y: 82.948855 },
          { x: 2031.47, y: 88.243924 },
          { x: 3972.64, y: 95.522005 },
          { x: 5909.46, y: 97.461826 },
          { x: 7845.96, y: 98.193631 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 469.52, y: 40.376458 },
          { x: 816.74, y: 64.774366 },
          { x: 1052.60, y: 72.603486 },
          { x: 1532.63, y: 82.214625 },
          { x: 2015.79, y: 87.608406 },
          { x: 3917.17, y: 95.228476 },
          { x: 5817.74, y: 97.342106 },
          { x: 7732.42, y: 98.15117 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 379.40, y: 56.759792 },
          { x: 860.17, y: 78.882761 },
          { x: 1223.28, y: 85.55419 },
          { x: 1635.02, y: 89.679544 },
          { x: 2044.83, y: 92.146346 },
          { x: 4001.32, y: 96.615714 },
          { x: 5941.48, y: 97.811326 },
          { x: 7875.91, y: 98.326749 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 390.98, y: 54.510949 },
          { x: 869.82, y: 76.703497 },
          { x: 1236.23, y: 83.823145 },
          { x: 1642.03, y: 88.352562 },
          { x: 2051.91, y: 91.120741 },
          { x: 4002.07, y: 96.123699 },
          { x: 5938.27, y: 97.550118 },
          { x: 7870.39, y: 98.171283 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 373.51, y: 61.775488 },
          { x: 860.77, y: 81.18959 },
          { x: 1217.93, y: 86.829639 },
          { x: 1624.68, y: 90.330237 },
          { x: 2034.07, y: 92.465424 },
          { x: 3984.26, y: 96.315755 },
          { x: 5930.61, y: 97.483398 },
          { x: 7857.64, y: 98.015271 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 380.52, y: 59.791545 },
          { x: 863.82, y: 79.513316 },
          { x: 1220.60, y: 85.453265 },
          { x: 1632.84, y: 89.318413 },
          { x: 2042.49, y: 91.665704 },
          { x: 3989.16, y: 95.916344 },
          { x: 5928.87, y: 97.231085 },
          { x: 7865.01, y: 97.850107 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 400.77, y: 39.956112 },
          { x: 812.76, y: 68.290234 },
          { x: 1055.97, y: 76.731741 },
          { x: 1533.18, y: 85.601581 },
          { x: 2010.59, y: 90.097371 },
          { x: 3938.33, y: 96.211705 },
          { x: 5873.88, y: 97.746978 },
          { x: 7810.54, y: 98.357873 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 461.05, y: 41.761112 },
          { x: 811.42, y: 67.757624 },
          { x: 1053.21, y: 75.791957 },
          { x: 1529.91, y: 84.971309 },
          { x: 2005.01, y: 89.611236 },
          { x: 3910.10, y: 96.098319 },
          { x: 5818.60, y: 97.721599 },
          { x: 7725.56, y: 98.341373 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 399.22, y: 60.712571 },
          { x: 872.00, y: 81.948499 },
          { x: 1241.18, y: 88.035282 },
          { x: 1647.79, y: 91.598487 },
          { x: 2053.24, y: 93.685145 },
          { x: 4024.97, y: 97.26993 },
          { x: 5989.90, y: 98.146092 },
          { x: 7949.37, y: 98.527409 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.82, y: 57.742913 },
          { x: 866.91, y: 80.596006 },
          { x: 1238.56, y: 86.966228 },
          { x: 1637.07, y: 90.55828 },
          { x: 2049.29, y: 92.854475 },
          { x: 4002.58, y: 96.883041 },
          { x: 5940.59, y: 97.944284 },
          { x: 7868.08, y: 98.416193 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.58, y: 70.445912 },
          { x: 870.46, y: 86.297049 },
          { x: 1238.85, y: 90.530094 },
          { x: 1644.36, y: 93.058789 },
          { x: 2053.80, y: 94.55742 },
          { x: 4024.66, y: 97.206757 },
          { x: 5993.55, y: 97.988015 },
          { x: 7939.84, y: 98.32687 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 385.45, y: 68.183219 },
          { x: 867.01, y: 85.228903 },
          { x: 1240.10, y: 89.737141 },
          { x: 1638.92, y: 92.28717 },
          { x: 2048.68, y: 93.906111 },
          { x: 3995.23, y: 96.867474 },
          { x: 5936.30, y: 97.769806 },
          { x: 7869.09, y: 98.19735 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 397.38, y: 40.080646 },
          { x: 812.65, y: 68.513575 },
          { x: 1056.16, y: 76.845059 },
          { x: 1533.69, y: 85.66558 },
          { x: 2010.69, y: 90.087374 },
          { x: 3939.83, y: 96.211369 },
          { x: 5872.18, y: 97.740916 },
          { x: 7810.23, y: 98.352571 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 459.28, y: 41.773264 },
          { x: 811.88, y: 67.88485 },
          { x: 1051.29, y: 76.007039 },
          { x: 1528.51, y: 84.931124 },
          { x: 2006.27, y: 89.611454 },
          { x: 3915.04, y: 96.08697 },
          { x: 5818.49, y: 97.71431 },
          { x: 7722.64, y: 98.336863 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 397.96, y: 60.807853 },
          { x: 872.03, y: 82.12872 },
          { x: 1241.85, y: 88.047573 },
          { x: 1646.97, y: 91.622333 },
          { x: 2053.73, y: 93.729042 },
          { x: 4026.91, y: 97.270926 },
          { x: 5992.29, y: 98.136432 },
          { x: 7952.90, y: 98.528953 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.06, y: 57.981639 },
          { x: 866.12, y: 80.664828 },
          { x: 1238.97, y: 86.959001 },
          { x: 1636.18, y: 90.5874 },
          { x: 2052.45, y: 92.864282 },
          { x: 3999.95, y: 96.874612 },
          { x: 5939.99, y: 97.935947 },
          { x: 7859.72, y: 98.418935 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.23, y: 70.812628 },
          { x: 869.63, y: 86.318864 },
          { x: 1240.17, y: 90.595958 },
          { x: 1645.12, y: 93.087972 },
          { x: 2053.75, y: 94.54973 },
          { x: 4024.20, y: 97.200947 },
          { x: 5987.16, y: 97.983373 },
          { x: 7941.30, y: 98.325067 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 384.96, y: 68.400889 },
          { x: 867.15, y: 85.301635 },
          { x: 1238.79, y: 89.761235 },
          { x: 1637.00, y: 92.299193 },
          { x: 2047.39, y: 93.923773 },
          { x: 3998.14, y: 96.873334 },
          { x: 5938.03, y: 97.773486 },
          { x: 7868.55, y: 98.197294 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 395.08, y: 61.743598 },
          { x: 879.16, y: 82.629406 },
          { x: 1238.56, y: 88.454864 },
          { x: 1644.93, y: 91.933877 },
          { x: 2053.65, y: 94.008597 },
          { x: 4002.94, y: 97.36286 },
          { x: 5937.75, y: 98.211822 },
          { x: 7851.72, y: 98.561011 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.62, y: 62.256337 },
          { x: 869.66, y: 82.494406 },
          { x: 1231.12, y: 88.368162 },
          { x: 1634.99, y: 91.779726 },
          { x: 2044.67, y: 93.863875 },
          { x: 3965.06, y: 97.300508 },
          { x: 5884.13, y: 98.171925 },
          { x: 7780.98, y: 98.547179 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.77, y: 70.779533 },
          { x: 876.98, y: 86.17813 },
          { x: 1237.08, y: 90.558035 },
          { x: 1646.99, y: 93.178293 },
          { x: 2047.86, y: 94.613594 },
          { x: 3984.65, y: 97.268202 },
          { x: 5920.88, y: 98.024982 },
          { x: 7832.64, y: 98.352766 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.04, y: 70.828599 },
          { x: 871.46, y: 86.010852 },
          { x: 1229.51, y: 90.332007 },
          { x: 1634.97, y: 92.902802 },
          { x: 2041.75, y: 94.433667 },
          { x: 3968.29, y: 97.176002 },
          { x: 5887.66, y: 97.943355 },
          { x: 7783.95, y: 98.302753 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1155.12, y: 51.121523 },
          { x: 1160.24, y: 51.395342 },
          { x: 1270.85, y: 55.261895 },
          { x: 1529.44, y: 60.588389 },
          { x: 1878.72, y: 66.304483 },
          { x: 3707.92, y: 81.273041 },
          { x: 5550.01, y: 89.95671 },
          { x: 7385.82, y: 93.659469 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 549.12, y: 36.895945 },
          { x: 781.40, y: 50.749613 },
          { x: 1168.97, y: 65.008169 },
          { x: 1527.42, y: 73.394831 },
          { x: 1900.84, y: 79.442324 },
          { x: 3746.82, y: 92.402106 },
          { x: 5582.21, y: 95.773429 },
          { x: 7374.56, y: 97.244138 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 807.30, y: 68.007902 },
          { x: 875.14, y: 70.541792 },
          { x: 1150.72, y: 76.896364 },
          { x: 1512.44, y: 82.520663 },
          { x: 1880.97, y: 86.028085 },
          { x: 3723.34, y: 93.725855 },
          { x: 5548.43, y: 96.527327 },
          { x: 6552.90, y: 97.238606 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 47.103486 },
          { x: 801.55, y: 67.649432 },
          { x: 1190.70, y: 78.10315 },
          { x: 1578.91, y: 83.805369 },
          { x: 1969.00, y: 87.440626 },
          { x: 3914.32, y: 94.037642 },
          { x: 5851.89, y: 96.187571 },
          { x: 7685.19, y: 97.255201 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 412.04, y: 46.940477 },
          { x: 801.31, y: 67.506108 },
          { x: 1189.64, y: 77.969625 },
          { x: 1578.24, y: 83.650606 },
          { x: 1969.73, y: 87.394795 },
          { x: 3916.37, y: 94.04018 },
          { x: 5852.50, y: 96.163175 },
          { x: 7677.65, y: 97.260771 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1170.82, y: 51.380219 },
          { x: 1180.82, y: 51.688175 },
          { x: 1281.32, y: 55.224976 },
          { x: 1531.48, y: 60.688957 },
          { x: 1881.03, y: 66.726884 },
          { x: 3706.75, y: 82.46163 },
          { x: 5551.12, y: 90.125841 },
          { x: 7384.58, y: 93.66858 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 528.00, y: 30.465776 },
          { x: 775.15, y: 44.318445 },
          { x: 1169.73, y: 59.380171 },
          { x: 1558.92, y: 68.045675 },
          { x: 1947.59, y: 74.63148 },
          { x: 3894.94, y: 88.890405 },
          { x: 5832.05, y: 93.515084 },
          { x: 7674.48, y: 95.429707 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 917.27, y: 73.574389 },
          { x: 945.26, y: 74.458035 },
          { x: 1170.85, y: 79.080969 },
          { x: 1520.24, y: 84.412433 },
          { x: 1886.92, y: 87.632305 },
          { x: 3732.42, y: 94.642022 },
          { x: 5555.66, y: 96.893101 },
          { x: 6534.87, y: 97.484714 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 411.34, y: 50.646746 },
          { x: 801.43, y: 71.048534 },
          { x: 1190.65, y: 80.525646 },
          { x: 1579.84, y: 85.669586 },
          { x: 1969.97, y: 88.67815 },
          { x: 3915.06, y: 94.822745 },
          { x: 5859.65, y: 96.618937 },
          { x: 7678.05, y: 97.432606 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 411.10, y: 50.573683 },
          { x: 800.94, y: 70.903786 },
          { x: 1190.40, y: 80.37708 },
          { x: 1578.61, y: 85.410325 },
          { x: 1969.20, y: 88.51844 },
          { x: 3915.56, y: 94.871074 },
          { x: 5853.84, y: 96.711612 },
          { x: 7684.88, y: 97.496952 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1136.39, y: 85.048723 },
          { x: 1137.89, y: 85.079517 },
          { x: 1263.52, y: 86.229856 },
          { x: 1606.46, y: 88.626877 },
          { x: 1943.11, y: 90.447786 },
          { x: 3819.26, y: 95.045944 },
          { x: 5689.53, y: 97.000118 },
          { x: 7575.18, y: 97.919651 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.62, y: 55.039682 },
          { x: 785.13, y: 73.789193 },
          { x: 1173.39, y: 82.191789 },
          { x: 1563.42, y: 86.670877 },
          { x: 1947.60, y: 89.568754 },
          { x: 3797.15, y: 95.124808 },
          { x: 5657.04, y: 96.819597 },
          { x: 7510.07, y: 97.668809 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.69, y: 55.757403 },
          { x: 785.10, y: 74.245543 },
          { x: 1174.87, y: 82.440623 },
          { x: 1562.35, y: 86.790389 },
          { x: 1950.99, y: 89.554813 },
          { x: 3810.33, y: 95.07859 },
          { x: 5693.72, y: 96.732885 },
          { x: 7549.09, y: 97.551431 }
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

var ctx_t1_20221225_vbr_bitrate_fps_data = document.getElementById('chart_t1_20221225_vbr_bitrate_fps');
const chart_t1_20221225_vbr_bitrate_fps_data = new Chart(ctx_t1_20221225_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 900.80, y: 45.80 },
          { x: 900.80, y: 54.07 },
          { x: 999.75, y: 57.06 },
          { x: 1352.82, y: 56.93 },
          { x: 1717.39, y: 43.35 },
          { x: 3417.07, y: 56.51 },
          { x: 5223.59, y: 56.58 },
          { x: 6822.96, y: 57.13 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 902.88, y: 65.37 },
          { x: 902.88, y: 65.41 },
          { x: 1000.91, y: 63.20 },
          { x: 1355.25, y: 67.43 },
          { x: 1721.54, y: 65.61 },
          { x: 3416.90, y: 66.99 },
          { x: 5224.49, y: 64.72 },
          { x: 6823.06, y: 64.49 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1059.01, y: 96.20 },
          { x: 1059.01, y: 98.86 },
          { x: 1183.38, y: 99.51 },
          { x: 1582.59, y: 98.31 },
          { x: 1979.87, y: 96.46 },
          { x: 3947.11, y: 94.08 },
          { x: 5899.53, y: 93.84 },
          { x: 7829.71, y: 92.10 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.03, y: 118.41 },
          { x: 1055.03, y: 122.02 },
          { x: 1179.00, y: 123.03 },
          { x: 1575.85, y: 120.85 },
          { x: 1970.97, y: 117.59 },
          { x: 3929.81, y: 118.58 },
          { x: 5880.52, y: 117.24 },
          { x: 7807.69, y: 116.91 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1056.80, y: 137.54 },
          { x: 1056.80, y: 141.73 },
          { x: 1180.13, y: 139.96 },
          { x: 1571.15, y: 140.41 },
          { x: 1963.89, y: 139.38 },
          { x: 3903.71, y: 137.58 },
          { x: 5822.50, y: 136.68 },
          { x: 7716.54, y: 136.07 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.19, y: 167.17 },
          { x: 1057.19, y: 170.72 },
          { x: 1180.55, y: 171.47 },
          { x: 1574.24, y: 170.69 },
          { x: 1965.54, y: 163.88 },
          { x: 3915.94, y: 166.41 },
          { x: 5839.70, y: 161.92 },
          { x: 7748.87, y: 161.54 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 446.18, y: 38.39 },
          { x: 653.40, y: 38.70 },
          { x: 901.19, y: 38.71 },
          { x: 1194.29, y: 38.68 },
          { x: 1488.29, y: 38.71 },
          { x: 2976.77, y: 38.09 },
          { x: 4661.82, y: 37.42 },
          { x: 6223.38, y: 36.70 },
          { x: 7897.38, y: 36.43 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 462.96, y: 72.38 },
          { x: 659.93, y: 73.19 },
          { x: 902.44, y: 72.13 },
          { x: 1195.93, y: 72.10 },
          { x: 1484.99, y: 72.07 },
          { x: 2984.35, y: 70.93 },
          { x: 4661.34, y: 69.32 },
          { x: 6228.16, y: 69.59 },
          { x: 7899.00, y: 69.23 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 35.18 },
          { x: 647.66, y: 35.49 },
          { x: 891.22, y: 34.18 },
          { x: 1186.36, y: 35.06 },
          { x: 1472.37, y: 35.91 },
          { x: 2942.47, y: 35.11 },
          { x: 4575.30, y: 34.35 },
          { x: 6082.05, y: 34.01 },
          { x: 7692.57, y: 33.78 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 60.24 },
          { x: 656.71, y: 61.21 },
          { x: 894.59, y: 60.23 },
          { x: 1188.13, y: 61.09 },
          { x: 1478.52, y: 62.74 },
          { x: 2952.89, y: 61.86 },
          { x: 4588.21, y: 60.63 },
          { x: 6079.99, y: 60.64 },
          { x: 7684.86, y: 60.38 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1056.87, y: 151.00 },
          { x: 1056.87, y: 152.95 },
          { x: 1180.03, y: 152.72 },
          { x: 1571.17, y: 151.56 },
          { x: 1964.03, y: 150.64 },
          { x: 3903.53, y: 147.28 },
          { x: 5822.56, y: 144.94 },
          { x: 7716.96, y: 143.69 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.15, y: 192.07 },
          { x: 1057.15, y: 192.18 },
          { x: 1180.61, y: 192.02 },
          { x: 1574.12, y: 191.29 },
          { x: 1965.38, y: 190.57 },
          { x: 3915.95, y: 188.51 },
          { x: 5839.98, y: 186.14 },
          { x: 7748.84, y: 184.82 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 78.00 },
          { x: 760.79, y: 74.30 },
          { x: 1119.85, y: 71.51 },
          { x: 1481.63, y: 67.42 },
          { x: 1827.15, y: 64.89 },
          { x: 3450.60, y: 58.39 },
          { x: 4672.01, y: 55.83 },
          { x: 5723.69, y: 53.95 },
          { x: 6249.97, y: 53.35 },
          { x: 6567.17, y: 52.67 },
          { x: 6719.61, y: 52.62 },
          { x: 6881.24, y: 52.54 },
          { x: 6998.28, y: 52.38 },
          { x: 7068.34, y: 52.67 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.04, y: 138.40 },
          { x: 761.89, y: 130.96 },
          { x: 1122.74, y: 128.98 },
          { x: 1483.38, y: 126.58 },
          { x: 1830.47, y: 114.41 },
          { x: 3450.43, y: 113.49 },
          { x: 4719.19, y: 107.61 },
          { x: 5806.93, y: 107.24 },
          { x: 6314.94, y: 105.65 },
          { x: 6679.50, y: 104.95 },
          { x: 6847.63, y: 102.89 },
          { x: 6990.75, y: 101.04 },
          { x: 7126.45, y: 104.02 },
          { x: 7200.91, y: 103.39 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.45, y: 85.29 },
          { x: 763.34, y: 78.53 },
          { x: 1125.75, y: 73.58 },
          { x: 1482.21, y: 70.24 },
          { x: 1827.16, y: 67.29 },
          { x: 3429.05, y: 59.30 },
          { x: 4623.34, y: 56.28 },
          { x: 5616.67, y: 54.29 },
          { x: 6172.44, y: 53.81 },
          { x: 6442.66, y: 53.42 },
          { x: 6576.87, y: 53.29 },
          { x: 6749.13, y: 53.16 },
          { x: 6849.51, y: 53.02 },
          { x: 6939.49, y: 52.97 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.99, y: 131.80 },
          { x: 762.98, y: 126.07 },
          { x: 1124.29, y: 122.54 },
          { x: 1489.21, y: 120.65 },
          { x: 1841.27, y: 118.17 },
          { x: 3463.79, y: 110.25 },
          { x: 4701.86, y: 104.99 },
          { x: 5718.27, y: 101.33 },
          { x: 6289.88, y: 99.90 },
          { x: 6611.13, y: 99.27 },
          { x: 6765.26, y: 98.96 },
          { x: 6912.62, y: 98.56 },
          { x: 7063.64, y: 98.54 },
          { x: 7141.20, y: 98.39 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 453.72, y: 247.31 },
          { x: 797.37, y: 259.06 },
          { x: 1151.75, y: 259.65 },
          { x: 1510.68, y: 258.94 },
          { x: 1860.06, y: 259.40 },
          { x: 3513.36, y: 259.09 },
          { x: 4913.76, y: 261.59 },
          { x: 6236.74, y: 260.33 },
          { x: 7460.40, y: 259.63 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 457.37, y: 289.94 },
          { x: 797.33, y: 290.92 },
          { x: 1153.32, y: 292.22 },
          { x: 1514.73, y: 291.77 },
          { x: 1863.57, y: 289.63 },
          { x: 3516.02, y: 291.58 },
          { x: 4899.29, y: 290.52 },
          { x: 6213.46, y: 290.31 },
          { x: 7474.98, y: 289.78 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 453.16, y: 203.01 },
          { x: 797.04, y: 204.53 },
          { x: 1150.77, y: 204.56 },
          { x: 1513.00, y: 206.10 },
          { x: 1863.73, y: 205.45 },
          { x: 3527.56, y: 206.83 },
          { x: 5026.67, y: 205.38 },
          { x: 6514.11, y: 204.34 },
          { x: 7933.66, y: 203.04 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 458.88, y: 203.63 },
          { x: 797.92, y: 205.77 },
          { x: 1155.13, y: 204.26 },
          { x: 1516.33, y: 202.91 },
          { x: 1863.34, y: 205.71 },
          { x: 3527.46, y: 204.68 },
          { x: 5025.74, y: 203.36 },
          { x: 6458.52, y: 204.05 },
          { x: 7901.05, y: 200.73 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1147.69, y: 269.72 },
          { x: 1147.69, y: 272.06 },
          { x: 1292.73, y: 270.68 },
          { x: 1596.05, y: 269.54 },
          { x: 2035.38, y: 268.27 },
          { x: 3833.96, y: 267.35 },
          { x: 5647.54, y: 269.49 },
          { x: 7053.12, y: 269.31 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1160.58, y: 364.11 },
          { x: 1160.58, y: 363.74 },
          { x: 1292.53, y: 361.56 },
          { x: 1588.96, y: 357.67 },
          { x: 2045.51, y: 360.17 },
          { x: 3810.47, y: 359.44 },
          { x: 5644.21, y: 362.62 },
          { x: 6993.84, y: 362.09 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 387.30, y: 244.84 },
          { x: 751.38, y: 242.13 },
          { x: 1106.95, y: 241.44 },
          { x: 1464.81, y: 240.89 },
          { x: 1816.58, y: 240.64 },
          { x: 3400.85, y: 240.51 },
          { x: 4573.54, y: 241.13 },
          { x: 5332.66, y: 240.48 },
          { x: 5825.48, y: 240.31 },
          { x: 6108.64, y: 240.48 },
          { x: 6381.03, y: 240.13 },
          { x: 6535.60, y: 240.13 },
          { x: 6587.98, y: 240.86 },
          { x: 6729.12, y: 240.17 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.65, y: 325.85 },
          { x: 753.77, y: 315.33 },
          { x: 1111.27, y: 326.69 },
          { x: 1469.32, y: 324.59 },
          { x: 1820.91, y: 324.79 },
          { x: 3428.08, y: 329.11 },
          { x: 4624.11, y: 325.19 },
          { x: 5373.89, y: 324.07 },
          { x: 5901.14, y: 323.25 },
          { x: 6244.05, y: 323.97 },
          { x: 6498.55, y: 321.88 },
          { x: 6665.76, y: 322.43 },
          { x: 6799.50, y: 321.75 },
          { x: 6936.47, y: 322.43 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 386.78, y: 228.14 },
          { x: 751.07, y: 227.04 },
          { x: 1456.58, y: 227.31 },
          { x: 1801.71, y: 228.39 },
          { x: 3339.70, y: 226.86 },
          { x: 4454.18, y: 228.11 },
          { x: 5167.98, y: 228.76 },
          { x: 5659.74, y: 228.03 },
          { x: 5922.15, y: 226.17 },
          { x: 6161.40, y: 226.41 },
          { x: 6362.01, y: 227.41 },
          { x: 6432.50, y: 227.30 },
          { x: 6533.59, y: 226.38 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.42, y: 237.56 },
          { x: 754.67, y: 237.37 },
          { x: 1107.22, y: 232.04 },
          { x: 1461.70, y: 232.16 },
          { x: 1812.72, y: 232.22 },
          { x: 3385.39, y: 233.46 },
          { x: 4517.66, y: 232.19 },
          { x: 5226.46, y: 233.27 },
          { x: 5755.53, y: 231.48 },
          { x: 6083.01, y: 236.19 },
          { x: 6259.34, y: 233.53 },
          { x: 6460.85, y: 232.00 },
          { x: 6604.42, y: 237.58 },
          { x: 6680.70, y: 236.49 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 461.52, y: 210.64 },
          { x: 825.91, y: 202.92 },
          { x: 1066.38, y: 200.36 },
          { x: 1546.67, y: 197.95 },
          { x: 2031.47, y: 195.27 },
          { x: 3972.64, y: 191.37 },
          { x: 5909.46, y: 189.67 },
          { x: 7845.96, y: 188.46 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 469.52, y: 336.21 },
          { x: 816.74, y: 329.72 },
          { x: 1052.60, y: 328.09 },
          { x: 1532.63, y: 325.59 },
          { x: 2015.79, y: 322.95 },
          { x: 3917.17, y: 322.92 },
          { x: 5817.74, y: 317.43 },
          { x: 7732.42, y: 315.39 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 379.40, y: 200.87 },
          { x: 860.17, y: 190.69 },
          { x: 1223.28, y: 183.17 },
          { x: 1635.02, y: 176.33 },
          { x: 2044.83, y: 169.87 },
          { x: 4001.32, y: 150.26 },
          { x: 5941.48, y: 136.31 },
          { x: 7875.91, y: 125.13 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 390.98, y: 434.56 },
          { x: 869.82, y: 428.78 },
          { x: 1236.23, y: 426.95 },
          { x: 1642.03, y: 423.16 },
          { x: 2051.91, y: 420.48 },
          { x: 4002.07, y: 415.72 },
          { x: 5938.27, y: 401.91 },
          { x: 7870.39, y: 394.03 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 373.51, y: 194.66 },
          { x: 860.77, y: 186.62 },
          { x: 1217.93, y: 181.06 },
          { x: 1624.68, y: 174.80 },
          { x: 2034.07, y: 169.58 },
          { x: 3984.26, y: 152.93 },
          { x: 5930.61, y: 141.63 },
          { x: 7857.64, y: 131.35 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 380.52, y: 381.60 },
          { x: 863.82, y: 376.83 },
          { x: 1220.60, y: 376.52 },
          { x: 1632.84, y: 364.65 },
          { x: 2042.49, y: 379.02 },
          { x: 3989.16, y: 378.93 },
          { x: 5928.87, y: 376.34 },
          { x: 7865.01, y: 376.83 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 400.77, y: 171.66 },
          { x: 812.76, y: 167.44 },
          { x: 1055.97, y: 165.87 },
          { x: 1533.18, y: 166.42 },
          { x: 2010.59, y: 167.09 },
          { x: 3938.33, y: 165.37 },
          { x: 5873.88, y: 164.69 },
          { x: 7810.54, y: 164.46 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 461.05, y: 433.20 },
          { x: 811.42, y: 431.97 },
          { x: 1053.21, y: 432.32 },
          { x: 1529.91, y: 431.97 },
          { x: 2005.01, y: 432.15 },
          { x: 3910.10, y: 430.86 },
          { x: 5818.60, y: 430.81 },
          { x: 7725.56, y: 429.36 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 399.22, y: 109.43 },
          { x: 872.00, y: 109.09 },
          { x: 1241.18, y: 108.86 },
          { x: 1647.79, y: 108.77 },
          { x: 2053.24, y: 108.79 },
          { x: 4024.97, y: 108.45 },
          { x: 5989.90, y: 108.73 },
          { x: 7949.37, y: 108.29 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.82, y: 403.49 },
          { x: 866.91, y: 399.30 },
          { x: 1238.56, y: 399.60 },
          { x: 1637.07, y: 399.05 },
          { x: 2049.29, y: 398.11 },
          { x: 4002.58, y: 394.37 },
          { x: 5940.59, y: 392.48 },
          { x: 7868.08, y: 388.94 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.58, y: 111.28 },
          { x: 870.46, y: 111.38 },
          { x: 1238.85, y: 111.55 },
          { x: 1644.36, y: 111.33 },
          { x: 2053.80, y: 111.70 },
          { x: 4024.66, y: 111.37 },
          { x: 5993.55, y: 111.18 },
          { x: 7939.84, y: 110.80 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 385.45, y: 376.87 },
          { x: 867.01, y: 377.45 },
          { x: 1240.10, y: 374.62 },
          { x: 1638.92, y: 373.35 },
          { x: 2048.68, y: 374.31 },
          { x: 3995.23, y: 378.71 },
          { x: 5936.30, y: 380.06 },
          { x: 7869.09, y: 372.00 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 397.38, y: 214.10 },
          { x: 812.65, y: 209.33 },
          { x: 1056.16, y: 208.47 },
          { x: 1533.69, y: 209.73 },
          { x: 2010.69, y: 210.62 },
          { x: 3939.83, y: 211.16 },
          { x: 5872.18, y: 210.44 },
          { x: 7810.23, y: 210.10 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 459.28, y: 500.86 },
          { x: 811.88, y: 499.37 },
          { x: 1051.29, y: 500.78 },
          { x: 1528.51, y: 502.12 },
          { x: 2006.27, y: 501.26 },
          { x: 3915.04, y: 501.89 },
          { x: 5818.49, y: 502.52 },
          { x: 7722.64, y: 501.02 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 397.96, y: 135.19 },
          { x: 872.03, y: 135.26 },
          { x: 1241.85, y: 135.48 },
          { x: 1646.97, y: 135.31 },
          { x: 2053.73, y: 135.43 },
          { x: 4026.91, y: 135.20 },
          { x: 5992.29, y: 135.28 },
          { x: 7952.90, y: 135.06 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.06, y: 486.22 },
          { x: 866.12, y: 486.52 },
          { x: 1238.97, y: 486.59 },
          { x: 1636.18, y: 486.82 },
          { x: 2052.45, y: 486.52 },
          { x: 3999.95, y: 485.71 },
          { x: 5939.99, y: 485.56 },
          { x: 7859.72, y: 484.75 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 397.23, y: 138.44 },
          { x: 869.63, y: 138.71 },
          { x: 1240.17, y: 138.82 },
          { x: 1645.12, y: 138.54 },
          { x: 2053.75, y: 138.35 },
          { x: 4024.20, y: 138.26 },
          { x: 5987.16, y: 137.97 },
          { x: 7941.30, y: 137.87 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 384.96, y: 374.53 },
          { x: 867.15, y: 374.71 },
          { x: 1238.79, y: 376.96 },
          { x: 1637.00, y: 372.04 },
          { x: 2047.39, y: 378.66 },
          { x: 3998.14, y: 372.30 },
          { x: 5938.03, y: 374.84 },
          { x: 7868.55, y: 375.50 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 395.08, y: 214.51 },
          { x: 879.16, y: 214.51 },
          { x: 1238.56, y: 214.61 },
          { x: 1644.93, y: 214.78 },
          { x: 2053.65, y: 213.67 },
          { x: 4002.94, y: 207.31 },
          { x: 5937.75, y: 203.97 },
          { x: 7851.72, y: 198.97 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.62, y: 583.27 },
          { x: 869.66, y: 584.34 },
          { x: 1231.12, y: 581.89 },
          { x: 1634.99, y: 584.23 },
          { x: 2044.67, y: 582.63 },
          { x: 3965.06, y: 581.57 },
          { x: 5884.13, y: 582.53 },
          { x: 7780.98, y: 578.52 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.77, y: 193.44 },
          { x: 876.98, y: 194.34 },
          { x: 1237.08, y: 193.76 },
          { x: 1646.99, y: 193.17 },
          { x: 2047.86, y: 193.41 },
          { x: 3984.65, y: 190.06 },
          { x: 5920.88, y: 186.65 },
          { x: 7832.64, y: 185.11 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.04, y: 376.87 },
          { x: 871.46, y: 376.07 },
          { x: 1229.51, y: 378.84 },
          { x: 1634.97, y: 378.30 },
          { x: 2041.75, y: 375.10 },
          { x: 3968.29, y: 373.13 },
          { x: 5887.66, y: 375.85 },
          { x: 7783.95, y: 374.66 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1155.12, y: 19.23 },
          { x: 1160.24, y: 19.27 },
          { x: 1270.85, y: 18.86 },
          { x: 1529.44, y: 18.90 },
          { x: 1878.72, y: 19.06 },
          { x: 3707.92, y: 19.08 },
          { x: 5550.01, y: 18.75 },
          { x: 7385.82, y: 18.85 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 549.12, y: 133.92 },
          { x: 781.40, y: 140.08 },
          { x: 1168.97, y: 145.24 },
          { x: 1527.42, y: 153.50 },
          { x: 1900.84, y: 157.23 },
          { x: 3746.82, y: 159.60 },
          { x: 5582.21, y: 152.84 },
          { x: 7374.56, y: 146.35 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 807.30, y: 38.20 },
          { x: 875.14, y: 38.14 },
          { x: 1150.72, y: 38.71 },
          { x: 1512.44, y: 39.34 },
          { x: 1880.97, y: 39.10 },
          { x: 3723.34, y: 37.55 },
          { x: 5548.43, y: 37.39 },
          { x: 6552.90, y: 37.54 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 328.06 },
          { x: 801.55, y: 318.86 },
          { x: 1190.70, y: 327.25 },
          { x: 1578.91, y: 329.65 },
          { x: 1969.00, y: 322.82 },
          { x: 3914.32, y: 328.84 },
          { x: 5851.89, y: 327.69 },
          { x: 7685.19, y: 326.79 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 412.04, y: 183.64 },
          { x: 801.31, y: 183.32 },
          { x: 1189.64, y: 183.82 },
          { x: 1578.24, y: 183.80 },
          { x: 1969.73, y: 183.36 },
          { x: 3916.37, y: 182.81 },
          { x: 5852.50, y: 183.09 },
          { x: 7677.65, y: 183.33 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1170.82, y: 41.80 },
          { x: 1180.82, y: 41.15 },
          { x: 1281.32, y: 39.31 },
          { x: 1531.48, y: 42.03 },
          { x: 1881.03, y: 42.66 },
          { x: 3706.75, y: 48.88 },
          { x: 5551.12, y: 41.75 },
          { x: 7384.58, y: 50.11 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 528.00, y: 247.21 },
          { x: 775.15, y: 283.91 },
          { x: 1169.73, y: 285.00 },
          { x: 1558.92, y: 283.48 },
          { x: 1947.59, y: 284.11 },
          { x: 3894.94, y: 257.85 },
          { x: 5832.05, y: 283.94 },
          { x: 7674.48, y: 282.28 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 917.27, y: 140.47 },
          { x: 945.26, y: 79.58 },
          { x: 1170.85, y: 140.44 },
          { x: 1520.24, y: 140.51 },
          { x: 1886.92, y: 103.71 },
          { x: 3732.42, y: 140.48 },
          { x: 5555.66, y: 140.38 },
          { x: 6534.87, y: 140.45 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 411.34, y: 429.59 },
          { x: 801.43, y: 446.15 },
          { x: 1190.65, y: 470.54 },
          { x: 1579.84, y: 469.09 },
          { x: 1969.97, y: 466.01 },
          { x: 3915.06, y: 414.97 },
          { x: 5859.65, y: 458.12 },
          { x: 7678.05, y: 441.34 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 411.10, y: 245.50 },
          { x: 800.94, y: 173.59 },
          { x: 1190.40, y: 174.64 },
          { x: 1578.61, y: 180.74 },
          { x: 1969.20, y: 197.64 },
          { x: 3915.56, y: 215.55 },
          { x: 5853.84, y: 229.75 },
          { x: 7684.88, y: 231.30 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1136.39, y: 23.87 },
          { x: 1137.89, y: 23.30 },
          { x: 1263.52, y: 23.33 },
          { x: 1606.46, y: 23.81 },
          { x: 1943.11, y: 23.92 },
          { x: 3819.26, y: 24.18 },
          { x: 5689.53, y: 24.09 },
          { x: 7575.18, y: 24.07 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.62, y: 551.55 },
          { x: 785.13, y: 482.11 },
          { x: 1173.39, y: 510.47 },
          { x: 1563.42, y: 531.71 },
          { x: 1947.60, y: 531.71 },
          { x: 3797.15, y: 546.54 },
          { x: 5657.04, y: 536.90 },
          { x: 7510.07, y: 548.89 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.69, y: 198.66 },
          { x: 785.10, y: 247.56 },
          { x: 1174.87, y: 248.10 },
          { x: 1562.35, y: 188.64 },
          { x: 1950.99, y: 247.79 },
          { x: 3810.33, y: 185.59 },
          { x: 5693.72, y: 246.30 },
          { x: 7549.09, y: 246.55 }
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

var ctx_t2_20221225_bitrate_ssim_data = document.getElementById('chart_t2_20221225_bitrate_ssim');
const chart_t2_20221225_bitrate_ssim_data = new Chart(ctx_t2_20221225_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5821.51, y: 0.994282 },
          { x: 3315.29, y: 0.991638 },
          { x: 1828.12, y: 0.987515 },
          { x: 1043.38, y: 0.981332 },
          { x: 627.07, y: 0.972165 },
          { x: 410.19, y: 0.959106 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 7505.16, y: 0.996836 },
          { x: 5105.61, y: 0.995294 },
          { x: 2957.98, y: 0.992398 },
          { x: 1618.16, y: 0.988064 },
          { x: 935.69, y: 0.981867 },
          { x: 567.81, y: 0.973015 },
          { x: 374.81, y: 0.960795 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6975.17, y: 0.995154 },
          { x: 3823.33, y: 0.993243 },
          { x: 2004.28, y: 0.99059 },
          { x: 1023.60, y: 0.986774 },
          { x: 527.11, y: 0.981042 },
          { x: 290.91, y: 0.972328 },
          { x: 173.82, y: 0.960074 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6945.03, y: 0.996051 },
          { x: 3776.93, y: 0.994266 },
          { x: 1968.01, y: 0.991672 },
          { x: 1005.52, y: 0.987852 },
          { x: 520.34, y: 0.982166 },
          { x: 287.93, y: 0.973598 },
          { x: 171.31, y: 0.961351 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 7539.73, y: 0.996358 },
          { x: 4534.66, y: 0.99489 },
          { x: 2592.56, y: 0.992862 },
          { x: 1369.27, y: 0.989885 },
          { x: 696.33, y: 0.985403 },
          { x: 363.22, y: 0.97842 },
          { x: 192.58, y: 0.968065 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7541.78, y: 0.996928 },
          { x: 4476.28, y: 0.995589 },
          { x: 2518.96, y: 0.993601 },
          { x: 1325.08, y: 0.990635 },
          { x: 685.98, y: 0.986257 },
          { x: 364.04, y: 0.979494 },
          { x: 194.45, y: 0.969305 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 6487.10, y: 0.995721 },
          { x: 4239.55, y: 0.994818 },
          { x: 2892.60, y: 0.993951 },
          { x: 1821.46, y: 0.992763 },
          { x: 1121.71, y: 0.991256 },
          { x: 731.12, y: 0.989546 },
          { x: 498.59, y: 0.987585 },
          { x: 338.03, y: 0.98486 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6353.44, y: 0.996427 },
          { x: 4096.81, y: 0.995581 },
          { x: 2745.68, y: 0.994716 },
          { x: 1733.24, y: 0.993571 },
          { x: 1077.98, y: 0.992123 },
          { x: 709.73, y: 0.990451 },
          { x: 486.71, y: 0.988476 },
          { x: 331.51, y: 0.985748 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6373.09, y: 0.995249 },
          { x: 4112.12, y: 0.994284 },
          { x: 2764.53, y: 0.993353 },
          { x: 1729.11, y: 0.992063 },
          { x: 1095.58, y: 0.990526 },
          { x: 719.24, y: 0.988687 },
          { x: 502.60, y: 0.986712 },
          { x: 340.82, y: 0.983855 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6517.94, y: 0.996112 },
          { x: 4076.18, y: 0.99515 },
          { x: 2687.49, y: 0.994213 },
          { x: 1684.65, y: 0.99296 },
          { x: 1072.63, y: 0.991477 },
          { x: 708.52, y: 0.989676 },
          { x: 495.06, y: 0.987698 },
          { x: 338.16, y: 0.984894 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6088.00, y: 0.994054 },
          { x: 3997.00, y: 0.993222 },
          { x: 2636.63, y: 0.99232 },
          { x: 1576.14, y: 0.990919 },
          { x: 981.57, y: 0.989288 },
          { x: 650.22, y: 0.987353 },
          { x: 465.68, y: 0.985298 },
          { x: 323.99, y: 0.982294 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7347.03, y: 0.995665 },
          { x: 4312.30, y: 0.994494 },
          { x: 2678.09, y: 0.993373 },
          { x: 1568.41, y: 0.991911 },
          { x: 969.32, y: 0.990279 },
          { x: 644.67, y: 0.988404 },
          { x: 460.45, y: 0.986345 },
          { x: 320.93, y: 0.983339 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6530.69, y: 0.993296 },
          { x: 4095.27, y: 0.992247 },
          { x: 2731.24, y: 0.991324 },
          { x: 1662.91, y: 0.989924 },
          { x: 1004.25, y: 0.988032 },
          { x: 656.80, y: 0.985789 },
          { x: 444.89, y: 0.983192 },
          { x: 293.87, y: 0.979333 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6652.36, y: 0.99451 },
          { x: 4149.71, y: 0.993459 },
          { x: 2704.99, y: 0.992477 },
          { x: 1639.25, y: 0.991046 },
          { x: 992.57, y: 0.989149 },
          { x: 651.24, y: 0.986907 },
          { x: 440.38, y: 0.984196 },
          { x: 291.95, y: 0.980442 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 7396.17, y: 0.99428 },
          { x: 4485.12, y: 0.992409 },
          { x: 2565.40, y: 0.989644 },
          { x: 1402.78, y: 0.984846 },
          { x: 927.30, y: 0.979066 },
          { x: 619.19, y: 0.970163 },
          { x: 469.56, y: 0.957958 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7113.05, y: 0.99414 },
          { x: 4409.16, y: 0.992368 },
          { x: 2585.25, y: 0.989729 },
          { x: 1443.77, y: 0.98519 },
          { x: 949.92, y: 0.979734 },
          { x: 638.20, y: 0.97148 },
          { x: 477.50, y: 0.960038 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 7247.46, y: 0.994574 },
          { x: 4478.39, y: 0.992948 },
          { x: 2721.58, y: 0.99073 },
          { x: 1506.59, y: 0.986333 },
          { x: 999.78, y: 0.981213 },
          { x: 676.34, y: 0.973809 },
          { x: 484.48, y: 0.962241 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7209.15, y: 0.994444 },
          { x: 4535.76, y: 0.992893 },
          { x: 2831.81, y: 0.990856 },
          { x: 1605.04, y: 0.986797 },
          { x: 1063.30, y: 0.982135 },
          { x: 709.51, y: 0.974845 },
          { x: 494.37, y: 0.962944 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7103.01, y: 0.992811 },
          { x: 4415.04, y: 0.990812 },
          { x: 2594.39, y: 0.988301 },
          { x: 1512.27, y: 0.984373 },
          { x: 910.00, y: 0.978575 },
          { x: 556.81, y: 0.969437 },
          { x: 434.06, y: 0.960078 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 0.994195 },
          { x: 4191.70, y: 0.992387 },
          { x: 2495.80, y: 0.989824 },
          { x: 1476.64, y: 0.986053 },
          { x: 907.32, y: 0.980177 },
          { x: 542.13, y: 0.971141 },
          { x: 426.76, y: 0.9616 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 7239.59, y: 0.994578 },
          { x: 4518.13, y: 0.992975 },
          { x: 2737.16, y: 0.990771 },
          { x: 1520.55, y: 0.986408 },
          { x: 1007.68, y: 0.981331 },
          { x: 679.51, y: 0.973941 },
          { x: 487.59, y: 0.962388 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7208.90, y: 0.994443 },
          { x: 4535.98, y: 0.992893 },
          { x: 2831.91, y: 0.990856 },
          { x: 1604.80, y: 0.986798 },
          { x: 1063.28, y: 0.982138 },
          { x: 709.31, y: 0.974841 },
          { x: 494.07, y: 0.962894 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6892.36, y: 0.994589 },
          { x: 3936.46, y: 0.992759 },
          { x: 1945.52, y: 0.989684 },
          { x: 947.85, y: 0.985163 },
          { x: 509.51, y: 0.978628 },
          { x: 293.43, y: 0.96952 },
          { x: 192.32, y: 0.957024 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6796.72, y: 0.995528 },
          { x: 3896.26, y: 0.993752 },
          { x: 1945.07, y: 0.990697 },
          { x: 955.12, y: 0.986099 },
          { x: 515.03, y: 0.979717 },
          { x: 295.69, y: 0.970709 },
          { x: 192.88, y: 0.958304 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        data:[
          { x: 7757.26, y: 0.994981 },
          { x: 4497.43, y: 0.993247 },
          { x: 3645.29, y: 0.992276 },
          { x: 2104.14, y: 0.988772 },
          { x: 1298.41, y: 0.983512 },
          { x: 855.03, y: 0.975615 },
          { x: 538.90, y: 0.964472 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7848.78, y: 0.994944 },
          { x: 4517.90, y: 0.993199 },
          { x: 3547.07, y: 0.992128 },
          { x: 2073.60, y: 0.988703 },
          { x: 1281.08, y: 0.983664 },
          { x: 826.78, y: 0.975955 },
          { x: 543.33, y: 0.96432 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 0.993711 },
          { x: 2857.84, y: 0.991941 },
          { x: 1988.77, y: 0.990318 },
          { x: 965.98, y: 0.985726 },
          { x: 534.32, y: 0.978495 },
          { x: 341.04, y: 0.968755 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 0.994717 },
          { x: 2798.82, y: 0.992962 },
          { x: 1955.45, y: 0.991341 },
          { x: 957.09, y: 0.986635 },
          { x: 534.15, y: 0.979651 },
          { x: 339.80, y: 0.970047 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6213.17, y: 0.994802 },
          { x: 4044.82, y: 0.993509 },
          { x: 2621.06, y: 0.991969 },
          { x: 1725.29, y: 0.990236 },
          { x: 1113.46, y: 0.987965 },
          { x: 735.09, y: 0.984821 },
          { x: 478.31, y: 0.980022 },
          { x: 319.83, y: 0.973622 },
          { x: 216.83, y: 0.96455 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6247.85, y: 0.9947 },
          { x: 4026.98, y: 0.993395 },
          { x: 2610.29, y: 0.991847 },
          { x: 1723.97, y: 0.990115 },
          { x: 1111.42, y: 0.987797 },
          { x: 735.39, y: 0.984601 },
          { x: 482.51, y: 0.97973 },
          { x: 327.29, y: 0.973335 },
          { x: 224.33, y: 0.964158 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6931.57, y: 0.995751 },
          { x: 4313.89, y: 0.994623 },
          { x: 2709.54, y: 0.993124 },
          { x: 1746.77, y: 0.99138 },
          { x: 1123.98, y: 0.989092 },
          { x: 734.62, y: 0.985938 },
          { x: 479.63, y: 0.981229 },
          { x: 321.17, y: 0.974835 },
          { x: 217.48, y: 0.965582 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6981.04, y: 0.995675 },
          { x: 4306.54, y: 0.994522 },
          { x: 2702.17, y: 0.993012 },
          { x: 1753.64, y: 0.991277 },
          { x: 1127.18, y: 0.988942 },
          { x: 736.08, y: 0.985739 },
          { x: 485.54, y: 0.980977 },
          { x: 328.39, y: 0.974522 },
          { x: 224.93, y: 0.96522 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 6829.03, y: 0.994394 },
          { x: 4137.63, y: 0.992224 },
          { x: 2429.99, y: 0.988839 },
          { x: 1422.63, y: 0.983566 },
          { x: 875.39, y: 0.97498 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7255.58, y: 0.994115 },
          { x: 4328.68, y: 0.99191 },
          { x: 2499.95, y: 0.989029 },
          { x: 1416.25, y: 0.984933 },
          { x: 804.55, y: 0.97868 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6886.88, y: 0.994552 },
          { x: 4025.55, y: 0.99215 },
          { x: 2225.30, y: 0.988813 },
          { x: 1257.14, y: 0.984267 },
          { x: 709.70, y: 0.977077 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        data:[
          { x: 6424.51, y: 0.994349 },
          { x: 3840.16, y: 0.992082 },
          { x: 2240.46, y: 0.988554 },
          { x: 1231.29, y: 0.982569 },
          { x: 749.13, y: 0.972286 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 5965.96, y: 0.994209 },
          { x: 3450.30, y: 0.992258 },
          { x: 1907.34, y: 0.989494 },
          { x: 1061.07, y: 0.985622 },
          { x: 624.06, y: 0.979512 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5956.10, y: 0.995306 },
          { x: 3456.28, y: 0.993459 },
          { x: 1899.16, y: 0.99075 },
          { x: 1041.04, y: 0.98681 },
          { x: 609.83, y: 0.980824 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 6438.05, y: 0.994348 },
          { x: 3846.91, y: 0.992084 },
          { x: 2244.29, y: 0.988575 },
          { x: 1232.38, y: 0.982705 },
          { x: 745.50, y: 0.972718 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 5977.54, y: 0.994218 },
          { x: 3459.47, y: 0.992281 },
          { x: 1911.94, y: 0.989531 },
          { x: 1064.59, y: 0.98571 },
          { x: 625.52, y: 0.979672 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5968.23, y: 0.995313 },
          { x: 3464.95, y: 0.993477 },
          { x: 1903.53, y: 0.990784 },
          { x: 1043.88, y: 0.986901 },
          { x: 612.37, y: 0.980998 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6111.67, y: 0.994498 },
          { x: 4037.49, y: 0.993187 },
          { x: 2618.50, y: 0.991482 },
          { x: 1670.62, y: 0.989245 },
          { x: 1074.30, y: 0.986163 },
          { x: 712.22, y: 0.982003 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5912.06, y: 0.995573 },
          { x: 3869.03, y: 0.994332 },
          { x: 2528.82, y: 0.992649 },
          { x: 1628.03, y: 0.990365 },
          { x: 1051.90, y: 0.987305 },
          { x: 699.60, y: 0.9831 },
          { x: 529.30, y: 0.979009 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1478.83, y: 0.97927 },
          { x: 1932.83, y: 0.983352 },
          { x: 2594.83, y: 0.986023 },
          { x: 3346.61, y: 0.988444 },
          { x: 4102.60, y: 0.990227 },
          { x: 4909.74, y: 0.991226 },
          { x: 5734.02, y: 0.992213 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1477.85, y: 0.978881 },
          { x: 1934.25, y: 0.982999 },
          { x: 2600.22, y: 0.985714 },
          { x: 3355.75, y: 0.988187 },
          { x: 4116.29, y: 0.990012 },
          { x: 4925.23, y: 0.991035 },
          { x: 5757.53, y: 0.992047 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 1479.48, y: 0.979268 },
          { x: 1933.84, y: 0.983353 },
          { x: 2595.17, y: 0.986021 },
          { x: 3347.37, y: 0.988444 },
          { x: 4103.10, y: 0.990227 },
          { x: 4910.56, y: 0.991226 },
          { x: 5734.77, y: 0.992213 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1478.50, y: 0.978876 },
          { x: 1934.89, y: 0.983 },
          { x: 2600.70, y: 0.985714 },
          { x: 3356.39, y: 0.988186 },
          { x: 4117.00, y: 0.990012 },
          { x: 4926.36, y: 0.991034 },
          { x: 5758.07, y: 0.992046 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 559.56, y: 0.971864 },
          { x: 733.06, y: 0.976115 },
          { x: 1031.61, y: 0.980656 },
          { x: 1553.20, y: 0.98464 },
          { x: 2133.90, y: 0.987147 },
          { x: 2928.20, y: 0.989291 },
          { x: 4064.79, y: 0.991296 },
          { x: 5330.74, y: 0.992581 },
          { x: 6679.58, y: 0.993747 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 573.24, y: 0.971269 },
          { x: 749.98, y: 0.975544 },
          { x: 1059.90, y: 0.980092 },
          { x: 1601.38, y: 0.984137 },
          { x: 2205.06, y: 0.9867 },
          { x: 3041.34, y: 0.988889 },
          { x: 4239.53, y: 0.990965 },
          { x: 5566.16, y: 0.992294 },
          { x: 7008.85, y: 0.993487 }
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

var ctx_t2_20221225_bitrate_vmaf_data = document.getElementById('chart_t2_20221225_bitrate_vmaf');
const chart_t2_20221225_bitrate_vmaf_data = new Chart(ctx_t2_20221225_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5821.51, y: 94.890511 },
          { x: 3315.29, y: 91.817228 },
          { x: 1828.12, y: 87.220987 },
          { x: 1043.38, y: 80.231542 },
          { x: 627.07, y: 70.066373 },
          { x: 410.19, y: 56.259812 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 7505.16, y: 97.389249 },
          { x: 5105.61, y: 95.850117 },
          { x: 2957.98, y: 92.582827 },
          { x: 1618.16, y: 87.703966 },
          { x: 935.69, y: 80.692062 },
          { x: 567.81, y: 70.555677 },
          { x: 374.81, y: 57.238814 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6975.17, y: 96.398279 },
          { x: 3823.33, y: 94.459462 },
          { x: 2004.28, y: 91.427565 },
          { x: 1023.60, y: 86.924166 },
          { x: 527.11, y: 80.314494 },
          { x: 290.91, y: 70.83942 },
          { x: 173.82, y: 57.973812 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6945.03, y: 96.557756 },
          { x: 3776.93, y: 95.161318 },
          { x: 1968.01, y: 92.995318 },
          { x: 1005.52, y: 89.854893 },
          { x: 520.34, y: 85.2772 },
          { x: 287.93, y: 78.631412 },
          { x: 171.31, y: 69.383837 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 7539.73, y: 97.515413 },
          { x: 4534.66, y: 96.415806 },
          { x: 2592.56, y: 94.472195 },
          { x: 1369.27, y: 91.463117 },
          { x: 696.33, y: 87.112163 },
          { x: 363.22, y: 80.561878 },
          { x: 192.58, y: 70.402643 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7541.78, y: 97.357362 },
          { x: 4476.28, y: 96.544635 },
          { x: 2518.96, y: 95.14203 },
          { x: 1325.08, y: 93.037593 },
          { x: 685.98, y: 90.095812 },
          { x: 364.04, y: 85.53976 },
          { x: 194.45, y: 78.322073 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 6487.10, y: 97.002691 },
          { x: 4239.55, y: 96.023983 },
          { x: 2892.60, y: 94.880387 },
          { x: 1821.46, y: 93.121214 },
          { x: 1121.71, y: 90.904586 },
          { x: 731.12, y: 88.36687 },
          { x: 498.59, y: 85.371918 },
          { x: 338.03, y: 81.327956 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6353.44, y: 97.139426 },
          { x: 4096.81, y: 96.181077 },
          { x: 2745.68, y: 94.958729 },
          { x: 1733.24, y: 93.177745 },
          { x: 1077.98, y: 90.928439 },
          { x: 709.73, y: 88.392434 },
          { x: 486.71, y: 85.304611 },
          { x: 331.51, y: 81.169612 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6373.09, y: 96.824638 },
          { x: 4112.12, y: 95.751158 },
          { x: 2764.53, y: 94.573131 },
          { x: 1729.11, y: 92.715186 },
          { x: 1095.58, y: 90.462143 },
          { x: 719.24, y: 87.766686 },
          { x: 502.60, y: 84.849179 },
          { x: 340.82, y: 80.688706 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6517.94, y: 97.024762 },
          { x: 4076.18, y: 95.955857 },
          { x: 2687.49, y: 94.696526 },
          { x: 1684.65, y: 92.821302 },
          { x: 1072.63, y: 90.587697 },
          { x: 708.52, y: 87.868505 },
          { x: 495.06, y: 84.912047 },
          { x: 338.16, y: 80.65658 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6088.00, y: 96.366108 },
          { x: 3997.00, y: 95.332274 },
          { x: 2636.63, y: 94.121323 },
          { x: 1576.14, y: 92.119112 },
          { x: 981.57, y: 89.729739 },
          { x: 650.22, y: 86.766035 },
          { x: 465.68, y: 83.608291 },
          { x: 323.99, y: 79.100703 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7347.03, y: 96.862575 },
          { x: 4312.30, y: 95.704406 },
          { x: 2678.09, y: 94.328333 },
          { x: 1568.41, y: 92.255394 },
          { x: 969.32, y: 89.850272 },
          { x: 644.67, y: 86.889717 },
          { x: 460.45, y: 83.711445 },
          { x: 320.93, y: 79.150251 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6530.69, y: 95.725979 },
          { x: 4095.27, y: 94.312171 },
          { x: 2731.24, y: 92.888208 },
          { x: 1662.91, y: 90.641696 },
          { x: 1004.25, y: 87.714776 },
          { x: 656.80, y: 84.437197 },
          { x: 444.89, y: 80.463197 },
          { x: 293.87, y: 75.030204 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6652.36, y: 95.724741 },
          { x: 4149.71, y: 94.400572 },
          { x: 2704.99, y: 92.897423 },
          { x: 1639.25, y: 90.610186 },
          { x: 992.57, y: 87.731166 },
          { x: 651.24, y: 84.457996 },
          { x: 440.38, y: 80.461902 },
          { x: 291.95, y: 74.960739 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 7396.17, y: 95.735201 },
          { x: 4485.12, y: 94.118196 },
          { x: 2565.40, y: 91.231206 },
          { x: 1402.78, y: 85.854436 },
          { x: 927.30, y: 79.738041 },
          { x: 619.19, y: 71.602907 },
          { x: 469.56, y: 61.948907 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7113.05, y: 95.108671 },
          { x: 4409.16, y: 93.53564 },
          { x: 2585.25, y: 90.814977 },
          { x: 1443.77, y: 85.878977 },
          { x: 949.92, y: 80.224853 },
          { x: 638.20, y: 72.749265 },
          { x: 477.50, y: 63.496938 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 7247.46, y: 96.245858 },
          { x: 4478.39, y: 94.824082 },
          { x: 2721.58, y: 92.331795 },
          { x: 1506.59, y: 87.702283 },
          { x: 999.78, y: 82.129196 },
          { x: 676.34, y: 74.810154 },
          { x: 484.48, y: 64.329778 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7209.15, y: 95.675412 },
          { x: 4535.76, y: 94.222526 },
          { x: 2831.81, y: 91.899213 },
          { x: 1605.04, y: 87.762419 },
          { x: 1063.30, y: 82.823924 },
          { x: 709.51, y: 75.664374 },
          { x: 494.37, y: 64.873276 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7103.01, y: 95.358606 },
          { x: 4415.04, y: 93.760797 },
          { x: 2594.39, y: 91.055645 },
          { x: 1512.27, y: 87.093536 },
          { x: 910.00, y: 80.798288 },
          { x: 556.81, y: 71.542316 },
          { x: 434.06, y: 64.142668 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 95.701636 },
          { x: 4191.70, y: 94.535732 },
          { x: 2495.80, y: 92.638281 },
          { x: 1476.64, y: 89.829767 },
          { x: 907.32, y: 85.353671 },
          { x: 542.13, y: 78.783672 },
          { x: 426.76, y: 73.359949 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 7239.59, y: 96.255763 },
          { x: 4518.13, y: 94.849902 },
          { x: 2737.16, y: 92.352708 },
          { x: 1520.55, y: 87.766381 },
          { x: 1007.68, y: 82.247972 },
          { x: 679.51, y: 74.972424 },
          { x: 487.59, y: 64.439503 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7208.90, y: 95.674391 },
          { x: 4535.98, y: 94.219348 },
          { x: 2831.91, y: 91.896838 },
          { x: 1604.80, y: 87.753136 },
          { x: 1063.28, y: 82.813628 },
          { x: 709.31, y: 75.693358 },
          { x: 494.07, y: 64.855831 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6892.36, y: 96.534 },
          { x: 3936.46, y: 94.880906 },
          { x: 1945.52, y: 91.801043 },
          { x: 947.85, y: 87.025303 },
          { x: 509.51, y: 80.442567 },
          { x: 293.43, y: 70.738673 },
          { x: 192.32, y: 59.156119 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6796.72, y: 96.591785 },
          { x: 3896.26, y: 95.394396 },
          { x: 1945.07, y: 93.243151 },
          { x: 955.12, y: 89.931274 },
          { x: 515.03, y: 85.194035 },
          { x: 295.69, y: 78.292872 },
          { x: 192.88, y: 69.888162 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        data:[
          { x: 7757.26, y: 96.496397 },
          { x: 4497.43, y: 94.736733 },
          { x: 3645.29, y: 93.896726 },
          { x: 2104.14, y: 90.652832 },
          { x: 1298.41, y: 85.779808 },
          { x: 855.03, y: 78.667977 },
          { x: 538.90, y: 67.967424 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7848.78, y: 96.010111 },
          { x: 4517.90, y: 94.098804 },
          { x: 3547.07, y: 93.105671 },
          { x: 2073.60, y: 89.852381 },
          { x: 1281.08, y: 85.061456 },
          { x: 826.78, y: 78.048153 },
          { x: 543.33, y: 67.62938 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 95.519972 },
          { x: 2857.84, y: 93.670371 },
          { x: 1988.77, y: 92.03945 },
          { x: 965.98, y: 87.705164 },
          { x: 534.32, y: 81.629169 },
          { x: 341.04, y: 72.688894 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 95.886432 },
          { x: 2798.82, y: 94.575005 },
          { x: 1955.45, y: 93.439838 },
          { x: 957.09, y: 90.428665 },
          { x: 534.15, y: 86.140895 },
          { x: 339.80, y: 79.74046 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6213.17, y: 96.180038 },
          { x: 4044.82, y: 95.042169 },
          { x: 2621.06, y: 93.266809 },
          { x: 1725.29, y: 91.083489 },
          { x: 1113.46, y: 88.24445 },
          { x: 735.09, y: 84.584535 },
          { x: 478.31, y: 79.461976 },
          { x: 319.83, y: 72.902711 },
          { x: 216.83, y: 64.150656 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6247.85, y: 96.064127 },
          { x: 4026.98, y: 94.872654 },
          { x: 2610.29, y: 93.079768 },
          { x: 1723.97, y: 90.896395 },
          { x: 1111.42, y: 87.983635 },
          { x: 735.39, y: 84.275321 },
          { x: 482.51, y: 79.046166 },
          { x: 327.29, y: 72.564649 },
          { x: 224.33, y: 63.723309 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6931.57, y: 96.540865 },
          { x: 4313.89, y: 95.73382 },
          { x: 2709.54, y: 94.460755 },
          { x: 1746.77, y: 92.904784 },
          { x: 1123.98, y: 90.914248 },
          { x: 734.62, y: 88.329611 },
          { x: 479.63, y: 84.699144 },
          { x: 321.17, y: 79.983471 },
          { x: 217.48, y: 73.71282 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6981.04, y: 96.475005 },
          { x: 4306.54, y: 95.629761 },
          { x: 2702.17, y: 94.35572 },
          { x: 1753.64, y: 92.818861 },
          { x: 1127.18, y: 90.776119 },
          { x: 736.08, y: 88.138671 },
          { x: 485.54, y: 84.480457 },
          { x: 328.39, y: 79.735408 },
          { x: 224.93, y: 73.429846 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 6829.03, y: 96.567803 },
          { x: 4137.63, y: 94.668521 },
          { x: 2429.99, y: 91.467012 },
          { x: 1422.63, y: 86.052335 },
          { x: 875.39, y: 77.97604 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7255.58, y: 96.642697 },
          { x: 4328.68, y: 95.135798 },
          { x: 2499.95, y: 92.871178 },
          { x: 1416.25, y: 89.415736 },
          { x: 804.55, y: 84.428166 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6886.88, y: 96.456681 },
          { x: 4025.55, y: 95.087736 },
          { x: 2225.30, y: 93.037027 },
          { x: 1257.14, y: 90.017446 },
          { x: 709.70, y: 85.40682 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        data:[
          { x: 6424.51, y: 96.742521 },
          { x: 3840.16, y: 94.935824 },
          { x: 2240.46, y: 91.872279 },
          { x: 1231.29, y: 86.534393 },
          { x: 749.13, y: 78.595145 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 5965.96, y: 96.526392 },
          { x: 3450.30, y: 94.891423 },
          { x: 1907.34, y: 92.174097 },
          { x: 1061.07, y: 88.177442 },
          { x: 624.06, y: 82.415534 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5956.10, y: 96.635452 },
          { x: 3456.28, y: 95.443526 },
          { x: 1899.16, y: 93.512609 },
          { x: 1041.04, y: 90.656902 },
          { x: 609.83, y: 86.506898 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 6438.05, y: 96.731619 },
          { x: 3846.91, y: 94.926963 },
          { x: 2244.29, y: 91.851152 },
          { x: 1232.38, y: 86.547798 },
          { x: 745.50, y: 78.706267 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 5977.54, y: 96.527448 },
          { x: 3459.47, y: 94.889536 },
          { x: 1911.94, y: 92.165916 },
          { x: 1064.59, y: 88.190143 },
          { x: 625.52, y: 82.442019 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5968.23, y: 96.638252 },
          { x: 3464.95, y: 95.44421 },
          { x: 1903.53, y: 93.520012 },
          { x: 1043.88, y: 90.668063 },
          { x: 612.37, y: 86.601854 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6111.67, y: 96.910482 },
          { x: 4037.49, y: 95.817524 },
          { x: 2618.50, y: 94.205153 },
          { x: 1670.62, y: 91.926623 },
          { x: 1074.30, y: 88.912489 },
          { x: 712.22, y: 85.127586 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5912.06, y: 96.780802 },
          { x: 3869.03, y: 95.949123 },
          { x: 2528.82, y: 94.7632 },
          { x: 1628.03, y: 93.138997 },
          { x: 1051.90, y: 91.02398 },
          { x: 699.60, y: 88.321278 },
          { x: 529.30, y: 85.73123 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1478.83, y: 76.871147 },
          { x: 1932.83, y: 80.907148 },
          { x: 2594.83, y: 83.905681 },
          { x: 3346.61, y: 86.903389 },
          { x: 4102.60, y: 89.232983 },
          { x: 4909.74, y: 90.654079 },
          { x: 5734.02, y: 92.112083 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1477.85, y: 76.326168 },
          { x: 1934.25, y: 80.391215 },
          { x: 2600.22, y: 83.433297 },
          { x: 3355.75, y: 86.510173 },
          { x: 4116.29, y: 88.878938 },
          { x: 4925.23, y: 90.337366 },
          { x: 5757.53, y: 91.844855 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 1479.48, y: 76.874085 },
          { x: 1933.84, y: 80.921889 },
          { x: 2595.17, y: 83.91021 },
          { x: 3347.37, y: 86.902995 },
          { x: 4103.10, y: 89.233136 },
          { x: 4910.56, y: 90.653104 },
          { x: 5734.77, y: 92.112811 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1478.50, y: 76.327266 },
          { x: 1934.89, y: 80.398051 },
          { x: 2600.70, y: 83.431789 },
          { x: 3356.39, y: 86.508952 },
          { x: 4117.00, y: 88.876168 },
          { x: 4926.36, y: 90.337467 },
          { x: 5758.07, y: 91.845318 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 559.56, y: 79.619095 },
          { x: 733.06, y: 82.976618 },
          { x: 1031.61, y: 86.559888 },
          { x: 1553.20, y: 89.69728 },
          { x: 2133.90, y: 91.759138 },
          { x: 2928.20, y: 93.357205 },
          { x: 4064.79, y: 94.793604 },
          { x: 5330.74, y: 95.66089 },
          { x: 6679.58, y: 96.438975 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 573.24, y: 79.266047 },
          { x: 749.98, y: 82.657109 },
          { x: 1059.90, y: 86.319574 },
          { x: 1601.38, y: 89.498906 },
          { x: 2205.06, y: 91.603274 },
          { x: 3041.34, y: 93.23438 },
          { x: 4239.53, y: 94.690998 },
          { x: 5566.16, y: 95.555671 },
          { x: 7008.85, y: 96.348599 }
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

var ctx_t2_20221225_bitrate_fps_data = document.getElementById('chart_t2_20221225_bitrate_fps');
const chart_t2_20221225_bitrate_fps_data = new Chart(ctx_t2_20221225_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: " x264 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5821.51, y: 262.76 },
          { x: 3315.29, y: 299.99 },
          { x: 1828.12, y: 323.50 },
          { x: 1043.38, y: 343.37 },
          { x: 627.07, y: 359.43 },
          { x: 410.19, y: 371.37 }
        ]
      },
      {
        label: " x264 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 7505.16, y: 48.96 },
          { x: 5105.61, y: 55.60 },
          { x: 2957.98, y: 64.90 },
          { x: 1618.16, y: 72.17 },
          { x: 935.69, y: 77.14 },
          { x: 567.81, y: 84.29 },
          { x: 374.81, y: 87.76 }
        ]
      },
      {
        label: " x265 medium crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6975.17, y: 92.02 },
          { x: 3823.33, y: 113.24 },
          { x: 2004.28, y: 136.69 },
          { x: 1023.60, y: 151.17 },
          { x: 527.11, y: 158.57 },
          { x: 290.91, y: 163.57 },
          { x: 173.82, y: 164.67 }
        ]
      },
      {
        label: " x265 medium 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6945.03, y: 70.11 },
          { x: 3776.93, y: 84.03 },
          { x: 1968.01, y: 98.79 },
          { x: 1005.52, y: 110.37 },
          { x: 520.34, y: 117.08 },
          { x: 287.93, y: 121.01 },
          { x: 171.31, y: 122.43 }
        ]
      },
      {
        label: " x265 veryslow crf",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        data:[
          { x: 7539.73, y: 3.88 },
          { x: 4534.66, y: 4.86 },
          { x: 2592.56, y: 6.20 },
          { x: 1369.27, y: 7.91 },
          { x: 696.33, y: 10.25 },
          { x: 363.22, y: 13.09 },
          { x: 192.58, y: 16.20 }
        ]
      },
      {
        label: " x265 veryslow 10bit crf",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7541.78, y: 3.03 },
          { x: 4476.28, y: 3.75 },
          { x: 2518.96, y: 4.77 },
          { x: 1325.08, y: 6.04 },
          { x: 685.98, y: 7.62 },
          { x: 364.04, y: 9.58 },
          { x: 194.45, y: 11.67 }
        ]
      },
      {
        label: " svtav1 8bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        data:[
          { x: 6487.10, y: 11.058 },
          { x: 4239.55, y: 11.789 },
          { x: 2892.60, y: 12.493 },
          { x: 1821.46, y: 13.913 },
          { x: 1121.71, y: 16.311 },
          { x: 731.12, y: 18.991 },
          { x: 498.59, y: 21.803 },
          { x: 338.03, y: 24.781 }
        ]
      },
      {
        label: " svtav1 10bit P4",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(126, 126, 126, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6353.44, y: 8.853 },
          { x: 4096.81, y: 9.687 },
          { x: 2745.68, y: 10.474 },
          { x: 1733.24, y: 11.826 },
          { x: 1077.98, y: 13.989 },
          { x: 709.73, y: 16.408 },
          { x: 486.71, y: 18.955 },
          { x: 331.51, y: 21.676 }
        ]
      },
      {
        label: " svtav1 8bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6373.09, y: 38.937 },
          { x: 4112.12, y: 41.520 },
          { x: 2764.53, y: 43.775 },
          { x: 1729.11, y: 48.778 },
          { x: 1095.58, y: 56.022 },
          { x: 719.24, y: 64.772 },
          { x: 502.60, y: 72.622 },
          { x: 340.82, y: 81.104 }
        ]
      },
      {
        label: " svtav1 10bit P6",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6517.94, y: 35.931 },
          { x: 4076.18, y: 37.761 },
          { x: 2687.49, y: 39.260 },
          { x: 1684.65, y: 44.450 },
          { x: 1072.63, y: 50.767 },
          { x: 708.52, y: 58.067 },
          { x: 495.06, y: 64.855 },
          { x: 338.16, y: 72.335 }
        ]
      },
      {
        label: " svtav1 8bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6088.00, y: 138.641 },
          { x: 3997.00, y: 137.137 },
          { x: 2636.63, y: 135.855 },
          { x: 1576.14, y: 140.921 },
          { x: 981.57, y: 150.695 },
          { x: 650.22, y: 161.746 },
          { x: 465.68, y: 169.368 },
          { x: 323.99, y: 178.386 }
        ]
      },
      {
        label: " svtav1 10bit P8",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7347.03, y: 107.353 },
          { x: 4312.30, y: 106.526 },
          { x: 2678.09, y: 106.292 },
          { x: 1568.41, y: 109.830 },
          { x: 969.32, y: 111.270 },
          { x: 644.67, y: 116.453 },
          { x: 460.45, y: 119.449 },
          { x: 320.93, y: 124.489 }
        ]
      },
      {
        label: " svtav1 8bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6530.69, y: 283.745 },
          { x: 4095.27, y: 294.070 },
          { x: 2731.24, y: 296.137 },
          { x: 1662.91, y: 307.132 },
          { x: 1004.25, y: 323.832 },
          { x: 656.80, y: 347.819 },
          { x: 444.89, y: 361.671 },
          { x: 293.87, y: 378.583 }
        ]
      },
      {
        label: " svtav1 10bit P10",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6652.36, y: 200.233 },
          { x: 4149.71, y: 197.805 },
          { x: 2704.99, y: 203.520 },
          { x: 1639.25, y: 206.926 },
          { x: 992.57, y: 217.417 },
          { x: 651.24, y: 225.499 },
          { x: 440.38, y: 228.339 },
          { x: 291.95, y: 232.327 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 7396.17, y: 99.68 },
          { x: 4485.12, y: 105.90 },
          { x: 2565.40, y: 109.76 },
          { x: 1402.78, y: 114.01 },
          { x: 927.30, y: 116.97 },
          { x: 619.19, y: 116.27 },
          { x: 469.56, y: 117.67 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7113.05, y: 121.96 },
          { x: 4409.16, y: 125.87 },
          { x: 2585.25, y: 128.12 },
          { x: 1443.77, y: 130.53 },
          { x: 949.92, y: 130.26 },
          { x: 638.20, y: 131.41 },
          { x: 477.50, y: 132.78 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 7247.46, y: 149.59 },
          { x: 4478.39, y: 153.48 },
          { x: 2721.58, y: 155.69 },
          { x: 1506.59, y: 156.70 },
          { x: 999.78, y: 156.20 },
          { x: 676.34, y: 156.38 },
          { x: 484.48, y: 156.02 }
        ]
      },
      {
        label: "i7 7700K QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7209.15, y: 169.37 },
          { x: 4535.76, y: 171.14 },
          { x: 2831.81, y: 172.70 },
          { x: 1605.04, y: 173.38 },
          { x: 1063.30, y: 172.91 },
          { x: 709.51, y: 173.31 },
          { x: 494.37, y: 173.27 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
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
        label: "i7 7700K QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7103.01, y: 70.10 },
          { x: 4415.04, y: 70.71 },
          { x: 2594.39, y: 71.08 },
          { x: 1512.27, y: 71.87 },
          { x: 910.00, y: 72.87 },
          { x: 556.81, y: 73.02 },
          { x: 434.06, y: 73.15 }
        ]
      },
      {
        label: "i7 7700K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
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
        label: "i7 7700K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 62.80 },
          { x: 4191.70, y: 63.23 },
          { x: 2495.80, y: 63.79 },
          { x: 1476.64, y: 63.55 },
          { x: 907.32, y: 64.40 },
          { x: 542.13, y: 63.79 },
          { x: 426.76, y: 64.38 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 7239.59, y: 171.48 },
          { x: 4518.13, y: 183.72 },
          { x: 2737.16, y: 188.29 },
          { x: 1520.55, y: 190.46 },
          { x: 1007.68, y: 191.00 },
          { x: 679.51, y: 190.90 },
          { x: 487.59, y: 192.17 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7208.90, y: 206.81 },
          { x: 4535.98, y: 213.45 },
          { x: 2831.91, y: 218.11 },
          { x: 1604.80, y: 220.02 },
          { x: 1063.28, y: 220.12 },
          { x: 709.31, y: 221.39 },
          { x: 494.07, y: 220.77 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6892.36, y: 113.51 },
          { x: 3936.46, y: 122.00 },
          { x: 1945.52, y: 129.71 },
          { x: 947.85, y: 137.41 },
          { x: 509.51, y: 143.73 },
          { x: 293.43, y: 149.67 },
          { x: 192.32, y: 152.29 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
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
        label: "i9 12900K QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6796.72, y: 106.76 },
          { x: 3896.26, y: 115.08 },
          { x: 1945.07, y: 121.71 },
          { x: 955.12, y: 126.72 },
          { x: 515.03, y: 131.02 },
          { x: 295.69, y: 136.83 },
          { x: 192.88, y: 140.09 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        data:[
          { x: 7757.26, y: 291.11 },
          { x: 4497.43, y: 298.05 },
          { x: 3645.29, y: 298.73 },
          { x: 2104.14, y: 299.44 },
          { x: 1298.41, y: 299.70 },
          { x: 855.03, y: 300.17 },
          { x: 538.90, y: 300.87 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7848.78, y: 393.77 },
          { x: 4517.90, y: 395.41 },
          { x: 3547.07, y: 397.31 },
          { x: 2073.60, y: 397.87 },
          { x: 1281.08, y: 397.97 },
          { x: 826.78, y: 398.25 },
          { x: 543.33, y: 399.58 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
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
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 378.03 },
          { x: 2857.84, y: 378.13 },
          { x: 1988.77, y: 379.20 },
          { x: 965.98, y: 380.69 },
          { x: 534.32, y: 376.28 },
          { x: 341.04, y: 379.55 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
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
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 234.11 },
          { x: 2798.82, y: 234.80 },
          { x: 1955.45, y: 234.11 },
          { x: 957.09, y: 231.74 },
          { x: 534.15, y: 233.49 },
          { x: 339.80, y: 236.38 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6213.17, y: 262.61 },
          { x: 4044.82, y: 263.48 },
          { x: 2621.06, y: 256.79 },
          { x: 1725.29, y: 260.92 },
          { x: 1113.46, y: 263.91 },
          { x: 735.09, y: 269.09 },
          { x: 478.31, y: 270.21 },
          { x: 319.83, y: 272.54 },
          { x: 216.83, y: 275.09 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6247.85, y: 347.59 },
          { x: 4026.98, y: 348.26 },
          { x: 2610.29, y: 349.30 },
          { x: 1723.97, y: 352.39 },
          { x: 1111.42, y: 349.03 },
          { x: 735.39, y: 350.46 },
          { x: 482.51, y: 352.30 },
          { x: 327.29, y: 352.33 },
          { x: 224.33, y: 352.47 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6931.57, y: 203.75 },
          { x: 4313.89, y: 203.47 },
          { x: 2709.54, y: 204.44 },
          { x: 1746.77, y: 208.23 },
          { x: 1123.98, y: 204.90 },
          { x: 734.62, y: 207.00 },
          { x: 479.63, y: 206.18 },
          { x: 321.17, y: 206.37 },
          { x: 217.48, y: 206.46 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6981.04, y: 201.43 },
          { x: 4306.54, y: 196.00 },
          { x: 2702.17, y: 202.38 },
          { x: 1753.64, y: 199.51 },
          { x: 1127.18, y: 198.22 },
          { x: 736.08, y: 194.20 },
          { x: 485.54, y: 202.76 },
          { x: 328.39, y: 200.65 },
          { x: 224.93, y: 202.35 }
        ]
      },
      {
        label: "rtx1060 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        data:[
          { x: 6829.03, y: 192.18 },
          { x: 4137.63, y: 196.18 },
          { x: 2429.99, y: 200.29 },
          { x: 1422.63, y: 203.63 },
          { x: 875.39, y: 202.91 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 7255.58, y: 131.83 },
          { x: 4328.68, y: 149.79 },
          { x: 2499.95, y: 167.43 },
          { x: 1416.25, y: 182.75 },
          { x: 804.55, y: 195.25 }
        ]
      },
      {
        label: "rtx1060 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6886.88, y: 141.97 },
          { x: 4025.55, y: 154.32 },
          { x: 2225.30, y: 168.69 },
          { x: 1257.14, y: 181.91 },
          { x: 709.70, y: 193.63 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        data:[
          { x: 6424.51, y: 188.00 },
          { x: 3840.16, y: 191.63 },
          { x: 2240.46, y: 191.51 },
          { x: 1231.29, y: 175.24 },
          { x: 749.13, y: 177.22 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 5965.96, y: 113.25 },
          { x: 3450.30, y: 113.31 },
          { x: 1907.34, y: 113.28 },
          { x: 1061.07, y: 113.03 },
          { x: 624.06, y: 113.31 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5956.10, y: 116.01 },
          { x: 3456.28, y: 116.25 },
          { x: 1899.16, y: 116.26 },
          { x: 1041.04, y: 116.15 },
          { x: 609.83, y: 116.34 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 6438.05, y: 239.05 },
          { x: 3846.91, y: 243.88 },
          { x: 2244.29, y: 241.89 },
          { x: 1232.38, y: 222.23 },
          { x: 745.50, y: 224.25 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        data:[
          { x: 5977.54, y: 140.84 },
          { x: 3459.47, y: 140.50 },
          { x: 1911.94, y: 141.14 },
          { x: 1064.59, y: 141.17 },
          { x: 625.52, y: 140.02 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5968.23, y: 143.79 },
          { x: 3464.95, y: 143.91 },
          { x: 1903.53, y: 143.99 },
          { x: 1043.88, y: 143.90 },
          { x: 612.37, y: 144.12 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6111.67, y: 190.80 },
          { x: 4037.49, y: 190.25 },
          { x: 2618.50, y: 188.73 },
          { x: 1670.62, y: 188.41 },
          { x: 1074.30, y: 187.31 },
          { x: 712.22, y: 185.61 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5912.06, y: 178.80 },
          { x: 3869.03, y: 176.97 },
          { x: 2528.82, y: 176.93 },
          { x: 1628.03, y: 174.22 },
          { x: 1051.90, y: 173.54 },
          { x: 699.60, y: 171.63 },
          { x: 529.30, y: 170.00 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 1478.83, y: 36.24 },
          { x: 1932.83, y: 58.96 },
          { x: 2594.83, y: 31.20 },
          { x: 3346.61, y: 31.31 },
          { x: 4102.60, y: 31.43 },
          { x: 4909.74, y: 39.34 },
          { x: 5734.02, y: 43.42 }
        ]
      },
      {
        label: "7950x_iGPU VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1477.85, y: 47.69 },
          { x: 1934.25, y: 46.06 },
          { x: 2600.22, y: 47.60 },
          { x: 3355.75, y: 55.75 },
          { x: 4116.29, y: 56.98 },
          { x: 4925.23, y: 55.87 },
          { x: 5757.53, y: 54.77 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 1479.48, y: 130.36 },
          { x: 1933.84, y: 113.49 },
          { x: 2595.17, y: 130.59 },
          { x: 3347.37, y: 123.32 },
          { x: 4103.10, y: 117.74 },
          { x: 4910.56, y: 130.63 },
          { x: 5734.77, y: 118.85 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1478.50, y: 167.56 },
          { x: 1934.89, y: 166.37 },
          { x: 2600.70, y: 166.59 },
          { x: 3356.39, y: 133.91 },
          { x: 4117.00, y: 169.51 },
          { x: 4926.36, y: 168.38 },
          { x: 5758.07, y: 167.24 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        data:[
          { x: 559.56, y: 109.26 },
          { x: 733.06, y: 108.85 },
          { x: 1031.61, y: 109.88 },
          { x: 1553.20, y: 109.45 },
          { x: 2133.90, y: 108.70 },
          { x: 2928.20, y: 108.91 },
          { x: 4064.79, y: 109.27 },
          { x: 5330.74, y: 109.74 },
          { x: 6679.58, y: 109.37 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 573.24, y: 147.78 },
          { x: 749.98, y: 201.03 },
          { x: 1059.90, y: 217.12 },
          { x: 1601.38, y: 136.81 },
          { x: 2205.06, y: 144.95 },
          { x: 3041.34, y: 183.48 },
          { x: 4239.53, y: 207.33 },
          { x: 5566.16, y: 219.17 },
          { x: 7008.85, y: 169.23 }
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

var ctx_t2_20221225_vbr_bitrate_ssim_data = document.getElementById('chart_t2_20221225_vbr_bitrate_ssim');
const chart_t2_20221225_vbr_bitrate_ssim_data = new Chart(ctx_t2_20221225_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 880.23, y: 0.959617 },
          { x: 880.23, y: 0.959617 },
          { x: 1012.32, y: 0.96407 },
          { x: 1363.74, y: 0.974365 },
          { x: 1763.43, y: 0.979839 },
          { x: 3599.16, y: 0.988367 },
          { x: 5238.08, y: 0.990658 },
          { x: 6900.62, y: 0.991969 },
          { x: 8016.41, y: 0.992618 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 881.25, y: 0.959663 },
          { x: 881.25, y: 0.959663 },
          { x: 984.42, y: 0.96347 },
          { x: 1363.83, y: 0.974315 },
          { x: 1762.54, y: 0.979812 },
          { x: 3580.73, y: 0.988346 },
          { x: 5236.03, y: 0.990658 },
          { x: 6918.38, y: 0.991974 },
          { x: 8009.14, y: 0.992625 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1073.81, y: 0.980061 },
          { x: 1073.81, y: 0.980061 },
          { x: 1201.19, y: 0.981682 },
          { x: 1600.90, y: 0.985014 },
          { x: 1999.88, y: 0.986983 },
          { x: 4000.24, y: 0.991308 },
          { x: 6002.32, y: 0.993085 },
          { x: 7999.83, y: 0.994178 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1073.81, y: 0.979951 },
          { x: 1073.81, y: 0.979951 },
          { x: 1200.42, y: 0.981552 },
          { x: 1599.94, y: 0.984915 },
          { x: 2000.33, y: 0.986958 },
          { x: 4000.31, y: 0.991307 },
          { x: 6002.45, y: 0.993085 },
          { x: 8007.50, y: 0.994172 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1074.91, y: 0.980012 },
          { x: 1074.91, y: 0.980012 },
          { x: 1202.08, y: 0.981602 },
          { x: 1601.68, y: 0.984903 },
          { x: 2001.86, y: 0.986924 },
          { x: 4003.84, y: 0.991416 },
          { x: 6004.90, y: 0.993236 },
          { x: 8007.01, y: 0.994287 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 0.979831 },
          { x: 1075.02, y: 0.979831 },
          { x: 1201.98, y: 0.981391 },
          { x: 1601.83, y: 0.984772 },
          { x: 2001.87, y: 0.986815 },
          { x: 4003.26, y: 0.991285 },
          { x: 6002.97, y: 0.99311 },
          { x: 8006.44, y: 0.994157 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 370.39, y: 0.955678 },
          { x: 739.85, y: 0.970227 },
          { x: 1108.26, y: 0.976848 },
          { x: 1473.12, y: 0.98121 },
          { x: 1841.53, y: 0.983882 },
          { x: 3511.75, y: 0.989038 },
          { x: 5341.48, y: 0.991104 },
          { x: 7027.23, y: 0.992243 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.85, y: 0.952729 },
          { x: 740.15, y: 0.969465 },
          { x: 1110.59, y: 0.976495 },
          { x: 1473.73, y: 0.981042 },
          { x: 1838.68, y: 0.983766 },
          { x: 3520.41, y: 0.989013 },
          { x: 5319.11, y: 0.991056 },
          { x: 7025.04, y: 0.992251 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 0.957953 },
          { x: 732.54, y: 0.972056 },
          { x: 1105.05, y: 0.978721 },
          { x: 1467.26, y: 0.983069 },
          { x: 1812.30, y: 0.985668 },
          { x: 3511.21, y: 0.990812 },
          { x: 5343.83, y: 0.992814 },
          { x: 7023.42, y: 0.993852 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 0.954428 },
          { x: 739.56, y: 0.971199 },
          { x: 1108.77, y: 0.978308 },
          { x: 1472.71, y: 0.982802 },
          { x: 1820.10, y: 0.98548 },
          { x: 3517.20, y: 0.990742 },
          { x: 5342.60, y: 0.992776 },
          { x: 6979.86, y: 0.993808 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1074.91, y: 0.979979 },
          { x: 1074.91, y: 0.979979 },
          { x: 1202.06, y: 0.981583 },
          { x: 1601.57, y: 0.984904 },
          { x: 2001.82, y: 0.986922 },
          { x: 4003.65, y: 0.991416 },
          { x: 6005.14, y: 0.993234 },
          { x: 8006.85, y: 0.994285 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 0.979797 },
          { x: 1075.02, y: 0.979797 },
          { x: 1202.13, y: 0.981379 },
          { x: 1601.90, y: 0.98477 },
          { x: 2001.89, y: 0.986815 },
          { x: 4003.38, y: 0.991282 },
          { x: 6003.33, y: 0.99311 },
          { x: 8006.12, y: 0.994157 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 0.970533 },
          { x: 788.63, y: 0.98067 },
          { x: 1172.22, y: 0.984734 },
          { x: 1535.46, y: 0.987181 },
          { x: 1860.12, y: 0.98869 },
          { x: 3288.19, y: 0.992022 },
          { x: 4558.72, y: 0.993327 },
          { x: 5344.79, y: 0.993884 },
          { x: 6094.85, y: 0.994283 },
          { x: 6345.34, y: 0.994376 },
          { x: 6547.49, y: 0.994442 },
          { x: 6575.29, y: 0.994452 },
          { x: 6593.16, y: 0.994458 },
          { x: 6593.31, y: 0.994458 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 394.49, y: 0.968766 },
          { x: 785.93, y: 0.979727 },
          { x: 1171.88, y: 0.984232 },
          { x: 1533.62, y: 0.986931 },
          { x: 1871.01, y: 0.988367 },
          { x: 3294.62, y: 0.991889 },
          { x: 4582.86, y: 0.993248 },
          { x: 5379.25, y: 0.993819 },
          { x: 6162.71, y: 0.994243 },
          { x: 6502.61, y: 0.994369 },
          { x: 6614.55, y: 0.994405 },
          { x: 6672.12, y: 0.994424 },
          { x: 6690.19, y: 0.99443 },
          { x: 6690.34, y: 0.99443 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 395.01, y: 0.971586 },
          { x: 785.55, y: 0.981446 },
          { x: 1169.86, y: 0.985804 },
          { x: 1524.74, y: 0.988253 },
          { x: 1841.94, y: 0.989706 },
          { x: 3264.75, y: 0.993092 },
          { x: 4508.88, y: 0.9944 },
          { x: 5270.26, y: 0.994943 },
          { x: 5977.76, y: 0.995317 },
          { x: 6206.64, y: 0.995401 },
          { x: 6392.95, y: 0.995461 },
          { x: 6398.93, y: 0.995464 },
          { x: 6432.12, y: 0.995475 },
          { x: 6432.27, y: 0.995475 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.23, y: 0.969753 },
          { x: 785.90, y: 0.980641 },
          { x: 1167.65, y: 0.985224 },
          { x: 1539.97, y: 0.9878 },
          { x: 1853.33, y: 0.989353 },
          { x: 3280.05, y: 0.992892 },
          { x: 4557.09, y: 0.99426 },
          { x: 5340.64, y: 0.994828 },
          { x: 6096.42, y: 0.995237 },
          { x: 6351.62, y: 0.995331 },
          { x: 6548.37, y: 0.995395 },
          { x: 6557.13, y: 0.9954 },
          { x: 6590.80, y: 0.995411 },
          { x: 6590.95, y: 0.995411 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 399.88, y: 0.974003 },
          { x: 770.31, y: 0.982955 },
          { x: 1137.33, y: 0.98636 },
          { x: 1502.27, y: 0.98834 },
          { x: 1863.39, y: 0.989579 },
          { x: 3501.61, y: 0.992232 },
          { x: 4792.06, y: 0.99331 },
          { x: 5807.32, y: 0.993919 },
          { x: 6814.13, y: 0.994353 },
          { x: 7776.86, y: 0.994659 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.45, y: 0.973347 },
          { x: 769.09, y: 0.982624 },
          { x: 1133.09, y: 0.986193 },
          { x: 1497.34, y: 0.988167 },
          { x: 1851.80, y: 0.989411 },
          { x: 3434.08, y: 0.992083 },
          { x: 4716.76, y: 0.993179 },
          { x: 5690.71, y: 0.993759 },
          { x: 6693.67, y: 0.994201 },
          { x: 7733.60, y: 0.994551 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 400.19, y: 0.97526 },
          { x: 772.44, y: 0.98408 },
          { x: 1141.85, y: 0.987435 },
          { x: 1508.09, y: 0.989315 },
          { x: 1870.31, y: 0.990572 },
          { x: 3506.76, y: 0.993112 },
          { x: 4993.52, y: 0.994196 },
          { x: 6427.77, y: 0.994825 },
          { x: 7871.22, y: 0.995303 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 399.88, y: 0.974586 },
          { x: 771.98, y: 0.983717 },
          { x: 1139.61, y: 0.987223 },
          { x: 1502.71, y: 0.989139 },
          { x: 1861.23, y: 0.990406 },
          { x: 3482.25, y: 0.992985 },
          { x: 4965.76, y: 0.994048 },
          { x: 6339.68, y: 0.99466 },
          { x: 7718.05, y: 0.995111 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1088.92, y: 0.979265 },
          { x: 1088.92, y: 0.979265 },
          { x: 1236.27, y: 0.981123 },
          { x: 1531.97, y: 0.98385 },
          { x: 1966.63, y: 0.986591 },
          { x: 3722.98, y: 0.991576 },
          { x: 5552.52, y: 0.993514 },
          { x: 6692.71, y: 0.99428 },
          { x: 7465.86, y: 0.994718 },
          { x: 8099.52, y: 0.994976 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1086.44, y: 0.978899 },
          { x: 1086.44, y: 0.978899 },
          { x: 1232.03, y: 0.980666 },
          { x: 1523.06, y: 0.983571 },
          { x: 1956.69, y: 0.986411 },
          { x: 3726.72, y: 0.9915 },
          { x: 5638.01, y: 0.993444 },
          { x: 6734.49, y: 0.994195 },
          { x: 7477.15, y: 0.994635 },
          { x: 8124.60, y: 0.994911 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.75, y: 0.968375 },
          { x: 777.12, y: 0.980276 },
          { x: 1136.23, y: 0.984679 },
          { x: 1509.38, y: 0.987225 },
          { x: 1838.28, y: 0.988864 },
          { x: 3209.04, y: 0.992149 },
          { x: 4287.20, y: 0.993258 },
          { x: 5008.54, y: 0.993712 },
          { x: 5413.43, y: 0.993884 },
          { x: 5625.87, y: 0.993933 },
          { x: 5678.59, y: 0.993942 },
          { x: 5695.65, y: 0.993952 },
          { x: 5702.52, y: 0.993962 },
          { x: 5704.93, y: 0.993967 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.26, y: 0.967932 },
          { x: 776.54, y: 0.97993 },
          { x: 1139.01, y: 0.984437 },
          { x: 1508.56, y: 0.98707 },
          { x: 1840.25, y: 0.98874 },
          { x: 3211.41, y: 0.992037 },
          { x: 4315.49, y: 0.99315 },
          { x: 5077.51, y: 0.993614 },
          { x: 5468.88, y: 0.993775 },
          { x: 5725.34, y: 0.993837 },
          { x: 5785.31, y: 0.993846 },
          { x: 5804.24, y: 0.993856 },
          { x: 5808.84, y: 0.993865 },
          { x: 5814.27, y: 0.993872 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.45, y: 0.969654 },
          { x: 1129.85, y: 0.985584 },
          { x: 1492.93, y: 0.988329 },
          { x: 3157.07, y: 0.993206 },
          { x: 4224.81, y: 0.994306 },
          { x: 4922.06, y: 0.994746 },
          { x: 5284.71, y: 0.994888 },
          { x: 5449.45, y: 0.994929 },
          { x: 5525.71, y: 0.994952 },
          { x: 5528.77, y: 0.994963 },
          { x: 5535.46, y: 0.994971 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.87, y: 0.96896 },
          { x: 773.99, y: 0.980862 },
          { x: 1135.30, y: 0.985449 },
          { x: 1492.35, y: 0.988118 },
          { x: 1824.84, y: 0.989761 },
          { x: 3161.29, y: 0.993075 },
          { x: 4236.86, y: 0.994178 },
          { x: 4959.11, y: 0.994628 },
          { x: 5359.71, y: 0.994792 },
          { x: 5555.51, y: 0.994837 },
          { x: 5608.75, y: 0.994846 },
          { x: 5634.47, y: 0.99486 },
          { x: 5640.19, y: 0.994872 },
          { x: 5644.53, y: 0.994879 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 313.53, y: 0.925853 },
          { x: 852.26, y: 0.971352 },
          { x: 1106.46, y: 0.977909 },
          { x: 1611.39, y: 0.983874 },
          { x: 2115.56, y: 0.986982 },
          { x: 4131.97, y: 0.991791 },
          { x: 6122.73, y: 0.993655 },
          { x: 8095.56, y: 0.994688 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.65, y: 0.94426 },
          { x: 847.11, y: 0.976112 },
          { x: 1104.77, y: 0.980854 },
          { x: 1602.74, y: 0.985601 },
          { x: 2107.48, y: 0.988131 },
          { x: 4114.84, y: 0.99232 },
          { x: 6083.85, y: 0.993929 },
          { x: 8058.24, y: 0.994844 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 382.07, y: 0.960921 },
          { x: 892.43, y: 0.978236 },
          { x: 1275.83, y: 0.982385 },
          { x: 1693.07, y: 0.985264 },
          { x: 2118.99, y: 0.987123 },
          { x: 4146.42, y: 0.991184 },
          { x: 6170.89, y: 0.993014 },
          { x: 8164.35, y: 0.994128 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.94, y: 0.960724 },
          { x: 899.67, y: 0.978326 },
          { x: 1278.47, y: 0.982315 },
          { x: 1701.20, y: 0.985097 },
          { x: 2121.52, y: 0.98696 },
          { x: 4152.90, y: 0.99106 },
          { x: 6160.43, y: 0.99291 },
          { x: 8181.92, y: 0.99405 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 378.44, y: 0.958533 },
          { x: 887.54, y: 0.97867 },
          { x: 1274.25, y: 0.982858 },
          { x: 1688.31, y: 0.985818 },
          { x: 2114.97, y: 0.987729 },
          { x: 4137.81, y: 0.99181 },
          { x: 6145.69, y: 0.993646 },
          { x: 8165.14, y: 0.994769 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 379.02, y: 0.958942 },
          { x: 895.72, y: 0.978771 },
          { x: 1269.08, y: 0.982897 },
          { x: 1692.84, y: 0.985714 },
          { x: 2116.90, y: 0.987608 },
          { x: 4155.37, y: 0.991728 },
          { x: 6166.94, y: 0.993575 },
          { x: 8177.50, y: 0.994714 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 298.88, y: 0.927831 },
          { x: 834.02, y: 0.971318 },
          { x: 1091.90, y: 0.97793 },
          { x: 1594.04, y: 0.984369 },
          { x: 2102.58, y: 0.987507 },
          { x: 4095.58, y: 0.992082 },
          { x: 6078.67, y: 0.993904 },
          { x: 8041.00, y: 0.994933 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.13, y: 0.945493 },
          { x: 844.15, y: 0.975907 },
          { x: 1100.92, y: 0.980745 },
          { x: 1604.14, y: 0.985742 },
          { x: 2107.73, y: 0.988286 },
          { x: 4114.83, y: 0.992371 },
          { x: 6088.33, y: 0.994041 },
          { x: 8027.12, y: 0.994948 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 395.89, y: 0.96668 },
          { x: 914.35, y: 0.982661 },
          { x: 1302.32, y: 0.986013 },
          { x: 1724.96, y: 0.988406 },
          { x: 2148.81, y: 0.989732 },
          { x: 4203.84, y: 0.992797 },
          { x: 6228.46, y: 0.994188 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.47, y: 0.968202 },
          { x: 914.60, y: 0.983106 },
          { x: 1290.04, y: 0.986113 },
          { x: 1707.00, y: 0.988231 },
          { x: 2135.73, y: 0.98956 },
          { x: 4170.28, y: 0.992588 },
          { x: 6187.88, y: 0.993989 },
          { x: 8143.77, y: 0.994894 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.35, y: 0.96794 },
          { x: 913.55, y: 0.98401 },
          { x: 1302.01, y: 0.987282 },
          { x: 1725.99, y: 0.989643 },
          { x: 2151.70, y: 0.990985 },
          { x: 4210.40, y: 0.993936 },
          { x: 6242.90, y: 0.995251 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 387.44, y: 0.969473 },
          { x: 914.84, y: 0.984263 },
          { x: 1291.18, y: 0.98722 },
          { x: 1714.81, y: 0.989308 },
          { x: 2141.14, y: 0.990625 },
          { x: 4178.64, y: 0.993579 },
          { x: 6195.79, y: 0.994908 },
          { x: 8161.46, y: 0.995704 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 299.97, y: 0.929493 },
          { x: 832.70, y: 0.971622 },
          { x: 1091.73, y: 0.978136 },
          { x: 1594.14, y: 0.984434 },
          { x: 2103.98, y: 0.987513 },
          { x: 4096.77, y: 0.992087 },
          { x: 6079.56, y: 0.993902 },
          { x: 8042.22, y: 0.994922 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.54, y: 0.946341 },
          { x: 843.90, y: 0.976133 },
          { x: 1099.98, y: 0.980838 },
          { x: 1604.18, y: 0.985758 },
          { x: 2107.12, y: 0.988285 },
          { x: 4115.28, y: 0.992368 },
          { x: 6089.06, y: 0.994037 },
          { x: 8026.42, y: 0.994942 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 394.47, y: 0.966871 },
          { x: 914.32, y: 0.982732 },
          { x: 1301.15, y: 0.98605 },
          { x: 1723.69, y: 0.988425 },
          { x: 2150.74, y: 0.989757 },
          { x: 4204.31, y: 0.9928 },
          { x: 6226.95, y: 0.994189 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.28, y: 0.968424 },
          { x: 915.32, y: 0.983189 },
          { x: 1290.74, y: 0.986166 },
          { x: 1707.64, y: 0.988238 },
          { x: 2137.12, y: 0.989586 },
          { x: 4168.00, y: 0.992585 },
          { x: 6184.58, y: 0.993983 },
          { x: 8144.36, y: 0.994895 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.05, y: 0.96832 },
          { x: 913.51, y: 0.984097 },
          { x: 1303.42, y: 0.987332 },
          { x: 1726.51, y: 0.98968 },
          { x: 2151.09, y: 0.991006 },
          { x: 4207.62, y: 0.99394 },
          { x: 6243.61, y: 0.99525 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.09, y: 0.969797 },
          { x: 914.74, y: 0.984351 },
          { x: 1291.88, y: 0.987274 },
          { x: 1714.98, y: 0.989332 },
          { x: 2138.69, y: 0.990635 },
          { x: 4175.84, y: 0.993574 },
          { x: 6194.20, y: 0.994901 },
          { x: 8160.50, y: 0.995703 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 382.76, y: 0.968086 },
          { x: 902.88, y: 0.982976 },
          { x: 1281.12, y: 0.986245 },
          { x: 1712.57, y: 0.988423 },
          { x: 2137.39, y: 0.989745 },
          { x: 4179.46, y: 0.992792 },
          { x: 6190.96, y: 0.994157 },
          { x: 8173.12, y: 0.994956 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 393.42, y: 0.970922 },
          { x: 923.25, y: 0.98443 },
          { x: 1311.25, y: 0.987219 },
          { x: 1742.89, y: 0.98921 },
          { x: 2172.88, y: 0.990384 },
          { x: 4212.64, y: 0.993052 },
          { x: 6238.73, y: 0.994296 },
          { x: 8170.69, y: 0.995035 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.97, y: 0.969509 },
          { x: 900.89, y: 0.984278 },
          { x: 1270.11, y: 0.987551 },
          { x: 1700.43, y: 0.9897 },
          { x: 2132.38, y: 0.991053 },
          { x: 4161.71, y: 0.994057 },
          { x: 6172.43, y: 0.995328 },
          { x: 8163.80, y: 0.996077 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 393.18, y: 0.971919 },
          { x: 920.82, y: 0.985669 },
          { x: 1300.09, y: 0.988482 },
          { x: 1741.46, y: 0.990457 },
          { x: 2167.05, y: 0.991652 },
          { x: 4208.55, y: 0.994269 },
          { x: 6225.85, y: 0.995436 },
          { x: 8167.09, y: 0.996103 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 517.89, y: 0.944387 },
          { x: 799.94, y: 0.958454 },
          { x: 1195.49, y: 0.970791 },
          { x: 1993.41, y: 0.978492 },
          { x: 3985.49, y: 0.987938 },
          { x: 5709.06, y: 0.991003 },
          { x: 7257.54, y: 0.992589 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.48, y: 0.945454 },
          { x: 803.84, y: 0.968479 },
          { x: 1204.97, y: 0.977383 },
          { x: 1605.97, y: 0.98284 },
          { x: 2007.34, y: 0.985807 },
          { x: 3754.79, y: 0.990877 },
          { x: 5606.91, y: 0.992816 },
          { x: 7413.18, y: 0.993671 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 418.33, y: 0.96095 },
          { x: 797.62, y: 0.972733 },
          { x: 1196.08, y: 0.978288 },
          { x: 1599.74, y: 0.981911 },
          { x: 1999.82, y: 0.984315 },
          { x: 3949.69, y: 0.990272 },
          { x: 5211.01, y: 0.992364 },
          { x: 6195.67, y: 0.993435 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 0.956832 },
          { x: 823.24, y: 0.972105 },
          { x: 1223.89, y: 0.978752 },
          { x: 1623.67, y: 0.982459 },
          { x: 2025.24, y: 0.9849 },
          { x: 4020.37, y: 0.990438 },
          { x: 6017.95, y: 0.992597 },
          { x: 8018.34, y: 0.993856 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.49, y: 0.958439 },
          { x: 822.83, y: 0.973397 },
          { x: 1222.61, y: 0.97983 },
          { x: 1623.58, y: 0.983322 },
          { x: 2024.59, y: 0.985668 },
          { x: 4019.15, y: 0.991119 },
          { x: 6018.53, y: 0.993308 },
          { x: 8016.95, y: 0.994595 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 520.81, y: 0.944642 },
          { x: 800.14, y: 0.958592 },
          { x: 1592.58, y: 0.975521 },
          { x: 3985.42, y: 0.988227 },
          { x: 5702.29, y: 0.991027 },
          { x: 7258.15, y: 0.992597 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 401.83, y: 0.936039 },
          { x: 802.20, y: 0.96146 },
          { x: 1202.16, y: 0.971729 },
          { x: 1602.10, y: 0.978051 },
          { x: 2001.56, y: 0.981821 },
          { x: 4000.29, y: 0.989083 },
          { x: 5998.78, y: 0.991706 },
          { x: 7997.64, y: 0.993134 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 466.49, y: 0.964427 },
          { x: 799.44, y: 0.974297 },
          { x: 1199.46, y: 0.979833 },
          { x: 1599.82, y: 0.9833 },
          { x: 2000.06, y: 0.985527 },
          { x: 3965.98, y: 0.99086 },
          { x: 5240.44, y: 0.992655 },
          { x: 6202.91, y: 0.993566 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.64, y: 0.95903 },
          { x: 823.99, y: 0.973424 },
          { x: 1223.22, y: 0.979715 },
          { x: 1622.03, y: 0.983014 },
          { x: 2021.17, y: 0.985321 },
          { x: 4019.81, y: 0.990495 },
          { x: 6018.55, y: 0.992682 },
          { x: 8019.30, y: 0.993897 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.66, y: 0.960297 },
          { x: 823.41, y: 0.97454 },
          { x: 1222.42, y: 0.980493 },
          { x: 1622.22, y: 0.983769 },
          { x: 2021.07, y: 0.985978 },
          { x: 4019.91, y: 0.991244 },
          { x: 6018.32, y: 0.993484 },
          { x: 8018.75, y: 0.994732 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 498.41, y: 0.972107 },
          { x: 800.17, y: 0.976587 },
          { x: 1201.17, y: 0.980163 },
          { x: 1602.68, y: 0.982366 },
          { x: 2006.97, y: 0.983889 },
          { x: 4016.22, y: 0.98938 },
          { x: 6009.90, y: 0.992005 },
          { x: 8013.13, y: 0.993502 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 406.73, y: 0.963336 },
          { x: 807.40, y: 0.97595 },
          { x: 1206.60, y: 0.981235 },
          { x: 1606.96, y: 0.984173 },
          { x: 2005.63, y: 0.986241 },
          { x: 4003.20, y: 0.991011 },
          { x: 6001.84, y: 0.993014 },
          { x: 7995.33, y: 0.994123 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 406.81, y: 0.965024 },
          { x: 807.27, y: 0.977513 },
          { x: 1207.05, y: 0.982541 },
          { x: 1606.83, y: 0.985395 },
          { x: 2005.78, y: 0.987364 },
          { x: 4003.53, y: 0.991908 },
          { x: 6003.50, y: 0.993762 },
          { x: 7997.85, y: 0.994774 }
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

var ctx_t2_20221225_vbr_bitrate_vmaf_data = document.getElementById('chart_t2_20221225_vbr_bitrate_vmaf');
const chart_t2_20221225_vbr_bitrate_vmaf_data = new Chart(ctx_t2_20221225_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 880.23, y: 74.753807 },
          { x: 880.23, y: 74.753807 },
          { x: 1012.32, y: 77.807664 },
          { x: 1363.74, y: 83.831333 },
          { x: 1763.43, y: 87.341511 },
          { x: 3599.16, y: 93.274309 },
          { x: 5238.08, y: 94.958545 },
          { x: 6900.62, y: 95.907613 },
          { x: 8016.41, y: 96.342829 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 881.25, y: 74.696346 },
          { x: 881.25, y: 74.696346 },
          { x: 984.42, y: 77.368376 },
          { x: 1363.83, y: 83.800391 },
          { x: 1762.54, y: 87.331828 },
          { x: 3580.73, y: 93.240738 },
          { x: 5236.03, y: 94.951767 },
          { x: 6918.38, y: 95.90895 },
          { x: 8009.14, y: 96.34167 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1073.81, y: 84.048938 },
          { x: 1073.81, y: 84.048938 },
          { x: 1201.19, y: 85.548998 },
          { x: 1600.90, y: 88.660533 },
          { x: 1999.88, y: 90.56486 },
          { x: 4000.24, y: 94.689196 },
          { x: 6002.32, y: 96.187827 },
          { x: 7999.83, y: 96.950233 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1073.81, y: 83.698995 },
          { x: 1073.81, y: 83.698995 },
          { x: 1200.42, y: 85.141928 },
          { x: 1599.94, y: 88.1932 },
          { x: 2000.33, y: 90.061043 },
          { x: 4000.31, y: 94.122136 },
          { x: 6002.45, y: 95.639076 },
          { x: 8007.50, y: 96.453545 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1074.91, y: 83.924946 },
          { x: 1074.91, y: 83.924946 },
          { x: 1202.08, y: 85.39457 },
          { x: 1601.68, y: 88.496844 },
          { x: 2001.86, y: 90.409267 },
          { x: 4003.84, y: 94.50366 },
          { x: 6004.90, y: 96.147572 },
          { x: 8007.01, y: 96.984555 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 83.659252 },
          { x: 1075.02, y: 83.659252 },
          { x: 1201.98, y: 85.090525 },
          { x: 1601.83, y: 88.164356 },
          { x: 2001.87, y: 90.058697 },
          { x: 4003.26, y: 94.112411 },
          { x: 6002.97, y: 95.661913 },
          { x: 8006.44, y: 96.503454 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 370.39, y: 62.444272 },
          { x: 739.85, y: 76.884129 },
          { x: 1108.26, y: 82.747144 },
          { x: 1473.12, y: 86.346949 },
          { x: 1841.53, y: 88.565016 },
          { x: 3511.75, y: 93.085319 },
          { x: 5341.48, y: 94.935853 },
          { x: 7027.23, y: 95.836249 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.85, y: 61.081066 },
          { x: 740.15, y: 76.57277 },
          { x: 1110.59, y: 82.654849 },
          { x: 1473.73, y: 86.336081 },
          { x: 1838.68, y: 88.552371 },
          { x: 3520.41, y: 93.103058 },
          { x: 5319.11, y: 94.902069 },
          { x: 7025.04, y: 95.846643 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 71.327395 },
          { x: 732.54, y: 81.926693 },
          { x: 1105.05, y: 86.301684 },
          { x: 1467.26, y: 89.047892 },
          { x: 1812.30, y: 90.701397 },
          { x: 3511.21, y: 94.029276 },
          { x: 5343.83, y: 95.353466 },
          { x: 7023.42, y: 96.004277 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 69.791444 },
          { x: 739.56, y: 81.577999 },
          { x: 1108.77, y: 86.203679 },
          { x: 1472.71, y: 88.974126 },
          { x: 1820.10, y: 90.662999 },
          { x: 3517.20, y: 94.025222 },
          { x: 5342.60, y: 95.353126 },
          { x: 6979.86, y: 95.982737 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1074.91, y: 83.910215 },
          { x: 1074.91, y: 83.910215 },
          { x: 1202.06, y: 85.37699 },
          { x: 1601.57, y: 88.495812 },
          { x: 2001.82, y: 90.411823 },
          { x: 4003.65, y: 94.498504 },
          { x: 6005.14, y: 96.150255 },
          { x: 8006.85, y: 96.984126 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 83.643896 },
          { x: 1075.02, y: 83.643896 },
          { x: 1202.13, y: 85.085773 },
          { x: 1601.90, y: 88.166227 },
          { x: 2001.89, y: 90.058439 },
          { x: 4003.38, y: 94.111747 },
          { x: 6003.33, y: 95.661599 },
          { x: 8006.12, y: 96.50354 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 73.799898 },
          { x: 788.63, y: 83.709907 },
          { x: 1172.22, y: 87.540629 },
          { x: 1535.46, y: 89.969554 },
          { x: 1860.12, y: 91.369051 },
          { x: 3288.19, y: 94.638125 },
          { x: 4558.72, y: 95.832057 },
          { x: 5344.79, y: 96.191237 },
          { x: 6094.85, y: 96.462867 },
          { x: 6345.34, y: 96.489559 },
          { x: 6547.49, y: 96.504632 },
          { x: 6575.29, y: 96.514311 },
          { x: 6593.16, y: 96.516202 },
          { x: 6593.31, y: 96.516316 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 394.49, y: 73.071654 },
          { x: 785.93, y: 83.005104 },
          { x: 1171.88, y: 87.199082 },
          { x: 1533.62, y: 89.782238 },
          { x: 1871.01, y: 91.17978 },
          { x: 3294.62, y: 94.546187 },
          { x: 4582.86, y: 95.774478 },
          { x: 5379.25, y: 96.143277 },
          { x: 6162.71, y: 96.432101 },
          { x: 6502.61, y: 96.484957 },
          { x: 6614.55, y: 96.477077 },
          { x: 6672.12, y: 96.486216 },
          { x: 6690.19, y: 96.488401 },
          { x: 6690.34, y: 96.488528 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 395.01, y: 80.061486 },
          { x: 785.55, y: 87.112612 },
          { x: 1169.86, y: 90.02176 },
          { x: 1524.74, y: 91.755931 },
          { x: 1841.94, y: 92.792903 },
          { x: 3264.75, y: 95.174998 },
          { x: 4508.88, y: 96.059245 },
          { x: 5270.26, y: 96.342521 },
          { x: 5977.76, y: 96.547808 },
          { x: 6206.64, y: 96.583639 },
          { x: 6392.95, y: 96.608743 },
          { x: 6398.93, y: 96.608263 },
          { x: 6432.12, y: 96.612973 },
          { x: 6432.27, y: 96.613072 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.23, y: 79.359884 },
          { x: 785.90, y: 86.63615 },
          { x: 1167.65, y: 89.708107 },
          { x: 1539.97, y: 91.552092 },
          { x: 1853.33, y: 92.595419 },
          { x: 3280.05, y: 95.080548 },
          { x: 4557.09, y: 96.010565 },
          { x: 5340.64, y: 96.304595 },
          { x: 6096.42, y: 96.530095 },
          { x: 6351.62, y: 96.566124 },
          { x: 6548.37, y: 96.589958 },
          { x: 6557.13, y: 96.591733 },
          { x: 6590.80, y: 96.596563 },
          { x: 6590.95, y: 96.596658 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 399.88, y: 75.967642 },
          { x: 770.31, y: 84.499663 },
          { x: 1137.33, y: 88.093143 },
          { x: 1502.27, y: 90.184835 },
          { x: 1863.39, y: 91.55442 },
          { x: 3501.61, y: 94.537377 },
          { x: 4792.06, y: 95.572028 },
          { x: 5807.32, y: 96.098519 },
          { x: 6814.13, y: 96.434186 },
          { x: 7776.86, y: 96.682701 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.45, y: 75.280713 },
          { x: 769.09, y: 84.154609 },
          { x: 1133.09, y: 87.8459 },
          { x: 1497.34, y: 89.974077 },
          { x: 1851.80, y: 91.318294 },
          { x: 3434.08, y: 94.307873 },
          { x: 4716.76, y: 95.427674 },
          { x: 5690.71, y: 95.917659 },
          { x: 6693.67, y: 96.264369 },
          { x: 7733.60, y: 96.561048 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 400.19, y: 81.502075 },
          { x: 772.44, y: 87.820761 },
          { x: 1141.85, y: 90.43324 },
          { x: 1508.09, y: 91.905104 },
          { x: 1870.31, y: 92.939527 },
          { x: 3506.76, y: 95.074114 },
          { x: 4993.52, y: 95.876537 },
          { x: 6427.77, y: 96.345109 },
          { x: 7871.22, y: 96.671373 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 399.88, y: 81.044834 },
          { x: 771.98, y: 87.582662 },
          { x: 1139.61, y: 90.252692 },
          { x: 1502.71, y: 91.748198 },
          { x: 1861.23, y: 92.783709 },
          { x: 3482.25, y: 94.960763 },
          { x: 4965.76, y: 95.772959 },
          { x: 6339.68, y: 96.215237 },
          { x: 7718.05, y: 96.523237 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1088.92, y: 83.001755 },
          { x: 1088.92, y: 83.001755 },
          { x: 1236.27, y: 84.778345 },
          { x: 1531.97, y: 87.239081 },
          { x: 1966.63, y: 89.734653 },
          { x: 3722.98, y: 94.21994 },
          { x: 5552.52, y: 95.920798 },
          { x: 6692.71, y: 96.495594 },
          { x: 7465.86, y: 96.820121 },
          { x: 8099.52, y: 97.031748 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1086.44, y: 82.220658 },
          { x: 1086.44, y: 82.220658 },
          { x: 1232.03, y: 83.898533 },
          { x: 1523.06, y: 86.461474 },
          { x: 1956.69, y: 89.012902 },
          { x: 3726.72, y: 93.563538 },
          { x: 5638.01, y: 95.418577 },
          { x: 6734.49, y: 96.013704 },
          { x: 7477.15, y: 96.316162 },
          { x: 8124.60, y: 96.556942 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.75, y: 74.131687 },
          { x: 777.12, y: 84.407932 },
          { x: 1136.23, y: 88.063891 },
          { x: 1509.38, y: 90.17438 },
          { x: 1838.28, y: 91.519007 },
          { x: 3209.04, y: 94.694811 },
          { x: 4287.20, y: 95.789242 },
          { x: 5008.54, y: 96.199416 },
          { x: 5413.43, y: 96.35039 },
          { x: 5625.87, y: 96.386429 },
          { x: 5678.59, y: 96.392671 },
          { x: 5695.65, y: 96.398797 },
          { x: 5702.52, y: 96.400601 },
          { x: 5704.93, y: 96.404424 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.26, y: 73.908707 },
          { x: 776.54, y: 84.152298 },
          { x: 1139.01, y: 87.873467 },
          { x: 1508.56, y: 90.069112 },
          { x: 1840.25, y: 91.397361 },
          { x: 3211.41, y: 94.554177 },
          { x: 4315.49, y: 95.669835 },
          { x: 5077.51, y: 96.112454 },
          { x: 5468.88, y: 96.26297 },
          { x: 5725.34, y: 96.308155 },
          { x: 5785.31, y: 96.315634 },
          { x: 5804.24, y: 96.319067 },
          { x: 5808.84, y: 96.323077 },
          { x: 5814.27, y: 96.325603 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.45, y: 80.113156 },
          { x: 1129.85, y: 90.301946 },
          { x: 1492.93, y: 91.91601 },
          { x: 3157.07, y: 95.159487 },
          { x: 4224.81, y: 96.035037 },
          { x: 4922.06, y: 96.352719 },
          { x: 5284.71, y: 96.465834 },
          { x: 5449.45, y: 96.492458 },
          { x: 5525.71, y: 96.501816 },
          { x: 5528.77, y: 96.504894 },
          { x: 5535.46, y: 96.50529 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.87, y: 79.771447 },
          { x: 773.99, y: 87.409491 },
          { x: 1135.30, y: 90.224908 },
          { x: 1492.35, y: 91.792185 },
          { x: 1824.84, y: 92.796468 },
          { x: 3161.29, y: 95.06604 },
          { x: 4236.86, y: 95.939522 },
          { x: 4959.11, y: 96.277269 },
          { x: 5359.71, y: 96.401979 },
          { x: 5555.51, y: 96.435422 },
          { x: 5608.75, y: 96.442445 },
          { x: 5634.47, y: 96.449565 },
          { x: 5640.19, y: 96.450998 },
          { x: 5644.53, y: 96.452006 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 313.53, y: 44.208381 },
          { x: 852.26, y: 77.022431 },
          { x: 1106.46, y: 82.260501 },
          { x: 1611.39, y: 87.341337 },
          { x: 2115.56, y: 90.12545 },
          { x: 4131.97, y: 94.585228 },
          { x: 6122.73, y: 96.183381 },
          { x: 8095.56, y: 97.005811 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.65, y: 55.745851 },
          { x: 847.11, y: 80.440831 },
          { x: 1104.77, y: 84.41822 },
          { x: 1602.74, y: 88.557166 },
          { x: 2107.48, y: 90.84031 },
          { x: 4114.84, y: 94.810919 },
          { x: 6083.85, y: 96.252288 },
          { x: 8058.24, y: 96.988609 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 382.07, y: 72.759027 },
          { x: 892.43, y: 85.332621 },
          { x: 1275.83, y: 88.532082 },
          { x: 1693.07, y: 90.587422 },
          { x: 2118.99, y: 91.914825 },
          { x: 4146.42, y: 94.984248 },
          { x: 6170.89, y: 96.235506 },
          { x: 8164.35, y: 96.919754 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.94, y: 72.538972 },
          { x: 899.67, y: 85.291051 },
          { x: 1278.47, y: 88.454373 },
          { x: 1701.20, y: 90.546733 },
          { x: 2121.52, y: 91.875801 },
          { x: 4152.90, y: 94.968971 },
          { x: 6160.43, y: 96.197698 },
          { x: 8181.92, y: 96.895899 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 378.44, y: 75.945616 },
          { x: 887.54, y: 87.336106 },
          { x: 1274.25, y: 89.971883 },
          { x: 1688.31, y: 91.653738 },
          { x: 2114.97, y: 92.731912 },
          { x: 4137.81, y: 95.156685 },
          { x: 6145.69, y: 96.195408 },
          { x: 8165.14, y: 96.773685 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 379.02, y: 75.81619 },
          { x: 895.72, y: 87.381658 },
          { x: 1269.08, y: 89.947626 },
          { x: 1692.84, y: 91.616074 },
          { x: 2116.90, y: 92.687375 },
          { x: 4155.37, y: 95.152194 },
          { x: 6166.94, y: 96.185877 },
          { x: 8177.50, y: 96.768491 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 298.88, y: 49.327764 },
          { x: 834.02, y: 79.688892 },
          { x: 1091.90, y: 84.3021 },
          { x: 1594.04, y: 88.915387 },
          { x: 2102.58, y: 91.351175 },
          { x: 4095.58, y: 95.148059 },
          { x: 6078.67, y: 96.553988 },
          { x: 8041.00, y: 97.239042 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.13, y: 59.584713 },
          { x: 844.15, y: 81.816509 },
          { x: 1100.92, y: 85.483005 },
          { x: 1604.14, y: 89.393269 },
          { x: 2107.73, y: 91.508456 },
          { x: 4114.83, y: 95.095917 },
          { x: 6088.33, y: 96.445679 },
          { x: 8027.12, y: 97.124004 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 395.89, y: 73.747496 },
          { x: 914.35, y: 86.593323 },
          { x: 1302.32, y: 89.625509 },
          { x: 1724.96, y: 91.603407 },
          { x: 2148.81, y: 92.828073 },
          { x: 4203.84, y: 95.630187 },
          { x: 6228.46, y: 96.698591 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.47, y: 73.529486 },
          { x: 914.60, y: 85.919667 },
          { x: 1290.04, y: 88.82992 },
          { x: 1707.00, y: 90.778017 },
          { x: 2135.73, y: 92.096008 },
          { x: 4170.28, y: 95.080455 },
          { x: 6187.88, y: 96.252877 },
          { x: 8143.77, y: 96.901144 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.35, y: 79.847016 },
          { x: 913.55, y: 89.473335 },
          { x: 1302.01, y: 91.574509 },
          { x: 1725.99, y: 93.000161 },
          { x: 2151.70, y: 93.874963 },
          { x: 4210.40, y: 95.892878 },
          { x: 6242.90, y: 96.718711 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 387.44, y: 79.967059 },
          { x: 914.84, y: 89.056704 },
          { x: 1291.18, y: 91.046737 },
          { x: 1714.81, y: 92.420054 },
          { x: 2141.14, y: 93.304052 },
          { x: 4178.64, y: 95.468571 },
          { x: 6195.79, y: 96.358922 },
          { x: 8161.46, y: 96.845568 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 299.97, y: 49.89905 },
          { x: 832.70, y: 79.801359 },
          { x: 1091.73, y: 84.359295 },
          { x: 1594.14, y: 88.91023 },
          { x: 2103.98, y: 91.329265 },
          { x: 4096.77, y: 95.132702 },
          { x: 6079.56, y: 96.538802 },
          { x: 8042.22, y: 97.223735 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.54, y: 59.834418 },
          { x: 843.90, y: 81.8084 },
          { x: 1099.98, y: 85.463197 },
          { x: 1604.18, y: 89.365536 },
          { x: 2107.12, y: 91.473727 },
          { x: 4115.28, y: 95.074555 },
          { x: 6089.06, y: 96.431636 },
          { x: 8026.42, y: 97.113923 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 394.47, y: 73.683685 },
          { x: 914.32, y: 86.598641 },
          { x: 1301.15, y: 89.607624 },
          { x: 1723.69, y: 91.586572 },
          { x: 2150.74, y: 92.823352 },
          { x: 4204.31, y: 95.619389 },
          { x: 6226.95, y: 96.690738 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.28, y: 73.671889 },
          { x: 915.32, y: 85.916663 },
          { x: 1290.74, y: 88.824035 },
          { x: 1707.64, y: 90.761102 },
          { x: 2137.12, y: 92.089583 },
          { x: 4168.00, y: 95.060766 },
          { x: 6184.58, y: 96.244411 },
          { x: 8144.36, y: 96.896392 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.05, y: 80.018379 },
          { x: 913.51, y: 89.470488 },
          { x: 1303.42, y: 91.576007 },
          { x: 1726.51, y: 93.00637 },
          { x: 2151.09, y: 93.866843 },
          { x: 4207.62, y: 95.885328 },
          { x: 6243.61, y: 96.714928 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.09, y: 80.126529 },
          { x: 914.74, y: 89.057229 },
          { x: 1291.88, y: 91.041402 },
          { x: 1714.98, y: 92.410764 },
          { x: 2138.69, y: 93.288694 },
          { x: 4175.84, y: 95.452881 },
          { x: 6194.20, y: 96.353803 },
          { x: 8160.50, y: 96.838929 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 382.76, y: 75.043178 },
          { x: 902.88, y: 87.211304 },
          { x: 1281.12, y: 90.106542 },
          { x: 1712.57, y: 92.028966 },
          { x: 2137.39, y: 93.219823 },
          { x: 4179.46, y: 95.895114 },
          { x: 6190.96, y: 96.919022 },
          { x: 8173.12, y: 97.452389 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 393.42, y: 76.72049 },
          { x: 923.25, y: 87.567725 },
          { x: 1311.25, y: 90.245351 },
          { x: 1742.89, y: 92.035484 },
          { x: 2172.88, y: 93.181991 },
          { x: 4212.64, y: 95.773705 },
          { x: 6238.73, y: 96.836188 },
          { x: 8170.69, y: 97.37497 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.97, y: 80.945008 },
          { x: 900.89, y: 89.789551 },
          { x: 1270.11, y: 91.852893 },
          { x: 1700.43, y: 93.214288 },
          { x: 2132.38, y: 94.108863 },
          { x: 4161.71, y: 96.068809 },
          { x: 6172.43, y: 96.836272 },
          { x: 8163.80, y: 97.254181 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 393.18, y: 82.095965 },
          { x: 920.82, y: 90.092934 },
          { x: 1300.09, y: 91.959666 },
          { x: 1741.46, y: 93.239999 },
          { x: 2167.05, y: 94.074231 },
          { x: 4208.55, y: 95.978178 },
          { x: 6225.85, y: 96.753045 },
          { x: 8167.09, y: 97.159647 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 517.89, y: 44.83353 },
          { x: 799.94, y: 58.42422 },
          { x: 1195.49, y: 70.34325 },
          { x: 1993.41, y: 77.907376 },
          { x: 3985.49, y: 87.560967 },
          { x: 5709.06, y: 90.984989 },
          { x: 7257.54, y: 93.029123 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.48, y: 51.545191 },
          { x: 803.84, y: 72.86741 },
          { x: 1204.97, y: 81.036433 },
          { x: 1605.97, y: 85.565724 },
          { x: 2007.34, y: 88.260087 },
          { x: 3754.79, y: 92.93599 },
          { x: 5606.91, y: 94.851452 },
          { x: 7413.18, y: 95.852938 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 418.33, y: 67.237975 },
          { x: 797.62, y: 77.606558 },
          { x: 1196.08, y: 82.376829 },
          { x: 1599.74, y: 85.096301 },
          { x: 1999.82, y: 87.11848 },
          { x: 3949.69, y: 92.539321 },
          { x: 5211.01, y: 94.347407 },
          { x: 6195.67, y: 95.25901 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 67.931242 },
          { x: 823.24, y: 79.928281 },
          { x: 1223.89, y: 85.101193 },
          { x: 1623.67, y: 87.984325 },
          { x: 2025.24, y: 89.881466 },
          { x: 4020.37, y: 93.940885 },
          { x: 6017.95, y: 95.503738 },
          { x: 8018.34, y: 96.390403 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.49, y: 68.367008 },
          { x: 822.83, y: 80.31 },
          { x: 1222.61, y: 85.475593 },
          { x: 1623.58, y: 88.281113 },
          { x: 2024.59, y: 90.129366 },
          { x: 4019.15, y: 94.084439 },
          { x: 6018.53, y: 95.642379 },
          { x: 8016.95, y: 96.550395 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 520.81, y: 45.208771 },
          { x: 800.14, y: 58.576872 },
          { x: 1592.58, y: 75.210343 },
          { x: 3985.42, y: 87.819547 },
          { x: 5702.29, y: 91.02509 },
          { x: 7258.15, y: 93.039346 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 401.83, y: 46.136348 },
          { x: 802.20, y: 68.413878 },
          { x: 1202.16, y: 77.323134 },
          { x: 1602.10, y: 82.415136 },
          { x: 2001.56, y: 85.630918 },
          { x: 4000.29, y: 92.066019 },
          { x: 5998.78, y: 94.404197 },
          { x: 7997.64, y: 95.641571 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 466.49, y: 69.870481 },
          { x: 799.44, y: 78.530145 },
          { x: 1199.46, y: 83.478863 },
          { x: 1599.82, y: 86.306998 },
          { x: 2000.06, y: 88.301568 },
          { x: 3965.98, y: 93.303412 },
          { x: 5240.44, y: 94.817021 },
          { x: 6202.91, y: 95.544518 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.64, y: 68.548874 },
          { x: 823.99, y: 80.540255 },
          { x: 1223.22, y: 85.831261 },
          { x: 1622.03, y: 88.450426 },
          { x: 2021.17, y: 90.265528 },
          { x: 4019.81, y: 94.199938 },
          { x: 6018.55, y: 95.712096 },
          { x: 8019.30, y: 96.544235 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.66, y: 68.899574 },
          { x: 823.41, y: 80.934678 },
          { x: 1222.42, y: 86.101491 },
          { x: 1622.22, y: 88.738049 },
          { x: 2021.07, y: 90.482768 },
          { x: 4019.91, y: 94.426239 },
          { x: 6018.32, y: 95.923848 },
          { x: 8018.75, y: 96.746252 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 498.41, y: 77.83633 },
          { x: 800.17, y: 83.222271 },
          { x: 1201.17, y: 86.452374 },
          { x: 1602.68, y: 88.528769 },
          { x: 2006.97, y: 89.869374 },
          { x: 4016.22, y: 93.929456 },
          { x: 6009.90, y: 95.715772 },
          { x: 8013.13, y: 96.592372 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 406.73, y: 72.709855 },
          { x: 807.40, y: 83.148696 },
          { x: 1206.60, y: 87.426587 },
          { x: 1606.96, y: 89.748291 },
          { x: 2005.63, y: 91.335842 },
          { x: 4003.20, y: 94.896752 },
          { x: 6001.84, y: 96.271349 },
          { x: 7995.33, y: 96.984895 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 406.81, y: 73.218789 },
          { x: 807.27, y: 83.314974 },
          { x: 1207.05, y: 87.455925 },
          { x: 1606.83, y: 89.73515 },
          { x: 2005.78, y: 91.304493 },
          { x: 4003.53, y: 94.837978 },
          { x: 6003.50, y: 96.190051 },
          { x: 7997.85, y: 96.880247 }
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

var ctx_t2_20221225_vbr_bitrate_fps_data = document.getElementById('chart_t2_20221225_vbr_bitrate_fps');
const chart_t2_20221225_vbr_bitrate_fps_data = new Chart(ctx_t2_20221225_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "i5 2410M QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 880.23, y: 38.36 },
          { x: 880.23, y: 45.23 },
          { x: 1012.32, y: 58.00 },
          { x: 1363.74, y: 57.37 },
          { x: 1763.43, y: 31.74 },
          { x: 3599.16, y: 57.50 },
          { x: 5238.08, y: 57.43 },
          { x: 6900.62, y: 57.71 },
          { x: 8016.41, y: 57.85 }
        ]
      },
      {
        label: "i5 2410M QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 881.25, y: 65.62 },
          { x: 881.25, y: 63.13 },
          { x: 984.42, y: 60.72 },
          { x: 1363.83, y: 63.88 },
          { x: 1762.54, y: 65.60 },
          { x: 3580.73, y: 65.21 },
          { x: 5236.03, y: 62.53 },
          { x: 6918.38, y: 67.95 },
          { x: 8009.14, y: 64.66 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 1073.81, y: 114.70 },
          { x: 1073.81, y: 114.13 },
          { x: 1201.19, y: 114.77 },
          { x: 1600.90, y: 110.28 },
          { x: 1999.88, y: 109.90 },
          { x: 4000.24, y: 107.04 },
          { x: 6002.32, y: 103.82 },
          { x: 7999.83, y: 101.95 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1073.81, y: 130.31 },
          { x: 1073.81, y: 130.50 },
          { x: 1200.42, y: 130.92 },
          { x: 1599.94, y: 132.74 },
          { x: 2000.33, y: 136.57 },
          { x: 4000.31, y: 130.76 },
          { x: 6002.45, y: 132.55 },
          { x: 8007.50, y: 131.44 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 1074.91, y: 49.19 },
          { x: 1074.91, y: 145.95 },
          { x: 1202.08, y: 147.18 },
          { x: 1601.68, y: 148.30 },
          { x: 2001.86, y: 146.58 },
          { x: 4003.84, y: 144.98 },
          { x: 6004.90, y: 143.26 },
          { x: 8007.01, y: 141.89 }
        ]
      },
      {
        label: "i7 7700K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 165.19 },
          { x: 1075.02, y: 168.63 },
          { x: 1201.98, y: 166.59 },
          { x: 1601.83, y: 166.57 },
          { x: 2001.87, y: 168.70 },
          { x: 4003.26, y: 166.98 },
          { x: 6002.97, y: 165.30 },
          { x: 8006.44, y: 164.80 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 370.39, y: 38.11 },
          { x: 739.85, y: 38.02 },
          { x: 1108.26, y: 37.68 },
          { x: 1473.12, y: 37.41 },
          { x: 1841.53, y: 37.02 },
          { x: 3511.75, y: 36.35 },
          { x: 5341.48, y: 35.98 },
          { x: 7027.23, y: 35.61 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.85, y: 72.56 },
          { x: 740.15, y: 72.04 },
          { x: 1110.59, y: 72.10 },
          { x: 1473.73, y: 71.18 },
          { x: 1838.68, y: 70.85 },
          { x: 3520.41, y: 69.90 },
          { x: 5319.11, y: 69.86 },
          { x: 7025.04, y: 69.36 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 35.06 },
          { x: 732.54, y: 34.96 },
          { x: 1105.05, y: 34.61 },
          { x: 1467.26, y: 34.53 },
          { x: 1812.30, y: 34.47 },
          { x: 3511.21, y: 33.78 },
          { x: 5343.83, y: 33.40 },
          { x: 7023.42, y: 32.91 }
        ]
      },
      {
        label: "i7 7700K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 62.85 },
          { x: 739.56, y: 62.47 },
          { x: 1108.77, y: 49.36 },
          { x: 1472.71, y: 61.61 },
          { x: 1820.10, y: 62.48 },
          { x: 3517.20, y: 61.25 },
          { x: 5342.60, y: 60.71 },
          { x: 6979.86, y: 60.69 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 1074.91, y: 168.74 },
          { x: 1074.91, y: 170.42 },
          { x: 1202.06, y: 169.99 },
          { x: 1601.57, y: 169.26 },
          { x: 2001.82, y: 168.00 },
          { x: 4003.65, y: 162.25 },
          { x: 6005.14, y: 158.34 },
          { x: 8006.85, y: 155.20 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.02, y: 202.03 },
          { x: 1075.02, y: 201.93 },
          { x: 1202.13, y: 202.57 },
          { x: 1601.90, y: 201.77 },
          { x: 2001.89, y: 201.79 },
          { x: 4003.38, y: 197.43 },
          { x: 6003.33, y: 195.20 },
          { x: 8006.12, y: 193.45 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 394.89, y: 82.59 },
          { x: 788.63, y: 76.53 },
          { x: 1172.22, y: 72.71 },
          { x: 1535.46, y: 69.55 },
          { x: 1860.12, y: 66.83 },
          { x: 3288.19, y: 59.33 },
          { x: 4558.72, y: 55.85 },
          { x: 5344.79, y: 54.13 },
          { x: 6094.85, y: 54.42 },
          { x: 6345.34, y: 53.96 },
          { x: 6547.49, y: 53.09 },
          { x: 6575.29, y: 52.73 },
          { x: 6593.16, y: 52.90 },
          { x: 6593.31, y: 52.88 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 394.49, y: 144.04 },
          { x: 785.93, y: 138.76 },
          { x: 1171.88, y: 131.15 },
          { x: 1533.62, y: 129.54 },
          { x: 1871.01, y: 125.22 },
          { x: 3294.62, y: 125.35 },
          { x: 4582.86, y: 121.55 },
          { x: 5379.25, y: 117.07 },
          { x: 6162.71, y: 114.86 },
          { x: 6502.61, y: 114.65 },
          { x: 6614.55, y: 114.15 },
          { x: 6672.12, y: 112.89 },
          { x: 6690.19, y: 114.18 },
          { x: 6690.34, y: 112.91 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 395.01, y: 88.79 },
          { x: 785.55, y: 81.32 },
          { x: 1169.86, y: 76.17 },
          { x: 1524.74, y: 71.69 },
          { x: 1841.94, y: 68.86 },
          { x: 3264.75, y: 60.60 },
          { x: 4508.88, y: 56.85 },
          { x: 5270.26, y: 55.44 },
          { x: 5977.76, y: 54.51 },
          { x: 6206.64, y: 54.20 },
          { x: 6392.95, y: 53.98 },
          { x: 6398.93, y: 53.95 },
          { x: 6432.12, y: 54.05 },
          { x: 6432.27, y: 54.03 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 395.23, y: 136.74 },
          { x: 785.90, y: 130.35 },
          { x: 1167.65, y: 126.96 },
          { x: 1539.97, y: 126.55 },
          { x: 1853.33, y: 124.04 },
          { x: 3280.05, y: 117.41 },
          { x: 4557.09, y: 110.92 },
          { x: 5340.64, y: 108.14 },
          { x: 6096.42, y: 106.02 },
          { x: 6351.62, y: 105.35 },
          { x: 6548.37, y: 104.84 },
          { x: 6557.13, y: 104.97 },
          { x: 6590.80, y: 104.88 },
          { x: 6590.95, y: 104.76 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 399.88, y: 268.98 },
          { x: 770.31, y: 266.63 },
          { x: 1137.33, y: 263.28 },
          { x: 1502.27, y: 262.64 },
          { x: 1863.39, y: 262.96 },
          { x: 3501.61, y: 261.92 },
          { x: 4792.06, y: 256.95 },
          { x: 5807.32, y: 265.21 },
          { x: 6814.13, y: 264.58 },
          { x: 7776.86, y: 262.01 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.45, y: 274.01 },
          { x: 769.09, y: 270.38 },
          { x: 1133.09, y: 274.03 },
          { x: 1497.34, y: 273.49 },
          { x: 1851.80, y: 287.47 },
          { x: 3434.08, y: 279.72 },
          { x: 4716.76, y: 267.95 },
          { x: 5690.71, y: 278.10 },
          { x: 6693.67, y: 274.53 },
          { x: 7733.60, y: 281.72 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 400.19, y: 203.59 },
          { x: 772.44, y: 207.25 },
          { x: 1141.85, y: 206.28 },
          { x: 1508.09, y: 205.10 },
          { x: 1870.31, y: 207.85 },
          { x: 3506.76, y: 206.59 },
          { x: 4993.52, y: 204.84 },
          { x: 6427.77, y: 206.31 },
          { x: 7871.22, y: 206.05 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 399.88, y: 202.57 },
          { x: 771.98, y: 201.49 },
          { x: 1139.61, y: 197.23 },
          { x: 1502.71, y: 200.26 },
          { x: 1861.23, y: 204.04 },
          { x: 3482.25, y: 204.15 },
          { x: 4965.76, y: 203.94 },
          { x: 6339.68, y: 204.11 },
          { x: 7718.05, y: 196.18 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1088.92, y: 282.07 },
          { x: 1088.92, y: 286.18 },
          { x: 1236.27, y: 286.13 },
          { x: 1531.97, y: 286.11 },
          { x: 1966.63, y: 285.89 },
          { x: 3722.98, y: 293.74 },
          { x: 5552.52, y: 293.57 },
          { x: 6692.71, y: 293.47 },
          { x: 7465.86, y: 293.76 },
          { x: 8099.52, y: 292.77 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1086.44, y: 381.17 },
          { x: 1086.44, y: 381.74 },
          { x: 1232.03, y: 379.96 },
          { x: 1523.06, y: 381.94 },
          { x: 1956.69, y: 384.16 },
          { x: 3726.72, y: 389.22 },
          { x: 5638.01, y: 391.26 },
          { x: 6734.49, y: 391.53 },
          { x: 7477.15, y: 390.79 },
          { x: 8124.60, y: 390.32 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.75, y: 248.93 },
          { x: 777.12, y: 248.34 },
          { x: 1136.23, y: 248.16 },
          { x: 1509.38, y: 248.04 },
          { x: 1838.28, y: 247.67 },
          { x: 3209.04, y: 247.12 },
          { x: 4287.20, y: 247.11 },
          { x: 5008.54, y: 247.11 },
          { x: 5413.43, y: 246.95 },
          { x: 5625.87, y: 246.72 },
          { x: 5678.59, y: 246.52 },
          { x: 5695.65, y: 246.72 },
          { x: 5702.52, y: 246.56 },
          { x: 5704.93, y: 246.64 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.26, y: 325.93 },
          { x: 776.54, y: 327.22 },
          { x: 1139.01, y: 327.10 },
          { x: 1508.56, y: 325.44 },
          { x: 1840.25, y: 324.51 },
          { x: 3211.41, y: 323.98 },
          { x: 4315.49, y: 324.31 },
          { x: 5077.51, y: 312.50 },
          { x: 5468.88, y: 324.35 },
          { x: 5725.34, y: 324.91 },
          { x: 5785.31, y: 324.51 },
          { x: 5804.24, y: 325.12 },
          { x: 5808.84, y: 324.40 },
          { x: 5814.27, y: 324.44 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.45, y: 234.40 },
          { x: 1129.85, y: 233.27 },
          { x: 1492.93, y: 232.58 },
          { x: 3157.07, y: 231.39 },
          { x: 4224.81, y: 233.03 },
          { x: 4922.06, y: 232.86 },
          { x: 5284.71, y: 233.01 },
          { x: 5449.45, y: 231.26 },
          { x: 5525.71, y: 232.13 },
          { x: 5528.77, y: 232.93 },
          { x: 5535.46, y: 234.88 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.87, y: 232.72 },
          { x: 773.99, y: 231.71 },
          { x: 1135.30, y: 235.04 },
          { x: 1492.35, y: 236.27 },
          { x: 1824.84, y: 232.45 },
          { x: 3161.29, y: 232.68 },
          { x: 4236.86, y: 233.76 },
          { x: 4959.11, y: 234.26 },
          { x: 5359.71, y: 234.25 },
          { x: 5555.51, y: 232.84 },
          { x: 5608.75, y: 232.44 },
          { x: 5634.47, y: 236.54 },
          { x: 5640.19, y: 232.61 },
          { x: 5644.53, y: 232.47 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 313.53, y: 214.35 },
          { x: 852.26, y: 206.89 },
          { x: 1106.46, y: 205.17 },
          { x: 1611.39, y: 202.60 },
          { x: 2115.56, y: 197.53 },
          { x: 4131.97, y: 194.03 },
          { x: 6122.73, y: 191.25 },
          { x: 8095.56, y: 189.15 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.65, y: 337.64 },
          { x: 847.11, y: 332.21 },
          { x: 1104.77, y: 331.10 },
          { x: 1602.74, y: 330.19 },
          { x: 2107.48, y: 328.83 },
          { x: 4114.84, y: 325.86 },
          { x: 6083.85, y: 323.15 },
          { x: 8058.24, y: 321.46 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 382.07, y: 211.17 },
          { x: 892.43, y: 197.40 },
          { x: 1275.83, y: 189.99 },
          { x: 1693.07, y: 181.60 },
          { x: 2118.99, y: 175.22 },
          { x: 4146.42, y: 152.05 },
          { x: 6170.89, y: 134.61 },
          { x: 8164.35, y: 125.68 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.94, y: 429.33 },
          { x: 899.67, y: 432.55 },
          { x: 1278.47, y: 438.05 },
          { x: 1701.20, y: 438.09 },
          { x: 2121.52, y: 437.84 },
          { x: 4152.90, y: 430.59 },
          { x: 6160.43, y: 418.01 },
          { x: 8181.92, y: 410.32 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 378.44, y: 203.16 },
          { x: 887.54, y: 192.93 },
          { x: 1274.25, y: 185.65 },
          { x: 1688.31, y: 178.08 },
          { x: 2114.97, y: 172.30 },
          { x: 4137.81, y: 154.63 },
          { x: 6145.69, y: 142.43 },
          { x: 8165.14, y: 134.93 }
        ]
      },
      {
        label: "rtx1060 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 379.02, y: 375.94 },
          { x: 895.72, y: 366.97 },
          { x: 1269.08, y: 379.42 },
          { x: 1692.84, y: 370.88 },
          { x: 2116.90, y: 371.64 },
          { x: 4155.37, y: 368.24 },
          { x: 6166.94, y: 376.47 },
          { x: 8177.50, y: 371.79 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 298.88, y: 186.77 },
          { x: 834.02, y: 181.49 },
          { x: 1091.90, y: 185.78 },
          { x: 1594.04, y: 185.14 },
          { x: 2102.58, y: 191.32 },
          { x: 4095.58, y: 191.00 },
          { x: 6078.67, y: 188.99 },
          { x: 8041.00, y: 187.47 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.13, y: 425.75 },
          { x: 844.15, y: 426.83 },
          { x: 1100.92, y: 427.03 },
          { x: 1604.14, y: 428.11 },
          { x: 2107.73, y: 430.22 },
          { x: 4114.83, y: 429.33 },
          { x: 6088.33, y: 429.45 },
          { x: 8027.12, y: 429.53 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        data:[
          { x: 395.89, y: 112.88 },
          { x: 914.35, y: 113.13 },
          { x: 1302.32, y: 113.34 },
          { x: 1724.96, y: 112.98 },
          { x: 2148.81, y: 113.25 },
          { x: 4203.84, y: 113.53 },
          { x: 6228.46, y: 113.35 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.47, y: 401.20 },
          { x: 914.60, y: 398.70 },
          { x: 1290.04, y: 396.76 },
          { x: 1707.00, y: 396.55 },
          { x: 2135.73, y: 395.34 },
          { x: 4170.28, y: 395.86 },
          { x: 6187.88, y: 395.17 },
          { x: 8143.77, y: 394.62 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.35, y: 116.37 },
          { x: 913.55, y: 116.31 },
          { x: 1302.01, y: 116.23 },
          { x: 1725.99, y: 116.04 },
          { x: 2151.70, y: 116.34 },
          { x: 4210.40, y: 115.44 },
          { x: 6242.90, y: 116.18 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 387.44, y: 382.80 },
          { x: 914.84, y: 380.75 },
          { x: 1291.18, y: 374.76 },
          { x: 1714.81, y: 383.22 },
          { x: 2141.14, y: 372.61 },
          { x: 4178.64, y: 371.49 },
          { x: 6195.79, y: 372.07 },
          { x: 8161.46, y: 369.14 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 299.97, y: 237.44 },
          { x: 832.70, y: 229.59 },
          { x: 1091.73, y: 236.11 },
          { x: 1594.14, y: 234.50 },
          { x: 2103.98, y: 242.73 },
          { x: 4096.77, y: 242.77 },
          { x: 6079.56, y: 240.59 },
          { x: 8042.22, y: 240.12 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 308.54, y: 495.86 },
          { x: 843.90, y: 497.65 },
          { x: 1099.98, y: 498.41 },
          { x: 1604.18, y: 498.68 },
          { x: 2107.12, y: 499.40 },
          { x: 4115.28, y: 500.33 },
          { x: 6089.06, y: 500.00 },
          { x: 8026.42, y: 500.33 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        data:[
          { x: 394.47, y: 140.74 },
          { x: 914.32, y: 140.61 },
          { x: 1301.15, y: 141.23 },
          { x: 1723.69, y: 141.29 },
          { x: 2150.74, y: 140.06 },
          { x: 4204.31, y: 141.22 },
          { x: 6226.95, y: 141.30 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.28, y: 485.18 },
          { x: 915.32, y: 485.33 },
          { x: 1290.74, y: 485.96 },
          { x: 1707.64, y: 485.80 },
          { x: 2137.12, y: 486.37 },
          { x: 4168.00, y: 488.25 },
          { x: 6184.58, y: 487.99 },
          { x: 8144.36, y: 488.62 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.05, y: 144.34 },
          { x: 913.51, y: 144.36 },
          { x: 1303.42, y: 144.15 },
          { x: 1726.51, y: 144.12 },
          { x: 2151.09, y: 144.07 },
          { x: 4207.62, y: 143.99 },
          { x: 6243.61, y: 144.00 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.09, y: 364.82 },
          { x: 914.74, y: 368.51 },
          { x: 1291.88, y: 368.90 },
          { x: 1714.98, y: 371.79 },
          { x: 2138.69, y: 362.32 },
          { x: 4175.84, y: 367.02 },
          { x: 6194.20, y: 370.70 },
          { x: 8160.50, y: 368.45 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 382.76, y: 212.50 },
          { x: 902.88, y: 212.82 },
          { x: 1281.12, y: 212.60 },
          { x: 1712.57, y: 212.02 },
          { x: 2137.39, y: 211.31 },
          { x: 4179.46, y: 206.87 },
          { x: 6190.96, y: 203.65 },
          { x: 8173.12, y: 199.12 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 393.42, y: 588.24 },
          { x: 923.25, y: 588.77 },
          { x: 1311.25, y: 588.77 },
          { x: 1742.89, y: 584.76 },
          { x: 2172.88, y: 588.16 },
          { x: 4212.64, y: 587.32 },
          { x: 6238.73, y: 587.10 },
          { x: 8170.69, y: 587.02 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.97, y: 192.82 },
          { x: 900.89, y: 192.71 },
          { x: 1270.11, y: 192.73 },
          { x: 1700.43, y: 191.14 },
          { x: 2132.38, y: 190.94 },
          { x: 4161.71, y: 190.64 },
          { x: 6172.43, y: 188.05 },
          { x: 8163.80, y: 185.69 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 393.18, y: 367.88 },
          { x: 920.82, y: 364.61 },
          { x: 1300.09, y: 369.65 },
          { x: 1741.46, y: 371.37 },
          { x: 2167.05, y: 370.73 },
          { x: 4208.55, y: 366.64 },
          { x: 6225.85, y: 366.94 },
          { x: 8167.09, y: 370.16 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 517.89, y: 18.85 },
          { x: 799.94, y: 18.82 },
          { x: 1195.49, y: 19.25 },
          { x: 1993.41, y: 19.19 },
          { x: 3985.49, y: 19.05 },
          { x: 5709.06, y: 18.77 },
          { x: 7257.54, y: 18.96 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.48, y: 156.71 },
          { x: 803.84, y: 155.95 },
          { x: 1204.97, y: 172.97 },
          { x: 1605.97, y: 163.50 },
          { x: 2007.34, y: 150.35 },
          { x: 3754.79, y: 170.65 },
          { x: 5606.91, y: 171.35 },
          { x: 7413.18, y: 155.81 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 418.33, y: 37.92 },
          { x: 797.62, y: 37.90 },
          { x: 1196.08, y: 38.76 },
          { x: 1599.74, y: 36.65 },
          { x: 1999.82, y: 36.16 },
          { x: 3949.69, y: 35.76 },
          { x: 5211.01, y: 37.24 },
          { x: 6195.67, y: 38.42 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 326.42 },
          { x: 823.24, y: 330.74 },
          { x: 1223.89, y: 319.68 },
          { x: 1623.67, y: 330.55 },
          { x: 2025.24, y: 326.14 },
          { x: 4020.37, y: 320.60 },
          { x: 6017.95, y: 329.81 },
          { x: 8018.34, y: 316.65 }
        ]
      },
      {
        label: "7950x_iGPU VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.49, y: 142.67 },
          { x: 822.83, y: 142.68 },
          { x: 1222.61, y: 140.95 },
          { x: 1623.58, y: 152.63 },
          { x: 2024.59, y: 136.64 },
          { x: 4019.15, y: 136.04 },
          { x: 6018.53, y: 149.03 },
          { x: 8016.95, y: 159.51 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        data:[
          { x: 520.81, y: 39.67 },
          { x: 800.14, y: 75.10 },
          { x: 1592.58, y: 49.96 },
          { x: 3985.42, y: 41.06 },
          { x: 5702.29, y: 43.43 },
          { x: 7258.15, y: 80.23 }
        ]
      },
      {
        label: "rx7900xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 401.83, y: 290.70 },
          { x: 802.20, y: 247.20 },
          { x: 1202.16, y: 293.13 },
          { x: 1602.10, y: 291.84 },
          { x: 2001.56, y: 291.20 },
          { x: 4000.29, y: 291.11 },
          { x: 5998.78, y: 245.12 },
          { x: 7997.64, y: 288.28 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        data:[
          { x: 466.49, y: 141.02 },
          { x: 799.44, y: 141.11 },
          { x: 1199.46, y: 110.81 },
          { x: 1599.82, y: 85.01 },
          { x: 2000.06, y: 81.15 },
          { x: 3965.98, y: 96.66 },
          { x: 5240.44, y: 79.49 },
          { x: 6202.91, y: 117.70 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.64, y: 450.45 },
          { x: 823.99, y: 465.57 },
          { x: 1223.22, y: 455.87 },
          { x: 1622.03, y: 456.14 },
          { x: 2021.17, y: 443.95 },
          { x: 4019.81, y: 456.55 },
          { x: 6018.55, y: 454.18 },
          { x: 8019.30, y: 422.47 }
        ]
      },
      {
        label: "rx7900xt VCE VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 422.66, y: 245.57 },
          { x: 823.41, y: 206.02 },
          { x: 1222.42, y: 243.58 },
          { x: 1622.22, y: 178.56 },
          { x: 2021.07, y: 243.55 },
          { x: 4019.91, y: 174.30 },
          { x: 6018.32, y: 242.40 },
          { x: 8018.75, y: 174.58 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 498.41, y: 24.53 },
          { x: 800.17, y: 24.02 },
          { x: 1201.17, y: 24.44 },
          { x: 1602.68, y: 24.00 },
          { x: 2006.97, y: 24.28 },
          { x: 4016.22, y: 24.30 },
          { x: 6009.90, y: 25.31 },
          { x: 8013.13, y: 24.19 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 406.73, y: 548.19 },
          { x: 807.40, y: 544.71 },
          { x: 1206.60, y: 541.02 },
          { x: 1606.96, y: 521.91 },
          { x: 2005.63, y: 540.64 },
          { x: 4003.20, y: 550.45 },
          { x: 6001.84, y: 566.48 },
          { x: 7995.33, y: 544.06 }
        ]
      },
      {
        label: "rx7900xt VCE VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 406.81, y: 270.99 },
          { x: 807.27, y: 269.18 },
          { x: 1207.05, y: 269.57 },
          { x: 1606.83, y: 261.52 },
          { x: 2005.78, y: 264.95 },
          { x: 4003.53, y: 262.07 },
          { x: 6003.50, y: 263.14 },
          { x: 7997.85, y: 261.72 }
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

