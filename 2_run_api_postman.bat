@echo off
title KIEM THU TU DONG API (NEWMAN / POSTMAN)
echo ======================================================================
echo   DANG CHAY KIEM THU TU DONG HOA API BANG NEWMAN CLI
echo ======================================================================
echo.
call npx newman run BoTest_ToanDien_WebXeDap.postman_collection.json
echo.
echo ======================================================================
pause
