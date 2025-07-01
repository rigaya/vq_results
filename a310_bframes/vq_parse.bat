del vq_results.js
del vq_results_data.js

vq_parse.py -o vq_results.js -target 1 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
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
  -replace " FF , " ^
  "A310 b03,b03\ssim1_log_RIGAYA10-PC_15880_20250630_165942.txt" ^
  "A310 b04,b04\ssim1_log_RIGAYA10-PC_18216_20250630_180544.txt" ^
  "A310 b05,b05\ssim1_log_RIGAYA10-PC_1732_20250630_184351.txt" ^
  "A310 b06,b06\ssim1_log_RIGAYA10-PC_6744_20250630_192201.txt" ^
  "A310 b07,b07\ssim1_log_RIGAYA10-PC_16628_20250630_200005.txt" ^
  "A310 b08,b08\ssim1_log_RIGAYA10-PC_21476_20250630_210410.txt" ^
  "A310 b09,b09\ssim1_log_RIGAYA10-PC_18948_20250630_214225.txt" ^
  "A310 b10,b10\ssim1_log_RIGAYA10-PC_2968_20250630_222123.txt" ^
  "A310 b12,b12\ssim1_log_RIGAYA10-PC_22424_20250630_230027.txt" ^
  "A310 b15,b15\ssim1_log_RIGAYA10-PC_5640_20250630_233856.txt"


vq_parse.py -o vq_results.js -target 2 -bitrate-max 8000 -bitrate-max-cut 8200 ^
  -no-write-aspect ^
  -drop "+quality+motion" ^
  -hidden "+10bit" ^
  -hidden "+normal" ^
  -dashed "+10bit" ^
  -dotted "+normal" ^
  -dotted "+P6" ^
  -dotted "+P8" ^
  -dotted "+P10" ^
  -dotted "+medium" ^
  -replace " Bframe=0 ," ^
  -replace " FF , " ^
  "A310 b03,b03\ssim2_log_RIGAYA10-PC_15892_20250630_172807.txt" ^
  "A310 b04,b04\ssim2_log_RIGAYA10-PC_17288_20250630_182157.txt" ^
  "A310 b05,b05\ssim2_log_RIGAYA10-PC_3260_20250630_190009.txt" ^
  "A310 b06,b06\ssim2_log_RIGAYA10-PC_16072_20250630_193813.txt" ^
  "A310 b07,b07\ssim2_log_RIGAYA10-PC_5600_20250630_202717.txt" ^
  "A310 b08,b08\ssim2_log_RIGAYA10-PC_20424_20250630_212027.txt" ^
  "A310 b09,b09\ssim2_log_RIGAYA10-PC_10020_20250630_215859.txt" ^
  "A310 b10,b10\ssim2_log_RIGAYA10-PC_3616_20250630_223804.txt" ^
  "A310 b12,b12\ssim2_log_RIGAYA10-PC_21120_20250630_231653.txt" ^
  "A310 b15,b15\ssim2_log_RIGAYA10-PC_23140_20250701_000616.txt"


vq_parse.py -o vq_results.js -add-summary

pause
