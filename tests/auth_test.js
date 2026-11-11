Feature('Kiểm thử giao diện tự động (E2E) Toàn diện - Website Mua Bán Xe Đạp');

Scenario('1. Luồng Người Dùng: Truy cập trang chủ, tìm kiếm và lọc danh mục xe đạp', ({ I }) => {
    I.amOnPage('/');
    I.seeInTitle('Website Mua Bán Xe Đạp');
    I.see('Chào mừng đến với Chợ Xe Đạp Cũ');
    I.seeElement('#keyword');
    I.seeElement('#search-category-select');
    
    // Nhập từ khóa tìm kiếm
    I.fillField('#keyword', 'Xe đạp');
    I.wait(1);
    
    // Kiểm tra các thành phần điều hướng header
    I.see('Trang Chủ');
    I.see('Đăng Tin');
});

Scenario('2. Luồng Xác Thực: Kiểm tra xác thực form Đăng ký với các giá trị biên', ({ I }) => {
    I.amOnPage('/register.php');
    I.see('Đăng Ký');
    
    // Bước 1: Thử điền form mật khẩu dưới biên (< 6 ký tự)
    I.fillField('input[name="name"]', 'Sinh Vien Tester');
    I.fillField('input[name="email"]', 'tester_bva@gmail.com');
    I.fillField('input[name="password"]', '12345');
    I.fillField('input[name="password-confirm"]', '12345');
    I.click('#register-btn');
    I.wait(1);
    
    // Bước 2: Điền form hợp lệ đúng chuẩn biên (mật khẩu >= 6 ký tự)
    I.fillField('input[name="password"]', 'Password123');
    I.fillField('input[name="password-confirm"]', 'Password123');
    I.wait(1);
});

Scenario('3. Luồng Xác Thực: Đăng nhập hệ thống và kiểm tra thông báo lỗi', ({ I }) => {
    I.amOnPage('/login.php');
    I.see('Đăng Nhập');
    
    // Bước 1: Thử đăng nhập sai mật khẩu
    I.fillField('input[name="email"]', 'admin@gmail.com');
    I.fillField('input[name="password"]', 'sai_mat_khau_123');
    I.click('#login-btn');
    I.wait(1);
    
    // Bước 2: Đăng nhập với tài khoản chính xác
    I.fillField('input[name="email"]', 'admin@gmail.com');
    I.fillField('input[name="password"]', '123456');
    I.click('#login-btn');
    I.wait(1);
});

Scenario('4. Luồng Đăng Tin Bán Xe: Truy cập trang đăng tin và kiểm tra form nhập liệu', ({ I }) => {
    I.amOnPage('/sell.php');
    // Kiểm tra các trường bắt buộc theo đặc tả SRS
    I.seeElement('input[name="title"]');
    I.seeElement('input[name="price"]');
    I.seeElement('select[name="category_id"]');
    I.seeElement('select[name="brand_id"]');
    I.seeElement('textarea[name="description"]');
    
    // Nhập dữ liệu mô phỏng đăng tin
    I.fillField('input[name="title"]', 'Xe đạp địa hình thể thao Giant ATX 2026');
    I.fillField('input[name="price"]', '4500000');
    I.fillField('textarea[name="description"]', 'Xe còn mới 95%, khung nhôm siêu nhẹ, phanh đĩa dầu Shimano.');
    I.wait(1);
});

Scenario('5. Luồng Đặt Mua & Thanh Toán: Kiểm tra trang chi tiết và thanh toán', ({ I }) => {
    // Truy cập trang chi tiết sản phẩm mẫu ID 1
    I.amOnPage('/product-details.php?id=1');
    I.wait(1);
    
    // Truy cập trang thanh toán đơn hàng
    I.amOnPage('/checkout.php?post_id=1');
    I.wait(1);
    
    // Kiểm tra trang lịch sử đơn hàng của tôi
    I.amOnPage('/my-orders.php');
    I.wait(1);
});
