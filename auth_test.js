Feature('Auth');

Scenario('Kiem tra trang chu hoat dong', ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
});

Scenario('Kiem tra form dang nhap', ({ I }) => {
    I.amOnPage('/login.php');
    I.wait(2);
});
Feature('Kiểm thử giao diện Website Bán Xe');

Scenario('Kiểm tra tải trang chủ thành công', ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
});

Scenario('Kiểm tra truy cập trang đăng nhập', ({ I }) => {
    I.amOnPage('/login.php');
    I.wait(2);
    I.fillField('input[type="email"]', 'test@example.com');
    I.fillField('input[type="password"]', '123456');
    I.wait(1);
});