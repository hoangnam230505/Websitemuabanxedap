@echo off
chcp 65001 >nul
echo ======================================================================
echo   HỆ THỐNG KIỂM THỬ TỰ ĐỘNG - WEBSITE MUA BÁN XE ĐẠP (UTH)
echo ======================================================================
echo.

echo [1/3] Đang chạy Kiểm thử Hộp trắng (White-box CFG Basis Path)...
node tests\whitebox_test.js
if %errorlevel% neq 0 (
    echo [LOI] Kiem thu hop trang that bai!
) else (
    echo [OK] Kiem thu hop trang PASSED 100%%!
)
echo.

echo [2/3] Đang chạy Kiểm thử Tự động Hóa API (Newman / Postman)...
call npx newman run BoTest_ToanDien_WebXeDap.postman_collection.json --reporters cli
if %errorlevel% neq 0 (
    echo [LOI] Kiem thu API that bai!
) else (
    echo [OK] Kiem thu API PASSED 28/28 Assertions!
)
echo.

echo [3/3] Đang chạy Kiểm thử Tự động E2E Giao diện (CodeceptJS + Playwright)...
call npx codeceptjs run --steps
if %errorlevel% neq 0 (
    echo [LOI] Kiem thu E2E that bai!
) else (
    echo [OK] Kiem thu E2E PASSED 5/5 Scenarios!
)
echo.

echo ======================================================================
echo   HOÀN TẤT TẤT CẢ CÁC BỘ KIỂM THỬ THỰC TẾ!
echo ======================================================================
pause
