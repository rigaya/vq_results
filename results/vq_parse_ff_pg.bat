vq_parse.py -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -drop "+quality+motion" ^
  -drop "+H.264" ^
  -drop "+AV1" ^
  -drop "+normal" ^
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
  -color "QSVEncC,180-285" ^
  -color "NVEncC,40-160" ^
  -color "VCEEncC,300-30" ^
  "i7 7700K,ssim1_log_RIGAYA5-PC_i7_7700K_3336_20221102_081822.txt" ^
  "i9 12900K,ssim1_log_RIGAYA2-PC_i9_12900K_7084_20221101_141303.txt" ^
  "Arc A380,ssim1_log_RIGAYA2-PC_ArcA380_1264_20221103_090821.txt" ^
  > vq_results.js


vq_parse.py -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -no-write-aspect ^
  -drop "+quality+motion" ^
  -drop "+H.264" ^
  -drop "+AV1" ^
  -drop "+normal" ^
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
  -color "QSVEncC,161-299" ^
  -color "NVEncC,31-160" ^
  -color "VCEEncC,300-30" ^
  "i7 7700K,ssim2_log_RIGAYA5-PC_i7_7700K_10440_20221102_135034.txt" ^
  "i9 12900K,ssim2_log_RIGAYA2-PC_i9_12900K_17848_20221101_090309.txt" ^
  "Arc A380,ssim2_log_RIGAYA2-PC_ArcA380_8884_20221103_104022.txt" ^
  >> vq_results.js

  
pause
