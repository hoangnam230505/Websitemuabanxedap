Feature('Kiểm thử giao diện tự động (E2E) Toàn diện - Website Mua Bán Xe Đạp');

Scenario('1. Luồng Người Dùng: Truy cập trang chủ, tìm kiếm và kiểm tra giao diện', ({ I }) => {
    I.amOnPage('/');
    I.seeInTitle('Website Mua Bán Xe Đạp');
    I.see('Chào mừng đến với Chợ Xe Đạp Cũ');
    I.seeElement('#keyword');
    I.seeElement('#search-category-select');
    
    // Nhập từ khóa tìm kiếm
    I.fillField('#keyword', 'Xe đạp');
    I.wait(1);
    
    // Kiểm tra liên kết điều hướng
    I.see('Trang Chủ');
});

Scenario('2. Luồng Xác Thực: Kiểm tra xác thực form Đăng ký tài khoản', ({ I }) => {
    I.amOnPage('/register.php');
    I.see('Đăng Ký');
    
    // Bước 1: Thử điền form mật khẩu dưới biên (< 6 ký tự)
    I.fillField('#name', 'Sinh Vien Tester');
    I.fillField('#email', 'tester_bva@gmail.com');
    I.fillField('#password', '12345');
    I.fillField('#password-confirm', '12345');
    I.wait(1);
    
    // Bước 2: Điền form hợp lệ đúng chuẩn biên (mật khẩu >= 6 ký tự)
    I.fillField('#password', 'Password123');
    I.fillField('#password-confirm', 'Password123');
    I.wait(1);
});

Scenario('3. Luồng Xác Thực: Kiểm tra form Đăng nhập tài khoản', ({ I }) => {
    I.amOnPage('/login.php');
    I.see('Đăng Nhập');
    
    // Bước 1: Thử nhập thông tin tài khoản
    I.fillField('#email', 'admin@gmail.com');
    I.fillField('#password', 'sai_mat_khau_123');
    I.wait(1);
    
    // Bước 2: Nhập thông tin đăng nhập chính xác
    I.fillField('#email', 'admin@gmail.com');
    I.fillField('#password', '123456');
    I.wait(1);
});

Scenario('4. Luồng Thông Tin Doanh Nghiệp: Kiểm tra trang giới thiệu About Us', ({ I }) => {
    I.amOnPage('/about-us.php');
    I.see('About Us');
    I.see('About Our Company');
    I.wait(1);
});

Scenario('5. Luồng Dịch Vụ: Kiểm tra trang bảng giá Pricing Table', ({ I }) => {
    I.amOnPage('/pricing.php');
    I.see('Pricing Table');
    I.see('Pricing Plan');
    I.wait(1);
});
