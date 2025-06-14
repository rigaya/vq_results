del vq_results.js
del vq_results_data.js

vq_parse.py -o vq_results.js -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
  -hidden "+normal" ^
  -hidden "+AV1" ^
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
  ",ssim1_x264_log_RIGAYA7-PC_9456_20241215_112036.txt" ^
  ",ssim1_x265_log_RIGAYA7-PC_14812_20241216_083507.txt" ^
  ",ssim1_svtav1_log_RIGAYA7-PC_9040_20241216_145848.txt" ^
  "Arc B580,ssim1_Arc_B580_log_RIGAYA10-PC_11544_20241215_171511.txt" ^
  "Arc A380,ssim1_Arc_A380_log_RIGAYA2-PC_19660_20241214_091843.txt" ^
  "i9 12900K,ssim1_i9_12900K_log_RIGAYA2-PC_11256_20241215_082308.txt" ^
  "i7 10700K,ssim1_i7_10700K_log_RIGAYA8-PC_3976_20241216_082118.txt" ^
  "i5 1035G7,ssim1_i5_1035g7_log_RIGAYA7-PC_6000_20241223_130134.txt" ^
  "i5 7500,ssim1_i5_7500_log_RIGAYA4-PC_7908_20241216_075304.txt" ^
  "i5 5500u,ssim1_i5_5500u_log_RIGAYA7-PC_12736_20241223_080916.txt" ^
  "i3 4170,ssim1_i3_4170_log_RIGAYA3-PC_2828_20241215_095746.txt" ^
  "i5 2410m,ssim1_i5_2410m_log_RIGAYA7-PC_2268_20241222_124944.txt" ^
  "rtx4080,ssim1_rtx4080_log_RIGAYA2-PC_12408_20241218_075035.txt" ^
  "rtx2070,ssim1_rtx2070_log_RIGAYA10-PC_12660_20241221_155509.txt" ^
  "gtx1080,ssim1_gtx1080_log_RIGAYA8-PC_14464_20241218_072550.txt" ^
  "gtx950,ssim1_gtx950_log_RIGAYA7-PC_1848_20241219_092239.txt" ^
  "rx7900xt,ssim1_rx7900xt_log_RIGAYA7-PC_16364_20241215_121720.txt" ^
  "rx5500xt,ssim1_rx5500xt_log_RIGAYA10-PC_3220_20241222_121712.txt" ^
  "rx550,ssim1_rx550_log_RIGAYA10-PC_7044_20241222_182304.txt" ^
  "r9 9950x igpu,ssim1_r9_9950x_igpu_log_RIGAYA7-PC_3524_20241223_091435.txt" ^
  "r3 3200G,ssim1_3200G_log_RIGAYA6-PC_4600_20241218_201021.txt"

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
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
  -hidden "+normal" ^
  -hidden "+AV1" ^
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
  ",ssim1_x264_log_RIGAYA7-PC_9456_20241215_112036.txt" ^
  ",ssim1_x265_log_RIGAYA7-PC_14812_20241216_083507.txt" ^
  ",ssim1_svtav1_log_RIGAYA7-PC_9040_20241216_145848.txt" ^
  "Arc B580,ssim1_Arc_B580_log_RIGAYA10-PC_11544_20241215_171511.txt" ^
  "Arc A380,ssim1_Arc_A380_log_RIGAYA2-PC_19660_20241214_091843.txt" ^
  "i9 12900K,ssim1_i9_12900K_log_RIGAYA2-PC_11256_20241215_082308.txt" ^
  "i7 10700K,ssim1_i7_10700K_log_RIGAYA8-PC_3976_20241216_082118.txt" ^
  "i5 1035G7,ssim1_i5_1035g7_log_RIGAYA7-PC_6000_20241223_130134.txt" ^
  "i5 7500,ssim1_i5_7500_log_RIGAYA4-PC_7908_20241216_075304.txt" ^
  "i5 5500u,ssim1_i5_5500u_log_RIGAYA7-PC_12736_20241223_080916.txt" ^
  "i3 4170,ssim1_i3_4170_log_RIGAYA3-PC_2828_20241215_095746.txt" ^
  "i5 2410m,ssim1_i5_2410m_log_RIGAYA7-PC_2268_20241222_124944.txt" ^
  "rtx4080,ssim1_rtx4080_log_RIGAYA2-PC_12408_20241218_075035.txt" ^
  "rtx2070,ssim1_rtx2070_log_RIGAYA10-PC_12660_20241221_155509.txt" ^
  "gtx1080,ssim1_gtx1080_log_RIGAYA8-PC_14464_20241218_072550.txt" ^
  "gtx950,ssim1_gtx950_log_RIGAYA7-PC_1848_20241219_092239.txt" ^
  "rx7900xt,ssim1_rx7900xt_log_RIGAYA7-PC_16364_20241215_121720.txt" ^
  "rx5500xt,ssim1_rx5500xt_log_RIGAYA10-PC_3220_20241222_121712.txt" ^
  "rx550,ssim1_rx550_log_RIGAYA10-PC_7044_20241222_182304.txt" ^
  "r9 9950x igpu,ssim1_r9_9950x_igpu_log_RIGAYA7-PC_3524_20241223_091435.txt" ^
  "r3 3200G,ssim1_3200G_log_RIGAYA6-PC_4600_20241218_201021.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim1_log_RIGAYA7-PC_x264_x265_2028_20221031_175810.txt" ^
  REM ",ssim1_log_RIGAYA7-PC_svtav1_20221212_124709.txt" ^
  REM "i9 12900K,ssim1_i9_12900K_log_RIGAYA2-PC_11256_20241215_082308.txt" ^

vq_parse.py -o vq_results.js -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
  -hidden "+normal" ^
  -hidden "+AV1" ^
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
  ",ssim2_x264_log_RIGAYA7-PC_5276_20241215_114640.txt" ^
  ",ssim2_x265_log_RIGAYA7-PC_6404_20241216_110758.txt" ^
  ",ssim2_svtav1_log_RIGAYA7-PC_8312_20241220_095355.txt" ^
  "Arc B580,ssim2_Arc_B580_log_RIGAYA10-PC_19424_20241215_210319.txt" ^
  "Arc A380,ssim2_Arc_A380_log_RIGAYA2-PC_22928_20241214_183411.txt" ^
  "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^
  "i7 10700K,ssim2_i7_10700K_log_RIGAYA8-PC_10208_20241216_122715.txt" ^
  "i5 1035G7,ssim2_i5_1035g7_log_RIGAYA10-PC_19292_20241223_130306.txt" ^
  "i5 7500,ssim2_i5_7500_log_RIGAYA4-PC_6468_20241217_010056.txt" ^
  "i5 5500u,ssim2_i5_5500u_log_RIGAYA7-PC_8224_20241223_083625.txt" ^
  "i3 4170,ssim2_i3_4170_log_RIGAYA3-PC_6236_20241216_072701.txt" ^
  "i5 2410m,ssim2_i5_2410m_log_RIGAYA7-PC_1772_20241222_131629.txt" ^
  "rtx4080,ssim2_rtx4080_log_RIGAYA2-PC_4504_20241218_120921.txt" ^
  "rtx2070,ssim2_rtx2070_log_RIGAYA10-PC_3532_20241222_085857.txt" ^
  "gtx1080,ssim2_gtx1080_log_RIGAYA8-PC_9920_20241218_115729.txt" ^
  "gtx950,ssim2_gtx950_log_RIGAYA7-PC_4664_20241219_100757.txt" ^
  "rx9070xt,ssim2_rx9070xt_log_DESKTOP_25604_20250502_230640.txt" ^
  "rx7900xt,ssim2_rx7900xt_log_RIGAYA7-PC_14632_20241215_125109.txt" ^
  "rx5500xt,ssim2_rx5500xt_log_RIGAYA10-PC_11260_20241222_134854.txt" ^
  "rx550,ssim2_rx550_log_RIGAYA10-PC_7388_20241222_191337.txt" ^
  "r9 9950X,ssim2_r9_9950x_igpu_log_RIGAYA7-PC_10916_20241223_104537.txt" ^
  "r3 3200G,ssim2_3200G_log_RIGAYA6-PC_10660_20241219_044359.txt"

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
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
  -hidden "+normal" ^
  -hidden "+AV1" ^
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
  ",ssim2_x264_log_RIGAYA7-PC_5276_20241215_114640.txt" ^
  ",ssim2_x265_log_RIGAYA7-PC_6404_20241216_110758.txt" ^
  ",ssim2_svtav1_log_RIGAYA7-PC_8312_20241220_095355.txt" ^
  "Arc B580,ssim2_Arc_B580_log_RIGAYA10-PC_19424_20241215_210319.txt" ^
  "Arc A380,ssim2_Arc_A380_log_RIGAYA2-PC_22928_20241214_183411.txt" ^
  "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^
  "i7 10700K,ssim2_i7_10700K_log_RIGAYA8-PC_10208_20241216_122715.txt" ^
  "i5 1035G7,ssim2_i5_1035g7_log_RIGAYA10-PC_19292_20241223_130306.txt" ^
  "i5 7500,ssim2_i5_7500_log_RIGAYA4-PC_6468_20241217_010056.txt" ^
  "i5 5500u,ssim2_i5_5500u_log_RIGAYA7-PC_8224_20241223_083625.txt" ^
  "i3 4170,ssim2_i3_4170_log_RIGAYA3-PC_6236_20241216_072701.txt" ^
  "i5 2410m,ssim2_i5_2410m_log_RIGAYA7-PC_1772_20241222_131629.txt" ^
  "rtx4080,ssim2_rtx4080_log_RIGAYA2-PC_4504_20241218_120921.txt" ^
  "rtx2070,ssim2_rtx2070_log_RIGAYA10-PC_3532_20241222_085857.txt" ^
  "gtx1080,ssim2_gtx1080_log_RIGAYA8-PC_9920_20241218_115729.txt" ^
  "gtx950,ssim2_gtx950_log_RIGAYA7-PC_4664_20241219_100757.txt" ^
  "rx9070xt,ssim2_rx9070xt_log_DESKTOP_25604_20250502_230640.txt" ^
  "rx7900xt,ssim2_rx7900xt_log_RIGAYA7-PC_14632_20241215_125109.txt" ^
  "rx5500xt,ssim2_rx5500xt_log_RIGAYA10-PC_11260_20241222_134854.txt" ^
  "rx550,ssim2_rx550_log_RIGAYA10-PC_7388_20241222_191337.txt" ^
  "r9 9950X,ssim2_r9_9950x_igpu_log_RIGAYA7-PC_10916_20241223_104537.txt" ^
  "r3 3200G,ssim2_3200G_log_RIGAYA6-PC_10660_20241219_044359.txt"

  REM -color "QSVEncC,161-299" ^
  REM -color "NVEncC,31-160" ^
  REM -color "VCEEncC,300-30" ^
  REM ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  REM ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  REM "i9 12900K,ssim2_i9_12900K_log_RIGAYA2-PC_17568_20241215_123032.txt" ^

vq_parse.py -o vq_results.js -add-summary

pause
