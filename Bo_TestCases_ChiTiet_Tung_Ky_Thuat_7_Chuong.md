# BỘ TÀI LIỆU 115 TEST CASES CHI TIẾT TOÀN DIỆN 7 CHƯƠNG KIỂM THỬ PHẦN MỀM

> **Môn học:** Kiểm thử phần mềm – Trường ĐH Giao thông Vận tải TP.HCM (UTH)
> **Dự án:** Website Mua Bán Xe Đạp (`Websitemuabanxedap-main`)
> **Sinh viên thực hiện:** Lê Thành Nhật (MSSV: `060205006183`)
> **Tổng quy mô:** **108 Test Cases hoàn chỉnh** bao phủ 9 kỹ thuật

---

## KỸ THUẬT: PHÂN TÍCH GIÁ TRỊ BIÊN (BVA) (Chương 4)

### TC-BVA-01: Kiểm thử biên dưới độ dài mật khẩu tại min-1 (5 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Người dùng ở trang đăng ký
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password='12345' (len=5)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập mật khẩu 5 ký tự '12345'
  2. Nhập xác nhận '12345'
  3. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Mật khẩu phải có ít nhất 6 ký tự', HTTP 400 Bad Request

---

### TC-BVA-02: Kiểm thử biên dưới độ dài mật khẩu tại min (6 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Người dùng ở trang đăng ký
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password='123456' (len=6)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập mật khẩu 6 ký tự '123456'
  2. Nhập xác nhận '123456'
  3. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận, tạo tài khoản thành công, HTTP 201 Created

---

### TC-BVA-03: Kiểm thử biên dưới độ dài mật khẩu tại min+1 (7 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Người dùng ở trang đăng ký
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password='1234567' (len=7)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập mật khẩu 7 ký tự '1234567'
  2. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận, tạo tài khoản thành công, HTTP 201

---

### TC-BVA-04: Kiểm thử giá trị danh nghĩa độ dài mật khẩu (nominal = 10 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Người dùng ở trang đăng ký
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password='SecureP@10' (len=10)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập mật khẩu 'SecureP@10'
  2. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận, mã hóa bcrypt an toàn, HTTP 201

---

### TC-BVA-05: Kiểm thử độ dài mật khẩu rỗng (length = 0 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Người dùng ở trang đăng ký
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password=''
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Để trống ô mật khẩu
  2. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Form HTML5 và Backend chặn, báo lỗi 'Mật khẩu là bắt buộc'

---

### TC-BVA-06: Kiểm thử biên dưới giá bán xe tại min-1 (Giá = 0 VNĐ)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập người bán
- **Dữ liệu đầu vào (Test Data):**
  ```text
  price=0
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /sell.php
  2. Nhập giá xe = 0 VNĐ
  3. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Giá bán phải lớn hơn 0 VNĐ', HTTP 400

---

### TC-BVA-07: Kiểm thử biên dưới giá bán xe số âm (Giá = -50.000 VNĐ)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  price=-50000
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập giá xe = -50000
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Chặn dữ liệu số âm, HTTP 400 Bad Request

---

### TC-BVA-08: Kiểm thử biên dưới giá bán xe tối thiểu hợp lệ (min = 1.000 VNĐ)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  price=1000
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập giá xe = 1000
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận lưu tin đăng với giá 1.000 VNĐ, HTTP 201

---

### TC-BVA-09: Kiểm thử giá bán xe danh nghĩa hợp lệ (nominal = 5.000.000 VNĐ)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  price=5000000
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập giá xe = 5000000
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Tạo bài đăng xe thành công, HTTP 201

---

### TC-BVA-10: Kiểm thử biên trên giá bán xe cao cấp (max = 500.000.000 VNĐ)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  price=500000000
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập giá xe = 500000000
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận lưu giá xe cao cấp chính xác, HTTP 201

---

### TC-BVA-11: Kiểm thử biên dưới độ dài tiêu đề bài đăng tại min-1 (9 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  title='Bán xe cũ' (len=9)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập tiêu đề 9 ký tự 'Bán xe cũ'
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Tiêu đề phải từ 10 đến 100 ký tự', HTTP 400

---

### TC-BVA-12: Kiểm thử biên dưới độ dài tiêu đề bài đăng tại min (10 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  title='Xe đạp Asama' (len=10)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập tiêu đề đúng 10 ký tự 'Xe đạp Asama'
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Chấp nhận lưu tiêu đề hợp lệ, HTTP 201

---

### TC-BVA-13: Kiểm thử biên trên độ dài tiêu đề bài đăng tại max (100 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  title=(100 ký tự)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập tiêu đề dài đúng 100 ký tự
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Lưu trữ thành công không bị cắt xén (truncate) chuỗi

---

### TC-BVA-14: Kiểm thử biên trên độ dài tiêu đề bài đăng tại max+1 (101 ký tự)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  title=(101 ký tự)
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập tiêu đề 101 ký tự
  2. Nhấn Đăng Tin
- **Kết quả mong đợi (Expected Results):**
  > Chặn dữ liệu vượt quá độ dài quy định varchar(100), HTTP 400

---

### TC-BVA-15: Kiểm thử biên dưới số lượng phân trang tại page=1 (min page)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống có dữ liệu
- **Dữ liệu đầu vào (Test Data):**
  ```text
  page=1
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?page=1&limit=10
  2. Kiểm tra bản ghi
- **Kết quả mong đợi (Expected Results):**
  > Trả về các bản ghi đầu tiên bắt đầu từ OFFSET 0

---

### TC-BVA-16: Kiểm thử số trang âm không hợp lệ (page = 0 hoặc page = -1)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống có dữ liệu
- **Dữ liệu đầu vào (Test Data):**
  ```text
  page=-1
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?page=-1
  2. Kiểm tra phản hồi
- **Kết quả mong đợi (Expected Results):**
  > Hàm Math.max(1, page) tự ép về page=1 an toàn, HTTP 200

---

### TC-BVA-17: Kiểm thử biên trên giới hạn số bản ghi mỗi trang (limit=50 và limit=51)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống có dữ liệu
- **Dữ liệu đầu vào (Test Data):**
  ```text
  limit=51
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?limit=51
  2. Kiểm tra phản hồi
- **Kết quả mong đợi (Expected Results):**
  > Hàm Math.min(50, limit) tự động ép về tối đa 50 bản ghi

---

### TC-BVA-18: Kiểm thử biên dung lượng file ảnh upload (max = 5MB và max+1 = 5.2MB)
- **Phân hệ (Module):** `Xác thực & Xe đạp`
- **Kỹ thuật áp dụng:** `Phân tích giá trị biên (BVA)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có bài đăng
- **Dữ liệu đầu vào (Test Data):**
  ```text
  file size = 5.2MB
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Upload ảnh 5.2MB qua POST /api/bikes/1/images
- **Kết quả mong đợi (Expected Results):**
  > Multer chặn với mã 400: 'File size quá lớn (tối đa 5MB)'

---

## KỸ THUẬT: KIỂM THỬ TĨNH (STATIC TESTING) (Chương 3)

### TC-STAT-01: Rà soát quy chuẩn camelCase tên file Controller trên Linux Docker
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Mã nguồn Git
- **Dữ liệu đầu vào (Test Data):**
  ```text
  File checklist
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Quét danh sách file trong backend/src/controllers
  2. Đối chiếu require trong server.js
- **Kết quả mong đợi (Expected Results):**
  > Không còn file đặt tên hoa thường lệch (bikeController.js chuẩn xác)

---

### TC-STAT-02: Rà soát quy chuẩn camelCase tên file Routes trên Linux Docker
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Mã nguồn Git
- **Dữ liệu đầu vào (Test Data):**
  ```text
  File checklist
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Quét danh sách file trong backend/src/routes
  2. Kiểm tra Git index
- **Kết quả mong đợi (Expected Results):**
  > Tất cả routes đổi thành camelCase (bikeRoutes.js, catalogRoutes.js)

---

### TC-STAT-03: Quét phân tích tĩnh tự động Qodana phát hiện biến chưa dùng (Unused vars)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo Git
- **Dữ liệu đầu vào (Test Data):**
  ```text
  qodana.yaml
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kích hoạt Qodana linter
  2. Quét toàn bộ thư mục backend
  3. Xuất kết quả
- **Kết quả mong đợi (Expected Results):**
  > Báo cáo sạch các biến khai báo thừa, giảm rác bộ nhớ

---

### TC-STAT-04: Quét Qodana phát hiện các module require không sử dụng
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo Git
- **Dữ liệu đầu vào (Test Data):**
  ```text
  qodana.starter
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chạy Qodana scan trên GitHub Actions
  2. Đọc log phân tích
- **Kết quả mong đợi (Expected Results):**
  > Không có thư viện thừa được nạp trong server.js

---

### TC-STAT-05: Rà soát bảo mật không lưu mật khẩu cứng trong mã nguồn (No Hardcoded Secrets)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Mã nguồn
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Regex scanner
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Quét chuỗi nhạy cảm DB_PASSWORD, JWT_SECRET
  2. Kiểm tra .gitignore
- **Kết quả mong đợi (Expected Results):**
  > .gitignore đã bỏ qua .env; toàn bộ secret đọc từ process.env

---

### TC-STAT-06: Rà soát mẫu giải phóng kết nối CSDL chống cạn kiệt Connection Pool
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Controller
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Review checklist
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Tìm các hàm gọi db.getConnection()
  2. Kiểm tra khối finally
- **Kết quả mong đợi (Expected Results):**
  > 100% các hàm dùng transaction đều có conn.release() trong finally

---

### TC-STAT-07: Rà soát xử lý lỗi ngoại lệ khối try-catch trong tất cả Controller API
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Controller
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Code inspection
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra 6 controller
  2. Xác nhận mọi hàm async đều có try-catch
- **Kết quả mong đợi (Expected Results):**
  > Tất cả controller đều bắt lỗi và trả về JSON 500, không làm sập server

---

### TC-STAT-08: Rà soát tiêu chuẩn thiết kế RESTful API cho các động từ HTTP
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Route
- **Dữ liệu đầu vào (Test Data):**
  ```text
  REST checklist
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Soát lại authRoutes, bikeRoutes, paymentRoutes
  2. Kiểm tra method chuẩn
- **Kết quả mong đợi (Expected Results):**
  > GET cho đọc, POST cho tạo, PUT cho cập nhật, DELETE cho xóa

---

### TC-STAT-09: Rà soát tính nhất quán của cấu trúc Response JSON trả về Client
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Server
- **Dữ liệu đầu vào (Test Data):**
  ```text
  API standards
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra response của mọi endpoint
  2. Đảm bảo cấu trúc {success, message, data}
- **Kết quả mong đợi (Expected Results):**
  > Mọi endpoint đều tuân thủ đúng định dạng chuẩn {success, message, data}

---

### TC-STAT-10: Rà soát phân quyền Route Guard với Middleware xác thực (authMiddleware)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Route
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Security review
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra các route nhạy cảm /orders, /bikes (POST, PUT, DELETE)
- **Kết quả mong đợi (Expected Results):**
  > Toàn bộ endpoint nhạy cảm đều được bảo vệ bởi middleware auth

---

### TC-STAT-11: Rà soát cấu hình thư mục tĩnh phục vụ file upload ảnh (/uploads)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > server.js
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Config check
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra lệnh express.static cho đường dẫn /uploads
  2. Kiểm tra bảo mật
- **Kết quả mong đợi (Expected Results):**
  > Ảnh upload được phục vụ đúng qua static path, không cho duyệt directory listing

---

### TC-STAT-12: Rà soát chuẩn hóa mã hóa ký tự UTF-8 cho CSDL MySQL (utf8mb4)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > db.js
- **Dữ liệu đầu vào (Test Data):**
  ```text
  DB config
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra file db.js
  2. Xác nhận thuộc tính charset: 'utf8mb4'
- **Kết quả mong đợi (Expected Results):**
  > Kết nối MySQL sử dụng utf8mb4 hỗ trợ tiếng Việt có dấu và biểu tượng

---

### TC-STAT-13: Rà soát quy định kích thước upload file tối đa trong Multer Middleware
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Upload config
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Multer review
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra limits.fileSize trong uploadMiddleware.js
  2. Xác nhận giá trị 5MB
- **Kết quả mong đợi (Expected Results):**
  > Kích thước được giới hạn chặt chẽ ở 5 * 1024 * 1024 bytes

---

### TC-STAT-14: Rà soát cấu hình Dockerfile Node.js theo chuẩn kích thước nhẹ (node:18-alpine)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Dockerfile
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Docker review
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra image base trong backend/Dockerfile
  2. Kiểm tra lệnh COPY package*.json
- **Kết quả mong đợi (Expected Results):**
  > Sử dụng image Alpine tối ưu dung lượng, tận dụng Docker build cache hiệu quả

---

### TC-STAT-15: Rà soát cú pháp biến môi trường trong GitHub Actions Workflow (.github/workflows/ci.yml)
- **Phân hệ (Module):** `Chất lượng mã & Cấu hình`
- **Kỹ thuật áp dụng:** `Kiểm thử Tĩnh (Static Testing)` (Chương 3)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > CI/CD config
- **Dữ liệu đầu vào (Test Data):**
  ```text
  YAML review
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra khối if: env.DOCKERHUB_USERNAME
  2. Đảm bảo không dùng ${{ }} lồng
- **Kết quả mong đợi (Expected Results):**
  > Cú pháp workflow đạt chuẩn 100%, không bị lỗi parser khi runner khởi chạy

---

## KỸ THUẬT: KIỂM THỬ BẢO MẬT & TỰ ĐỘNG CI/CD (Chương 2 & 7)

### TC-SEC-01: Chặn truy cập API xem thông tin cá nhân khi không có Authorization Header
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Chưa đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Header: {}
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi GET /api/users/profile không kèm header
- **Kết quả mong đợi (Expected Results):**
  > Trả về 401 Unauthorized: 'Không tìm thấy token xác thực'

---

### TC-SEC-02: Chặn truy cập khi Token JWT có chữ ký bị giả mạo (Tampered Signature)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Có token giả mạo
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Bearer fake.jwt.token
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Sửa đổi phần signature của token JWT
  2. Gửi request GET /api/orders/my
- **Kết quả mong đợi (Expected Results):**
  > Trả về 401 Unauthorized: 'Token không hợp lệ'

---

### TC-SEC-03: Chặn truy cập khi Token JWT đã hết hạn sử dụng (Expired Token)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Có token hết hạn
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Bearer expired_token
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Dùng token có exp trong quá khứ
  2. Gửi request GET /api/users/profile
- **Kết quả mong đợi (Expected Results):**
  > Bắt lỗi TokenExpiredError, trả về 401: 'Token đã hết hạn'

---

### TC-SEC-04: Kiểm thử phòng chống lỗ hổng IDOR: Người dùng A sửa bài đăng của Người dùng B
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Post thuộc User B
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Token: User A, Target: Post B
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. User A gửi request PUT /api/bikes/:id sửa bài của B
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi 403 Forbidden: 'Bạn không có quyền chỉnh sửa tin đăng này'

---

### TC-SEC-05: Kiểm thử phòng chống lỗ hổng IDOR: Người dùng A xóa ảnh bài đăng của Người dùng B
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Post thuộc User B
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Token: User A, Target: Post B
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. User A gửi DELETE /api/bikes/:id/images/:imageId
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi 403 Forbidden: 'Bạn không có quyền xóa ảnh của tin đăng này'

---

### TC-SEC-06: Kiểm thử phòng chống SQL Injection trên tham số tìm kiếm từ khóa (?keyword=)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống hoạt động
- **Dữ liệu đầu vào (Test Data):**
  ```text
  keyword="' OR 1=1 --"
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi GET /api/bikes?keyword=' OR 1=1 --
  2. Kiểm tra SQL query
- **Kết quả mong đợi (Expected Results):**
  > Parameterized Query xử lý an toàn, coi là chuỗi thường, không lộ dữ liệu ẩn

---

### TC-SEC-07: Kiểm thử phòng chống SQL Injection trên tham số lọc danh mục (?category_id=)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống hoạt động
- **Dữ liệu đầu vào (Test Data):**
  ```text
  category_id injection
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi GET /api/bikes?category_id=1; DROP TABLE users; --
- **Kết quả mong đợi (Expected Results):**
  > Câu truy vấn an toàn, không thực thi lệnh phụ, trả về rỗng

---

### TC-SEC-08: Kiểm tra mã hóa mật khẩu một chiều Bcrypt trong bảng users
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Tài khoản mới
- **Dữ liệu đầu vào (Test Data):**
  ```text
  pass='Password123'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Đăng ký tài khoản mật khẩu 'Password123'
  2. Truy vấn MySQL SELECT password FROM users
- **Kết quả mong đợi (Expected Results):**
  > Mật khẩu lưu dưới dạng băm $2b$10$... không lưu plain-text

---

### TC-SEC-09: Kiểm tra cơ chế ngăn chặn lộ thông tin Stack Trace khi CSDL gặp lỗi (Error Masking)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hệ thống hoạt động
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Lỗi DB nội bộ
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Giả lập lỗi DB
  2. Gửi request API
- **Kết quả mong đợi (Expected Results):**
  > Chỉ trả về message: 'Lỗi server', không để lộ cấu trúc bảng, IP hoặc stack trace

---

### TC-SEC-10: Kiểm thử tự động hóa CI/CD: Tự động chạy Qodana Scan khi có commit mới vào main
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo GitHub
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Commit push
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Push commit lên main
  2. GitHub Actions khởi chạy
- **Kết quả mong đợi (Expected Results):**
  > Job code-scan-qodana chạy tự động hoàn tất thành công (Success)

---

### TC-SEC-11: Kiểm thử tự động hóa CI/CD: Tự động dựng Docker Compose và chạy E2E CodeceptJS
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo GitHub
- **Dữ liệu đầu vào (Test Data):**
  ```text
  GitHub Runner
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Workflow chạy stage e2e-testing
  2. Docker khởi động MySQL và PHP
- **Kết quả mong đợi (Expected Results):**
  > Job e2e-testing chạy Playwright headless 100% Passed

---

### TC-SEC-12: Kiểm thử tự động hóa CI/CD: Tự động Build Docker Image gắn nhãn version latest và v1.0.0
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo GitHub
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Workflow run
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Stage build-and-push-docker kích hoạt sau khi e2e-testing đỗ
- **Kết quả mong đợi (Expected Results):**
  > Docker build thành công 2 tag bike-backend:latest và v1.0.0

---

### TC-SEC-13: Kiểm thử cơ chế chống tấn công Cross-Site Scripting (XSS) trong mô tả xe
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  description XSS payload
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập description='<script>alert(1)</script>'
  2. Đăng tin và xem lại
- **Kết quả mong đợi (Expected Results):**
  > Trình duyệt render dạng text thuần an toàn, mã script không bị thực thi

---

### TC-SEC-14: Chặn người mua tự ý hủy đơn hàng của người khác (IDOR trong Orders)
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn của User A
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Token: User B
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. User B gửi DELETE /api/orders/:order_id của User A
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi 403 Forbidden: 'Bạn không có quyền huỷ đơn hàng này'

---

### TC-SEC-15: Kiểm tra an toàn bảo mật file .env không bị đưa lên Git công khai
- **Phân hệ (Module):** `Bảo mật & DevOps`
- **Kỹ thuật áp dụng:** `Kiểm thử Bảo mật & Tự động CI/CD` (Chương 2 & 7)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Repo Git
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Git check
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chạy lệnh git ls-files .env trên repository
- **Kết quả mong đợi (Expected Results):**
  > Không có file .env nào nằm trong danh sách theo dõi của Git

---

## KỸ THUẬT: PHÂN HOẠCH TƯƠNG ĐƯƠNG (EP) (Chương 4)

### TC-EP-01: Đăng ký với lớp định dạng email không hợp lệ (thiếu ký tự @)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang register
- **Dữ liệu đầu vào (Test Data):**
  ```text
  email='nguyenvana.gmail.com'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập email 'nguyenvana.gmail.com'
  2. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi định dạng email không hợp lệ, HTTP 400

---

### TC-EP-02: Đăng ký với lớp định dạng email hợp lệ (có @ và tên miền đầy đủ)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang register
- **Dữ liệu đầu vào (Test Data):**
  ```text
  email='nguyenvana@gmail.com'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Nhập email 'nguyenvana@gmail.com'
  2. Nhấn Đăng Ký
- **Kết quả mong đợi (Expected Results):**
  > Được chấp nhận và tạo tài khoản thành công, HTTP 201

---

### TC-EP-03: Upload file thuộc lớp định dạng ảnh hợp lệ (image/jpeg, image/png)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có bài đăng
- **Dữ liệu đầu vào (Test Data):**
  ```text
  file='photo.jpg'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chọn file photo.jpg
  2. Upload ảnh
- **Kết quả mong đợi (Expected Results):**
  > Hệ thống chấp nhận, lưu file vào uploads, HTTP 201

---

### TC-EP-04: Upload file thuộc lớp định dạng không phải ảnh (.pdf, .docx, .exe)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có bài đăng
- **Dữ liệu đầu vào (Test Data):**
  ```text
  file='document.pdf'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chọn file document.pdf
  2. Bấm Upload
- **Kết quả mong đợi (Expected Results):**
  > Bị từ chối: 'Chỉ chấp nhận file ảnh JPG, JPEG, PNG, WEBP', HTTP 400

---

### TC-EP-05: Lọc bài đăng theo lớp trạng thái hợp lệ ('AVAILABLE')
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang tìm kiếm
- **Dữ liệu đầu vào (Test Data):**
  ```text
  status='AVAILABLE'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?status=AVAILABLE
- **Kết quả mong đợi (Expected Results):**
  > 100% bài đăng trả về đều có trạng thái AVAILABLE

---

### TC-EP-06: Lọc bài đăng theo lớp trạng thái hợp lệ ('SOLD')
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang tìm kiếm
- **Dữ liệu đầu vào (Test Data):**
  ```text
  status='SOLD'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?status=SOLD
- **Kết quả mong đợi (Expected Results):**
  > Chỉ trả về các xe đã bán thành công

---

### TC-EP-07: Lọc theo lớp trạng thái không hợp lệ ('DELETED_UNKNOWN')
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang tìm kiếm
- **Dữ liệu đầu vào (Test Data):**
  ```text
  status='DELETED_UNKNOWN'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?status=DELETED_UNKNOWN
- **Kết quả mong đợi (Expected Results):**
  > Không tìm thấy kết quả nào, trả về mảng rỗng [] an toàn

---

### TC-EP-08: Lọc theo Category ID thuộc lớp tồn tại trong hệ thống (ID = 1)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang tìm kiếm
- **Dữ liệu đầu vào (Test Data):**
  ```text
  category_id=1
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?category_id=1
- **Kết quả mong đợi (Expected Results):**
  > Tất cả xe trả về đều thuộc danh mục Xe địa hình MTB

---

### TC-EP-09: Lọc theo Category ID thuộc lớp không tồn tại (ID = 99999)
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang tìm kiếm
- **Dữ liệu đầu vào (Test Data):**
  ```text
  category_id=99999
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?category_id=99999
- **Kết quả mong đợi (Expected Results):**
  > Không có xe nào thỏa mãn, trả về data: []

---

### TC-EP-10: Đặt hàng với phương thức thanh toán không được hỗ trợ ('MOMO_PAY')
- **Phân hệ (Module):** `Xác thực & Danh mục`
- **Kỹ thuật áp dụng:** `Phân hoạch tương đương (EP)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Trang checkout
- **Dữ liệu đầu vào (Test Data):**
  ```text
  payment_method='MOMO_PAY'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi POST /api/orders với payment_method='MOMO_PAY'
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Phương thức thanh toán không hợp lệ', HTTP 400

---

## KỸ THUẬT: BẢNG QUYẾT ĐỊNH (DECISION TABLE) (Chương 4)

### TC-DT-01: Quy tắc R1: Thỏa mãn tất cả điều kiện -> Đặt hàng thành công phương thức COD
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã login, xe AVAILABLE, buyer!=seller, method=COD
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=T, C3=T, C4=T
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người mua đặt xe của người khác
  2. Chọn COD
  3. Bấm Đặt hàng
- **Kết quả mong đợi (Expected Results):**
  > Tạo Order PENDING, Payment SUCCESS, xe PENDING, HTTP 201

---

### TC-DT-02: Quy tắc R2: Thỏa mãn tất cả điều kiện -> Đặt hàng thành công chuyển khoản BANK_TRANSFER
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã login, xe AVAILABLE, buyer!=seller, method=BANK_TRANSFER
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=T, C3=T, C4=T
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chọn thanh toán chuyển khoản
  2. Bấm Đặt hàng
- **Kết quả mong đợi (Expected Results):**
  > Tạo Order PENDING, Payment PENDING, xe PENDING, HTTP 201

---

### TC-DT-03: Quy tắc R3: Chưa xác thực (C1=False) -> Từ chối tạo đơn hàng
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Chưa có token
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=False
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi request đặt hàng không kèm token
- **Kết quả mong đợi (Expected Results):**
  > Chặn ngay lập tức với mã 401 Unauthorized

---

### TC-DT-04: Quy tắc R4: Xe không còn khả dụng (C2=False) do đã có người đặt trước
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe status='PENDING'
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=F, C3=T, C4=T
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người mua 2 cố tình gửi request đặt xe đang PENDING
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Xe không còn khả dụng hoặc không tồn tại', HTTP 400

---

### TC-DT-05: Quy tắc R5: Xe đã bán hoàn tất (C2=False, status='SOLD')
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe status='SOLD'
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=F, C3=T, C4=T
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi request mua xe đã bán
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi xe không khả dụng, rollback transaction, HTTP 400

---

### TC-DT-06: Quy tắc R6: Người bán tự mua xe của chính mình (C3=False)
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > buyer_id == seller_id
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=T, C3=F, C4=T
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chủ bài đăng gửi request mua xe của mình
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi: 'Bạn không thể mua xe của chính mình', HTTP 400

---

### TC-DT-07: Quy tắc R7: Phương thức thanh toán không hợp lệ (C4=False)
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Method không hỗ trợ
- **Dữ liệu đầu vào (Test Data):**
  ```text
  C1=T, C2=T, C3=T, C4=F
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chọn phương thức 'TIEN_MAT'
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi phương thức không hợp lệ, HTTP 400

---

### TC-DT-08: Quy tắc R8: Thiếu địa chỉ nhận hàng (Thiếu input bắt buộc)
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Không điền địa chỉ
- **Dữ liệu đầu vào (Test Data):**
  ```text
  shipping_address=''
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Bỏ trống shipping_address
  2. Gửi request
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi thiếu thông tin bắt buộc, HTTP 400

---

### TC-DT-09: Quy tắc R9: Hủy đơn hợp lệ (Người mua là chủ đơn, trạng thái đơn PENDING)
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn của mình, PENDING
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Owner=True, Status=PENDING
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi DELETE /api/orders/:id
- **Kết quả mong đợi (Expected Results):**
  > Hủy đơn thành công, trả xe về AVAILABLE, HTTP 200

---

### TC-DT-10: Quy tắc R10: Từ chối hủy đơn khi đơn đã được giao thành công (Status != PENDING)
- **Phân hệ (Module):** `Đơn hàng & Thanh toán`
- **Kỹ thuật áp dụng:** `Bảng quyết định (Decision Table)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn COMPLETED
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Status=COMPLETED
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi request hủy đơn đã hoàn tất
- **Kết quả mong đợi (Expected Results):**
  > Báo lỗi không thể hủy đơn hàng này, HTTP 404/400

---

## KỸ THUẬT: CHUYỂN TRẠNG THÁI (STATE TRANSITION) (Chương 4)

### TC-ST-01: Chuyển trạng thái bài đăng xe: AVAILABLE -> PENDING khi có đơn hàng mới
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe AVAILABLE
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Đặt hàng thành công
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người mua đặt hàng thành công
  2. Kiểm tra status xe
- **Kết quả mong đợi (Expected Results):**
  > Bài đăng xe chuyển đổi trạng thái chính xác sang 'PENDING'

---

### TC-ST-02: Chuyển trạng thái giao dịch thanh toán: PENDING -> SUCCESS khi xác nhận thanh toán
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Payment PENDING
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Callback thanh toán
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi POST /api/payments/:id/confirm
  2. Kiểm tra DB
- **Kết quả mong đợi (Expected Results):**
  > Payment chuyển sang 'SUCCESS', Order chuyển sang 'CONFIRMED'

---

### TC-ST-03: Chuyển trạng thái khi HỦY ĐƠN: Đơn sang CANCELLED và xe hoàn về AVAILABLE
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn PENDING, xe PENDING
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Hủy đơn hàng
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người mua hủy đơn
  2. Kiểm tra order và bike_post
- **Kết quả mong đợi (Expected Results):**
  > Order đổi CANCELLED, Payment đổi FAILED, Bài đăng xe hoàn về AVAILABLE

---

### TC-ST-04: Chuyển trạng thái đơn hàng: CONFIRMED -> SHIPPED khi người bán gửi hàng
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn CONFIRMED
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Gửi hàng đi
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người bán cập nhật status đơn sang SHIPPED
- **Kết quả mong đợi (Expected Results):**
  > Đơn hàng chuyển trạng thái thành công sang 'SHIPPED'

---

### TC-ST-05: Chuyển trạng thái đơn hàng: SHIPPED -> COMPLETED khi giao hàng thành công
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn SHIPPED
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Giao hàng thành công
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Cập nhật status đơn sang COMPLETED
- **Kết quả mong đợi (Expected Results):**
  > Đơn hàng đổi thành 'COMPLETED', Bài đăng xe chính thức đổi thành 'SOLD'

---

### TC-ST-06: Chuyển trạng thái bài đăng xe: PENDING -> SOLD khi giao dịch hoàn tất
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe PENDING
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Hoàn tất đơn
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Đơn hàng hoàn tất thanh toán và giao nhận
- **Kết quả mong đợi (Expected Results):**
  > Bài đăng xe chuyển sang 'SOLD' (kết thúc vòng đời bán)

---

### TC-ST-07: Chặn chuyển trạng thái cấm: Không cho phép chuyển trực tiếp từ CANCELLED sang COMPLETED
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đơn CANCELLED
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện không hợp lệ
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Cố tình gửi request đổi đơn đã hủy sang COMPLETED
- **Kết quả mong đợi (Expected Results):**
  > Hệ thống chặn cập nhật, báo lỗi trạng thái đơn không hợp lệ

---

### TC-ST-08: Chặn chuyển trạng thái cấm: Không cho phép chuyển từ SOLD ngược về PENDING
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe SOLD
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện không hợp lệ
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Cố tình tạo đơn trên xe đã bán
- **Kết quả mong đợi (Expected Results):**
  > Bị chặn ở câu truy vấn FOR UPDATE, không thể chuyển đổi trạng thái

---

### TC-ST-09: Chuyển trạng thái bài đăng xe: AVAILABLE -> HIDDEN khi người bán tạm ẩn tin
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe AVAILABLE
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Tạm ẩn tin
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người bán chọn ẩn tin đăng
- **Kết quả mong đợi (Expected Results):**
  > Bài đăng chuyển sang 'HIDDEN', không xuất hiện trên trang chủ

---

### TC-ST-10: Chuyển trạng thái bài đăng xe: HIDDEN -> AVAILABLE khi người bán mở lại tin
- **Phân hệ (Module):** `Vòng đời đối tượng`
- **Kỹ thuật áp dụng:** `Chuyển trạng thái (State Transition)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe HIDDEN
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sự kiện: Mở lại tin
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người bán chọn hiển thị lại tin đăng
- **Kết quả mong đợi (Expected Results):**
  > Bài đăng xe xuất hiện trở lại trên danh sách tìm kiếm trang chủ

---

## KỸ THUẬT: KIỂM THỬ TRƯỜNG HỢP SỬ DỤNG (USE CASE) (Chương 4)

### TC-UC-01: Use Case UC01: Luồng chính (Happy Path) - Đăng tin bán xe hoàn chỉnh
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có tài khoản người bán
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Tài khoản Seller, Xe Trek
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /sell.php
  2. Nhập thông tin xe đầy đủ
  3. Đính kèm ảnh
  4. Bấm Đăng tin
- **Kết quả mong đợi (Expected Results):**
  > Đăng tin thành công, bài xuất hiện trên trang chủ

---

### TC-UC-02: Use Case UC01: Luồng rẽ nhánh - Bỏ trống trường bắt buộc khi đăng tin
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đang ở trang đăng tin
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Thiếu giá xe
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Bỏ trống giá xe
  2. Bấm Đăng tin
- **Kết quả mong đợi (Expected Results):**
  > Hiển thị thông báo yêu cầu nhập giá xe, dừng submit

---

### TC-UC-03: Use Case UC02: Luồng chính - Tìm kiếm, xem chi tiết và đặt mua xe COD
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có tài khoản người mua
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Keyword 'Giant', COD
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Tìm từ khóa 'Giant'
  2. Bấm xem chi tiết
  3. Bấm Mua ngay
  4. Chọn COD
  5. Đặt hàng
- **Kết quả mong đợi (Expected Results):**
  > Tạo đơn hàng thành công, hiển thị trang hoàn tất đơn hàng

---

### TC-UC-04: Use Case UC02: Luồng rẽ nhánh - Người mua chưa đăng nhập bấm nút Mua Ngay
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Chưa đăng nhập
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Chưa login
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Xem chi tiết xe
  2. Bấm Mua Ngay
- **Kết quả mong đợi (Expected Results):**
  > Chuyển hướng người dùng sang trang /login.php yêu cầu đăng nhập

---

### TC-UC-05: Use Case UC03: Luồng chính - Quản lý và cập nhật giá tin đăng của tôi
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Có bài đăng của mình
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Sửa giá từ 10tr xuống 9tr
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /my-ads.php
  2. Bấm sửa giá xe
  3. Lưu thay đổi
- **Kết quả mong đợi (Expected Results):**
  > Thông tin xe cập nhật thành công, giá mới hiển thị ngay

---

### TC-UC-06: Use Case UC03: Luồng rẽ nhánh - Xóa bài đăng xe không còn nhu cầu bán
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Có bài đăng
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Xác nhận Xóa
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /my-ads.php
  2. Bấm nút Xóa bài đăng
  3. Xác nhận xóa
- **Kết quả mong đợi (Expected Results):**
  > Bài đăng bị xóa, không còn xuất hiện trong danh sách của tôi và trang chủ

---

### TC-UC-07: Use Case UC04: Luồng chính - Tra cứu lịch sử đơn hàng và thông tin vận chuyển
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Đã có đơn hàng
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Xem đơn #1
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /my-orders.php
  2. Bấm xem chi tiết đơn #1
- **Kết quả mong đợi (Expected Results):**
  > Hiển thị chi tiết địa chỉ nhận, mã thanh toán, giá tiền và trạng thái

---

### TC-UC-08: Use Case UC04: Luồng rẽ nhánh - Người dùng mới chưa có đơn hàng nào vào trang lịch sử
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Tài khoản mới
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Chưa có đơn
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /my-orders.php
- **Kết quả mong đợi (Expected Results):**
  > Hiển thị giao diện thân thiện: 'Bạn chưa có đơn hàng nào. Hãy mua ngay!'

---

### TC-UC-09: Use Case UC05: Luồng chính - Hủy đơn hàng đang chờ và kiểm tra mở khóa xe
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Có đơn PENDING
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Hủy đơn PENDING
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Vào /my-orders.php
  2. Bấm Hủy đơn hàng
  3. Xác nhận hủy
- **Kết quả mong đợi (Expected Results):**
  > Đơn hàng chuyển sang Đã Hủy, chiếc xe được hoàn kho về AVAILABLE

---

### TC-UC-10: Use Case UC05: Luồng rẽ nhánh - Người khác mua lại chiếc xe vừa được hủy đơn
- **Phân hệ (Module):** `Luồng nghiệp vụ E2E`
- **Kỹ thuật áp dụng:** `Kiểm thử Trường hợp sử dụng (Use Case)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Xe vừa hoàn về AVAILABLE
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Người mua 2 đặt hàng
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Người mua khác tìm xe vừa hủy
  2. Bấm Mua ngay
- **Kết quả mong đợi (Expected Results):**
  > Giao dịch thành công, chiếc xe được mua lại suôn sẻ

---

## KỸ THUẬT: KIỂM THỬ HỘP TRẮNG (WHITE-BOX) (Chương 4)

### TC-WB-01: Bao phủ nhánh 1 (Branch 1): Kiểm tra thiếu tham số đầu vào trong createOrder
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  post_id=null
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi request thiếu post_id
- **Kết quả mong đợi (Expected Results):**
  > Rẽ vào khối if (!post_id || !shipping_address ...), return 400

---

### TC-WB-02: Bao phủ nhánh 2 (Branch 2): Kiểm tra phương thức thanh toán không thuộc validMethods
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Method không hợp lệ
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi payment_method='VISA_UNSUPPORTED'
- **Kết quả mong đợi (Expected Results):**
  > Rẽ vào khối if (!validMethods.includes...), return 400

---

### TC-WB-03: Bao phủ nhánh 3 (Branch 3): Truy vấn khóa dòng FOR UPDATE phát hiện xe không tồn tại
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  post_id không có trong DB
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. post_id=99999
- **Kết quả mong đợi (Expected Results):**
  > Rẽ vào posts.length === 0, rollback và return 400

---

### TC-WB-04: Bao phủ nhánh 4 (Branch 4): So sánh logic post.seller_id === buyer_id
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  buyer_id == seller_id
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. buyer_id trùng seller_id của bài
- **Kết quả mong đợi (Expected Results):**
  > Rẽ vào nhánh phát hiện tự mua xe, rollback và return 400

---

### TC-WB-05: Bao phủ nhánh 5 (Branch 5): Phương thức thanh toán là COD -> payment_status = SUCCESS
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  COD method
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. payment_method='COD'
- **Kết quả mong đợi (Expected Results):**
  > Biến payment_status gán 'SUCCESS', paid_at = new Date()

---

### TC-WB-06: Bao phủ nhánh 6 (Branch 6): Phương thức thanh toán VNPAY -> payment_status = PENDING
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  VNPAY method
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. payment_method='VNPAY'
- **Kết quả mong đợi (Expected Results):**
  > Biến payment_status gán 'PENDING', paid_at = null

---

### TC-WB-07: Bao phủ nhánh 7 (Branch 7 - Full Success): Thực thi trọn vẹn commit transaction
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Valid inputs
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Dữ liệu hợp lệ toàn diện
- **Kết quả mong đợi (Expected Results):**
  > Bao phủ 100% Statements: Insert Order, Insert Payment, Update Post, Commit

---

### TC-WB-08: Bao phủ nhánh 8 (Branch 8 - Exception/Catch): Xử lý ngoại lệ lỗi server trong khối catch
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  DB connection error
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Giả lập ngắt kết nối DB giữa chừng
- **Kết quả mong đợi (Expected Results):**
  > Rẽ vào khối catch (err), gọi conn.rollback() và return 500

---

### TC-WB-09: Bao phủ nhánh 9 (Branch 9 - Finally): Luôn giải phóng kết nối conn.release()
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm createOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Execution complete
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chạy bất kể thành công hay thất bại
- **Kết quả mong đợi (Expected Results):**
  > Khối finally luôn được kích hoạt, conn.release() được gọi

---

### TC-WB-10: Bao phủ độ phức tạp chu trình McCabe V(G)=5 của hàm hủy đơn hàng cancelOrder
- **Phân hệ (Module):** `Cấu trúc mã nguồn`
- **Kỹ thuật áp dụng:** `Kiểm thử Hộp trắng (White-box)` (Chương 4)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Hàm cancelOrder
- **Dữ liệu đầu vào (Test Data):**
  ```text
  5 bộ dữ liệu test
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Kiểm tra 5 đường đi độc lập của hàm cancelOrder
- **Kết quả mong đợi (Expected Results):**
  > Bao phủ 100% các quyết định rẽ nhánh của hàm cancelOrder

---

## KỸ THUẬT: KIỂM THỬ HỒI QUY (REGRESSION) (Chương 2 & 5)

### TC-REG-01: Retest xác nhận sửa lỗi Bug KTWXD-01: Chặn triệt để mật khẩu dưới 6 ký tự
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Bản vá c2ac6b1
- **Dữ liệu đầu vào (Test Data):**
  ```text
  password='123'
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gửi đăng ký mật khẩu '123'
- **Kết quả mong đợi (Expected Results):**
  > Lỗi cũ bị triệt tiêu, trả về đúng 400 Bad Request

---

### TC-REG-02: Retest xác nhận sửa lỗi Bug KTWXD-02: Chuẩn hóa tiêu đề tiếng Việt header.php
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Bản vá c2ac6b1
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Truy cập /
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Mở trang chủ
- **Kết quả mong đợi (Expected Results):**
  > Tiêu đề trang hiển thị đúng 'Website Mua Bán Xe Đạp'

---

### TC-REG-03: Kiểm thử hồi quy chức năng Đăng nhập sau khi sửa hàm Đăng ký
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Tài khoản cũ
- **Dữ liệu đầu vào (Test Data):**
  ```text
  admin@gmail.com
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Đăng nhập tài khoản admin cũ
- **Kết quả mong đợi (Expected Results):**
  > Đăng nhập hoạt động bình thường, không bị ảnh hưởng

---

### TC-REG-04: Kiểm thử hồi quy chức năng Lấy danh mục xe sau khi chuẩn hóa router Linux
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > catalogRoutes
- **Dữ liệu đầu vào (Test Data):**
  ```text
  GET /api/categories
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/categories
- **Kết quả mong đợi (Expected Results):**
  > Trả về 4 danh mục xe đầy đủ trên cả Linux và Windows

---

### TC-REG-05: Kiểm thử hồi quy chức năng Lấy danh sách hãng xe sau khi sửa router
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > catalogRoutes
- **Dữ liệu đầu vào (Test Data):**
  ```text
  GET /api/brands
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/brands
- **Kết quả mong đợi (Expected Results):**
  > Trả về danh sách các thương hiệu Asama, Giant, Trek

---

### TC-REG-06: Kiểm thử hồi quy luồng Upload ảnh sau khi cấu hình thư mục tĩnh /uploads
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > imageRoutes
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Upload & view
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Upload ảnh xe mới
  2. Truy cập URL ảnh vừa tạo
- **Kết quả mong đợi (Expected Results):**
  > Ảnh xem được bình thường trên trình duyệt qua đường dẫn /uploads/<file>

---

### TC-REG-07: Kiểm thử hồi quy chức năng Xem chi tiết bài đăng xe sau khi liên kết CSDL
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > product-details
- **Dữ liệu đầu vào (Test Data):**
  ```text
  GET /api/bikes/1
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Mở xem chi tiết xe post_id=1
- **Kết quả mong đợi (Expected Results):**
  > Hiển thị đầy đủ thông tin xe, tên người bán và danh mục

---

### TC-REG-08: Kiểm thử hồi quy chức năng Tìm kiếm theo khoảng giá min/max
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > bikeRoutes
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Khoảng giá 3tr-15tr
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Gọi GET /api/bikes?minPrice=3000000&maxPrice=15000000
- **Kết quả mong đợi (Expected Results):**
  > Chỉ trả về các xe có giá nằm trong khoảng chỉ định

---

### TC-REG-09: Kiểm thử hồi quy tự động toàn diện qua GitHub Actions CI/CD Pipeline
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > GitHub runner
- **Dữ liệu đầu vào (Test Data):**
  ```text
  Git push
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Push commit mới lên branch main
- **Kết quả mong đợi (Expected Results):**
  > 3 Jobs: Qodana, CodeceptJS và Docker Build đều chạy tích xanh

---

### TC-REG-10: Kiểm thử hồi quy tương thích môi trường container hóa (Docker Compose)
- **Phân hệ (Module):** `Ổn định hệ thống`
- **Kỹ thuật áp dụng:** `Kiểm thử Hồi quy (Regression)` (Chương 2 & 5)
- **Mức độ ưu tiên:** `High` | **Trạng thái:** `PASSED`
- **Tiền điều kiện (Pre-conditions):**
  > Docker environment
- **Dữ liệu đầu vào (Test Data):**
  ```text
  3 Containers
  ```
- **Các bước thực hiện chi tiết (Test Steps):**
  1. Chạy docker compose up -d
  2. Kiểm tra container
- **Kết quả mong đợi (Expected Results):**
  > MySQL 8.0, PHP Frontend 8.2 và Node Backend kết nối đồng bộ

---

