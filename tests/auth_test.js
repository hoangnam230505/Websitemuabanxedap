Feature('Kiểm thử giao diện tự động (E2E) - Website Mua Bán Xe Đạp');

Scenario('1. Kiểm tra truy cập trang chủ và kiểm tra phần tử giao diện', ({ I }) => {
    I.amOnPage('/');
    I.seeInTitle('Website Mua Bán Xe Đạp');
    I.wait(1);
});

Scenario('2. Kiểm tra form đăng nhập người dùng', ({ I }) => {
    I.amOnPage('/login.php');
    I.see('Đăng Nhập');
    I.fillField('input[name="email"]', 'admin@gmail.com');
    I.fillField('input[name="password"]', '123456');
    I.wait(1);
});

Scenario('3. Kiểm tra form đăng ký tài khoản mới', ({ I }) => {
    I.amOnPage('/register.php');
    I.see('Đăng Ký');
    I.fillField('input[name="name"]', 'Sinh Vien Test');
    I.fillField('input[name="email"]', 'tester@gmail.com');
    I.fillField('input[name="password"]', 'Password123');
    I.wait(1);
});
