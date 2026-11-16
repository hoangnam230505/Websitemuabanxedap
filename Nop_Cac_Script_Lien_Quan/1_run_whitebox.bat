@echo off
cd /d "%~dp0"
title KIEM THU HOP TRANG (WHITE-BOX TESTING) - CFG BASIS PATH
echo ======================================================================
echo   DANG CHAY KIEM THU HOP TRANG (WHITE-BOX CFG BASIS PATH)
echo ======================================================================
echo.
call node tests\whitebox_test.js
echo.
echo ======================================================================
pause
