var aspect_ratio_bitrate_ssim = 0.8;
var aspect_ratio_bitrate_ms_ssim = 0.8;
var aspect_ratio_bitrate_vmaf = 0.8;
var aspect_ratio_bitrate_fps = 0.8;


var ctx_t1_20241223_bitrate_ssim_data = document.getElementById('chart_t1_20241223_bitrate_ssim');
const chart_t1_20241223_bitrate_ssim_data = new Chart(ctx_t1_20241223_bitrate_ssim_data,
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
          { x: 6723.26, y: 0.998802 },
          { x: 4297.34, y: 0.997666 },
          { x: 2758.00, y: 0.995394 },
          { x: 1789.04, y: 0.990914 },
          { x: 1196.61, y: 0.982222 },
          { x: 815.70, y: 0.965485 }
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
          { x: 5864.37, y: 0.996148 },
          { x: 3739.81, y: 0.995945 },
          { x: 2417.55, y: 0.993998 },
          { x: 1572.95, y: 0.989678 },
          { x: 1061.48, y: 0.981334 },
          { x: 735.36, y: 0.965874 }
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
          { x: 7952.01, y: 0.999089 },
          { x: 4955.72, y: 0.998398 },
          { x: 3091.93, y: 0.997164 },
          { x: 1925.04, y: 0.994921 },
          { x: 1192.35, y: 0.99074 },
          { x: 744.75, y: 0.982982 },
          { x: 465.87, y: 0.96916 }
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
          { x: 7793.56, y: 0.999265 },
          { x: 4866.57, y: 0.998649 },
          { x: 3047.20, y: 0.997498 },
          { x: 1896.93, y: 0.995309 },
          { x: 1173.26, y: 0.991169 },
          { x: 733.48, y: 0.983512 },
          { x: 458.42, y: 0.969888 }
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
          { x: 8064.40, y: 0.99936 },
          { x: 4995.34, y: 0.998845 },
          { x: 3142.57, y: 0.997942 },
          { x: 1972.09, y: 0.99632 },
          { x: 1225.19, y: 0.993344 },
          { x: 753.09, y: 0.987973 },
          { x: 449.37, y: 0.978557 }
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
          { x: 8056.42, y: 0.999455 },
          { x: 5017.69, y: 0.998997 },
          { x: 3165.74, y: 0.998164 },
          { x: 1990.87, y: 0.996621 },
          { x: 1241.85, y: 0.99375 },
          { x: 763.69, y: 0.988499 },
          { x: 454.11, y: 0.979374 }
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
          { x: 6365.60, y: 0.999025 },
          { x: 5220.48, y: 0.998822 },
          { x: 4398.78, y: 0.998604 },
          { x: 3493.53, y: 0.998218 },
          { x: 2751.10, y: 0.997712 },
          { x: 2147.26, y: 0.997043 },
          { x: 1673.62, y: 0.996175 }
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
          { x: 6454.79, y: 0.999206 },
          { x: 5180.47, y: 0.999 },
          { x: 4312.63, y: 0.998783 },
          { x: 3425.17, y: 0.998413 },
          { x: 2707.60, y: 0.99792 },
          { x: 2122.82, y: 0.997254 },
          { x: 1661.80, y: 0.996424 }
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
          { x: 7091.96, y: 0.998943 },
          { x: 5834.18, y: 0.99872 },
          { x: 4938.35, y: 0.998493 },
          { x: 3918.69, y: 0.998078 },
          { x: 3064.90, y: 0.99751 },
          { x: 2360.05, y: 0.996749 },
          { x: 1816.27, y: 0.995823 }
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
          { x: 7305.05, y: 0.999129 },
          { x: 5871.19, y: 0.9989 },
          { x: 4910.43, y: 0.998669 },
          { x: 3888.38, y: 0.998266 },
          { x: 3042.21, y: 0.997712 },
          { x: 2345.65, y: 0.99697 },
          { x: 1811.47, y: 0.996075 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7140.42, y: 0.998206 },
          { x: 5965.97, y: 0.997871 },
          { x: 4639.91, y: 0.99729 },
          { x: 3544.62, y: 0.996497 },
          { x: 2698.04, y: 0.995425 },
          { x: 2029.74, y: 0.994053 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7224.40, y: 0.998406 },
          { x: 5974.01, y: 0.99808 },
          { x: 4647.73, y: 0.997529 },
          { x: 3536.82, y: 0.996725 },
          { x: 2689.06, y: 0.995676 },
          { x: 2028.23, y: 0.994283 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6608.89, y: 0.998827 },
          { x: 5084.70, y: 0.998398 },
          { x: 3528.15, y: 0.997539 },
          { x: 2248.03, y: 0.995877 },
          { x: 1348.18, y: 0.992378 },
          { x: 810.76, y: 0.985706 },
          { x: 482.89, y: 0.972866 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6693.02, y: 0.998787 },
          { x: 5155.38, y: 0.998335 },
          { x: 3573.09, y: 0.997445 },
          { x: 2274.51, y: 0.995721 },
          { x: 1369.38, y: 0.992099 },
          { x: 825.67, y: 0.98514 },
          { x: 496.51, y: 0.97194 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7437.67, y: 0.999077 },
          { x: 5356.17, y: 0.998682 },
          { x: 3580.23, y: 0.997829 },
          { x: 2257.92, y: 0.996161 },
          { x: 1352.90, y: 0.99268 },
          { x: 811.76, y: 0.986012 },
          { x: 483.22, y: 0.973092 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7542.40, y: 0.999055 },
          { x: 5421.58, y: 0.998638 },
          { x: 3626.36, y: 0.997751 },
          { x: 2289.79, y: 0.996016 },
          { x: 1374.44, y: 0.992397 },
          { x: 826.23, y: 0.985434 },
          { x: 496.33, y: 0.972246 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 6777.39, y: 0.998501 },
          { x: 4846.31, y: 0.997623 },
          { x: 3869.87, y: 0.996729 },
          { x: 2474.28, y: 0.993996 },
          { x: 1653.30, y: 0.989468 },
          { x: 1160.25, y: 0.982475 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7071.56, y: 0.998411 },
          { x: 5021.89, y: 0.997494 },
          { x: 3979.22, y: 0.996542 },
          { x: 2549.93, y: 0.993724 },
          { x: 1716.85, y: 0.989049 },
          { x: 1226.04, y: 0.981971 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 5474.21, y: 0.99857 },
          { x: 3723.49, y: 0.997771 },
          { x: 2841.80, y: 0.996917 },
          { x: 1695.04, y: 0.994288 },
          { x: 1084.76, y: 0.989906 },
          { x: 739.21, y: 0.982596 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5660.77, y: 0.998544 },
          { x: 3854.26, y: 0.99773 },
          { x: 2930.79, y: 0.996857 },
          { x: 1747.18, y: 0.994144 },
          { x: 1116.98, y: 0.989681 },
          { x: 761.49, y: 0.982237 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5400.27, y: 0.998764 },
          { x: 3687.92, y: 0.998028 },
          { x: 2818.86, y: 0.997196 },
          { x: 1685.88, y: 0.994559 },
          { x: 1079.08, y: 0.990098 },
          { x: 734.67, y: 0.982661 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5570.81, y: 0.998734 },
          { x: 3807.66, y: 0.997977 },
          { x: 2906.96, y: 0.997129 },
          { x: 1738.08, y: 0.994413 },
          { x: 1112.19, y: 0.989842 },
          { x: 757.39, y: 0.98225 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 6422.90, y: 0.998217 },
          { x: 5111.40, y: 0.997499 },
          { x: 3350.27, y: 0.995471 },
          { x: 2245.42, y: 0.991742 },
          { x: 1524.43, y: 0.985291 },
          { x: 1010.32, y: 0.973182 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6459.80, y: 0.99811 },
          { x: 5021.88, y: 0.997289 },
          { x: 3314.55, y: 0.995178 },
          { x: 2205.05, y: 0.991233 },
          { x: 1504.22, y: 0.984666 },
          { x: 1019.24, y: 0.972719 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 5968.44, y: 0.998675 },
          { x: 3968.07, y: 0.997883 },
          { x: 2859.49, y: 0.996895 },
          { x: 1708.19, y: 0.994237 },
          { x: 1092.80, y: 0.989824 },
          { x: 748.49, y: 0.982463 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 0.998654 },
          { x: 4089.97, y: 0.997841 },
          { x: 2945.71, y: 0.996838 },
          { x: 1755.95, y: 0.99409 },
          { x: 1118.75, y: 0.989534 },
          { x: 765.70, y: 0.981893 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 0.998864 },
          { x: 3906.13, y: 0.998125 },
          { x: 2835.05, y: 0.99718 },
          { x: 1697.47, y: 0.994509 },
          { x: 1085.75, y: 0.989987 },
          { x: 743.02, y: 0.982527 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 0.998842 },
          { x: 4019.68, y: 0.998086 },
          { x: 2913.10, y: 0.997117 },
          { x: 1740.59, y: 0.994345 },
          { x: 1112.13, y: 0.989682 },
          { x: 761.54, y: 0.981949 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 6258.54, y: 0.998757 },
          { x: 3975.48, y: 0.997836 },
          { x: 2363.24, y: 0.995979 },
          { x: 1383.59, y: 0.992261 },
          { x: 786.86, y: 0.984437 },
          { x: 440.68, y: 0.96884 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6428.66, y: 0.998726 },
          { x: 4089.11, y: 0.997788 },
          { x: 2425.25, y: 0.99586 },
          { x: 1421.49, y: 0.992044 },
          { x: 810.63, y: 0.984013 },
          { x: 454.34, y: 0.967834 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6881.34, y: 0.999014 },
          { x: 4075.01, y: 0.99812 },
          { x: 2375.71, y: 0.996243 },
          { x: 1368.90, y: 0.992429 },
          { x: 786.09, y: 0.984542 },
          { x: 441.69, y: 0.968921 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7068.10, y: 0.998993 },
          { x: 4189.40, y: 0.998079 },
          { x: 2444.31, y: 0.996129 },
          { x: 1414.25, y: 0.992227 },
          { x: 809.74, y: 0.984081 },
          { x: 454.99, y: 0.967823 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6608.19, y: 0.998327 },
          { x: 4249.44, y: 0.996929 },
          { x: 2721.00, y: 0.994285 },
          { x: 1861.21, y: 0.989933 },
          { x: 1296.14, y: 0.982618 },
          { x: 950.58, y: 0.970728 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 0.998285 },
          { x: 4362.03, y: 0.99694 },
          { x: 2813.46, y: 0.99434 },
          { x: 1937.03, y: 0.990274 },
          { x: 1344.50, y: 0.983246 },
          { x: 962.49, y: 0.971016 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 6213.53, y: 0.998572 },
          { x: 4145.39, y: 0.997747 },
          { x: 3004.77, y: 0.996742 },
          { x: 1792.40, y: 0.993994 },
          { x: 1142.37, y: 0.989407 },
          { x: 784.67, y: 0.981747 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6379.52, y: 0.998576 },
          { x: 4295.35, y: 0.997777 },
          { x: 3139.78, y: 0.996829 },
          { x: 1921.30, y: 0.994337 },
          { x: 1247.39, y: 0.99025 },
          { x: 856.91, y: 0.983306 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 0.998803 },
          { x: 4062.71, y: 0.998038 },
          { x: 2964.40, y: 0.997058 },
          { x: 1772.45, y: 0.994282 },
          { x: 1134.62, y: 0.989583 },
          { x: 779.22, y: 0.981817 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6206.55, y: 0.998807 },
          { x: 4198.75, y: 0.998068 },
          { x: 3092.57, y: 0.997144 },
          { x: 1902.43, y: 0.994628 },
          { x: 1238.93, y: 0.990422 },
          { x: 853.19, y: 0.983438 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 6539.43, y: 0.998328 },
          { x: 4200.88, y: 0.99693 },
          { x: 2687.33, y: 0.994295 },
          { x: 1839.67, y: 0.989955 },
          { x: 1284.20, y: 0.982685 },
          { x: 944.45, y: 0.970857 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 0.998285 },
          { x: 4362.03, y: 0.99694 },
          { x: 2813.46, y: 0.99434 },
          { x: 1937.03, y: 0.990274 },
          { x: 1344.50, y: 0.983246 },
          { x: 962.49, y: 0.971016 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 5482.55, y: 0.998444 },
          { x: 3736.71, y: 0.997642 },
          { x: 2327.88, y: 0.995953 },
          { x: 1454.51, y: 0.99289 },
          { x: 966.38, y: 0.988234 },
          { x: 620.31, y: 0.979077 },
          { x: 432.86, y: 0.965754 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6778.85, y: 0.998664 },
          { x: 4543.28, y: 0.997903 },
          { x: 2868.01, y: 0.996347 },
          { x: 1817.97, y: 0.993529 },
          { x: 1177.23, y: 0.988899 },
          { x: 748.12, y: 0.979726 },
          { x: 503.96, y: 0.965447 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6257.21, y: 0.998848 },
          { x: 4205.18, y: 0.998149 },
          { x: 2671.13, y: 0.996665 },
          { x: 1695.86, y: 0.993959 },
          { x: 1101.74, y: 0.989419 },
          { x: 706.45, y: 0.980794 },
          { x: 480.67, y: 0.967538 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6655.15, y: 0.998828 },
          { x: 4471.96, y: 0.998116 },
          { x: 2839.63, y: 0.996597 },
          { x: 1802.23, y: 0.99378 },
          { x: 1170.29, y: 0.98905 },
          { x: 744.56, y: 0.979869 },
          { x: 501.18, y: 0.965567 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 6554.43, y: 0.998306 },
          { x: 4214.81, y: 0.996892 },
          { x: 2695.47, y: 0.994202 },
          { x: 1845.45, y: 0.989796 },
          { x: 1291.24, y: 0.982464 },
          { x: 961.73, y: 0.970804 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.35, y: 0.998285 },
          { x: 4362.61, y: 0.99694 },
          { x: 2813.25, y: 0.994341 },
          { x: 1937.58, y: 0.990278 },
          { x: 1349.13, y: 0.98329 },
          { x: 977.61, y: 0.971391 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6266.00, y: 0.997992 },
          { x: 3890.91, y: 0.99642 },
          { x: 2464.50, y: 0.993614 },
          { x: 1630.75, y: 0.988762 },
          { x: 1148.68, y: 0.98164 },
          { x: 838.81, y: 0.96945 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.59, y: 0.997988 },
          { x: 3918.10, y: 0.996406 },
          { x: 2489.78, y: 0.993575 },
          { x: 1655.11, y: 0.988669 },
          { x: 1173.40, y: 0.981436 },
          { x: 862.74, y: 0.969017 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 0.998131 },
          { x: 3807.65, y: 0.996624 },
          { x: 2438.16, y: 0.993846 },
          { x: 1616.83, y: 0.989055 },
          { x: 1140.02, y: 0.981963 },
          { x: 834.34, y: 0.969675 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 0.998125 },
          { x: 3834.12, y: 0.9966 },
          { x: 2468.93, y: 0.993807 },
          { x: 1645.50, y: 0.988983 },
          { x: 1167.40, y: 0.98177 },
          { x: 859.27, y: 0.969309 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6259.15, y: 0.998094 },
          { x: 3966.41, y: 0.996378 },
          { x: 2532.91, y: 0.993165 },
          { x: 1761.19, y: 0.988116 },
          { x: 1255.42, y: 0.980237 },
          { x: 955.98, y: 0.966615 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6393.28, y: 0.998065 },
          { x: 4069.85, y: 0.996401 },
          { x: 2621.75, y: 0.993283 },
          { x: 1824.39, y: 0.988403 },
          { x: 1304.37, y: 0.980831 },
          { x: 1009.64, y: 0.967709 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 6148.13, y: 0.997969 },
          { x: 3891.15, y: 0.996189 },
          { x: 2491.70, y: 0.992892 },
          { x: 1725.76, y: 0.987581 },
          { x: 1244.24, y: 0.979554 },
          { x: 945.00, y: 0.965539 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.08, y: 0.997909 },
          { x: 3895.17, y: 0.996177 },
          { x: 2526.92, y: 0.992983 },
          { x: 1754.03, y: 0.987854 },
          { x: 1272.91, y: 0.980163 },
          { x: 961.37, y: 0.96668 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 6503.17, y: 0.997464 },
          { x: 4066.83, y: 0.9953 },
          { x: 2663.87, y: 0.99125 },
          { x: 1763.49, y: 0.983167 },
          { x: 1183.75, y: 0.969258 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6499.60, y: 0.997459 },
          { x: 4070.44, y: 0.995285 },
          { x: 2668.06, y: 0.991229 },
          { x: 1768.60, y: 0.983109 },
          { x: 1186.42, y: 0.969152 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 7405.71, y: 0.998643 },
          { x: 4626.38, y: 0.997339 },
          { x: 2891.10, y: 0.994989 },
          { x: 1809.07, y: 0.990427 },
          { x: 1170.24, y: 0.981605 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7405.71, y: 0.998643 },
          { x: 4626.38, y: 0.997339 },
          { x: 2891.10, y: 0.994989 },
          { x: 1809.07, y: 0.990427 },
          { x: 1170.24, y: 0.981605 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 6369.28, y: 0.998606 },
          { x: 3932.50, y: 0.997548 },
          { x: 2430.86, y: 0.995724 },
          { x: 1530.74, y: 0.992482 },
          { x: 978.52, y: 0.986757 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.28, y: 0.998606 },
          { x: 3932.50, y: 0.997548 },
          { x: 2430.86, y: 0.995724 },
          { x: 1530.74, y: 0.992482 },
          { x: 978.52, y: 0.986757 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6335.11, y: 0.998759 },
          { x: 3922.08, y: 0.99775 },
          { x: 2418.53, y: 0.99599 },
          { x: 1519.14, y: 0.992803 },
          { x: 965.84, y: 0.987087 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6335.11, y: 0.998759 },
          { x: 3922.08, y: 0.99775 },
          { x: 2418.53, y: 0.99599 },
          { x: 1519.14, y: 0.992803 },
          { x: 965.84, y: 0.987087 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6637.16, y: 0.998651 },
          { x: 4584.36, y: 0.997951 },
          { x: 3204.05, y: 0.99688 },
          { x: 2266.87, y: 0.995282 },
          { x: 1499.15, y: 0.992144 },
          { x: 932.27, y: 0.985544 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6637.16, y: 0.998651 },
          { x: 4584.36, y: 0.997951 },
          { x: 3204.05, y: 0.99688 },
          { x: 2266.87, y: 0.995282 },
          { x: 1499.15, y: 0.992144 },
          { x: 932.27, y: 0.985544 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6401.70, y: 0.998776 },
          { x: 4419.70, y: 0.998115 },
          { x: 3123.03, y: 0.997081 },
          { x: 2225.33, y: 0.995488 },
          { x: 1492.52, y: 0.992421 },
          { x: 928.04, y: 0.985721 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6401.70, y: 0.998776 },
          { x: 4419.70, y: 0.998115 },
          { x: 3123.03, y: 0.997081 },
          { x: 2225.33, y: 0.995488 },
          { x: 1492.52, y: 0.992421 },
          { x: 928.04, y: 0.985721 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7398.66, y: 0.998648 },
          { x: 4619.87, y: 0.997338 },
          { x: 2888.26, y: 0.994986 },
          { x: 1810.53, y: 0.990426 },
          { x: 1173.20, y: 0.981575 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7398.66, y: 0.998648 },
          { x: 4619.87, y: 0.997338 },
          { x: 2888.26, y: 0.994986 },
          { x: 1810.53, y: 0.990426 },
          { x: 1173.20, y: 0.981575 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6363.67, y: 0.998607 },
          { x: 3929.63, y: 0.997544 },
          { x: 2432.29, y: 0.99573 },
          { x: 1533.77, y: 0.992482 },
          { x: 980.71, y: 0.986726 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6363.67, y: 0.998607 },
          { x: 3929.63, y: 0.997544 },
          { x: 2432.29, y: 0.99573 },
          { x: 1533.77, y: 0.992482 },
          { x: 980.71, y: 0.986726 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6330.47, y: 0.998759 },
          { x: 3921.38, y: 0.99775 },
          { x: 2418.53, y: 0.995985 },
          { x: 1519.73, y: 0.992807 },
          { x: 969.27, y: 0.987083 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6330.47, y: 0.998759 },
          { x: 3921.38, y: 0.99775 },
          { x: 2418.53, y: 0.995985 },
          { x: 1519.73, y: 0.992807 },
          { x: 969.27, y: 0.987083 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 7906.51, y: 0.99851 },
          { x: 5009.43, y: 0.997119 },
          { x: 3142.98, y: 0.994499 },
          { x: 2009.98, y: 0.98949 },
          { x: 1303.04, y: 0.979551 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7906.51, y: 0.99851 },
          { x: 5009.43, y: 0.997119 },
          { x: 3142.98, y: 0.994499 },
          { x: 2009.98, y: 0.98949 },
          { x: 1303.04, y: 0.979551 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7903.18, y: 0.998609 },
          { x: 4887.37, y: 0.99751 },
          { x: 3006.13, y: 0.99563 },
          { x: 1869.05, y: 0.992385 },
          { x: 1171.73, y: 0.986683 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7903.18, y: 0.998609 },
          { x: 4887.37, y: 0.99751 },
          { x: 3006.13, y: 0.99563 },
          { x: 1869.05, y: 0.992385 },
          { x: 1171.73, y: 0.986683 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7448.74, y: 0.998584 },
          { x: 4611.80, y: 0.997363 },
          { x: 2827.00, y: 0.995138 },
          { x: 1769.29, y: 0.991076 },
          { x: 1105.97, y: 0.983544 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7448.74, y: 0.998584 },
          { x: 4612.42, y: 0.997364 },
          { x: 2827.00, y: 0.995138 },
          { x: 1769.29, y: 0.991076 },
          { x: 1105.97, y: 0.983544 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 7904.97, y: 0.998511 },
          { x: 5007.80, y: 0.997123 },
          { x: 3149.23, y: 0.994522 },
          { x: 2011.67, y: 0.989498 },
          { x: 1303.15, y: 0.979571 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7904.97, y: 0.998511 },
          { x: 5007.80, y: 0.997123 },
          { x: 3149.23, y: 0.994522 },
          { x: 2011.67, y: 0.989498 },
          { x: 1303.15, y: 0.979571 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7975.41, y: 0.998564 },
          { x: 4928.05, y: 0.997428 },
          { x: 3024.11, y: 0.995481 },
          { x: 1888.56, y: 0.992218 },
          { x: 1178.32, y: 0.986401 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7975.41, y: 0.998564 },
          { x: 4928.05, y: 0.997428 },
          { x: 3024.11, y: 0.995481 },
          { x: 1888.56, y: 0.992218 },
          { x: 1178.32, y: 0.986401 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 2310.36, y: 0.989984 },
          { x: 2839.31, y: 0.992841 },
          { x: 3562.48, y: 0.994705 },
          { x: 4447.24, y: 0.996213 },
          { x: 5287.80, y: 0.997133 },
          { x: 6320.24, y: 0.997724 },
          { x: 7108.83, y: 0.998132 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.22, y: 0.989805 },
          { x: 2876.54, y: 0.992709 },
          { x: 3606.19, y: 0.994597 },
          { x: 4502.61, y: 0.996133 },
          { x: 5361.50, y: 0.997078 },
          { x: 6396.19, y: 0.997678 },
          { x: 7198.57, y: 0.998099 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1780.48, y: 0.993237 },
          { x: 2199.88, y: 0.994887 },
          { x: 2704.70, y: 0.996088 },
          { x: 3224.10, y: 0.996861 },
          { x: 3739.93, y: 0.997385 },
          { x: 4379.31, y: 0.997884 },
          { x: 5064.02, y: 0.998234 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1787.72, y: 0.993224 },
          { x: 2208.30, y: 0.994873 },
          { x: 2714.27, y: 0.99608 },
          { x: 3235.64, y: 0.996856 },
          { x: 3753.56, y: 0.997381 },
          { x: 4396.02, y: 0.997878 },
          { x: 5087.14, y: 0.99823 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1846.90, y: 0.994392 },
          { x: 2324.83, y: 0.995863 },
          { x: 2947.59, y: 0.996981 },
          { x: 3613.60, y: 0.997691 },
          { x: 4265.40, y: 0.99813 },
          { x: 5011.65, y: 0.998486 },
          { x: 5866.71, y: 0.998753 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1954.18, y: 0.994316 },
          { x: 2464.34, y: 0.995806 },
          { x: 3129.23, y: 0.996948 },
          { x: 3837.39, y: 0.997665 },
          { x: 4534.00, y: 0.998111 },
          { x: 5324.84, y: 0.99847 },
          { x: 6222.99, y: 0.998735 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 2398.26, y: 0.990975 },
          { x: 2935.62, y: 0.993647 },
          { x: 3661.42, y: 0.995388 },
          { x: 4518.15, y: 0.996712 },
          { x: 5372.39, y: 0.997517 },
          { x: 6371.12, y: 0.998074 },
          { x: 7215.96, y: 0.998447 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2450.96, y: 0.990746 },
          { x: 2993.03, y: 0.993493 },
          { x: 3721.15, y: 0.995266 },
          { x: 4584.66, y: 0.996617 },
          { x: 5454.23, y: 0.997447 },
          { x: 6438.07, y: 0.998007 },
          { x: 7301.61, y: 0.998394 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 1617.19, y: 0.991508 },
          { x: 2021.25, y: 0.993537 },
          { x: 2525.83, y: 0.995074 },
          { x: 3013.89, y: 0.996008 },
          { x: 3519.49, y: 0.996667 },
          { x: 4105.69, y: 0.99724 },
          { x: 4770.54, y: 0.997682 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1737.44, y: 0.991489 },
          { x: 2143.40, y: 0.993519 },
          { x: 2651.06, y: 0.995091 },
          { x: 3143.25, y: 0.996025 },
          { x: 3645.89, y: 0.996677 },
          { x: 4236.89, y: 0.997258 },
          { x: 4903.76, y: 0.997697 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 2310.32, y: 0.989984 },
          { x: 2839.27, y: 0.992841 },
          { x: 3562.43, y: 0.994704 },
          { x: 4447.17, y: 0.996213 },
          { x: 5287.73, y: 0.997133 },
          { x: 6320.17, y: 0.997724 },
          { x: 7108.74, y: 0.998132 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.20, y: 0.989804 },
          { x: 2876.75, y: 0.992709 },
          { x: 3606.26, y: 0.994596 },
          { x: 4502.41, y: 0.996133 },
          { x: 5361.44, y: 0.997078 },
          { x: 6396.33, y: 0.997678 },
          { x: 7198.58, y: 0.998099 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1584.46, y: 0.991311 },
          { x: 2071.68, y: 0.993785 },
          { x: 2593.05, y: 0.995339 },
          { x: 3107.55, y: 0.99634 },
          { x: 3665.11, y: 0.997023 },
          { x: 4359.45, y: 0.997637 },
          { x: 5093.53, y: 0.998084 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1607.85, y: 0.991294 },
          { x: 2098.54, y: 0.993768 },
          { x: 2622.52, y: 0.995327 },
          { x: 3137.78, y: 0.996326 },
          { x: 3694.49, y: 0.997011 },
          { x: 4383.32, y: 0.997626 },
          { x: 5108.19, y: 0.998072 }
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
        min: 0.98,
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

var ctx_t1_20241223_bitrate_ms_ssim_data = document.getElementById('chart_t1_20241223_bitrate_ms_ssim');
const chart_t1_20241223_bitrate_ms_ssim_data = new Chart(ctx_t1_20241223_bitrate_ms_ssim_data,
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
          { x: 6723.26, y: 0.998115 },
          { x: 4297.34, y: 0.996698 },
          { x: 2758.00, y: 0.994062 },
          { x: 1789.04, y: 0.989251 },
          { x: 1196.61, y: 0.980665 },
          { x: 815.70, y: 0.965139 }
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
          { x: 5864.37, y: 0.995008 },
          { x: 3739.81, y: 0.994724 },
          { x: 2417.55, y: 0.992579 },
          { x: 1572.95, y: 0.988095 },
          { x: 1061.48, y: 0.979958 },
          { x: 735.36, y: 0.965644 }
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
          { x: 7952.01, y: 0.998629 },
          { x: 4955.72, y: 0.997801 },
          { x: 3091.93, y: 0.996393 },
          { x: 1925.04, y: 0.993934 },
          { x: 1192.35, y: 0.989576 },
          { x: 744.75, y: 0.981917 },
          { x: 465.87, y: 0.968871 }
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
          { x: 7793.56, y: 0.998883 },
          { x: 4866.57, y: 0.998129 },
          { x: 3047.20, y: 0.996784 },
          { x: 1896.93, y: 0.99435 },
          { x: 1173.26, y: 0.990005 },
          { x: 733.48, y: 0.982413 },
          { x: 458.42, y: 0.969507 }
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
          { x: 8064.40, y: 0.998955 },
          { x: 4995.34, y: 0.998317 },
          { x: 3142.57, y: 0.997266 },
          { x: 1972.09, y: 0.995458 },
          { x: 1225.19, y: 0.992292 },
          { x: 753.09, y: 0.986874 },
          { x: 449.37, y: 0.977722 }
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
          { x: 8056.42, y: 0.999131 },
          { x: 5017.69, y: 0.998568 },
          { x: 3165.74, y: 0.99759 },
          { x: 1990.87, y: 0.995855 },
          { x: 1241.85, y: 0.992789 },
          { x: 763.69, y: 0.987467 },
          { x: 454.11, y: 0.978554 }
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
          { x: 6365.60, y: 0.998616 },
          { x: 5220.48, y: 0.998378 },
          { x: 4398.78, y: 0.998129 },
          { x: 3493.53, y: 0.997695 },
          { x: 2751.10, y: 0.997137 },
          { x: 2147.26, y: 0.996411 },
          { x: 1673.62, y: 0.995487 }
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
          { x: 6454.79, y: 0.998864 },
          { x: 5180.47, y: 0.99862 },
          { x: 4312.63, y: 0.998371 },
          { x: 3425.17, y: 0.997951 },
          { x: 2707.60, y: 0.997404 },
          { x: 2122.82, y: 0.996679 },
          { x: 1661.80, y: 0.995793 }
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
          { x: 7091.96, y: 0.99848 },
          { x: 5834.18, y: 0.99822 },
          { x: 4938.35, y: 0.997959 },
          { x: 3918.69, y: 0.997485 },
          { x: 3064.90, y: 0.996851 },
          { x: 2360.05, y: 0.996016 },
          { x: 1816.27, y: 0.995016 }
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
          { x: 7305.05, y: 0.998745 },
          { x: 5871.19, y: 0.99847 },
          { x: 4910.43, y: 0.9982 },
          { x: 3888.38, y: 0.997735 },
          { x: 3042.21, y: 0.997113 },
          { x: 2345.65, y: 0.996296 },
          { x: 1811.47, y: 0.995324 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7140.42, y: 0.997439 },
          { x: 5965.97, y: 0.997072 },
          { x: 4639.91, y: 0.996419 },
          { x: 3544.62, y: 0.995557 },
          { x: 2698.04, y: 0.994406 },
          { x: 2029.74, y: 0.992969 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7224.40, y: 0.997705 },
          { x: 5974.01, y: 0.997334 },
          { x: 4647.73, y: 0.996727 },
          { x: 3536.82, y: 0.995834 },
          { x: 2689.06, y: 0.994714 },
          { x: 2028.23, y: 0.993246 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6608.89, y: 0.998353 },
          { x: 5084.70, y: 0.997834 },
          { x: 3528.15, y: 0.99685 },
          { x: 2248.03, y: 0.995021 },
          { x: 1348.18, y: 0.991303 },
          { x: 810.76, y: 0.984621 },
          { x: 482.89, y: 0.972358 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6693.02, y: 0.998301 },
          { x: 5155.38, y: 0.997758 },
          { x: 3573.09, y: 0.996743 },
          { x: 2274.51, y: 0.994852 },
          { x: 1369.38, y: 0.991028 },
          { x: 825.67, y: 0.984076 },
          { x: 496.51, y: 0.971464 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7437.67, y: 0.998713 },
          { x: 5356.17, y: 0.998223 },
          { x: 3580.23, y: 0.997218 },
          { x: 2257.92, y: 0.995368 },
          { x: 1352.90, y: 0.991669 },
          { x: 811.76, y: 0.984981 },
          { x: 483.22, y: 0.972637 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7542.40, y: 0.998686 },
          { x: 5421.58, y: 0.99817 },
          { x: 3626.36, y: 0.997127 },
          { x: 2289.79, y: 0.995211 },
          { x: 1374.44, y: 0.991388 },
          { x: 826.23, y: 0.984415 },
          { x: 496.33, y: 0.971815 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 6777.39, y: 0.997978 },
          { x: 4846.31, y: 0.996991 },
          { x: 3869.87, y: 0.996022 },
          { x: 2474.28, y: 0.99311 },
          { x: 1653.30, y: 0.988473 },
          { x: 1160.25, y: 0.98152 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7071.56, y: 0.997888 },
          { x: 5021.89, y: 0.99687 },
          { x: 3979.22, y: 0.995844 },
          { x: 2549.93, y: 0.992868 },
          { x: 1716.85, y: 0.988109 },
          { x: 1226.04, y: 0.981131 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 5474.21, y: 0.998017 },
          { x: 3723.49, y: 0.997085 },
          { x: 2841.80, y: 0.996102 },
          { x: 1695.04, y: 0.993185 },
          { x: 1084.76, y: 0.988539 },
          { x: 739.21, y: 0.981111 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5660.77, y: 0.997982 },
          { x: 3854.26, y: 0.997034 },
          { x: 2930.79, y: 0.996031 },
          { x: 1747.18, y: 0.993029 },
          { x: 1116.98, y: 0.988301 },
          { x: 761.49, y: 0.980733 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5400.27, y: 0.998287 },
          { x: 3687.92, y: 0.99741 },
          { x: 2818.86, y: 0.996441 },
          { x: 1685.88, y: 0.993505 },
          { x: 1079.08, y: 0.988761 },
          { x: 734.67, y: 0.981177 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5570.81, y: 0.998249 },
          { x: 3807.66, y: 0.997349 },
          { x: 2906.96, y: 0.996363 },
          { x: 1738.08, y: 0.993347 },
          { x: 1112.19, y: 0.988491 },
          { x: 757.39, y: 0.980748 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 6422.90, y: 0.997612 },
          { x: 5111.40, y: 0.996832 },
          { x: 3350.27, y: 0.994644 },
          { x: 2245.42, y: 0.990786 },
          { x: 1524.43, y: 0.984375 },
          { x: 1010.32, y: 0.972925 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6459.80, y: 0.997525 },
          { x: 5021.88, y: 0.996632 },
          { x: 3314.55, y: 0.994386 },
          { x: 2205.05, y: 0.990327 },
          { x: 1504.22, y: 0.983827 },
          { x: 1019.24, y: 0.972462 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 5968.44, y: 0.998134 },
          { x: 3968.07, y: 0.997207 },
          { x: 2859.49, y: 0.996078 },
          { x: 1708.19, y: 0.993127 },
          { x: 1092.80, y: 0.988443 },
          { x: 748.49, y: 0.98096 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 0.998104 },
          { x: 4089.97, y: 0.997156 },
          { x: 2945.71, y: 0.996008 },
          { x: 1755.95, y: 0.99297 },
          { x: 1118.75, y: 0.988152 },
          { x: 765.70, y: 0.980407 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 0.998403 },
          { x: 3906.13, y: 0.99752 },
          { x: 2835.05, y: 0.996421 },
          { x: 1697.47, y: 0.993448 },
          { x: 1085.75, y: 0.988641 },
          { x: 743.02, y: 0.981029 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 0.998372 },
          { x: 4019.68, y: 0.99747 },
          { x: 2913.10, y: 0.996344 },
          { x: 1740.59, y: 0.993269 },
          { x: 1112.13, y: 0.988328 },
          { x: 761.54, y: 0.98046 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 6258.54, y: 0.998266 },
          { x: 3975.48, y: 0.997208 },
          { x: 2363.24, y: 0.995167 },
          { x: 1383.59, y: 0.99122 },
          { x: 786.86, y: 0.983381 },
          { x: 440.68, y: 0.968654 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6428.66, y: 0.99823 },
          { x: 4089.11, y: 0.997154 },
          { x: 2425.25, y: 0.995042 },
          { x: 1421.49, y: 0.991017 },
          { x: 810.63, y: 0.983003 },
          { x: 454.34, y: 0.967714 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6881.34, y: 0.998602 },
          { x: 4075.01, y: 0.997545 },
          { x: 2375.71, y: 0.995478 },
          { x: 1368.90, y: 0.991425 },
          { x: 786.09, y: 0.983551 },
          { x: 441.69, y: 0.968815 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7068.10, y: 0.998573 },
          { x: 4189.40, y: 0.997493 },
          { x: 2444.31, y: 0.995353 },
          { x: 1414.25, y: 0.99124 },
          { x: 809.74, y: 0.983124 },
          { x: 454.99, y: 0.967773 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6608.19, y: 0.9977 },
          { x: 4249.44, y: 0.996116 },
          { x: 2721.00, y: 0.993243 },
          { x: 1861.21, y: 0.988649 },
          { x: 1296.14, y: 0.981371 },
          { x: 950.58, y: 0.969926 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 0.997665 },
          { x: 4362.03, y: 0.996136 },
          { x: 2813.46, y: 0.993337 },
          { x: 1937.03, y: 0.989077 },
          { x: 1344.50, y: 0.982069 },
          { x: 962.49, y: 0.970217 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 6213.53, y: 0.99802 },
          { x: 4145.39, y: 0.997056 },
          { x: 3004.77, y: 0.9959 },
          { x: 1792.40, y: 0.99284 },
          { x: 1142.37, y: 0.987975 },
          { x: 784.67, y: 0.980223 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6379.52, y: 0.998032 },
          { x: 4295.35, y: 0.997108 },
          { x: 3139.78, y: 0.996027 },
          { x: 1921.30, y: 0.993294 },
          { x: 1247.39, y: 0.988994 },
          { x: 856.91, y: 0.981992 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 0.998321 },
          { x: 4062.71, y: 0.997405 },
          { x: 2964.40, y: 0.996261 },
          { x: 1772.45, y: 0.993158 },
          { x: 1134.62, y: 0.988165 },
          { x: 779.22, y: 0.980291 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6206.55, y: 0.998336 },
          { x: 4198.75, y: 0.997459 },
          { x: 3092.57, y: 0.996389 },
          { x: 1902.43, y: 0.993621 },
          { x: 1238.93, y: 0.989195 },
          { x: 853.19, y: 0.98213 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 6539.43, y: 0.997702 },
          { x: 4200.88, y: 0.99612 },
          { x: 2687.33, y: 0.993261 },
          { x: 1839.67, y: 0.988688 },
          { x: 1284.20, y: 0.981454 },
          { x: 944.45, y: 0.970062 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 0.997665 },
          { x: 4362.03, y: 0.996136 },
          { x: 2813.46, y: 0.993337 },
          { x: 1937.03, y: 0.989077 },
          { x: 1344.50, y: 0.982069 },
          { x: 962.49, y: 0.970217 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 5482.55, y: 0.9979 },
          { x: 3736.71, y: 0.996974 },
          { x: 2327.88, y: 0.995085 },
          { x: 1454.51, y: 0.991808 },
          { x: 966.38, y: 0.987 },
          { x: 620.31, y: 0.978033 },
          { x: 432.86, y: 0.965402 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6778.85, y: 0.998153 },
          { x: 4543.28, y: 0.99727 },
          { x: 2868.01, y: 0.995532 },
          { x: 1817.97, y: 0.992503 },
          { x: 1177.23, y: 0.987703 },
          { x: 748.12, y: 0.978693 },
          { x: 503.96, y: 0.9652 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6257.21, y: 0.998413 },
          { x: 4205.18, y: 0.997591 },
          { x: 2671.13, y: 0.995922 },
          { x: 1695.86, y: 0.992996 },
          { x: 1101.74, y: 0.988269 },
          { x: 706.45, y: 0.979724 },
          { x: 480.67, y: 0.967107 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6655.15, y: 0.9984 },
          { x: 4471.96, y: 0.997561 },
          { x: 2839.63, y: 0.995849 },
          { x: 1802.23, y: 0.992805 },
          { x: 1170.29, y: 0.987894 },
          { x: 744.56, y: 0.978846 },
          { x: 501.18, y: 0.965342 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 6554.43, y: 0.997672 },
          { x: 4214.81, y: 0.996071 },
          { x: 2695.47, y: 0.993147 },
          { x: 1845.45, y: 0.988502 },
          { x: 1291.24, y: 0.981211 },
          { x: 961.73, y: 0.969969 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.35, y: 0.997665 },
          { x: 4362.61, y: 0.996137 },
          { x: 2813.25, y: 0.993338 },
          { x: 1937.58, y: 0.98908 },
          { x: 1349.13, y: 0.982105 },
          { x: 977.61, y: 0.970556 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6266.00, y: 0.997167 },
          { x: 3890.91, y: 0.995365 },
          { x: 2464.50, y: 0.992291 },
          { x: 1630.75, y: 0.987245 },
          { x: 1148.68, y: 0.980269 },
          { x: 838.81, y: 0.968687 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.59, y: 0.99716 },
          { x: 3918.10, y: 0.995349 },
          { x: 2489.78, y: 0.992254 },
          { x: 1655.11, y: 0.987161 },
          { x: 1173.40, y: 0.980103 },
          { x: 862.74, y: 0.96833 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 0.997451 },
          { x: 3807.65, y: 0.995694 },
          { x: 2438.16, y: 0.992625 },
          { x: 1616.83, y: 0.987603 },
          { x: 1140.02, y: 0.980642 },
          { x: 834.34, y: 0.968982 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 0.997444 },
          { x: 3834.12, y: 0.995669 },
          { x: 2468.93, y: 0.992588 },
          { x: 1645.50, y: 0.987542 },
          { x: 1167.40, y: 0.98048 },
          { x: 859.27, y: 0.968675 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6259.15, y: 0.997371 },
          { x: 3966.41, y: 0.995464 },
          { x: 2532.91, y: 0.992076 },
          { x: 1761.19, y: 0.98694 },
          { x: 1255.42, y: 0.979342 },
          { x: 955.98, y: 0.966605 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6393.28, y: 0.997341 },
          { x: 4069.85, y: 0.995484 },
          { x: 2621.75, y: 0.992196 },
          { x: 1824.39, y: 0.987242 },
          { x: 1304.37, y: 0.979951 },
          { x: 1009.64, y: 0.967637 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 6148.13, y: 0.997222 },
          { x: 3891.15, y: 0.995246 },
          { x: 2491.70, y: 0.991747 },
          { x: 1725.76, y: 0.986336 },
          { x: 1244.24, y: 0.97862 },
          { x: 945.00, y: 0.965542 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.08, y: 0.997151 },
          { x: 3895.17, y: 0.995224 },
          { x: 2526.92, y: 0.991852 },
          { x: 1754.03, y: 0.986636 },
          { x: 1272.91, y: 0.979262 },
          { x: 961.37, y: 0.966635 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 6503.17, y: 0.996665 },
          { x: 4066.83, y: 0.994253 },
          { x: 2663.87, y: 0.990092 },
          { x: 1763.49, y: 0.98225 },
          { x: 1183.75, y: 0.969081 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6499.60, y: 0.99666 },
          { x: 4070.44, y: 0.994237 },
          { x: 2668.06, y: 0.990068 },
          { x: 1768.60, y: 0.982199 },
          { x: 1186.42, y: 0.96899 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 7405.71, y: 0.997993 },
          { x: 4626.38, y: 0.996429 },
          { x: 2891.10, y: 0.993802 },
          { x: 1809.07, y: 0.989039 },
          { x: 1170.24, y: 0.980344 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7405.71, y: 0.997993 },
          { x: 4626.38, y: 0.996429 },
          { x: 2891.10, y: 0.993802 },
          { x: 1809.07, y: 0.989039 },
          { x: 1170.24, y: 0.980344 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 6369.28, y: 0.99799 },
          { x: 3932.50, y: 0.996727 },
          { x: 2430.86, y: 0.994665 },
          { x: 1530.74, y: 0.991186 },
          { x: 978.52, y: 0.98529 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.28, y: 0.99799 },
          { x: 3932.50, y: 0.996727 },
          { x: 2430.86, y: 0.994665 },
          { x: 1530.74, y: 0.991186 },
          { x: 978.52, y: 0.98529 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6335.11, y: 0.998233 },
          { x: 3922.08, y: 0.997014 },
          { x: 2418.53, y: 0.994998 },
          { x: 1519.14, y: 0.991555 },
          { x: 965.84, y: 0.985662 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6335.11, y: 0.998233 },
          { x: 3922.08, y: 0.997014 },
          { x: 2418.53, y: 0.994998 },
          { x: 1519.14, y: 0.991555 },
          { x: 965.84, y: 0.985662 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6637.16, y: 0.99807 },
          { x: 4584.36, y: 0.997236 },
          { x: 3204.05, y: 0.996005 },
          { x: 2266.87, y: 0.994242 },
          { x: 1499.15, y: 0.99093 },
          { x: 932.27, y: 0.984264 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6637.16, y: 0.99807 },
          { x: 4584.36, y: 0.997236 },
          { x: 3204.05, y: 0.996005 },
          { x: 2266.87, y: 0.994242 },
          { x: 1499.15, y: 0.99093 },
          { x: 932.27, y: 0.984264 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6401.70, y: 0.998255 },
          { x: 4419.70, y: 0.997451 },
          { x: 3123.03, y: 0.996248 },
          { x: 2225.33, y: 0.994483 },
          { x: 1492.52, y: 0.991238 },
          { x: 928.04, y: 0.984488 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6401.70, y: 0.998255 },
          { x: 4419.70, y: 0.997451 },
          { x: 3123.03, y: 0.996248 },
          { x: 2225.33, y: 0.994483 },
          { x: 1492.52, y: 0.991238 },
          { x: 928.04, y: 0.984488 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7398.66, y: 0.997999 },
          { x: 4619.87, y: 0.996428 },
          { x: 2888.26, y: 0.9938 },
          { x: 1810.53, y: 0.989037 },
          { x: 1173.20, y: 0.980309 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7398.66, y: 0.997999 },
          { x: 4619.87, y: 0.996428 },
          { x: 2888.26, y: 0.9938 },
          { x: 1810.53, y: 0.989037 },
          { x: 1173.20, y: 0.980309 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6363.67, y: 0.997992 },
          { x: 3929.63, y: 0.996723 },
          { x: 2432.29, y: 0.994671 },
          { x: 1533.77, y: 0.991185 },
          { x: 980.71, y: 0.985259 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6363.67, y: 0.997992 },
          { x: 3929.63, y: 0.996723 },
          { x: 2432.29, y: 0.994671 },
          { x: 1533.77, y: 0.991185 },
          { x: 980.71, y: 0.985259 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6330.47, y: 0.998234 },
          { x: 3921.38, y: 0.997013 },
          { x: 2418.53, y: 0.994995 },
          { x: 1519.73, y: 0.991558 },
          { x: 969.27, y: 0.985655 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6330.47, y: 0.998234 },
          { x: 3921.38, y: 0.997013 },
          { x: 2418.53, y: 0.994995 },
          { x: 1519.73, y: 0.991558 },
          { x: 969.27, y: 0.985655 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 7906.51, y: 0.997862 },
          { x: 5009.43, y: 0.996267 },
          { x: 3142.98, y: 0.993449 },
          { x: 2009.98, y: 0.988378 },
          { x: 1303.04, y: 0.978784 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7906.51, y: 0.997862 },
          { x: 5009.43, y: 0.996267 },
          { x: 3142.98, y: 0.993449 },
          { x: 2009.98, y: 0.988378 },
          { x: 1303.04, y: 0.978784 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7903.18, y: 0.99799 },
          { x: 4887.37, y: 0.996685 },
          { x: 3006.13, y: 0.994563 },
          { x: 1869.05, y: 0.991067 },
          { x: 1171.73, y: 0.985196 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7903.18, y: 0.99799 },
          { x: 4887.37, y: 0.996685 },
          { x: 3006.13, y: 0.994563 },
          { x: 1869.05, y: 0.991067 },
          { x: 1171.73, y: 0.985196 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7448.74, y: 0.997968 },
          { x: 4611.80, y: 0.9965 },
          { x: 2827.00, y: 0.993997 },
          { x: 1769.29, y: 0.989679 },
          { x: 1105.97, y: 0.982092 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7448.74, y: 0.997968 },
          { x: 4612.42, y: 0.9965 },
          { x: 2827.00, y: 0.993997 },
          { x: 1769.29, y: 0.989679 },
          { x: 1105.97, y: 0.982092 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 7904.97, y: 0.997864 },
          { x: 5007.80, y: 0.996269 },
          { x: 3149.23, y: 0.993471 },
          { x: 2011.67, y: 0.988385 },
          { x: 1303.15, y: 0.978801 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7904.97, y: 0.997864 },
          { x: 5007.80, y: 0.996269 },
          { x: 3149.23, y: 0.993471 },
          { x: 2011.67, y: 0.988385 },
          { x: 1303.15, y: 0.978801 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7975.41, y: 0.997849 },
          { x: 4928.05, y: 0.996477 },
          { x: 3024.11, y: 0.994277 },
          { x: 1888.56, y: 0.99079 },
          { x: 1178.32, y: 0.984841 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7975.41, y: 0.997849 },
          { x: 4928.05, y: 0.996477 },
          { x: 3024.11, y: 0.994277 },
          { x: 1888.56, y: 0.99079 },
          { x: 1178.32, y: 0.984841 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 2310.36, y: 0.987861 },
          { x: 2839.31, y: 0.991006 },
          { x: 3562.48, y: 0.993065 },
          { x: 4447.24, y: 0.994831 },
          { x: 5287.80, y: 0.996022 },
          { x: 6320.24, y: 0.996735 },
          { x: 7108.83, y: 0.99727 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.22, y: 0.987628 },
          { x: 2876.54, y: 0.990822 },
          { x: 3606.19, y: 0.992907 },
          { x: 4502.61, y: 0.994708 },
          { x: 5361.50, y: 0.995932 },
          { x: 6396.19, y: 0.996658 },
          { x: 7198.57, y: 0.997211 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1780.48, y: 0.991384 },
          { x: 2199.88, y: 0.993266 },
          { x: 2704.70, y: 0.994653 },
          { x: 3224.10, y: 0.995634 },
          { x: 3739.93, y: 0.996287 },
          { x: 4379.31, y: 0.996887 },
          { x: 5064.02, y: 0.997357 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1787.72, y: 0.991366 },
          { x: 2208.30, y: 0.99325 },
          { x: 2714.27, y: 0.994639 },
          { x: 3235.64, y: 0.995624 },
          { x: 3753.56, y: 0.996279 },
          { x: 4396.02, y: 0.996877 },
          { x: 5087.14, y: 0.997351 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1846.90, y: 0.99271 },
          { x: 2324.83, y: 0.994422 },
          { x: 2947.59, y: 0.995766 },
          { x: 3613.60, y: 0.996639 },
          { x: 4265.40, y: 0.997216 },
          { x: 5011.65, y: 0.997674 },
          { x: 5866.71, y: 0.998039 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1954.18, y: 0.992485 },
          { x: 2464.34, y: 0.994253 },
          { x: 3129.23, y: 0.995653 },
          { x: 3837.39, y: 0.996549 },
          { x: 4534.00, y: 0.997146 },
          { x: 5324.84, y: 0.997618 },
          { x: 6222.99, y: 0.997989 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 2398.26, y: 0.988929 },
          { x: 2935.62, y: 0.991888 },
          { x: 3661.42, y: 0.993815 },
          { x: 4518.15, y: 0.995387 },
          { x: 5372.39, y: 0.996443 },
          { x: 6371.12, y: 0.997112 },
          { x: 7215.96, y: 0.997601 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2450.96, y: 0.988624 },
          { x: 2993.03, y: 0.991667 },
          { x: 3721.15, y: 0.993636 },
          { x: 4584.66, y: 0.995245 },
          { x: 5454.23, y: 0.996334 },
          { x: 6438.07, y: 0.99701 },
          { x: 7301.61, y: 0.997518 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 1617.19, y: 0.989507 },
          { x: 2021.25, y: 0.991793 },
          { x: 2525.83, y: 0.993514 },
          { x: 3013.89, y: 0.994665 },
          { x: 3519.49, y: 0.995464 },
          { x: 4105.69, y: 0.996148 },
          { x: 4770.54, y: 0.996715 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1737.44, y: 0.989498 },
          { x: 2143.40, y: 0.991783 },
          { x: 2651.06, y: 0.993531 },
          { x: 3143.25, y: 0.994682 },
          { x: 3645.89, y: 0.995475 },
          { x: 4236.89, y: 0.996164 },
          { x: 4903.76, y: 0.99673 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 2310.32, y: 0.98786 },
          { x: 2839.27, y: 0.991006 },
          { x: 3562.43, y: 0.993065 },
          { x: 4447.17, y: 0.994831 },
          { x: 5287.73, y: 0.996022 },
          { x: 6320.17, y: 0.996735 },
          { x: 7108.74, y: 0.99727 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.20, y: 0.987627 },
          { x: 2876.75, y: 0.990822 },
          { x: 3606.26, y: 0.992907 },
          { x: 4502.41, y: 0.994708 },
          { x: 5361.44, y: 0.995932 },
          { x: 6396.33, y: 0.996658 },
          { x: 7198.58, y: 0.997211 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1584.46, y: 0.989244 },
          { x: 2071.68, y: 0.991924 },
          { x: 2593.05, y: 0.99369 },
          { x: 3107.55, y: 0.994935 },
          { x: 3665.11, y: 0.995791 },
          { x: 4359.45, y: 0.996533 },
          { x: 5093.53, y: 0.997138 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1607.85, y: 0.989224 },
          { x: 2098.54, y: 0.991906 },
          { x: 2622.52, y: 0.993675 },
          { x: 3137.78, y: 0.994919 },
          { x: 3694.49, y: 0.995774 },
          { x: 4383.32, y: 0.996517 },
          { x: 5108.19, y: 0.99712 }
        ]
      },
    ],
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
        min: 0.98,
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

var ctx_t1_20241223_bitrate_vmaf_data = document.getElementById('chart_t1_20241223_bitrate_vmaf');
const chart_t1_20241223_bitrate_vmaf_data = new Chart(ctx_t1_20241223_bitrate_vmaf_data,
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
          { x: 6723.26, y: 97.982675 },
          { x: 4297.34, y: 96.348598 },
          { x: 2758.00, y: 92.901989 },
          { x: 1789.04, y: 86.641654 },
          { x: 1196.61, y: 76.816868 },
          { x: 815.70, y: 63.575232 }
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
          { x: 5864.37, y: 97.698715 },
          { x: 3739.81, y: 96.210102 },
          { x: 2417.55, y: 93.007998 },
          { x: 1572.95, y: 86.951785 },
          { x: 1061.48, y: 77.489864 },
          { x: 735.36, y: 64.854591 }
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
          { x: 7793.56, y: 98.718447 },
          { x: 4866.57, y: 98.100038 },
          { x: 3047.20, y: 96.762978 },
          { x: 1896.93, y: 93.949441 },
          { x: 1173.26, y: 88.738661 },
          { x: 733.48, y: 80.255563 },
          { x: 458.42, y: 68.17867 }
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
          { x: 8064.40, y: 98.95547 },
          { x: 4995.34, y: 98.597265 },
          { x: 3142.57, y: 97.850987 },
          { x: 1972.09, y: 96.239122 },
          { x: 1225.19, y: 92.869013 },
          { x: 753.09, y: 86.943181 },
          { x: 449.37, y: 77.494858 }
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
          { x: 8056.42, y: 99.004875 },
          { x: 5017.69, y: 98.700707 },
          { x: 3165.74, y: 98.027022 },
          { x: 1990.87, y: 96.547379 },
          { x: 1241.85, y: 93.37035 },
          { x: 763.69, y: 87.531847 },
          { x: 454.11, y: 78.19938 }
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
          { x: 6365.60, y: 98.769302 },
          { x: 5220.48, y: 98.625346 },
          { x: 4398.78, y: 98.471383 },
          { x: 3493.53, y: 98.169461 },
          { x: 2751.10, y: 97.733287 },
          { x: 2147.26, y: 97.098659 },
          { x: 1673.62, y: 96.23246 }
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
          { x: 6454.79, y: 98.838312 },
          { x: 5180.47, y: 98.691489 },
          { x: 4312.63, y: 98.533283 },
          { x: 3425.17, y: 98.233401 },
          { x: 2707.60, y: 97.794676 },
          { x: 2122.82, y: 97.159494 },
          { x: 1661.80, y: 96.29596 }
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
          { x: 7091.96, y: 98.666193 },
          { x: 5834.18, y: 98.513933 },
          { x: 4938.35, y: 98.344609 },
          { x: 3918.69, y: 98.007677 },
          { x: 3064.90, y: 97.484154 },
          { x: 2360.05, y: 96.75381 },
          { x: 1816.27, y: 95.780668 }
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
          { x: 7305.05, y: 98.742915 },
          { x: 5871.19, y: 98.574036 },
          { x: 4910.43, y: 98.395707 },
          { x: 3888.38, y: 98.056104 },
          { x: 3042.21, y: 97.529684 },
          { x: 2345.65, y: 96.799764 },
          { x: 1811.47, y: 95.852993 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7140.42, y: 97.955225 },
          { x: 5965.97, y: 97.669412 },
          { x: 4639.91, y: 97.074766 },
          { x: 3544.62, y: 96.212635 },
          { x: 2698.04, y: 95.008917 },
          { x: 2029.74, y: 93.464477 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7224.40, y: 97.961837 },
          { x: 5974.01, y: 97.664879 },
          { x: 4647.73, y: 97.055146 },
          { x: 3536.82, y: 96.173321 },
          { x: 2689.06, y: 94.994577 },
          { x: 2028.23, y: 93.399696 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6608.89, y: 98.374547 },
          { x: 5084.70, y: 97.943043 },
          { x: 3528.15, y: 96.980967 },
          { x: 2248.03, y: 94.909181 },
          { x: 1348.18, y: 90.451589 },
          { x: 810.76, y: 82.804045 },
          { x: 482.89, y: 70.795035 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6693.02, y: 98.332972 },
          { x: 5155.38, y: 97.872307 },
          { x: 3573.09, y: 96.873212 },
          { x: 2274.51, y: 94.708666 },
          { x: 1369.38, y: 90.064618 },
          { x: 825.67, y: 82.117148 },
          { x: 496.51, y: 69.792334 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7437.67, y: 98.507956 },
          { x: 5356.17, y: 98.083482 },
          { x: 3580.23, y: 97.076619 },
          { x: 2257.92, y: 94.967737 },
          { x: 1352.90, y: 90.530134 },
          { x: 811.76, y: 82.860468 },
          { x: 483.22, y: 70.719252 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7542.40, y: 98.479289 },
          { x: 5421.58, y: 98.031926 },
          { x: 3626.36, y: 96.977518 },
          { x: 2289.79, y: 94.793657 },
          { x: 1374.44, y: 90.176637 },
          { x: 826.23, y: 82.140159 },
          { x: 496.33, y: 69.883739 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 6777.39, y: 98.284201 },
          { x: 4846.31, y: 97.422488 },
          { x: 3869.87, y: 96.52982 },
          { x: 2474.28, y: 93.461806 },
          { x: 1653.30, y: 88.323919 },
          { x: 1160.25, y: 80.74112 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7071.56, y: 98.100261 },
          { x: 5021.89, y: 97.148097 },
          { x: 3979.22, y: 96.121916 },
          { x: 2549.93, y: 92.860394 },
          { x: 1716.85, y: 87.50745 },
          { x: 1226.04, y: 80.071555 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 5474.21, y: 98.336365 },
          { x: 3723.49, y: 97.600236 },
          { x: 2841.80, y: 96.73165 },
          { x: 1695.04, y: 93.761832 },
          { x: 1084.76, y: 88.575888 },
          { x: 739.21, y: 80.492936 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5660.77, y: 98.300418 },
          { x: 3854.26, y: 97.545883 },
          { x: 2930.79, y: 96.661239 },
          { x: 1747.18, y: 93.607471 },
          { x: 1116.98, y: 88.320985 },
          { x: 761.49, y: 80.132869 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5400.27, y: 98.371156 },
          { x: 3687.92, y: 97.644987 },
          { x: 2818.86, y: 96.78056 },
          { x: 1685.88, y: 93.741083 },
          { x: 1079.08, y: 88.334178 },
          { x: 734.67, y: 80.124437 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5570.81, y: 98.336743 },
          { x: 3807.66, y: 97.597552 },
          { x: 2906.96, y: 96.719074 },
          { x: 1738.08, y: 93.602547 },
          { x: 1112.19, y: 88.095418 },
          { x: 757.39, y: 79.771879 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 6422.90, y: 97.901369 },
          { x: 5111.40, y: 97.290167 },
          { x: 3350.27, y: 95.155357 },
          { x: 2245.42, y: 91.033174 },
          { x: 1524.43, y: 84.291726 },
          { x: 1010.32, y: 73.484835 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6459.80, y: 97.621931 },
          { x: 5021.88, y: 96.804702 },
          { x: 3314.55, y: 94.455828 },
          { x: 2205.05, y: 89.93039 },
          { x: 1504.22, y: 83.063818 },
          { x: 1019.24, y: 72.827799 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
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
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
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
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 98.433519 },
          { x: 3906.13, y: 97.708848 },
          { x: 2835.05, y: 96.75525 },
          { x: 1697.47, y: 93.676717 },
          { x: 1085.75, y: 88.20648 },
          { x: 743.02, y: 79.893351 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 98.403481 },
          { x: 4019.68, y: 97.657251 },
          { x: 2913.10, y: 96.678647 },
          { x: 1740.59, y: 93.504238 },
          { x: 1112.13, y: 87.939684 },
          { x: 761.54, y: 79.504682 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 6258.54, y: 98.275137 },
          { x: 3975.48, y: 97.210628 },
          { x: 2363.24, y: 94.874676 },
          { x: 1383.59, y: 90.207686 },
          { x: 786.86, y: 81.388068 },
          { x: 440.68, y: 68.095527 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6428.66, y: 98.244808 },
          { x: 4089.11, y: 97.164696 },
          { x: 2425.25, y: 94.742739 },
          { x: 1421.49, y: 89.97826 },
          { x: 810.63, y: 80.997549 },
          { x: 454.34, y: 67.332162 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6881.34, y: 98.500383 },
          { x: 4075.01, y: 97.430218 },
          { x: 2375.71, y: 95.072354 },
          { x: 1368.90, y: 90.394515 },
          { x: 786.09, y: 81.514273 },
          { x: 441.69, y: 68.244232 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7068.10, y: 98.477253 },
          { x: 4189.40, y: 97.395193 },
          { x: 2444.31, y: 94.971471 },
          { x: 1414.25, y: 90.199893 },
          { x: 809.74, y: 81.094028 },
          { x: 454.99, y: 67.353958 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6608.19, y: 97.819853 },
          { x: 4249.44, y: 96.047207 },
          { x: 2721.00, y: 92.461515 },
          { x: 1861.21, y: 86.748264 },
          { x: 1296.14, y: 79.108978 },
          { x: 950.58, y: 68.382065 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 97.590985 },
          { x: 4362.03, y: 95.802757 },
          { x: 2813.46, y: 92.325188 },
          { x: 1937.03, y: 87.124157 },
          { x: 1344.50, y: 79.666896 },
          { x: 962.49, y: 68.575817 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6379.52, y: 98.275409 },
          { x: 4295.35, y: 97.47636 },
          { x: 3139.78, y: 96.48772 },
          { x: 1921.30, y: 93.422026 },
          { x: 1247.39, y: 88.337457 },
          { x: 856.91, y: 80.432221 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 98.357364 },
          { x: 4062.71, y: 97.57265 },
          { x: 2964.40, y: 96.552868 },
          { x: 1772.45, y: 93.250507 },
          { x: 1134.62, y: 87.490602 },
          { x: 779.22, y: 78.791231 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6206.55, y: 98.313397 },
          { x: 4198.75, y: 97.526396 },
          { x: 3092.57, y: 96.52207 },
          { x: 1902.43, y: 93.4069 },
          { x: 1238.93, y: 88.088725 },
          { x: 853.19, y: 80.148716 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 6539.43, y: 97.824183 },
          { x: 4200.88, y: 96.056623 },
          { x: 2687.33, y: 92.491403 },
          { x: 1839.67, y: 86.781647 },
          { x: 1284.20, y: 79.171991 },
          { x: 944.45, y: 68.488661 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 97.590985 },
          { x: 4362.03, y: 95.802757 },
          { x: 2813.46, y: 92.325188 },
          { x: 1937.03, y: 87.124157 },
          { x: 1344.50, y: 79.666896 },
          { x: 962.49, y: 68.575817 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 5482.55, y: 97.95669 },
          { x: 3736.71, y: 97.002696 },
          { x: 2327.88, y: 94.85969 },
          { x: 1454.51, y: 90.974889 },
          { x: 966.38, y: 85.450345 },
          { x: 620.31, y: 76.345604 },
          { x: 432.86, y: 65.652854 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6778.85, y: 98.205015 },
          { x: 4543.28, y: 97.301214 },
          { x: 2868.01, y: 95.335584 },
          { x: 1817.97, y: 91.611993 },
          { x: 1177.23, y: 85.823599 },
          { x: 748.12, y: 76.388607 },
          { x: 503.96, y: 64.797819 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6257.21, y: 98.285726 },
          { x: 4205.18, y: 97.411825 },
          { x: 2671.13, y: 95.491844 },
          { x: 1695.86, y: 91.816394 },
          { x: 1101.74, y: 86.083934 },
          { x: 706.45, y: 76.92076 },
          { x: 480.67, y: 65.565511 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6655.15, y: 98.265379 },
          { x: 4471.96, y: 97.369733 },
          { x: 2839.63, y: 95.370139 },
          { x: 1802.23, y: 91.55861 },
          { x: 1170.29, y: 85.634365 },
          { x: 744.56, y: 76.296372 },
          { x: 501.18, y: 64.767193 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 6554.43, y: 97.811178 },
          { x: 4214.81, y: 96.030199 },
          { x: 2695.47, y: 92.40592 },
          { x: 1845.45, y: 86.622649 },
          { x: 1291.24, y: 78.967941 },
          { x: 961.73, y: 68.227398 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.35, y: 97.590677 },
          { x: 4362.61, y: 95.802975 },
          { x: 2813.25, y: 92.327483 },
          { x: 1937.58, y: 87.133525 },
          { x: 1349.13, y: 79.652724 },
          { x: 977.61, y: 68.634908 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6266.00, y: 97.345845 },
          { x: 3890.91, y: 95.385724 },
          { x: 2464.50, y: 91.685062 },
          { x: 1630.75, y: 85.62911 },
          { x: 1148.68, y: 78.259066 },
          { x: 838.81, y: 67.983359 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.59, y: 97.357285 },
          { x: 3918.10, y: 95.391995 },
          { x: 2489.78, y: 91.672796 },
          { x: 1655.11, y: 85.617892 },
          { x: 1173.40, y: 78.236158 },
          { x: 862.74, y: 67.984453 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 97.350755 },
          { x: 3807.65, y: 95.38316 },
          { x: 2438.16, y: 91.663839 },
          { x: 1616.83, y: 85.60676 },
          { x: 1140.02, y: 78.241692 },
          { x: 834.34, y: 67.931181 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 97.363277 },
          { x: 3834.12, y: 95.386892 },
          { x: 2468.93, y: 91.664902 },
          { x: 1645.50, y: 85.607029 },
          { x: 1167.40, y: 78.220756 },
          { x: 859.27, y: 67.869849 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6259.15, y: 97.556639 },
          { x: 3966.41, y: 95.531496 },
          { x: 2532.91, y: 91.559969 },
          { x: 1761.19, y: 85.836684 },
          { x: 1255.42, y: 78.616681 },
          { x: 955.98, y: 68.313752 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6393.28, y: 97.287773 },
          { x: 4069.85, y: 95.240337 },
          { x: 2621.75, y: 91.406968 },
          { x: 1824.39, y: 85.869369 },
          { x: 1304.37, y: 79.032005 },
          { x: 1009.64, y: 69.106047 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 6148.13, y: 97.412079 },
          { x: 3891.15, y: 95.292661 },
          { x: 2491.70, y: 91.265576 },
          { x: 1725.76, y: 85.297122 },
          { x: 1244.24, y: 78.118337 },
          { x: 945.00, y: 67.733483 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.08, y: 97.108484 },
          { x: 3895.17, y: 95.013153 },
          { x: 2526.92, y: 91.160974 },
          { x: 1754.03, y: 85.377668 },
          { x: 1272.91, y: 78.598598 },
          { x: 961.37, y: 68.558569 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 6503.17, y: 97.16193 },
          { x: 4066.83, y: 94.622053 },
          { x: 2663.87, y: 90.171991 },
          { x: 1763.49, y: 82.663509 },
          { x: 1183.75, y: 70.915228 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6499.60, y: 97.156125 },
          { x: 4070.44, y: 94.614662 },
          { x: 2668.06, y: 90.138838 },
          { x: 1768.60, y: 82.592368 },
          { x: 1186.42, y: 70.867841 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 7405.71, y: 98.515194 },
          { x: 4626.38, y: 97.322863 },
          { x: 2891.10, y: 94.64983 },
          { x: 1809.07, y: 89.401486 },
          { x: 1170.24, y: 80.684502 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7405.71, y: 98.515194 },
          { x: 4626.38, y: 97.322863 },
          { x: 2891.10, y: 94.64983 },
          { x: 1809.07, y: 89.401486 },
          { x: 1170.24, y: 80.684502 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 6369.28, y: 98.455533 },
          { x: 3932.50, y: 97.516733 },
          { x: 2430.86, y: 95.466007 },
          { x: 1530.74, y: 91.42533 },
          { x: 978.52, y: 84.751379 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.28, y: 98.455533 },
          { x: 3932.50, y: 97.516733 },
          { x: 2430.86, y: 95.466007 },
          { x: 1530.74, y: 91.42533 },
          { x: 978.52, y: 84.751379 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6335.11, y: 98.526949 },
          { x: 3922.08, y: 97.616007 },
          { x: 2418.53, y: 95.621128 },
          { x: 1519.14, y: 91.628422 },
          { x: 965.84, y: 84.887671 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6335.11, y: 98.526949 },
          { x: 3922.08, y: 97.616007 },
          { x: 2418.53, y: 95.621128 },
          { x: 1519.14, y: 91.628422 },
          { x: 965.84, y: 84.887671 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6637.16, y: 98.607313 },
          { x: 4584.36, y: 98.081238 },
          { x: 3204.05, y: 97.120915 },
          { x: 2266.87, y: 95.414117 },
          { x: 1499.15, y: 91.776889 },
          { x: 932.27, y: 84.599578 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6637.16, y: 98.607313 },
          { x: 4584.36, y: 98.081238 },
          { x: 3204.05, y: 97.120915 },
          { x: 2266.87, y: 95.414117 },
          { x: 1499.15, y: 91.776889 },
          { x: 932.27, y: 84.599578 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6401.70, y: 98.62252 },
          { x: 4419.70, y: 98.089899 },
          { x: 3123.03, y: 97.136537 },
          { x: 2225.33, y: 95.389656 },
          { x: 1492.52, y: 91.810392 },
          { x: 928.04, y: 84.578483 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6401.70, y: 98.62252 },
          { x: 4419.70, y: 98.089899 },
          { x: 3123.03, y: 97.136537 },
          { x: 2225.33, y: 95.389656 },
          { x: 1492.52, y: 91.810392 },
          { x: 928.04, y: 84.578483 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7398.66, y: 98.521736 },
          { x: 4619.87, y: 97.31934 },
          { x: 2888.26, y: 94.621651 },
          { x: 1810.53, y: 89.388259 },
          { x: 1173.20, y: 80.647865 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7398.66, y: 98.521736 },
          { x: 4619.87, y: 97.31934 },
          { x: 2888.26, y: 94.621651 },
          { x: 1810.53, y: 89.388259 },
          { x: 1173.20, y: 80.647865 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6363.67, y: 98.457234 },
          { x: 3929.63, y: 97.51054 },
          { x: 2432.29, y: 95.469157 },
          { x: 1533.77, y: 91.437665 },
          { x: 980.71, y: 84.720415 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6363.67, y: 98.457234 },
          { x: 3929.63, y: 97.51054 },
          { x: 2432.29, y: 95.469157 },
          { x: 1533.77, y: 91.437665 },
          { x: 980.71, y: 84.720415 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6330.47, y: 98.529778 },
          { x: 3921.38, y: 97.621824 },
          { x: 2418.53, y: 95.613127 },
          { x: 1519.73, y: 91.609808 },
          { x: 969.27, y: 84.903307 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6330.47, y: 98.529778 },
          { x: 3921.38, y: 97.621824 },
          { x: 2418.53, y: 95.613127 },
          { x: 1519.73, y: 91.609808 },
          { x: 969.27, y: 84.903307 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 7906.51, y: 98.446733 },
          { x: 5009.43, y: 97.18115 },
          { x: 3142.98, y: 94.26626 },
          { x: 2009.98, y: 88.824509 },
          { x: 1303.04, y: 79.8561 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7906.51, y: 98.446733 },
          { x: 5009.43, y: 97.18115 },
          { x: 3142.98, y: 94.26626 },
          { x: 2009.98, y: 88.824509 },
          { x: 1303.04, y: 79.8561 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7903.18, y: 98.545028 },
          { x: 4887.37, y: 97.637305 },
          { x: 3006.13, y: 95.58806 },
          { x: 1869.05, y: 91.722305 },
          { x: 1171.73, y: 85.314847 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7903.18, y: 98.545028 },
          { x: 4887.37, y: 97.637305 },
          { x: 3006.13, y: 95.58806 },
          { x: 1869.05, y: 91.722305 },
          { x: 1171.73, y: 85.314847 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7448.74, y: 98.466112 },
          { x: 4611.80, y: 97.35807 },
          { x: 2827.00, y: 94.789775 },
          { x: 1769.29, y: 90.023466 },
          { x: 1105.97, y: 82.044477 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7448.74, y: 98.466112 },
          { x: 4612.42, y: 97.360463 },
          { x: 2827.00, y: 94.789775 },
          { x: 1769.29, y: 90.023466 },
          { x: 1105.97, y: 82.044477 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 7904.97, y: 98.445338 },
          { x: 5007.80, y: 97.185485 },
          { x: 3149.23, y: 94.279926 },
          { x: 2011.67, y: 88.797403 },
          { x: 1303.15, y: 79.82932 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7904.97, y: 98.445338 },
          { x: 5007.80, y: 97.185485 },
          { x: 3149.23, y: 94.279926 },
          { x: 2011.67, y: 88.797403 },
          { x: 1303.15, y: 79.82932 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7975.41, y: 98.646007 },
          { x: 4928.05, y: 97.807326 },
          { x: 3024.11, y: 95.819543 },
          { x: 1888.56, y: 92.010774 },
          { x: 1178.32, y: 85.456988 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7975.41, y: 98.646007 },
          { x: 4928.05, y: 97.807326 },
          { x: 3024.11, y: 95.819543 },
          { x: 1888.56, y: 92.010774 },
          { x: 1178.32, y: 85.456988 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 2310.36, y: 77.869198 },
          { x: 2839.31, y: 82.521034 },
          { x: 3562.48, y: 85.94326 },
          { x: 4447.24, y: 89.361233 },
          { x: 5287.80, y: 92.067251 },
          { x: 6320.24, y: 93.576772 },
          { x: 7108.83, y: 94.905856 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.22, y: 77.33854 },
          { x: 2876.54, y: 82.045727 },
          { x: 3606.19, y: 85.484524 },
          { x: 4502.61, y: 88.99466 },
          { x: 5361.50, y: 91.776205 },
          { x: 6396.19, y: 93.349643 },
          { x: 7198.57, y: 94.725088 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1780.48, y: 87.686352 },
          { x: 2199.88, y: 90.412994 },
          { x: 2704.70, y: 92.465456 },
          { x: 3224.10, y: 94.204987 },
          { x: 3739.93, y: 95.268284 },
          { x: 4379.31, y: 96.170692 },
          { x: 5064.02, y: 96.953277 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1787.72, y: 87.6145 },
          { x: 2208.30, y: 90.355432 },
          { x: 2714.27, y: 92.434166 },
          { x: 3235.64, y: 94.182447 },
          { x: 3753.56, y: 95.248312 },
          { x: 4396.02, y: 96.152531 },
          { x: 5087.14, y: 96.941583 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1846.90, y: 90.265405 },
          { x: 2324.83, y: 92.620798 },
          { x: 2947.59, y: 94.535324 },
          { x: 3613.60, y: 95.72599 },
          { x: 4265.40, y: 96.610001 },
          { x: 5011.65, y: 97.251649 },
          { x: 5866.71, y: 97.705083 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1954.18, y: 89.79774 },
          { x: 2464.34, y: 92.256241 },
          { x: 3129.23, y: 94.272353 },
          { x: 3837.39, y: 95.515552 },
          { x: 4534.00, y: 96.452772 },
          { x: 5324.84, y: 97.130679 },
          { x: 6222.99, y: 97.613485 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 2398.26, y: 79.788753 },
          { x: 2935.62, y: 84.262629 },
          { x: 3661.42, y: 87.460779 },
          { x: 4518.15, y: 90.540328 },
          { x: 5372.39, y: 93.033669 },
          { x: 6371.12, y: 94.382037 },
          { x: 7215.96, y: 95.576979 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2450.96, y: 79.18064 },
          { x: 2993.03, y: 83.74479 },
          { x: 3721.15, y: 86.985374 },
          { x: 4584.66, y: 90.182508 },
          { x: 5454.23, y: 92.745322 },
          { x: 6438.07, y: 94.174558 },
          { x: 7301.61, y: 95.395193 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 1617.19, y: 84.419503 },
          { x: 2021.25, y: 87.687869 },
          { x: 2525.83, y: 90.187168 },
          { x: 3013.89, y: 92.288756 },
          { x: 3519.49, y: 93.647575 },
          { x: 4105.69, y: 94.811251 },
          { x: 4770.54, y: 95.812025 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1737.44, y: 84.322695 },
          { x: 2143.40, y: 87.593208 },
          { x: 2651.06, y: 90.15449 },
          { x: 3143.25, y: 92.261494 },
          { x: 3645.89, y: 93.615821 },
          { x: 4236.89, y: 94.786748 },
          { x: 4903.76, y: 95.803231 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 2310.32, y: 77.868241 },
          { x: 2839.27, y: 82.520401 },
          { x: 3562.43, y: 85.942614 },
          { x: 4447.17, y: 89.360638 },
          { x: 5287.73, y: 92.066441 },
          { x: 6320.17, y: 93.576516 },
          { x: 7108.74, y: 94.905372 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.20, y: 77.33797 },
          { x: 2876.75, y: 82.045342 },
          { x: 3606.26, y: 85.484004 },
          { x: 4502.41, y: 88.994331 },
          { x: 5361.44, y: 91.775657 },
          { x: 6396.33, y: 93.349449 },
          { x: 7198.58, y: 94.724393 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1584.46, y: 84.304665 },
          { x: 2071.68, y: 87.913668 },
          { x: 2593.05, y: 90.530551 },
          { x: 3107.55, y: 92.73681 },
          { x: 3665.11, y: 94.146115 },
          { x: 4359.45, y: 95.330184 },
          { x: 5093.53, y: 96.404355 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1607.85, y: 84.26948 },
          { x: 2098.54, y: 87.88582 },
          { x: 2622.52, y: 90.485603 },
          { x: 3137.78, y: 92.700816 },
          { x: 3694.49, y: 94.115772 },
          { x: 4383.32, y: 95.314962 },
          { x: 5108.19, y: 96.391538 }
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

var ctx_t1_20241223_bitrate_fps_data = document.getElementById('chart_t1_20241223_bitrate_fps');
const chart_t1_20241223_bitrate_fps_data = new Chart(ctx_t1_20241223_bitrate_fps_data,
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
          { x: 6723.26, y: 231.55 },
          { x: 4297.34, y: 259.11 },
          { x: 2758.00, y: 284.54 },
          { x: 1789.04, y: 305.47 },
          { x: 1196.61, y: 312.68 },
          { x: 815.70, y: 330.37 }
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
          { x: 5864.37, y: 30.86 },
          { x: 3739.81, y: 34.74 },
          { x: 2417.55, y: 38.26 },
          { x: 1572.95, y: 41.72 },
          { x: 1061.48, y: 44.76 },
          { x: 735.36, y: 47.77 }
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
          { x: 7952.01, y: 93.90 },
          { x: 4955.72, y: 104.79 },
          { x: 3091.93, y: 114.44 },
          { x: 1925.04, y: 124.35 },
          { x: 1192.35, y: 134.33 },
          { x: 744.75, y: 140.53 },
          { x: 465.87, y: 149.59 }
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
          { x: 7793.56, y: 75.47 },
          { x: 4866.57, y: 83.38 },
          { x: 3047.20, y: 91.09 },
          { x: 1896.93, y: 98.03 },
          { x: 1173.26, y: 104.77 },
          { x: 733.48, y: 108.53 },
          { x: 458.42, y: 114.87 }
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
          { x: 8064.40, y: 4.76 },
          { x: 4995.34, y: 5.69 },
          { x: 3142.57, y: 6.70 },
          { x: 1972.09, y: 7.90 },
          { x: 1225.19, y: 9.39 },
          { x: 753.09, y: 11.26 },
          { x: 449.37, y: 13.72 }
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
          { x: 8056.42, y: 3.79 },
          { x: 5017.69, y: 4.44 },
          { x: 3165.74, y: 5.16 },
          { x: 1990.87, y: 6.01 },
          { x: 1241.85, y: 7.03 },
          { x: 763.69, y: 8.28 },
          { x: 454.11, y: 9.87 }
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
          { x: 6365.60, y: 46.689 },
          { x: 5220.48, y: 48.017 },
          { x: 4398.78, y: 47.846 },
          { x: 3493.53, y: 49.109 },
          { x: 2751.10, y: 51.114 },
          { x: 2147.26, y: 51.296 },
          { x: 1673.62, y: 51.561 }
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
          { x: 6454.79, y: 33.756 },
          { x: 5180.47, y: 35.186 },
          { x: 4312.63, y: 35.445 },
          { x: 3425.17, y: 36.847 },
          { x: 2707.60, y: 39.009 },
          { x: 2122.82, y: 40.248 },
          { x: 1661.80, y: 40.978 }
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
          { x: 7091.96, y: 111.493 },
          { x: 5834.18, y: 114.388 },
          { x: 4938.35, y: 116.190 },
          { x: 3918.69, y: 117.766 },
          { x: 3064.90, y: 123.318 },
          { x: 2360.05, y: 127.284 },
          { x: 1816.27, y: 123.700 }
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
          { x: 7305.05, y: 95.067 },
          { x: 5871.19, y: 97.448 },
          { x: 4910.43, y: 97.698 },
          { x: 3888.38, y: 99.376 },
          { x: 3042.21, y: 103.532 },
          { x: 2345.65, y: 105.893 },
          { x: 1811.47, y: 103.855 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7140.42, y: 275.262 },
          { x: 5965.97, y: 270.437 },
          { x: 4639.91, y: 285.344 },
          { x: 3544.62, y: 300.824 },
          { x: 2698.04, y: 317.101 },
          { x: 2029.74, y: 323.099 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7224.40, y: 199.332 },
          { x: 5974.01, y: 199.146 },
          { x: 4647.73, y: 201.724 },
          { x: 3536.82, y: 204.122 },
          { x: 2689.06, y: 204.908 },
          { x: 2028.23, y: 205.541 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 6608.89, y: 303.73 },
          { x: 5084.70, y: 297.75 },
          { x: 3528.15, y: 298.42 },
          { x: 2248.03, y: 299.32 },
          { x: 1348.18, y: 298.90 },
          { x: 810.76, y: 301.01 },
          { x: 482.89, y: 301.75 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6693.02, y: 510.55 },
          { x: 5155.38, y: 512.43 },
          { x: 3573.09, y: 514.00 },
          { x: 2274.51, y: 514.91 },
          { x: 1369.38, y: 516.49 },
          { x: 825.67, y: 520.45 },
          { x: 496.51, y: 519.77 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7437.67, y: 248.04 },
          { x: 5356.17, y: 249.55 },
          { x: 3580.23, y: 248.50 },
          { x: 2257.92, y: 249.04 },
          { x: 1352.90, y: 249.88 },
          { x: 811.76, y: 249.90 },
          { x: 483.22, y: 247.94 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7542.40, y: 248.33 },
          { x: 5421.58, y: 247.94 },
          { x: 3626.36, y: 247.08 },
          { x: 2289.79, y: 248.66 },
          { x: 1374.44, y: 252.69 },
          { x: 826.23, y: 250.96 },
          { x: 496.33, y: 250.37 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 6777.39, y: 179.58 },
          { x: 4846.31, y: 180.61 },
          { x: 3869.87, y: 181.25 },
          { x: 2474.28, y: 182.90 },
          { x: 1653.30, y: 184.40 },
          { x: 1160.25, y: 185.88 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7071.56, y: 489.35 },
          { x: 5021.89, y: 489.43 },
          { x: 3979.22, y: 489.95 },
          { x: 2549.93, y: 491.08 },
          { x: 1716.85, y: 490.71 },
          { x: 1226.04, y: 490.93 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 5474.21, y: 297.20 },
          { x: 3723.49, y: 297.70 },
          { x: 2841.80, y: 297.86 },
          { x: 1695.04, y: 298.39 },
          { x: 1084.76, y: 298.62 },
          { x: 739.21, y: 299.20 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5660.77, y: 522.84 },
          { x: 3854.26, y: 529.42 },
          { x: 2930.79, y: 530.83 },
          { x: 1747.18, y: 536.54 },
          { x: 1116.98, y: 538.80 },
          { x: 761.49, y: 540.62 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5400.27, y: 250.20 },
          { x: 3687.92, y: 235.29 },
          { x: 2818.86, y: 249.08 },
          { x: 1685.88, y: 248.85 },
          { x: 1079.08, y: 248.83 },
          { x: 734.67, y: 251.56 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5570.81, y: 247.81 },
          { x: 3807.66, y: 249.69 },
          { x: 2906.96, y: 250.88 },
          { x: 1738.08, y: 249.47 },
          { x: 1112.19, y: 248.14 },
          { x: 757.39, y: 249.61 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 6422.90, y: 326.45 },
          { x: 5111.40, y: 327.86 },
          { x: 3350.27, y: 329.65 },
          { x: 2245.42, y: 332.78 },
          { x: 1524.43, y: 335.15 },
          { x: 1010.32, y: 337.70 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6459.80, y: 473.68 },
          { x: 5021.88, y: 476.72 },
          { x: 3314.55, y: 479.51 },
          { x: 2205.05, y: 479.80 },
          { x: 1504.22, y: 483.72 },
          { x: 1019.24, y: 486.96 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 5968.44, y: 271.99 },
          { x: 3968.07, y: 272.67 },
          { x: 2859.49, y: 274.45 },
          { x: 1708.19, y: 275.80 },
          { x: 1092.80, y: 276.92 },
          { x: 748.49, y: 278.22 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6150.97, y: 481.10 },
          { x: 4089.97, y: 487.56 },
          { x: 2945.71, y: 489.50 },
          { x: 1755.95, y: 495.27 },
          { x: 1118.75, y: 470.88 },
          { x: 765.70, y: 507.87 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5861.47, y: 190.24 },
          { x: 3906.13, y: 190.90 },
          { x: 2835.05, y: 191.74 },
          { x: 1697.47, y: 192.40 },
          { x: 1085.75, y: 192.99 },
          { x: 743.02, y: 193.53 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6031.86, y: 252.71 },
          { x: 4019.68, y: 254.10 },
          { x: 2913.10, y: 254.99 },
          { x: 1740.59, y: 256.09 },
          { x: 1112.13, y: 256.79 },
          { x: 761.54, y: 257.83 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 6258.54, y: 287.05 },
          { x: 3975.48, y: 281.26 },
          { x: 2363.24, y: 281.24 },
          { x: 1383.59, y: 272.94 },
          { x: 786.86, y: 281.91 },
          { x: 440.68, y: 284.85 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6428.66, y: 520.70 },
          { x: 4089.11, y: 513.50 },
          { x: 2425.25, y: 508.52 },
          { x: 1421.49, y: 505.46 },
          { x: 810.63, y: 510.71 },
          { x: 454.34, y: 515.24 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6881.34, y: 195.75 },
          { x: 4075.01, y: 194.41 },
          { x: 2375.71, y: 194.05 },
          { x: 1368.90, y: 194.20 },
          { x: 786.09, y: 194.63 },
          { x: 441.69, y: 195.57 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7068.10, y: 261.61 },
          { x: 4189.40, y: 260.65 },
          { x: 2444.31, y: 259.40 },
          { x: 1414.25, y: 259.53 },
          { x: 809.74, y: 259.74 },
          { x: 454.99, y: 260.86 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 6608.19, y: 195.16 },
          { x: 4249.44, y: 204.53 },
          { x: 2721.00, y: 209.91 },
          { x: 1861.21, y: 214.49 },
          { x: 1296.14, y: 217.66 },
          { x: 950.58, y: 221.71 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 262.66 },
          { x: 4362.03, y: 269.90 },
          { x: 2813.46, y: 275.06 },
          { x: 1937.03, y: 277.06 },
          { x: 1344.50, y: 280.47 },
          { x: 962.49, y: 280.77 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 6213.53, y: 308.87 },
          { x: 4145.39, y: 311.73 },
          { x: 3004.77, y: 314.87 },
          { x: 1792.40, y: 317.59 },
          { x: 1142.37, y: 319.43 },
          { x: 784.67, y: 321.52 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6379.52, y: 394.13 },
          { x: 4295.35, y: 395.64 },
          { x: 3139.78, y: 397.46 },
          { x: 1921.30, y: 399.25 },
          { x: 1247.39, y: 386.17 },
          { x: 856.91, y: 403.49 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6053.34, y: 259.70 },
          { x: 4062.71, y: 262.23 },
          { x: 2964.40, y: 263.49 },
          { x: 1772.45, y: 264.71 },
          { x: 1134.62, y: 265.44 },
          { x: 779.22, y: 267.19 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6206.55, y: 284.87 },
          { x: 4198.75, y: 281.43 },
          { x: 3092.57, y: 287.23 },
          { x: 1902.43, y: 287.20 },
          { x: 1238.93, y: 293.76 },
          { x: 853.19, y: 289.05 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 6539.43, y: 119.46 },
          { x: 4200.88, y: 121.22 },
          { x: 2687.33, y: 123.49 },
          { x: 1839.67, y: 125.57 },
          { x: 1284.20, y: 126.59 },
          { x: 944.45, y: 127.33 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.08, y: 166.47 },
          { x: 4362.03, y: 168.46 },
          { x: 2813.46, y: 170.55 },
          { x: 1937.03, y: 174.31 },
          { x: 1344.50, y: 181.80 },
          { x: 962.49, y: 184.22 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 5482.55, y: 39.57 },
          { x: 3736.71, y: 44.03 },
          { x: 2327.88, y: 49.46 },
          { x: 1454.51, y: 53.14 },
          { x: 966.38, y: 56.22 },
          { x: 620.31, y: 58.61 },
          { x: 432.86, y: 59.86 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6778.85, y: 124.50 },
          { x: 4543.28, y: 130.79 },
          { x: 2868.01, y: 136.99 },
          { x: 1817.97, y: 141.72 },
          { x: 1177.23, y: 145.57 },
          { x: 748.12, y: 148.66 },
          { x: 503.96, y: 151.28 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6257.21, y: 35.96 },
          { x: 4205.18, y: 38.92 },
          { x: 2671.13, y: 43.21 },
          { x: 1695.86, y: 45.88 },
          { x: 1101.74, y: 50.13 },
          { x: 706.45, y: 52.75 },
          { x: 480.67, y: 54.26 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6655.15, y: 89.76 },
          { x: 4471.96, y: 92.18 },
          { x: 2839.63, y: 96.81 },
          { x: 1802.23, y: 99.85 },
          { x: 1170.29, y: 100.89 },
          { x: 744.56, y: 101.44 },
          { x: 501.18, y: 101.37 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 6554.43, y: 164.02 },
          { x: 4214.81, y: 168.45 },
          { x: 2695.47, y: 172.29 },
          { x: 1845.45, y: 174.30 },
          { x: 1291.24, y: 176.10 },
          { x: 961.73, y: 175.95 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6757.35, y: 203.09 },
          { x: 4362.61, y: 204.90 },
          { x: 2813.25, y: 206.81 },
          { x: 1937.58, y: 206.08 },
          { x: 1349.13, y: 208.38 },
          { x: 977.61, y: 208.94 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6266.00, y: 37.78 },
          { x: 3890.91, y: 38.75 },
          { x: 2464.50, y: 39.70 },
          { x: 1630.75, y: 39.64 },
          { x: 1148.68, y: 40.00 },
          { x: 838.81, y: 39.82 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6295.59, y: 77.77 },
          { x: 3918.10, y: 79.56 },
          { x: 2489.78, y: 80.60 },
          { x: 1655.11, y: 80.88 },
          { x: 1173.40, y: 81.32 },
          { x: 862.74, y: 81.79 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6065.49, y: 34.38 },
          { x: 3807.65, y: 35.27 },
          { x: 2438.16, y: 35.81 },
          { x: 1616.83, y: 36.26 },
          { x: 1140.02, y: 36.25 },
          { x: 834.34, y: 36.14 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6119.02, y: 66.06 },
          { x: 3834.12, y: 67.33 },
          { x: 2468.93, y: 67.66 },
          { x: 1645.50, y: 67.87 },
          { x: 1167.40, y: 67.47 },
          { x: 859.27, y: 69.26 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6259.15, y: 88.56 },
          { x: 3966.41, y: 96.40 },
          { x: 2532.91, y: 104.80 },
          { x: 1761.19, y: 109.09 },
          { x: 1255.42, y: 113.43 },
          { x: 955.98, y: 115.67 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6393.28, y: 182.44 },
          { x: 4069.85, y: 178.51 },
          { x: 2621.75, y: 183.85 },
          { x: 1824.39, y: 185.25 },
          { x: 1304.37, y: 187.50 },
          { x: 1009.64, y: 188.26 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 6148.13, y: 78.82 },
          { x: 3891.15, y: 61.53 },
          { x: 2491.70, y: 121.19 },
          { x: 1725.76, y: 123.37 },
          { x: 1244.24, y: 128.92 },
          { x: 945.00, y: 130.76 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.08, y: 161.79 },
          { x: 3895.17, y: 156.97 },
          { x: 2526.92, y: 166.35 },
          { x: 1754.03, y: 168.52 },
          { x: 1272.91, y: 163.69 },
          { x: 961.37, y: 170.55 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 6503.17, y: 107.72 },
          { x: 4066.83, y: 107.52 },
          { x: 2663.87, y: 107.44 },
          { x: 1763.49, y: 107.21 },
          { x: 1183.75, y: 107.31 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6499.60, y: 149.70 },
          { x: 4070.44, y: 152.41 },
          { x: 2668.06, y: 153.50 },
          { x: 1768.60, y: 155.01 },
          { x: 1186.42, y: 155.68 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 7405.71, y: 206.12 },
          { x: 4626.38, y: 206.44 },
          { x: 2891.10, y: 206.61 },
          { x: 1809.07, y: 203.82 },
          { x: 1170.24, y: 203.87 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7405.71, y: 205.51 },
          { x: 4626.38, y: 206.38 },
          { x: 2891.10, y: 206.32 },
          { x: 1809.07, y: 203.52 },
          { x: 1170.24, y: 204.04 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 6369.28, y: 133.51 },
          { x: 3932.50, y: 133.71 },
          { x: 2430.86, y: 133.46 },
          { x: 1530.74, y: 133.77 },
          { x: 978.52, y: 134.22 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6369.28, y: 134.00 },
          { x: 3932.50, y: 134.29 },
          { x: 2430.86, y: 134.04 },
          { x: 1530.74, y: 134.25 },
          { x: 978.52, y: 134.24 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6335.11, y: 137.28 },
          { x: 3922.08, y: 137.48 },
          { x: 2418.53, y: 137.46 },
          { x: 1519.14, y: 137.81 },
          { x: 965.84, y: 137.71 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6335.11, y: 136.96 },
          { x: 3922.08, y: 137.45 },
          { x: 2418.53, y: 137.65 },
          { x: 1519.14, y: 137.57 },
          { x: 965.84, y: 137.77 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6637.16, y: 188.09 },
          { x: 4584.36, y: 187.46 },
          { x: 3204.05, y: 186.52 },
          { x: 2266.87, y: 185.99 },
          { x: 1499.15, y: 187.13 },
          { x: 932.27, y: 185.47 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6637.16, y: 188.00 },
          { x: 4584.36, y: 187.10 },
          { x: 3204.05, y: 186.87 },
          { x: 2266.87, y: 186.52 },
          { x: 1499.15, y: 186.02 },
          { x: 932.27, y: 185.60 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6401.70, y: 189.76 },
          { x: 4419.70, y: 187.73 },
          { x: 3123.03, y: 187.05 },
          { x: 2225.33, y: 185.20 },
          { x: 1492.52, y: 183.57 },
          { x: 928.04, y: 182.00 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6401.70, y: 189.63 },
          { x: 4419.70, y: 188.16 },
          { x: 3123.03, y: 186.70 },
          { x: 2225.33, y: 185.26 },
          { x: 1492.52, y: 183.59 },
          { x: 928.04, y: 182.03 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 7398.66, y: 163.21 },
          { x: 4619.87, y: 164.08 },
          { x: 2888.26, y: 164.13 },
          { x: 1810.53, y: 162.33 },
          { x: 1173.20, y: 161.80 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7398.66, y: 163.04 },
          { x: 4619.87, y: 163.68 },
          { x: 2888.26, y: 164.14 },
          { x: 1810.53, y: 162.37 },
          { x: 1173.20, y: 162.01 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 6363.67, y: 107.88 },
          { x: 3929.63, y: 108.08 },
          { x: 2432.29, y: 108.27 },
          { x: 1533.77, y: 108.15 },
          { x: 980.71, y: 108.17 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6363.67, y: 107.99 },
          { x: 3929.63, y: 108.16 },
          { x: 2432.29, y: 108.08 },
          { x: 1533.77, y: 108.26 },
          { x: 980.71, y: 108.11 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6330.47, y: 109.38 },
          { x: 3921.38, y: 109.61 },
          { x: 2418.53, y: 109.78 },
          { x: 1519.73, y: 109.92 },
          { x: 969.27, y: 109.91 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6330.47, y: 109.46 },
          { x: 3921.38, y: 109.68 },
          { x: 2418.53, y: 109.46 },
          { x: 1519.73, y: 109.82 },
          { x: 969.27, y: 109.98 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 7906.51, y: 201.10 },
          { x: 5009.43, y: 202.79 },
          { x: 3142.98, y: 204.89 },
          { x: 2009.98, y: 207.19 },
          { x: 1303.04, y: 210.64 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7906.51, y: 200.21 },
          { x: 5009.43, y: 201.86 },
          { x: 3142.98, y: 204.39 },
          { x: 2009.98, y: 207.36 },
          { x: 1303.04, y: 211.44 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7903.18, y: 131.31 },
          { x: 4887.37, y: 148.94 },
          { x: 3006.13, y: 166.22 },
          { x: 1869.05, y: 181.81 },
          { x: 1171.73, y: 195.05 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7903.18, y: 131.11 },
          { x: 4887.37, y: 148.97 },
          { x: 3006.13, y: 166.22 },
          { x: 1869.05, y: 181.62 },
          { x: 1171.73, y: 194.60 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 7448.74, y: 128.36 },
          { x: 4611.80, y: 137.37 },
          { x: 2827.00, y: 140.46 },
          { x: 1769.29, y: 148.84 },
          { x: 1105.97, y: 156.71 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 7448.74, y: 127.20 },
          { x: 4612.42, y: 118.20 },
          { x: 2827.00, y: 115.17 },
          { x: 1769.29, y: 145.14 },
          { x: 1105.97, y: 147.64 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 7904.97, y: 123.50 },
          { x: 5007.80, y: 124.67 },
          { x: 3149.23, y: 126.08 },
          { x: 2011.67, y: 127.67 },
          { x: 1303.15, y: 128.90 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7904.97, y: 123.42 },
          { x: 5007.80, y: 124.64 },
          { x: 3149.23, y: 126.04 },
          { x: 2011.67, y: 127.54 },
          { x: 1303.15, y: 129.28 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7975.41, y: 71.38 },
          { x: 4928.05, y: 77.75 },
          { x: 3024.11, y: 83.46 },
          { x: 1888.56, y: 87.77 },
          { x: 1178.32, y: 91.37 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7975.41, y: 71.36 },
          { x: 4928.05, y: 77.76 },
          { x: 3024.11, y: 83.43 },
          { x: 1888.56, y: 87.72 },
          { x: 1178.32, y: 91.39 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 2310.36, y: 212.41 },
          { x: 2839.31, y: 211.68 },
          { x: 3562.48, y: 211.73 },
          { x: 4447.24, y: 212.54 },
          { x: 5287.80, y: 212.65 },
          { x: 6320.24, y: 212.34 },
          { x: 7108.83, y: 212.35 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.22, y: 376.16 },
          { x: 2876.54, y: 375.15 },
          { x: 3606.19, y: 374.44 },
          { x: 4502.61, y: 375.41 },
          { x: 5361.50, y: 375.32 },
          { x: 6396.19, y: 375.90 },
          { x: 7198.57, y: 375.32 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1780.48, y: 540.53 },
          { x: 2199.88, y: 538.34 },
          { x: 2704.70, y: 536.90 },
          { x: 3224.10, y: 537.71 },
          { x: 3739.93, y: 536.63 },
          { x: 4379.31, y: 537.44 },
          { x: 5064.02, y: 533.94 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1787.72, y: 655.85 },
          { x: 2208.30, y: 657.34 },
          { x: 2714.27, y: 652.50 },
          { x: 3235.64, y: 653.17 },
          { x: 3753.56, y: 651.70 },
          { x: 4396.02, y: 652.10 },
          { x: 5087.14, y: 651.84 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1846.90, y: 115.85 },
          { x: 2324.83, y: 115.23 },
          { x: 2947.59, y: 115.42 },
          { x: 3613.60, y: 115.38 },
          { x: 4265.40, y: 115.46 },
          { x: 5011.65, y: 115.41 },
          { x: 5866.71, y: 115.44 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1954.18, y: 768.90 },
          { x: 2464.34, y: 755.62 },
          { x: 3129.23, y: 765.58 },
          { x: 3837.39, y: 772.80 },
          { x: 4534.00, y: 771.50 },
          { x: 5324.84, y: 770.38 },
          { x: 6222.99, y: 753.66 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 2398.26, y: 116.89 },
          { x: 2935.62, y: 116.87 },
          { x: 3661.42, y: 116.77 },
          { x: 4518.15, y: 116.86 },
          { x: 5372.39, y: 116.88 },
          { x: 6371.12, y: 116.86 },
          { x: 7215.96, y: 116.78 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2450.96, y: 206.87 },
          { x: 2993.03, y: 206.74 },
          { x: 3721.15, y: 206.32 },
          { x: 4584.66, y: 206.50 },
          { x: 5454.23, y: 206.09 },
          { x: 6438.07, y: 205.68 },
          { x: 7301.61, y: 205.57 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 1617.19, y: 193.44 },
          { x: 2021.25, y: 190.69 },
          { x: 2525.83, y: 191.09 },
          { x: 3013.89, y: 190.88 },
          { x: 3519.49, y: 192.04 },
          { x: 4105.69, y: 190.83 },
          { x: 4770.54, y: 191.42 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1737.44, y: 212.32 },
          { x: 2143.40, y: 212.34 },
          { x: 2651.06, y: 211.59 },
          { x: 3143.25, y: 211.96 },
          { x: 3645.89, y: 212.89 },
          { x: 4236.89, y: 211.31 },
          { x: 4903.76, y: 212.40 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 2310.32, y: 64.00 },
          { x: 2839.27, y: 63.87 },
          { x: 3562.43, y: 63.96 },
          { x: 4447.17, y: 64.06 },
          { x: 5287.73, y: 63.90 },
          { x: 6320.17, y: 63.89 },
          { x: 7108.74, y: 63.93 }
        ]
      },
      {
        label: "r9 9950x igpu VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 2342.20, y: 131.95 },
          { x: 2876.75, y: 131.86 },
          { x: 3606.26, y: 131.58 },
          { x: 4502.41, y: 131.35 },
          { x: 5361.44, y: 131.27 },
          { x: 6396.33, y: 131.18 },
          { x: 7198.58, y: 131.16 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1584.46, y: 65.72 },
          { x: 2071.68, y: 65.73 },
          { x: 2593.05, y: 66.44 },
          { x: 3107.55, y: 66.04 },
          { x: 3665.11, y: 65.94 },
          { x: 4359.45, y: 65.52 },
          { x: 5093.53, y: 65.80 }
        ]
      },
      {
        label: "r9 9950x igpu VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1607.85, y: 65.77 },
          { x: 2098.54, y: 65.74 },
          { x: 2622.52, y: 65.66 },
          { x: 3137.78, y: 66.46 },
          { x: 3694.49, y: 65.78 },
          { x: 4383.32, y: 65.94 },
          { x: 5108.19, y: 66.02 }
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

var ctx_t1_20241223_vbr_bitrate_ssim_data = document.getElementById('chart_t1_20241223_vbr_bitrate_ssim');
const chart_t1_20241223_vbr_bitrate_ssim_data = new Chart(ctx_t1_20241223_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 400.28, y: 0.913971 },
          { x: 701.18, y: 0.95327 },
          { x: 1103.56, y: 0.975133 },
          { x: 1363.76, y: 0.981507 },
          { x: 1729.39, y: 0.987434 },
          { x: 3317.24, y: 0.995306 },
          { x: 4658.34, y: 0.997146 },
          { x: 5614.75, y: 0.997886 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.83, y: 0.909881 },
          { x: 710.07, y: 0.949347 },
          { x: 1105.82, y: 0.97265 },
          { x: 1376.74, y: 0.980083 },
          { x: 1746.98, y: 0.986038 },
          { x: 3342.09, y: 0.994792 },
          { x: 4758.34, y: 0.996855 },
          { x: 5793.94, y: 0.997687 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 381.15, y: 0.950428 },
          { x: 724.87, y: 0.978545 },
          { x: 1064.31, y: 0.98716 },
          { x: 1385.58, y: 0.991289 },
          { x: 1725.07, y: 0.993417 },
          { x: 3202.08, y: 0.997002 },
          { x: 4152.53, y: 0.997914 },
          { x: 5042.26, y: 0.998307 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 382.04, y: 0.948009 },
          { x: 725.15, y: 0.97752 },
          { x: 1077.14, y: 0.986542 },
          { x: 1394.48, y: 0.990789 },
          { x: 1740.15, y: 0.993146 },
          { x: 3258.14, y: 0.996854 },
          { x: 4261.90, y: 0.997855 },
          { x: 5134.71, y: 0.998247 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.92, y: 0.951065 },
          { x: 719.68, y: 0.978841 },
          { x: 1056.86, y: 0.987321 },
          { x: 1380.15, y: 0.991677 },
          { x: 1718.68, y: 0.993725 },
          { x: 3179.97, y: 0.997234 },
          { x: 4098.78, y: 0.998117 },
          { x: 5004.86, y: 0.998546 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 382.54, y: 0.948632 },
          { x: 724.33, y: 0.977945 },
          { x: 1065.96, y: 0.986732 },
          { x: 1384.87, y: 0.990911 },
          { x: 1737.61, y: 0.993388 },
          { x: 3223.73, y: 0.99706 },
          { x: 4223.02, y: 0.998091 },
          { x: 5064.81, y: 0.998469 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 435.93, y: 0.965987 },
          { x: 801.88, y: 0.984126 },
          { x: 1160.12, y: 0.989827 },
          { x: 1531.26, y: 0.992754 },
          { x: 1901.94, y: 0.994308 },
          { x: 3733.97, y: 0.997191 },
          { x: 5542.44, y: 0.998233 },
          { x: 7060.74, y: 0.998722 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 437.31, y: 0.963967 },
          { x: 802.72, y: 0.983197 },
          { x: 1167.73, y: 0.98929 },
          { x: 1532.97, y: 0.992261 },
          { x: 1884.81, y: 0.993831 },
          { x: 3775.89, y: 0.99708 },
          { x: 5569.32, y: 0.99812 },
          { x: 7072.06, y: 0.998664 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 442.22, y: 0.966351 },
          { x: 804.19, y: 0.984399 },
          { x: 1167.69, y: 0.990204 },
          { x: 1533.26, y: 0.992999 },
          { x: 1888.29, y: 0.994409 },
          { x: 3755.42, y: 0.997415 },
          { x: 5588.88, y: 0.998363 },
          { x: 7330.99, y: 0.998839 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 438.60, y: 0.963953 },
          { x: 800.18, y: 0.983295 },
          { x: 1166.83, y: 0.989544 },
          { x: 1538.75, y: 0.992558 },
          { x: 1907.16, y: 0.99419 },
          { x: 3784.83, y: 0.997308 },
          { x: 5586.27, y: 0.998286 },
          { x: 7349.89, y: 0.998787 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 654.79, y: 0.946664 },
          { x: 940.21, y: 0.967095 },
          { x: 1311.48, y: 0.978802 },
          { x: 1603.90, y: 0.98333 },
          { x: 2048.65, y: 0.987642 },
          { x: 3825.16, y: 0.994592 },
          { x: 5593.03, y: 0.996835 },
          { x: 7011.14, y: 0.997864 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 665.08, y: 0.946411 },
          { x: 941.87, y: 0.966397 },
          { x: 1314.65, y: 0.978292 },
          { x: 1593.68, y: 0.982614 },
          { x: 2051.79, y: 0.987228 },
          { x: 3826.53, y: 0.994337 },
          { x: 5596.68, y: 0.996583 },
          { x: 7027.37, y: 0.997711 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 390.71, y: 0.94351 },
          { x: 764.57, y: 0.976643 },
          { x: 1131.52, y: 0.986486 },
          { x: 1494.41, y: 0.990811 },
          { x: 1855.92, y: 0.992946 },
          { x: 3501.39, y: 0.996698 },
          { x: 4842.90, y: 0.997479 },
          { x: 5586.33, y: 0.997973 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.35, y: 0.940166 },
          { x: 766.74, y: 0.975803 },
          { x: 1137.54, y: 0.985925 },
          { x: 1501.04, y: 0.990091 },
          { x: 1869.07, y: 0.992491 },
          { x: 3534.74, y: 0.996301 },
          { x: 4905.20, y: 0.997209 },
          { x: 5673.26, y: 0.997921 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.55, y: 0.943813 },
          { x: 764.78, y: 0.976921 },
          { x: 1133.33, y: 0.985678 },
          { x: 1495.20, y: 0.991124 },
          { x: 1847.35, y: 0.993338 },
          { x: 3483.61, y: 0.996935 },
          { x: 4734.55, y: 0.997781 },
          { x: 5409.71, y: 0.998171 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.20, y: 0.939699 },
          { x: 768.01, y: 0.97574 },
          { x: 1134.34, y: 0.985921 },
          { x: 1504.83, y: 0.990395 },
          { x: 1862.66, y: 0.992809 },
          { x: 3510.40, y: 0.99673 },
          { x: 4794.72, y: 0.997464 },
          { x: 5506.58, y: 0.998149 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 442.40, y: 0.967167 },
          { x: 808.17, y: 0.983364 },
          { x: 1182.99, y: 0.989592 },
          { x: 1570.81, y: 0.992439 },
          { x: 1961.28, y: 0.994213 },
          { x: 3728.07, y: 0.997093 },
          { x: 5349.75, y: 0.998012 },
          { x: 6772.53, y: 0.99852 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 447.76, y: 0.965314 },
          { x: 810.47, y: 0.982446 },
          { x: 1185.89, y: 0.989032 },
          { x: 1574.23, y: 0.99205 },
          { x: 1965.18, y: 0.99384 },
          { x: 3746.35, y: 0.996918 },
          { x: 5366.69, y: 0.997916 },
          { x: 6806.33, y: 0.998431 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 440.73, y: 0.96666 },
          { x: 811.49, y: 0.983471 },
          { x: 1191.16, y: 0.989933 },
          { x: 1569.58, y: 0.992653 },
          { x: 1946.24, y: 0.994333 },
          { x: 3806.81, y: 0.997267 },
          { x: 5470.40, y: 0.998197 },
          { x: 7039.79, y: 0.99865 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 445.59, y: 0.965121 },
          { x: 813.46, y: 0.982268 },
          { x: 1183.58, y: 0.988995 },
          { x: 1567.27, y: 0.992172 },
          { x: 1943.23, y: 0.993937 },
          { x: 3830.91, y: 0.997123 },
          { x: 5478.60, y: 0.998118 },
          { x: 7075.22, y: 0.998581 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1056.91, y: 0.970126 },
          { x: 1056.91, y: 0.970126 },
          { x: 1180.13, y: 0.974847 },
          { x: 1571.32, y: 0.983727 },
          { x: 1964.16, y: 0.988334 },
          { x: 3903.63, y: 0.995417 },
          { x: 5822.44, y: 0.997244 },
          { x: 7716.78, y: 0.998056 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 0.969626 },
          { x: 1057.25, y: 0.969626 },
          { x: 1181.79, y: 0.974406 },
          { x: 1574.61, y: 0.983298 },
          { x: 1965.73, y: 0.987902 },
          { x: 3916.33, y: 0.995245 },
          { x: 5839.86, y: 0.997151 },
          { x: 7748.49, y: 0.998005 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 388.66, y: 0.937712 },
          { x: 752.32, y: 0.973715 },
          { x: 1107.09, y: 0.984235 },
          { x: 1463.64, y: 0.989358 },
          { x: 1805.14, y: 0.991997 },
          { x: 3333.03, y: 0.996526 },
          { x: 4395.07, y: 0.997499 },
          { x: 5112.32, y: 0.997932 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.11, y: 0.936531 },
          { x: 754.54, y: 0.97223 },
          { x: 1110.19, y: 0.983593 },
          { x: 1469.31, y: 0.988783 },
          { x: 1813.87, y: 0.991604 },
          { x: 3351.83, y: 0.99636 },
          { x: 4454.37, y: 0.997446 },
          { x: 5191.37, y: 0.99799 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.56, y: 0.937732 },
          { x: 751.29, y: 0.97409 },
          { x: 1107.31, y: 0.984893 },
          { x: 1463.49, y: 0.989799 },
          { x: 1801.62, y: 0.992354 },
          { x: 3293.66, y: 0.996852 },
          { x: 4318.79, y: 0.997839 },
          { x: 4998.03, y: 0.998209 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.40, y: 0.937051 },
          { x: 756.16, y: 0.972077 },
          { x: 1109.26, y: 0.98386 },
          { x: 1468.83, y: 0.989103 },
          { x: 1810.47, y: 0.991885 },
          { x: 3324.85, y: 0.996674 },
          { x: 4380.05, y: 0.997773 },
          { x: 5089.51, y: 0.998169 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1056.25, y: 0.970558 },
          { x: 1056.25, y: 0.970558 },
          { x: 1180.40, y: 0.975137 },
          { x: 1964.03, y: 0.988552 },
          { x: 3902.07, y: 0.995525 },
          { x: 6771.54, y: 0.997758 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 0.969626 },
          { x: 1057.25, y: 0.969626 },
          { x: 1181.79, y: 0.974406 },
          { x: 1965.73, y: 0.987902 },
          { x: 3916.33, y: 0.995245 },
          { x: 6795.28, y: 0.997651 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 398.79, y: 0.931795 },
          { x: 775.50, y: 0.967898 },
          { x: 1150.83, y: 0.980342 },
          { x: 1869.63, y: 0.990001 },
          { x: 3467.53, y: 0.9959 },
          { x: 5154.81, y: 0.997613 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.15, y: 0.931268 },
          { x: 767.90, y: 0.964485 },
          { x: 1144.86, y: 0.977178 },
          { x: 1866.40, y: 0.988243 },
          { x: 3475.03, y: 0.995706 },
          { x: 5089.77, y: 0.997434 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 398.57, y: 0.931937 },
          { x: 775.33, y: 0.968016 },
          { x: 1150.34, y: 0.980738 },
          { x: 1864.23, y: 0.990392 },
          { x: 3432.33, y: 0.996288 },
          { x: 5025.07, y: 0.997958 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.28, y: 0.931239 },
          { x: 768.29, y: 0.964778 },
          { x: 1140.98, y: 0.977335 },
          { x: 1849.98, y: 0.98993 },
          { x: 3417.42, y: 0.996007 },
          { x: 4923.23, y: 0.997773 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1056.88, y: 0.968857 },
          { x: 1056.88, y: 0.968857 },
          { x: 1180.31, y: 0.973936 },
          { x: 1571.27, y: 0.983579 },
          { x: 1964.13, y: 0.988282 },
          { x: 3903.46, y: 0.995414 },
          { x: 5822.61, y: 0.99724 },
          { x: 7716.25, y: 0.998057 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.17, y: 0.96837 },
          { x: 1057.17, y: 0.96837 },
          { x: 1181.78, y: 0.973454 },
          { x: 1573.01, y: 0.983109 },
          { x: 1965.70, y: 0.987883 },
          { x: 3916.51, y: 0.995242 },
          { x: 5839.77, y: 0.997151 },
          { x: 7748.61, y: 0.998007 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 437.93, y: 0.916111 },
          { x: 650.48, y: 0.946028 },
          { x: 895.82, y: 0.964653 },
          { x: 1197.94, y: 0.977301 },
          { x: 1489.61, y: 0.983458 },
          { x: 2967.22, y: 0.99347 },
          { x: 4648.55, y: 0.996209 },
          { x: 6228.26, y: 0.997245 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 456.20, y: 0.91321 },
          { x: 659.67, y: 0.943908 },
          { x: 899.14, y: 0.963077 },
          { x: 1197.86, y: 0.976667 },
          { x: 1489.26, y: 0.983061 },
          { x: 2968.14, y: 0.993405 },
          { x: 4647.89, y: 0.996146 },
          { x: 6219.01, y: 0.997227 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 0.915858 },
          { x: 647.66, y: 0.945643 },
          { x: 891.22, y: 0.965281 },
          { x: 1186.36, y: 0.977661 },
          { x: 1472.37, y: 0.983861 },
          { x: 2942.47, y: 0.993784 },
          { x: 4575.30, y: 0.996318 },
          { x: 6082.05, y: 0.997416 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 0.913259 },
          { x: 656.71, y: 0.943421 },
          { x: 894.59, y: 0.963904 },
          { x: 1188.13, y: 0.976778 },
          { x: 1478.52, y: 0.983441 },
          { x: 2952.89, y: 0.993711 },
          { x: 4588.21, y: 0.996233 },
          { x: 6079.99, y: 0.997381 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1057.34, y: 0.969729 },
          { x: 1057.34, y: 0.969729 },
          { x: 1185.23, y: 0.974687 },
          { x: 1979.95, y: 0.988677 },
          { x: 3947.02, y: 0.995563 },
          { x: 6868.10, y: 0.997784 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.14, y: 0.96563 },
          { x: 1057.14, y: 0.96563 },
          { x: 1179.38, y: 0.971118 },
          { x: 1968.24, y: 0.98692 },
          { x: 3934.19, y: 0.994924 },
          { x: 6862.25, y: 0.997488 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1058.89, y: 0.966114 },
          { x: 1058.89, y: 0.966114 },
          { x: 1182.64, y: 0.972016 },
          { x: 1576.22, y: 0.982487 },
          { x: 1972.04, y: 0.987682 },
          { x: 3943.11, y: 0.995203 },
          { x: 5895.07, y: 0.997099 },
          { x: 7825.82, y: 0.997971 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.02, y: 0.965535 },
          { x: 1057.02, y: 0.965535 },
          { x: 1178.79, y: 0.971 },
          { x: 1573.72, y: 0.9817 },
          { x: 1966.49, y: 0.986921 },
          { x: 3928.65, y: 0.99491 },
          { x: 5877.24, y: 0.996956 },
          { x: 7806.61, y: 0.997856 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 900.39, y: 0.942098 },
          { x: 900.39, y: 0.942098 },
          { x: 998.77, y: 0.953977 },
          { x: 1716.65, y: 0.98246 },
          { x: 3421.20, y: 0.993511 },
          { x: 6160.43, y: 0.996956 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 898.63, y: 0.94151 },
          { x: 898.63, y: 0.94151 },
          { x: 1000.09, y: 0.953647 },
          { x: 1720.12, y: 0.98235 },
          { x: 3417.79, y: 0.993474 },
          { x: 6255.49, y: 0.996976 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 439.60, y: 0.899704 },
          { x: 839.87, y: 0.960217 },
          { x: 1095.74, y: 0.97493 },
          { x: 1575.88, y: 0.985663 },
          { x: 2052.30, y: 0.990343 },
          { x: 3967.27, y: 0.996096 },
          { x: 5884.01, y: 0.997656 },
          { x: 7809.38, y: 0.99839 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 498.47, y: 0.898169 },
          { x: 829.18, y: 0.957388 },
          { x: 1068.08, y: 0.971494 },
          { x: 1545.94, y: 0.984078 },
          { x: 2023.40, y: 0.989437 },
          { x: 3926.19, y: 0.995861 },
          { x: 5826.99, y: 0.997572 },
          { x: 7725.17, y: 0.998339 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 475.97, y: 0.951893 },
          { x: 912.45, y: 0.982024 },
          { x: 1293.44, y: 0.988566 },
          { x: 1687.38, y: 0.991984 },
          { x: 2089.99, y: 0.993917 },
          { x: 4049.64, y: 0.997134 },
          { x: 6005.96, y: 0.998154 },
          { x: 7954.92, y: 0.998669 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 420.54, y: 0.949074 },
          { x: 890.75, y: 0.98021 },
          { x: 1262.26, y: 0.987221 },
          { x: 1655.25, y: 0.99096 },
          { x: 2068.59, y: 0.992962 },
          { x: 4009.81, y: 0.996792 },
          { x: 5948.33, y: 0.997951 },
          { x: 7868.71, y: 0.99852 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 476.61, y: 0.951921 },
          { x: 910.48, y: 0.982791 },
          { x: 1292.41, y: 0.988928 },
          { x: 1687.66, y: 0.992398 },
          { x: 2089.06, y: 0.99419 },
          { x: 4047.22, y: 0.997329 },
          { x: 6005.79, y: 0.998311 },
          { x: 7950.64, y: 0.998805 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 418.70, y: 0.950008 },
          { x: 888.06, y: 0.981519 },
          { x: 1260.72, y: 0.987497 },
          { x: 1654.13, y: 0.9912 },
          { x: 2067.82, y: 0.993333 },
          { x: 4008.64, y: 0.996983 },
          { x: 5945.20, y: 0.998111 },
          { x: 7871.35, y: 0.998661 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 394.12, y: 0.955323 },
          { x: 877.03, y: 0.983035 },
          { x: 1238.51, y: 0.988881 },
          { x: 1646.78, y: 0.992094 },
          { x: 2050.87, y: 0.99382 },
          { x: 3999.88, y: 0.997069 },
          { x: 5923.29, y: 0.998073 },
          { x: 7843.46, y: 0.998567 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.73, y: 0.955542 },
          { x: 870.05, y: 0.982704 },
          { x: 1230.01, y: 0.988508 },
          { x: 1633.61, y: 0.991821 },
          { x: 2043.20, y: 0.993698 },
          { x: 3963.41, y: 0.996987 },
          { x: 5887.90, y: 0.998003 },
          { x: 7775.31, y: 0.998521 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.72, y: 0.955703 },
          { x: 875.28, y: 0.983224 },
          { x: 1235.77, y: 0.989121 },
          { x: 1647.34, y: 0.992418 },
          { x: 2050.32, y: 0.994145 },
          { x: 3990.27, y: 0.997314 },
          { x: 5910.17, y: 0.99829 },
          { x: 7822.21, y: 0.998755 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.76, y: 0.955601 },
          { x: 870.69, y: 0.983049 },
          { x: 1227.34, y: 0.988752 },
          { x: 1634.37, y: 0.992055 },
          { x: 2044.15, y: 0.993978 },
          { x: 3971.27, y: 0.997202 },
          { x: 5885.03, y: 0.998207 },
          { x: 7789.98, y: 0.998685 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 456.47, y: 0.899351 },
          { x: 840.79, y: 0.961132 },
          { x: 1096.46, y: 0.974929 },
          { x: 2052.36, y: 0.990541 },
          { x: 3968.60, y: 0.996119 },
          { x: 6849.76, y: 0.998098 },
          { x: 1096.46, y: 0.974929 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 499.92, y: 0.897849 },
          { x: 829.68, y: 0.957013 },
          { x: 1067.98, y: 0.972044 },
          { x: 2023.69, y: 0.989428 },
          { x: 3925.20, y: 0.995864 },
          { x: 6772.60, y: 0.998019 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 471.01, y: 0.951911 },
          { x: 911.50, y: 0.982098 },
          { x: 1291.72, y: 0.988497 },
          { x: 2091.40, y: 0.993879 },
          { x: 4048.72, y: 0.997147 },
          { x: 6983.50, y: 0.998465 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.14, y: 0.948572 },
          { x: 888.59, y: 0.980737 },
          { x: 1262.42, y: 0.987163 },
          { x: 2068.26, y: 0.993103 },
          { x: 4013.45, y: 0.996817 },
          { x: 6908.14, y: 0.998291 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 478.59, y: 0.951234 },
          { x: 912.22, y: 0.982615 },
          { x: 1292.90, y: 0.98889 },
          { x: 2086.98, y: 0.994187 },
          { x: 4048.61, y: 0.997332 },
          { x: 6980.69, y: 0.998607 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 420.50, y: 0.949449 },
          { x: 888.62, y: 0.981415 },
          { x: 1261.91, y: 0.987454 },
          { x: 2067.95, y: 0.993315 },
          { x: 4009.27, y: 0.996989 },
          { x: 6909.31, y: 0.998436 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 463.95, y: 0.892276 },
          { x: 827.78, y: 0.95312 },
          { x: 1067.01, y: 0.967953 },
          { x: 1546.10, y: 0.98215 },
          { x: 2033.23, y: 0.988268 },
          { x: 3973.90, y: 0.995396 },
          { x: 5900.26, y: 0.997284 },
          { x: 7843.44, y: 0.998143 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 470.87, y: 0.884937 },
          { x: 817.54, y: 0.950425 },
          { x: 1054.65, y: 0.964903 },
          { x: 1536.23, y: 0.97958 },
          { x: 2018.33, y: 0.986375 },
          { x: 3918.16, y: 0.994857 },
          { x: 5819.54, y: 0.997053 },
          { x: 7734.63, y: 0.998014 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 385.48, y: 0.950938 },
          { x: 868.33, y: 0.980056 },
          { x: 1229.09, y: 0.986477 },
          { x: 1635.66, y: 0.990296 },
          { x: 2050.95, y: 0.992522 },
          { x: 4005.91, y: 0.996413 },
          { x: 5949.66, y: 0.997663 },
          { x: 7888.41, y: 0.998296 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 397.60, y: 0.947062 },
          { x: 875.36, y: 0.977475 },
          { x: 1239.87, y: 0.984705 },
          { x: 1647.28, y: 0.988996 },
          { x: 2061.13, y: 0.991576 },
          { x: 4009.54, y: 0.995992 },
          { x: 5946.24, y: 0.997415 },
          { x: 7888.07, y: 0.998114 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.56, y: 0.935533 },
          { x: 860.37, y: 0.975849 },
          { x: 1225.85, y: 0.984204 },
          { x: 1633.73, y: 0.989113 },
          { x: 2041.19, y: 0.991782 },
          { x: 3988.11, y: 0.99635 },
          { x: 5943.94, y: 0.997708 },
          { x: 7880.73, y: 0.998375 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.28, y: 0.931816 },
          { x: 866.77, y: 0.973292 },
          { x: 1232.90, y: 0.98252 },
          { x: 1638.65, y: 0.987814 },
          { x: 2055.25, y: 0.990828 },
          { x: 4003.05, y: 0.995924 },
          { x: 5938.67, y: 0.99743 },
          { x: 7886.05, y: 0.998181 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1180.82, y: 0.963301 },
          { x: 1180.98, y: 0.96331 },
          { x: 1284.97, y: 0.966077 },
          { x: 1880.35, y: 0.980594 },
          { x: 3718.94, y: 0.992839 },
          { x: 6472.10, y: 0.996964 },
          { x: 1206.04, y: 0.964021 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 502.22, y: 0.870522 },
          { x: 773.82, y: 0.909357 },
          { x: 1167.33, y: 0.946457 },
          { x: 1929.79, y: 0.974752 },
          { x: 3877.04, y: 0.990279 },
          { x: 6727.82, y: 0.995109 },
          { x: 964.74, y: 0.931141 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 749.59, y: 0.977098 },
          { x: 837.72, y: 0.978692 },
          { x: 1138.66, y: 0.984055 },
          { x: 1874.36, y: 0.990513 },
          { x: 3719.70, y: 0.995595 },
          { x: 6041.28, y: 0.997918 },
          { x: 971.95, y: 0.981134 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 410.77, y: 0.920325 },
          { x: 800.86, y: 0.956444 },
          { x: 1189.35, y: 0.972976 },
          { x: 1955.41, y: 0.984925 },
          { x: 3881.26, y: 0.993057 },
          { x: 6730.67, y: 0.996061 },
          { x: 990.57, y: 0.966294 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 503.28, y: 0.869948 },
          { x: 772.50, y: 0.908014 },
          { x: 1167.87, y: 0.945724 },
          { x: 1934.21, y: 0.974802 },
          { x: 3869.53, y: 0.990327 },
          { x: 6725.80, y: 0.995171 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 501.75, y: 0.870066 },
          { x: 773.58, y: 0.909535 },
          { x: 1166.73, y: 0.946373 },
          { x: 1930.31, y: 0.975161 },
          { x: 3875.30, y: 0.990356 },
          { x: 6727.34, y: 0.995133 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 448.40, y: 0.943773 },
          { x: 802.34, y: 0.965889 },
          { x: 1190.97, y: 0.976888 },
          { x: 1968.64, y: 0.986605 },
          { x: 3811.51, y: 0.993743 },
          { x: 6552.23, y: 0.996566 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 448.40, y: 0.943773 },
          { x: 802.34, y: 0.965889 },
          { x: 1190.97, y: 0.976888 },
          { x: 1968.64, y: 0.986605 },
          { x: 3811.51, y: 0.993743 },
          { x: 6552.23, y: 0.996566 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1114.75, y: 0.963077 },
          { x: 1115.03, y: 0.963086 },
          { x: 1252.56, y: 0.966144 },
          { x: 1872.65, y: 0.98081 },
          { x: 3708.59, y: 0.992696 },
          { x: 6457.09, y: 0.99677 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 495.66, y: 0.886179 },
          { x: 784.30, y: 0.919922 },
          { x: 1161.45, y: 0.950061 },
          { x: 1889.75, y: 0.976005 },
          { x: 3738.75, y: 0.991565 },
          { x: 6442.97, y: 0.996533 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 783.29, y: 0.977149 },
          { x: 859.39, y: 0.978601 },
          { x: 1143.31, y: 0.983836 },
          { x: 1874.72, y: 0.990535 },
          { x: 3716.36, y: 0.995716 },
          { x: 6275.17, y: 0.998139 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 0.922024 },
          { x: 801.55, y: 0.960424 },
          { x: 1190.70, y: 0.976015 },
          { x: 1969.00, y: 0.987134 },
          { x: 3914.32, y: 0.993814 },
          { x: 6771.45, y: 0.996545 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 496.47, y: 0.87091 },
          { x: 773.88, y: 0.911885 },
          { x: 1170.14, y: 0.948691 },
          { x: 1560.35, y: 0.966565 },
          { x: 1935.65, y: 0.975979 },
          { x: 3869.05, y: 0.9907 },
          { x: 5765.12, y: 0.994349 },
          { x: 7662.35, y: 0.995991 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 503.19, y: 0.870066 },
          { x: 775.09, y: 0.909695 },
          { x: 1168.51, y: 0.946417 },
          { x: 1548.05, y: 0.965118 },
          { x: 1931.31, y: 0.975108 },
          { x: 3876.37, y: 0.990377 },
          { x: 5764.95, y: 0.994071 },
          { x: 7668.83, y: 0.995822 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 444.05, y: 0.943362 },
          { x: 801.81, y: 0.965337 },
          { x: 1189.41, y: 0.97662 },
          { x: 1578.14, y: 0.982577 },
          { x: 1958.78, y: 0.986554 },
          { x: 3814.68, y: 0.99341 },
          { x: 5646.60, y: 0.995689 },
          { x: 7467.73, y: 0.996931 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 444.05, y: 0.943362 },
          { x: 801.81, y: 0.965337 },
          { x: 1189.41, y: 0.97662 },
          { x: 1578.14, y: 0.982577 },
          { x: 1958.78, y: 0.986554 },
          { x: 3814.68, y: 0.99341 },
          { x: 5646.60, y: 0.995689 },
          { x: 7467.73, y: 0.996931 }
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
        min: 0.98,
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

var ctx_t1_20241223_vbr_bitrate_ms_ssim_data = document.getElementById('chart_t1_20241223_vbr_bitrate_ms_ssim');
const chart_t1_20241223_vbr_bitrate_ms_ssim_data = new Chart(ctx_t1_20241223_vbr_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 400.28, y: 0.918952 },
          { x: 701.18, y: 0.954608 },
          { x: 1103.56, y: 0.97478 },
          { x: 1363.76, y: 0.980783 },
          { x: 1729.39, y: 0.986446 },
          { x: 3317.24, y: 0.994341 },
          { x: 4658.34, y: 0.996327 },
          { x: 5614.75, y: 0.997166 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.83, y: 0.915324 },
          { x: 710.07, y: 0.951098 },
          { x: 1105.82, y: 0.972538 },
          { x: 1376.74, y: 0.979493 },
          { x: 1746.98, y: 0.985143 },
          { x: 3342.09, y: 0.993827 },
          { x: 4758.34, y: 0.996039 },
          { x: 5793.94, y: 0.996963 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 381.15, y: 0.951619 },
          { x: 724.87, y: 0.977406 },
          { x: 1064.31, y: 0.985763 },
          { x: 1385.58, y: 0.989889 },
          { x: 1725.07, y: 0.992099 },
          { x: 3202.08, y: 0.996044 },
          { x: 4152.53, y: 0.997121 },
          { x: 5042.26, y: 0.997597 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 382.04, y: 0.94939 },
          { x: 725.15, y: 0.976386 },
          { x: 1077.14, y: 0.985124 },
          { x: 1394.48, y: 0.989348 },
          { x: 1740.15, y: 0.991796 },
          { x: 3258.14, y: 0.995854 },
          { x: 4261.90, y: 0.997042 },
          { x: 5134.71, y: 0.997519 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.92, y: 0.952249 },
          { x: 719.68, y: 0.977715 },
          { x: 1056.86, y: 0.985937 },
          { x: 1380.15, y: 0.990315 },
          { x: 1718.68, y: 0.992476 },
          { x: 3179.97, y: 0.996345 },
          { x: 4098.78, y: 0.997397 },
          { x: 5004.86, y: 0.997917 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 382.54, y: 0.949974 },
          { x: 724.33, y: 0.976817 },
          { x: 1065.96, y: 0.985318 },
          { x: 1384.87, y: 0.989499 },
          { x: 1737.61, y: 0.992088 },
          { x: 3223.73, y: 0.996133 },
          { x: 4223.02, y: 0.997355 },
          { x: 5064.81, y: 0.997815 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 435.93, y: 0.965942 },
          { x: 801.88, y: 0.98288 },
          { x: 1160.12, y: 0.988477 },
          { x: 1531.26, y: 0.991455 },
          { x: 1901.94, y: 0.993088 },
          { x: 3733.97, y: 0.996287 },
          { x: 5542.44, y: 0.997507 },
          { x: 7060.74, y: 0.998114 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 437.31, y: 0.964039 },
          { x: 802.72, y: 0.981987 },
          { x: 1167.73, y: 0.987944 },
          { x: 1532.97, y: 0.990958 },
          { x: 1884.81, y: 0.992601 },
          { x: 3775.89, y: 0.996164 },
          { x: 5569.32, y: 0.997371 },
          { x: 7072.06, y: 0.998039 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 442.22, y: 0.966358 },
          { x: 804.19, y: 0.983205 },
          { x: 1167.69, y: 0.988912 },
          { x: 1533.26, y: 0.991763 },
          { x: 1888.29, y: 0.993252 },
          { x: 3755.42, y: 0.996585 },
          { x: 5588.88, y: 0.99771 },
          { x: 7330.99, y: 0.998301 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 438.60, y: 0.964103 },
          { x: 800.18, y: 0.982141 },
          { x: 1166.83, y: 0.988266 },
          { x: 1538.75, y: 0.991329 },
          { x: 1907.16, y: 0.993034 },
          { x: 3784.83, y: 0.996466 },
          { x: 5586.27, y: 0.997616 },
          { x: 7349.89, y: 0.998235 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 654.79, y: 0.948631 },
          { x: 940.21, y: 0.967348 },
          { x: 1311.48, y: 0.978207 },
          { x: 1603.90, y: 0.982485 },
          { x: 2048.65, y: 0.986651 },
          { x: 3825.16, y: 0.993598 },
          { x: 5593.03, y: 0.995967 },
          { x: 7011.14, y: 0.997118 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 665.08, y: 0.948395 },
          { x: 941.87, y: 0.966714 },
          { x: 1314.65, y: 0.977732 },
          { x: 1593.68, y: 0.981844 },
          { x: 2051.79, y: 0.986267 },
          { x: 3826.53, y: 0.993347 },
          { x: 5596.68, y: 0.99571 },
          { x: 7027.37, y: 0.996963 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 390.71, y: 0.94544 },
          { x: 764.57, y: 0.975651 },
          { x: 1131.52, y: 0.985125 },
          { x: 1494.41, y: 0.989394 },
          { x: 1855.92, y: 0.991598 },
          { x: 3501.39, y: 0.995645 },
          { x: 4842.90, y: 0.996571 },
          { x: 5586.33, y: 0.997187 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.35, y: 0.94254 },
          { x: 766.74, y: 0.974811 },
          { x: 1137.54, y: 0.984528 },
          { x: 1501.04, y: 0.988663 },
          { x: 1869.07, y: 0.991095 },
          { x: 3534.74, y: 0.995207 },
          { x: 4905.20, y: 0.996261 },
          { x: 5673.26, y: 0.997107 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.55, y: 0.945829 },
          { x: 764.78, y: 0.975974 },
          { x: 1133.33, y: 0.984474 },
          { x: 1495.20, y: 0.989784 },
          { x: 1847.35, y: 0.992053 },
          { x: 3483.61, y: 0.995956 },
          { x: 4734.55, y: 0.99696 },
          { x: 5409.71, y: 0.997459 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.20, y: 0.942255 },
          { x: 768.01, y: 0.974811 },
          { x: 1134.34, y: 0.984663 },
          { x: 1504.83, y: 0.989029 },
          { x: 1862.66, y: 0.991481 },
          { x: 3510.40, y: 0.995717 },
          { x: 4794.72, y: 0.996611 },
          { x: 5506.58, y: 0.997424 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 442.40, y: 0.967103 },
          { x: 808.17, y: 0.982248 },
          { x: 1182.99, y: 0.988328 },
          { x: 1570.81, y: 0.991205 },
          { x: 1961.28, y: 0.993059 },
          { x: 3728.07, y: 0.996187 },
          { x: 5349.75, y: 0.997264 },
          { x: 6772.53, y: 0.997878 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 447.76, y: 0.965415 },
          { x: 810.47, y: 0.981395 },
          { x: 1185.89, y: 0.987775 },
          { x: 1574.23, y: 0.990826 },
          { x: 1965.18, y: 0.992672 },
          { x: 3746.35, y: 0.996001 },
          { x: 5366.69, y: 0.997147 },
          { x: 6806.33, y: 0.997767 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 440.73, y: 0.966701 },
          { x: 811.49, y: 0.982428 },
          { x: 1191.16, y: 0.988719 },
          { x: 1569.58, y: 0.991467 },
          { x: 1946.24, y: 0.993224 },
          { x: 3806.81, y: 0.996406 },
          { x: 5470.40, y: 0.997503 },
          { x: 7039.79, y: 0.998058 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 445.59, y: 0.965286 },
          { x: 813.46, y: 0.981267 },
          { x: 1183.58, y: 0.987797 },
          { x: 1567.27, y: 0.990992 },
          { x: 1943.23, y: 0.992812 },
          { x: 3830.91, y: 0.996245 },
          { x: 5478.60, y: 0.997404 },
          { x: 7075.22, y: 0.997965 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1056.91, y: 0.970255 },
          { x: 1056.91, y: 0.970255 },
          { x: 1180.13, y: 0.974573 },
          { x: 1571.32, y: 0.982854 },
          { x: 1964.16, y: 0.987244 },
          { x: 3903.63, y: 0.994409 },
          { x: 5822.44, y: 0.996401 },
          { x: 7716.78, y: 0.997335 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 0.96985 },
          { x: 1057.25, y: 0.96985 },
          { x: 1181.79, y: 0.974217 },
          { x: 1574.61, y: 0.982497 },
          { x: 1965.73, y: 0.986898 },
          { x: 3916.33, y: 0.994252 },
          { x: 5839.86, y: 0.996308 },
          { x: 7748.49, y: 0.997276 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 388.66, y: 0.940334 },
          { x: 752.32, y: 0.973019 },
          { x: 1107.09, y: 0.983065 },
          { x: 1463.64, y: 0.988085 },
          { x: 1805.14, y: 0.990737 },
          { x: 3333.03, y: 0.995495 },
          { x: 4395.07, y: 0.996613 },
          { x: 5112.32, y: 0.997127 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.11, y: 0.939353 },
          { x: 754.54, y: 0.971746 },
          { x: 1110.19, y: 0.982559 },
          { x: 1469.31, y: 0.987612 },
          { x: 1813.87, y: 0.990416 },
          { x: 3351.83, y: 0.995366 },
          { x: 4454.37, y: 0.996584 },
          { x: 5191.37, y: 0.997229 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.56, y: 0.94044 },
          { x: 751.29, y: 0.973404 },
          { x: 1107.31, y: 0.983742 },
          { x: 1463.49, y: 0.988567 },
          { x: 1801.62, y: 0.991157 },
          { x: 3293.66, y: 0.995891 },
          { x: 4318.79, y: 0.997027 },
          { x: 4998.03, y: 0.997477 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.40, y: 0.939876 },
          { x: 756.16, y: 0.971627 },
          { x: 1109.26, y: 0.98286 },
          { x: 1468.83, y: 0.987985 },
          { x: 1810.47, y: 0.990758 },
          { x: 3324.85, y: 0.99575 },
          { x: 4380.05, y: 0.996987 },
          { x: 5089.51, y: 0.997465 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1056.25, y: 0.970661 },
          { x: 1056.25, y: 0.970661 },
          { x: 1180.40, y: 0.974855 },
          { x: 1964.03, y: 0.987471 },
          { x: 3902.07, y: 0.994528 },
          { x: 6771.54, y: 0.996988 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 0.96985 },
          { x: 1057.25, y: 0.96985 },
          { x: 1181.79, y: 0.974217 },
          { x: 1965.73, y: 0.986898 },
          { x: 3916.33, y: 0.994252 },
          { x: 6795.28, y: 0.996868 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 398.79, y: 0.935345 },
          { x: 775.50, y: 0.967631 },
          { x: 1150.83, y: 0.97923 },
          { x: 1869.63, y: 0.98858 },
          { x: 3467.53, y: 0.994724 },
          { x: 5154.81, y: 0.996688 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.15, y: 0.934857 },
          { x: 767.90, y: 0.964589 },
          { x: 1144.86, y: 0.976296 },
          { x: 1866.40, y: 0.986948 },
          { x: 3475.03, y: 0.994544 },
          { x: 5089.77, y: 0.996511 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 398.57, y: 0.935645 },
          { x: 775.33, y: 0.967806 },
          { x: 1150.34, y: 0.979645 },
          { x: 1864.23, y: 0.989031 },
          { x: 3432.33, y: 0.995189 },
          { x: 5025.07, y: 0.997123 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.28, y: 0.934967 },
          { x: 768.29, y: 0.964964 },
          { x: 1140.98, y: 0.976526 },
          { x: 1849.98, y: 0.988647 },
          { x: 3417.42, y: 0.994937 },
          { x: 4923.23, y: 0.996925 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1056.88, y: 0.969114 },
          { x: 1056.88, y: 0.969114 },
          { x: 1180.31, y: 0.973752 },
          { x: 1571.27, y: 0.982704 },
          { x: 1964.13, y: 0.987198 },
          { x: 3903.46, y: 0.994407 },
          { x: 5822.61, y: 0.996397 },
          { x: 7716.25, y: 0.997336 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.17, y: 0.96872 },
          { x: 1057.17, y: 0.96872 },
          { x: 1181.78, y: 0.97337 },
          { x: 1573.01, y: 0.982326 },
          { x: 1965.70, y: 0.986878 },
          { x: 3916.51, y: 0.994249 },
          { x: 5839.77, y: 0.99631 },
          { x: 7748.61, y: 0.997278 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 437.93, y: 0.92115 },
          { x: 650.48, y: 0.947543 },
          { x: 895.82, y: 0.964413 },
          { x: 1197.94, y: 0.976144 },
          { x: 1489.61, y: 0.982043 },
          { x: 2967.22, y: 0.99207 },
          { x: 4648.55, y: 0.995031 },
          { x: 6228.26, y: 0.996206 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 456.20, y: 0.918638 },
          { x: 659.67, y: 0.945699 },
          { x: 899.14, y: 0.963027 },
          { x: 1197.86, y: 0.975569 },
          { x: 1489.26, y: 0.981676 },
          { x: 2968.14, y: 0.991997 },
          { x: 4647.89, y: 0.994954 },
          { x: 6219.01, y: 0.996185 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 0.92102 },
          { x: 647.66, y: 0.947308 },
          { x: 891.22, y: 0.965062 },
          { x: 1186.36, y: 0.976591 },
          { x: 1472.37, y: 0.982525 },
          { x: 2942.47, y: 0.992499 },
          { x: 4575.30, y: 0.995267 },
          { x: 6082.05, y: 0.996516 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 0.918753 },
          { x: 656.71, y: 0.945352 },
          { x: 894.59, y: 0.96384 },
          { x: 1188.13, y: 0.975775 },
          { x: 1478.52, y: 0.982123 },
          { x: 2952.89, y: 0.992418 },
          { x: 4588.21, y: 0.995168 },
          { x: 6079.99, y: 0.996476 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1057.34, y: 0.96984 },
          { x: 1057.34, y: 0.96984 },
          { x: 1185.23, y: 0.974386 },
          { x: 1979.95, y: 0.987582 },
          { x: 3947.02, y: 0.994568 },
          { x: 6868.10, y: 0.997018 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.14, y: 0.966329 },
          { x: 1057.14, y: 0.966329 },
          { x: 1179.38, y: 0.97133 },
          { x: 1968.24, y: 0.986037 },
          { x: 3934.19, y: 0.993952 },
          { x: 6862.25, y: 0.996705 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1058.89, y: 0.966648 },
          { x: 1058.89, y: 0.966648 },
          { x: 1182.64, y: 0.972023 },
          { x: 1576.22, y: 0.981723 },
          { x: 1972.04, y: 0.986668 },
          { x: 3943.11, y: 0.99421 },
          { x: 5895.07, y: 0.996258 },
          { x: 7825.82, y: 0.997239 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.02, y: 0.966244 },
          { x: 1057.02, y: 0.966244 },
          { x: 1178.79, y: 0.971221 },
          { x: 1573.72, y: 0.981091 },
          { x: 1966.49, y: 0.98604 },
          { x: 3928.65, y: 0.993936 },
          { x: 5877.24, y: 0.99611 },
          { x: 7806.61, y: 0.997116 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 900.39, y: 0.944966 },
          { x: 900.39, y: 0.944966 },
          { x: 998.77, y: 0.955414 },
          { x: 1716.65, y: 0.981344 },
          { x: 3421.20, y: 0.992235 },
          { x: 6160.43, y: 0.995958 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 898.63, y: 0.944473 },
          { x: 898.63, y: 0.944473 },
          { x: 1000.09, y: 0.955149 },
          { x: 1720.12, y: 0.981242 },
          { x: 3417.79, y: 0.992194 },
          { x: 6255.49, y: 0.995975 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 439.60, y: 0.9072 },
          { x: 839.87, y: 0.960612 },
          { x: 1095.74, y: 0.974083 },
          { x: 1575.88, y: 0.984309 },
          { x: 2052.30, y: 0.988959 },
          { x: 3967.27, y: 0.995004 },
          { x: 5884.01, y: 0.99678 },
          { x: 7809.38, y: 0.99766 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 498.47, y: 0.905816 },
          { x: 829.18, y: 0.95855 },
          { x: 1068.08, y: 0.971387 },
          { x: 1545.94, y: 0.983146 },
          { x: 2023.40, y: 0.988343 },
          { x: 3926.19, y: 0.994865 },
          { x: 5826.99, y: 0.996733 },
          { x: 7725.17, y: 0.997624 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 475.97, y: 0.952807 },
          { x: 912.45, y: 0.98066 },
          { x: 1293.44, y: 0.987139 },
          { x: 1687.38, y: 0.990648 },
          { x: 2089.99, y: 0.992688 },
          { x: 4049.64, y: 0.996212 },
          { x: 6005.96, y: 0.99741 },
          { x: 7954.92, y: 0.998042 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 420.54, y: 0.950419 },
          { x: 890.75, y: 0.979168 },
          { x: 1262.26, y: 0.986009 },
          { x: 1655.25, y: 0.989754 },
          { x: 2068.59, y: 0.991814 },
          { x: 4009.81, y: 0.995889 },
          { x: 5948.33, y: 0.997204 },
          { x: 7868.71, y: 0.997882 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 476.61, y: 0.952889 },
          { x: 910.48, y: 0.981438 },
          { x: 1292.41, y: 0.987543 },
          { x: 1687.66, y: 0.991119 },
          { x: 2089.06, y: 0.993023 },
          { x: 4047.22, y: 0.996489 },
          { x: 6005.79, y: 0.997655 },
          { x: 7950.64, y: 0.998266 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 418.70, y: 0.951335 },
          { x: 888.06, y: 0.980497 },
          { x: 1260.72, y: 0.986327 },
          { x: 1654.13, y: 0.990048 },
          { x: 2067.82, y: 0.992243 },
          { x: 4008.64, y: 0.996151 },
          { x: 5945.20, y: 0.997438 },
          { x: 7871.35, y: 0.998099 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 394.12, y: 0.955976 },
          { x: 877.03, y: 0.981805 },
          { x: 1238.51, y: 0.987564 },
          { x: 1646.78, y: 0.990837 },
          { x: 2050.87, y: 0.992654 },
          { x: 3999.88, y: 0.996178 },
          { x: 5923.29, y: 0.997343 },
          { x: 7843.46, y: 0.997935 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.73, y: 0.956137 },
          { x: 870.05, y: 0.981447 },
          { x: 1230.01, y: 0.987186 },
          { x: 1633.61, y: 0.990557 },
          { x: 2043.20, y: 0.992516 },
          { x: 3963.41, y: 0.996092 },
          { x: 5887.90, y: 0.997257 },
          { x: 7775.31, y: 0.997882 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.72, y: 0.956416 },
          { x: 875.28, y: 0.982049 },
          { x: 1235.77, y: 0.987848 },
          { x: 1647.34, y: 0.991203 },
          { x: 2050.32, y: 0.993024 },
          { x: 3990.27, y: 0.996481 },
          { x: 5910.17, y: 0.997628 },
          { x: 7822.21, y: 0.998197 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.76, y: 0.956292 },
          { x: 870.69, y: 0.981849 },
          { x: 1227.34, y: 0.987474 },
          { x: 1634.37, y: 0.990829 },
          { x: 2044.15, y: 0.992843 },
          { x: 3971.27, y: 0.996359 },
          { x: 5885.03, y: 0.997529 },
          { x: 7789.98, y: 0.998111 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 456.47, y: 0.906854 },
          { x: 840.79, y: 0.961435 },
          { x: 1096.46, y: 0.97409 },
          { x: 2052.36, y: 0.989155 },
          { x: 3968.60, y: 0.995027 },
          { x: 6849.76, y: 0.997304 },
          { x: 1096.46, y: 0.97409 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 499.92, y: 0.905493 },
          { x: 829.68, y: 0.958212 },
          { x: 1067.98, y: 0.971883 },
          { x: 2023.69, y: 0.988329 },
          { x: 3925.20, y: 0.994867 },
          { x: 6772.60, y: 0.997245 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 471.01, y: 0.952799 },
          { x: 911.50, y: 0.980728 },
          { x: 1291.72, y: 0.987075 },
          { x: 2091.40, y: 0.992648 },
          { x: 4048.72, y: 0.996225 },
          { x: 6983.50, y: 0.997787 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.14, y: 0.949935 },
          { x: 888.59, y: 0.979686 },
          { x: 1262.42, y: 0.985947 },
          { x: 2068.26, y: 0.991957 },
          { x: 4013.45, y: 0.995916 },
          { x: 6908.14, y: 0.997605 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 478.59, y: 0.952232 },
          { x: 912.22, y: 0.981269 },
          { x: 1292.90, y: 0.987508 },
          { x: 2086.98, y: 0.993018 },
          { x: 4048.61, y: 0.996492 },
          { x: 6980.69, y: 0.998015 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 420.50, y: 0.950786 },
          { x: 888.62, y: 0.980398 },
          { x: 1261.91, y: 0.986284 },
          { x: 2067.95, y: 0.992223 },
          { x: 4009.27, y: 0.996156 },
          { x: 6909.31, y: 0.997827 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 463.95, y: 0.899135 },
          { x: 827.78, y: 0.954548 },
          { x: 1067.01, y: 0.968134 },
          { x: 1546.10, y: 0.981312 },
          { x: 2033.23, y: 0.987195 },
          { x: 3973.90, y: 0.994376 },
          { x: 5900.26, y: 0.996428 },
          { x: 7843.44, y: 0.99741 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 470.87, y: 0.892382 },
          { x: 817.54, y: 0.952197 },
          { x: 1054.65, y: 0.965547 },
          { x: 1536.23, y: 0.979216 },
          { x: 2018.33, y: 0.985639 },
          { x: 3918.16, y: 0.993949 },
          { x: 5819.54, y: 0.996242 },
          { x: 7734.63, y: 0.9973 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 385.48, y: 0.951854 },
          { x: 868.33, y: 0.97867 },
          { x: 1229.09, y: 0.984985 },
          { x: 1635.66, y: 0.988862 },
          { x: 2050.95, y: 0.991185 },
          { x: 4005.91, y: 0.995388 },
          { x: 5949.66, y: 0.996817 },
          { x: 7888.41, y: 0.997571 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 397.60, y: 0.948227 },
          { x: 875.36, y: 0.976047 },
          { x: 1239.87, y: 0.98311 },
          { x: 1647.28, y: 0.987453 },
          { x: 2061.13, y: 0.99013 },
          { x: 4009.54, y: 0.9949 },
          { x: 5946.24, y: 0.996518 },
          { x: 7888.07, y: 0.997345 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.56, y: 0.938395 },
          { x: 860.37, y: 0.974744 },
          { x: 1225.85, y: 0.982798 },
          { x: 1633.73, y: 0.987671 },
          { x: 2041.19, y: 0.99041 },
          { x: 3988.11, y: 0.995314 },
          { x: 5943.94, y: 0.996873 },
          { x: 7880.73, y: 0.997675 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.28, y: 0.934993 },
          { x: 866.77, y: 0.972172 },
          { x: 1232.90, y: 0.981013 },
          { x: 1638.65, y: 0.986269 },
          { x: 2055.25, y: 0.989347 },
          { x: 4003.05, y: 0.994815 },
          { x: 5938.67, y: 0.996534 },
          { x: 7886.05, y: 0.997433 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1180.82, y: 0.96212 },
          { x: 1180.98, y: 0.96213 },
          { x: 1284.97, y: 0.964807 },
          { x: 1880.35, y: 0.978527 },
          { x: 3718.94, y: 0.991136 },
          { x: 6472.10, y: 0.995816 },
          { x: 1206.04, y: 0.962847 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 502.22, y: 0.880754 },
          { x: 773.82, y: 0.915788 },
          { x: 1167.33, y: 0.948699 },
          { x: 1929.79, y: 0.974319 },
          { x: 3877.04, y: 0.989137 },
          { x: 6727.82, y: 0.994106 },
          { x: 964.74, y: 0.935058 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 749.59, y: 0.974868 },
          { x: 837.72, y: 0.97651 },
          { x: 1138.66, y: 0.981836 },
          { x: 1874.36, y: 0.98851 },
          { x: 3719.70, y: 0.994214 },
          { x: 6041.28, y: 0.996992 },
          { x: 971.95, y: 0.978871 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 410.77, y: 0.924924 },
          { x: 800.86, y: 0.957264 },
          { x: 1189.35, y: 0.97237 },
          { x: 1955.41, y: 0.983669 },
          { x: 3881.26, y: 0.991813 },
          { x: 6730.67, y: 0.99505 },
          { x: 990.57, y: 0.966214 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 503.28, y: 0.88019 },
          { x: 772.50, y: 0.914737 },
          { x: 1167.87, y: 0.948198 },
          { x: 1934.21, y: 0.97446 },
          { x: 3869.53, y: 0.989238 },
          { x: 6725.80, y: 0.994211 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 501.75, y: 0.880205 },
          { x: 773.58, y: 0.915947 },
          { x: 1166.73, y: 0.948649 },
          { x: 1930.31, y: 0.974697 },
          { x: 3875.30, y: 0.98923 },
          { x: 6727.34, y: 0.994133 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 448.40, y: 0.945501 },
          { x: 802.34, y: 0.965589 },
          { x: 1190.97, y: 0.975794 },
          { x: 1968.64, y: 0.9851 },
          { x: 3811.51, y: 0.992368 },
          { x: 6552.23, y: 0.995476 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 448.40, y: 0.945501 },
          { x: 802.34, y: 0.965589 },
          { x: 1190.97, y: 0.975794 },
          { x: 1968.64, y: 0.9851 },
          { x: 3811.51, y: 0.992368 },
          { x: 6552.23, y: 0.995476 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1114.75, y: 0.961768 },
          { x: 1115.03, y: 0.961777 },
          { x: 1252.56, y: 0.96475 },
          { x: 1872.65, y: 0.978658 },
          { x: 3708.59, y: 0.990921 },
          { x: 6457.09, y: 0.995614 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 495.66, y: 0.893966 },
          { x: 784.30, y: 0.92461 },
          { x: 1161.45, y: 0.951729 },
          { x: 1889.75, y: 0.975571 },
          { x: 3738.75, y: 0.990491 },
          { x: 6442.97, y: 0.995688 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 783.29, y: 0.974985 },
          { x: 859.39, y: 0.976436 },
          { x: 1143.31, y: 0.981555 },
          { x: 1874.72, y: 0.988473 },
          { x: 3716.36, y: 0.994261 },
          { x: 6275.17, y: 0.997242 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 0.92654 },
          { x: 801.55, y: 0.960835 },
          { x: 1190.70, y: 0.975094 },
          { x: 1969.00, y: 0.985732 },
          { x: 3914.32, y: 0.992563 },
          { x: 6771.45, y: 0.995543 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 496.47, y: 0.881034 },
          { x: 773.88, y: 0.918117 },
          { x: 1170.14, y: 0.950794 },
          { x: 1560.35, y: 0.966866 },
          { x: 1935.65, y: 0.975514 },
          { x: 3869.05, y: 0.989612 },
          { x: 5765.12, y: 0.993326 },
          { x: 7662.35, y: 0.995078 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 503.19, y: 0.880205 },
          { x: 775.09, y: 0.916054 },
          { x: 1168.51, y: 0.948698 },
          { x: 1548.05, y: 0.965512 },
          { x: 1931.31, y: 0.974643 },
          { x: 3876.37, y: 0.989244 },
          { x: 5764.95, y: 0.993012 },
          { x: 7668.83, y: 0.994872 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 444.05, y: 0.945137 },
          { x: 801.81, y: 0.96514 },
          { x: 1189.41, y: 0.975584 },
          { x: 1578.14, y: 0.981243 },
          { x: 1958.78, y: 0.985056 },
          { x: 3814.68, y: 0.992043 },
          { x: 5646.60, y: 0.994524 },
          { x: 7467.73, y: 0.995925 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 444.05, y: 0.945137 },
          { x: 801.81, y: 0.96514 },
          { x: 1189.41, y: 0.975584 },
          { x: 1578.14, y: 0.981243 },
          { x: 1958.78, y: 0.985056 },
          { x: 3814.68, y: 0.992043 },
          { x: 5646.60, y: 0.994524 },
          { x: 7467.73, y: 0.995925 }
        ]
      },
    ],
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
        min: 0.98,
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

var ctx_t1_20241223_vbr_bitrate_vmaf_data = document.getElementById('chart_t1_20241223_vbr_bitrate_vmaf');
const chart_t1_20241223_vbr_bitrate_vmaf_data = new Chart(ctx_t1_20241223_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 400.28, y: 44.229804 },
          { x: 701.18, y: 66.177051 },
          { x: 1103.56, y: 79.196504 },
          { x: 1363.76, y: 83.873707 },
          { x: 1729.39, y: 88.448157 },
          { x: 3317.24, y: 95.869899 },
          { x: 4658.34, y: 97.551363 },
          { x: 5614.75, y: 98.099521 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.83, y: 42.715108 },
          { x: 710.07, y: 63.628481 },
          { x: 1105.82, y: 77.270293 },
          { x: 1376.74, y: 82.391657 },
          { x: 1746.98, y: 87.111054 },
          { x: 3342.09, y: 95.112692 },
          { x: 4758.34, y: 97.114404 },
          { x: 5793.94, y: 97.793867 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 381.15, y: 61.735468 },
          { x: 724.87, y: 80.383114 },
          { x: 1064.31, y: 87.67913 },
          { x: 1385.58, y: 91.551462 },
          { x: 1725.07, y: 93.766309 },
          { x: 3202.08, y: 97.393904 },
          { x: 4152.53, y: 98.113487 },
          { x: 5042.26, y: 98.377648 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 382.04, y: 60.194029 },
          { x: 725.15, y: 79.555413 },
          { x: 1077.14, y: 87.115615 },
          { x: 1394.48, y: 90.968363 },
          { x: 1740.15, y: 93.488983 },
          { x: 3258.14, y: 97.25306 },
          { x: 4261.90, y: 98.049444 },
          { x: 5134.71, y: 98.323211 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.92, y: 61.749782 },
          { x: 719.68, y: 80.280618 },
          { x: 1056.86, y: 87.538718 },
          { x: 1380.15, y: 91.703251 },
          { x: 1718.68, y: 93.881914 },
          { x: 3179.97, y: 97.459365 },
          { x: 4098.78, y: 98.150791 },
          { x: 5004.86, y: 98.429447 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 382.54, y: 60.103392 },
          { x: 724.33, y: 79.627699 },
          { x: 1065.96, y: 87.01888 },
          { x: 1384.87, y: 90.972487 },
          { x: 1737.61, y: 93.484954 },
          { x: 3223.73, y: 97.314231 },
          { x: 4223.02, y: 98.115943 },
          { x: 5064.81, y: 98.371472 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 435.93, y: 68.808385 },
          { x: 801.88, y: 82.873987 },
          { x: 1160.12, y: 88.657523 },
          { x: 1531.26, y: 91.934284 },
          { x: 1901.94, y: 93.790761 },
          { x: 3733.97, y: 97.20623 },
          { x: 5542.44, y: 98.120192 },
          { x: 7060.74, y: 98.507124 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 437.31, y: 67.315272 },
          { x: 802.72, y: 81.97913 },
          { x: 1167.73, y: 88.061742 },
          { x: 1532.97, y: 91.357316 },
          { x: 1884.81, y: 93.263932 },
          { x: 3775.89, y: 97.048392 },
          { x: 5569.32, y: 98.027 },
          { x: 7072.06, y: 98.45239 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 442.22, y: 69.011769 },
          { x: 804.19, y: 82.918999 },
          { x: 1167.69, y: 88.806526 },
          { x: 1533.26, y: 91.960283 },
          { x: 1888.29, y: 93.735973 },
          { x: 3755.42, y: 97.310043 },
          { x: 5588.88, y: 98.163344 },
          { x: 7330.99, y: 98.543167 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 438.60, y: 67.23451 },
          { x: 800.18, y: 81.896489 },
          { x: 1166.83, y: 88.126585 },
          { x: 1538.75, y: 91.485647 },
          { x: 1907.16, y: 93.457387 },
          { x: 3784.83, y: 97.137637 },
          { x: 5586.27, y: 98.088408 },
          { x: 7349.89, y: 98.493624 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 654.79, y: 60.945261 },
          { x: 940.21, y: 73.584735 },
          { x: 1311.48, y: 81.04622 },
          { x: 1603.90, y: 84.70841 },
          { x: 2048.65, y: 88.49898 },
          { x: 3825.16, y: 95.187858 },
          { x: 5593.03, y: 97.258402 },
          { x: 7011.14, y: 98.061312 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 665.08, y: 60.681328 },
          { x: 941.87, y: 72.742309 },
          { x: 1314.65, y: 80.208083 },
          { x: 1593.68, y: 83.682096 },
          { x: 2051.79, y: 87.653371 },
          { x: 3826.53, y: 94.566985 },
          { x: 5596.68, y: 96.78239 },
          { x: 7027.37, y: 97.746129 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 390.71, y: 58.267453 },
          { x: 764.57, y: 79.411211 },
          { x: 1131.52, y: 87.390121 },
          { x: 1494.41, y: 91.308013 },
          { x: 1855.92, y: 93.452786 },
          { x: 3501.39, y: 97.137015 },
          { x: 4842.90, y: 97.807361 },
          { x: 5586.33, y: 98.077733 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.35, y: 56.853237 },
          { x: 766.74, y: 78.806937 },
          { x: 1137.54, y: 86.895013 },
          { x: 1501.04, y: 90.779796 },
          { x: 1869.07, y: 93.016036 },
          { x: 3534.74, y: 96.831254 },
          { x: 4905.20, y: 97.569822 },
          { x: 5673.26, y: 98.030134 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.55, y: 58.157815 },
          { x: 764.78, y: 79.538767 },
          { x: 1133.33, y: 86.873809 },
          { x: 1495.20, y: 91.445855 },
          { x: 1847.35, y: 93.590538 },
          { x: 3483.61, y: 97.234464 },
          { x: 4734.55, y: 97.902681 },
          { x: 5409.71, y: 98.105901 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.20, y: 56.444876 },
          { x: 768.01, y: 78.546192 },
          { x: 1134.34, y: 86.778746 },
          { x: 1504.83, y: 90.859218 },
          { x: 1862.66, y: 93.132722 },
          { x: 3510.40, y: 97.049993 },
          { x: 4794.72, y: 97.707532 },
          { x: 5506.58, y: 98.08356 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 442.40, y: 69.507306 },
          { x: 808.17, y: 82.528072 },
          { x: 1182.99, y: 88.605641 },
          { x: 1570.81, y: 91.718836 },
          { x: 1961.28, y: 93.71892 },
          { x: 3728.07, y: 96.916923 },
          { x: 5349.75, y: 97.857385 },
          { x: 6772.53, y: 98.305908 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 447.76, y: 68.273543 },
          { x: 810.47, y: 81.753361 },
          { x: 1185.89, y: 88.046487 },
          { x: 1574.23, y: 91.296634 },
          { x: 1965.18, y: 93.314265 },
          { x: 3746.35, y: 96.739716 },
          { x: 5366.69, y: 97.743121 },
          { x: 6806.33, y: 98.216866 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 440.73, y: 69.407605 },
          { x: 811.49, y: 82.72646 },
          { x: 1191.16, y: 88.894453 },
          { x: 1569.58, y: 91.948975 },
          { x: 1946.24, y: 93.790922 },
          { x: 3806.81, y: 97.096473 },
          { x: 5470.40, y: 98.021118 },
          { x: 7039.79, y: 98.426962 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 445.59, y: 68.232594 },
          { x: 813.46, y: 81.812121 },
          { x: 1183.58, y: 88.050879 },
          { x: 1567.27, y: 91.402315 },
          { x: 1943.23, y: 93.370193 },
          { x: 3830.91, y: 96.961902 },
          { x: 5478.60, y: 97.936296 },
          { x: 7075.22, y: 98.360638 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1056.91, y: 75.681958 },
          { x: 1056.91, y: 75.681958 },
          { x: 1180.13, y: 78.783365 },
          { x: 1571.32, y: 85.225706 },
          { x: 1964.16, y: 89.028345 },
          { x: 3903.63, y: 95.771912 },
          { x: 5822.44, y: 97.524822 },
          { x: 7716.78, y: 98.215283 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 75.46581 },
          { x: 1057.25, y: 75.46581 },
          { x: 1181.79, y: 78.522937 },
          { x: 1574.61, y: 84.895074 },
          { x: 1965.73, y: 88.634657 },
          { x: 3916.33, y: 95.458559 },
          { x: 5839.86, y: 97.30675 },
          { x: 7748.49, y: 98.039277 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 388.66, y: 54.098405 },
          { x: 752.32, y: 77.519608 },
          { x: 1107.09, y: 85.698199 },
          { x: 1463.64, y: 90.037799 },
          { x: 1805.14, y: 92.531271 },
          { x: 3333.03, y: 96.918616 },
          { x: 4395.07, y: 97.796886 },
          { x: 5112.32, y: 98.078054 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.11, y: 53.654497 },
          { x: 754.54, y: 76.717194 },
          { x: 1110.19, y: 85.058712 },
          { x: 1469.31, y: 89.487541 },
          { x: 1813.87, y: 92.04026 },
          { x: 3351.83, y: 96.680922 },
          { x: 4454.37, y: 97.680618 },
          { x: 5191.37, y: 98.043928 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.56, y: 54.08266 },
          { x: 751.29, y: 77.440624 },
          { x: 1107.31, y: 85.933106 },
          { x: 1463.49, y: 90.239615 },
          { x: 1801.62, y: 92.653229 },
          { x: 3293.66, y: 97.017366 },
          { x: 4318.79, y: 97.887547 },
          { x: 4998.03, y: 98.138852 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.40, y: 53.723162 },
          { x: 756.16, y: 76.520237 },
          { x: 1109.26, y: 85.171913 },
          { x: 1468.83, y: 89.573821 },
          { x: 1810.47, y: 92.140084 },
          { x: 3324.85, y: 96.766907 },
          { x: 4380.05, y: 97.764913 },
          { x: 5089.51, y: 98.043819 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1056.25, y: 76.005045 },
          { x: 1056.25, y: 76.005045 },
          { x: 1180.40, y: 79.005757 },
          { x: 1964.03, y: 89.221453 },
          { x: 3902.07, y: 95.86892 },
          { x: 6771.54, y: 97.961251 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 75.46581 },
          { x: 1057.25, y: 75.46581 },
          { x: 1181.79, y: 78.522937 },
          { x: 1965.73, y: 88.634657 },
          { x: 3916.33, y: 95.458559 },
          { x: 6795.28, y: 97.739403 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 398.79, y: 51.666353 },
          { x: 775.50, y: 73.964596 },
          { x: 1150.83, y: 82.945435 },
          { x: 1869.63, y: 91.155859 },
          { x: 3467.53, y: 96.684099 },
          { x: 5154.81, y: 98.006142 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.15, y: 50.735845 },
          { x: 767.90, y: 72.456014 },
          { x: 1144.86, y: 81.228848 },
          { x: 1866.40, y: 89.975619 },
          { x: 3475.03, y: 96.441109 },
          { x: 5089.77, y: 97.842641 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 398.57, y: 51.503637 },
          { x: 775.33, y: 73.743248 },
          { x: 1150.34, y: 83.022221 },
          { x: 1864.23, y: 91.28715 },
          { x: 3432.33, y: 96.847647 },
          { x: 5025.07, y: 98.117968 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.28, y: 50.631164 },
          { x: 768.29, y: 72.431835 },
          { x: 1140.98, y: 81.350094 },
          { x: 1849.98, y: 90.871194 },
          { x: 3417.42, y: 96.503812 },
          { x: 4923.23, y: 97.935581 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1056.88, y: 74.794057 },
          { x: 1056.88, y: 74.794057 },
          { x: 1180.31, y: 78.189283 },
          { x: 1571.27, y: 85.093832 },
          { x: 1964.13, y: 88.997926 },
          { x: 3903.46, y: 95.76979 },
          { x: 5822.61, y: 97.523646 },
          { x: 7716.25, y: 98.21933 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.17, y: 74.587504 },
          { x: 1057.17, y: 74.587504 },
          { x: 1181.78, y: 77.927944 },
          { x: 1573.01, y: 84.74411 },
          { x: 1965.70, y: 88.602213 },
          { x: 3916.51, y: 95.45817 },
          { x: 5839.77, y: 97.305513 },
          { x: 7748.61, y: 98.040071 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 437.93, y: 40.639423 },
          { x: 650.48, y: 57.667016 },
          { x: 895.82, y: 69.287066 },
          { x: 1197.94, y: 77.870254 },
          { x: 1489.61, y: 83.092854 },
          { x: 2967.22, y: 93.143598 },
          { x: 4648.55, y: 96.271488 },
          { x: 6228.26, y: 97.399931 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 456.20, y: 40.35097 },
          { x: 659.67, y: 56.942264 },
          { x: 899.14, y: 68.437496 },
          { x: 1197.86, y: 77.470635 },
          { x: 1489.26, y: 82.806705 },
          { x: 2968.14, y: 93.090586 },
          { x: 4647.89, y: 96.217268 },
          { x: 6219.01, y: 97.393525 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 40.668883 },
          { x: 647.66, y: 57.264844 },
          { x: 891.22, y: 69.417458 },
          { x: 1186.36, y: 77.990163 },
          { x: 1472.37, y: 83.231264 },
          { x: 2942.47, y: 93.340925 },
          { x: 4575.30, y: 96.349862 },
          { x: 6082.05, y: 97.472349 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 40.402405 },
          { x: 656.71, y: 56.369293 },
          { x: 894.59, y: 68.65207 },
          { x: 1188.13, y: 77.502798 },
          { x: 1478.52, y: 82.889142 },
          { x: 2952.89, y: 93.302498 },
          { x: 4588.21, y: 96.295449 },
          { x: 6079.99, y: 97.467354 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1057.34, y: 74.957335 },
          { x: 1057.34, y: 74.957335 },
          { x: 1185.23, y: 78.373054 },
          { x: 1979.95, y: 89.321647 },
          { x: 3947.02, y: 95.886211 },
          { x: 6868.10, y: 97.993201 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.14, y: 73.567491 },
          { x: 1057.14, y: 73.567491 },
          { x: 1179.38, y: 76.978676 },
          { x: 1968.24, y: 88.071253 },
          { x: 3934.19, y: 95.228306 },
          { x: 6862.25, y: 97.624575 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1058.89, y: 73.283608 },
          { x: 1058.89, y: 73.283608 },
          { x: 1182.64, y: 77.082466 },
          { x: 1576.22, y: 84.547011 },
          { x: 1972.04, y: 88.707048 },
          { x: 3943.11, y: 95.694078 },
          { x: 5895.07, y: 97.502013 },
          { x: 7825.82, y: 98.226601 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.02, y: 73.44431 },
          { x: 1057.02, y: 73.44431 },
          { x: 1178.79, y: 76.878192 },
          { x: 1573.72, y: 84.070879 },
          { x: 1966.49, y: 88.058763 },
          { x: 3928.65, y: 95.206303 },
          { x: 5877.24, y: 97.158102 },
          { x: 7806.61, y: 97.930985 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 900.39, y: 59.156818 },
          { x: 900.39, y: 59.156818 },
          { x: 998.77, y: 64.567347 },
          { x: 1716.65, y: 82.754897 },
          { x: 3421.20, y: 93.342431 },
          { x: 6160.43, y: 97.0489 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 898.63, y: 58.830484 },
          { x: 898.63, y: 58.830484 },
          { x: 1000.09, y: 64.452187 },
          { x: 1720.12, y: 82.67805 },
          { x: 3417.79, y: 93.31616 },
          { x: 6255.49, y: 97.073184 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 439.60, y: 42.026253 },
          { x: 839.87, y: 66.433982 },
          { x: 1095.74, y: 76.124418 },
          { x: 1575.88, y: 85.162212 },
          { x: 2052.30, y: 89.852443 },
          { x: 3967.27, y: 96.204846 },
          { x: 5884.01, y: 97.728295 },
          { x: 7809.38, y: 98.339371 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 498.47, y: 42.68882 },
          { x: 829.18, y: 66.296656 },
          { x: 1068.08, y: 74.429971 },
          { x: 1545.94, y: 84.158255 },
          { x: 2023.40, y: 89.200511 },
          { x: 3926.19, y: 95.951303 },
          { x: 5826.99, y: 97.660476 },
          { x: 7725.17, y: 98.316582 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 475.97, y: 58.412567 },
          { x: 912.45, y: 80.825433 },
          { x: 1293.44, y: 87.5285 },
          { x: 1687.38, y: 91.420296 },
          { x: 2089.99, y: 93.694556 },
          { x: 4049.64, y: 97.283126 },
          { x: 6005.96, y: 98.14934 },
          { x: 7954.92, y: 98.532952 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 420.54, y: 57.403556 },
          { x: 890.75, y: 79.250907 },
          { x: 1262.26, y: 86.203253 },
          { x: 1655.25, y: 90.257537 },
          { x: 2068.59, y: 92.53822 },
          { x: 4009.81, y: 96.835472 },
          { x: 5948.33, y: 97.92746 },
          { x: 7868.71, y: 98.412283 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 476.61, y: 58.263436 },
          { x: 910.48, y: 81.355721 },
          { x: 1292.41, y: 87.771753 },
          { x: 1687.66, y: 91.724745 },
          { x: 2089.06, y: 93.863523 },
          { x: 4047.22, y: 97.399854 },
          { x: 6005.79, y: 98.24229 },
          { x: 7950.64, y: 98.609442 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 418.70, y: 57.88787 },
          { x: 888.06, y: 80.357827 },
          { x: 1260.72, y: 86.29535 },
          { x: 1654.13, y: 90.357042 },
          { x: 2067.82, y: 92.784518 },
          { x: 4008.64, y: 96.920535 },
          { x: 5945.20, y: 98.00049 },
          { x: 7871.35, y: 98.478892 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 394.12, y: 62.095734 },
          { x: 877.03, y: 82.660343 },
          { x: 1238.51, y: 88.600338 },
          { x: 1646.78, y: 92.114501 },
          { x: 2050.87, y: 94.009376 },
          { x: 3999.88, y: 97.384359 },
          { x: 5923.29, y: 98.210409 },
          { x: 7843.46, y: 98.563926 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.73, y: 62.847787 },
          { x: 870.05, y: 82.673186 },
          { x: 1230.01, y: 88.439236 },
          { x: 1633.61, y: 91.890748 },
          { x: 2043.20, y: 93.941583 },
          { x: 3963.41, y: 97.31154 },
          { x: 5887.90, y: 98.158338 },
          { x: 7775.31, y: 98.554162 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.72, y: 62.230949 },
          { x: 875.28, y: 82.677172 },
          { x: 1235.77, y: 88.634363 },
          { x: 1647.34, y: 92.210231 },
          { x: 2050.32, y: 94.159587 },
          { x: 3990.27, y: 97.469729 },
          { x: 5910.17, y: 98.296136 },
          { x: 7822.21, y: 98.633733 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.76, y: 62.853996 },
          { x: 870.69, y: 82.829498 },
          { x: 1227.34, y: 88.479365 },
          { x: 1634.37, y: 91.933392 },
          { x: 2044.15, y: 94.049482 },
          { x: 3971.27, y: 97.371685 },
          { x: 5885.03, y: 98.237984 },
          { x: 7789.98, y: 98.604235 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 456.47, y: 42.065246 },
          { x: 840.79, y: 66.998898 },
          { x: 1096.46, y: 76.153467 },
          { x: 2052.36, y: 90.053955 },
          { x: 3968.60, y: 96.216668 },
          { x: 6849.76, y: 98.112405 },
          { x: 1096.46, y: 76.153467 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 499.92, y: 42.640054 },
          { x: 829.68, y: 66.100493 },
          { x: 1067.98, y: 74.808868 },
          { x: 2023.69, y: 89.168673 },
          { x: 3925.20, y: 95.950141 },
          { x: 6772.60, y: 98.054468 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 471.01, y: 58.472032 },
          { x: 911.50, y: 80.886519 },
          { x: 1291.72, y: 87.44458 },
          { x: 2091.40, y: 93.639281 },
          { x: 4048.72, y: 97.296092 },
          { x: 6983.50, y: 98.39419 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.14, y: 57.148535 },
          { x: 888.59, y: 79.761926 },
          { x: 1262.42, y: 86.144154 },
          { x: 2068.26, y: 92.698608 },
          { x: 4013.45, y: 96.856215 },
          { x: 6908.14, y: 98.218714 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 478.59, y: 57.898473 },
          { x: 912.22, y: 81.146055 },
          { x: 1292.90, y: 87.679177 },
          { x: 2086.98, y: 93.829178 },
          { x: 4048.61, y: 97.401473 },
          { x: 6980.69, y: 98.468255 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 420.50, y: 57.48624 },
          { x: 888.62, y: 80.243892 },
          { x: 1261.91, y: 86.245745 },
          { x: 2067.95, y: 92.768224 },
          { x: 4009.27, y: 96.916348 },
          { x: 6909.31, y: 98.2872 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 463.95, y: 40.580809 },
          { x: 827.78, y: 64.065672 },
          { x: 1067.01, y: 72.60861 },
          { x: 1546.10, y: 82.826758 },
          { x: 2033.23, y: 88.228513 },
          { x: 3973.90, y: 95.522252 },
          { x: 5900.26, y: 97.458281 },
          { x: 7843.44, y: 98.180107 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 470.87, y: 40.357175 },
          { x: 817.54, y: 64.625092 },
          { x: 1054.65, y: 72.458028 },
          { x: 1536.23, y: 82.116944 },
          { x: 2018.33, y: 87.422269 },
          { x: 3918.16, y: 95.154858 },
          { x: 5819.54, y: 97.310893 },
          { x: 7734.63, y: 98.123077 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 385.48, y: 57.475506 },
          { x: 868.33, y: 79.138007 },
          { x: 1229.09, y: 85.589382 },
          { x: 1635.66, y: 89.673491 },
          { x: 2050.95, y: 92.206022 },
          { x: 4005.91, y: 96.640983 },
          { x: 5949.66, y: 97.827616 },
          { x: 7888.41, y: 98.351545 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 397.60, y: 54.971182 },
          { x: 875.36, y: 76.830578 },
          { x: 1239.87, y: 83.859589 },
          { x: 1647.28, y: 88.330684 },
          { x: 2061.13, y: 91.156109 },
          { x: 4009.54, y: 96.138642 },
          { x: 5946.24, y: 97.580917 },
          { x: 7888.07, y: 98.193282 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.56, y: 50.197565 },
          { x: 860.37, y: 75.70624 },
          { x: 1225.85, y: 83.361036 },
          { x: 1633.73, y: 88.320779 },
          { x: 2041.19, y: 91.23282 },
          { x: 3988.11, y: 96.425524 },
          { x: 5943.94, y: 97.773633 },
          { x: 7880.73, y: 98.328117 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.28, y: 48.266252 },
          { x: 866.77, y: 73.592307 },
          { x: 1232.90, y: 81.741471 },
          { x: 1638.65, y: 87.038263 },
          { x: 2055.25, y: 90.175444 },
          { x: 4003.05, y: 95.900864 },
          { x: 5938.67, y: 97.485493 },
          { x: 7886.05, y: 98.15865 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1180.82, y: 55.200234 },
          { x: 1180.98, y: 55.192649 },
          { x: 1284.97, y: 58.636719 },
          { x: 1880.35, y: 71.621467 },
          { x: 3718.94, y: 86.420851 },
          { x: 6472.10, y: 93.410882 },
          { x: 1206.04, y: 55.919472 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 502.22, y: 29.77136 },
          { x: 773.82, y: 47.804845 },
          { x: 1167.33, y: 62.574858 },
          { x: 1929.79, y: 78.214047 },
          { x: 3877.04, y: 90.591873 },
          { x: 6727.82, y: 95.314929 },
          { x: 964.74, y: 55.823783 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 749.59, y: 68.259497 },
          { x: 837.72, y: 71.16503 },
          { x: 1138.66, y: 77.037477 },
          { x: 1874.36, y: 85.105473 },
          { x: 3719.70, y: 92.685588 },
          { x: 6041.28, y: 96.149666 },
          { x: 971.95, y: 73.768461 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 410.77, y: 46.330459 },
          { x: 800.86, y: 66.159317 },
          { x: 1189.35, y: 76.336357 },
          { x: 1955.41, y: 85.477129 },
          { x: 3881.26, y: 92.925233 },
          { x: 6730.67, y: 96.070641 },
          { x: 990.57, y: 72.040891 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 503.28, y: 30.287397 },
          { x: 772.50, y: 48.006532 },
          { x: 1167.87, y: 62.615901 },
          { x: 1934.21, y: 78.540208 },
          { x: 3869.53, y: 90.846551 },
          { x: 6725.80, y: 95.491396 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 501.75, y: 29.476187 },
          { x: 773.58, y: 47.752391 },
          { x: 1166.73, y: 62.594591 },
          { x: 1930.31, y: 78.383991 },
          { x: 3875.30, y: 90.702205 },
          { x: 6727.34, y: 95.342567 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 448.40, y: 55.766008 },
          { x: 802.34, y: 70.702848 },
          { x: 1190.97, y: 79.270851 },
          { x: 1968.64, y: 87.323292 },
          { x: 3811.51, y: 93.959572 },
          { x: 6552.23, y: 96.814238 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 448.40, y: 55.766008 },
          { x: 802.34, y: 70.702848 },
          { x: 1190.97, y: 79.270851 },
          { x: 1968.64, y: 87.323292 },
          { x: 3811.51, y: 93.959572 },
          { x: 6552.23, y: 96.814238 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1114.75, y: 53.678882 },
          { x: 1115.03, y: 53.693582 },
          { x: 1252.56, y: 58.140252 },
          { x: 1872.65, y: 70.996447 },
          { x: 3708.59, y: 85.677145 },
          { x: 6457.09, y: 93.052305 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 495.66, y: 31.318454 },
          { x: 784.30, y: 48.899339 },
          { x: 1161.45, y: 63.000201 },
          { x: 1889.75, y: 78.63583 },
          { x: 3738.75, y: 91.578819 },
          { x: 6442.97, y: 96.31722 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 783.29, y: 67.942499 },
          { x: 859.39, y: 70.56823 },
          { x: 1143.31, y: 76.595877 },
          { x: 1874.72, y: 85.136688 },
          { x: 3716.36, y: 92.8591 },
          { x: 6275.17, y: 96.653419 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 47.103486 },
          { x: 801.55, y: 67.649432 },
          { x: 1190.70, y: 78.10315 },
          { x: 1969.00, y: 87.440626 },
          { x: 3914.32, y: 94.037642 },
          { x: 6771.45, y: 96.80817 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 496.47, y: 30.362125 },
          { x: 773.88, y: 49.128118 },
          { x: 1170.14, y: 63.889117 },
          { x: 1560.35, y: 73.123399 },
          { x: 1935.65, y: 79.162 },
          { x: 3869.05, y: 91.052875 },
          { x: 5765.12, y: 94.633005 },
          { x: 7662.35, y: 96.239875 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 503.19, y: 29.476187 },
          { x: 775.09, y: 47.755753 },
          { x: 1168.51, y: 62.662089 },
          { x: 1548.05, y: 72.081138 },
          { x: 1931.31, y: 78.404618 },
          { x: 3876.37, y: 90.664294 },
          { x: 5764.95, y: 94.274988 },
          { x: 7668.83, y: 96.031588 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 444.05, y: 55.398446 },
          { x: 801.81, y: 70.514849 },
          { x: 1189.41, y: 78.97712 },
          { x: 1578.14, y: 83.926146 },
          { x: 1958.78, y: 87.097742 },
          { x: 3814.68, y: 93.637101 },
          { x: 5646.60, y: 95.902039 },
          { x: 7467.73, y: 97.186787 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 444.05, y: 55.398446 },
          { x: 801.81, y: 70.514849 },
          { x: 1189.41, y: 78.97712 },
          { x: 1578.14, y: 83.926146 },
          { x: 1958.78, y: 87.097742 },
          { x: 3814.68, y: 93.637101 },
          { x: 5646.60, y: 95.902039 },
          { x: 7467.73, y: 97.186787 }
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

var ctx_t1_20241223_vbr_bitrate_fps_data = document.getElementById('chart_t1_20241223_vbr_bitrate_fps');
const chart_t1_20241223_vbr_bitrate_fps_data = new Chart(ctx_t1_20241223_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 400.28, y: 192.00 },
          { x: 701.18, y: 193.56 },
          { x: 1103.56, y: 193.29 },
          { x: 1363.76, y: 189.63 },
          { x: 1729.39, y: 188.68 },
          { x: 3317.24, y: 185.79 },
          { x: 4658.34, y: 185.73 },
          { x: 5614.75, y: 185.16 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.83, y: 525.24 },
          { x: 710.07, y: 524.81 },
          { x: 1105.82, y: 525.50 },
          { x: 1376.74, y: 524.81 },
          { x: 1746.98, y: 525.07 },
          { x: 3342.09, y: 522.75 },
          { x: 4758.34, y: 523.95 },
          { x: 5793.94, y: 544.77 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 381.15, y: 308.24 },
          { x: 724.87, y: 307.65 },
          { x: 1064.31, y: 307.83 },
          { x: 1385.58, y: 308.00 },
          { x: 1725.07, y: 307.47 },
          { x: 3202.08, y: 308.15 },
          { x: 4152.53, y: 308.48 },
          { x: 5042.26, y: 308.18 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 382.04, y: 571.68 },
          { x: 725.15, y: 571.17 },
          { x: 1077.14, y: 570.46 },
          { x: 1394.48, y: 569.04 },
          { x: 1740.15, y: 596.45 },
          { x: 3258.14, y: 568.93 },
          { x: 4261.90, y: 566.92 },
          { x: 5134.71, y: 565.41 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 379.92, y: 251.61 },
          { x: 719.68, y: 250.61 },
          { x: 1056.86, y: 250.22 },
          { x: 1380.15, y: 250.10 },
          { x: 1718.68, y: 250.49 },
          { x: 3179.97, y: 250.63 },
          { x: 4098.78, y: 252.19 },
          { x: 5004.86, y: 256.01 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 382.54, y: 248.72 },
          { x: 724.33, y: 249.41 },
          { x: 1065.96, y: 250.18 },
          { x: 1384.87, y: 248.25 },
          { x: 1737.61, y: 249.36 },
          { x: 3223.73, y: 249.77 },
          { x: 4223.02, y: 249.78 },
          { x: 5064.81, y: 250.39 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 435.93, y: 297.59 },
          { x: 801.88, y: 304.31 },
          { x: 1160.12, y: 307.23 },
          { x: 1531.26, y: 307.29 },
          { x: 1901.94, y: 307.59 },
          { x: 3733.97, y: 310.07 },
          { x: 5542.44, y: 312.59 },
          { x: 7060.74, y: 321.49 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 437.31, y: 534.83 },
          { x: 802.72, y: 541.45 },
          { x: 1167.73, y: 543.38 },
          { x: 1532.97, y: 543.38 },
          { x: 1884.81, y: 542.92 },
          { x: 3775.89, y: 546.36 },
          { x: 5569.32, y: 551.55 },
          { x: 7072.06, y: 551.93 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 442.22, y: 247.81 },
          { x: 804.19, y: 249.20 },
          { x: 1167.69, y: 249.71 },
          { x: 1533.26, y: 249.98 },
          { x: 1888.29, y: 248.27 },
          { x: 3755.42, y: 249.67 },
          { x: 5588.88, y: 249.22 },
          { x: 7330.99, y: 248.41 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 438.60, y: 251.22 },
          { x: 800.18, y: 249.71 },
          { x: 1166.83, y: 250.31 },
          { x: 1538.75, y: 248.44 },
          { x: 1907.16, y: 249.03 },
          { x: 3784.83, y: 249.59 },
          { x: 5586.27, y: 250.29 },
          { x: 7349.89, y: 249.01 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 654.79, y: 296.95 },
          { x: 940.21, y: 307.09 },
          { x: 1311.48, y: 311.37 },
          { x: 1603.90, y: 311.18 },
          { x: 2048.65, y: 310.07 },
          { x: 3825.16, y: 309.08 },
          { x: 5593.03, y: 311.58 },
          { x: 7011.14, y: 311.76 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 665.08, y: 424.45 },
          { x: 941.87, y: 440.55 },
          { x: 1314.65, y: 447.84 },
          { x: 1593.68, y: 447.40 },
          { x: 2051.79, y: 447.59 },
          { x: 3826.53, y: 446.65 },
          { x: 5596.68, y: 453.31 },
          { x: 7027.37, y: 455.37 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 390.71, y: 274.80 },
          { x: 764.57, y: 272.62 },
          { x: 1131.52, y: 272.99 },
          { x: 1494.41, y: 272.29 },
          { x: 1855.92, y: 271.62 },
          { x: 3501.39, y: 271.39 },
          { x: 4842.90, y: 271.81 },
          { x: 5586.33, y: 270.70 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.35, y: 500.71 },
          { x: 766.74, y: 480.95 },
          { x: 1137.54, y: 495.04 },
          { x: 1501.04, y: 494.20 },
          { x: 1869.07, y: 494.20 },
          { x: 3534.74, y: 492.75 },
          { x: 4905.20, y: 489.95 },
          { x: 5673.26, y: 486.37 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 390.55, y: 191.95 },
          { x: 764.78, y: 190.52 },
          { x: 1133.33, y: 190.52 },
          { x: 1495.20, y: 190.39 },
          { x: 1847.35, y: 190.32 },
          { x: 3483.61, y: 190.30 },
          { x: 4734.55, y: 190.14 },
          { x: 5409.71, y: 189.95 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.20, y: 256.67 },
          { x: 768.01, y: 255.27 },
          { x: 1134.34, y: 254.89 },
          { x: 1504.83, y: 255.52 },
          { x: 1862.66, y: 255.01 },
          { x: 3510.40, y: 254.64 },
          { x: 4794.72, y: 254.60 },
          { x: 5506.58, y: 253.87 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 442.40, y: 277.40 },
          { x: 808.17, y: 281.93 },
          { x: 1182.99, y: 283.56 },
          { x: 1570.81, y: 282.78 },
          { x: 1961.28, y: 281.86 },
          { x: 3728.07, y: 284.21 },
          { x: 5349.75, y: 284.49 },
          { x: 6772.53, y: 283.71 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 447.76, y: 494.66 },
          { x: 810.47, y: 505.46 },
          { x: 1185.89, y: 510.79 },
          { x: 1574.23, y: 508.19 },
          { x: 1965.18, y: 508.27 },
          { x: 3746.35, y: 511.20 },
          { x: 5366.69, y: 517.58 },
          { x: 6806.33, y: 516.24 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 440.73, y: 192.40 },
          { x: 811.49, y: 194.42 },
          { x: 1191.16, y: 194.63 },
          { x: 1569.58, y: 194.34 },
          { x: 1946.24, y: 194.25 },
          { x: 3806.81, y: 195.34 },
          { x: 5470.40, y: 195.96 },
          { x: 7039.79, y: 196.02 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 445.59, y: 257.19 },
          { x: 813.46, y: 259.72 },
          { x: 1183.58, y: 260.76 },
          { x: 1567.27, y: 260.37 },
          { x: 1943.23, y: 259.89 },
          { x: 3830.91, y: 261.40 },
          { x: 5478.60, y: 262.15 },
          { x: 7075.22, y: 261.82 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1056.91, y: 227.72 },
          { x: 1056.91, y: 227.36 },
          { x: 1180.13, y: 227.95 },
          { x: 1571.32, y: 224.09 },
          { x: 1964.16, y: 221.99 },
          { x: 3903.63, y: 210.74 },
          { x: 5822.44, y: 201.15 },
          { x: 7716.78, y: 198.85 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 329.28 },
          { x: 1057.25, y: 329.82 },
          { x: 1181.79, y: 329.41 },
          { x: 1574.61, y: 326.65 },
          { x: 1965.73, y: 327.49 },
          { x: 3916.33, y: 314.65 },
          { x: 5839.86, y: 308.48 },
          { x: 7748.49, y: 306.11 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 388.66, y: 322.99 },
          { x: 752.32, y: 321.88 },
          { x: 1107.09, y: 321.75 },
          { x: 1463.64, y: 321.59 },
          { x: 1805.14, y: 321.10 },
          { x: 3333.03, y: 305.73 },
          { x: 4395.07, y: 321.88 },
          { x: 5112.32, y: 321.33 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 389.11, y: 403.13 },
          { x: 754.54, y: 403.23 },
          { x: 1110.19, y: 403.18 },
          { x: 1469.31, y: 403.03 },
          { x: 1813.87, y: 404.51 },
          { x: 3351.83, y: 403.84 },
          { x: 4454.37, y: 406.10 },
          { x: 5191.37, y: 406.05 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 388.56, y: 272.13 },
          { x: 751.29, y: 270.88 },
          { x: 1107.31, y: 272.29 },
          { x: 1463.49, y: 273.20 },
          { x: 1801.62, y: 269.90 },
          { x: 3293.66, y: 268.31 },
          { x: 4318.79, y: 256.59 },
          { x: 4998.03, y: 262.79 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 389.40, y: 296.34 },
          { x: 756.16, y: 294.92 },
          { x: 1109.26, y: 294.05 },
          { x: 1468.83, y: 295.55 },
          { x: 1810.47, y: 292.52 },
          { x: 3324.85, y: 290.84 },
          { x: 4380.05, y: 293.62 },
          { x: 5089.51, y: 294.03 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1056.25, y: 127.40 },
          { x: 1056.25, y: 126.35 },
          { x: 1180.40, y: 126.70 },
          { x: 1964.03, y: 124.66 },
          { x: 3902.07, y: 120.08 },
          { x: 6771.54, y: 117.03 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.25, y: 161.62 },
          { x: 1057.25, y: 161.48 },
          { x: 1181.79, y: 160.34 },
          { x: 1965.73, y: 162.07 },
          { x: 3916.33, y: 159.89 },
          { x: 6795.28, y: 155.93 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 398.79, y: 185.76 },
          { x: 775.50, y: 179.47 },
          { x: 1150.83, y: 180.95 },
          { x: 1869.63, y: 177.55 },
          { x: 3467.53, y: 183.54 },
          { x: 5154.81, y: 181.25 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 395.15, y: 323.64 },
          { x: 767.90, y: 318.19 },
          { x: 1144.86, y: 318.16 },
          { x: 1866.40, y: 318.48 },
          { x: 3475.03, y: 321.42 },
          { x: 5089.77, y: 319.34 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 398.57, y: 144.21 },
          { x: 775.33, y: 141.43 },
          { x: 1150.34, y: 129.85 },
          { x: 1864.23, y: 119.49 },
          { x: 3432.33, y: 106.74 },
          { x: 5025.07, y: 108.81 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 394.28, y: 116.97 },
          { x: 768.29, y: 119.32 },
          { x: 1140.98, y: 123.54 },
          { x: 1849.98, y: 120.61 },
          { x: 3417.42, y: 118.91 },
          { x: 4923.23, y: 118.41 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1056.88, y: 195.63 },
          { x: 1056.88, y: 201.87 },
          { x: 1180.31, y: 201.40 },
          { x: 1571.27, y: 200.49 },
          { x: 1964.13, y: 199.24 },
          { x: 3903.46, y: 192.83 },
          { x: 5822.61, y: 188.07 },
          { x: 7716.25, y: 183.80 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.17, y: 262.38 },
          { x: 1057.17, y: 264.29 },
          { x: 1181.78, y: 263.81 },
          { x: 1573.01, y: 263.99 },
          { x: 1965.70, y: 251.10 },
          { x: 3916.51, y: 259.09 },
          { x: 5839.77, y: 255.30 },
          { x: 7748.61, y: 255.89 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 437.93, y: 37.91 },
          { x: 650.48, y: 39.37 },
          { x: 895.82, y: 39.49 },
          { x: 1197.94, y: 39.31 },
          { x: 1489.61, y: 39.37 },
          { x: 2967.22, y: 38.58 },
          { x: 4648.55, y: 37.80 },
          { x: 6228.26, y: 37.21 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 456.20, y: 81.02 },
          { x: 659.67, y: 81.09 },
          { x: 899.14, y: 81.03 },
          { x: 1197.86, y: 80.75 },
          { x: 1489.26, y: 80.47 },
          { x: 2968.14, y: 78.26 },
          { x: 4647.89, y: 77.94 },
          { x: 6219.01, y: 77.11 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 443.99, y: 35.80 },
          { x: 647.66, y: 35.91 },
          { x: 891.22, y: 35.81 },
          { x: 1186.36, y: 35.64 },
          { x: 1472.37, y: 35.80 },
          { x: 2942.47, y: 34.83 },
          { x: 4575.30, y: 34.32 },
          { x: 6082.05, y: 33.75 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 461.10, y: 68.66 },
          { x: 656.71, y: 68.64 },
          { x: 894.59, y: 68.93 },
          { x: 1188.13, y: 68.07 },
          { x: 1478.52, y: 68.50 },
          { x: 2952.89, y: 66.45 },
          { x: 4588.21, y: 65.66 },
          { x: 6079.99, y: 64.89 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1057.34, y: 100.37 },
          { x: 1057.34, y: 99.25 },
          { x: 1185.23, y: 95.71 },
          { x: 1979.95, y: 97.30 },
          { x: 3947.02, y: 94.72 },
          { x: 6868.10, y: 88.81 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.14, y: 216.95 },
          { x: 1057.14, y: 216.02 },
          { x: 1179.38, y: 213.87 },
          { x: 1968.24, y: 212.71 },
          { x: 3934.19, y: 213.33 },
          { x: 6862.25, y: 208.61 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1058.89, y: 91.68 },
          { x: 1058.89, y: 53.51 },
          { x: 1182.64, y: 60.24 },
          { x: 1576.22, y: 99.46 },
          { x: 1972.04, y: 100.36 },
          { x: 3943.11, y: 93.97 },
          { x: 5895.07, y: 91.54 },
          { x: 7825.82, y: 89.70 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1057.02, y: 189.20 },
          { x: 1057.02, y: 189.43 },
          { x: 1178.79, y: 186.61 },
          { x: 1573.72, y: 186.47 },
          { x: 1966.49, y: 177.73 },
          { x: 3928.65, y: 184.24 },
          { x: 5877.24, y: 176.49 },
          { x: 7806.61, y: 81.23 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 900.39, y: 106.26 },
          { x: 900.39, y: 106.58 },
          { x: 998.77, y: 105.82 },
          { x: 1716.65, y: 107.11 },
          { x: 3421.20, y: 107.51 },
          { x: 6160.43, y: 106.62 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 898.63, y: 146.66 },
          { x: 898.63, y: 146.93 },
          { x: 1000.09, y: 149.21 },
          { x: 1720.12, y: 148.63 },
          { x: 3417.79, y: 144.70 },
          { x: 6255.49, y: 145.25 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 439.60, y: 212.81 },
          { x: 839.87, y: 211.01 },
          { x: 1095.74, y: 209.79 },
          { x: 1575.88, y: 207.71 },
          { x: 2052.30, y: 208.32 },
          { x: 3967.27, y: 206.70 },
          { x: 5884.01, y: 205.75 },
          { x: 7809.38, y: 205.79 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 498.47, y: 477.36 },
          { x: 829.18, y: 475.09 },
          { x: 1068.08, y: 474.59 },
          { x: 1545.94, y: 477.14 },
          { x: 2023.40, y: 477.71 },
          { x: 3926.19, y: 477.29 },
          { x: 5826.99, y: 478.65 },
          { x: 7725.17, y: 476.36 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 475.97, y: 133.44 },
          { x: 912.45, y: 134.07 },
          { x: 1293.44, y: 134.37 },
          { x: 1687.38, y: 134.18 },
          { x: 2089.99, y: 134.13 },
          { x: 4049.64, y: 134.25 },
          { x: 6005.96, y: 134.09 },
          { x: 7954.92, y: 133.81 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 420.54, y: 463.57 },
          { x: 890.75, y: 464.24 },
          { x: 1262.26, y: 464.18 },
          { x: 1655.25, y: 464.78 },
          { x: 2068.59, y: 462.23 },
          { x: 4009.81, y: 461.69 },
          { x: 5948.33, y: 459.04 },
          { x: 7868.71, y: 460.30 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 476.61, y: 137.83 },
          { x: 910.48, y: 137.99 },
          { x: 1292.41, y: 138.07 },
          { x: 1687.66, y: 138.02 },
          { x: 2089.06, y: 137.81 },
          { x: 4047.22, y: 137.52 },
          { x: 6005.79, y: 137.21 },
          { x: 7950.64, y: 136.94 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 418.70, y: 327.66 },
          { x: 888.06, y: 327.46 },
          { x: 1260.72, y: 324.59 },
          { x: 1654.13, y: 320.62 },
          { x: 2067.82, y: 329.79 },
          { x: 4008.64, y: 323.05 },
          { x: 5945.20, y: 326.55 },
          { x: 7871.35, y: 319.66 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 394.12, y: 211.83 },
          { x: 877.03, y: 211.66 },
          { x: 1238.51, y: 211.27 },
          { x: 1646.78, y: 209.76 },
          { x: 2050.87, y: 209.69 },
          { x: 3999.88, y: 204.60 },
          { x: 5923.29, y: 200.43 },
          { x: 7843.46, y: 196.67 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.73, y: 554.90 },
          { x: 870.05, y: 553.65 },
          { x: 1230.01, y: 550.12 },
          { x: 1633.61, y: 556.16 },
          { x: 2043.20, y: 557.13 },
          { x: 3963.41, y: 554.13 },
          { x: 5887.90, y: 548.80 },
          { x: 7775.31, y: 549.84 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 394.72, y: 211.31 },
          { x: 875.28, y: 211.09 },
          { x: 1235.77, y: 210.91 },
          { x: 1647.34, y: 210.49 },
          { x: 2050.32, y: 209.64 },
          { x: 3990.27, y: 206.30 },
          { x: 5910.17, y: 201.67 },
          { x: 7822.21, y: 199.64 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.76, y: 342.01 },
          { x: 870.69, y: 329.89 },
          { x: 1227.34, y: 330.30 },
          { x: 1634.37, y: 329.96 },
          { x: 2044.15, y: 322.14 },
          { x: 3971.27, y: 324.73 },
          { x: 5885.03, y: 327.05 },
          { x: 7789.98, y: 322.92 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 456.47, y: 170.21 },
          { x: 840.79, y: 169.08 },
          { x: 1096.46, y: 167.36 },
          { x: 2052.36, y: 165.90 },
          { x: 3968.60, y: 164.22 },
          { x: 6849.76, y: 163.59 },
          { x: 1096.46, y: 167.50 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 499.92, y: 417.30 },
          { x: 829.68, y: 417.57 },
          { x: 1067.98, y: 417.90 },
          { x: 2023.69, y: 417.79 },
          { x: 3925.20, y: 417.41 },
          { x: 6772.60, y: 417.19 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 471.01, y: 108.07 },
          { x: 911.50, y: 108.03 },
          { x: 1291.72, y: 108.34 },
          { x: 2091.40, y: 108.17 },
          { x: 4048.72, y: 108.11 },
          { x: 6983.50, y: 108.04 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.14, y: 392.77 },
          { x: 888.59, y: 391.09 },
          { x: 1262.42, y: 389.84 },
          { x: 2068.26, y: 388.28 },
          { x: 4013.45, y: 385.14 },
          { x: 6908.14, y: 381.56 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 478.59, y: 110.15 },
          { x: 912.22, y: 110.14 },
          { x: 1292.90, y: 109.94 },
          { x: 2086.98, y: 109.90 },
          { x: 4048.61, y: 109.25 },
          { x: 6980.69, y: 108.96 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 420.50, y: 242.83 },
          { x: 888.62, y: 240.08 },
          { x: 1261.91, y: 227.67 },
          { x: 2067.95, y: 233.98 },
          { x: 4009.27, y: 227.56 },
          { x: 6909.31, y: 230.73 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 463.95, y: 224.22 },
          { x: 827.78, y: 216.32 },
          { x: 1067.01, y: 213.49 },
          { x: 1546.10, y: 210.08 },
          { x: 2033.23, y: 207.60 },
          { x: 3973.90, y: 203.70 },
          { x: 5900.26, y: 201.85 },
          { x: 7843.44, y: 200.79 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 470.87, y: 333.79 },
          { x: 817.54, y: 328.74 },
          { x: 1054.65, y: 327.86 },
          { x: 1536.23, y: 324.07 },
          { x: 2018.33, y: 324.10 },
          { x: 3918.16, y: 319.88 },
          { x: 5819.54, y: 317.24 },
          { x: 7734.63, y: 316.14 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 385.48, y: 217.46 },
          { x: 868.33, y: 202.96 },
          { x: 1229.09, y: 194.05 },
          { x: 1635.66, y: 186.27 },
          { x: 2050.95, y: 179.55 },
          { x: 4005.91, y: 157.31 },
          { x: 5949.66, y: 142.62 },
          { x: 7888.41, y: 130.31 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 397.60, y: 432.50 },
          { x: 875.36, y: 427.69 },
          { x: 1239.87, y: 425.53 },
          { x: 1647.28, y: 420.54 },
          { x: 2061.13, y: 418.89 },
          { x: 4009.54, y: 409.28 },
          { x: 5946.24, y: 400.75 },
          { x: 7888.07, y: 390.85 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.56, y: 207.92 },
          { x: 860.37, y: 199.95 },
          { x: 1225.85, y: 193.24 },
          { x: 1633.73, y: 186.37 },
          { x: 2041.19, y: 180.86 },
          { x: 3988.11, y: 161.35 },
          { x: 5943.94, y: 149.49 },
          { x: 7880.73, y: 139.25 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 388.28, y: 298.06 },
          { x: 866.77, y: 302.35 },
          { x: 1232.90, y: 301.80 },
          { x: 1638.65, y: 301.46 },
          { x: 2055.25, y: 299.40 },
          { x: 4003.05, y: 299.20 },
          { x: 5938.67, y: 300.47 },
          { x: 7886.05, y: 298.11 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 1180.82, y: 95.77 },
          { x: 1180.98, y: 95.47 },
          { x: 1284.97, y: 96.15 },
          { x: 1880.35, y: 95.53 },
          { x: 3718.94, y: 95.59 },
          { x: 6472.10, y: 95.67 },
          { x: 1206.04, y: 95.02 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 502.22, y: 167.34 },
          { x: 773.82, y: 199.84 },
          { x: 1167.33, y: 200.26 },
          { x: 1929.79, y: 200.23 },
          { x: 3877.04, y: 173.05 },
          { x: 6727.82, y: 199.30 },
          { x: 964.74, y: 200.33 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 749.59, y: 117.59 },
          { x: 837.72, y: 117.35 },
          { x: 1138.66, y: 117.52 },
          { x: 1874.36, y: 117.57 },
          { x: 3719.70, y: 117.63 },
          { x: 6041.28, y: 117.18 },
          { x: 971.95, y: 117.46 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 410.77, y: 208.87 },
          { x: 800.86, y: 208.89 },
          { x: 1189.35, y: 209.05 },
          { x: 1955.41, y: 208.08 },
          { x: 3881.26, y: 207.77 },
          { x: 6730.67, y: 206.74 },
          { x: 990.57, y: 183.90 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 503.28, y: 42.71 },
          { x: 772.50, y: 42.82 },
          { x: 1167.87, y: 42.76 },
          { x: 1934.21, y: 42.82 },
          { x: 3869.53, y: 42.81 },
          { x: 6725.80, y: 42.80 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 501.75, y: 82.41 },
          { x: 773.58, y: 82.43 },
          { x: 1166.73, y: 82.68 },
          { x: 1930.31, y: 82.74 },
          { x: 3875.30, y: 82.28 },
          { x: 6727.34, y: 81.84 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 448.40, y: 79.60 },
          { x: 802.34, y: 79.52 },
          { x: 1190.97, y: 79.24 },
          { x: 1968.64, y: 79.67 },
          { x: 3811.51, y: 80.11 },
          { x: 6552.23, y: 80.40 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 448.40, y: 79.45 },
          { x: 802.34, y: 79.45 },
          { x: 1190.97, y: 79.74 },
          { x: 1968.64, y: 79.71 },
          { x: 3811.51, y: 79.96 },
          { x: 6552.23, y: 80.47 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1114.75, y: 49.85 },
          { x: 1115.03, y: 49.76 },
          { x: 1252.56, y: 49.89 },
          { x: 1872.65, y: 49.83 },
          { x: 3708.59, y: 49.97 },
          { x: 6457.09, y: 49.85 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 495.66, y: 132.58 },
          { x: 784.30, y: 132.33 },
          { x: 1161.45, y: 132.46 },
          { x: 1889.75, y: 132.30 },
          { x: 3738.75, y: 131.84 },
          { x: 6442.97, y: 131.36 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 783.29, y: 48.72 },
          { x: 859.39, y: 49.15 },
          { x: 1143.31, y: 49.10 },
          { x: 1874.72, y: 49.55 },
          { x: 3716.36, y: 49.16 },
          { x: 6275.17, y: 49.15 }
        ]
      },
      {
        label: "r9 9950x igpu VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 412.37, y: 206.56 },
          { x: 801.55, y: 206.53 },
          { x: 1190.70, y: 206.38 },
          { x: 1969.00, y: 206.21 },
          { x: 3914.32, y: 205.65 },
          { x: 6771.45, y: 204.64 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 496.47, y: 71.57 },
          { x: 773.88, y: 71.94 },
          { x: 1170.14, y: 71.92 },
          { x: 1560.35, y: 71.96 },
          { x: 1935.65, y: 71.95 },
          { x: 3869.05, y: 71.97 },
          { x: 5765.12, y: 71.92 },
          { x: 7662.35, y: 71.89 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 503.19, y: 112.42 },
          { x: 775.09, y: 112.20 },
          { x: 1168.51, y: 112.31 },
          { x: 1548.05, y: 111.94 },
          { x: 1931.31, y: 112.68 },
          { x: 3876.37, y: 112.61 },
          { x: 5764.95, y: 112.51 },
          { x: 7668.83, y: 112.57 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 444.05, y: 124.55 },
          { x: 801.81, y: 124.78 },
          { x: 1189.41, y: 124.91 },
          { x: 1578.14, y: 124.63 },
          { x: 1958.78, y: 124.74 },
          { x: 3814.68, y: 124.54 },
          { x: 5646.60, y: 123.95 },
          { x: 7467.73, y: 123.44 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 444.05, y: 124.18 },
          { x: 801.81, y: 124.64 },
          { x: 1189.41, y: 124.95 },
          { x: 1578.14, y: 124.88 },
          { x: 1958.78, y: 124.75 },
          { x: 3814.68, y: 124.49 },
          { x: 5646.60, y: 123.96 },
          { x: 7467.73, y: 123.39 }
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

var ctx_t2_20241223_bitrate_ssim_data = document.getElementById('chart_t2_20241223_bitrate_ssim');
const chart_t2_20241223_bitrate_ssim_data = new Chart(ctx_t2_20241223_bitrate_ssim_data,
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
          { x: 5821.51, y: 0.998777 },
          { x: 3315.29, y: 0.997689 },
          { x: 1828.12, y: 0.995736 },
          { x: 1043.38, y: 0.992194 },
          { x: 627.07, y: 0.985658 },
          { x: 410.19, y: 0.97379 }
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
          { x: 7505.16, y: 0.999515 },
          { x: 5105.61, y: 0.998958 },
          { x: 2957.98, y: 0.997738 },
          { x: 1618.16, y: 0.995689 },
          { x: 935.69, y: 0.992139 },
          { x: 567.81, y: 0.985817 },
          { x: 374.81, y: 0.974736 }
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
          { x: 6979.10, y: 0.998797 },
          { x: 3826.22, y: 0.997926 },
          { x: 2006.54, y: 0.996593 },
          { x: 1024.96, y: 0.99452 },
          { x: 527.79, y: 0.991095 },
          { x: 291.16, y: 0.985228 },
          { x: 173.92, y: 0.975029 }
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
          { x: 6950.00, y: 0.999013 },
          { x: 3778.93, y: 0.998243 },
          { x: 1970.48, y: 0.997025 },
          { x: 1006.93, y: 0.995045 },
          { x: 520.94, y: 0.991697 },
          { x: 288.53, y: 0.985974 },
          { x: 171.45, y: 0.976101 }
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
          { x: 7535.85, y: 0.999299 },
          { x: 4531.96, y: 0.998694 },
          { x: 2590.60, y: 0.997761 },
          { x: 1367.54, y: 0.996345 },
          { x: 695.95, y: 0.994039 },
          { x: 363.04, y: 0.989983 },
          { x: 192.33, y: 0.982665 }
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
          { x: 7537.85, y: 0.999348 },
          { x: 4474.24, y: 0.998784 },
          { x: 2517.42, y: 0.997893 },
          { x: 1324.36, y: 0.996532 },
          { x: 685.37, y: 0.99433 },
          { x: 363.43, y: 0.990435 },
          { x: 194.22, y: 0.983362 }
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
          { x: 5561.16, y: 0.99877 },
          { x: 4316.69, y: 0.998503 },
          { x: 3478.46, y: 0.998249 },
          { x: 2575.50, y: 0.997842 },
          { x: 1829.29, y: 0.997359 },
          { x: 1321.75, y: 0.996831 },
          { x: 964.19, y: 0.996208 }
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
          { x: 5676.79, y: 0.998924 },
          { x: 4277.29, y: 0.998662 },
          { x: 3414.98, y: 0.998422 },
          { x: 2501.98, y: 0.998036 },
          { x: 1796.72, y: 0.997578 },
          { x: 952.70, y: 0.996444 }
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
          { x: 5627.73, y: 0.998592 },
          { x: 4268.62, y: 0.998303 },
          { x: 3347.11, y: 0.998027 },
          { x: 2411.12, y: 0.997588 },
          { x: 1680.73, y: 0.997047 },
          { x: 1193.28, y: 0.996441 },
          { x: 883.36, y: 0.995816 }
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
          { x: 5944.54, y: 0.998805 },
          { x: 4315.49, y: 0.998494 },
          { x: 3325.38, y: 0.998217 },
          { x: 2361.11, y: 0.99779 },
          { x: 1652.47, y: 0.99727 },
          { x: 1173.60, y: 0.996686 },
          { x: 873.34, y: 0.996077 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5502.00, y: 0.998021 },
          { x: 4161.83, y: 0.997632 },
          { x: 3295.90, y: 0.997295 },
          { x: 2346.32, y: 0.996757 },
          { x: 1652.65, y: 0.996097 },
          { x: 1181.44, y: 0.99533 },
          { x: 861.34, y: 0.994506 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5642.14, y: 0.9983 },
          { x: 4191.63, y: 0.997914 },
          { x: 3271.33, y: 0.997573 },
          { x: 2341.22, y: 0.997056 },
          { x: 1633.17, y: 0.996388 },
          { x: 1167.79, y: 0.995629 },
          { x: 853.59, y: 0.994785 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 5670.69, y: 0.99853 },
          { x: 4039.88, y: 0.998095 },
          { x: 2320.04, y: 0.99715 },
          { x: 1241.69, y: 0.970794 },
          { x: 657.07, y: 0.992967 },
          { x: 367.21, y: 0.98805 },
          { x: 211.65, y: 0.978603 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5659.12, y: 0.998502 },
          { x: 4025.17, y: 0.998054 },
          { x: 2297.70, y: 0.997094 },
          { x: 1237.77, y: 0.995585 },
          { x: 657.56, y: 0.992808 },
          { x: 369.53, y: 0.987741 },
          { x: 213.27, y: 0.977951 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6456.15, y: 0.998813 },
          { x: 4277.24, y: 0.998383 },
          { x: 2355.17, y: 0.997477 },
          { x: 1248.63, y: 0.995995 },
          { x: 658.45, y: 0.993358 },
          { x: 366.99, y: 0.98847 },
          { x: 212.11, y: 0.979054 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6466.81, y: 0.998788 },
          { x: 4268.33, y: 0.998345 },
          { x: 2339.94, y: 0.997428 },
          { x: 1247.19, y: 0.995924 },
          { x: 659.68, y: 0.993214 },
          { x: 370.10, y: 0.9882 },
          { x: 214.14, y: 0.978429 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 5158.40, y: 0.998335 },
          { x: 3356.81, y: 0.997583 },
          { x: 2541.18, y: 0.996942 },
          { x: 1411.63, y: 0.994964 },
          { x: 849.18, y: 0.9916 },
          { x: 559.90, y: 0.985901 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5525.51, y: 0.998314 },
          { x: 3592.58, y: 0.997571 },
          { x: 2677.00, y: 0.996874 },
          { x: 1500.03, y: 0.994806 },
          { x: 912.10, y: 0.991199 },
          { x: 602.82, y: 0.985258 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 4646.68, y: 0.998281 },
          { x: 2819.34, y: 0.997485 },
          { x: 1971.88, y: 0.996785 },
          { x: 947.01, y: 0.994618 },
          { x: 513.75, y: 0.990969 },
          { x: 321.12, y: 0.984505 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4721.84, y: 0.998251 },
          { x: 2854.77, y: 0.997444 },
          { x: 1998.81, y: 0.996746 },
          { x: 967.38, y: 0.994565 },
          { x: 531.15, y: 0.990897 },
          { x: 336.64, y: 0.984524 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4555.45, y: 0.998465 },
          { x: 2769.64, y: 0.997725 },
          { x: 1943.69, y: 0.997039 },
          { x: 940.61, y: 0.994908 },
          { x: 513.18, y: 0.991164 },
          { x: 319.52, y: 0.984591 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4624.89, y: 0.998439 },
          { x: 2804.85, y: 0.997682 },
          { x: 1972.62, y: 0.996985 },
          { x: 962.21, y: 0.994821 },
          { x: 533.21, y: 0.991059 },
          { x: 336.13, y: 0.98458 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 7791.06, y: 0.998818 },
          { x: 4515.05, y: 0.997981 },
          { x: 3659.47, y: 0.997539 },
          { x: 2108.55, y: 0.995898 },
          { x: 1296.49, y: 0.992875 },
          { x: 846.84, y: 0.987736 },
          { x: 525.27, y: 0.978163 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7884.15, y: 0.998721 },
          { x: 4535.89, y: 0.99789 },
          { x: 3561.14, y: 0.99739 },
          { x: 2078.13, y: 0.995748 },
          { x: 1277.23, y: 0.992743 },
          { x: 818.35, y: 0.987499 },
          { x: 529.33, y: 0.977898 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 4683.04, y: 0.998286 },
          { x: 2840.02, y: 0.997491 },
          { x: 1979.55, y: 0.996785 },
          { x: 961.41, y: 0.994653 },
          { x: 530.94, y: 0.991142 },
          { x: 339.78, y: 0.984872 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 0.99826 },
          { x: 2857.84, y: 0.99745 },
          { x: 1988.77, y: 0.99673 },
          { x: 965.98, y: 0.994523 },
          { x: 534.32, y: 0.99087 },
          { x: 341.04, y: 0.98442 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 0.998479 },
          { x: 2782.30, y: 0.99774 },
          { x: 1948.98, y: 0.997044 },
          { x: 952.63, y: 0.994932 },
          { x: 529.20, y: 0.991307 },
          { x: 336.28, y: 0.985037 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 0.998452 },
          { x: 2798.82, y: 0.997698 },
          { x: 1955.45, y: 0.996986 },
          { x: 957.09, y: 0.994801 },
          { x: 534.15, y: 0.991031 },
          { x: 339.80, y: 0.984525 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 5388.08, y: 0.998504 },
          { x: 2846.85, y: 0.997528 },
          { x: 1353.03, y: 0.99589 },
          { x: 699.07, y: 0.993228 },
          { x: 380.25, y: 0.988278 },
          { x: 216.11, y: 0.97896 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5401.90, y: 0.998472 },
          { x: 2837.75, y: 0.997481 },
          { x: 1355.78, y: 0.995821 },
          { x: 705.36, y: 0.993101 },
          { x: 386.14, y: 0.987993 },
          { x: 223.41, y: 0.978551 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6175.40, y: 0.998804 },
          { x: 2938.89, y: 0.997841 },
          { x: 1361.34, y: 0.996196 },
          { x: 702.72, y: 0.993607 },
          { x: 382.93, y: 0.988684 },
          { x: 217.00, y: 0.979285 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6216.27, y: 0.998779 },
          { x: 2936.43, y: 0.997804 },
          { x: 1374.89, y: 0.996148 },
          { x: 706.48, y: 0.99345 },
          { x: 388.47, y: 0.988386 },
          { x: 224.35, y: 0.978803 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 7318.65, y: 0.998709 },
          { x: 4523.47, y: 0.998075 },
          { x: 2734.03, y: 0.997097 },
          { x: 1517.84, y: 0.995117 },
          { x: 1002.01, y: 0.992391 },
          { x: 672.98, y: 0.987687 },
          { x: 477.44, y: 0.979198 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 0.998628 },
          { x: 4541.31, y: 0.997994 },
          { x: 2830.49, y: 0.997141 },
          { x: 1603.31, y: 0.995283 },
          { x: 1058.42, y: 0.992788 },
          { x: 702.57, y: 0.988309 },
          { x: 483.41, y: 0.979663 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 4876.84, y: 0.998203 },
          { x: 2944.40, y: 0.997375 },
          { x: 2033.83, y: 0.996627 },
          { x: 975.33, y: 0.994326 },
          { x: 539.01, y: 0.990475 },
          { x: 348.16, y: 0.984028 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4892.58, y: 0.998209 },
          { x: 2962.24, y: 0.99738 },
          { x: 2057.04, y: 0.996631 },
          { x: 997.08, y: 0.994339 },
          { x: 554.97, y: 0.990488 },
          { x: 357.87, y: 0.983962 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 0.998449 },
          { x: 2865.86, y: 0.997687 },
          { x: 1987.68, y: 0.996954 },
          { x: 960.80, y: 0.99471 },
          { x: 535.57, y: 0.990832 },
          { x: 343.97, y: 0.984254 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4754.05, y: 0.998457 },
          { x: 2880.91, y: 0.997693 },
          { x: 2007.91, y: 0.99696 },
          { x: 982.13, y: 0.994721 },
          { x: 551.74, y: 0.990828 },
          { x: 354.51, y: 0.984187 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 7323.02, y: 0.99871 },
          { x: 4521.52, y: 0.998076 },
          { x: 2730.32, y: 0.997099 },
          { x: 1514.94, y: 0.995119 },
          { x: 1000.73, y: 0.992396 },
          { x: 672.33, y: 0.987692 },
          { x: 477.50, y: 0.979202 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 0.998628 },
          { x: 4541.31, y: 0.997994 },
          { x: 2830.49, y: 0.997141 },
          { x: 1603.31, y: 0.995283 },
          { x: 1058.42, y: 0.992788 },
          { x: 702.57, y: 0.988309 },
          { x: 483.41, y: 0.979663 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 4799.90, y: 0.998133 },
          { x: 2815.70, y: 0.997274 },
          { x: 1458.50, y: 0.995808 },
          { x: 768.20, y: 0.993544 },
          { x: 461.96, y: 0.990266 },
          { x: 279.90, y: 0.98425 },
          { x: 189.67, y: 0.975007 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6500.81, y: 0.998533 },
          { x: 3760.95, y: 0.99775 },
          { x: 1957.15, y: 0.996378 },
          { x: 1014.25, y: 0.994165 },
          { x: 569.87, y: 0.990694 },
          { x: 329.82, y: 0.984118 },
          { x: 214.61, y: 0.973408 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6006.82, y: 0.998727 },
          { x: 3464.07, y: 0.998013 },
          { x: 1825.21, y: 0.996774 },
          { x: 963.57, y: 0.994772 },
          { x: 550.50, y: 0.991574 },
          { x: 323.56, y: 0.985877 },
          { x: 213.42, y: 0.976547 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6348.29, y: 0.998714 },
          { x: 3673.17, y: 0.997977 },
          { x: 1928.53, y: 0.996658 },
          { x: 1007.57, y: 0.994472 },
          { x: 568.87, y: 0.990935 },
          { x: 327.81, y: 0.984359 },
          { x: 212.27, y: 0.973513 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 7361.30, y: 0.99871 },
          { x: 4546.75, y: 0.998079 },
          { x: 2748.98, y: 0.997104 },
          { x: 1526.09, y: 0.995132 },
          { x: 1008.28, y: 0.992415 },
          { x: 673.68, y: 0.987737 },
          { x: 477.80, y: 0.979232 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7294.26, y: 0.998628 },
          { x: 4541.43, y: 0.997994 },
          { x: 2830.15, y: 0.997141 },
          { x: 1603.50, y: 0.995283 },
          { x: 1058.39, y: 0.992789 },
          { x: 702.71, y: 0.988314 },
          { x: 484.09, y: 0.979689 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6914.52, y: 0.998544 },
          { x: 4299.73, y: 0.99779 },
          { x: 2540.93, y: 0.996586 },
          { x: 1493.20, y: 0.994726 },
          { x: 895.06, y: 0.991338 },
          { x: 532.13, y: 0.985443 },
          { x: 405.78, y: 0.978214 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6927.25, y: 0.99855 },
          { x: 4301.07, y: 0.997807 },
          { x: 2543.49, y: 0.996598 },
          { x: 1495.84, y: 0.994741 },
          { x: 897.31, y: 0.991318 },
          { x: 549.56, y: 0.985198 },
          { x: 424.60, y: 0.977662 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 0.998657 },
          { x: 4170.07, y: 0.997991 },
          { x: 2480.42, y: 0.996892 },
          { x: 1461.78, y: 0.9951 },
          { x: 887.66, y: 0.991865 },
          { x: 518.18, y: 0.986004 },
          { x: 403.54, y: 0.978983 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 0.998656 },
          { x: 4191.70, y: 0.997985 },
          { x: 2495.80, y: 0.996877 },
          { x: 1476.64, y: 0.995056 },
          { x: 907.32, y: 0.991759 },
          { x: 542.13, y: 0.985703 },
          { x: 426.76, y: 0.978361 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6892.06, y: 0.998661 },
          { x: 4190.02, y: 0.997817 },
          { x: 2418.85, y: 0.996506 },
          { x: 1326.84, y: 0.993933 },
          { x: 884.58, y: 0.990456 },
          { x: 599.32, y: 0.984111 },
          { x: 441.89, y: 0.973529 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6678.13, y: 0.998557 },
          { x: 4125.33, y: 0.997779 },
          { x: 2432.61, y: 0.996538 },
          { x: 1359.70, y: 0.99408 },
          { x: 902.02, y: 0.990821 },
          { x: 613.77, y: 0.984888 },
          { x: 449.18, y: 0.975034 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 7122.54, y: 0.998659 },
          { x: 4268.27, y: 0.997808 },
          { x: 2447.03, y: 0.9965 },
          { x: 1341.44, y: 0.993947 },
          { x: 889.87, y: 0.990481 },
          { x: 601.65, y: 0.984117 },
          { x: 445.34, y: 0.97362 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6879.21, y: 0.998575 },
          { x: 4218.01, y: 0.997808 },
          { x: 2478.72, y: 0.99658 },
          { x: 1388.78, y: 0.994165 },
          { x: 918.01, y: 0.990935 },
          { x: 621.06, y: 0.985081 },
          { x: 457.02, y: 0.975299 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 7486.18, y: 0.998654 },
          { x: 4245.04, y: 0.997473 },
          { x: 2309.09, y: 0.995289 },
          { x: 1374.17, y: 0.99165 },
          { x: 860.29, y: 0.983572 },
          { x: 575.87, y: 0.970945 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7481.36, y: 0.998649 },
          { x: 4241.81, y: 0.997459 },
          { x: 2307.75, y: 0.995235 },
          { x: 1374.84, y: 0.991644 },
          { x: 861.33, y: 0.983543 },
          { x: 577.34, y: 0.970854 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 6448.56, y: 0.998906 },
          { x: 3849.75, y: 0.997976 },
          { x: 2249.63, y: 0.996368 },
          { x: 1232.99, y: 0.993159 },
          { x: 745.62, y: 0.987228 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6448.56, y: 0.998906 },
          { x: 3849.75, y: 0.997976 },
          { x: 2249.63, y: 0.996368 },
          { x: 1232.99, y: 0.993159 },
          { x: 745.62, y: 0.987228 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 5987.91, y: 0.99873 },
          { x: 3460.30, y: 0.997949 },
          { x: 1921.28, y: 0.996747 },
          { x: 1062.54, y: 0.994778 },
          { x: 626.09, y: 0.991411 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5987.91, y: 0.99873 },
          { x: 3460.30, y: 0.997949 },
          { x: 1921.28, y: 0.996747 },
          { x: 1062.54, y: 0.994778 },
          { x: 626.09, y: 0.991411 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5981.97, y: 0.998885 },
          { x: 3467.20, y: 0.99816 },
          { x: 1910.84, y: 0.997002 },
          { x: 1042.65, y: 0.995049 },
          { x: 613.33, y: 0.991727 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5981.97, y: 0.998885 },
          { x: 3467.20, y: 0.99816 },
          { x: 1910.84, y: 0.997002 },
          { x: 1042.65, y: 0.995049 },
          { x: 613.33, y: 0.991727 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6091.29, y: 0.998728 },
          { x: 4023.20, y: 0.998154 },
          { x: 2604.66, y: 0.997357 },
          { x: 1659.02, y: 0.996244 },
          { x: 962.92, y: 0.99421 },
          { x: 529.06, y: 0.990177 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.29, y: 0.998728 },
          { x: 4023.20, y: 0.998154 },
          { x: 2604.66, y: 0.997357 },
          { x: 1659.02, y: 0.996244 },
          { x: 962.92, y: 0.99421 },
          { x: 529.06, y: 0.990177 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5894.41, y: 0.998819 },
          { x: 3855.05, y: 0.998306 },
          { x: 2516.38, y: 0.997543 },
          { x: 1616.27, y: 0.996458 },
          { x: 943.11, y: 0.994464 },
          { x: 523.84, y: 0.990422 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5894.41, y: 0.998819 },
          { x: 3855.05, y: 0.998306 },
          { x: 2516.38, y: 0.997543 },
          { x: 1616.27, y: 0.996458 },
          { x: 943.11, y: 0.994464 },
          { x: 523.84, y: 0.990422 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6432.97, y: 0.998909 },
          { x: 3844.49, y: 0.997984 },
          { x: 2245.87, y: 0.996375 },
          { x: 1234.73, y: 0.993144 },
          { x: 750.81, y: 0.987169 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6432.97, y: 0.998909 },
          { x: 3844.49, y: 0.997984 },
          { x: 2245.87, y: 0.996375 },
          { x: 1234.73, y: 0.993144 },
          { x: 750.81, y: 0.987169 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 5974.53, y: 0.998732 },
          { x: 3451.03, y: 0.997952 },
          { x: 1914.72, y: 0.996748 },
          { x: 1060.37, y: 0.994775 },
          { x: 625.38, y: 0.9914 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5974.53, y: 0.998732 },
          { x: 3451.03, y: 0.997952 },
          { x: 1914.72, y: 0.996748 },
          { x: 1060.37, y: 0.994775 },
          { x: 625.38, y: 0.9914 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5971.21, y: 0.998886 },
          { x: 3455.27, y: 0.998159 },
          { x: 1903.92, y: 0.996999 },
          { x: 1041.01, y: 0.995045 },
          { x: 610.89, y: 0.991685 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5971.21, y: 0.998886 },
          { x: 3455.27, y: 0.998159 },
          { x: 1903.92, y: 0.996999 },
          { x: 1041.01, y: 0.995045 },
          { x: 610.89, y: 0.991685 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 6829.49, y: 0.998746 },
          { x: 4148.40, y: 0.997793 },
          { x: 2435.20, y: 0.996151 },
          { x: 1423.78, y: 0.99311 },
          { x: 876.06, y: 0.987137 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6829.49, y: 0.998746 },
          { x: 4148.40, y: 0.997793 },
          { x: 2435.20, y: 0.996151 },
          { x: 1423.78, y: 0.99311 },
          { x: 876.06, y: 0.987137 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7288.02, y: 0.998795 },
          { x: 4345.53, y: 0.998044 },
          { x: 2520.85, y: 0.996917 },
          { x: 1437.22, y: 0.995073 },
          { x: 821.01, y: 0.992105 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7288.02, y: 0.998795 },
          { x: 4345.53, y: 0.998044 },
          { x: 2520.85, y: 0.996917 },
          { x: 1437.22, y: 0.995073 },
          { x: 821.01, y: 0.992105 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6905.35, y: 0.998698 },
          { x: 4050.51, y: 0.997779 },
          { x: 2258.49, y: 0.996332 },
          { x: 1284.08, y: 0.994029 },
          { x: 739.33, y: 0.990176 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6905.35, y: 0.998698 },
          { x: 4050.51, y: 0.997779 },
          { x: 2258.49, y: 0.996332 },
          { x: 1284.08, y: 0.994029 },
          { x: 739.33, y: 0.990176 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 6834.36, y: 0.998748 },
          { x: 4145.13, y: 0.997792 },
          { x: 2434.88, y: 0.99615 },
          { x: 1423.67, y: 0.993109 },
          { x: 876.51, y: 0.987145 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6834.36, y: 0.998748 },
          { x: 4145.13, y: 0.997792 },
          { x: 2434.88, y: 0.99615 },
          { x: 1423.67, y: 0.993109 },
          { x: 876.51, y: 0.987145 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7384.63, y: 0.998759 },
          { x: 4428.50, y: 0.99797 },
          { x: 2554.06, y: 0.996782 },
          { x: 1461.05, y: 0.994926 },
          { x: 835.10, y: 0.99195 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7384.63, y: 0.998759 },
          { x: 4428.50, y: 0.99797 },
          { x: 2554.06, y: 0.996782 },
          { x: 1461.05, y: 0.994926 },
          { x: 835.10, y: 0.99195 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 1367.08, y: 0.991856 },
          { x: 1801.91, y: 0.994054 },
          { x: 2436.83, y: 0.995453 },
          { x: 3153.93, y: 0.996586 },
          { x: 3871.25, y: 0.99728 },
          { x: 4643.92, y: 0.997726 },
          { x: 5425.02, y: 0.99809 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.30, y: 0.991706 },
          { x: 1807.40, y: 0.993937 },
          { x: 2445.51, y: 0.995356 },
          { x: 3166.00, y: 0.996512 },
          { x: 3887.41, y: 0.99722 },
          { x: 4662.25, y: 0.997672 },
          { x: 5450.26, y: 0.998047 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1163.62, y: 0.993397 },
          { x: 1574.32, y: 0.995007 },
          { x: 1996.91, y: 0.996103 },
          { x: 2548.47, y: 0.9969 },
          { x: 3093.29, y: 0.997422 },
          { x: 3699.77, y: 0.997893 },
          { x: 4375.89, y: 0.998232 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1163.83, y: 0.993387 },
          { x: 1574.66, y: 0.995003 },
          { x: 1997.34, y: 0.996099 },
          { x: 2548.52, y: 0.996897 },
          { x: 3093.63, y: 0.99742 },
          { x: 3700.24, y: 0.99789 },
          { x: 4376.41, y: 0.99823 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1225.73, y: 0.994318 },
          { x: 1677.60, y: 0.995748 },
          { x: 2309.57, y: 0.996847 },
          { x: 2998.92, y: 0.997568 },
          { x: 3669.60, y: 0.998017 },
          { x: 4512.85, y: 0.998394 },
          { x: 5498.50, y: 0.998697 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1242.84, y: 0.994346 },
          { x: 1696.09, y: 0.995741 },
          { x: 2336.49, y: 0.996824 },
          { x: 3044.87, y: 0.997539 },
          { x: 3743.51, y: 0.997983 },
          { x: 4616.40, y: 0.998357 },
          { x: 5633.94, y: 0.998661 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1611.77, y: 0.992489 },
          { x: 2089.59, y: 0.994666 },
          { x: 2743.61, y: 0.996045 },
          { x: 3490.68, y: 0.997109 },
          { x: 4246.14, y: 0.99778 },
          { x: 5052.41, y: 0.998223 },
          { x: 5967.28, y: 0.998571 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1631.10, y: 0.992275 },
          { x: 2102.63, y: 0.994522 },
          { x: 2749.39, y: 0.995931 },
          { x: 3488.83, y: 0.997021 },
          { x: 4236.30, y: 0.997711 },
          { x: 5022.77, y: 0.998156 },
          { x: 5945.35, y: 0.998518 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 960.61, y: 0.992332 },
          { x: 1337.83, y: 0.994087 },
          { x: 1736.60, y: 0.995321 },
          { x: 2190.67, y: 0.996147 },
          { x: 2684.85, y: 0.996735 },
          { x: 3226.59, y: 0.997236 },
          { x: 3951.14, y: 0.997677 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.22, y: 0.992267 },
          { x: 1435.55, y: 0.994049 },
          { x: 1835.89, y: 0.995332 },
          { x: 2294.28, y: 0.996166 },
          { x: 2783.31, y: 0.996756 },
          { x: 3321.56, y: 0.997267 },
          { x: 4046.81, y: 0.997703 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 1367.33, y: 0.991854 },
          { x: 1801.97, y: 0.994054 },
          { x: 2436.86, y: 0.995453 },
          { x: 3153.66, y: 0.996586 },
          { x: 3871.25, y: 0.99728 },
          { x: 4643.90, y: 0.997726 },
          { x: 5425.35, y: 0.99809 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.91, y: 0.991706 },
          { x: 1807.44, y: 0.993936 },
          { x: 2445.41, y: 0.995356 },
          { x: 3165.94, y: 0.996512 },
          { x: 3887.05, y: 0.99722 },
          { x: 4661.81, y: 0.997672 },
          { x: 5450.16, y: 0.998047 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1073.30, y: 0.992055 },
          { x: 1535.92, y: 0.994313 },
          { x: 1953.19, y: 0.99562 },
          { x: 2475.78, y: 0.99656 },
          { x: 3052.75, y: 0.997217 },
          { x: 3696.38, y: 0.99777 },
          { x: 4427.60, y: 0.998201 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.96, y: 0.992049 },
          { x: 1534.15, y: 0.994302 },
          { x: 1947.31, y: 0.995616 },
          { x: 2463.35, y: 0.996553 },
          { x: 3029.15, y: 0.997208 },
          { x: 3660.90, y: 0.997763 },
          { x: 4373.68, y: 0.998193 }
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
        min: 0.98,
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

var ctx_t2_20241223_bitrate_ms_ssim_data = document.getElementById('chart_t2_20241223_bitrate_ms_ssim');
const chart_t2_20241223_bitrate_ms_ssim_data = new Chart(ctx_t2_20241223_bitrate_ms_ssim_data,
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
          { x: 5821.51, y: 0.998277 },
          { x: 3315.29, y: 0.997037 },
          { x: 1828.12, y: 0.994861 },
          { x: 1043.38, y: 0.991041 },
          { x: 627.07, y: 0.984319 },
          { x: 410.19, y: 0.972679 }
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
          { x: 7505.16, y: 0.999207 },
          { x: 5105.61, y: 0.998573 },
          { x: 2957.98, y: 0.997219 },
          { x: 1618.16, y: 0.994945 },
          { x: 935.69, y: 0.99115 },
          { x: 567.81, y: 0.984706 },
          { x: 374.81, y: 0.973877 }
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
          { x: 6979.10, y: 0.998462 },
          { x: 3826.22, y: 0.997521 },
          { x: 2006.54, y: 0.996091 },
          { x: 1024.96, y: 0.993898 },
          { x: 527.79, y: 0.990345 },
          { x: 291.16, y: 0.984368 },
          { x: 173.92, y: 0.97427 }
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
          { x: 6950.00, y: 0.998727 },
          { x: 3778.93, y: 0.997873 },
          { x: 1970.48, y: 0.996539 },
          { x: 1006.93, y: 0.994421 },
          { x: 520.94, y: 0.990929 },
          { x: 288.53, y: 0.985063 },
          { x: 171.45, y: 0.975233 }
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
          { x: 7535.85, y: 0.99903 },
          { x: 4531.96, y: 0.99839 },
          { x: 2590.60, y: 0.997408 },
          { x: 1367.54, y: 0.995898 },
          { x: 695.95, y: 0.993444 },
          { x: 363.04, y: 0.989179 },
          { x: 192.33, y: 0.981663 }
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
          { x: 7537.85, y: 0.999123 },
          { x: 4474.24, y: 0.998525 },
          { x: 2517.42, y: 0.997575 },
          { x: 1324.36, y: 0.99611 },
          { x: 685.37, y: 0.99375 },
          { x: 363.43, y: 0.989636 },
          { x: 194.22, y: 0.982348 }
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
          { x: 5561.16, y: 0.998499 },
          { x: 4316.69, y: 0.998219 },
          { x: 3478.46, y: 0.997954 },
          { x: 2575.50, y: 0.99753 },
          { x: 1829.29, y: 0.997024 },
          { x: 1321.75, y: 0.996473 },
          { x: 964.19, y: 0.995829 }
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
          { x: 5676.79, y: 0.998701 },
          { x: 4277.29, y: 0.998426 },
          { x: 3414.98, y: 0.998174 },
          { x: 2501.98, y: 0.997767 },
          { x: 1796.72, y: 0.997284 },
          { x: 952.70, y: 0.996103 }
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
          { x: 5627.73, y: 0.998252 },
          { x: 4268.62, y: 0.997947 },
          { x: 3347.11, y: 0.99766 },
          { x: 2411.12, y: 0.997194 },
          { x: 1680.73, y: 0.996629 },
          { x: 1193.28, y: 0.996 },
          { x: 883.36, y: 0.995356 }
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
          { x: 5944.54, y: 0.998529 },
          { x: 4315.49, y: 0.998189 },
          { x: 3325.38, y: 0.997894 },
          { x: 2361.11, y: 0.997437 },
          { x: 1652.47, y: 0.99689 },
          { x: 1173.60, y: 0.996281 },
          { x: 873.34, y: 0.995654 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5502.00, y: 0.997438 },
          { x: 4161.83, y: 0.997056 },
          { x: 3295.90, y: 0.996743 },
          { x: 2346.32, y: 0.996213 },
          { x: 1652.65, y: 0.995555 },
          { x: 1181.44, y: 0.994799 },
          { x: 861.34, y: 0.993995 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5642.14, y: 0.997774 },
          { x: 4191.63, y: 0.997389 },
          { x: 3271.33, y: 0.997064 },
          { x: 2341.22, y: 0.996551 },
          { x: 1633.17, y: 0.995878 },
          { x: 1167.79, y: 0.995133 },
          { x: 853.59, y: 0.994301 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 5670.69, y: 0.99822 },
          { x: 4039.88, y: 0.99773 },
          { x: 2320.04, y: 0.996702 },
          { x: 1241.69, y: 0.995025 },
          { x: 657.07, y: 0.992233 },
          { x: 367.21, y: 0.987218 },
          { x: 211.65, y: 0.977948 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5659.12, y: 0.998183 },
          { x: 4025.17, y: 0.99768 },
          { x: 2297.70, y: 0.996636 },
          { x: 1237.77, y: 0.995009 },
          { x: 657.56, y: 0.992077 },
          { x: 369.53, y: 0.986913 },
          { x: 213.27, y: 0.977338 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6456.15, y: 0.998569 },
          { x: 4277.24, y: 0.998079 },
          { x: 2355.17, y: 0.997077 },
          { x: 1248.63, y: 0.995466 },
          { x: 658.45, y: 0.99267 },
          { x: 366.99, y: 0.987661 },
          { x: 212.11, y: 0.978418 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6466.81, y: 0.998536 },
          { x: 4268.33, y: 0.998035 },
          { x: 2339.94, y: 0.997021 },
          { x: 1247.19, y: 0.995391 },
          { x: 659.68, y: 0.992526 },
          { x: 370.10, y: 0.987394 },
          { x: 214.14, y: 0.977837 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 5158.40, y: 0.998015 },
          { x: 3356.81, y: 0.997214 },
          { x: 2541.18, y: 0.996524 },
          { x: 1411.63, y: 0.994393 },
          { x: 849.18, y: 0.99085 },
          { x: 559.90, y: 0.984943 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5525.51, y: 0.997997 },
          { x: 3592.58, y: 0.997216 },
          { x: 2677.00, y: 0.996476 },
          { x: 1500.03, y: 0.994293 },
          { x: 912.10, y: 0.990619 },
          { x: 602.82, y: 0.984616 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 4646.68, y: 0.997926 },
          { x: 2819.34, y: 0.997057 },
          { x: 1971.88, y: 0.996276 },
          { x: 947.01, y: 0.99388 },
          { x: 513.75, y: 0.989889 },
          { x: 321.12, y: 0.98311 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4721.84, y: 0.997883 },
          { x: 2854.77, y: 0.997002 },
          { x: 1998.81, y: 0.996219 },
          { x: 967.38, y: 0.993806 },
          { x: 531.15, y: 0.989795 },
          { x: 336.64, y: 0.983077 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4555.45, y: 0.99817 },
          { x: 2769.64, y: 0.997348 },
          { x: 1943.69, y: 0.996584 },
          { x: 940.61, y: 0.994229 },
          { x: 513.18, y: 0.990172 },
          { x: 319.52, y: 0.983293 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4624.89, y: 0.99813 },
          { x: 2804.85, y: 0.997291 },
          { x: 1972.62, y: 0.996516 },
          { x: 962.21, y: 0.994126 },
          { x: 533.21, y: 0.990043 },
          { x: 336.13, y: 0.983239 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 7791.06, y: 0.9985 },
          { x: 4515.05, y: 0.99764 },
          { x: 3659.47, y: 0.997168 },
          { x: 2108.55, y: 0.995439 },
          { x: 1296.49, y: 0.992342 },
          { x: 846.84, y: 0.987143 },
          { x: 525.27, y: 0.97804 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7884.15, y: 0.998413 },
          { x: 4535.89, y: 0.99756 },
          { x: 3561.14, y: 0.997025 },
          { x: 2078.13, y: 0.995316 },
          { x: 1277.23, y: 0.992289 },
          { x: 818.35, y: 0.987086 },
          { x: 529.33, y: 0.97782 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 4683.04, y: 0.997932 },
          { x: 2840.02, y: 0.997062 },
          { x: 1979.55, y: 0.996272 },
          { x: 961.41, y: 0.993906 },
          { x: 530.94, y: 0.990028 },
          { x: 339.78, y: 0.983422 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 0.997893 },
          { x: 2857.84, y: 0.997009 },
          { x: 1988.77, y: 0.996204 },
          { x: 965.98, y: 0.993767 },
          { x: 534.32, y: 0.989768 },
          { x: 341.04, y: 0.982995 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 0.998183 },
          { x: 2782.30, y: 0.997361 },
          { x: 1948.98, y: 0.996586 },
          { x: 952.63, y: 0.994245 },
          { x: 529.20, y: 0.990289 },
          { x: 336.28, y: 0.983672 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 0.998144 },
          { x: 2798.82, y: 0.997306 },
          { x: 1955.45, y: 0.996514 },
          { x: 957.09, y: 0.994105 },
          { x: 534.15, y: 0.990023 },
          { x: 339.80, y: 0.983215 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 5388.08, y: 0.998183 },
          { x: 2846.85, y: 0.997122 },
          { x: 1353.03, y: 0.995362 },
          { x: 699.07, y: 0.992555 },
          { x: 380.25, y: 0.987445 },
          { x: 216.11, y: 0.978236 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5401.90, y: 0.99814 },
          { x: 2837.75, y: 0.997064 },
          { x: 1355.78, y: 0.995282 },
          { x: 705.36, y: 0.992422 },
          { x: 386.14, y: 0.987166 },
          { x: 223.41, y: 0.977853 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6175.40, y: 0.998525 },
          { x: 2938.89, y: 0.997455 },
          { x: 1361.34, y: 0.995693 },
          { x: 702.72, y: 0.992962 },
          { x: 382.93, y: 0.987884 },
          { x: 217.00, y: 0.978599 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6216.27, y: 0.998488 },
          { x: 2936.43, y: 0.997406 },
          { x: 1374.89, y: 0.995633 },
          { x: 706.48, y: 0.992801 },
          { x: 388.47, y: 0.987589 },
          { x: 224.35, y: 0.978145 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 7318.65, y: 0.998339 },
          { x: 4523.47, y: 0.997625 },
          { x: 2734.03, y: 0.996522 },
          { x: 1517.84, y: 0.994321 },
          { x: 1002.01, y: 0.991288 },
          { x: 672.98, y: 0.986432 },
          { x: 477.44, y: 0.977849 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 0.998249 },
          { x: 4541.31, y: 0.997548 },
          { x: 2830.49, y: 0.996572 },
          { x: 1603.31, y: 0.99454 },
          { x: 1058.42, y: 0.991788 },
          { x: 702.57, y: 0.987118 },
          { x: 483.41, y: 0.978316 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 4876.84, y: 0.997837 },
          { x: 2944.40, y: 0.996933 },
          { x: 2033.83, y: 0.996095 },
          { x: 975.33, y: 0.993551 },
          { x: 539.01, y: 0.989357 },
          { x: 348.16, y: 0.982583 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4892.58, y: 0.997842 },
          { x: 2962.24, y: 0.996935 },
          { x: 2057.04, y: 0.996096 },
          { x: 997.08, y: 0.99356 },
          { x: 554.97, y: 0.989355 },
          { x: 357.87, y: 0.982499 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 0.998132 },
          { x: 2865.86, y: 0.997279 },
          { x: 1987.68, y: 0.996458 },
          { x: 960.80, y: 0.993967 },
          { x: 535.57, y: 0.989752 },
          { x: 343.97, y: 0.982861 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4754.05, y: 0.998138 },
          { x: 2880.91, y: 0.997282 },
          { x: 2007.91, y: 0.996462 },
          { x: 982.13, y: 0.993974 },
          { x: 551.74, y: 0.989735 },
          { x: 354.51, y: 0.982777 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 7323.02, y: 0.99834 },
          { x: 4521.52, y: 0.997627 },
          { x: 2730.32, y: 0.996524 },
          { x: 1514.94, y: 0.994323 },
          { x: 1000.73, y: 0.991295 },
          { x: 672.33, y: 0.986439 },
          { x: 477.50, y: 0.977853 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 0.998249 },
          { x: 4541.31, y: 0.997548 },
          { x: 2830.49, y: 0.996572 },
          { x: 1603.31, y: 0.99454 },
          { x: 1058.42, y: 0.991788 },
          { x: 702.57, y: 0.987118 },
          { x: 483.41, y: 0.978316 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 4799.90, y: 0.997776 },
          { x: 2815.70, y: 0.996834 },
          { x: 1458.50, y: 0.995234 },
          { x: 768.20, y: 0.992802 },
          { x: 461.96, y: 0.989349 },
          { x: 279.90, y: 0.983213 },
          { x: 189.67, y: 0.974012 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6500.81, y: 0.998166 },
          { x: 3760.95, y: 0.997294 },
          { x: 1957.15, y: 0.995787 },
          { x: 1014.25, y: 0.993396 },
          { x: 569.87, y: 0.989736 },
          { x: 329.82, y: 0.983084 },
          { x: 214.61, y: 0.972617 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6006.82, y: 0.998421 },
          { x: 3464.07, y: 0.997617 },
          { x: 1825.21, y: 0.996231 },
          { x: 963.57, y: 0.994026 },
          { x: 550.50, y: 0.990604 },
          { x: 323.56, y: 0.984745 },
          { x: 213.42, y: 0.975406 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6348.29, y: 0.998406 },
          { x: 3673.17, y: 0.997576 },
          { x: 1928.53, y: 0.996111 },
          { x: 1007.57, y: 0.993737 },
          { x: 568.87, y: 0.990028 },
          { x: 327.81, y: 0.983414 },
          { x: 212.27, y: 0.972813 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 7361.30, y: 0.99834 },
          { x: 4546.75, y: 0.997629 },
          { x: 2748.98, y: 0.996529 },
          { x: 1526.09, y: 0.994334 },
          { x: 1008.28, y: 0.99131 },
          { x: 673.68, y: 0.986478 },
          { x: 477.80, y: 0.977876 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7294.26, y: 0.998249 },
          { x: 4541.43, y: 0.997548 },
          { x: 2830.15, y: 0.996572 },
          { x: 1603.50, y: 0.99454 },
          { x: 1058.39, y: 0.991788 },
          { x: 702.71, y: 0.987122 },
          { x: 484.09, y: 0.978339 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6914.52, y: 0.998024 },
          { x: 4299.73, y: 0.997152 },
          { x: 2540.93, y: 0.995837 },
          { x: 1493.20, y: 0.993811 },
          { x: 895.06, y: 0.990227 },
          { x: 532.13, y: 0.984242 },
          { x: 405.78, y: 0.976994 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6927.25, y: 0.998029 },
          { x: 4301.07, y: 0.997167 },
          { x: 2543.49, y: 0.995842 },
          { x: 1495.84, y: 0.993819 },
          { x: 897.31, y: 0.990204 },
          { x: 549.56, y: 0.984025 },
          { x: 424.60, y: 0.976518 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 0.998278 },
          { x: 4170.07, y: 0.997514 },
          { x: 2480.42, y: 0.996279 },
          { x: 1461.78, y: 0.994291 },
          { x: 887.66, y: 0.990824 },
          { x: 518.18, y: 0.98482 },
          { x: 403.54, y: 0.977765 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 0.998276 },
          { x: 4191.70, y: 0.997506 },
          { x: 2495.80, y: 0.996263 },
          { x: 1476.64, y: 0.994249 },
          { x: 907.32, y: 0.990734 },
          { x: 542.13, y: 0.984567 },
          { x: 426.76, y: 0.977237 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6892.06, y: 0.998246 },
          { x: 4190.02, y: 0.99732 },
          { x: 2418.85, y: 0.995887 },
          { x: 1326.84, y: 0.993134 },
          { x: 884.58, y: 0.989443 },
          { x: 599.32, y: 0.983118 },
          { x: 441.89, y: 0.972805 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6678.13, y: 0.998127 },
          { x: 4125.33, y: 0.99727 },
          { x: 2432.61, y: 0.995912 },
          { x: 1359.70, y: 0.993304 },
          { x: 902.02, y: 0.989853 },
          { x: 613.77, y: 0.983976 },
          { x: 449.18, y: 0.97444 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 7122.54, y: 0.99824 },
          { x: 4268.27, y: 0.997301 },
          { x: 2447.03, y: 0.995878 },
          { x: 1341.44, y: 0.993142 },
          { x: 889.87, y: 0.98946 },
          { x: 601.65, y: 0.983104 },
          { x: 445.34, y: 0.972869 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6879.21, y: 0.998141 },
          { x: 4218.01, y: 0.997289 },
          { x: 2478.72, y: 0.99595 },
          { x: 1388.78, y: 0.993383 },
          { x: 918.01, y: 0.989954 },
          { x: 621.06, y: 0.984138 },
          { x: 457.02, y: 0.974659 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 7486.18, y: 0.998182 },
          { x: 4245.04, y: 0.996945 },
          { x: 2309.09, y: 0.994636 },
          { x: 1374.17, y: 0.990939 },
          { x: 860.29, y: 0.983301 },
          { x: 575.87, y: 0.971529 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7481.36, y: 0.998176 },
          { x: 4241.81, y: 0.996931 },
          { x: 2307.75, y: 0.99459 },
          { x: 1374.84, y: 0.990932 },
          { x: 861.33, y: 0.983278 },
          { x: 577.34, y: 0.971449 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 6448.56, y: 0.998532 },
          { x: 3849.75, y: 0.997519 },
          { x: 2249.63, y: 0.995788 },
          { x: 1232.99, y: 0.99237 },
          { x: 745.62, y: 0.986213 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6448.56, y: 0.998532 },
          { x: 3849.75, y: 0.997519 },
          { x: 2249.63, y: 0.995788 },
          { x: 1232.99, y: 0.99237 },
          { x: 745.62, y: 0.986213 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 5987.91, y: 0.998374 },
          { x: 3460.30, y: 0.9975 },
          { x: 1921.28, y: 0.996171 },
          { x: 1062.54, y: 0.994012 },
          { x: 626.09, y: 0.990393 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5987.91, y: 0.998374 },
          { x: 3460.30, y: 0.9975 },
          { x: 1921.28, y: 0.996171 },
          { x: 1062.54, y: 0.994012 },
          { x: 626.09, y: 0.990393 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5981.97, y: 0.998604 },
          { x: 3467.20, y: 0.997789 },
          { x: 1910.84, y: 0.996497 },
          { x: 1042.65, y: 0.994345 },
          { x: 613.33, y: 0.990777 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5981.97, y: 0.998604 },
          { x: 3467.20, y: 0.997789 },
          { x: 1910.84, y: 0.996497 },
          { x: 1042.65, y: 0.994345 },
          { x: 613.33, y: 0.990777 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6091.29, y: 0.998413 },
          { x: 4023.20, y: 0.997788 },
          { x: 2604.66, y: 0.996915 },
          { x: 1659.02, y: 0.995704 },
          { x: 962.92, y: 0.993486 },
          { x: 529.06, y: 0.989144 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.29, y: 0.998413 },
          { x: 4023.20, y: 0.997788 },
          { x: 2604.66, y: 0.996915 },
          { x: 1659.02, y: 0.995704 },
          { x: 962.92, y: 0.993486 },
          { x: 529.06, y: 0.989144 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5894.41, y: 0.998551 },
          { x: 3855.05, y: 0.997978 },
          { x: 2516.38, y: 0.997136 },
          { x: 1616.27, y: 0.995943 },
          { x: 943.11, y: 0.993768 },
          { x: 523.84, y: 0.989412 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5894.41, y: 0.998551 },
          { x: 3855.05, y: 0.997978 },
          { x: 2516.38, y: 0.997136 },
          { x: 1616.27, y: 0.995943 },
          { x: 943.11, y: 0.993768 },
          { x: 523.84, y: 0.989412 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6432.97, y: 0.998536 },
          { x: 3844.49, y: 0.99753 },
          { x: 2245.87, y: 0.995797 },
          { x: 1234.73, y: 0.992353 },
          { x: 750.81, y: 0.986141 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6432.97, y: 0.998536 },
          { x: 3844.49, y: 0.99753 },
          { x: 2245.87, y: 0.995797 },
          { x: 1234.73, y: 0.992353 },
          { x: 750.81, y: 0.986141 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 5974.53, y: 0.998375 },
          { x: 3451.03, y: 0.997502 },
          { x: 1914.72, y: 0.996171 },
          { x: 1060.37, y: 0.994008 },
          { x: 625.38, y: 0.990374 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5974.53, y: 0.998375 },
          { x: 3451.03, y: 0.997502 },
          { x: 1914.72, y: 0.996171 },
          { x: 1060.37, y: 0.994008 },
          { x: 625.38, y: 0.990374 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5971.21, y: 0.998606 },
          { x: 3455.27, y: 0.997788 },
          { x: 1903.92, y: 0.996492 },
          { x: 1041.01, y: 0.994339 },
          { x: 610.89, y: 0.990736 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5971.21, y: 0.998606 },
          { x: 3455.27, y: 0.997788 },
          { x: 1903.92, y: 0.996492 },
          { x: 1041.01, y: 0.994339 },
          { x: 610.89, y: 0.990736 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 6829.49, y: 0.998378 },
          { x: 4148.40, y: 0.997367 },
          { x: 2435.20, y: 0.995634 },
          { x: 1423.78, y: 0.992416 },
          { x: 876.06, y: 0.986363 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6829.49, y: 0.998378 },
          { x: 4148.40, y: 0.997367 },
          { x: 2435.20, y: 0.995634 },
          { x: 1423.78, y: 0.992416 },
          { x: 876.06, y: 0.986363 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7288.02, y: 0.998425 },
          { x: 4345.53, y: 0.997584 },
          { x: 2520.85, y: 0.996323 },
          { x: 1437.22, y: 0.994276 },
          { x: 821.01, y: 0.99101 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7288.02, y: 0.998425 },
          { x: 4345.53, y: 0.997584 },
          { x: 2520.85, y: 0.996323 },
          { x: 1437.22, y: 0.994276 },
          { x: 821.01, y: 0.99101 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6905.35, y: 0.998316 },
          { x: 4050.51, y: 0.997266 },
          { x: 2258.49, y: 0.995662 },
          { x: 1284.08, y: 0.99318 },
          { x: 739.33, y: 0.989151 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6905.35, y: 0.998316 },
          { x: 4050.51, y: 0.997266 },
          { x: 2258.49, y: 0.995662 },
          { x: 1284.08, y: 0.99318 },
          { x: 739.33, y: 0.989151 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 6834.36, y: 0.99838 },
          { x: 4145.13, y: 0.997366 },
          { x: 2434.88, y: 0.995633 },
          { x: 1423.67, y: 0.992415 },
          { x: 876.51, y: 0.98637 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6834.36, y: 0.99838 },
          { x: 4145.13, y: 0.997366 },
          { x: 2434.88, y: 0.995633 },
          { x: 1423.67, y: 0.992415 },
          { x: 876.51, y: 0.98637 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7384.63, y: 0.998247 },
          { x: 4428.50, y: 0.997298 },
          { x: 2554.06, y: 0.995926 },
          { x: 1461.05, y: 0.993861 },
          { x: 835.10, y: 0.990639 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7384.63, y: 0.998247 },
          { x: 4428.50, y: 0.997298 },
          { x: 2554.06, y: 0.995926 },
          { x: 1461.05, y: 0.993861 },
          { x: 835.10, y: 0.990639 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 1367.08, y: 0.990291 },
          { x: 1801.91, y: 0.992802 },
          { x: 2436.83, y: 0.994343 },
          { x: 3153.93, y: 0.995671 },
          { x: 3871.25, y: 0.996542 },
          { x: 4643.92, y: 0.997057 },
          { x: 5425.02, y: 0.9975 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.30, y: 0.990086 },
          { x: 1807.40, y: 0.992636 },
          { x: 2445.51, y: 0.994203 },
          { x: 3166.00, y: 0.995561 },
          { x: 3887.41, y: 0.996454 },
          { x: 4662.25, y: 0.996978 },
          { x: 5450.26, y: 0.997435 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1163.62, y: 0.991589 },
          { x: 1574.32, y: 0.993501 },
          { x: 1996.91, y: 0.994821 },
          { x: 2548.47, y: 0.995861 },
          { x: 3093.29, y: 0.996509 },
          { x: 3699.77, y: 0.997085 },
          { x: 4375.89, y: 0.997554 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1163.83, y: 0.991573 },
          { x: 1574.66, y: 0.993494 },
          { x: 1997.34, y: 0.994815 },
          { x: 2548.52, y: 0.995856 },
          { x: 3093.63, y: 0.996505 },
          { x: 3700.24, y: 0.99708 },
          { x: 4376.41, y: 0.997551 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1225.73, y: 0.992855 },
          { x: 1677.60, y: 0.994543 },
          { x: 2309.57, y: 0.995879 },
          { x: 2998.92, y: 0.996746 },
          { x: 3669.60, y: 0.997305 },
          { x: 4512.85, y: 0.997775 },
          { x: 5498.50, y: 0.998167 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1242.84, y: 0.992772 },
          { x: 1696.09, y: 0.994448 },
          { x: 2336.49, y: 0.995785 },
          { x: 3044.87, y: 0.996658 },
          { x: 3743.51, y: 0.997222 },
          { x: 4616.40, y: 0.997696 },
          { x: 5633.94, y: 0.998098 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1611.77, y: 0.990985 },
          { x: 2089.59, y: 0.993433 },
          { x: 2743.61, y: 0.994929 },
          { x: 3490.68, y: 0.99617 },
          { x: 4246.14, y: 0.997007 },
          { x: 5052.41, y: 0.997509 },
          { x: 5967.28, y: 0.99794 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1631.10, y: 0.990696 },
          { x: 2102.63, y: 0.993234 },
          { x: 2749.39, y: 0.994767 },
          { x: 3488.83, y: 0.996046 },
          { x: 4236.30, y: 0.996907 },
          { x: 5022.77, y: 0.997416 },
          { x: 5945.35, y: 0.997862 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 960.61, y: 0.990454 },
          { x: 1337.83, y: 0.992522 },
          { x: 1736.60, y: 0.993973 },
          { x: 2190.67, y: 0.995024 },
          { x: 2684.85, y: 0.995732 },
          { x: 3226.59, y: 0.996341 },
          { x: 3951.14, y: 0.996898 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.22, y: 0.990397 },
          { x: 1435.55, y: 0.992491 },
          { x: 1835.89, y: 0.993985 },
          { x: 2294.28, y: 0.995044 },
          { x: 2783.31, y: 0.995758 },
          { x: 3321.56, y: 0.996375 },
          { x: 4046.81, y: 0.996929 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 1367.33, y: 0.990288 },
          { x: 1801.97, y: 0.992803 },
          { x: 2436.86, y: 0.994343 },
          { x: 3153.66, y: 0.995671 },
          { x: 3871.25, y: 0.996542 },
          { x: 4643.90, y: 0.997057 },
          { x: 5425.35, y: 0.9975 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.91, y: 0.990083 },
          { x: 1807.44, y: 0.992635 },
          { x: 2445.41, y: 0.994203 },
          { x: 3165.94, y: 0.995561 },
          { x: 3887.05, y: 0.996454 },
          { x: 4661.81, y: 0.996978 },
          { x: 5450.16, y: 0.997435 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1073.30, y: 0.990027 },
          { x: 1535.92, y: 0.992567 },
          { x: 1953.19, y: 0.994122 },
          { x: 2475.78, y: 0.995335 },
          { x: 3052.75, y: 0.996155 },
          { x: 3696.38, y: 0.996855 },
          { x: 4427.60, y: 0.997467 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.96, y: 0.99002 },
          { x: 1534.15, y: 0.992553 },
          { x: 1947.31, y: 0.994117 },
          { x: 2463.35, y: 0.995326 },
          { x: 3029.15, y: 0.996144 },
          { x: 3660.90, y: 0.996844 },
          { x: 4373.68, y: 0.997455 }
        ]
      },
    ],
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
        min: 0.98,
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

var ctx_t2_20241223_bitrate_vmaf_data = document.getElementById('chart_t2_20241223_bitrate_vmaf');
const chart_t2_20241223_bitrate_vmaf_data = new Chart(ctx_t2_20241223_bitrate_vmaf_data,
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
          { x: 6979.10, y: 96.366116 },
          { x: 3826.22, y: 94.431041 },
          { x: 2006.54, y: 91.391137 },
          { x: 1024.96, y: 86.874167 },
          { x: 527.79, y: 80.275771 },
          { x: 291.16, y: 70.783149 },
          { x: 173.92, y: 57.992306 }
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
          { x: 6950.00, y: 96.617151 },
          { x: 3778.93, y: 94.749658 },
          { x: 1970.48, y: 91.717995 },
          { x: 1006.93, y: 87.181866 },
          { x: 520.94, y: 80.622107 },
          { x: 288.53, y: 71.209135 },
          { x: 171.45, y: 58.438808 }
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
          { x: 7535.85, y: 97.517056 },
          { x: 4531.96, y: 96.4167 },
          { x: 2590.60, y: 94.476249 },
          { x: 1367.54, y: 91.453805 },
          { x: 695.95, y: 87.122177 },
          { x: 363.04, y: 80.509418 },
          { x: 192.33, y: 70.368927 }
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
          { x: 7537.85, y: 97.70584 },
          { x: 4474.24, y: 96.677849 },
          { x: 2517.42, y: 94.797929 },
          { x: 1324.36, y: 91.855216 },
          { x: 685.37, y: 87.695772 },
          { x: 363.43, y: 81.336067 },
          { x: 194.22, y: 71.372201 }
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
          { x: 5561.16, y: 96.635272 },
          { x: 4316.69, y: 96.010702 },
          { x: 3478.46, y: 95.402743 },
          { x: 2575.50, y: 94.373852 },
          { x: 1829.29, y: 93.115903 },
          { x: 1321.75, y: 91.756987 },
          { x: 964.19, y: 90.243695 }
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
          { x: 5676.79, y: 96.909047 },
          { x: 4277.29, y: 96.264399 },
          { x: 3414.98, y: 95.649406 },
          { x: 2501.98, y: 94.597405 },
          { x: 1796.72, y: 93.340846 },
          { x: 952.70, y: 90.355281 }
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
          { x: 5627.73, y: 96.348762 },
          { x: 4268.62, y: 95.663283 },
          { x: 3347.11, y: 95.01662 },
          { x: 2411.12, y: 93.916222 },
          { x: 1680.73, y: 92.503847 },
          { x: 1193.28, y: 91.000733 },
          { x: 883.36, y: 89.450444 }
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
          { x: 5944.54, y: 96.641095 },
          { x: 4315.49, y: 95.902727 },
          { x: 3325.38, y: 95.208351 },
          { x: 2361.11, y: 94.08033 },
          { x: 1652.47, y: 92.663806 },
          { x: 1173.60, y: 91.150606 },
          { x: 873.34, y: 89.602104 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5502.00, y: 94.828586 },
          { x: 4161.83, y: 93.992958 },
          { x: 3295.90, y: 93.255981 },
          { x: 2346.32, y: 91.98617 },
          { x: 1652.65, y: 90.292046 },
          { x: 1181.44, y: 88.302313 },
          { x: 861.34, y: 86.341829 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5642.14, y: 95.009107 },
          { x: 4191.63, y: 94.118265 },
          { x: 3271.33, y: 93.363945 },
          { x: 2341.22, y: 92.024457 },
          { x: 1633.17, y: 90.287612 },
          { x: 1167.79, y: 88.234007 },
          { x: 853.59, y: 86.181808 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 5670.69, y: 95.854686 },
          { x: 4039.88, y: 94.922881 },
          { x: 2320.04, y: 92.791822 },
          { x: 1241.69, y: 89.67058 },
          { x: 657.07, y: 83.653209 },
          { x: 367.21, y: 75.65372 },
          { x: 211.65, y: 63.019762 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5659.12, y: 95.746463 },
          { x: 4025.17, y: 94.784243 },
          { x: 2297.70, y: 92.606693 },
          { x: 1237.77, y: 88.999344 },
          { x: 657.56, y: 83.415567 },
          { x: 369.53, y: 75.24139 },
          { x: 213.27, y: 62.16373 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6456.15, y: 96.162496 },
          { x: 4277.24, y: 95.18126 },
          { x: 2355.17, y: 93.000196 },
          { x: 1248.63, y: 89.38923 },
          { x: 658.45, y: 83.916132 },
          { x: 366.99, y: 75.787007 },
          { x: 212.11, y: 63.122662 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6466.81, y: 96.065579 },
          { x: 4268.33, y: 95.056166 },
          { x: 2339.94, y: 92.845092 },
          { x: 1247.19, y: 89.233989 },
          { x: 659.68, y: 83.680662 },
          { x: 370.10, y: 75.401379 },
          { x: 214.14, y: 62.465234 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 5158.40, y: 95.789194 },
          { x: 3356.81, y: 94.084073 },
          { x: 2541.18, y: 92.608797 },
          { x: 1411.63, y: 88.373296 },
          { x: 849.18, y: 82.627906 },
          { x: 559.90, y: 74.592654 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5525.51, y: 95.425817 },
          { x: 3592.58, y: 93.640709 },
          { x: 2677.00, y: 92.109559 },
          { x: 1500.03, y: 88.005541 },
          { x: 912.10, y: 82.453998 },
          { x: 602.82, y: 74.77624 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 4646.68, y: 95.615237 },
          { x: 2819.34, y: 93.787052 },
          { x: 1971.88, y: 92.191696 },
          { x: 947.01, y: 87.921398 },
          { x: 513.75, y: 81.974316 },
          { x: 321.12, y: 72.988115 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4721.84, y: 95.497669 },
          { x: 2854.77, y: 93.64447 },
          { x: 1998.81, y: 92.044712 },
          { x: 967.38, y: 87.701663 },
          { x: 531.15, y: 81.652264 },
          { x: 336.64, y: 72.671992 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4555.45, y: 95.800506 },
          { x: 2769.64, y: 93.986325 },
          { x: 1943.69, y: 92.391178 },
          { x: 940.61, y: 88.110514 },
          { x: 513.18, y: 82.037509 },
          { x: 319.52, y: 73.130854 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4624.89, y: 95.688 },
          { x: 2804.85, y: 93.847429 },
          { x: 1972.62, y: 92.254365 },
          { x: 962.21, y: 87.916735 },
          { x: 533.21, y: 81.807022 },
          { x: 336.13, y: 72.866929 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 7791.06, y: 96.498073 },
          { x: 4515.05, y: 94.734178 },
          { x: 3659.47, y: 93.894326 },
          { x: 2108.55, y: 90.646551 },
          { x: 1296.49, y: 85.798372 },
          { x: 846.84, y: 78.693581 },
          { x: 525.27, y: 67.964091 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7884.15, y: 96.013907 },
          { x: 4535.89, y: 94.102034 },
          { x: 3561.14, y: 93.113039 },
          { x: 2078.13, y: 89.859101 },
          { x: 1277.23, y: 85.042499 },
          { x: 818.35, y: 78.033311 },
          { x: 529.33, y: 67.616237 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
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
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
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
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 95.814978 },
          { x: 2782.30, y: 93.990074 },
          { x: 1948.98, y: 92.358387 },
          { x: 952.63, y: 88.088891 },
          { x: 529.20, y: 82.026828 },
          { x: 336.28, y: 73.193294 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 95.707832 },
          { x: 2798.82, y: 93.866416 },
          { x: 1955.45, y: 92.237087 },
          { x: 957.09, y: 87.906255 },
          { x: 534.15, y: 81.807515 },
          { x: 339.80, y: 72.784073 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 5388.08, y: 95.825369 },
          { x: 2846.85, y: 93.656888 },
          { x: 1353.03, y: 89.600038 },
          { x: 699.07, y: 84.222094 },
          { x: 380.25, y: 76.215262 },
          { x: 216.11, y: 64.500115 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5401.90, y: 95.691028 },
          { x: 2837.75, y: 93.475555 },
          { x: 1355.78, y: 89.392183 },
          { x: 705.36, y: 83.987251 },
          { x: 386.14, y: 75.807342 },
          { x: 223.41, y: 64.092007 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6175.40, y: 96.363998 },
          { x: 2938.89, y: 94.08686 },
          { x: 1361.34, y: 90.000523 },
          { x: 702.72, y: 84.667205 },
          { x: 382.93, y: 76.659578 },
          { x: 217.00, y: 64.873153 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6216.27, y: 96.263992 },
          { x: 2936.43, y: 93.938048 },
          { x: 1374.89, y: 89.865147 },
          { x: 706.48, y: 84.403509 },
          { x: 388.47, y: 76.263773 },
          { x: 224.35, y: 64.410873 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 7318.65, y: 96.2473 },
          { x: 4523.47, y: 94.829699 },
          { x: 2734.03, y: 92.320161 },
          { x: 1517.84, y: 87.707855 },
          { x: 1002.01, y: 82.165042 },
          { x: 672.98, y: 74.872747 },
          { x: 477.44, y: 64.348443 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 95.664214 },
          { x: 4541.31, y: 94.198637 },
          { x: 2830.49, y: 91.865854 },
          { x: 1603.31, y: 87.699607 },
          { x: 1058.42, y: 82.741919 },
          { x: 702.57, y: 75.594655 },
          { x: 483.41, y: 64.717028 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
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
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4892.58, y: 95.454301 },
          { x: 2962.24, y: 93.568481 },
          { x: 2057.04, y: 91.865556 },
          { x: 997.08, y: 87.397188 },
          { x: 554.97, y: 81.152526 },
          { x: 357.87, y: 71.672719 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 95.671148 },
          { x: 2865.86, y: 93.762783 },
          { x: 1987.68, y: 92.034549 },
          { x: 960.80, y: 87.471414 },
          { x: 535.57, y: 80.925431 },
          { x: 343.97, y: 71.437909 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4754.05, y: 95.635966 },
          { x: 2880.91, y: 93.730934 },
          { x: 2007.91, y: 92.032728 },
          { x: 982.13, y: 87.535983 },
          { x: 551.74, y: 81.131851 },
          { x: 354.51, y: 71.68232 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 7323.02, y: 96.248388 },
          { x: 4521.52, y: 94.827209 },
          { x: 2730.32, y: 92.317315 },
          { x: 1514.94, y: 87.718157 },
          { x: 1000.73, y: 82.163348 },
          { x: 672.33, y: 74.882689 },
          { x: 477.50, y: 64.385207 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 95.664214 },
          { x: 4541.31, y: 94.198637 },
          { x: 2830.49, y: 91.865854 },
          { x: 1603.31, y: 87.699607 },
          { x: 1058.42, y: 82.741919 },
          { x: 702.57, y: 75.594655 },
          { x: 483.41, y: 64.717028 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 4799.90, y: 94.989657 },
          { x: 2815.70, y: 92.979192 },
          { x: 1458.50, y: 89.593712 },
          { x: 768.20, y: 84.700425 },
          { x: 461.96, y: 78.616662 },
          { x: 279.90, y: 68.878369 },
          { x: 189.67, y: 57.653205 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6500.81, y: 95.962848 },
          { x: 3760.95, y: 94.160432 },
          { x: 1957.15, y: 91.135113 },
          { x: 1014.25, y: 86.639577 },
          { x: 569.87, y: 80.430439 },
          { x: 329.82, y: 70.902965 },
          { x: 214.61, y: 59.41365 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6006.82, y: 96.101982 },
          { x: 3464.07, y: 94.360907 },
          { x: 1825.21, y: 91.422345 },
          { x: 963.57, y: 87.011509 },
          { x: 550.50, y: 80.951908 },
          { x: 323.56, y: 71.520241 },
          { x: 213.42, y: 59.725719 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6348.29, y: 96.141479 },
          { x: 3673.17, y: 94.369908 },
          { x: 1928.53, y: 91.378647 },
          { x: 1007.57, y: 86.874821 },
          { x: 568.87, y: 80.647928 },
          { x: 327.81, y: 71.079751 },
          { x: 212.27, y: 59.465128 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 7361.30, y: 96.255083 },
          { x: 4546.75, y: 94.840496 },
          { x: 2748.98, y: 92.340375 },
          { x: 1526.09, y: 87.734748 },
          { x: 1008.28, y: 82.196152 },
          { x: 673.68, y: 74.911497 },
          { x: 477.80, y: 64.38332 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7294.26, y: 95.665241 },
          { x: 4541.43, y: 94.200904 },
          { x: 2830.15, y: 91.869364 },
          { x: 1603.50, y: 87.707909 },
          { x: 1058.39, y: 82.746316 },
          { x: 702.71, y: 75.584702 },
          { x: 484.09, y: 64.706092 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6914.52, y: 95.3402 },
          { x: 4299.73, y: 93.706723 },
          { x: 2540.93, y: 90.975342 },
          { x: 1493.20, y: 87.064577 },
          { x: 895.06, y: 80.73625 },
          { x: 532.13, y: 71.479836 },
          { x: 405.78, y: 64.221866 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6927.25, y: 95.345603 },
          { x: 4301.07, y: 93.721866 },
          { x: 2543.49, y: 91.00799 },
          { x: 1495.84, y: 87.117099 },
          { x: 897.31, y: 80.812231 },
          { x: 549.56, y: 71.57045 },
          { x: 424.60, y: 64.221768 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 95.363105 },
          { x: 4170.07, y: 93.774685 },
          { x: 2480.42, y: 91.094751 },
          { x: 1461.78, y: 87.141937 },
          { x: 887.66, y: 80.859365 },
          { x: 518.18, y: 71.640499 },
          { x: 403.54, y: 64.292688 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 95.370736 },
          { x: 4191.70, y: 93.793473 },
          { x: 2495.80, y: 91.114953 },
          { x: 1476.64, y: 87.167407 },
          { x: 907.32, y: 80.879811 },
          { x: 542.13, y: 71.690468 },
          { x: 426.76, y: 64.239776 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6892.06, y: 95.676537 },
          { x: 4190.02, y: 93.988943 },
          { x: 2418.85, y: 90.968858 },
          { x: 1326.84, y: 85.525309 },
          { x: 884.58, y: 79.403528 },
          { x: 599.32, y: 71.437583 },
          { x: 441.89, y: 61.484459 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6678.13, y: 95.004627 },
          { x: 4125.33, y: 93.351662 },
          { x: 2432.61, y: 90.470436 },
          { x: 1359.70, y: 85.421241 },
          { x: 902.02, y: 79.78207 },
          { x: 613.77, y: 72.366661 },
          { x: 449.18, y: 62.868212 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 7122.54, y: 95.678767 },
          { x: 4268.27, y: 94.000428 },
          { x: 2447.03, y: 91.006045 },
          { x: 1341.44, y: 85.517782 },
          { x: 889.87, y: 79.380421 },
          { x: 601.65, y: 71.325354 },
          { x: 445.34, y: 61.385209 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6879.21, y: 95.045038 },
          { x: 4218.01, y: 93.413105 },
          { x: 2478.72, y: 90.606714 },
          { x: 1388.78, y: 85.574112 },
          { x: 918.01, y: 79.920382 },
          { x: 621.06, y: 72.540268 },
          { x: 457.02, y: 63.096886 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 7486.18, y: 96.281364 },
          { x: 4245.04, y: 94.1816 },
          { x: 2309.09, y: 90.542956 },
          { x: 1374.17, y: 85.288433 },
          { x: 860.29, y: 77.167958 },
          { x: 575.87, y: 65.408425 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7481.36, y: 96.276782 },
          { x: 4241.81, y: 94.176057 },
          { x: 2307.75, y: 90.525304 },
          { x: 1374.84, y: 85.243615 },
          { x: 861.33, y: 77.131006 },
          { x: 577.34, y: 65.380155 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 6448.56, y: 96.73738 },
          { x: 3849.75, y: 94.927777 },
          { x: 2249.63, y: 91.871286 },
          { x: 1232.99, y: 86.58742 },
          { x: 745.62, y: 78.706445 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6448.56, y: 96.73738 },
          { x: 3849.75, y: 94.927777 },
          { x: 2249.63, y: 91.871286 },
          { x: 1232.99, y: 86.58742 },
          { x: 745.62, y: 78.706445 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 5987.91, y: 96.525086 },
          { x: 3460.30, y: 94.889694 },
          { x: 1921.28, y: 92.194727 },
          { x: 1062.54, y: 88.193192 },
          { x: 626.09, y: 82.469031 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5987.91, y: 96.525086 },
          { x: 3460.30, y: 94.889694 },
          { x: 1921.28, y: 92.194727 },
          { x: 1062.54, y: 88.193192 },
          { x: 626.09, y: 82.469031 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5981.97, y: 96.811578 },
          { x: 3467.20, y: 95.215389 },
          { x: 1910.84, y: 92.555097 },
          { x: 1042.65, y: 88.522852 },
          { x: 613.33, y: 82.829675 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5981.97, y: 96.811578 },
          { x: 3467.20, y: 95.215389 },
          { x: 1910.84, y: 92.555097 },
          { x: 1042.65, y: 88.522852 },
          { x: 613.33, y: 82.829675 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6091.29, y: 96.912858 },
          { x: 4023.20, y: 95.824283 },
          { x: 2604.66, y: 94.210049 },
          { x: 1659.02, y: 91.93734 },
          { x: 962.92, y: 88.089601 },
          { x: 529.06, y: 81.451879 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.29, y: 96.912858 },
          { x: 4023.20, y: 95.824283 },
          { x: 2604.66, y: 94.210049 },
          { x: 1659.02, y: 91.93734 },
          { x: 962.92, y: 88.089601 },
          { x: 529.06, y: 81.451879 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5894.41, y: 97.016861 },
          { x: 3855.05, y: 95.910384 },
          { x: 2516.38, y: 94.279755 },
          { x: 1616.27, y: 91.996381 },
          { x: 943.11, y: 88.154714 },
          { x: 523.84, y: 81.515487 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5894.41, y: 97.016861 },
          { x: 3855.05, y: 95.910384 },
          { x: 2516.38, y: 94.279755 },
          { x: 1616.27, y: 91.996381 },
          { x: 943.11, y: 88.154714 },
          { x: 523.84, y: 81.515487 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6432.97, y: 96.744662 },
          { x: 3844.49, y: 94.945915 },
          { x: 2245.87, y: 91.889402 },
          { x: 1234.73, y: 86.554679 },
          { x: 750.81, y: 78.628697 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6432.97, y: 96.744662 },
          { x: 3844.49, y: 94.945915 },
          { x: 2245.87, y: 91.889402 },
          { x: 1234.73, y: 86.554679 },
          { x: 750.81, y: 78.628697 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 5974.53, y: 96.528 },
          { x: 3451.03, y: 94.892852 },
          { x: 1914.72, y: 92.191809 },
          { x: 1060.37, y: 88.16767 },
          { x: 625.38, y: 82.462443 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5974.53, y: 96.528 },
          { x: 3451.03, y: 94.892852 },
          { x: 1914.72, y: 92.191809 },
          { x: 1060.37, y: 88.16767 },
          { x: 625.38, y: 82.462443 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5971.21, y: 96.812356 },
          { x: 3455.27, y: 95.209688 },
          { x: 1903.92, y: 92.542933 },
          { x: 1041.01, y: 88.503751 },
          { x: 610.89, y: 82.722146 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5971.21, y: 96.812356 },
          { x: 3455.27, y: 95.209688 },
          { x: 1903.92, y: 92.542933 },
          { x: 1041.01, y: 88.503751 },
          { x: 610.89, y: 82.722146 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 6829.49, y: 96.567777 },
          { x: 4148.40, y: 94.679109 },
          { x: 2435.20, y: 91.488162 },
          { x: 1423.78, y: 86.064805 },
          { x: 876.06, y: 77.989128 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6829.49, y: 96.567777 },
          { x: 4148.40, y: 94.679109 },
          { x: 2435.20, y: 91.488162 },
          { x: 1423.78, y: 86.064805 },
          { x: 876.06, y: 77.989128 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7288.02, y: 96.649938 },
          { x: 4345.53, y: 95.142878 },
          { x: 2520.85, y: 92.91851 },
          { x: 1437.22, y: 89.508366 },
          { x: 821.01, y: 84.613824 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7288.02, y: 96.649938 },
          { x: 4345.53, y: 95.142878 },
          { x: 2520.85, y: 92.91851 },
          { x: 1437.22, y: 89.508366 },
          { x: 821.01, y: 84.613824 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6905.35, y: 96.597357 },
          { x: 4050.51, y: 94.764248 },
          { x: 2258.49, y: 91.937818 },
          { x: 1284.08, y: 87.764448 },
          { x: 739.33, y: 81.708657 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6905.35, y: 96.597357 },
          { x: 4050.51, y: 94.764248 },
          { x: 2258.49, y: 91.937818 },
          { x: 1284.08, y: 87.764448 },
          { x: 739.33, y: 81.708657 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 6834.36, y: 96.569839 },
          { x: 4145.13, y: 94.673022 },
          { x: 2434.88, y: 91.488845 },
          { x: 1423.67, y: 86.073274 },
          { x: 876.51, y: 77.990758 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6834.36, y: 96.569839 },
          { x: 4145.13, y: 94.673022 },
          { x: 2434.88, y: 91.488845 },
          { x: 1423.67, y: 86.073274 },
          { x: 876.51, y: 77.990758 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7384.63, y: 96.940469 },
          { x: 4428.50, y: 95.524381 },
          { x: 2554.06, y: 93.35756 },
          { x: 1461.05, y: 89.994393 },
          { x: 835.10, y: 85.042749 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7384.63, y: 96.940469 },
          { x: 4428.50, y: 95.524381 },
          { x: 2554.06, y: 93.35756 },
          { x: 1461.05, y: 89.994393 },
          { x: 835.10, y: 85.042749 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 1367.08, y: 76.672184 },
          { x: 1801.91, y: 80.73872 },
          { x: 2436.83, y: 83.779633 },
          { x: 3153.93, y: 86.827523 },
          { x: 3871.25, y: 89.182834 },
          { x: 4643.92, y: 90.63019 },
          { x: 5425.02, y: 92.109997 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.30, y: 76.141011 },
          { x: 1807.40, y: 80.231616 },
          { x: 2445.51, y: 83.322675 },
          { x: 3166.00, y: 86.424285 },
          { x: 3887.41, y: 88.840591 },
          { x: 4662.25, y: 90.314796 },
          { x: 5450.26, y: 91.846692 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1163.62, y: 84.158982 },
          { x: 1574.32, y: 87.0849 },
          { x: 1996.91, y: 89.07795 },
          { x: 2548.47, y: 90.929087 },
          { x: 3093.29, y: 92.072382 },
          { x: 3699.77, y: 93.133454 },
          { x: 4375.89, y: 94.190081 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1163.83, y: 84.146775 },
          { x: 1574.66, y: 87.084326 },
          { x: 1997.34, y: 89.075055 },
          { x: 2548.52, y: 90.917657 },
          { x: 3093.63, y: 92.063756 },
          { x: 3700.24, y: 93.126399 },
          { x: 4376.41, y: 94.181041 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1225.73, y: 86.542293 },
          { x: 1677.60, y: 89.180064 },
          { x: 2309.57, y: 91.422305 },
          { x: 2998.92, y: 92.833737 },
          { x: 3669.60, y: 93.904747 },
          { x: 4512.85, y: 94.837137 },
          { x: 5498.50, y: 95.638248 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1242.84, y: 86.181539 },
          { x: 1696.09, y: 88.856416 },
          { x: 2336.49, y: 91.159334 },
          { x: 3044.87, y: 92.599159 },
          { x: 3743.51, y: 93.704434 },
          { x: 4616.40, y: 94.674061 },
          { x: 5633.94, y: 95.505654 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1611.77, y: 78.207322 },
          { x: 2089.59, y: 82.091907 },
          { x: 2743.61, y: 84.912274 },
          { x: 3490.68, y: 87.753174 },
          { x: 4246.14, y: 90.006092 },
          { x: 5052.41, y: 91.381681 },
          { x: 5967.28, y: 92.78978 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1631.10, y: 77.678554 },
          { x: 2102.63, y: 81.643696 },
          { x: 2749.39, y: 84.513293 },
          { x: 3488.83, y: 87.420651 },
          { x: 4236.30, y: 89.698133 },
          { x: 5022.77, y: 91.119171 },
          { x: 5945.35, y: 92.559141 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 960.61, y: 81.883681 },
          { x: 1337.83, y: 84.97573 },
          { x: 1736.60, y: 87.117537 },
          { x: 2190.67, y: 89.039223 },
          { x: 2684.85, y: 90.31124 },
          { x: 3226.59, y: 91.491171 },
          { x: 3951.14, y: 92.688082 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.22, y: 81.889357 },
          { x: 1435.55, y: 84.981315 },
          { x: 1835.89, y: 87.155685 },
          { x: 2294.28, y: 89.094158 },
          { x: 2783.31, y: 90.359277 },
          { x: 3321.56, y: 91.536372 },
          { x: 4046.81, y: 92.724831 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 1367.33, y: 76.66955 },
          { x: 1801.97, y: 80.736578 },
          { x: 2436.86, y: 83.775781 },
          { x: 3153.66, y: 86.826965 },
          { x: 3871.25, y: 89.183946 },
          { x: 4643.90, y: 90.627964 },
          { x: 5425.35, y: 92.109358 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.91, y: 76.116551 },
          { x: 1807.44, y: 80.238663 },
          { x: 2445.41, y: 83.327585 },
          { x: 3165.94, y: 86.424646 },
          { x: 3887.05, y: 88.838262 },
          { x: 4661.81, y: 90.316687 },
          { x: 5450.16, y: 91.844398 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1073.30, y: 81.98704 },
          { x: 1535.92, y: 85.389274 },
          { x: 1953.19, y: 87.679997 },
          { x: 2475.78, y: 89.750512 },
          { x: 3052.75, y: 91.126201 },
          { x: 3696.38, y: 92.411155 },
          { x: 4427.60, y: 93.730768 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.96, y: 81.988453 },
          { x: 1534.15, y: 85.375511 },
          { x: 1947.31, y: 87.688192 },
          { x: 2463.35, y: 89.73911 },
          { x: 3029.15, y: 91.106717 },
          { x: 3660.90, y: 92.395455 },
          { x: 4373.68, y: 93.700154 }
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

var ctx_t2_20241223_bitrate_fps_data = document.getElementById('chart_t2_20241223_bitrate_fps');
const chart_t2_20241223_bitrate_fps_data = new Chart(ctx_t2_20241223_bitrate_fps_data,
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
          { x: 5821.51, y: 265.18 },
          { x: 3315.29, y: 295.15 },
          { x: 1828.12, y: 316.87 },
          { x: 1043.38, y: 331.83 },
          { x: 627.07, y: 348.26 },
          { x: 410.19, y: 356.67 }
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
          { x: 7505.16, y: 49.42 },
          { x: 5105.61, y: 55.76 },
          { x: 2957.98, y: 63.09 },
          { x: 1618.16, y: 66.62 },
          { x: 935.69, y: 69.50 },
          { x: 567.81, y: 72.62 },
          { x: 374.81, y: 74.69 }
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
          { x: 6979.10, y: 96.35 },
          { x: 3826.22, y: 119.05 },
          { x: 2006.54, y: 143.71 },
          { x: 1024.96, y: 156.90 },
          { x: 527.79, y: 164.45 },
          { x: 291.16, y: 168.82 },
          { x: 173.92, y: 172.56 }
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
          { x: 6950.00, y: 77.92 },
          { x: 3778.93, y: 93.83 },
          { x: 1970.48, y: 109.15 },
          { x: 1006.93, y: 117.76 },
          { x: 520.94, y: 122.69 },
          { x: 288.53, y: 125.45 },
          { x: 171.45, y: 127.07 }
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
          { x: 7535.85, y: 3.81 },
          { x: 4531.96, y: 4.70 },
          { x: 2590.60, y: 5.89 },
          { x: 1367.54, y: 7.49 },
          { x: 695.95, y: 9.70 },
          { x: 363.04, y: 12.52 },
          { x: 192.33, y: 15.88 }
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
          { x: 7537.85, y: 3.05 },
          { x: 4474.24, y: 3.68 },
          { x: 2517.42, y: 4.56 },
          { x: 1324.36, y: 5.65 },
          { x: 685.37, y: 7.24 },
          { x: 363.43, y: 9.12 },
          { x: 194.22, y: 11.37 }
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
          { x: 5561.16, y: 49.099 },
          { x: 4316.69, y: 51.846 },
          { x: 3478.46, y: 51.670 },
          { x: 2575.50, y: 55.037 },
          { x: 1829.29, y: 58.588 },
          { x: 1321.75, y: 61.276 },
          { x: 964.19, y: 63.651 }
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
          { x: 5676.79, y: 36.795 },
          { x: 4277.29, y: 38.625 },
          { x: 3414.98, y: 38.713 },
          { x: 2501.98, y: 41.611 },
          { x: 1796.72, y: 44.658 },
          { x: 952.70, y: 49.732 }
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
          { x: 5627.73, y: 139.483 },
          { x: 4268.62, y: 145.282 },
          { x: 3347.11, y: 145.658 },
          { x: 2411.12, y: 150.920 },
          { x: 1680.73, y: 161.758 },
          { x: 1193.28, y: 165.608 },
          { x: 883.36, y: 160.979 }
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
          { x: 5944.54, y: 115.639 },
          { x: 4315.49, y: 119.584 },
          { x: 3325.38, y: 118.383 },
          { x: 2361.11, y: 122.271 },
          { x: 1652.47, y: 127.732 },
          { x: 1173.60, y: 130.828 },
          { x: 873.34, y: 128.831 }
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
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5502.00, y: 317.305 },
          { x: 4161.83, y: 331.355 },
          { x: 3295.90, y: 334.571 },
          { x: 2346.32, y: 352.454 },
          { x: 1652.65, y: 361.786 },
          { x: 1181.44, y: 380.387 },
          { x: 861.34, y: 384.404 }
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
        borderColor: 'rgba(0, 66, 1, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5642.14, y: 209.152 },
          { x: 4191.63, y: 213.841 },
          { x: 3271.33, y: 212.215 },
          { x: 2341.22, y: 215.288 },
          { x: 1633.17, y: 220.718 },
          { x: 1167.79, y: 224.741 },
          { x: 853.59, y: 227.882 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        data:[
          { x: 5670.69, y: 317.69 },
          { x: 4039.88, y: 314.60 },
          { x: 2320.04, y: 314.88 },
          { x: 1241.69, y: 315.01 },
          { x: 657.07, y: 315.49 },
          { x: 367.21, y: 316.04 },
          { x: 211.65, y: 316.41 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5659.12, y: 554.00 },
          { x: 4025.17, y: 555.83 },
          { x: 2297.70, y: 556.03 },
          { x: 1237.77, y: 555.42 },
          { x: 657.56, y: 555.62 },
          { x: 369.53, y: 555.49 },
          { x: 213.27, y: 556.85 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6456.15, y: 238.26 },
          { x: 4277.24, y: 236.71 },
          { x: 2355.17, y: 236.95 },
          { x: 1248.63, y: 236.83 },
          { x: 658.45, y: 236.36 },
          { x: 366.99, y: 238.73 },
          { x: 212.11, y: 236.36 }
        ]
      },
      {
        label: "Arc B580 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6466.81, y: 235.52 },
          { x: 4268.33, y: 237.26 },
          { x: 2339.94, y: 236.18 },
          { x: 1247.19, y: 235.51 },
          { x: 659.68, y: 236.89 },
          { x: 370.10, y: 235.40 },
          { x: 214.14, y: 235.12 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        data:[
          { x: 5158.40, y: 189.02 },
          { x: 3356.81, y: 189.87 },
          { x: 2541.18, y: 190.38 },
          { x: 1411.63, y: 191.24 },
          { x: 849.18, y: 191.71 },
          { x: 559.90, y: 192.17 }
        ]
      },
      {
        label: "Arc B580 QSV H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5525.51, y: 515.81 },
          { x: 3592.58, y: 515.46 },
          { x: 2677.00, y: 515.35 },
          { x: 1500.03, y: 515.00 },
          { x: 912.10, y: 514.88 },
          { x: 602.82, y: 514.82 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 4646.68, y: 303.41 },
          { x: 2819.34, y: 303.29 },
          { x: 1971.88, y: 303.33 },
          { x: 947.01, y: 303.43 },
          { x: 513.75, y: 303.56 },
          { x: 321.12, y: 304.14 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4721.84, y: 569.39 },
          { x: 2854.77, y: 571.75 },
          { x: 1998.81, y: 572.98 },
          { x: 967.38, y: 573.19 },
          { x: 531.15, y: 573.63 },
          { x: 336.64, y: 574.20 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4555.45, y: 241.75 },
          { x: 2769.64, y: 238.05 },
          { x: 1943.69, y: 238.88 },
          { x: 940.61, y: 241.29 },
          { x: 513.18, y: 238.56 },
          { x: 319.52, y: 240.66 }
        ]
      },
      {
        label: "Arc B580 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4624.89, y: 241.75 },
          { x: 2804.85, y: 238.71 },
          { x: 1972.62, y: 241.33 },
          { x: 962.21, y: 240.02 },
          { x: 533.21, y: 241.03 },
          { x: 336.13, y: 240.88 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        data:[
          { x: 7791.06, y: 345.40 },
          { x: 4515.05, y: 349.25 },
          { x: 3659.47, y: 347.94 },
          { x: 2108.55, y: 350.89 },
          { x: 1296.49, y: 350.73 },
          { x: 846.84, y: 351.11 },
          { x: 525.27, y: 352.30 }
        ]
      },
      {
        label: "Arc A380 QSV H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7884.15, y: 503.37 },
          { x: 4535.89, y: 505.50 },
          { x: 3561.14, y: 505.95 },
          { x: 2078.13, y: 506.40 },
          { x: 1277.23, y: 505.84 },
          { x: 818.35, y: 505.33 },
          { x: 529.33, y: 507.02 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 4683.04, y: 279.78 },
          { x: 2840.02, y: 280.33 },
          { x: 1979.55, y: 280.05 },
          { x: 961.41, y: 276.58 },
          { x: 530.94, y: 280.50 },
          { x: 339.78, y: 281.07 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4736.01, y: 529.44 },
          { x: 2857.84, y: 533.29 },
          { x: 1988.77, y: 533.60 },
          { x: 965.98, y: 532.04 },
          { x: 534.32, y: 533.10 },
          { x: 341.04, y: 533.47 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4580.65, y: 195.79 },
          { x: 2782.30, y: 196.04 },
          { x: 1948.98, y: 196.10 },
          { x: 952.63, y: 196.15 },
          { x: 529.20, y: 196.38 },
          { x: 336.28, y: 196.55 }
        ]
      },
      {
        label: "Arc A380 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4631.43, y: 264.75 },
          { x: 2798.82, y: 265.52 },
          { x: 1955.45, y: 265.60 },
          { x: 957.09, y: 265.66 },
          { x: 534.15, y: 265.49 },
          { x: 339.80, y: 265.65 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 5388.08, y: 285.41 },
          { x: 2846.85, y: 283.63 },
          { x: 1353.03, y: 284.23 },
          { x: 699.07, y: 291.95 },
          { x: 380.25, y: 294.06 },
          { x: 216.11, y: 296.63 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5401.90, y: 535.36 },
          { x: 2837.75, y: 527.05 },
          { x: 1355.78, y: 506.63 },
          { x: 705.36, y: 543.67 },
          { x: 386.14, y: 545.43 },
          { x: 223.41, y: 547.99 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6175.40, y: 197.35 },
          { x: 2938.89, y: 195.81 },
          { x: 1361.34, y: 195.70 },
          { x: 702.72, y: 199.43 },
          { x: 382.93, y: 200.72 },
          { x: 217.00, y: 202.06 }
        ]
      },
      {
        label: "Arc A380 QSV AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6216.27, y: 263.36 },
          { x: 2936.43, y: 264.41 },
          { x: 1374.89, y: 262.94 },
          { x: 706.48, y: 266.57 },
          { x: 388.47, y: 266.97 },
          { x: 224.35, y: 266.67 }
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
        borderColor: 'rgba(82, 0, 103, 0.9)',
        data:[
          { x: 7318.65, y: 216.46 },
          { x: 4523.47, y: 235.56 },
          { x: 2734.03, y: 245.61 },
          { x: 1517.84, y: 206.03 },
          { x: 1002.01, y: 258.92 },
          { x: 672.98, y: 263.92 },
          { x: 477.44, y: 267.96 }
        ]
      },
      {
        label: "i9 12900K QSV H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 275.19 },
          { x: 4541.31, y: 289.00 },
          { x: 2830.49, y: 298.34 },
          { x: 1603.31, y: 303.80 },
          { x: 1058.42, y: 306.52 },
          { x: 702.57, y: 309.92 },
          { x: 483.41, y: 310.14 }
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
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 4876.84, y: 325.51 },
          { x: 2944.40, y: 328.43 },
          { x: 2033.83, y: 328.83 },
          { x: 975.33, y: 330.84 },
          { x: 539.01, y: 330.84 },
          { x: 348.16, y: 331.66 }
        ]
      },
      {
        label: "i9 12900K QSV HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 4892.58, y: 409.65 },
          { x: 2962.24, y: 411.99 },
          { x: 2057.04, y: 412.89 },
          { x: 997.08, y: 395.86 },
          { x: 554.97, y: 413.15 },
          { x: 357.87, y: 413.26 }
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
        borderColor: 'rgba(170, 59, 175, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 4746.61, y: 263.01 },
          { x: 2865.86, y: 264.66 },
          { x: 1987.68, y: 262.75 },
          { x: 960.80, y: 265.31 },
          { x: 535.57, y: 264.53 },
          { x: 343.97, y: 263.63 }
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
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 4754.05, y: 276.08 },
          { x: 2880.91, y: 276.81 },
          { x: 2007.91, y: 277.17 },
          { x: 982.13, y: 276.63 },
          { x: 551.74, y: 280.17 },
          { x: 354.51, y: 280.38 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        data:[
          { x: 7323.02, y: 115.10 },
          { x: 4521.52, y: 121.78 },
          { x: 2730.32, y: 125.16 },
          { x: 1514.94, y: 127.79 },
          { x: 1000.73, y: 129.39 },
          { x: 672.33, y: 131.01 },
          { x: 477.50, y: 131.93 }
        ]
      },
      {
        label: "i5 1035G7 QSV H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7293.93, y: 146.55 },
          { x: 4541.31, y: 158.07 },
          { x: 2830.49, y: 159.73 },
          { x: 1603.31, y: 150.90 },
          { x: 1058.42, y: 152.40 },
          { x: 702.57, y: 152.64 },
          { x: 483.41, y: 159.43 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 4799.90, y: 39.10 },
          { x: 2815.70, y: 43.50 },
          { x: 1458.50, y: 49.49 },
          { x: 768.20, y: 55.32 },
          { x: 461.96, y: 58.50 },
          { x: 279.90, y: 61.21 },
          { x: 189.67, y: 62.53 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6500.81, y: 114.65 },
          { x: 3760.95, y: 121.00 },
          { x: 1957.15, y: 123.21 },
          { x: 1014.25, y: 130.51 },
          { x: 569.87, y: 138.61 },
          { x: 329.82, y: 138.76 },
          { x: 214.61, y: 142.06 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6006.82, y: 33.07 },
          { x: 3464.07, y: 34.27 },
          { x: 1825.21, y: 38.87 },
          { x: 963.57, y: 44.46 },
          { x: 550.50, y: 46.84 },
          { x: 323.56, y: 50.52 },
          { x: 213.42, y: 52.08 }
        ]
      },
      {
        label: "i5 1035G7 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6348.29, y: 75.39 },
          { x: 3673.17, y: 79.10 },
          { x: 1928.53, y: 79.87 },
          { x: 1007.57, y: 81.72 },
          { x: 568.87, y: 77.60 },
          { x: 327.81, y: 86.39 },
          { x: 212.27, y: 91.22 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        data:[
          { x: 7361.30, y: 171.12 },
          { x: 4546.75, y: 179.79 },
          { x: 2748.98, y: 184.97 },
          { x: 1526.09, y: 188.69 },
          { x: 1008.28, y: 190.67 },
          { x: 673.68, y: 193.58 },
          { x: 477.80, y: 194.99 }
        ]
      },
      {
        label: "i5 7500 QSV H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7294.26, y: 201.38 },
          { x: 4541.43, y: 206.47 },
          { x: 2830.15, y: 203.62 },
          { x: 1603.50, y: 210.49 },
          { x: 1058.39, y: 210.72 },
          { x: 702.71, y: 213.25 },
          { x: 484.09, y: 212.35 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 6914.52, y: 36.39 },
          { x: 4299.73, y: 36.90 },
          { x: 2540.93, y: 37.72 },
          { x: 1493.20, y: 38.26 },
          { x: 895.06, y: 38.47 },
          { x: 532.13, y: 38.63 },
          { x: 405.78, y: 38.73 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6927.25, y: 77.24 },
          { x: 4301.07, y: 78.34 },
          { x: 2543.49, y: 79.50 },
          { x: 1495.84, y: 80.35 },
          { x: 897.31, y: 80.91 },
          { x: 549.56, y: 80.68 },
          { x: 424.60, y: 81.06 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6675.86, y: 33.12 },
          { x: 4170.07, y: 33.36 },
          { x: 2480.42, y: 34.34 },
          { x: 1461.78, y: 34.73 },
          { x: 887.66, y: 35.30 },
          { x: 518.18, y: 35.13 },
          { x: 403.54, y: 35.35 }
        ]
      },
      {
        label: "i5 7500 QSV HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6700.31, y: 64.96 },
          { x: 4191.70, y: 66.09 },
          { x: 2495.80, y: 67.22 },
          { x: 1476.64, y: 66.98 },
          { x: 907.32, y: 67.81 },
          { x: 542.13, y: 68.01 },
          { x: 426.76, y: 69.37 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 6892.06, y: 91.72 },
          { x: 4190.02, y: 102.06 },
          { x: 2418.85, y: 109.62 },
          { x: 1326.84, y: 118.30 },
          { x: 884.58, y: 123.81 },
          { x: 599.32, y: 127.26 },
          { x: 441.89, y: 129.75 }
        ]
      },
      {
        label: "i5 5500u QSV H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6678.13, y: 182.02 },
          { x: 4125.33, y: 188.08 },
          { x: 2432.61, y: 189.99 },
          { x: 1359.70, y: 191.14 },
          { x: 902.02, y: 191.09 },
          { x: 613.77, y: 195.30 },
          { x: 449.18, y: 195.05 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 253, 219, 0.9)',
        data:[
          { x: 7122.54, y: 97.96 },
          { x: 4268.27, y: 48.16 },
          { x: 2447.03, y: 102.89 },
          { x: 1341.44, y: 119.81 },
          { x: 889.87, y: 152.99 },
          { x: 601.65, y: 74.22 },
          { x: 445.34, y: 158.04 }
        ]
      },
      {
        label: "i3 4170 QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(179, 66, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6879.21, y: 174.45 },
          { x: 4218.01, y: 178.91 },
          { x: 2478.72, y: 188.29 },
          { x: 1388.78, y: 190.53 },
          { x: 918.01, y: 189.84 },
          { x: 621.06, y: 196.01 },
          { x: 457.02, y: 185.74 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(14, 89, 196, 0.9)',
        data:[
          { x: 7486.18, y: 108.60 },
          { x: 4245.04, y: 111.76 },
          { x: 2309.09, y: 112.71 },
          { x: 1374.17, y: 111.57 },
          { x: 860.29, y: 110.71 },
          { x: 575.87, y: 109.96 }
        ]
      },
      {
        label: "i5 2410m QSV H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(249, 89, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7481.36, y: 162.83 },
          { x: 4241.81, y: 164.55 },
          { x: 2307.75, y: 167.99 },
          { x: 1374.84, y: 167.00 },
          { x: 861.33, y: 169.23 },
          { x: 577.34, y: 168.46 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        data:[
          { x: 6448.56, y: 234.96 },
          { x: 3849.75, y: 238.85 },
          { x: 2249.63, y: 238.27 },
          { x: 1232.99, y: 218.76 },
          { x: 745.62, y: 220.34 }
        ]
      },
      {
        label: "rtx4080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6448.56, y: 234.89 },
          { x: 3849.75, y: 238.82 },
          { x: 2249.63, y: 238.78 },
          { x: 1232.99, y: 218.99 },
          { x: 745.62, y: 220.32 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        data:[
          { x: 5987.91, y: 139.60 },
          { x: 3460.30, y: 140.32 },
          { x: 1921.28, y: 140.34 },
          { x: 1062.54, y: 140.22 },
          { x: 626.09, y: 140.25 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5987.91, y: 140.11 },
          { x: 3460.30, y: 140.16 },
          { x: 1921.28, y: 140.16 },
          { x: 1062.54, y: 139.81 },
          { x: 626.09, y: 140.16 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5981.97, y: 143.64 },
          { x: 3467.20, y: 143.92 },
          { x: 1910.84, y: 143.89 },
          { x: 1042.65, y: 144.22 },
          { x: 613.33, y: 144.19 }
        ]
      },
      {
        label: "rtx4080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5981.97, y: 143.70 },
          { x: 3467.20, y: 143.73 },
          { x: 1910.84, y: 143.86 },
          { x: 1042.65, y: 143.96 },
          { x: 613.33, y: 143.94 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        data:[
          { x: 6091.29, y: 189.32 },
          { x: 4023.20, y: 188.06 },
          { x: 2604.66, y: 187.74 },
          { x: 1659.02, y: 186.79 },
          { x: 962.92, y: 184.29 },
          { x: 529.06, y: 182.48 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 112, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6091.29, y: 188.96 },
          { x: 4023.20, y: 188.44 },
          { x: 2604.66, y: 187.63 },
          { x: 1659.02, y: 186.46 },
          { x: 962.92, y: 184.58 },
          { x: 529.06, y: 181.97 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5894.41, y: 189.09 },
          { x: 3855.05, y: 187.53 },
          { x: 2516.38, y: 185.59 },
          { x: 1616.27, y: 183.34 },
          { x: 943.11, y: 179.99 },
          { x: 523.84, y: 175.96 }
        ]
      },
      {
        label: "rtx4080 NVENC AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(110, 137, 86, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5894.41, y: 188.97 },
          { x: 3855.05, y: 187.40 },
          { x: 2516.38, y: 185.62 },
          { x: 1616.27, y: 183.02 },
          { x: 943.11, y: 180.16 },
          { x: 523.84, y: 176.09 }
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
        borderColor: 'rgba(138, 149, 0, 0.9)',
        data:[
          { x: 6432.97, y: 189.24 },
          { x: 3844.49, y: 192.36 },
          { x: 2245.87, y: 191.22 },
          { x: 1234.73, y: 175.26 },
          { x: 750.81, y: 176.95 }
        ]
      },
      {
        label: "rtx2070 NVENC H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6432.97, y: 187.64 },
          { x: 3844.49, y: 190.94 },
          { x: 2245.87, y: 190.58 },
          { x: 1234.73, y: 175.18 },
          { x: 750.81, y: 177.06 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        data:[
          { x: 5974.53, y: 113.13 },
          { x: 3451.03, y: 112.83 },
          { x: 1914.72, y: 112.91 },
          { x: 1060.37, y: 112.82 },
          { x: 625.38, y: 112.71 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 5974.53, y: 112.95 },
          { x: 3451.03, y: 112.97 },
          { x: 1914.72, y: 112.89 },
          { x: 1060.37, y: 112.98 },
          { x: 625.38, y: 112.78 }
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
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 5971.21, y: 114.61 },
          { x: 3455.27, y: 114.77 },
          { x: 1903.92, y: 114.86 },
          { x: 1041.01, y: 114.88 },
          { x: 610.89, y: 114.99 }
        ]
      },
      {
        label: "rtx2070 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 5971.21, y: 114.39 },
          { x: 3455.27, y: 114.82 },
          { x: 1903.92, y: 114.98 },
          { x: 1041.01, y: 114.88 },
          { x: 610.89, y: 114.91 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        data:[
          { x: 6829.49, y: 205.75 },
          { x: 4148.40, y: 210.02 },
          { x: 2435.20, y: 214.77 },
          { x: 1423.78, y: 217.57 },
          { x: 876.06, y: 220.50 }
        ]
      },
      {
        label: "gtx1080 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6829.49, y: 205.56 },
          { x: 4148.40, y: 210.03 },
          { x: 2435.20, y: 214.51 },
          { x: 1423.78, y: 217.90 },
          { x: 876.06, y: 220.58 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        data:[
          { x: 7288.02, y: 138.05 },
          { x: 4345.53, y: 157.44 },
          { x: 2520.85, y: 177.31 },
          { x: 1437.22, y: 194.12 },
          { x: 821.01, y: 208.73 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(128, 182, 84, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7288.02, y: 137.99 },
          { x: 4345.53, y: 157.03 },
          { x: 2520.85, y: 176.86 },
          { x: 1437.22, y: 194.38 },
          { x: 821.01, y: 208.62 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 87, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 6905.35, y: 124.53 },
          { x: 4050.51, y: 121.45 },
          { x: 2258.49, y: 120.84 },
          { x: 1284.08, y: 146.02 },
          { x: 739.33, y: 156.08 }
        ]
      },
      {
        label: "gtx1080 NVENC HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 107, 59, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 6905.35, y: 112.65 },
          { x: 4050.51, y: 115.39 },
          { x: 2258.49, y: 136.21 },
          { x: 1284.08, y: 145.67 },
          { x: 739.33, y: 164.15 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(223, 255, 79, 0.9)',
        data:[
          { x: 6834.36, y: 127.69 },
          { x: 4145.13, y: 130.40 },
          { x: 2434.88, y: 132.48 },
          { x: 1423.67, y: 134.09 },
          { x: 876.51, y: 135.25 }
        ]
      },
      {
        label: "gtx950 NVENC H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(89, 128, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 6834.36, y: 127.82 },
          { x: 4145.13, y: 130.39 },
          { x: 2434.88, y: 132.56 },
          { x: 1423.67, y: 134.04 },
          { x: 876.51, y: 135.19 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(103, 212, 140, 0.9)',
        data:[
          { x: 7384.63, y: 74.46 },
          { x: 4428.50, y: 81.12 },
          { x: 2554.06, y: 87.12 },
          { x: 1461.05, y: 91.48 },
          { x: 835.10, y: 94.89 }
        ]
      },
      {
        label: "gtx950 NVENC HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 161, 102, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 7384.63, y: 74.50 },
          { x: 4428.50, y: 81.12 },
          { x: 2554.06, y: 87.12 },
          { x: 1461.05, y: 91.51 },
          { x: 835.10, y: 94.95 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 1367.08, y: 212.75 },
          { x: 1801.91, y: 212.89 },
          { x: 2436.83, y: 213.17 },
          { x: 3153.93, y: 213.08 },
          { x: 3871.25, y: 213.14 },
          { x: 4643.92, y: 213.05 },
          { x: 5425.02, y: 213.17 }
        ]
      },
      {
        label: "rx7900xt VCE H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.30, y: 378.79 },
          { x: 1807.40, y: 379.04 },
          { x: 2445.51, y: 378.10 },
          { x: 3166.00, y: 377.97 },
          { x: 3887.41, y: 378.22 },
          { x: 4662.25, y: 377.88 },
          { x: 5450.26, y: 377.94 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 1163.62, y: 541.80 },
          { x: 1574.32, y: 544.39 },
          { x: 1996.91, y: 542.18 },
          { x: 2548.47, y: 542.18 },
          { x: 3093.29, y: 542.12 },
          { x: 3699.77, y: 541.92 },
          { x: 4375.89, y: 540.70 }
        ]
      },
      {
        label: "rx7900xt VCE HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1163.83, y: 657.80 },
          { x: 1574.66, y: 659.23 },
          { x: 1997.34, y: 651.77 },
          { x: 2548.52, y: 654.11 },
          { x: 3093.63, y: 657.70 },
          { x: 3700.24, y: 653.27 },
          { x: 4376.41, y: 654.02 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 1225.73, y: 115.60 },
          { x: 1677.60, y: 115.73 },
          { x: 2309.57, y: 115.85 },
          { x: 2998.92, y: 115.88 },
          { x: 3669.60, y: 115.89 },
          { x: 4512.85, y: 115.96 },
          { x: 5498.50, y: 115.94 }
        ]
      },
      {
        label: "rx7900xt VCE AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1242.84, y: 786.52 },
          { x: 1696.09, y: 779.51 },
          { x: 2336.49, y: 783.13 },
          { x: 3044.87, y: 781.92 },
          { x: 3743.51, y: 785.97 },
          { x: 4616.40, y: 787.74 },
          { x: 5633.94, y: 785.16 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 1611.77, y: 115.49 },
          { x: 2089.59, y: 115.25 },
          { x: 2743.61, y: 115.09 },
          { x: 3490.68, y: 115.15 },
          { x: 4246.14, y: 115.50 },
          { x: 5052.41, y: 115.46 },
          { x: 5967.28, y: 115.21 }
        ]
      },
      {
        label: "rx5500xt VCE H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1631.10, y: 209.75 },
          { x: 2102.63, y: 208.44 },
          { x: 2749.39, y: 211.32 },
          { x: 3488.83, y: 208.94 },
          { x: 4236.30, y: 208.26 },
          { x: 5022.77, y: 208.75 },
          { x: 5945.35, y: 210.05 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 960.61, y: 194.26 },
          { x: 1337.83, y: 195.99 },
          { x: 1736.60, y: 194.53 },
          { x: 2190.67, y: 194.07 },
          { x: 2684.85, y: 194.54 },
          { x: 3226.59, y: 194.53 },
          { x: 3951.14, y: 194.05 }
        ]
      },
      {
        label: "rx5500xt VCE HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1055.22, y: 217.29 },
          { x: 1435.55, y: 217.38 },
          { x: 1835.89, y: 217.97 },
          { x: 2294.28, y: 216.67 },
          { x: 2783.31, y: 216.40 },
          { x: 3321.56, y: 216.44 },
          { x: 4046.81, y: 215.64 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 1367.33, y: 63.59 },
          { x: 1801.97, y: 63.44 },
          { x: 2436.86, y: 63.36 },
          { x: 3153.66, y: 63.30 },
          { x: 3871.25, y: 63.50 },
          { x: 4643.90, y: 63.24 },
          { x: 5425.35, y: 63.44 }
        ]
      },
      {
        label: "r9 9950X VCE H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1370.91, y: 132.42 },
          { x: 1807.44, y: 132.78 },
          { x: 2445.41, y: 132.71 },
          { x: 3165.94, y: 132.39 },
          { x: 3887.05, y: 132.41 },
          { x: 4661.81, y: 132.52 },
          { x: 5450.16, y: 131.35 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 158, 181, 0.9)',
        data:[
          { x: 1073.30, y: 68.53 },
          { x: 1535.92, y: 68.49 },
          { x: 1953.19, y: 68.69 },
          { x: 2475.78, y: 68.58 },
          { x: 3052.75, y: 68.48 },
          { x: 3696.38, y: 68.45 },
          { x: 4427.60, y: 68.34 }
        ]
      },
      {
        label: "r9 9950X VCE HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 79, 107, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.96, y: 68.72 },
          { x: 1534.15, y: 68.35 },
          { x: 1947.31, y: 68.75 },
          { x: 2463.35, y: 68.12 },
          { x: 3029.15, y: 68.51 },
          { x: 3660.90, y: 68.44 },
          { x: 4373.68, y: 68.44 }
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

var ctx_t2_20241223_vbr_bitrate_ssim_data = document.getElementById('chart_t2_20241223_vbr_bitrate_ssim');
const chart_t2_20241223_vbr_bitrate_ssim_data = new Chart(ctx_t2_20241223_vbr_bitrate_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 299.37, y: 0.961834 },
          { x: 703.45, y: 0.987263 },
          { x: 1078.87, y: 0.992681 },
          { x: 1313.38, y: 0.994174 },
          { x: 1667.47, y: 0.995463 },
          { x: 3003.60, y: 0.997341 },
          { x: 4256.26, y: 0.998073 },
          { x: 5004.19, y: 0.998339 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 304.57, y: 0.956617 },
          { x: 712.85, y: 0.98467 },
          { x: 1093.35, y: 0.991773 },
          { x: 1330.77, y: 0.993561 },
          { x: 1678.95, y: 0.995038 },
          { x: 3079.57, y: 0.997231 },
          { x: 4370.98, y: 0.997998 },
          { x: 5248.99, y: 0.998315 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 389.91, y: 0.985217 },
          { x: 717.51, y: 0.992331 },
          { x: 1035.86, y: 0.994471 },
          { x: 1361.64, y: 0.995626 },
          { x: 1699.43, y: 0.996315 },
          { x: 3182.13, y: 0.997759 },
          { x: 4170.92, y: 0.998204 },
          { x: 4937.93, y: 0.998431 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.60, y: 0.984973 },
          { x: 720.68, y: 0.992052 },
          { x: 1043.94, y: 0.994352 },
          { x: 1378.31, y: 0.995533 },
          { x: 1722.19, y: 0.996248 },
          { x: 3201.70, y: 0.997704 },
          { x: 4211.19, y: 0.998169 },
          { x: 5003.70, y: 0.998396 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 387.09, y: 0.985577 },
          { x: 718.10, y: 0.992558 },
          { x: 1033.50, y: 0.994787 },
          { x: 1348.68, y: 0.995905 },
          { x: 1697.45, y: 0.996598 },
          { x: 3152.56, y: 0.997993 },
          { x: 4099.02, y: 0.998398 },
          { x: 4846.01, y: 0.998629 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.13, y: 0.984955 },
          { x: 718.11, y: 0.992258 },
          { x: 1041.66, y: 0.994608 },
          { x: 1371.93, y: 0.995795 },
          { x: 1695.64, y: 0.99649 },
          { x: 3168.72, y: 0.997934 },
          { x: 4137.91, y: 0.998364 },
          { x: 4906.91, y: 0.998602 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 421.31, y: 0.9878 },
          { x: 809.13, y: 0.993236 },
          { x: 1206.16, y: 0.995206 },
          { x: 1601.77, y: 0.996125 },
          { x: 2007.47, y: 0.996731 },
          { x: 3975.60, y: 0.998023 },
          { x: 5484.85, y: 0.998537 },
          { x: 6646.03, y: 0.998816 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.42, y: 0.987397 },
          { x: 808.13, y: 0.993115 },
          { x: 1203.14, y: 0.995109 },
          { x: 1600.70, y: 0.996064 },
          { x: 2004.25, y: 0.99667 },
          { x: 3944.60, y: 0.997982 },
          { x: 5460.26, y: 0.998508 },
          { x: 6607.58, y: 0.998786 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 420.35, y: 0.98823 },
          { x: 809.75, y: 0.993622 },
          { x: 1209.43, y: 0.99551 },
          { x: 1606.82, y: 0.99642 },
          { x: 2013.35, y: 0.996993 },
          { x: 3995.01, y: 0.998224 },
          { x: 5878.99, y: 0.998712 },
          { x: 7571.76, y: 0.998992 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 421.66, y: 0.987881 },
          { x: 809.52, y: 0.993495 },
          { x: 1206.21, y: 0.995396 },
          { x: 1604.92, y: 0.996355 },
          { x: 2011.72, y: 0.996938 },
          { x: 3987.09, y: 0.998197 },
          { x: 5862.93, y: 0.998682 },
          { x: 7537.35, y: 0.998968 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 358.35, y: 0.963803 },
          { x: 791.28, y: 0.985021 },
          { x: 1233.59, y: 0.991439 },
          { x: 1532.59, y: 0.993251 },
          { x: 1970.31, y: 0.994927 },
          { x: 3727.95, y: 0.997445 },
          { x: 5591.83, y: 0.998341 },
          { x: 6711.49, y: 0.998665 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 359.65, y: 0.963411 },
          { x: 793.76, y: 0.984614 },
          { x: 1229.10, y: 0.991 },
          { x: 1519.94, y: 0.992949 },
          { x: 1959.66, y: 0.994691 },
          { x: 3736.72, y: 0.997331 },
          { x: 5592.97, y: 0.998246 },
          { x: 6753.66, y: 0.998586 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 393.89, y: 0.983863 },
          { x: 780.56, y: 0.991754 },
          { x: 1134.53, y: 0.99424 },
          { x: 1508.09, y: 0.995559 },
          { x: 1839.24, y: 0.996257 },
          { x: 3224.38, y: 0.997756 },
          { x: 4345.96, y: 0.998233 },
          { x: 5063.89, y: 0.998406 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.14, y: 0.983447 },
          { x: 783.03, y: 0.991561 },
          { x: 1145.67, y: 0.99412 },
          { x: 1507.03, y: 0.995472 },
          { x: 1835.42, y: 0.996187 },
          { x: 3223.18, y: 0.997698 },
          { x: 4365.71, y: 0.998188 },
          { x: 5117.28, y: 0.998374 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 393.03, y: 0.984086 },
          { x: 776.47, y: 0.992076 },
          { x: 1133.19, y: 0.994537 },
          { x: 1492.36, y: 0.995825 },
          { x: 1816.84, y: 0.996533 },
          { x: 3174.86, y: 0.997994 },
          { x: 4266.91, y: 0.99846 },
          { x: 4950.87, y: 0.998624 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.52, y: 0.983652 },
          { x: 778.99, y: 0.991885 },
          { x: 1141.59, y: 0.994433 },
          { x: 1492.12, y: 0.995749 },
          { x: 1822.00, y: 0.996478 },
          { x: 3181.57, y: 0.99795 },
          { x: 4300.43, y: 0.998428 },
          { x: 5010.03, y: 0.998602 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 412.69, y: 0.98762 },
          { x: 802.79, y: 0.993102 },
          { x: 1173.30, y: 0.994991 },
          { x: 1563.16, y: 0.995969 },
          { x: 1982.86, y: 0.996634 },
          { x: 3868.66, y: 0.99798 },
          { x: 5535.09, y: 0.998528 },
          { x: 6771.88, y: 0.998818 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 413.88, y: 0.987236 },
          { x: 800.16, y: 0.992843 },
          { x: 1169.71, y: 0.994866 },
          { x: 1559.81, y: 0.995879 },
          { x: 1972.74, y: 0.99654 },
          { x: 3884.77, y: 0.997967 },
          { x: 5519.64, y: 0.998493 },
          { x: 6766.29, y: 0.998783 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 414.47, y: 0.988014 },
          { x: 807.88, y: 0.993464 },
          { x: 1188.01, y: 0.9953 },
          { x: 1586.50, y: 0.996267 },
          { x: 1991.98, y: 0.996883 },
          { x: 3920.48, y: 0.998201 },
          { x: 5700.81, y: 0.998697 },
          { x: 7326.44, y: 0.998964 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 415.28, y: 0.987457 },
          { x: 804.46, y: 0.993215 },
          { x: 1179.61, y: 0.995164 },
          { x: 1581.73, y: 0.996174 },
          { x: 1986.76, y: 0.996816 },
          { x: 3915.94, y: 0.998172 },
          { x: 5701.61, y: 0.998665 },
          { x: 7334.64, y: 0.998933 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1074.79, y: 0.990725 },
          { x: 1074.79, y: 0.990725 },
          { x: 1201.99, y: 0.991834 },
          { x: 1601.82, y: 0.99399 },
          { x: 2001.59, y: 0.995176 },
          { x: 4003.24, y: 0.997413 },
          { x: 6005.25, y: 0.998258 },
          { x: 8006.48, y: 0.998707 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 0.990506 },
          { x: 1075.19, y: 0.990506 },
          { x: 1202.07, y: 0.991698 },
          { x: 1601.91, y: 0.993903 },
          { x: 2001.77, y: 0.995132 },
          { x: 4003.00, y: 0.997391 },
          { x: 6002.64, y: 0.998231 },
          { x: 8006.43, y: 0.998674 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.34, y: 0.98311 },
          { x: 776.36, y: 0.991481 },
          { x: 1142.81, y: 0.993897 },
          { x: 1511.45, y: 0.99521 },
          { x: 1841.88, y: 0.996004 },
          { x: 3222.79, y: 0.997553 },
          { x: 4400.21, y: 0.998094 },
          { x: 5087.48, y: 0.99828 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.53, y: 0.982788 },
          { x: 777.98, y: 0.991143 },
          { x: 1147.09, y: 0.993855 },
          { x: 1514.13, y: 0.995147 },
          { x: 1858.75, y: 0.995965 },
          { x: 3234.07, y: 0.997542 },
          { x: 4424.59, y: 0.9981 },
          { x: 5109.40, y: 0.998287 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 391.44, y: 0.98368 },
          { x: 772.06, y: 0.99172 },
          { x: 1128.88, y: 0.994296 },
          { x: 1493.72, y: 0.995574 },
          { x: 1821.60, y: 0.996345 },
          { x: 3173.78, y: 0.997857 },
          { x: 4318.28, y: 0.998372 },
          { x: 4960.39, y: 0.998547 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.14, y: 0.983047 },
          { x: 774.24, y: 0.991574 },
          { x: 1135.24, y: 0.994193 },
          { x: 1504.80, y: 0.995494 },
          { x: 1831.87, y: 0.996289 },
          { x: 3192.01, y: 0.997852 },
          { x: 4337.38, y: 0.998377 },
          { x: 4987.86, y: 0.998555 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1074.85, y: 0.990699 },
          { x: 1074.85, y: 0.990699 },
          { x: 1202.01, y: 0.991858 },
          { x: 2001.74, y: 0.995175 },
          { x: 4003.35, y: 0.997417 },
          { x: 7007.61, y: 0.998516 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 0.990506 },
          { x: 1075.19, y: 0.990506 },
          { x: 1202.07, y: 0.991698 },
          { x: 2001.77, y: 0.995132 },
          { x: 4003.00, y: 0.997391 },
          { x: 7006.69, y: 0.998487 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 392.67, y: 0.978723 },
          { x: 783.36, y: 0.989204 },
          { x: 1169.48, y: 0.99259 },
          { x: 1908.49, y: 0.995292 },
          { x: 3341.74, y: 0.99726 },
          { x: 5134.38, y: 0.99813 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.51, y: 0.977995 },
          { x: 782.31, y: 0.98869 },
          { x: 1164.39, y: 0.992282 },
          { x: 1809.83, y: 0.995119 },
          { x: 3236.31, y: 0.997126 },
          { x: 4666.34, y: 0.997883 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.80, y: 0.979649 },
          { x: 782.71, y: 0.989664 },
          { x: 1166.54, y: 0.993091 },
          { x: 1889.05, y: 0.995748 },
          { x: 3295.27, y: 0.997647 },
          { x: 5060.68, y: 0.998463 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.76, y: 0.978543 },
          { x: 781.65, y: 0.989078 },
          { x: 1158.07, y: 0.992774 },
          { x: 1787.18, y: 0.995609 },
          { x: 3195.53, y: 0.997519 },
          { x: 4570.60, y: 0.998253 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1074.79, y: 0.990736 },
          { x: 1074.79, y: 0.990736 },
          { x: 1202.02, y: 0.991846 },
          { x: 1601.61, y: 0.993987 },
          { x: 2001.64, y: 0.995171 },
          { x: 4003.49, y: 0.997413 },
          { x: 6004.81, y: 0.998258 },
          { x: 8005.88, y: 0.998707 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.08, y: 0.990542 },
          { x: 1075.08, y: 0.990542 },
          { x: 1202.04, y: 0.9917 },
          { x: 1601.84, y: 0.993904 },
          { x: 2001.81, y: 0.995132 },
          { x: 4003.27, y: 0.997391 },
          { x: 6003.83, y: 0.998232 },
          { x: 8006.84, y: 0.998674 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 369.79, y: 0.97477 },
          { x: 739.97, y: 0.986356 },
          { x: 1106.65, y: 0.990924 },
          { x: 1471.53, y: 0.993565 },
          { x: 1846.08, y: 0.994943 },
          { x: 3513.02, y: 0.997294 },
          { x: 5344.52, y: 0.998146 },
          { x: 7069.30, y: 0.998568 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.07, y: 0.971988 },
          { x: 740.01, y: 0.985562 },
          { x: 1107.53, y: 0.990681 },
          { x: 1469.57, y: 0.993463 },
          { x: 1837.48, y: 0.99486 },
          { x: 3508.58, y: 0.997277 },
          { x: 5343.35, y: 0.998142 },
          { x: 7052.20, y: 0.998566 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 0.975473 },
          { x: 732.54, y: 0.986971 },
          { x: 1105.05, y: 0.991424 },
          { x: 1467.26, y: 0.994004 },
          { x: 1812.30, y: 0.995319 },
          { x: 3511.21, y: 0.997569 },
          { x: 5343.83, y: 0.998345 },
          { x: 7023.42, y: 0.99872 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 0.972339 },
          { x: 739.56, y: 0.986252 },
          { x: 1108.77, y: 0.991195 },
          { x: 1472.71, y: 0.993871 },
          { x: 1820.10, y: 0.995225 },
          { x: 3517.20, y: 0.997554 },
          { x: 5342.60, y: 0.998337 },
          { x: 6979.86, y: 0.998709 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1073.64, y: 0.990741 },
          { x: 1073.64, y: 0.990741 },
          { x: 1200.78, y: 0.991876 },
          { x: 1999.82, y: 0.995216 },
          { x: 4001.05, y: 0.997487 },
          { x: 7002.88, y: 0.998529 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.97, y: 0.990199 },
          { x: 1072.97, y: 0.990199 },
          { x: 1199.94, y: 0.991505 },
          { x: 1999.90, y: 0.995011 },
          { x: 4000.84, y: 0.997364 },
          { x: 7001.13, y: 0.998386 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1073.07, y: 0.990164 },
          { x: 1073.07, y: 0.990164 },
          { x: 1199.86, y: 0.991494 },
          { x: 1600.82, y: 0.993833 },
          { x: 1999.87, y: 0.995036 },
          { x: 4000.29, y: 0.997343 },
          { x: 5999.91, y: 0.998151 },
          { x: 8003.75, y: 0.998597 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.93, y: 0.990208 },
          { x: 1072.93, y: 0.990208 },
          { x: 1199.95, y: 0.991482 },
          { x: 1600.08, y: 0.993803 },
          { x: 2000.03, y: 0.99502 },
          { x: 4001.04, y: 0.997357 },
          { x: 6002.80, y: 0.998132 },
          { x: 8003.05, y: 0.998578 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 880.71, y: 0.97694 },
          { x: 880.71, y: 0.97694 },
          { x: 1013.54, y: 0.980723 },
          { x: 1772.45, y: 0.992099 },
          { x: 3577.15, y: 0.996515 },
          { x: 5998.63, y: 0.997956 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 880.75, y: 0.976813 },
          { x: 880.75, y: 0.976813 },
          { x: 1014.79, y: 0.980691 },
          { x: 1763.79, y: 0.99199 },
          { x: 3549.50, y: 0.99649 },
          { x: 5973.75, y: 0.997949 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 654.90, y: 0.945124 },
          { x: 956.02, y: 0.984054 },
          { x: 1119.60, y: 0.989156 },
          { x: 1612.85, y: 0.993939 },
          { x: 2116.43, y: 0.99569 },
          { x: 4119.49, y: 0.997939 },
          { x: 6097.63, y: 0.998697 },
          { x: 8064.90, y: 0.999076 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 486.92, y: 0.962954 },
          { x: 868.11, y: 0.988162 },
          { x: 1112.27, y: 0.991505 },
          { x: 1614.77, y: 0.994536 },
          { x: 2120.54, y: 0.995977 },
          { x: 4130.98, y: 0.997994 },
          { x: 6106.60, y: 0.998713 },
          { x: 8044.22, y: 0.999057 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 723.20, y: 0.981612 },
          { x: 939.61, y: 0.992196 },
          { x: 1323.37, y: 0.994918 },
          { x: 1737.15, y: 0.996142 },
          { x: 2160.72, y: 0.996815 },
          { x: 4219.87, y: 0.998178 },
          { x: 6257.86, y: 0.998719 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 532.92, y: 0.982297 },
          { x: 930.11, y: 0.992837 },
          { x: 1320.86, y: 0.994609 },
          { x: 1730.89, y: 0.995832 },
          { x: 2154.46, y: 0.996537 },
          { x: 4189.68, y: 0.998035 },
          { x: 6209.32, y: 0.998605 },
          { x: 8161.33, y: 0.99892 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 727.13, y: 0.981933 },
          { x: 946.41, y: 0.992487 },
          { x: 1317.39, y: 0.995194 },
          { x: 1735.93, y: 0.996415 },
          { x: 2162.77, y: 0.997067 },
          { x: 4224.83, y: 0.998378 },
          { x: 6265.23, y: 0.998882 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 533.95, y: 0.982645 },
          { x: 927.03, y: 0.993194 },
          { x: 1317.83, y: 0.994931 },
          { x: 1729.43, y: 0.996098 },
          { x: 2154.87, y: 0.996793 },
          { x: 4206.96, y: 0.998209 },
          { x: 6225.44, y: 0.998754 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 379.91, y: 0.984603 },
          { x: 902.76, y: 0.993334 },
          { x: 1280.83, y: 0.994989 },
          { x: 1706.73, y: 0.99602 },
          { x: 2137.90, y: 0.996659 },
          { x: 4177.61, y: 0.998046 },
          { x: 6187.60, y: 0.998611 },
          { x: 8170.41, y: 0.998916 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.45, y: 0.986312 },
          { x: 924.89, y: 0.993939 },
          { x: 1309.25, y: 0.995362 },
          { x: 1742.44, y: 0.996299 },
          { x: 2173.34, y: 0.996849 },
          { x: 4212.10, y: 0.998091 },
          { x: 6237.29, y: 0.998616 },
          { x: 8171.43, y: 0.998904 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.38, y: 0.984891 },
          { x: 900.55, y: 0.993682 },
          { x: 1266.72, y: 0.995291 },
          { x: 1699.09, y: 0.996303 },
          { x: 2128.61, y: 0.99692 },
          { x: 4159.97, y: 0.998264 },
          { x: 6173.68, y: 0.998782 },
          { x: 8164.44, y: 0.999075 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.39, y: 0.986619 },
          { x: 920.27, y: 0.99424 },
          { x: 1298.67, y: 0.995654 },
          { x: 1739.16, y: 0.99656 },
          { x: 2166.52, y: 0.997118 },
          { x: 4207.09, y: 0.9983 },
          { x: 6228.73, y: 0.99878 },
          { x: 8166.96, y: 0.999034 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 673.36, y: 0.943802 },
          { x: 952.98, y: 0.983941 },
          { x: 1128.69, y: 0.988993 },
          { x: 2114.51, y: 0.995704 },
          { x: 4109.66, y: 0.997966 },
          { x: 7088.14, y: 0.998923 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 472.52, y: 0.962385 },
          { x: 869.26, y: 0.98816 },
          { x: 1112.70, y: 0.991499 },
          { x: 2120.48, y: 0.995994 },
          { x: 4133.98, y: 0.998006 },
          { x: 7088.82, y: 0.998915 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 731.91, y: 0.981603 },
          { x: 941.81, y: 0.992172 },
          { x: 1322.98, y: 0.994953 },
          { x: 2162.21, y: 0.996814 },
          { x: 4218.57, y: 0.998184 },
          { x: 7270.68, y: 0.998895 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 529.70, y: 0.982137 },
          { x: 931.36, y: 0.992866 },
          { x: 1321.59, y: 0.994625 },
          { x: 2155.24, y: 0.996556 },
          { x: 4187.46, y: 0.998044 },
          { x: 7190.83, y: 0.998788 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 725.10, y: 0.981941 },
          { x: 941.94, y: 0.992522 },
          { x: 1315.82, y: 0.995224 },
          { x: 2162.49, y: 0.997071 },
          { x: 4227.96, y: 0.998385 },
          { x: 7290.64, y: 0.99904 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 532.59, y: 0.982463 },
          { x: 928.25, y: 0.99319 },
          { x: 1316.67, y: 0.994948 },
          { x: 2154.52, y: 0.996804 },
          { x: 4205.13, y: 0.998216 },
          { x: 7222.40, y: 0.998929 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 314.38, y: 0.934779 },
          { x: 851.03, y: 0.984974 },
          { x: 1105.54, y: 0.989819 },
          { x: 1609.47, y: 0.993542 },
          { x: 2114.09, y: 0.995292 },
          { x: 4128.76, y: 0.997663 },
          { x: 6122.00, y: 0.998479 },
          { x: 8094.30, y: 0.998903 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.17, y: 0.957648 },
          { x: 845.70, y: 0.988197 },
          { x: 1098.30, y: 0.991279 },
          { x: 1600.09, y: 0.994245 },
          { x: 2104.45, y: 0.995694 },
          { x: 4111.71, y: 0.997783 },
          { x: 6083.36, y: 0.998521 },
          { x: 8055.71, y: 0.998914 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 367.15, y: 0.97912 },
          { x: 891.59, y: 0.991808 },
          { x: 1274.59, y: 0.993985 },
          { x: 1690.76, y: 0.995298 },
          { x: 2108.75, y: 0.996095 },
          { x: 4127.97, y: 0.997784 },
          { x: 6149.08, y: 0.998455 },
          { x: 8141.28, y: 0.998828 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.51, y: 0.980397 },
          { x: 899.36, y: 0.99182 },
          { x: 1276.43, y: 0.993992 },
          { x: 1697.73, y: 0.995262 },
          { x: 2111.79, y: 0.996063 },
          { x: 4139.33, y: 0.997776 },
          { x: 6140.02, y: 0.998451 },
          { x: 8155.26, y: 0.998828 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 383.62, y: 0.976683 },
          { x: 889.96, y: 0.990786 },
          { x: 1263.72, y: 0.993364 },
          { x: 1684.72, y: 0.994861 },
          { x: 2102.22, y: 0.995766 },
          { x: 4127.05, y: 0.997666 },
          { x: 6132.19, y: 0.998409 },
          { x: 8147.86, y: 0.998819 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.48, y: 0.976924 },
          { x: 897.60, y: 0.990903 },
          { x: 1276.12, y: 0.99339 },
          { x: 1691.21, y: 0.994847 },
          { x: 2120.32, y: 0.995746 },
          { x: 4137.68, y: 0.997657 },
          { x: 6148.77, y: 0.998403 },
          { x: 8149.62, y: 0.998814 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 656.22, y: 0.963866 },
          { x: 801.53, y: 0.97148 },
          { x: 1196.61, y: 0.982568 },
          { x: 1995.08, y: 0.990838 },
          { x: 3987.23, y: 0.997017 },
          { x: 6409.05, y: 0.998514 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.60, y: 0.902724 },
          { x: 799.39, y: 0.963152 },
          { x: 1198.28, y: 0.977457 },
          { x: 1997.30, y: 0.989894 },
          { x: 3996.62, y: 0.996469 },
          { x: 6982.99, y: 0.998171 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 410.03, y: 0.983695 },
          { x: 796.06, y: 0.989838 },
          { x: 1194.38, y: 0.992556 },
          { x: 1997.76, y: 0.995418 },
          { x: 3845.36, y: 0.997447 },
          { x: 5714.95, y: 0.99835 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.69, y: 0.971673 },
          { x: 819.80, y: 0.985473 },
          { x: 1220.45, y: 0.990291 },
          { x: 2018.18, y: 0.994043 },
          { x: 4012.48, y: 0.996854 },
          { x: 7005.77, y: 0.998093 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 399.56, y: 0.900204 },
          { x: 799.16, y: 0.956438 },
          { x: 1198.59, y: 0.976094 },
          { x: 1997.39, y: 0.98908 },
          { x: 3995.59, y: 0.996432 },
          { x: 6979.66, y: 0.998195 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.52, y: 0.901841 },
          { x: 799.40, y: 0.962951 },
          { x: 1198.35, y: 0.977512 },
          { x: 1997.35, y: 0.989839 },
          { x: 3996.77, y: 0.996478 },
          { x: 6983.03, y: 0.998175 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 423.56, y: 0.975337 },
          { x: 823.81, y: 0.987094 },
          { x: 1223.16, y: 0.991076 },
          { x: 2023.62, y: 0.994282 },
          { x: 4022.98, y: 0.996897 },
          { x: 6595.99, y: 0.998102 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.56, y: 0.975337 },
          { x: 823.81, y: 0.987094 },
          { x: 1223.16, y: 0.991076 },
          { x: 2023.62, y: 0.994282 },
          { x: 4022.98, y: 0.996897 },
          { x: 6595.99, y: 0.998102 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 501.12, y: 0.967517 },
          { x: 799.35, y: 0.980008 },
          { x: 1193.81, y: 0.987319 },
          { x: 1990.55, y: 0.992435 },
          { x: 3933.99, y: 0.99674 },
          { x: 6341.60, y: 0.998217 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.17, y: 0.947867 },
          { x: 804.02, y: 0.975935 },
          { x: 1202.39, y: 0.985544 },
          { x: 2001.65, y: 0.992996 },
          { x: 3628.80, y: 0.996365 },
          { x: 6351.55, y: 0.997768 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 418.49, y: 0.981627 },
          { x: 796.84, y: 0.98913 },
          { x: 1195.77, y: 0.992056 },
          { x: 1997.59, y: 0.995161 },
          { x: 3940.12, y: 0.997674 },
          { x: 5736.76, y: 0.998553 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 0.97291 },
          { x: 823.24, y: 0.986099 },
          { x: 1223.89, y: 0.990734 },
          { x: 2025.24, y: 0.994312 },
          { x: 4020.37, y: 0.997161 },
          { x: 7020.21, y: 0.998409 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 400.88, y: 0.904067 },
          { x: 800.71, y: 0.964558 },
          { x: 1199.68, y: 0.977961 },
          { x: 1599.82, y: 0.985027 },
          { x: 1998.46, y: 0.990193 },
          { x: 3996.60, y: 0.99659 },
          { x: 5993.80, y: 0.997902 },
          { x: 7997.74, y: 0.99849 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 400.86, y: 0.90192 },
          { x: 800.81, y: 0.962674 },
          { x: 1199.84, y: 0.9775 },
          { x: 1600.51, y: 0.984713 },
          { x: 1996.68, y: 0.98985 },
          { x: 3998.13, y: 0.996477 },
          { x: 5990.85, y: 0.997817 },
          { x: 7998.44, y: 0.998423 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 423.70, y: 0.975806 },
          { x: 823.32, y: 0.986994 },
          { x: 1222.48, y: 0.99088 },
          { x: 1621.91, y: 0.992901 },
          { x: 2022.27, y: 0.99412 },
          { x: 4013.96, y: 0.996871 },
          { x: 6023.83, y: 0.997871 },
          { x: 7094.63, y: 0.998268 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.70, y: 0.975806 },
          { x: 823.32, y: 0.986994 },
          { x: 1222.48, y: 0.99088 },
          { x: 1621.91, y: 0.992901 },
          { x: 2022.27, y: 0.99412 },
          { x: 4013.96, y: 0.996871 },
          { x: 6023.83, y: 0.997871 },
          { x: 7094.63, y: 0.998268 }
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
        min: 0.98,
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

var ctx_t2_20241223_vbr_bitrate_ms_ssim_data = document.getElementById('chart_t2_20241223_vbr_bitrate_ms_ssim');
const chart_t2_20241223_vbr_bitrate_ms_ssim_data = new Chart(ctx_t2_20241223_vbr_bitrate_ms_ssim_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 299.37, y: 0.961761 },
          { x: 703.45, y: 0.986207 },
          { x: 1078.87, y: 0.99178 },
          { x: 1313.38, y: 0.993385 },
          { x: 1667.47, y: 0.994777 },
          { x: 3003.60, y: 0.996864 },
          { x: 4256.26, y: 0.997675 },
          { x: 5004.19, y: 0.997979 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 304.57, y: 0.957277 },
          { x: 712.85, y: 0.983978 },
          { x: 1093.35, y: 0.990971 },
          { x: 1330.77, y: 0.992843 },
          { x: 1678.95, y: 0.994391 },
          { x: 3079.57, y: 0.996754 },
          { x: 4370.98, y: 0.997597 },
          { x: 5248.99, y: 0.99796 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 389.91, y: 0.983984 },
          { x: 717.51, y: 0.991283 },
          { x: 1035.86, y: 0.993599 },
          { x: 1361.64, y: 0.994887 },
          { x: 1699.43, y: 0.995653 },
          { x: 3182.13, y: 0.997271 },
          { x: 4170.92, y: 0.99778 },
          { x: 4937.93, y: 0.998034 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.60, y: 0.983726 },
          { x: 720.68, y: 0.990953 },
          { x: 1043.94, y: 0.99345 },
          { x: 1378.31, y: 0.994778 },
          { x: 1722.19, y: 0.99557 },
          { x: 3201.70, y: 0.997201 },
          { x: 4211.19, y: 0.997731 },
          { x: 5003.70, y: 0.997985 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 387.09, y: 0.984467 },
          { x: 718.10, y: 0.991565 },
          { x: 1033.50, y: 0.993974 },
          { x: 1348.68, y: 0.995226 },
          { x: 1697.45, y: 0.995996 },
          { x: 3152.56, y: 0.997564 },
          { x: 4099.02, y: 0.998033 },
          { x: 4846.01, y: 0.998293 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.13, y: 0.983799 },
          { x: 718.11, y: 0.991233 },
          { x: 1041.66, y: 0.993766 },
          { x: 1371.93, y: 0.9951 },
          { x: 1695.64, y: 0.995869 },
          { x: 3168.72, y: 0.997491 },
          { x: 4137.91, y: 0.997987 },
          { x: 4906.91, y: 0.998252 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 421.31, y: 0.986834 },
          { x: 809.13, y: 0.992336 },
          { x: 1206.16, y: 0.994473 },
          { x: 1601.77, y: 0.995479 },
          { x: 2007.47, y: 0.996151 },
          { x: 3975.60, y: 0.997564 },
          { x: 5484.85, y: 0.998136 },
          { x: 6646.03, y: 0.99844 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.42, y: 0.98642 },
          { x: 808.13, y: 0.992225 },
          { x: 1203.14, y: 0.994371 },
          { x: 1600.70, y: 0.99541 },
          { x: 2004.25, y: 0.99608 },
          { x: 3944.60, y: 0.997511 },
          { x: 5460.26, y: 0.998097 },
          { x: 6607.58, y: 0.998403 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 420.35, y: 0.987311 },
          { x: 809.75, y: 0.992762 },
          { x: 1209.43, y: 0.994803 },
          { x: 1606.82, y: 0.995813 },
          { x: 2013.35, y: 0.996444 },
          { x: 3995.01, y: 0.997813 },
          { x: 5878.99, y: 0.998367 },
          { x: 7571.76, y: 0.998684 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 421.66, y: 0.986945 },
          { x: 809.52, y: 0.992637 },
          { x: 1206.21, y: 0.994694 },
          { x: 1604.92, y: 0.995742 },
          { x: 2011.72, y: 0.996384 },
          { x: 3987.09, y: 0.997778 },
          { x: 5862.93, y: 0.998329 },
          { x: 7537.35, y: 0.998653 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 358.35, y: 0.963992 },
          { x: 791.28, y: 0.984295 },
          { x: 1233.59, y: 0.990625 },
          { x: 1532.59, y: 0.992504 },
          { x: 1970.31, y: 0.994246 },
          { x: 3727.95, y: 0.996935 },
          { x: 5591.83, y: 0.997906 },
          { x: 6711.49, y: 0.998264 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 359.65, y: 0.963704 },
          { x: 793.76, y: 0.983978 },
          { x: 1229.10, y: 0.990253 },
          { x: 1519.94, y: 0.992239 },
          { x: 1959.66, y: 0.994044 },
          { x: 3736.72, y: 0.996832 },
          { x: 5592.97, y: 0.997819 },
          { x: 6753.66, y: 0.998187 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 393.89, y: 0.98246 },
          { x: 780.56, y: 0.990616 },
          { x: 1134.53, y: 0.993309 },
          { x: 1508.09, y: 0.994763 },
          { x: 1839.24, y: 0.995546 },
          { x: 3224.38, y: 0.997261 },
          { x: 4345.96, y: 0.997803 },
          { x: 5063.89, y: 0.998003 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.14, y: 0.982082 },
          { x: 783.03, y: 0.990429 },
          { x: 1145.67, y: 0.993171 },
          { x: 1507.03, y: 0.99467 },
          { x: 1835.42, y: 0.995466 },
          { x: 3223.18, y: 0.997188 },
          { x: 4365.71, y: 0.997742 },
          { x: 5117.28, y: 0.997956 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 393.03, y: 0.982748 },
          { x: 776.47, y: 0.991001 },
          { x: 1133.19, y: 0.993665 },
          { x: 1492.36, y: 0.995085 },
          { x: 1816.84, y: 0.99589 },
          { x: 3174.86, y: 0.997558 },
          { x: 4266.91, y: 0.998094 },
          { x: 4950.87, y: 0.998286 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.52, y: 0.982378 },
          { x: 778.99, y: 0.990818 },
          { x: 1141.59, y: 0.99355 },
          { x: 1492.12, y: 0.995007 },
          { x: 1822.00, y: 0.995824 },
          { x: 3181.57, y: 0.997502 },
          { x: 4300.43, y: 0.998046 },
          { x: 5010.03, y: 0.998249 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 412.69, y: 0.986854 },
          { x: 802.79, y: 0.992287 },
          { x: 1173.30, y: 0.994271 },
          { x: 1563.16, y: 0.995314 },
          { x: 1982.86, y: 0.996039 },
          { x: 3868.66, y: 0.997527 },
          { x: 5535.09, y: 0.998138 },
          { x: 6771.88, y: 0.998457 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 413.88, y: 0.986443 },
          { x: 800.16, y: 0.992031 },
          { x: 1169.71, y: 0.994138 },
          { x: 1559.81, y: 0.995214 },
          { x: 1972.74, y: 0.995932 },
          { x: 3884.77, y: 0.997504 },
          { x: 5519.64, y: 0.998094 },
          { x: 6766.29, y: 0.998413 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 414.47, y: 0.987293 },
          { x: 807.88, y: 0.992687 },
          { x: 1188.01, y: 0.994605 },
          { x: 1586.50, y: 0.995631 },
          { x: 1991.98, y: 0.9963 },
          { x: 3920.48, y: 0.99777 },
          { x: 5700.81, y: 0.998332 },
          { x: 7326.44, y: 0.998633 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 415.28, y: 0.986688 },
          { x: 804.46, y: 0.992432 },
          { x: 1179.61, y: 0.994457 },
          { x: 1581.73, y: 0.995525 },
          { x: 1986.76, y: 0.996223 },
          { x: 3915.94, y: 0.997728 },
          { x: 5701.61, y: 0.998288 },
          { x: 7334.64, y: 0.99859 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1074.79, y: 0.98994 },
          { x: 1074.79, y: 0.98994 },
          { x: 1201.99, y: 0.991039 },
          { x: 1601.82, y: 0.993192 },
          { x: 2001.59, y: 0.994426 },
          { x: 4003.24, y: 0.996846 },
          { x: 6005.25, y: 0.997774 },
          { x: 8006.48, y: 0.998278 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 0.989787 },
          { x: 1075.19, y: 0.989787 },
          { x: 1202.07, y: 0.99094 },
          { x: 1601.91, y: 0.993131 },
          { x: 2001.77, y: 0.994394 },
          { x: 4003.00, y: 0.996811 },
          { x: 6002.64, y: 0.997729 },
          { x: 8006.43, y: 0.998224 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.34, y: 0.981863 },
          { x: 776.36, y: 0.99038 },
          { x: 1142.81, y: 0.992951 },
          { x: 1511.45, y: 0.994388 },
          { x: 1841.88, y: 0.995265 },
          { x: 3222.79, y: 0.997029 },
          { x: 4400.21, y: 0.997644 },
          { x: 5087.48, y: 0.997862 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.53, y: 0.981566 },
          { x: 777.98, y: 0.990032 },
          { x: 1147.09, y: 0.992921 },
          { x: 1514.13, y: 0.994321 },
          { x: 1858.75, y: 0.995225 },
          { x: 3234.07, y: 0.997014 },
          { x: 4424.59, y: 0.997649 },
          { x: 5109.40, y: 0.997867 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 391.44, y: 0.98247 },
          { x: 772.06, y: 0.990662 },
          { x: 1128.88, y: 0.993412 },
          { x: 1493.72, y: 0.994792 },
          { x: 1821.60, y: 0.995658 },
          { x: 3173.78, y: 0.997381 },
          { x: 4318.28, y: 0.997977 },
          { x: 4960.39, y: 0.998185 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.14, y: 0.981853 },
          { x: 774.24, y: 0.990501 },
          { x: 1135.24, y: 0.993307 },
          { x: 1504.80, y: 0.994711 },
          { x: 1831.87, y: 0.995597 },
          { x: 3192.01, y: 0.997376 },
          { x: 4337.38, y: 0.997983 },
          { x: 4987.86, y: 0.998193 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1074.85, y: 0.98992 },
          { x: 1074.85, y: 0.98992 },
          { x: 1202.01, y: 0.991062 },
          { x: 2001.74, y: 0.994429 },
          { x: 4003.35, y: 0.996851 },
          { x: 7007.61, y: 0.998062 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 0.989787 },
          { x: 1075.19, y: 0.989787 },
          { x: 1202.07, y: 0.99094 },
          { x: 2001.77, y: 0.994394 },
          { x: 4003.00, y: 0.996811 },
          { x: 7006.69, y: 0.998014 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 392.67, y: 0.977375 },
          { x: 783.36, y: 0.987963 },
          { x: 1169.48, y: 0.991518 },
          { x: 1908.49, y: 0.994447 },
          { x: 3341.74, y: 0.996648 },
          { x: 5134.38, y: 0.997642 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.51, y: 0.976668 },
          { x: 782.31, y: 0.987428 },
          { x: 1164.39, y: 0.991198 },
          { x: 1809.83, y: 0.994272 },
          { x: 3236.31, y: 0.996524 },
          { x: 4666.34, y: 0.997411 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.80, y: 0.978375 },
          { x: 782.71, y: 0.988445 },
          { x: 1166.54, y: 0.992052 },
          { x: 1889.05, y: 0.994943 },
          { x: 3295.27, y: 0.997086 },
          { x: 5060.68, y: 0.998038 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.76, y: 0.977213 },
          { x: 781.65, y: 0.987841 },
          { x: 1158.07, y: 0.991713 },
          { x: 1787.18, y: 0.994805 },
          { x: 3195.53, y: 0.996962 },
          { x: 4570.60, y: 0.997829 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1074.79, y: 0.989951 },
          { x: 1074.79, y: 0.989951 },
          { x: 1202.02, y: 0.991051 },
          { x: 1601.61, y: 0.99319 },
          { x: 2001.64, y: 0.994423 },
          { x: 4003.49, y: 0.996846 },
          { x: 6004.81, y: 0.997773 },
          { x: 8005.88, y: 0.998277 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.08, y: 0.989819 },
          { x: 1075.08, y: 0.989819 },
          { x: 1202.04, y: 0.990942 },
          { x: 1601.84, y: 0.993132 },
          { x: 2001.81, y: 0.994393 },
          { x: 4003.27, y: 0.996812 },
          { x: 6003.83, y: 0.99773 },
          { x: 8006.84, y: 0.998224 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 369.79, y: 0.973579 },
          { x: 739.97, y: 0.984902 },
          { x: 1106.65, y: 0.989525 },
          { x: 1471.53, y: 0.992304 },
          { x: 1846.08, y: 0.993838 },
          { x: 3513.02, y: 0.996489 },
          { x: 5344.52, y: 0.997465 },
          { x: 7069.30, y: 0.997957 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.07, y: 0.970936 },
          { x: 740.01, y: 0.984186 },
          { x: 1107.53, y: 0.989292 },
          { x: 1469.57, y: 0.992197 },
          { x: 1837.48, y: 0.993742 },
          { x: 3508.58, y: 0.996461 },
          { x: 5343.35, y: 0.997456 },
          { x: 7052.20, y: 0.99795 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 0.974304 },
          { x: 732.54, y: 0.985556 },
          { x: 1105.05, y: 0.99013 },
          { x: 1467.26, y: 0.99287 },
          { x: 1812.30, y: 0.994332 },
          { x: 3511.21, y: 0.996915 },
          { x: 5343.83, y: 0.997818 },
          { x: 7023.42, y: 0.998254 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 0.971345 },
          { x: 739.56, y: 0.984903 },
          { x: 1108.77, y: 0.989894 },
          { x: 1472.71, y: 0.992732 },
          { x: 1820.10, y: 0.994235 },
          { x: 3517.20, y: 0.996895 },
          { x: 5342.60, y: 0.997807 },
          { x: 6979.86, y: 0.998238 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1073.64, y: 0.990029 },
          { x: 1073.64, y: 0.990029 },
          { x: 1200.78, y: 0.991134 },
          { x: 1999.82, y: 0.994499 },
          { x: 4001.05, y: 0.996922 },
          { x: 7002.88, y: 0.998081 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.97, y: 0.989554 },
          { x: 1072.97, y: 0.989554 },
          { x: 1199.94, y: 0.990804 },
          { x: 1999.90, y: 0.994299 },
          { x: 4000.84, y: 0.996775 },
          { x: 7001.13, y: 0.997909 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1073.07, y: 0.989535 },
          { x: 1073.07, y: 0.989535 },
          { x: 1199.86, y: 0.990811 },
          { x: 1600.82, y: 0.9931 },
          { x: 1999.87, y: 0.994326 },
          { x: 4000.29, y: 0.996759 },
          { x: 5999.91, y: 0.997645 },
          { x: 8003.75, y: 0.998146 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.93, y: 0.98956 },
          { x: 1072.93, y: 0.98956 },
          { x: 1199.95, y: 0.990784 },
          { x: 1600.08, y: 0.993067 },
          { x: 2000.03, y: 0.994306 },
          { x: 4001.04, y: 0.996762 },
          { x: 6002.80, y: 0.997617 },
          { x: 8003.05, y: 0.998117 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 880.71, y: 0.975525 },
          { x: 880.71, y: 0.975525 },
          { x: 1013.54, y: 0.979053 },
          { x: 1772.45, y: 0.990771 },
          { x: 3577.15, y: 0.995649 },
          { x: 5998.63, y: 0.997259 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 880.75, y: 0.975412 },
          { x: 880.75, y: 0.975412 },
          { x: 1014.79, y: 0.979021 },
          { x: 1763.79, y: 0.990659 },
          { x: 3549.50, y: 0.995624 },
          { x: 5973.75, y: 0.997252 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 654.90, y: 0.945123 },
          { x: 956.02, y: 0.982799 },
          { x: 1119.60, y: 0.988087 },
          { x: 1612.85, y: 0.993063 },
          { x: 2116.43, y: 0.99496 },
          { x: 4119.49, y: 0.997435 },
          { x: 6097.63, y: 0.998277 },
          { x: 8064.90, y: 0.998708 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 486.92, y: 0.962738 },
          { x: 868.11, y: 0.987165 },
          { x: 1112.27, y: 0.990629 },
          { x: 1614.77, y: 0.993775 },
          { x: 2120.54, y: 0.995308 },
          { x: 4130.98, y: 0.997497 },
          { x: 6106.60, y: 0.998292 },
          { x: 8044.22, y: 0.998684 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 723.20, y: 0.979955 },
          { x: 939.61, y: 0.991123 },
          { x: 1323.37, y: 0.99402 },
          { x: 1737.15, y: 0.995406 },
          { x: 2160.72, y: 0.99617 },
          { x: 4219.87, y: 0.997711 },
          { x: 6257.86, y: 0.998332 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 532.92, y: 0.980942 },
          { x: 930.11, y: 0.99191 },
          { x: 1320.86, y: 0.993806 },
          { x: 1730.89, y: 0.995141 },
          { x: 2154.46, y: 0.995909 },
          { x: 4189.68, y: 0.997561 },
          { x: 6209.32, y: 0.998204 },
          { x: 8161.33, y: 0.998567 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 727.13, y: 0.980362 },
          { x: 946.41, y: 0.991481 },
          { x: 1317.39, y: 0.994366 },
          { x: 1735.93, y: 0.995746 },
          { x: 2162.77, y: 0.99649 },
          { x: 4224.83, y: 0.997987 },
          { x: 6265.23, y: 0.998571 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 533.95, y: 0.981384 },
          { x: 927.03, y: 0.99233 },
          { x: 1317.83, y: 0.994185 },
          { x: 1729.43, y: 0.99546 },
          { x: 2154.87, y: 0.996218 },
          { x: 4206.96, y: 0.997797 },
          { x: 6225.44, y: 0.998416 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 379.91, y: 0.982966 },
          { x: 902.76, y: 0.992362 },
          { x: 1280.83, y: 0.994201 },
          { x: 1706.73, y: 0.995364 },
          { x: 2137.90, y: 0.996076 },
          { x: 4177.61, y: 0.997619 },
          { x: 6187.60, y: 0.998254 },
          { x: 8170.41, y: 0.998599 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.45, y: 0.984823 },
          { x: 924.89, y: 0.993078 },
          { x: 1309.25, y: 0.994655 },
          { x: 1742.44, y: 0.995713 },
          { x: 2173.34, y: 0.99632 },
          { x: 4212.10, y: 0.997693 },
          { x: 6237.29, y: 0.998279 },
          { x: 8171.43, y: 0.998602 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.38, y: 0.983288 },
          { x: 900.55, y: 0.992738 },
          { x: 1266.72, y: 0.994538 },
          { x: 1699.09, y: 0.99568 },
          { x: 2128.61, y: 0.996371 },
          { x: 4159.97, y: 0.997878 },
          { x: 6173.68, y: 0.99847 },
          { x: 8164.44, y: 0.998805 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.39, y: 0.985155 },
          { x: 920.27, y: 0.993409 },
          { x: 1298.67, y: 0.994981 },
          { x: 1739.16, y: 0.996007 },
          { x: 2166.52, y: 0.996625 },
          { x: 4207.09, y: 0.997944 },
          { x: 6228.73, y: 0.998486 },
          { x: 8166.96, y: 0.998771 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 673.36, y: 0.94392 },
          { x: 952.98, y: 0.982681 },
          { x: 1128.69, y: 0.987925 },
          { x: 2114.51, y: 0.994973 },
          { x: 4109.66, y: 0.997463 },
          { x: 7088.14, y: 0.998534 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 472.52, y: 0.962163 },
          { x: 869.26, y: 0.987157 },
          { x: 1112.70, y: 0.990612 },
          { x: 2120.48, y: 0.995327 },
          { x: 4133.98, y: 0.99751 },
          { x: 7088.82, y: 0.998518 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 731.91, y: 0.979946 },
          { x: 941.81, y: 0.991092 },
          { x: 1322.98, y: 0.994054 },
          { x: 2162.21, y: 0.996168 },
          { x: 4218.57, y: 0.997718 },
          { x: 7270.68, y: 0.998534 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 529.70, y: 0.980771 },
          { x: 931.36, y: 0.991937 },
          { x: 1321.59, y: 0.993821 },
          { x: 2155.24, y: 0.995928 },
          { x: 4187.46, y: 0.99757 },
          { x: 7190.83, y: 0.998416 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 725.10, y: 0.980346 },
          { x: 941.94, y: 0.991509 },
          { x: 1315.82, y: 0.994394 },
          { x: 2162.49, y: 0.996494 },
          { x: 4227.96, y: 0.997995 },
          { x: 7290.64, y: 0.998753 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 532.59, y: 0.981201 },
          { x: 928.25, y: 0.992324 },
          { x: 1316.67, y: 0.994199 },
          { x: 2154.52, y: 0.996229 },
          { x: 4205.13, y: 0.997805 },
          { x: 7222.40, y: 0.998618 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 314.38, y: 0.936129 },
          { x: 851.03, y: 0.983907 },
          { x: 1105.54, y: 0.988821 },
          { x: 1609.47, y: 0.992712 },
          { x: 2114.09, y: 0.994587 },
          { x: 4128.76, y: 0.997169 },
          { x: 6122.00, y: 0.998057 },
          { x: 8094.30, y: 0.998522 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.17, y: 0.958048 },
          { x: 845.70, y: 0.987324 },
          { x: 1098.30, y: 0.990465 },
          { x: 1600.09, y: 0.993542 },
          { x: 2104.45, y: 0.995064 },
          { x: 4111.71, y: 0.997305 },
          { x: 6083.36, y: 0.998108 },
          { x: 8055.71, y: 0.998535 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 367.15, y: 0.977098 },
          { x: 891.59, y: 0.990445 },
          { x: 1274.59, y: 0.992863 },
          { x: 1690.76, y: 0.994383 },
          { x: 2108.75, y: 0.995304 },
          { x: 4127.97, y: 0.997224 },
          { x: 6149.08, y: 0.997992 },
          { x: 8141.28, y: 0.998424 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.51, y: 0.978532 },
          { x: 899.36, y: 0.990507 },
          { x: 1276.43, y: 0.992897 },
          { x: 1697.73, y: 0.994354 },
          { x: 2111.79, y: 0.995267 },
          { x: 4139.33, y: 0.99721 },
          { x: 6140.02, y: 0.997982 },
          { x: 8155.26, y: 0.998419 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 383.62, y: 0.975203 },
          { x: 889.96, y: 0.989519 },
          { x: 1263.72, y: 0.992266 },
          { x: 1684.72, y: 0.993938 },
          { x: 2102.22, y: 0.994946 },
          { x: 4127.05, y: 0.997067 },
          { x: 6132.19, y: 0.997928 },
          { x: 8147.86, y: 0.998414 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.48, y: 0.975508 },
          { x: 897.60, y: 0.989707 },
          { x: 1276.12, y: 0.992323 },
          { x: 1691.21, y: 0.993928 },
          { x: 2120.32, y: 0.994924 },
          { x: 4137.68, y: 0.99705 },
          { x: 6148.77, y: 0.997913 },
          { x: 8149.62, y: 0.9984 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 656.22, y: 0.962242 },
          { x: 801.53, y: 0.969497 },
          { x: 1196.61, y: 0.98091 },
          { x: 1995.08, y: 0.989405 },
          { x: 3987.23, y: 0.996037 },
          { x: 6409.05, y: 0.997824 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.60, y: 0.909128 },
          { x: 799.39, y: 0.963667 },
          { x: 1198.28, y: 0.977558 },
          { x: 1997.30, y: 0.989424 },
          { x: 3996.62, y: 0.995903 },
          { x: 6982.99, y: 0.997721 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 410.03, y: 0.981411 },
          { x: 796.06, y: 0.987857 },
          { x: 1194.38, y: 0.990781 },
          { x: 1997.76, y: 0.994073 },
          { x: 3845.36, y: 0.996542 },
          { x: 5714.95, y: 0.997682 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.69, y: 0.970555 },
          { x: 819.80, y: 0.98419 },
          { x: 1220.45, y: 0.989109 },
          { x: 2018.18, y: 0.993076 },
          { x: 4012.48, y: 0.996165 },
          { x: 7005.77, y: 0.997575 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 399.56, y: 0.907527 },
          { x: 799.16, y: 0.95733 },
          { x: 1198.59, y: 0.976215 },
          { x: 1997.39, y: 0.988706 },
          { x: 3995.59, y: 0.995901 },
          { x: 6979.66, y: 0.997766 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.52, y: 0.908875 },
          { x: 799.40, y: 0.963566 },
          { x: 1198.35, y: 0.977614 },
          { x: 1997.35, y: 0.989369 },
          { x: 3996.77, y: 0.995911 },
          { x: 6983.03, y: 0.997724 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 423.56, y: 0.973775 },
          { x: 823.81, y: 0.985366 },
          { x: 1223.16, y: 0.989496 },
          { x: 2023.62, y: 0.992981 },
          { x: 4022.98, y: 0.995965 },
          { x: 6595.99, y: 0.99742 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.56, y: 0.973775 },
          { x: 823.81, y: 0.985366 },
          { x: 1223.16, y: 0.989496 },
          { x: 2023.62, y: 0.992981 },
          { x: 4022.98, y: 0.995965 },
          { x: 6595.99, y: 0.99742 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 501.12, y: 0.965529 },
          { x: 799.35, y: 0.978252 },
          { x: 1193.81, y: 0.985691 },
          { x: 1990.55, y: 0.99102 },
          { x: 3933.99, y: 0.995839 },
          { x: 6341.60, y: 0.997553 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.17, y: 0.949204 },
          { x: 804.02, y: 0.975744 },
          { x: 1202.39, y: 0.985046 },
          { x: 2001.65, y: 0.9924 },
          { x: 3628.80, y: 0.995894 },
          { x: 6351.55, y: 0.997366 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 418.49, y: 0.979108 },
          { x: 796.84, y: 0.986982 },
          { x: 1195.77, y: 0.990101 },
          { x: 1997.59, y: 0.99365 },
          { x: 3940.12, y: 0.996729 },
          { x: 5736.76, y: 0.997918 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 0.971775 },
          { x: 823.24, y: 0.984864 },
          { x: 1223.89, y: 0.989612 },
          { x: 2025.24, y: 0.993389 },
          { x: 4020.37, y: 0.996505 },
          { x: 7020.21, y: 0.997917 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 400.88, y: 0.910905 },
          { x: 800.71, y: 0.96525 },
          { x: 1199.68, y: 0.978114 },
          { x: 1599.82, y: 0.98489 },
          { x: 1998.46, y: 0.989745 },
          { x: 3996.60, y: 0.996052 },
          { x: 5993.80, y: 0.997448 },
          { x: 7997.74, y: 0.998083 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 400.86, y: 0.908895 },
          { x: 800.81, y: 0.963285 },
          { x: 1199.84, y: 0.97759 },
          { x: 1600.51, y: 0.98452 },
          { x: 1996.68, y: 0.989385 },
          { x: 3998.13, y: 0.995911 },
          { x: 5990.85, y: 0.997339 },
          { x: 7998.44, y: 0.997996 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 423.70, y: 0.97426 },
          { x: 823.32, y: 0.985294 },
          { x: 1222.48, y: 0.98931 },
          { x: 1621.91, y: 0.991464 },
          { x: 2022.27, y: 0.992805 },
          { x: 4013.96, y: 0.995928 },
          { x: 6023.83, y: 0.997132 },
          { x: 7094.63, y: 0.997634 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.70, y: 0.97426 },
          { x: 823.32, y: 0.985294 },
          { x: 1222.48, y: 0.98931 },
          { x: 1621.91, y: 0.991464 },
          { x: 2022.27, y: 0.992805 },
          { x: 4013.96, y: 0.995928 },
          { x: 6023.83, y: 0.997132 },
          { x: 7094.63, y: 0.997634 }
        ]
      },
    ],
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
        min: 0.98,
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

var ctx_t2_20241223_vbr_bitrate_vmaf_data = document.getElementById('chart_t2_20241223_vbr_bitrate_vmaf');
const chart_t2_20241223_vbr_bitrate_vmaf_data = new Chart(ctx_t2_20241223_vbr_bitrate_vmaf_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 299.37, y: 55.483591 },
          { x: 703.45, y: 78.777692 },
          { x: 1078.87, y: 85.621505 },
          { x: 1313.38, y: 87.959922 },
          { x: 1667.47, y: 90.225953 },
          { x: 3003.60, y: 93.721226 },
          { x: 4256.26, y: 95.340097 },
          { x: 5004.19, y: 95.953172 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 304.57, y: 53.049206 },
          { x: 712.85, y: 77.199768 },
          { x: 1093.35, y: 84.598017 },
          { x: 1330.77, y: 87.031826 },
          { x: 1678.95, y: 89.337472 },
          { x: 3079.57, y: 93.206737 },
          { x: 4370.98, y: 94.847208 },
          { x: 5248.99, y: 95.5939 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 389.91, y: 76.217805 },
          { x: 717.51, y: 85.243829 },
          { x: 1035.86, y: 88.652476 },
          { x: 1361.64, y: 90.587943 },
          { x: 1699.43, y: 91.895376 },
          { x: 3182.13, y: 94.726311 },
          { x: 4170.92, y: 95.687184 },
          { x: 4937.93, y: 96.269715 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.60, y: 75.360119 },
          { x: 720.68, y: 84.732453 },
          { x: 1043.94, y: 88.365988 },
          { x: 1378.31, y: 90.384957 },
          { x: 1722.19, y: 91.732663 },
          { x: 3201.70, y: 94.586605 },
          { x: 4211.19, y: 95.578805 },
          { x: 5003.70, y: 96.172302 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 387.09, y: 76.516402 },
          { x: 718.10, y: 85.463117 },
          { x: 1033.50, y: 88.917076 },
          { x: 1348.68, y: 90.820013 },
          { x: 1697.45, y: 92.20039 },
          { x: 3152.56, y: 94.95279 },
          { x: 4099.02, y: 95.877749 },
          { x: 4846.01, y: 96.459253 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.13, y: 75.577648 },
          { x: 718.11, y: 84.955186 },
          { x: 1041.66, y: 88.659057 },
          { x: 1371.93, y: 90.651485 },
          { x: 1695.64, y: 91.953918 },
          { x: 3168.72, y: 94.805501 },
          { x: 4137.91, y: 95.765563 },
          { x: 4906.91, y: 96.369669 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 421.31, y: 77.470864 },
          { x: 809.13, y: 85.688777 },
          { x: 1206.16, y: 89.214011 },
          { x: 1601.77, y: 91.087976 },
          { x: 2007.47, y: 92.397742 },
          { x: 3975.60, y: 95.236058 },
          { x: 5484.85, y: 96.239191 },
          { x: 6646.03, y: 96.713261 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.42, y: 77.029678 },
          { x: 808.13, y: 85.484836 },
          { x: 1203.14, y: 89.014854 },
          { x: 1600.70, y: 90.967188 },
          { x: 2004.25, y: 92.250879 },
          { x: 3944.60, y: 95.139406 },
          { x: 5460.26, y: 96.151728 },
          { x: 6607.58, y: 96.621124 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 420.35, y: 77.658886 },
          { x: 809.75, y: 85.923981 },
          { x: 1209.43, y: 89.390766 },
          { x: 1606.82, y: 91.278131 },
          { x: 2013.35, y: 92.535615 },
          { x: 3995.01, y: 95.326488 },
          { x: 5878.99, y: 96.35226 },
          { x: 7571.76, y: 96.937046 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 421.66, y: 77.27539 },
          { x: 809.52, y: 85.71314 },
          { x: 1206.21, y: 89.180512 },
          { x: 1604.92, y: 91.133623 },
          { x: 2011.72, y: 92.408424 },
          { x: 3987.09, y: 95.243762 },
          { x: 5862.93, y: 96.254091 },
          { x: 7537.35, y: 96.860167 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 358.35, y: 57.549632 },
          { x: 791.28, y: 77.768603 },
          { x: 1233.59, y: 84.825397 },
          { x: 1532.59, y: 87.310447 },
          { x: 1970.31, y: 89.800845 },
          { x: 3727.95, y: 94.1976 },
          { x: 5591.83, y: 95.922688 },
          { x: 6711.49, y: 96.496301 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 359.65, y: 57.192748 },
          { x: 793.76, y: 77.057672 },
          { x: 1229.10, y: 83.946307 },
          { x: 1519.94, y: 86.523727 },
          { x: 1959.66, y: 89.041755 },
          { x: 3736.72, y: 93.558481 },
          { x: 5592.97, y: 95.37705 },
          { x: 6753.66, y: 96.016402 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 393.89, y: 74.439479 },
          { x: 780.56, y: 84.634513 },
          { x: 1134.53, y: 88.309883 },
          { x: 1508.09, y: 90.557324 },
          { x: 1839.24, y: 91.550116 },
          { x: 3224.38, y: 94.757221 },
          { x: 4345.96, y: 95.874371 },
          { x: 5063.89, y: 96.230281 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.14, y: 74.075781 },
          { x: 783.03, y: 84.448063 },
          { x: 1145.67, y: 88.158234 },
          { x: 1507.03, y: 90.407556 },
          { x: 1835.42, y: 91.421928 },
          { x: 3223.18, y: 94.596264 },
          { x: 4365.71, y: 95.736551 },
          { x: 5117.28, y: 96.133722 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 393.03, y: 74.803095 },
          { x: 776.47, y: 84.832086 },
          { x: 1133.19, y: 88.625798 },
          { x: 1492.36, y: 90.67219 },
          { x: 1816.84, y: 91.808234 },
          { x: 3174.86, y: 94.987251 },
          { x: 4266.91, y: 96.077397 },
          { x: 4950.87, y: 96.422015 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.52, y: 74.293562 },
          { x: 778.99, y: 84.801905 },
          { x: 1141.59, y: 88.56245 },
          { x: 1492.12, y: 90.51648 },
          { x: 1822.00, y: 91.745807 },
          { x: 3181.57, y: 94.854896 },
          { x: 4300.43, y: 95.980216 },
          { x: 5010.03, y: 96.342594 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 412.69, y: 76.983562 },
          { x: 802.79, y: 85.155002 },
          { x: 1173.30, y: 88.586117 },
          { x: 1563.16, y: 90.575366 },
          { x: 1982.86, y: 92.043522 },
          { x: 3868.66, y: 95.024401 },
          { x: 5535.09, y: 96.165448 },
          { x: 6771.88, y: 96.715645 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 413.88, y: 76.536691 },
          { x: 800.16, y: 84.722114 },
          { x: 1169.71, y: 88.330971 },
          { x: 1559.81, y: 90.373526 },
          { x: 1972.74, y: 91.811144 },
          { x: 3884.77, y: 94.937143 },
          { x: 5519.64, y: 96.048351 },
          { x: 6766.29, y: 96.612345 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 414.47, y: 77.374932 },
          { x: 807.88, y: 85.566961 },
          { x: 1188.01, y: 88.967792 },
          { x: 1586.50, y: 90.984279 },
          { x: 1991.98, y: 92.354769 },
          { x: 3920.48, y: 95.344394 },
          { x: 5700.81, y: 96.38807 },
          { x: 7326.44, y: 96.966048 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 415.28, y: 76.769433 },
          { x: 804.46, y: 85.148211 },
          { x: 1179.61, y: 88.677264 },
          { x: 1581.73, y: 90.783405 },
          { x: 1986.76, y: 92.188091 },
          { x: 3915.94, y: 95.236321 },
          { x: 5701.61, y: 96.289261 },
          { x: 7334.64, y: 96.875839 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1074.79, y: 83.990443 },
          { x: 1074.79, y: 83.990443 },
          { x: 1201.99, y: 85.427192 },
          { x: 1601.82, y: 88.501487 },
          { x: 2001.59, y: 90.400755 },
          { x: 4003.24, y: 94.476791 },
          { x: 6005.25, y: 96.129268 },
          { x: 8006.48, y: 96.971031 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 83.701143 },
          { x: 1075.19, y: 83.701143 },
          { x: 1202.07, y: 85.160521 },
          { x: 1601.91, y: 88.162575 },
          { x: 2001.77, y: 90.04756 },
          { x: 4003.00, y: 94.088269 },
          { x: 6002.64, y: 95.64458 },
          { x: 8006.43, y: 96.487374 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.34, y: 72.840813 },
          { x: 776.36, y: 83.395374 },
          { x: 1142.81, y: 87.353782 },
          { x: 1511.45, y: 89.569232 },
          { x: 1841.88, y: 90.967453 },
          { x: 3222.79, y: 94.298083 },
          { x: 4400.21, y: 95.590079 },
          { x: 5087.48, y: 96.012501 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.53, y: 72.437198 },
          { x: 777.98, y: 83.017912 },
          { x: 1147.09, y: 87.184948 },
          { x: 1514.13, y: 89.431103 },
          { x: 1858.75, y: 90.869369 },
          { x: 3234.07, y: 94.234557 },
          { x: 4424.59, y: 95.551953 },
          { x: 5109.40, y: 95.971217 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 391.44, y: 73.212054 },
          { x: 772.06, y: 83.553752 },
          { x: 1128.88, y: 87.58911 },
          { x: 1493.72, y: 89.883065 },
          { x: 1821.60, y: 91.26254 },
          { x: 3173.78, y: 94.590693 },
          { x: 4318.28, y: 95.816696 },
          { x: 4960.39, y: 96.215949 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.14, y: 72.741278 },
          { x: 774.24, y: 83.360203 },
          { x: 1135.24, y: 87.444336 },
          { x: 1504.80, y: 89.723294 },
          { x: 1831.87, y: 91.145247 },
          { x: 3192.01, y: 94.501656 },
          { x: 4337.38, y: 95.784611 },
          { x: 4987.86, y: 96.183073 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1074.85, y: 84.001661 },
          { x: 1074.85, y: 84.001661 },
          { x: 1202.01, y: 85.45991 },
          { x: 2001.74, y: 90.413066 },
          { x: 4003.35, y: 94.480334 },
          { x: 7007.61, y: 96.612242 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 83.701143 },
          { x: 1075.19, y: 83.701143 },
          { x: 1202.07, y: 85.160521 },
          { x: 2001.77, y: 90.04756 },
          { x: 4003.00, y: 94.088269 },
          { x: 7006.69, y: 96.121942 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 392.67, y: 69.46337 },
          { x: 783.36, y: 82.586103 },
          { x: 1169.48, y: 87.33153 },
          { x: 1908.49, y: 91.444882 },
          { x: 3341.74, y: 94.647175 },
          { x: 5134.38, y: 95.998614 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.51, y: 69.242749 },
          { x: 782.31, y: 82.348737 },
          { x: 1164.39, y: 87.170531 },
          { x: 1809.83, y: 91.258374 },
          { x: 3236.31, y: 94.48164 },
          { x: 4666.34, y: 95.650757 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.80, y: 70.099535 },
          { x: 782.71, y: 82.97451 },
          { x: 1166.54, y: 87.723385 },
          { x: 1889.05, y: 91.787443 },
          { x: 3295.27, y: 94.924457 },
          { x: 5060.68, y: 96.233784 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.76, y: 69.662775 },
          { x: 781.65, y: 82.72825 },
          { x: 1158.07, y: 87.561946 },
          { x: 1787.18, y: 91.593432 },
          { x: 3195.53, y: 94.706362 },
          { x: 4570.60, y: 95.873866 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1074.79, y: 83.989106 },
          { x: 1074.79, y: 83.989106 },
          { x: 1202.02, y: 85.444241 },
          { x: 1601.61, y: 88.500388 },
          { x: 2001.64, y: 90.398707 },
          { x: 4003.49, y: 94.47612 },
          { x: 6004.81, y: 96.129413 },
          { x: 8005.88, y: 96.972267 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.08, y: 83.718247 },
          { x: 1075.08, y: 83.718247 },
          { x: 1202.04, y: 85.164325 },
          { x: 1601.84, y: 88.163261 },
          { x: 2001.81, y: 90.045294 },
          { x: 4003.27, y: 94.089201 },
          { x: 6003.83, y: 95.645441 },
          { x: 8006.84, y: 96.487843 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 369.79, y: 62.844166 },
          { x: 739.97, y: 76.937555 },
          { x: 1106.65, y: 82.773368 },
          { x: 1471.53, y: 86.38177 },
          { x: 1846.08, y: 88.616939 },
          { x: 3513.02, y: 93.08445 },
          { x: 5344.52, y: 94.929421 },
          { x: 7069.30, y: 95.84757 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.07, y: 61.371317 },
          { x: 740.01, y: 76.555169 },
          { x: 1107.53, y: 82.635494 },
          { x: 1469.57, y: 86.329844 },
          { x: 1837.48, y: 88.541864 },
          { x: 3508.58, y: 93.085083 },
          { x: 5343.35, y: 94.929881 },
          { x: 7052.20, y: 95.845919 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 63.264251 },
          { x: 732.54, y: 77.334103 },
          { x: 1105.05, y: 83.093891 },
          { x: 1467.26, y: 86.712468 },
          { x: 1812.30, y: 88.902635 },
          { x: 3511.21, y: 93.381104 },
          { x: 5343.83, y: 95.172933 },
          { x: 7023.42, y: 96.056231 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 61.327626 },
          { x: 739.56, y: 76.920533 },
          { x: 1108.77, y: 82.983362 },
          { x: 1472.71, y: 86.633221 },
          { x: 1820.10, y: 88.849017 },
          { x: 3517.20, y: 93.379104 },
          { x: 5342.60, y: 95.17659 },
          { x: 6979.86, y: 96.031811 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1073.64, y: 84.053598 },
          { x: 1073.64, y: 84.053598 },
          { x: 1200.78, y: 85.490742 },
          { x: 1999.82, y: 90.428643 },
          { x: 4001.05, y: 94.526963 },
          { x: 7002.88, y: 96.633672 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.97, y: 83.565493 },
          { x: 1072.97, y: 83.565493 },
          { x: 1199.94, y: 85.034789 },
          { x: 1999.90, y: 89.849908 },
          { x: 4000.84, y: 93.869038 },
          { x: 7001.13, y: 95.910182 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1073.07, y: 83.900664 },
          { x: 1073.07, y: 83.900664 },
          { x: 1199.86, y: 85.431995 },
          { x: 1600.82, y: 88.558819 },
          { x: 1999.87, y: 90.437383 },
          { x: 4000.29, y: 94.522904 },
          { x: 5999.91, y: 96.052156 },
          { x: 8003.75, y: 96.828146 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.93, y: 83.583242 },
          { x: 1072.93, y: 83.583242 },
          { x: 1199.95, y: 85.044837 },
          { x: 1600.08, y: 88.04576 },
          { x: 2000.03, y: 89.852797 },
          { x: 4001.04, y: 93.859516 },
          { x: 6002.80, y: 95.409145 },
          { x: 8003.05, y: 96.233043 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 880.71, y: 74.963333 },
          { x: 880.71, y: 74.963333 },
          { x: 1013.54, y: 77.888375 },
          { x: 1772.45, y: 87.436805 },
          { x: 3577.15, y: 93.223931 },
          { x: 5998.63, y: 95.501893 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 880.75, y: 74.876619 },
          { x: 880.75, y: 74.876619 },
          { x: 1014.79, y: 77.870943 },
          { x: 1763.79, y: 87.325177 },
          { x: 3549.50, y: 93.176967 },
          { x: 5973.75, y: 95.482458 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 654.90, y: 50.982284 },
          { x: 956.02, y: 75.562458 },
          { x: 1119.60, y: 81.383566 },
          { x: 1612.85, y: 88.078014 },
          { x: 2116.43, y: 90.82528 },
          { x: 4119.49, y: 95.003101 },
          { x: 6097.63, y: 96.467455 },
          { x: 8064.90, y: 97.202623 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 486.92, y: 59.411464 },
          { x: 868.11, y: 79.973539 },
          { x: 1112.27, y: 84.350536 },
          { x: 1614.77, y: 88.678347 },
          { x: 2120.54, y: 91.100722 },
          { x: 4130.98, y: 94.948074 },
          { x: 6106.60, y: 96.381785 },
          { x: 8044.22, y: 97.092722 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 723.20, y: 72.315859 },
          { x: 939.61, y: 83.85543 },
          { x: 1323.37, y: 88.604448 },
          { x: 1737.15, y: 91.00731 },
          { x: 2160.72, y: 92.4304 },
          { x: 4219.87, y: 95.518726 },
          { x: 6257.86, y: 96.644497 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 532.92, y: 71.720541 },
          { x: 930.11, y: 84.589435 },
          { x: 1320.86, y: 87.598858 },
          { x: 1730.89, y: 89.971216 },
          { x: 2154.46, y: 91.476852 },
          { x: 4189.68, y: 94.950217 },
          { x: 6209.32, y: 96.220825 },
          { x: 8161.33, y: 96.891818 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 727.13, y: 72.634608 },
          { x: 946.41, y: 84.118261 },
          { x: 1317.39, y: 88.938481 },
          { x: 1735.93, y: 91.368703 },
          { x: 2162.77, y: 92.77953 },
          { x: 4224.83, y: 95.819772 },
          { x: 6265.23, y: 96.935624 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 533.95, y: 71.976252 },
          { x: 927.03, y: 85.029346 },
          { x: 1317.83, y: 88.018529 },
          { x: 1729.43, y: 90.298047 },
          { x: 2154.87, y: 91.805682 },
          { x: 4206.96, y: 95.165196 },
          { x: 6225.44, y: 96.453831 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 379.91, y: 75.136991 },
          { x: 902.76, y: 87.284313 },
          { x: 1280.83, y: 90.17303 },
          { x: 1706.73, y: 92.061721 },
          { x: 2137.90, y: 93.285413 },
          { x: 4177.61, y: 95.914607 },
          { x: 6187.60, y: 96.933729 },
          { x: 8170.41, y: 97.4611 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.45, y: 76.829016 },
          { x: 924.89, y: 87.62815 },
          { x: 1309.25, y: 90.292551 },
          { x: 1742.44, y: 92.085929 },
          { x: 2173.34, y: 93.220693 },
          { x: 4212.10, y: 95.798155 },
          { x: 6237.29, y: 96.846258 },
          { x: 8171.43, y: 97.382915 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.38, y: 75.319163 },
          { x: 900.55, y: 87.547369 },
          { x: 1266.72, y: 90.378897 },
          { x: 1699.09, y: 92.30208 },
          { x: 2128.61, y: 93.524256 },
          { x: 4159.97, y: 96.184497 },
          { x: 6173.68, y: 97.17665 },
          { x: 8164.44, y: 97.705496 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.39, y: 76.950341 },
          { x: 920.27, y: 87.785958 },
          { x: 1298.67, y: 90.479316 },
          { x: 1739.16, y: 92.262297 },
          { x: 2166.52, y: 93.460205 },
          { x: 4207.09, y: 96.053674 },
          { x: 6228.73, y: 97.061827 },
          { x: 8166.96, y: 97.579094 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 673.36, y: 50.678864 },
          { x: 952.98, y: 75.328694 },
          { x: 1128.69, y: 81.160697 },
          { x: 2114.51, y: 90.850009 },
          { x: 4109.66, y: 95.061494 },
          { x: 7088.14, y: 96.91823 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 472.52, y: 58.996199 },
          { x: 869.26, y: 79.956575 },
          { x: 1112.70, y: 84.349772 },
          { x: 2120.48, y: 91.120138 },
          { x: 4133.98, y: 94.963023 },
          { x: 7088.82, y: 96.794454 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 731.91, y: 72.289717 },
          { x: 941.81, y: 83.791533 },
          { x: 1322.98, y: 88.668885 },
          { x: 2162.21, y: 92.420041 },
          { x: 4218.57, y: 95.526811 },
          { x: 7270.68, y: 96.997243 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 529.70, y: 71.513976 },
          { x: 931.36, y: 84.594449 },
          { x: 1321.59, y: 87.617693 },
          { x: 2155.24, y: 91.504581 },
          { x: 4187.46, y: 94.962669 },
          { x: 7190.83, y: 96.594554 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 725.10, y: 72.474454 },
          { x: 941.94, y: 84.176724 },
          { x: 1315.82, y: 88.982763 },
          { x: 2162.49, y: 92.773763 },
          { x: 4227.96, y: 95.826918 },
          { x: 7290.64, y: 97.264569 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 532.59, y: 71.747985 },
          { x: 928.25, y: 85.006389 },
          { x: 1316.67, y: 88.033825 },
          { x: 2154.52, y: 91.816945 },
          { x: 4205.13, y: 95.173198 },
          { x: 7222.40, y: 96.84192 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 314.38, y: 44.453188 },
          { x: 851.03, y: 77.035477 },
          { x: 1105.54, y: 82.310789 },
          { x: 1609.47, y: 87.383593 },
          { x: 2114.09, y: 90.138143 },
          { x: 4128.76, y: 94.583099 },
          { x: 6122.00, y: 96.180418 },
          { x: 8094.30, y: 97.001082 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.17, y: 56.130707 },
          { x: 845.70, y: 80.603475 },
          { x: 1098.30, y: 84.440104 },
          { x: 1600.09, y: 88.586572 },
          { x: 2104.45, y: 90.861798 },
          { x: 4111.71, y: 94.814971 },
          { x: 6083.36, y: 96.249302 },
          { x: 8055.71, y: 96.985909 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 367.15, y: 71.711987 },
          { x: 891.59, y: 85.346678 },
          { x: 1274.59, y: 88.510976 },
          { x: 1690.76, y: 90.541229 },
          { x: 2108.75, y: 91.883481 },
          { x: 4127.97, y: 94.965837 },
          { x: 6149.08, y: 96.222763 },
          { x: 8141.28, y: 96.90998 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.51, y: 72.549277 },
          { x: 899.36, y: 85.262934 },
          { x: 1276.43, y: 88.463843 },
          { x: 1697.73, y: 90.513336 },
          { x: 2111.79, y: 91.84049 },
          { x: 4139.33, y: 94.957499 },
          { x: 6140.02, y: 96.190899 },
          { x: 8155.26, y: 96.88653 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 383.62, y: 68.748205 },
          { x: 889.96, y: 84.019137 },
          { x: 1263.72, y: 87.72287 },
          { x: 1684.72, y: 90.047828 },
          { x: 2102.22, y: 91.553586 },
          { x: 4127.05, y: 94.969082 },
          { x: 6132.19, y: 96.331788 },
          { x: 8147.86, y: 97.07152 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.48, y: 68.98708 },
          { x: 897.60, y: 84.024338 },
          { x: 1276.12, y: 87.734277 },
          { x: 1691.21, y: 90.010861 },
          { x: 2120.32, y: 91.526258 },
          { x: 4137.68, y: 94.942881 },
          { x: 6148.77, y: 96.315951 },
          { x: 8149.62, y: 97.056624 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 656.22, y: 50.42095 },
          { x: 801.53, y: 57.384814 },
          { x: 1196.61, y: 68.580182 },
          { x: 1995.08, y: 78.681265 },
          { x: 3987.23, y: 88.638973 },
          { x: 6409.05, y: 92.887291 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.60, y: 38.380533 },
          { x: 799.39, y: 66.055287 },
          { x: 1198.28, y: 76.488572 },
          { x: 1997.30, y: 85.703637 },
          { x: 3996.62, y: 92.906687 },
          { x: 6982.99, y: 95.772733 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 410.03, y: 70.420285 },
          { x: 796.06, y: 78.661023 },
          { x: 1194.38, y: 82.748035 },
          { x: 1997.76, y: 87.52271 },
          { x: 3845.36, y: 92.053513 },
          { x: 5714.95, y: 94.187217 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.69, y: 67.620727 },
          { x: 819.80, y: 79.369982 },
          { x: 1220.45, y: 84.399143 },
          { x: 2018.18, y: 89.076961 },
          { x: 4012.48, y: 93.281933 },
          { x: 7005.77, y: 95.490164 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 399.56, y: 38.141937 },
          { x: 799.16, y: 64.403528 },
          { x: 1198.59, y: 75.935969 },
          { x: 1997.39, y: 85.517989 },
          { x: 3995.59, y: 93.011724 },
          { x: 6979.66, y: 95.880485 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.52, y: 38.1424 },
          { x: 799.40, y: 66.050006 },
          { x: 1198.35, y: 76.539563 },
          { x: 1997.35, y: 85.679172 },
          { x: 3996.77, y: 92.922071 },
          { x: 6983.03, y: 95.777653 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 423.56, y: 71.360876 },
          { x: 823.81, y: 81.859335 },
          { x: 1223.16, y: 86.13515 },
          { x: 2023.62, y: 90.149278 },
          { x: 4022.98, y: 93.975159 },
          { x: 6595.99, y: 95.860615 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.56, y: 71.360876 },
          { x: 823.81, y: 81.859335 },
          { x: 1223.16, y: 86.13515 },
          { x: 2023.62, y: 90.149278 },
          { x: 4022.98, y: 93.975159 },
          { x: 6595.99, y: 95.860615 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 501.12, y: 50.29851 },
          { x: 799.35, y: 63.059997 },
          { x: 1193.81, y: 72.671948 },
          { x: 1990.55, y: 80.304267 },
          { x: 3933.99, y: 88.731138 },
          { x: 6341.60, y: 92.496319 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.17, y: 49.476162 },
          { x: 804.02, y: 70.604726 },
          { x: 1202.39, y: 79.311711 },
          { x: 2001.65, y: 87.258374 },
          { x: 3628.80, y: 92.529717 },
          { x: 6351.55, y: 95.233216 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 418.49, y: 67.760719 },
          { x: 796.84, y: 77.557041 },
          { x: 1195.77, y: 81.932304 },
          { x: 1997.59, y: 86.832841 },
          { x: 3940.12, y: 92.475348 },
          { x: 5736.76, y: 94.822192 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 67.931242 },
          { x: 823.24, y: 79.928281 },
          { x: 1223.89, y: 85.101193 },
          { x: 2025.24, y: 89.881466 },
          { x: 4020.37, y: 93.940885 },
          { x: 7020.21, y: 95.999425 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 400.88, y: 39.453119 },
          { x: 800.71, y: 67.012888 },
          { x: 1199.68, y: 77.051515 },
          { x: 1599.82, y: 82.544641 },
          { x: 1998.46, y: 86.073282 },
          { x: 3996.60, y: 93.150161 },
          { x: 5993.80, y: 95.327517 },
          { x: 7997.74, y: 96.367102 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 400.86, y: 38.16693 },
          { x: 800.81, y: 66.020666 },
          { x: 1199.84, y: 76.519508 },
          { x: 1600.51, y: 82.046961 },
          { x: 1996.68, y: 85.677108 },
          { x: 3998.13, y: 92.91461 },
          { x: 5990.85, y: 95.155786 },
          { x: 7998.44, y: 96.231314 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 423.70, y: 71.708675 },
          { x: 823.32, y: 81.903886 },
          { x: 1222.48, y: 86.158606 },
          { x: 1621.91, y: 88.542391 },
          { x: 2022.27, y: 90.104193 },
          { x: 4013.96, y: 93.947735 },
          { x: 6023.83, y: 95.517108 },
          { x: 7094.63, y: 96.083365 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.70, y: 71.708675 },
          { x: 823.32, y: 81.903886 },
          { x: 1222.48, y: 86.158606 },
          { x: 1621.91, y: 88.542391 },
          { x: 2022.27, y: 90.104193 },
          { x: 4013.96, y: 93.947735 },
          { x: 6023.83, y: 95.517108 },
          { x: 7094.63, y: 96.083365 }
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

var ctx_t2_20241223_vbr_bitrate_fps_data = document.getElementById('chart_t2_20241223_vbr_bitrate_fps');
const chart_t2_20241223_vbr_bitrate_fps_data = new Chart(ctx_t2_20241223_vbr_bitrate_fps_data,
{
  type: 'scatter',
  parsing: false,
  normalized: true,
  data: {
    datasets: [
      {
        label: "Arc B580 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(31, 119, 179, 0.9)',
        data:[
          { x: 299.37, y: 195.24 },
          { x: 703.45, y: 197.41 },
          { x: 1078.87, y: 194.64 },
          { x: 1313.38, y: 194.46 },
          { x: 1667.47, y: 194.14 },
          { x: 3003.60, y: 192.69 },
          { x: 4256.26, y: 191.81 },
          { x: 5004.19, y: 191.87 }
        ]
      },
      {
        label: "Arc B580 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 103, 188, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 304.57, y: 537.38 },
          { x: 712.85, y: 539.87 },
          { x: 1093.35, y: 538.97 },
          { x: 1330.77, y: 540.00 },
          { x: 1678.95, y: 537.95 },
          { x: 3079.57, y: 533.41 },
          { x: 4370.98, y: 539.93 },
          { x: 5248.99, y: 540.12 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(22, 189, 207, 0.9)',
        data:[
          { x: 389.91, y: 310.47 },
          { x: 717.51, y: 310.45 },
          { x: 1035.86, y: 309.84 },
          { x: 1361.64, y: 309.76 },
          { x: 1699.43, y: 309.80 },
          { x: 3182.13, y: 310.11 },
          { x: 4170.92, y: 309.50 },
          { x: 4937.93, y: 310.11 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(58, 1, 130, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 388.60, y: 597.50 },
          { x: 720.68, y: 617.37 },
          { x: 1043.94, y: 597.35 },
          { x: 1378.31, y: 617.37 },
          { x: 1722.19, y: 596.80 },
          { x: 3201.70, y: 595.63 },
          { x: 4211.19, y: 594.46 },
          { x: 5003.70, y: 594.46 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 387.09, y: 241.23 },
          { x: 718.10, y: 239.12 },
          { x: 1033.50, y: 242.47 },
          { x: 1348.68, y: 235.82 },
          { x: 1697.45, y: 243.97 },
          { x: 3152.56, y: 240.55 },
          { x: 4099.02, y: 240.23 },
          { x: 4846.01, y: 239.05 }
        ]
      },
      {
        label: "Arc B580 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 77, 82, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.13, y: 240.52 },
          { x: 718.11, y: 243.26 },
          { x: 1041.66, y: 242.07 },
          { x: 1371.93, y: 243.22 },
          { x: 1695.64, y: 242.15 },
          { x: 3168.72, y: 240.92 },
          { x: 4137.91, y: 242.12 },
          { x: 4906.91, y: 243.13 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 38, 255, 0.9)',
        data:[
          { x: 421.31, y: 306.96 },
          { x: 809.13, y: 315.60 },
          { x: 1206.16, y: 315.84 },
          { x: 1601.77, y: 313.97 },
          { x: 2007.47, y: 317.16 },
          { x: 3975.60, y: 321.74 },
          { x: 5484.85, y: 328.28 },
          { x: 6646.03, y: 324.21 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(86, 73, 100, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.42, y: 562.98 },
          { x: 808.13, y: 561.24 },
          { x: 1203.14, y: 562.35 },
          { x: 1600.70, y: 565.78 },
          { x: 2004.25, y: 572.40 },
          { x: 3944.60, y: 580.51 },
          { x: 5460.26, y: 580.06 },
          { x: 6607.58, y: 580.51 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 251, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 420.35, y: 236.88 },
          { x: 809.75, y: 237.75 },
          { x: 1209.43, y: 238.93 },
          { x: 1606.82, y: 239.69 },
          { x: 2013.35, y: 240.12 },
          { x: 3995.01, y: 239.64 },
          { x: 5878.99, y: 240.02 },
          { x: 7571.76, y: 237.59 }
        ]
      },
      {
        label: "Arc B580 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(1, 130, 103, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 421.66, y: 239.84 },
          { x: 809.52, y: 239.89 },
          { x: 1206.21, y: 240.32 },
          { x: 1604.92, y: 239.61 },
          { x: 2011.72, y: 240.13 },
          { x: 3987.09, y: 238.38 },
          { x: 5862.93, y: 239.88 },
          { x: 7537.35, y: 239.35 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(130, 0, 160, 0.9)',
        data:[
          { x: 358.35, y: 318.18 },
          { x: 791.28, y: 334.21 },
          { x: 1233.59, y: 334.39 },
          { x: 1532.59, y: 332.97 },
          { x: 1970.31, y: 336.59 },
          { x: 3727.95, y: 344.46 },
          { x: 5591.83, y: 344.54 },
          { x: 6711.49, y: 343.73 }
        ]
      },
      {
        label: "Arc A380 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 140, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 359.65, y: 458.21 },
          { x: 793.76, y: 483.63 },
          { x: 1229.10, y: 478.34 },
          { x: 1519.94, y: 484.20 },
          { x: 1959.66, y: 484.66 },
          { x: 3736.72, y: 497.05 },
          { x: 5592.97, y: 499.01 },
          { x: 6753.66, y: 499.62 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(221, 0, 255, 0.9)',
        data:[
          { x: 393.89, y: 280.93 },
          { x: 780.56, y: 280.45 },
          { x: 1134.53, y: 279.54 },
          { x: 1508.09, y: 279.86 },
          { x: 1839.24, y: 277.56 },
          { x: 3224.38, y: 279.06 },
          { x: 4345.96, y: 277.00 },
          { x: 5063.89, y: 278.42 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 68, 137, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.14, y: 528.09 },
          { x: 783.03, y: 530.06 },
          { x: 1145.67, y: 529.56 },
          { x: 1507.03, y: 529.25 },
          { x: 1835.42, y: 529.25 },
          { x: 3223.18, y: 529.13 },
          { x: 4365.71, y: 527.72 },
          { x: 5117.28, y: 526.68 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(205, 135, 255, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 393.03, y: 196.37 },
          { x: 776.47, y: 195.90 },
          { x: 1133.19, y: 195.83 },
          { x: 1492.36, y: 195.68 },
          { x: 1816.84, y: 195.61 },
          { x: 3174.86, y: 195.51 },
          { x: 4266.91, y: 195.40 },
          { x: 4950.87, y: 195.25 }
        ]
      },
      {
        label: "Arc A380 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(121, 151, 181, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.52, y: 264.92 },
          { x: 778.99, y: 264.73 },
          { x: 1141.59, y: 264.84 },
          { x: 1492.12, y: 264.98 },
          { x: 1822.00, y: 264.70 },
          { x: 3181.57, y: 264.58 },
          { x: 4300.43, y: 264.58 },
          { x: 5010.03, y: 264.47 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 172, 255, 0.9)',
        data:[
          { x: 412.69, y: 282.71 },
          { x: 802.79, y: 285.64 },
          { x: 1173.30, y: 288.28 },
          { x: 1563.16, y: 287.87 },
          { x: 1982.86, y: 291.22 },
          { x: 3868.66, y: 292.94 },
          { x: 5535.09, y: 294.56 },
          { x: 6771.88, y: 292.76 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(142, 212, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 413.88, y: 524.01 },
          { x: 800.16, y: 531.29 },
          { x: 1169.71, y: 536.81 },
          { x: 1559.81, y: 540.70 },
          { x: 1972.74, y: 544.58 },
          { x: 3884.77, y: 543.74 },
          { x: 5519.64, y: 548.85 },
          { x: 6766.29, y: 549.78 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(75, 109, 119, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 414.47, y: 195.61 },
          { x: 807.88, y: 197.10 },
          { x: 1188.01, y: 197.99 },
          { x: 1586.50, y: 199.76 },
          { x: 1991.98, y: 200.22 },
          { x: 3920.48, y: 200.92 },
          { x: 5700.81, y: 200.86 },
          { x: 7326.44, y: 201.06 }
        ]
      },
      {
        label: "Arc A380 QSV VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 212, 177, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 415.28, y: 264.98 },
          { x: 804.46, y: 266.67 },
          { x: 1179.61, y: 267.71 },
          { x: 1581.73, y: 268.44 },
          { x: 1986.76, y: 269.39 },
          { x: 3915.94, y: 270.25 },
          { x: 5701.61, y: 269.74 },
          { x: 7334.64, y: 270.51 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(147, 0, 242, 0.9)',
        data:[
          { x: 1074.79, y: 269.84 },
          { x: 1074.79, y: 270.13 },
          { x: 1201.99, y: 268.60 },
          { x: 1601.82, y: 265.01 },
          { x: 2001.59, y: 260.60 },
          { x: 4003.24, y: 242.18 },
          { x: 6005.25, y: 230.80 },
          { x: 8006.48, y: 222.91 }
        ]
      },
      {
        label: "i9 12900K QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 91, 158, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 353.51 },
          { x: 1075.19, y: 359.68 },
          { x: 1202.07, y: 358.01 },
          { x: 1601.91, y: 350.81 },
          { x: 2001.77, y: 351.73 },
          { x: 4003.00, y: 336.02 },
          { x: 6002.64, y: 328.78 },
          { x: 8006.43, y: 321.99 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 147, 158, 0.9)',
        data:[
          { x: 391.34, y: 329.02 },
          { x: 776.36, y: 329.85 },
          { x: 1142.81, y: 329.16 },
          { x: 1511.45, y: 328.95 },
          { x: 1841.88, y: 327.86 },
          { x: 3222.79, y: 326.94 },
          { x: 4400.21, y: 324.26 },
          { x: 5087.48, y: 323.82 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 170, 121, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.53, y: 406.72 },
          { x: 777.98, y: 410.28 },
          { x: 1147.09, y: 410.98 },
          { x: 1514.13, y: 409.36 },
          { x: 1858.75, y: 409.61 },
          { x: 3234.07, y: 408.11 },
          { x: 4424.59, y: 407.45 },
          { x: 5109.40, y: 407.78 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(82, 0, 103, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 391.44, y: 261.04 },
          { x: 772.06, y: 261.34 },
          { x: 1128.88, y: 264.27 },
          { x: 1493.72, y: 260.60 },
          { x: 1821.60, y: 264.46 },
          { x: 3173.78, y: 262.91 },
          { x: 4318.28, y: 259.54 },
          { x: 4960.39, y: 260.22 }
        ]
      },
      {
        label: "i9 12900K QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 0, 145, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.14, y: 276.61 },
          { x: 774.24, y: 279.38 },
          { x: 1135.24, y: 279.04 },
          { x: 1504.80, y: 272.86 },
          { x: 1831.87, y: 279.57 },
          { x: 3192.01, y: 274.71 },
          { x: 4337.38, y: 273.45 },
          { x: 4987.86, y: 277.98 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(96, 43, 165, 0.9)',
        data:[
          { x: 1074.85, y: 114.53 },
          { x: 1074.85, y: 128.22 },
          { x: 1202.01, y: 131.25 },
          { x: 2001.74, y: 129.15 },
          { x: 4003.35, y: 124.36 },
          { x: 7007.61, y: 119.80 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 0, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.19, y: 153.34 },
          { x: 1075.19, y: 155.26 },
          { x: 1202.07, y: 158.32 },
          { x: 2001.77, y: 159.07 },
          { x: 4003.00, y: 156.29 },
          { x: 7006.69, y: 158.81 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(170, 59, 175, 0.9)',
        data:[
          { x: 392.67, y: 177.95 },
          { x: 783.36, y: 172.80 },
          { x: 1169.48, y: 193.58 },
          { x: 1908.49, y: 177.72 },
          { x: 3341.74, y: 180.09 },
          { x: 5134.38, y: 182.05 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(63, 105, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 391.51, y: 320.99 },
          { x: 782.31, y: 315.60 },
          { x: 1164.39, y: 320.29 },
          { x: 1809.83, y: 322.08 },
          { x: 3236.31, y: 321.33 },
          { x: 4666.34, y: 325.56 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(123, 105, 133, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 392.80, y: 122.44 },
          { x: 782.71, y: 107.67 },
          { x: 1166.54, y: 99.68 },
          { x: 1889.05, y: 95.24 },
          { x: 3295.27, y: 94.37 },
          { x: 5060.68, y: 93.83 }
        ]
      },
      {
        label: "i5 1035G7 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 151, 140, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 391.76, y: 108.31 },
          { x: 781.65, y: 108.83 },
          { x: 1158.07, y: 108.38 },
          { x: 1787.18, y: 106.58 },
          { x: 3195.53, y: 106.49 },
          { x: 4570.60, y: 106.87 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(131, 91, 255, 0.9)',
        data:[
          { x: 1074.79, y: 221.24 },
          { x: 1074.79, y: 224.04 },
          { x: 1202.02, y: 219.30 },
          { x: 1601.61, y: 221.30 },
          { x: 2001.64, y: 218.25 },
          { x: 4003.49, y: 206.99 },
          { x: 6004.81, y: 201.15 },
          { x: 8005.88, y: 196.81 }
        ]
      },
      {
        label: "i5 7500 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(253, 147, 255, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1075.08, y: 273.54 },
          { x: 1075.08, y: 273.49 },
          { x: 1202.04, y: 272.54 },
          { x: 1601.84, y: 273.08 },
          { x: 2001.81, y: 263.05 },
          { x: 4003.27, y: 267.46 },
          { x: 6003.83, y: 260.92 },
          { x: 8006.84, y: 260.55 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC quality",
        showLine: true,
        pointStyle: "star",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(137, 209, 209, 0.9)',
        data:[
          { x: 369.79, y: 38.75 },
          { x: 739.97, y: 38.46 },
          { x: 1106.65, y: 38.16 },
          { x: 1471.53, y: 37.85 },
          { x: 1846.08, y: 37.57 },
          { x: 3513.02, y: 36.74 },
          { x: 5344.52, y: 36.15 },
          { x: 7069.30, y: 35.10 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(156, 140, 211, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 371.07, y: 81.04 },
          { x: 740.01, y: 80.42 },
          { x: 1107.53, y: 79.96 },
          { x: 1469.57, y: 78.79 },
          { x: 1837.48, y: 78.99 },
          { x: 3508.58, y: 77.77 },
          { x: 5343.35, y: 77.03 },
          { x: 7052.20, y: 76.42 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(59, 80, 105, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 370.34, y: 35.42 },
          { x: 732.54, y: 35.06 },
          { x: 1105.05, y: 34.76 },
          { x: 1467.26, y: 34.43 },
          { x: 1812.30, y: 34.13 },
          { x: 3511.21, y: 33.31 },
          { x: 5343.83, y: 32.95 },
          { x: 7023.42, y: 32.50 }
        ]
      },
      {
        label: "i5 7500 QSV VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "star",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(112, 124, 184, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 371.56, y: 69.49 },
          { x: 739.56, y: 68.96 },
          { x: 1108.77, y: 67.89 },
          { x: 1472.71, y: 67.81 },
          { x: 1820.10, y: 66.90 },
          { x: 3517.20, y: 65.53 },
          { x: 5342.60, y: 65.31 },
          { x: 6979.86, y: 64.27 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "triangle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 228, 253, 0.9)',
        data:[
          { x: 1073.64, y: 104.92 },
          { x: 1073.64, y: 106.03 },
          { x: 1200.78, y: 103.49 },
          { x: 1999.82, y: 102.90 },
          { x: 4001.05, y: 97.10 },
          { x: 7002.88, y: 92.43 }
        ]
      },
      {
        label: "i5 5500u QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "triangle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(119, 75, 149, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.97, y: 221.59 },
          { x: 1072.97, y: 219.15 },
          { x: 1199.94, y: 218.40 },
          { x: 1999.90, y: 212.58 },
          { x: 4000.84, y: 212.42 },
          { x: 7001.13, y: 215.27 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(61, 58, 114, 0.9)',
        data:[
          { x: 1073.07, y: 112.66 },
          { x: 1073.07, y: 114.71 },
          { x: 1199.86, y: 112.03 },
          { x: 1600.82, y: 110.48 },
          { x: 1999.87, y: 111.09 },
          { x: 4000.29, y: 105.43 },
          { x: 5999.91, y: 100.32 },
          { x: 8003.75, y: 98.67 }
        ]
      },
      {
        label: "i3 4170 QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(193, 105, 205, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 1072.93, y: 207.70 },
          { x: 1072.93, y: 206.95 },
          { x: 1199.95, y: 191.64 },
          { x: 1600.08, y: 209.97 },
          { x: 2000.03, y: 202.84 },
          { x: 4001.04, y: 204.15 },
          { x: 6002.80, y: 152.52 },
          { x: 8003.05, y: 150.33 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 quality",
        showLine: true,
        pointStyle: "circle",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(135, 172, 237, 0.9)',
        data:[
          { x: 880.71, y: 109.74 },
          { x: 880.71, y: 109.51 },
          { x: 1013.54, y: 109.28 },
          { x: 1772.45, y: 109.49 },
          { x: 3577.15, y: 109.75 },
          { x: 5998.63, y: 109.63 }
        ]
      },
      {
        label: "i5 2410m QSV VBR H.264 normal",
        showLine: true,
        pointStyle: "circle",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(209, 170, 230, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 880.75, y: 165.53 },
          { x: 880.75, y: 164.92 },
          { x: 1014.79, y: 165.08 },
          { x: 1763.79, y: 163.70 },
          { x: 3549.50, y: 162.14 },
          { x: 5973.75, y: 159.03 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(43, 160, 43, 0.9)',
        data:[
          { x: 654.90, y: 242.94 },
          { x: 956.02, y: 241.44 },
          { x: 1119.60, y: 238.33 },
          { x: 1612.85, y: 227.51 },
          { x: 2116.43, y: 238.08 },
          { x: 4119.49, y: 238.39 },
          { x: 6097.63, y: 236.14 },
          { x: 8064.90, y: 234.02 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 188, 33, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 486.92, y: 476.79 },
          { x: 868.11, y: 476.89 },
          { x: 1112.27, y: 478.14 },
          { x: 1614.77, y: 477.94 },
          { x: 2120.54, y: 478.65 },
          { x: 4130.98, y: 479.76 },
          { x: 6106.60, y: 476.94 },
          { x: 8044.22, y: 478.39 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(0, 66, 1, 0.9)',
        data:[
          { x: 723.20, y: 140.22 },
          { x: 939.61, y: 140.32 },
          { x: 1323.37, y: 140.53 },
          { x: 1737.15, y: 140.35 },
          { x: 2160.72, y: 139.95 },
          { x: 4219.87, y: 140.37 },
          { x: 6257.86, y: 140.14 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(15, 255, 168, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 532.92, y: 465.19 },
          { x: 930.11, y: 466.14 },
          { x: 1320.86, y: 467.77 },
          { x: 1730.89, y: 467.53 },
          { x: 2154.46, y: 469.07 },
          { x: 4189.68, y: 466.52 },
          { x: 6209.32, y: 468.69 },
          { x: 8161.33, y: 467.77 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(107, 100, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 727.13, y: 144.36 },
          { x: 946.41, y: 144.18 },
          { x: 1317.39, y: 144.21 },
          { x: 1735.93, y: 144.05 },
          { x: 2162.77, y: 144.06 },
          { x: 4224.83, y: 143.79 },
          { x: 6265.23, y: 143.84 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 184, 147, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 533.95, y: 316.24 },
          { x: 927.03, y: 317.78 },
          { x: 1317.83, y: 316.87 },
          { x: 1729.43, y: 318.45 },
          { x: 2154.87, y: 319.84 },
          { x: 4206.96, y: 314.44 },
          { x: 6225.44, y: 314.34 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(144, 255, 0, 0.9)',
        data:[
          { x: 379.91, y: 210.55 },
          { x: 902.76, y: 210.84 },
          { x: 1280.83, y: 210.17 },
          { x: 1706.73, y: 209.50 },
          { x: 2137.90, y: 208.71 },
          { x: 4177.61, y: 205.21 },
          { x: 6187.60, y: 201.37 },
          { x: 8170.41, y: 196.87 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(172, 137, 68, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 392.45, y: 558.35 },
          { x: 924.89, y: 565.15 },
          { x: 1309.25, y: 566.41 },
          { x: 1742.44, y: 563.68 },
          { x: 2173.34, y: 561.38 },
          { x: 4212.10, y: 563.40 },
          { x: 6237.29, y: 561.94 },
          { x: 8171.43, y: 560.48 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit quality",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(91, 52, 0, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 376.38, y: 210.51 },
          { x: 900.55, y: 210.37 },
          { x: 1266.72, y: 210.44 },
          { x: 1699.09, y: 209.25 },
          { x: 2128.61, y: 208.52 },
          { x: 4159.97, y: 205.97 },
          { x: 6173.68, y: 203.24 },
          { x: 8164.44, y: 200.41 }
        ]
      },
      {
        label: "rtx4080 NVENC VBR AV1 10bit normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 96, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 392.39, y: 322.92 },
          { x: 920.27, y: 319.10 },
          { x: 1298.67, y: 316.24 },
          { x: 1739.16, y: 318.54 },
          { x: 2166.52, y: 316.74 },
          { x: 4207.09, y: 314.07 },
          { x: 6228.73, y: 314.94 },
          { x: 8166.96, y: 312.29 }
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
        borderColor: 'rgba(1, 112, 0, 0.9)',
        data:[
          { x: 673.36, y: 192.10 },
          { x: 952.98, y: 191.94 },
          { x: 1128.69, y: 189.59 },
          { x: 2114.51, y: 189.70 },
          { x: 4109.66, y: 189.99 },
          { x: 7088.14, y: 186.03 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(28, 214, 70, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 472.52, y: 418.54 },
          { x: 869.26, y: 417.70 },
          { x: 1112.70, y: 419.47 },
          { x: 2120.48, y: 419.78 },
          { x: 4133.98, y: 420.21 },
          { x: 7088.82, y: 419.90 }
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
        borderColor: 'rgba(110, 137, 86, 0.9)',
        data:[
          { x: 731.91, y: 112.94 },
          { x: 941.81, y: 113.08 },
          { x: 1322.98, y: 113.13 },
          { x: 2162.21, y: 113.01 },
          { x: 4218.57, y: 113.14 },
          { x: 7270.68, y: 112.94 }
        ]
      },
      {
        label: "rtx2070 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 149, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 529.70, y: 394.55 },
          { x: 931.36, y: 390.96 },
          { x: 1321.59, y: 390.46 },
          { x: 2155.24, y: 388.06 },
          { x: 4187.46, y: 386.94 },
          { x: 7190.83, y: 386.41 }
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
        borderColor: 'rgba(253, 223, 186, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 725.10, y: 115.07 },
          { x: 941.94, y: 115.04 },
          { x: 1315.82, y: 114.96 },
          { x: 2162.49, y: 114.90 },
          { x: 4227.96, y: 114.82 },
          { x: 7290.64, y: 114.58 }
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
        borderColor: 'rgba(255, 219, 0, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 532.59, y: 267.16 },
          { x: 928.25, y: 265.90 },
          { x: 1316.67, y: 264.86 },
          { x: 2154.52, y: 268.36 },
          { x: 4205.13, y: 266.85 },
          { x: 7222.40, y: 266.08 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(10, 93, 61, 0.9)',
        data:[
          { x: 314.38, y: 228.85 },
          { x: 851.03, y: 221.17 },
          { x: 1105.54, y: 219.18 },
          { x: 1609.47, y: 216.79 },
          { x: 2114.09, y: 214.96 },
          { x: 4128.76, y: 210.39 },
          { x: 6122.00, y: 207.14 },
          { x: 8094.30, y: 204.72 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 226, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 302.17, y: 337.04 },
          { x: 845.70, y: 333.04 },
          { x: 1098.30, y: 332.02 },
          { x: 1600.09, y: 330.98 },
          { x: 2104.45, y: 330.64 },
          { x: 4111.71, y: 327.57 },
          { x: 6083.36, y: 325.14 },
          { x: 8055.71, y: 324.12 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(198, 198, 137, 0.9)',
        data:[
          { x: 367.15, y: 226.59 },
          { x: 891.59, y: 211.33 },
          { x: 1274.59, y: 202.61 },
          { x: 1690.76, y: 193.14 },
          { x: 2108.75, y: 185.56 },
          { x: 4127.97, y: 160.08 },
          { x: 6149.08, y: 141.70 },
          { x: 8141.28, y: 131.68 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 156, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 386.51, y: 432.10 },
          { x: 899.36, y: 434.74 },
          { x: 1276.43, y: 435.03 },
          { x: 1697.73, y: 436.12 },
          { x: 2111.79, y: 434.78 },
          { x: 4139.33, y: 426.47 },
          { x: 6140.02, y: 415.07 },
          { x: 8155.26, y: 407.09 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit quality",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(70, 73, 12, 0.9)',
        borderDash: [12,2],
        data:[
          { x: 383.62, y: 217.03 },
          { x: 889.96, y: 206.38 },
          { x: 1263.72, y: 199.33 },
          { x: 1684.72, y: 191.72 },
          { x: 2102.22, y: 185.99 },
          { x: 4127.05, y: 166.19 },
          { x: 6132.19, y: 152.78 },
          { x: 8147.86, y: 144.71 }
        ]
      },
      {
        label: "gtx1080 NVENC VBR HEVC 10bit normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 107, 70, 0.9)',
        borderDash: [3,1],
        data:[
          { x: 390.48, y: 305.96 },
          { x: 897.60, y: 304.84 },
          { x: 1276.12, y: 307.87 },
          { x: 1691.21, y: 304.96 },
          { x: 2120.32, y: 304.88 },
          { x: 4137.68, y: 303.62 },
          { x: 6148.77, y: 287.07 },
          { x: 8149.62, y: 296.30 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 126, 14, 0.9)',
        data:[
          { x: 656.22, y: 95.76 },
          { x: 801.53, y: 96.32 },
          { x: 1196.61, y: 96.24 },
          { x: 1995.08, y: 96.35 },
          { x: 3987.23, y: 95.98 },
          { x: 6409.05, y: 96.04 }
        ]
      },
      {
        label: "rx5500xt VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(214, 38, 40, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.60, y: 201.60 },
          { x: 799.39, y: 201.68 },
          { x: 1198.28, y: 201.34 },
          { x: 1997.30, y: 201.76 },
          { x: 3996.62, y: 201.27 },
          { x: 6982.99, y: 201.64 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "cross",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(140, 86, 75, 0.9)',
        data:[
          { x: 410.03, y: 117.73 },
          { x: 796.06, y: 117.73 },
          { x: 1194.38, y: 117.74 },
          { x: 1997.76, y: 117.04 },
          { x: 3845.36, y: 117.44 },
          { x: 5714.95, y: 117.52 }
        ]
      },
      {
        label: "rx5500xt VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "cross",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(226, 119, 193, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 421.69, y: 211.18 },
          { x: 819.80, y: 210.66 },
          { x: 1220.45, y: 210.54 },
          { x: 2018.18, y: 210.53 },
          { x: 4012.48, y: 209.80 },
          { x: 7005.77, y: 208.16 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(93, 0, 63, 0.9)',
        data:[
          { x: 399.56, y: 42.87 },
          { x: 799.16, y: 42.88 },
          { x: 1198.59, y: 42.87 },
          { x: 1997.39, y: 42.87 },
          { x: 3995.59, y: 42.86 },
          { x: 6979.66, y: 42.83 }
        ]
      },
      {
        label: "rx550 VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(216, 175, 161, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 399.52, y: 81.82 },
          { x: 799.40, y: 81.94 },
          { x: 1198.35, y: 81.99 },
          { x: 1997.35, y: 81.96 },
          { x: 3996.77, y: 81.71 },
          { x: 6983.03, y: 81.46 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "crossRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(184, 0, 128, 0.9)',
        data:[
          { x: 423.56, y: 81.27 },
          { x: 823.81, y: 81.22 },
          { x: 1223.16, y: 81.15 },
          { x: 2023.62, y: 81.32 },
          { x: 4022.98, y: 81.69 },
          { x: 6595.99, y: 82.18 }
        ]
      },
      {
        label: "rx550 VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "crossRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(124, 1, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.56, y: 81.17 },
          { x: 823.81, y: 81.16 },
          { x: 1223.16, y: 81.10 },
          { x: 2023.62, y: 81.32 },
          { x: 4022.98, y: 81.69 },
          { x: 6595.99, y: 82.13 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 191, 242, 0.9)',
        data:[
          { x: 501.12, y: 51.01 },
          { x: 799.35, y: 50.94 },
          { x: 1193.81, y: 51.02 },
          { x: 1990.55, y: 51.01 },
          { x: 3933.99, y: 50.99 },
          { x: 6341.60, y: 50.91 }
        ]
      },
      {
        label: "r9 9950X VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 110, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 402.17, y: 133.50 },
          { x: 804.02, y: 133.44 },
          { x: 1202.39, y: 133.28 },
          { x: 2001.65, y: 133.03 },
          { x: 3628.80, y: 132.75 },
          { x: 6351.55, y: 132.60 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rect",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(255, 1, 140, 0.9)',
        data:[
          { x: 418.49, y: 49.77 },
          { x: 796.84, y: 49.80 },
          { x: 1195.77, y: 49.89 },
          { x: 1997.59, y: 49.90 },
          { x: 3940.12, y: 49.81 },
          { x: 5736.76, y: 49.51 }
        ]
      },
      {
        label: "r9 9950X VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rect",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(182, 86, 0, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 422.54, y: 211.23 },
          { x: 823.24, y: 210.96 },
          { x: 1223.89, y: 211.82 },
          { x: 2025.24, y: 210.20 },
          { x: 4020.37, y: 210.15 },
          { x: 7020.21, y: 209.50 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(165, 96, 137, 0.9)',
        data:[
          { x: 400.88, y: 74.98 },
          { x: 800.71, y: 75.04 },
          { x: 1199.68, y: 75.00 },
          { x: 1599.82, y: 75.12 },
          { x: 1998.46, y: 75.01 },
          { x: 3996.60, y: 75.02 },
          { x: 5993.80, y: 75.08 },
          { x: 7997.74, y: 75.06 }
        ]
      },
      {
        label: "r3 3200G VCE VBR H.264 normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(188, 124, 117, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 400.86, y: 119.66 },
          { x: 800.81, y: 119.88 },
          { x: 1199.84, y: 119.75 },
          { x: 1600.51, y: 119.76 },
          { x: 1996.68, y: 119.78 },
          { x: 3998.13, y: 119.71 },
          { x: 5990.85, y: 119.63 },
          { x: 7998.44, y: 119.68 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC quality",
        showLine: true,
        pointStyle: "rectRot",
        hidden: false,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(138, 40, 68, 0.9)',
        data:[
          { x: 423.70, y: 132.92 },
          { x: 823.32, y: 133.11 },
          { x: 1222.48, y: 133.20 },
          { x: 1621.91, y: 133.13 },
          { x: 2022.27, y: 133.23 },
          { x: 4013.96, y: 132.43 },
          { x: 6023.83, y: 131.75 },
          { x: 7094.63, y: 131.63 }
        ]
      },
      {
        label: "r3 3200G VCE VBR HEVC normal",
        showLine: true,
        pointStyle: "rectRot",
        hidden: true,
        lineTension: 0.4,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        borderColor: 'rgba(98, 59, 65, 0.9)',
        borderDash: [4,2],
        data:[
          { x: 423.70, y: 132.97 },
          { x: 823.32, y: 133.14 },
          { x: 1222.48, y: 133.18 },
          { x: 1621.91, y: 133.11 },
          { x: 2022.27, y: 133.07 },
          { x: 4013.96, y: 132.37 },
          { x: 6023.83, y: 131.98 },
          { x: 7094.63, y: 131.77 }
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

