@echo off
title Servidor Sprint Idiomes - localhost:5182
echo.
echo  ========================================
echo   Sprint Idiomes - Servidor local
echo   http://localhost:5182
echo  ========================================
echo.
echo  Obrir el navegador i anar a:
echo  http://localhost:5182
echo.
echo  NO tanquis aquesta finestra!
echo.
python -m http.server 5182 --directory "%~dp0"
pause
