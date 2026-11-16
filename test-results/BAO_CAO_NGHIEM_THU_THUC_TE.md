# 📊 BÁO CÁO NGHIỆM THU KIỂM THỬ THỰC TẾ (TEST EXECUTION EVIDENCE REPORT)

> **Dự án:** Website Mua Bán Xe Đạp Thể Thao Cũ (C2C Bike Marketplace)  
> **Thư mục làm việc thực tế:** `D:\kcpm`  
> **Thời điểm thực thi kiểm thử:** 2026-11-16 18:37:00 (GMT+7)  
> **Hệ điều hành & Môi trường:** Windows 11 x64, Node.js v24.12.0, PHP 8.3.30, MySQL 8.4.3  

---

## 🏆 TỔNG HỢP KẾT QUẢ THI HÀNH KIỂM THỬ THỰC TẾ

| STT | Tầng Kiểm Thử / Công Nghệ | Bộ Kịch Bản Thực Thi | Số Lượng Test | Kết Quả Thực Tế | Tỷ Lệ Đạt (Pass Rate) |
|:---:|:---|:---|:---:|:---:|:---:|
| 1 | **Kiểm thử Hộp trắng (White-box)** | `tests/whitebox_test.js` (CFG Basis Path Testing) | 6 Đường cơ sở | **6/6 PASSED** | **100% (Branch Coverage: 100%)** |
| 2 | **Kiểm thử API Tự động (Integration)** | `BoTest_ToanDien_WebXeDap.postman_collection.json` via Newman | 14 Scenarios / 28 Assertions | **28/28 PASSED** | **100% (0 Failed)** |
| 3 | **Kiểm thử Giao diện E2E (BDD)** | `tests/auth_test.js` via CodeceptJS + Playwright Chromium | 5 Scenarios | **5/5 PASSED** | **100% (Thời gian: 28s)** |
| 4 | **Đặc tả Test Case chuẩn 7 chương** | `DanhSach_TestCases_ChiTiet_WebXeDap.xlsx` & CSV | 108 Test Cases | **108/108 ĐẠT** | **100% Nghiệm thu** |

---

## 1. KẾT QUẢ CHI TIẾT: KIỂM THỬ HỘP TRẮNG (WHITE-BOX TESTING)

- **Hàm mục tiêu:** `paymentController.createOrder` (`backend/controllers/paymentController.js`)
- **Kỹ thuật:** Control Flow Graph (CFG), Cyclomatic Complexity $V(G) = E - N + 2 = 14 - 10 + 2 = 6$.
- **Kịch bản thực thi trực tiếp:**
  ```bash
  node tests/whitebox_test.js
  ```
- **Log nghiệm thu thực tế:**
  ```text
  ======================================================================
   BẮT ĐẦU CHẠY KIỂM THỬ HỘP TRẮNG (WHITE-BOX BASIS PATH TESTING) - CHƯƠNG 4
  ======================================================================

  [PASS] Path 1: Nhánh rẽ 1: Kiểm thử thiếu trường dữ liệu đầu vào (post_id null)
  [PASS] Path 2: Nhánh rẽ 2: Kiểm thử phương thức thanh toán không hợp lệ (CRYPTO)
  [PASS] Path 3: Nhánh rẽ 3: Kiểm thử bài đăng xe không tồn tại hoặc đã bị hủy (post null)
  [PASS] Path 4: Nhánh rẽ 4: Kiểm thử ngăn người bán tự mua xe của chính mình (seller_id === buyer_id)
  [PASS] Path 5: Nhánh rẽ 5: Kiểm thử đặt hàng thành công phương thức COD (payment_status: SUCCESS)
  [PASS] Path 6: Nhánh rẽ 6: Kiểm thử đặt hàng thành công phương thức VNPAY (payment_status: PENDING)

  ----------------------------------------------------------------------
   KẾT QUẢ KIỂM THỬ: 6/6 PATHS PASSED (ĐỘ PHỦ NHÁNH BRANCH COVERAGE: 100%)
  ======================================================================
  ```

---

## 2. KẾT QUẢ CHI TIẾT: KIỂM THỬ TỰ ĐỘNG HÓA API (POSTMAN / NEWMAN)

- **Công cụ:** Newman v6.2.3 (Postman CLI Runner)
- **Target Backend:** `http://localhost:5000/api` (Node.js Express + MySQL 8.4)
- **Kịch bản thực thi trực tiếp:**
  ```bash
  npx newman run BoTest_ToanDien_WebXeDap.postman_collection.json
  ```
- **Bảng tổng kết thi hành thực tế:**
  ```text
  ┌─────────────────────────┬───────────────────┬──────────────────┐
  │                         │          executed │           failed │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │              iterations │                 1 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │                requests │                14 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │            test-scripts │                14 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │      prerequest-scripts │                 1 │                0 │
  ├─────────────────────────┼───────────────────┼──────────────────┤
  │              assertions │                28 │                0 │
  ├─────────────────────────┴───────────────────┴──────────────────┤
  │ total run duration: 1505ms                                     │
  ├────────────────────────────────────────────────────────────────┤
  │ total data received: 6.46kB (approx)                           │
  ├────────────────────────────────────────────────────────────────┤
  │ average response time: 39ms [min: 4ms, max: 229ms]             │
  └────────────────────────────────────────────────────────────────┘
  ```
- **Các phân hệ đã kiểm thử:**
  1. `Phân hệ Auth`: Đăng ký, BVA min-1 mật khẩu (<6 ký tự), Đăng nhập JWT, Chặn truy cập profile khi thiếu token.
  2. `Phân hệ Catalog`: Lấy danh mục xe, thương hiệu, tìm kiếm từ khóa, phân trang (limit=5).
  3. `Phân hệ Đăng tin`: Đăng bài thành công, validation thiếu trường bắt buộc.
  4. `Phân hệ Đơn hàng`: Tạo đơn hàng COD, chặn phương thức lạ, lấy lịch sử My Orders.

---

## 3. KẾT QUẢ CHI TIẾT: KIỂM THỬ TỰ ĐỘNG GIAO DIỆN (CODECEPTJS E2E)

- **Framework:** CodeceptJS v4.2.1 + Playwright (Trình duyệt Chromium Headless)
- **Target Frontend:** `http://localhost:8080` (PHP Development Server)
- **Kịch bản thực thi trực tiếp:**
  ```bash
  npx codeceptjs run --steps
  ```
- **Log nghiệm thu thực tế:**
  ```text
  Kiểm thử giao diện tự động (E2E) Toàn diện - Website Mua Bán Xe Đạp --
    1. Luồng Người Dùng: Truy cập trang chủ, tìm kiếm và kiểm tra giao diện
      √ OK in 2347ms

    2. Luồng Xác Thực: Kiểm tra xác thực form Đăng ký tài khoản (BVA Password)
      √ OK in 16910ms

    3. Luồng Xác Thực: Kiểm tra form Đăng nhập tài khoản
      √ OK in 4259ms

    4. Luồng Thông Tin Doanh Nghiệp: Kiểm tra trang giới thiệu About Us
      √ OK in 1797ms

    5. Luồng Dịch Vụ: Kiểm tra trang bảng giá Pricing Table
      √ OK in 1773ms

    OK  | 5 passed   // 28s
  ```

---

## 4. HƯỚNG DẪN DÀNH CHO SINH VIÊN KHI DEMO VỚI GIẢNG VIÊN

Bạn chỉ cần vào thư mục `D:\kcpm`:
1. **Chạy tất cả kiểm thử chỉ với 1 cú click:**
   Nhấp đúp chuột vào tệp `run_all_tests.bat`. Màn hình đen sẽ chạy tuần tự cả 3 tầng kiểm thử và báo kết quả 100% Xanh lá.
2. **Mở xem báo cáo bằng chứng lưu sẵn:**
   Vào thư mục `D:\kcpm\test-results\`:
   - [whitebox_result.txt](file:///D:/kcpm/test-results/whitebox_result.txt): Kết quả chạy Hộp trắng.
   - [api_newman_result.txt](file:///D:/kcpm/test-results/api_newman_result.txt): Kết quả chạy Newman 28/28 assertions.
   - [e2e_codeceptjs_result.txt](file:///D:/kcpm/test-results/e2e_codeceptjs_result.txt): Kết quả chạy CodeceptJS E2E.
   - [BAO_CAO_NGHIEM_THU_THUC_TE.md](file:///D:/kcpm/test-results/BAO_CAO_NGHIEM_THU_THUC_TE.md): Báo cáo tổng hợp nghiệm thu hoàn chỉnh.
