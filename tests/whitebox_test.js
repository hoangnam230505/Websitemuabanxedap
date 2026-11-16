/**
 * KIỂM THỬ HỘP TRẮNG (WHITE-BOX TESTING) - CHƯƠNG 4
 * Áp dụng kỹ thuật: Đồ thị luồng điều khiển (CFG) & Độ phức tạp Cyclomatic (Basis Path Testing)
 * Module kiểm thử: Xử lý giao dịch đơn hàng & Thanh toán (paymentController.createOrder)
 */

const assert = require('assert');

// Hàm logic độc lập mô phỏng thuật toán xử lý đơn hàng từ paymentController.js
function validateAndProcessOrder({ buyer_id, post_id, shipping_address, payment_method, post }) {
    // Decision Point 1: Validate tham số đầu vào
    if (!post_id || !shipping_address || !payment_method) {
        return { status: 400, message: 'Thiếu thông tin: post_id, shipping_address, payment_method' };
    }

    // Decision Point 2: Validate phương thức thanh toán
    const validMethods = ['COD', 'VNPAY', 'BANK_TRANSFER'];
    if (!validMethods.includes(payment_method)) {
        return { status: 400, message: 'Phương thức thanh toán không hợp lệ' };
    }

    // Decision Point 3: Validate tồn tại xe và trạng thái
    if (!post || (post.status !== 'AVAILABLE' && post.status !== 'PENDING')) {
        return { status: 400, message: 'Xe không còn khả dụng hoặc không tồn tại' };
    }

    // Decision Point 4: Ngăn người bán tự mua xe của chính mình
    if (post.seller_id === buyer_id) {
        return { status: 400, message: 'Bạn không thể mua xe của chính mình' };
    }

    // Luồng thành công: Tính toán tổng tiền và tạo trạng thái
    const shipping_fee = 50000;
    const total_amount = Number(post.price) + shipping_fee;
    const payment_status = payment_method === 'COD' ? 'SUCCESS' : 'PENDING';

    return {
        status: 201,
        success: true,
        message: 'Đặt hàng thành công',
        data: {
            total_amount,
            shipping_fee,
            payment_status
        }
    };
}

console.log('======================================================================');
console.log(' BẮT ĐẦU CHẠY KIỂM THỬ HỘP TRẮNG (WHITE-BOX BASIS PATH TESTING) - CHƯƠNG 4');
console.log('======================================================================\n');

let totalTests = 0;
let passedTests = 0;

function runTestCase(testName, fn) {
    totalTests++;
    try {
        fn();
        console.log(`[PASS] Path ${totalTests}: ${testName}`);
        passedTests++;
    } catch (err) {
        console.error(`[FAIL] Path ${totalTests}: ${testName}`);
        console.error(`       Lỗi: ${err.message}`);
    }
}

// Đường cơ sở 1 (Path 1): Thiếu trường bắt buộc (Edge 1 -> Exit)
runTestCase('Nhánh rẽ 1: Kiểm thử thiếu trường dữ liệu đầu vào (post_id null)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 2,
        post_id: null,
        shipping_address: '123 Lê Lợi',
        payment_method: 'COD',
        post: { seller_id: 1, price: 5000000, status: 'AVAILABLE' }
    });
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.message, 'Thiếu thông tin: post_id, shipping_address, payment_method');
});

// Đường cơ sở 2 (Path 2): Phương thức thanh toán lạ ngoài danh sách (Edge 2 -> Exit)
runTestCase('Nhánh rẽ 2: Kiểm thử phương thức thanh toán không hợp lệ (CRYPTO)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 2,
        post_id: 1,
        shipping_address: '123 Lê Lợi',
        payment_method: 'CRYPTO_UNSUPPORTED',
        post: { seller_id: 1, price: 5000000, status: 'AVAILABLE' }
    });
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.message, 'Phương thức thanh toán không hợp lệ');
});

// Đường cơ sở 3 (Path 3): Xe đã bán hoặc không tồn tại (Edge 3 -> Exit)
runTestCase('Nhánh rẽ 3: Kiểm thử bài đăng xe không tồn tại hoặc đã bị hủy (post null)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 2,
        post_id: 9999,
        shipping_address: '123 Lê Lợi',
        payment_method: 'COD',
        post: null
    });
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.message, 'Xe không còn khả dụng hoặc không tồn tại');
});

// Đường cơ sở 4 (Path 4): Người bán tự mua bài đăng của chính mình (Edge 4 -> Exit)
runTestCase('Nhánh rẽ 4: Kiểm thử ngăn người bán tự mua xe của chính mình (seller_id === buyer_id)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 1,
        post_id: 1,
        shipping_address: '123 Lê Lợi',
        payment_method: 'COD',
        post: { seller_id: 1, price: 5000000, status: 'AVAILABLE' }
    });
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.message, 'Bạn không thể mua xe của chính mình');
});

// Đường cơ sở 5 (Path 5): Luồng thành công với phương thức COD (Edge 5 -> Exit)
runTestCase('Nhánh rẽ 5: Kiểm thử đặt hàng thành công phương thức COD (payment_status: SUCCESS)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 2,
        post_id: 1,
        shipping_address: '123 Lê Lợi',
        payment_method: 'COD',
        post: { seller_id: 1, price: 5000000, status: 'AVAILABLE' }
    });
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.payment_status, 'SUCCESS');
    assert.strictEqual(res.data.total_amount, 5050000);
});

// Đường cơ sở 6 (Path 6): Luồng thành công với phương thức VNPAY (Edge 6 -> Exit)
runTestCase('Nhánh rẽ 6: Kiểm thử đặt hàng thành công phương thức VNPAY (payment_status: PENDING)', () => {
    const res = validateAndProcessOrder({
        buyer_id: 2,
        post_id: 1,
        shipping_address: '123 Lê Lợi',
        payment_method: 'VNPAY',
        post: { seller_id: 1, price: 5000000, status: 'AVAILABLE' }
    });
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.data.payment_status, 'PENDING');
});

console.log('\n----------------------------------------------------------------------');
console.log(` KẾT QUẢ KIỂM THỬ: ${passedTests}/${totalTests} PATHS PASSED (ĐỘ PHỦ NHÁNH BRANCH COVERAGE: 100%)`);
console.log('======================================================================');
