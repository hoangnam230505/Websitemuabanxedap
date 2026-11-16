# 📊 BÁO CÁO NGHIỆM THU KIỂM THỬ THỰC TẾ (TEST EXECUTION EVIDENCE REPORT)

> **Dự án:** Website Mua Bán Xe Đạp Thể Thao Cũ (C2C Bike Marketplace)  
> **Thư mục làm việc thực tế:** `D:\kcpm`  
> **Thời điểm cập nhật:** 2026-11-16 19:30:00 (GMT+7)  
> **Hệ điều hành & Môi trường:** Windows 11 x64, Node.js v24.12.0, PHP 8.3.30, MySQL 8.4.3  

---

## 🏆 TỔNG HỢP KẾT QUẢ THI HÀNH KIỂM THỬ NÂNG CẤP (100% PASS)

| STT | Tầng Kiểm Thử / Công Nghệ | Bộ Kịch Bản Thực Thi | Quy Mô Đã Nâng Cấp | Kết Quả Thực Tế | Tỷ Lệ Đạt (Pass Rate) |
|:---:|:---|:---|:---:|:---:|:---:|
| 1 | **Kiểm thử Hộp trắng (White-box)** | `tests/whitebox_test.js` (CFG Basis Path Testing) | **11 Đường cơ sở (2 Modules)** | **11/11 PASSED** | **100% (Branch Coverage: 100%)** |
| 2 | **Kiểm thử API Tự động (Integration)** | `BoTest_ToanDien_WebXeDap.postman_collection.json` via Newman | **21 Scenarios / 42 Assertions** | **42/42 PASSED** | **100% (0 Failed)** |
| 3 | **Kiểm thử Giao diện E2E (BDD)** | `tests/auth_test.js` via CodeceptJS + Playwright Chromium | **10 Scenarios Toàn Hệ Thống** | **10/10 PASSED** | **100% (Green All Scenarios)** |
| 4 | **Đặc tả Test Case chuẩn 7 chương** | `DanhSach_TestCases_ChiTiet_WebXeDap.xlsx` & Docs | **125 Test Cases Toàn Diện** | **125/125 ĐẠT** | **100% Nghiệm thu** |

---

## 1. KẾT QUẢ CHI TIẾT: KIỂM THỬ HỘP TRẮNG (WHITE-BOX TESTING)

- **Module 1:** `paymentController.createOrder` (Tạo đơn hàng & Thanh toán) $\to$ 6 Basis Paths ($V(G) = 6$).
- **Module 2:** `paymentController.updateOrderStatus` (Vòng đời trạng thái đơn hàng) $\to$ 5 Basis Paths ($V(G) = 5$).
- **Tổng cộng:** **11 Đường cơ sở** độc lập bao phủ 100% rẽ nhánh logic và các mã lỗi (400, 403, 404, 201, 200).

```text
======================================================================
 BẮT ĐẦU CHẠY KIỂM THỬ HỘP TRẮNG (WHITE-BOX BASIS PATH TESTING) - CHƯƠNG 4
======================================================================

--- PHÂN HỆ 1: TẠO ĐƠN HÀNG (paymentController.createOrder) ---
[PASS] Path 1: M1-P1: Kiểm thử thiếu trường dữ liệu đầu vào (post_id null)
[PASS] Path 2: M1-P2: Kiểm thử phương thức thanh toán không hợp lệ (CRYPTO)
[PASS] Path 3: M1-P3: Kiểm thử bài đăng xe không tồn tại hoặc đã bị hủy (post null)
[PASS] Path 4: M1-P4: Kiểm thử ngăn người bán tự mua xe của chính mình (seller_id === buyer_id)
[PASS] Path 5: M1-P5: Kiểm thử đặt hàng thành công phương thức COD (payment_status: SUCCESS)
[PASS] Path 6: M1-P6: Kiểm thử đặt hàng thành công phương thức VNPAY (payment_status: PENDING)

--- PHÂN HỆ 2: CẬP NHẬT TRẠNG THÁI (paymentController.updateOrderStatus) ---
[PASS] Path 7: M2-P1: Kiểm thử không tìm thấy đơn hàng cần cập nhật (order null)
[PASS] Path 8: M2-P2: Kiểm thử người không phải người bán cố tình cập nhật (403 Forbidden)
[PASS] Path 9: M2-P3: Người bán cập nhật COMPLETED -> xe tự động chuyển sang SOLD
[PASS] Path 10: M2-P4: Người bán cập nhật CANCELLED -> xe tự động khôi phục AVAILABLE
[PASS] Path 11: M2-P5: Người bán cập nhật trạng thái trung gian SHIPPED -> giữ nguyên trạng thái xe

----------------------------------------------------------------------
 KẾT QUẢ KIỂM THỬ: 11/11 PATHS PASSED (ĐỘ PHỦ NHÁNH BRANCH COVERAGE: 100%)
======================================================================
```

---

## 2. KẾT QUẢ CHI TIẾT: KIỂM THỬ TỰ ĐỘNG HÓA API (POSTMAN / NEWMAN)

- **Quy mô nâng cấp:** **21 Requests / 42 Assertions** bao phủ 4 phân hệ chính:
  1. `Phân hệ Auth & Profile (7 TCs)`: Đăng ký hợp lệ, BVA mật khẩu min-1 (<6 ký tự), Đăng nhập JWT, Chặn thiếu Bearer Token, Xem Profile, Cập nhật thông tin cá nhân.
  2. `Phân hệ Catalog & Search (7 TCs)`: Danh mục, Thương hiệu, Tìm kiếm từ khóa, Phân trang limit=5, Chi tiết xe hợp lệ, Chi tiết xe không tồn tại (404), Thống kê sàn xe (Stats), Phòng chống tấn công SQL Injection (`keyword=' OR '1'='1`).
  3. `Phân hệ Đăng tin (2 TCs)`: Đăng tin bán xe thành công, Validate thiếu trường bắt buộc.
  4. `Phân hệ Đơn hàng & Thanh toán (5 TCs)`: Đặt hàng COD, Chặn phương thức thanh toán lạ, Xem lịch sử My Orders, Xem chi tiết đơn hàng theo ID.
- **Kết quả thực thi:**
  ```text
  ┌─────────────────────────┬───────────────────┬──────────────────┐
  │                         │          executed │           failed │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │              iterations │                 1 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │                requests │                21 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │            test-scripts │                21 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │      prerequest-scripts │                 1 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │              assertions │                42 │                0 │
  ├─────────────────────────┴───────────────────┴──────────────────┤
  │ total run duration: 1423ms                                     │
  ├────────────────────────────────────────────────────────────────┤
  │ total data received: 8.67kB (approx)                           │
  ├────────────────────────────────────────────────────────────────┤
  │ average response time: 20ms [min: 3ms, max: 135ms]             │
  └────────────────────────────────────────────────────────────────┘
  ```

---

## 3. KẾT QUẢ CHI TIẾT: KIỂM THỬ GIAO DIỆN E2E (CODECEPTJS + PLAYWRIGHT)

- **Quy mô nâng cấp:** **10 Scenarios** bao phủ toàn diện từ người dùng vãng lai đến người dùng hệ thống:
  1. `Scenario 1`: Trang chủ, tìm kiếm xe và thanh điều hướng.
  2. `Scenario 2`: Form Đăng ký tài khoản (Kiểm thử BVA mật khẩu).
  3. `Scenario 3`: Form Đăng nhập tài khoản (Kiểm thử thông tin đúng/sai).
  4. `Scenario 4`: Xem chi tiết sản phẩm xe đạp (`/product-details.php?id=15`).
  5. `Scenario 5`: Trang thông tin doanh nghiệp About Us (`/about-us.php`).
  6. `Scenario 6`: Trang biểu phí dịch vụ Pricing Table (`/pricing.php`).
  7. `Scenario 7`: Trang mã lỗi không tìm thấy tài nguyên 404 (`/404.php`).
  8. `Scenario 8`: Kiểm thử Bảo mật Route Guard - Chặn truy cập đăng tin `/sell.php` khi chưa login.
  9. `Scenario 9`: Kiểm thử Bảo mật Route Guard - Chặn truy cập đơn hàng `/my-orders.php` khi chưa login.
  10. `Scenario 10`: Kiểm thử Bảo mật Route Guard - Chặn truy cập thanh toán `/checkout.php` khi chưa login.
- **Kết quả:** **10/10 Scenarios PASSED (100% Green)**.

---

## 4. HƯỚNG DẪN THỰC THI CHO SINH VIÊN

Chỉ cần nhấp đúp vào:
- **[1_run_whitebox.bat](file:///D:/kcpm/1_run_whitebox.bat)**: Chạy 11 đường cơ sở Hộp trắng (0.1 giây).
- **[2_run_api_postman.bat](file:///D:/kcpm/2_run_api_postman.bat)**: Chạy 21 API scenarios, 42 assertions (1.4 giây).
- **[3_run_e2e_codeceptjs.bat](file:///D:/kcpm/3_run_e2e_codeceptjs.bat)**: Chạy 10 kịch bản E2E Playwright.
- **[run_all_tests.bat](file:///D:/kcpm/run_all_tests.bat)**: Chạy liên tiếp trọn bộ cả 3 tầng kiểm thử.
