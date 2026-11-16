@echo off
title HE THONG KIEM THU TU DONG TOAN DIEN - UTH
echo ======================================================================
echo   HE THONG KIEM THU TU DONG TOAN DIEN - WEB MUA BAN XE DAP (UTH)
echo ======================================================================
echo.

echo [1/3] DANG CHAY KIEM THU HOP TRANG (WHITE-BOX CFG BASIS PATH)...
call node tests\whitebox_test.js
echo.

echo [2/3] DANG CHAY KIEM THU TU DONG API (NEWMAN / POSTMAN)...
call npx newman run BoTest_ToanDien_WebXeDap.postman_collection.json
echo.

echo [3/3] DANG CHAY KIEM THU GIAO DIEN E2E (CODECEPTJS + PLAYWRIGHT)...
call npx codeceptjs run --steps
echo.

echo ======================================================================
echo   HOAN TAT TAT CA CAC BO KIEM THU!
echo ======================================================================
pause
