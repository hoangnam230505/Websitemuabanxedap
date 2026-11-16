# HƯỚNG DẪN SỬ DỤNG VÀ THỰC THI TOÀN BỘ BỘ SCRIPT KIỂM THỬ

> **Dự án:** Hệ thống Website Mua Bán Xe Đạp Thể Thao Cũ (`Websitemuabanxedap`)  
> **Bộ môn:** Kiểm thử phần mềm – Trường ĐH Giao thông Vận tải TP.HCM (UTH)  
> **Nội dung gói:** Toàn bộ kịch bản kiểm thử tự động, kiểm thử hộp trắng, kiểm thử API, kiểm thử E2E giao diện, kiểm thử hiệu năng và cấu hình CI/CD.

---

## 1. DANH MỤC CÁC SCRIPT KIỂM THỬ TRONG GÓI

| STT | Tập tin / Thư mục | Loại hình kiểm thử | Mục đích & Phạm vi |
|:---:|:---|:---|:---|
| 1 | `tests/whitebox_test.js` | **White-box CFG Testing** | Kiểm thử dòng điều khiển (CFG), độ phủ nhánh 100% (11 Basis Paths) cho `createOrder` và `updateOrderStatus`. |
| 2 | `BoTest_ToanDien_WebXeDap.postman_collection.json` | **API Automation Test** | Bộ kịch bản tự động hóa 21 API endpoints, 42 assertions cho Auth, Catalog, Post, Order. |
| 3 | `BoTest_ToanDien_WebXeDap.postman_environment.json` | **Postman Environment** | Môi trường Postman chứa biến `baseUrl`, `testEmail`, `testPassword`, `authToken`. |
| 4 | `tests/auth_test.js` | **E2E UI Automation Test** | Kiểm thử luồng giao diện người dùng end-to-end với CodeceptJS + Playwright (10 kịch bản). |
| 5 | `tests/performance_test.js` | **Performance & Load Test** | Đo lường độ trễ, TPS, throughput và kiểm định SLA (< 200ms) với tải đồng thời. |
| 6 | `.github/workflows/ci.yml` | **CI/CD Pipeline** | Tự động hóa kiểm thử mã nguồn, quét lỗi Qodana và đóng gói Docker trên GitHub Actions. |
| 7 | `1_run_whitebox.bat` | Script thực thi nhanh | Nhấp đúp chạy kiểm thử Hộp trắng trong 0.1 giây. |
| 8 | `2_run_api_postman.bat` | Script thực thi nhanh | Nhấp đúp chạy tự động 21 API bằng Newman CLI. |
| 9 | `3_run_e2e_codeceptjs.bat` | Script thực thi nhanh | Nhấp đúp chạy 10 luồng kiểm thử giao diện E2E. |
| 10 | `4_run_performance_test.bat` | Script thực thi nhanh | Nhấp đúp chạy đo tải và độ trễ hệ thống. |
| 11 | `run_all_tests.bat` | Script tổng hợp | Chạy tuần tự toàn bộ 4 kịch bản kiểm thử trong 1 thao tác. |

---

## 2. HƯỚNG DẪN CHẠY KIỂM THỬ TRÊN MÁY TÍNH

### Cách 1: Chạy nhanh bằng 1 cú nhấp chuột (Khuyến nghị trên Windows)
Tất cả các tệp `.bat` đã được cấu hình đường dẫn tương đối tự động (`cd /d "%~dp0"`), bạn có thể chạy ở bất kỳ thư mục nào:

- **Chạy toàn bộ 4 bộ test:** Nhấp đúp vào `run_all_tests.bat`.
- **Chạy kiểm thử Hộp trắng:** Nhấp đúp vào `1_run_whitebox.bat`.
- **Chạy kiểm thử API:** Nhấp đúp vào `2_run_api_postman.bat`.
- **Chạy kiểm thử Giao diện E2E:** Nhấp đúp vào `3_run_e2e_codeceptjs.bat`.
- **Chạy kiểm thử Hiệu năng:** Nhấp đúp vào `4_run_performance_test.bat`.

### Cách 2: Chạy qua Terminal / Dòng lệnh
Mở Terminal hoặc Command Prompt tại thư mục giải nén:

```bash
# 1. Chạy kiểm thử Hộp trắng (Không cần dependencies ngoài, chạy siêu tốc)
node tests/whitebox_test.js

# 2. Chạy kiểm thử API với Newman CLI
npx newman run BoTest_ToanDien_WebXeDap.postman_collection.json -e BoTest_ToanDien_WebXeDap.postman_environment.json

# 3. Chạy kiểm thử Giao diện E2E với CodeceptJS & Playwright
npx codeceptjs run --steps

# 4. Chạy kiểm thử Hiệu năng & Tải API
node tests/performance_test.js
```

### Cách 3: Nhập (Import) vào phần mềm Postman Desktop
1. Mở ứng dụng **Postman**.
2. Nhấp nút **Import** ở góc trên bên trái.
3. Kéo thả đồng thời 2 tệp:
   - `BoTest_ToanDien_WebXeDap.postman_collection.json`
   - `BoTest_ToanDien_WebXeDap.postman_environment.json`
4. Chọn Environment **"Môi Trường Kiểm Thử Web Mua Bán Xe Đạp - Localhost"** ở góc phải trên.
5. Nhấp **Run Collection** -> Chọn **Run all requests** để xem toàn bộ 21 testcases chạy tự động.
