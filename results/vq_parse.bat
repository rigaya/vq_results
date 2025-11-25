@echo off
del vq_results.js
del vq_results_data.js

vq_parse.py -o vq_results.js -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+normal" ^
  -dashed "+10bit" ^
  -dotted "+normal" ^
  -dotted "+P6" ^
  -dotted "+P8" ^
  -dotted "+P10" ^
  -dotted "+medium" ^
  -replace " Bframe=0 ," ^
  -replace " QSVEncC , QSV " ^
  -replace " NVEncC , NVENC " ^
  -replace " VCEEncC , VCE " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  -replace " FF , " ^
  ",ssim1_log_RIGAYA9-PC_x264.txt" ^
  ",ssim1_log_RIGAYA9-PC_x265.txt" ^
  ",ssim1_log_RIGAYA7-PC_svtav1.txt" ^
  ",ssim1_log_RIGAYA9-PC_9950x_vvenc.txt" ^
  "u7 258v,ssim1_log_RIGAYA9-PC_258v.txt" ^
  "u5 245k,ssim1_log_RIGAYA9-PC_245k.txt" ^
  "Arc B580,ssim1_log_RIGAYA10-PC_b580.txt" ^
  "Arc A380,ssim1_log_RIGAYA2-PC_a380.txt" ^
  "i9 12900K,ssim1_log_RIGAYA2-PC_i9_12900k.txt" ^
  "i3 N305,ssim1_log_RIGAYA10-PC_n305.txt" ^
  "i5 7500,ssim1_log_RIGAYA10-PC_7500.txt" ^
  "i5 5500u,ssim1_log_RIGAYA9-PC_5500u.txt" ^
  "i3 4170,ssim1_log_RIGAYA9-PC_4170.txt" ^
  "i5 2410m,ssim1_log_RIGAYA10-PC_2410m.txt" ^
  "rtx5050,ssim1_log_RIGAYA2-PC_rtx5050.txt" ^
  "rtx4080,ssim1_log_RIGAYA10-PC_rtx4080.txt" ^
  "rtx2070,ssim1_log_RIGAYA2-PC_rtx2070.txt" ^
  "gtx1080,ssim1_log_RIGAYA8-PC_gtx1080.txt" ^
  "gtx950,ssim1_log_RIGAYA7-PC_gt950.txt" ^
  "rx7900xt,ssim1_log_RIGAYA10-PC_rx7900xt.txt" ^
  "rx5500xt,ssim1_log_RIGAYA10-PC_rx5500xt.txt" ^
  "rx550,ssim1_log_RIGAYA10-PC_rx550.txt" ^
  "r9 9950x igpu,ssim1_log_RIGAYA9-PC_9950x_iGPU.txt" ^
  "ai7 350 igpu,ssim1_log_RIGAYA10-PC_ai350.txt" ^
  "r3 3200G,ssim1_log_RIGAYA10-PC_3200g.txt"

  REM -color "QSVEncC,180-285" ^
  REM -color "NVEncC,40-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim1_log_RIGAYA7-PC_x264_x265_2028_20221031_175810.txt" ^
  REM ",ssim1_log_RIGAYA7-PC_svtav1_20221212_124709.txt" ^
  REM "i9 12900K,ssim1_i9_12900K_log_RIGAYA2-PC_11256_20241215_082308.txt" ^
  REM "i7 10700K,ssim1_i7_10700K_log_RIGAYA8-PC_3976_20241216_082118.txt" ^

vq_parse.py -o vq_results.js -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 -vbr ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+normal" ^
  -dashed "+10bit" ^
  -dotted "+normal" ^
  -dotted "+P6" ^
  -dotted "+P8" ^
  -dotted "+P10" ^
  -dotted "+medium" ^
  -replace " Bframe=0 ," ^
  -replace " QSVEncC , QSV " ^
  -replace " NVEncC , NVENC " ^
  -replace " VCEEncC , VCE " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  -replace " FF , " ^
  ",ssim1_log_RIGAYA9-PC_x264.txt" ^
  ",ssim1_log_RIGAYA9-PC_x265.txt" ^
  ",ssim1_log_RIGAYA7-PC_svtav1.txt" ^
  ",ssim1_log_RIGAYA9-PC_9950x_vvenc.txt" ^
  "u7 258v,ssim1_log_RIGAYA9-PC_258v.txt" ^
  "u5 245k,ssim1_log_RIGAYA9-PC_245k.txt" ^
  "Arc B580,ssim1_log_RIGAYA10-PC_b580.txt" ^
  "Arc A380,ssim1_log_RIGAYA2-PC_a380.txt" ^
  "i9 12900K,ssim1_log_RIGAYA2-PC_i9_12900k.txt" ^
  "i3 N305,ssim1_log_RIGAYA10-PC_n305.txt" ^
  "i5 7500,ssim1_log_RIGAYA10-PC_7500.txt" ^
  "i5 5500u,ssim1_log_RIGAYA9-PC_5500u.txt" ^
  "i3 4170,ssim1_log_RIGAYA9-PC_4170.txt" ^
  "i5 2410m,ssim1_log_RIGAYA10-PC_2410m.txt" ^
  "rtx5050,ssim1_log_RIGAYA2-PC_rtx5050.txt" ^
  "rtx4080,ssim1_log_RIGAYA10-PC_rtx4080.txt" ^
  "rtx2070,ssim1_log_RIGAYA2-PC_rtx2070.txt" ^
  "gtx1080,ssim1_log_RIGAYA8-PC_gtx1080.txt" ^
  "gtx950,ssim1_log_RIGAYA7-PC_gt950.txt" ^
  "rx7900xt,ssim1_log_RIGAYA10-PC_rx7900xt.txt" ^
  "rx5500xt,ssim1_log_RIGAYA10-PC_rx5500xt.txt" ^
  "rx550,ssim1_log_RIGAYA10-PC_rx550.txt" ^
  "r9 9950x igpu,ssim1_log_RIGAYA9-PC_9950x_iGPU.txt" ^
  "ai7 350 igpu,ssim1_log_RIGAYA10-PC_ai350.txt" ^
  "r3 3200G,ssim1_log_RIGAYA10-PC_3200g.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim1_log_RIGAYA7-PC_x264_x265_2028_20221031_175810.txt" ^
  REM ",ssim1_log_RIGAYA7-PC_svtav1_20221212_124709.txt" ^
  REM "i9 12900K,ssim1_i9_12900K_log_RIGAYA2-PC_11256_20241215_082308.txt" ^

vq_parse.py -o vq_results.js -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+normal" ^
  -dashed "+10bit" ^
  -dotted "+normal" ^
  -dotted "+P6" ^
  -dotted "+P8" ^
  -dotted "+P10" ^
  -dotted "+medium" ^
  -replace " Bframe=0 ," ^
  -replace " QSVEncC , QSV " ^
  -replace " NVEncC , NVENC " ^
  -replace " VCEEncC , VCE " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  -replace " FF , " ^
  ",ssim2_log_RIGAYA9-PC_x264.txt" ^
  ",ssim2_log_RIGAYA9-PC_x265.txt" ^
  ",ssim2_log_RIGAYA7-PC_svtav1.txt" ^
  ",ssim2_log_RIGAYA9-PC_9950x_vvenc.txt" ^
  "u7 258v,ssim2_log_RIGAYA9-PC_258v.txt" ^
  "u5 245k,ssim2_log_RIGAYA9-PC_245k.txt" ^
  "Arc B580,ssim2_log_RIGAYA10-PC_b580.txt" ^
  "Arc A380,ssim2_log_RIGAYA2-PC_a380.txt" ^
  "i9 12900K,ssim2_log_RIGAYA2-PC_i9_12900k.txt" ^
  "i3 N305,ssim2_log_RIGAYA10-PC_n305.txt" ^
  "i5 7500,ssim2_log_RIGAYA10-PC_7500.txt" ^
  "i5 5500u,ssim2_log_RIGAYA9-PC_5500u.txt" ^
  "i3 4170,ssim2_log_RIGAYA9-PC_4170.txt" ^
  "i5 2410m,ssim2_log_RIGAYA10-PC_2410m.txt" ^
  "rtx5050,ssim2_log_RIGAYA2-PC_rtx5050.txt" ^
  "rtx4080,ssim2_log_RIGAYA10-PC_rtx4080.txt" ^
  "rtx2070,ssim2_log_RIGAYA2-PC_rtx2070.txt" ^
  "gtx1080,ssim2_log_RIGAYA8-PC_gtx1080.txt" ^
  "gtx950,ssim2_log_RIGAYA7-PC_gt950.txt" ^
  "rx7900xt,ssim2_log_RIGAYA10-PC_rx7900xt.txt" ^
  "rx5500xt,ssim2_log_RIGAYA10-PC_rx5500xt.txt" ^
  "rx550,ssim2_log_RIGAYA10-PC_rx550.txt" ^
  "r9 9950x igpu,ssim2_log_RIGAYA9-PC_9950x_iGPU.txt" ^
  "ai7 350 igpu,ssim2_log_RIGAYA10-PC_ai350.txt" ^
  "r3 3200G,ssim2_log_RIGAYA10-PC_3200g.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  REM ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  REM "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^
  REM "i7 10700K,ssim2_i7_10700K_log_RIGAYA8-PC_10208_20241216_122715.txt" ^

vq_parse.py -o vq_results.js -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 -vbr ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+normal" ^
  -dashed "+10bit" ^
  -dotted "+normal" ^
  -dotted "+P6" ^
  -dotted "+P8" ^
  -dotted "+P10" ^
  -dotted "+medium" ^
  -replace " Bframe=0 ," ^
  -replace " QSVEncC , QSV " ^
  -replace " NVEncC , NVENC " ^
  -replace " VCEEncC , VCE " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  -replace " FF , " ^
  ",ssim2_log_RIGAYA9-PC_x264.txt" ^
  ",ssim2_log_RIGAYA9-PC_x265.txt" ^
  ",ssim2_log_RIGAYA7-PC_svtav1.txt" ^
  ",ssim2_log_RIGAYA9-PC_9950x_vvenc.txt" ^
  "u7 258v,ssim2_log_RIGAYA9-PC_258v.txt" ^
  "u5 245k,ssim2_log_RIGAYA9-PC_245k.txt" ^
  "Arc B580,ssim2_log_RIGAYA10-PC_b580.txt" ^
  "Arc A380,ssim2_log_RIGAYA2-PC_a380.txt" ^
  "i9 12900K,ssim2_log_RIGAYA2-PC_i9_12900k.txt" ^
  "i3 N305,ssim2_log_RIGAYA10-PC_n305.txt" ^
  "i5 7500,ssim2_log_RIGAYA10-PC_7500.txt" ^
  "i5 5500u,ssim2_log_RIGAYA9-PC_5500u.txt" ^
  "i3 4170,ssim2_log_RIGAYA9-PC_4170.txt" ^
  "i5 2410m,ssim2_log_RIGAYA10-PC_2410m.txt" ^
  "rtx5050,ssim2_log_RIGAYA2-PC_rtx5050.txt" ^
  "rtx4080,ssim2_log_RIGAYA10-PC_rtx4080.txt" ^
  "rtx2070,ssim2_log_RIGAYA2-PC_rtx2070.txt" ^
  "gtx1080,ssim2_log_RIGAYA8-PC_gtx1080.txt" ^
  "gtx950,ssim2_log_RIGAYA7-PC_gt950.txt" ^
  "rx7900xt,ssim2_log_RIGAYA10-PC_rx7900xt.txt" ^
  "rx5500xt,ssim2_log_RIGAYA10-PC_rx5500xt.txt" ^
  "rx550,ssim2_log_RIGAYA10-PC_rx550.txt" ^
  "r9 9950x igpu,ssim2_log_RIGAYA9-PC_9950x_iGPU.txt" ^
  "ai7 350 igpu,ssim2_log_RIGAYA10-PC_ai350.txt" ^
  "r3 3200G,ssim2_log_RIGAYA10-PC_3200g.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  REM ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  REM "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^

vq_parse.py -o vq_results.js -add-summary

pause
