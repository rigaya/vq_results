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
  ",ssim1_x264_log_RIGAYA7-PC_3932_20250707_174148.txt" ^
  ",ssim1_x265_log_RIGAYA7-PC_3932_20250707_174148.txt" ^
  ",ssim1_svtav1_log_RIGAYA7-PC_11596_20250708_080903.txt" ^
  "u7 258v,ssim1_258v_log_RIGAYA7-PC_20104_20250704_161237.txt" ^
  "u5 245k,ssim1_245k_log_RIGAYA7-PC_3704_20250705_105704.txt" ^
  "Arc B580,ssim1_b580_log_RIGAYA2-PC_19072_20250704_102255.txt" ^
  "Arc A380,ssim1_a380_log_RIGAYA10-PC_3528_20250704_123135.txt" ^
  "i9 12900K,ssim1_12900k_log_RIGAYA7-PC_10024_20250706_105410.txt" ^
  "i3 N305,ssim1_n305_log_RIGAYA11-PC_6620_20250704_072938.txt" ^
  "i5 1035G7,ssim1_1035g7_log_RIGAYA7-PC_6712_20250704_133911.txt" ^
  "i5 7500,ssim1_7500_log_RIGAYA-7500-PC_11232_20250704_073552.txt" ^
  "i5 5500u,ssim1_5500u_log_RIGAYA7-PC_13316_20250704_132226.txt" ^
  "i3 4170,ssim1_4170_log_RIGAYA3-PC_9868_20250704_073206.txt" ^
  "i5 2410m,ssim1_2410m_log_RIGAYA7-PC_1684_20250704_145034.txt" ^
  "rtx4080,ssim1_rtx4080_log_RIGAYA10-PC_27076_20250708_072757.txt" ^
  "rtx2070,ssim1_rtx2070_log_RIGAYA10-PC_10604_20250707_184250.txt" ^
  "gtx1080,ssim1_gtx1080_log_RIGAYA8-PC_19684_20250707_184142.txt" ^
  "gtx950,ssim1_gtx950_log_RIGAYA7-PC_3740_20250714_170140.txt" ^
  "rx7900xt,ssim1_rx7900xt_log_RIGAYA7-PC_11696_20250708_105018.txt" ^
  "rx550,ssim1_rx550_log_RIGAYA10-PC_5676_20250708_123556.txt" ^
  "r9 9950x igpu,ssim1_9950x_iGPU_log_RIGAYA7-PC_8812_20250708_112535.txt" ^
  "r3 3200G,ssim1_3200g_log_RIGAYA7-PC_13032_20250708_180352.txt"

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
  ",ssim1_x264_log_RIGAYA7-PC_3932_20250707_174148.txt" ^
  ",ssim1_x265_log_RIGAYA7-PC_3932_20250707_174148.txt" ^
  ",ssim1_svtav1_log_RIGAYA7-PC_11596_20250708_080903.txt" ^
  "u7 258v,ssim1_258v_log_RIGAYA7-PC_20104_20250704_161237.txt" ^
  "u5 245k,ssim1_245k_log_RIGAYA7-PC_3704_20250705_105704.txt" ^
  "Arc B580,ssim1_b580_log_RIGAYA2-PC_19072_20250704_102255.txt" ^
  "Arc A380,ssim1_a380_log_RIGAYA10-PC_3528_20250704_123135.txt" ^
  "i9 12900K,ssim1_12900k_log_RIGAYA7-PC_10024_20250706_105410.txt" ^
  "i3 N305,ssim1_n305_log_RIGAYA11-PC_6620_20250704_072938.txt" ^
  "i5 1035G7,ssim1_1035g7_log_RIGAYA7-PC_6712_20250704_133911.txt" ^
  "i5 7500,ssim1_7500_log_RIGAYA-7500-PC_11232_20250704_073552.txt" ^
  "i5 5500u,ssim1_5500u_log_RIGAYA7-PC_13316_20250704_132226.txt" ^
  "i3 4170,ssim1_4170_log_RIGAYA3-PC_9868_20250704_073206.txt" ^
  "i5 2410m,ssim1_2410m_log_RIGAYA7-PC_1684_20250704_145034.txt" ^
  "rtx4080,ssim1_rtx4080_log_RIGAYA10-PC_27076_20250708_072757.txt" ^
  "rtx2070,ssim1_rtx2070_log_RIGAYA10-PC_10604_20250707_184250.txt" ^
  "gtx1080,ssim1_gtx1080_log_RIGAYA8-PC_19684_20250707_184142.txt" ^
  "gtx950,ssim1_gtx950_log_RIGAYA7-PC_3740_20250714_170140.txt" ^
  "rx7900xt,ssim1_rx7900xt_log_RIGAYA7-PC_11696_20250708_105018.txt" ^
  "rx550,ssim1_rx550_log_RIGAYA10-PC_5676_20250708_123556.txt" ^
  "r9 9950x igpu,ssim1_9950x_iGPU_log_RIGAYA7-PC_8812_20250708_112535.txt" ^
  "r3 3200G,ssim1_3200g_log_RIGAYA7-PC_13032_20250708_180352.txt"

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
  ",ssim2_x264_log_RIGAYA7-PC_7700_20250707_203712.txt" ^
  ",ssim2_x265_log_RIGAYA7-PC_7700_20250707_203712.txt" ^
  ",ssim2_svtav1_log_RIGAYA7-PC_17780_20250708_091911.txt" ^
  "u7 258v,ssim2_258v_log_RIGAYA7-PC_14688_20250704_165905.txt" ^
  "u5 245k,ssim2_245k_log_RIGAYA7-PC_7140_20250705_113837.txt" ^
  "Arc B580,ssim2_b580_log_RIGAYA2-PC_23384_20250704_133017.txt" ^
  "Arc A380,ssim2_a380_log_RIGAYA10-PC_8864_20250706_095438.txt" ^
  "i9 12900K,ssim2_12900k_log_RIGAYA7-PC_14944_20250706_112312.txt" ^
  "i3 N305,ssim2_n305_log_RIGAYA11-PC_2060_20250704_121353.txt" ^
  "i5 1035G7,ssim2_1035g7_log_RIGAYA7-PC_19168_20250704_140750.txt" ^
  "i5 7500,ssim2_7500_log_RIGAYA-7500-PC_8980_20250704_112237.txt" ^
  "i5 5500u,ssim2_5500u_log_RIGAYA7-PC_12036_20250704_132717.txt" ^
  "i3 4170,ssim2_4170_log_RIGAYA3-PC_1052_20250704_090707.txt" ^
  "i5 2410m,ssim2_2410m_log_RIGAYA7-PC_2144_20250704_145939.txt" ^
  "rtx4080,ssim2_rtx4080_log_RIGAYA10-PC_2072_20250708_084020.txt" ^
  "rtx2070,ssim2_rtx2070_log_RIGAYA10-PC_8860_20250707_195547.txt" ^
  "gtx1080,ssim2_gtx1080_log_RIGAYA8-PC_9016_20250707_201405.txt" ^
  "gtx950,ssim2_gtx950_log_RIGAYA7-PC_4744_20250714_172806.txt" ^
  "rx9070xt,ssim2_rx9070xt_log_DESKTOP_25604_20250502_230640.txt" ^
  "rx7900xt,ssim2_rx7900xt_log_RIGAYA7-PC_14464_20250708_110506.txt" ^
  "rx550,ssim2_rx550_log_RIGAYA10-PC_3244_20250708_124922.txt" ^
  "r9 9950X,ssim2_9950x_iGPU_log_RIGAYA7-PC_5740_20250708_115038.txt" ^
  "r3 3200G,ssim2_3200g_log_RIGAYA7-PC_9796_20250708_181902.txt"

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
  ",ssim2_x264_log_RIGAYA7-PC_7700_20250707_203712.txt" ^
  ",ssim2_x265_log_RIGAYA7-PC_7700_20250707_203712.txt" ^
  ",ssim2_svtav1_log_RIGAYA7-PC_17780_20250708_091911.txt" ^
  "u7 258v,ssim2_258v_log_RIGAYA7-PC_14688_20250704_165905.txt" ^
  "u5 245k,ssim2_245k_log_RIGAYA7-PC_7140_20250705_113837.txt" ^
  "Arc B580,ssim2_b580_log_RIGAYA2-PC_23384_20250704_133017.txt" ^
  "Arc A380,ssim2_a380_log_RIGAYA10-PC_8864_20250706_095438.txt" ^
  "i9 12900K,ssim2_12900k_log_RIGAYA7-PC_14944_20250706_112312.txt" ^
  "i3 N305,ssim2_n305_log_RIGAYA11-PC_2060_20250704_121353.txt" ^
  "i5 1035G7,ssim2_1035g7_log_RIGAYA7-PC_19168_20250704_140750.txt" ^
  "i5 7500,ssim2_7500_log_RIGAYA-7500-PC_8980_20250704_112237.txt" ^
  "i5 5500u,ssim2_5500u_log_RIGAYA7-PC_12036_20250704_132717.txt" ^
  "i3 4170,ssim2_4170_log_RIGAYA3-PC_1052_20250704_090707.txt" ^
  "i5 2410m,ssim2_2410m_log_RIGAYA7-PC_2144_20250704_145939.txt" ^
  "rtx4080,ssim2_rtx4080_log_RIGAYA10-PC_2072_20250708_084020.txt" ^
  "rtx2070,ssim2_rtx2070_log_RIGAYA10-PC_8860_20250707_195547.txt" ^
  "gtx1080,ssim2_gtx1080_log_RIGAYA8-PC_9016_20250707_201405.txt" ^
  "gtx950,ssim2_gtx950_log_RIGAYA7-PC_4744_20250714_172806.txt" ^
  "rx9070xt,ssim2_rx9070xt_log_DESKTOP_25604_20250502_230640.txt" ^
  "rx7900xt,ssim2_rx7900xt_log_RIGAYA7-PC_14464_20250708_110506.txt" ^
  "rx550,ssim2_rx550_log_RIGAYA10-PC_3244_20250708_124922.txt" ^
  "r9 9950X,ssim2_9950x_iGPU_log_RIGAYA7-PC_5740_20250708_115038.txt" ^
  "r3 3200G,ssim2_3200g_log_RIGAYA7-PC_9796_20250708_181902.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  REM ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  REM "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^

vq_parse.py -o vq_results.js -add-summary

pause
