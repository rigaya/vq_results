vq_parse.py -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
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
  -replace " FF , " ^
  -color "QSVEncC,180-285" ^
  -color "NVEncC,40-160" ^
  -color "VCEEncC,300-30" ^
  ",ssim1_log_RIGAYA7-PC_x264_x265_2028_20221031_175810.txt" ^
  ",ssim1_log_RIGAYA7-PC_svtav1_20221212_124709.txt" ^
  "i5 2410M,ssim1_log_RIGAYA8-PC_i5_2410M_3888_20221031_133105.txt" ^
  "i3 4170,ssim1_log_RIGAYA3-PC_i3_4170_6200_20221031_133050.txt" ^
  "i7 7700K,ssim1_log_RIGAYA5-PC_i7_7700K_3336_20221102_081822.txt" ^
  "i9 12900K,ssim1_log_RIGAYA2-PC_i9_12900K_7084_20221101_141303.txt" ^
  "Arc A380,ssim1_log_RIGAYA2-PC_ArcA380_1264_20221103_090821.txt" ^
  "rtx1060,ssim1_log_RIGAYA2-PC_GTX1060_13048_20221104_082050.txt" ^
  "rtx2070,ssim1_log_RIGAYA2-PC_RTX2070_8756_20221031_111033.txt" ^
  "rtx4080,ssim1_log_RIGAYA2-PC_RTX4080_16900_20221119_144133.txt" ^
  "7950x_iGPU,ssim1_log_RIGAYA7-PC_7950x_iGPU_12780_20221222_090645.txt" ^
  "rx7900xt,ssim1_log_RIGAYA7-PC_rx7900xt_2200_20221222_090833.txt" ^
  > vq_results.js

vq_parse.py -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 -vbr ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
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
  -replace " FF , " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  ",ssim1_log_RIGAYA7-PC_x264_x265_2028_20221031_175810.txt" ^
  ",ssim1_log_RIGAYA7-PC_svtav1_20221212_124709.txt" ^
  "i5 2410M,ssim1_log_RIGAYA8-PC_i5_2410M_3888_20221031_133105.txt" ^
  "i3 4170,ssim1_log_RIGAYA3-PC_i3_4170_6200_20221031_133050.txt" ^
  "i7 7700K,ssim1_log_RIGAYA5-PC_i7_7700K_3336_20221102_081822.txt" ^
  "i9 12900K,ssim1_log_RIGAYA2-PC_i9_12900K_7084_20221101_141303.txt" ^
  "Arc A380,ssim1_log_RIGAYA2-PC_ArcA380_1264_20221103_090821.txt" ^
  "rtx1060,ssim1_log_RIGAYA2-PC_GTX1060_13048_20221104_082050.txt" ^
  "rtx2070,ssim1_log_RIGAYA2-PC_RTX2070_8756_20221031_111033.txt" ^
  "rtx4080,ssim1_log_RIGAYA2-PC_RTX4080_16900_20221119_144133.txt" ^
  "7950x_iGPU,ssim1_log_RIGAYA7-PC_7950x_iGPU_12780_20221222_090645.txt" ^
  "rx7900xt,ssim1_log_RIGAYA7-PC_rx7900xt_2200_20221222_090833.txt" ^
  >> vq_results.js

vq_parse.py -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
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
  -replace " FF , " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  "i5 2410M,ssim2_log_RIGAYA8-PC_i5_2410M_3928_20221101_083211.txt" ^
  "i3 4170,ssim2_log_RIGAYA3-PC_i3_4170_8616_20221031_155938.txt" ^
  "i7 7700K,ssim2_log_RIGAYA5-PC_i7_7700K_10440_20221102_135034.txt" ^
  "i9 12900K,ssim2_log_RIGAYA2-PC_i9_12900K_17848_20221101_090309.txt" ^
  "Arc A380,ssim2_log_RIGAYA2-PC_ArcA380_8884_20221103_104022.txt" ^
  "rtx1060,ssim2_log_RIGAYA2-PC_GTX1060_3916_20221104_095410.txt" ^
  "rtx2070,ssim2_log_RIGAYA2-PC_RTX2070_11328_20221031_124208.txt" ^
  "rtx4080,ssim2_log_RIGAYA2-PC_RTX4080_18868_20221119_162556.txt" ^
  "7950x_iGPU,ssim2_log_RIGAYA7-PC_7950x_iGPU_19780_20221222_103258.txt" ^
  "rx7900xt,ssim2_log_RIGAYA7-PC_rx7900xt_17248_20221222_105932.txt" ^
  >> vq_results.js

vq_parse.py -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 -vbr ^
  -no-write-aspect ^
  -drop "+H.264 +FF -Arc" ^
  -drop "+HEVC +FF -Arc" ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
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
  -replace " FF , " ^
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  ",ssim2_log_x264_x265_sample_movie_1080p_new_short8_2.txt" ^
  ",ssim2_log_RIGAYA7-PC_svtav1_6516_20221212_131706.txt" ^
  "i5 2410M,ssim2_log_RIGAYA8-PC_i5_2410M_3928_20221101_083211.txt" ^
  "i3 4170,ssim2_log_RIGAYA3-PC_i3_4170_8616_20221031_155938.txt" ^
  "i7 7700K,ssim2_log_RIGAYA5-PC_i7_7700K_10440_20221102_135034.txt" ^
  "i9 12900K,ssim2_log_RIGAYA2-PC_i9_12900K_17848_20221101_090309.txt" ^
  "Arc A380,ssim2_log_RIGAYA2-PC_ArcA380_8884_20221103_104022.txt" ^
  "rtx1060,ssim2_log_RIGAYA2-PC_GTX1060_3916_20221104_095410.txt" ^
  "rtx2070,ssim2_log_RIGAYA2-PC_RTX2070_11328_20221031_124208.txt" ^
  "rtx4080,ssim2_log_RIGAYA2-PC_RTX4080_18868_20221119_162556.txt" ^
  "7950x_iGPU,ssim2_log_RIGAYA7-PC_7950x_iGPU_19780_20221222_103258.txt" ^
  "rx7900xt,ssim2_log_RIGAYA7-PC_rx7900xt_17248_20221222_105932.txt" ^
  >> vq_results.js
  
pause
