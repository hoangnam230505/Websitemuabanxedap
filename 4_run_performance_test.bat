@echo off
title KIEM THU HIEU NANG VA TAI API - PERFORMANCE TESTING
echo ======================================================================
echo   DANG CHAY KIEM THU HIEU NANG VA TAI API (SLA BENCHMARK)
echo ======================================================================
echo.
call node tests\performance_test.js
echo.
echo ======================================================================
pause
