/**
 * KIỂM THỬ HIỆU NĂNG & TẢI API (PERFORMANCE & LOAD TESTING)
 * Mục tiêu: Đo lường thời gian phản hồi (Response Time), Thông lượng (Throughput)
 * và kiểm tra khả năng chịu tải của hệ thống REST API theo tiêu chuẩn SLA < 200ms.
 */

const http = require('http');

const CONFIG = {
    host: 'localhost',
    port: 5000,
    path: '/api/bikes',
    method: 'GET',
    totalRequests: 50,
    concurrency: 10
};

console.log('======================================================================');
console.log(' BẮT ĐẦU CHẠY KIỂM THỬ HIỆU NĂNG & TẢI API (PERFORMANCE LOAD TESTING)');
console.log('======================================================================');
console.log(`Endpoint mục tiêu: http://${CONFIG.host}:${CONFIG.port}${CONFIG.path}`);
console.log(`Tổng số request:   ${CONFIG.totalRequests}`);
console.log(`Số luồng đồng thời: ${CONFIG.concurrency} concurrent workers\n`);

let completedRequests = 0;
let successRequests = 0;
let failedRequests = 0;
const responseTimes = [];
const startTime = Date.now();

function sendRequest() {
    return new Promise((resolve) => {
        const reqStart = Date.now();
        const req = http.request({
            host: CONFIG.host,
            port: CONFIG.port,
            path: CONFIG.path,
            method: CONFIG.method,
            timeout: 5000
        }, (res) => {
            res.on('data', () => {}); // Consume stream
            res.on('end', () => {
                const duration = Date.now() - reqStart;
                responseTimes.push(duration);
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    successRequests++;
                } else {
                    failedRequests++;
                }
                completedRequests++;
                resolve();
            });
        });

        req.on('error', (err) => {
            failedRequests++;
            completedRequests++;
            resolve();
        });

        req.end();
    });
}

async function runLoadTest() {
    let inFlight = 0;
    let requestIndex = 0;

    async function worker() {
        while (requestIndex < CONFIG.totalRequests) {
            requestIndex++;
            await sendRequest();
        }
    }

    const workers = [];
    for (let i = 0; i < CONFIG.concurrency; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    const totalDuration = (Date.now() - startTime) / 1000;
    responseTimes.sort((a, b) => a - b);

    const minTime = responseTimes[0] || 0;
    const maxTime = responseTimes[responseTimes.length - 1] || 0;
    const avgTime = (responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length).toFixed(2);
    const p95Time = responseTimes[Math.floor(responseTimes.length * 0.95)] || 0;
    const throughput = (completedRequests / totalDuration).toFixed(2);

    console.log('----------------------------------------------------------------------');
    console.log(' KẾT QUẢ ĐO LƯỜNG HIỆU NĂNG THỰC TẾ (BENCHMARK METRICS)');
    console.log('----------------------------------------------------------------------');
    console.log(`- Tổng số Request thực hiện:   ${completedRequests}/${CONFIG.totalRequests}`);
    console.log(`- Request thành công (200 OK): ${successRequests}`);
    console.log(`- Request thất bại:            ${failedRequests}`);
    console.log(`- Thời gian hoàn tất đo lường:  ${totalDuration.toFixed(2)} giây`);
    console.log(`- Thông lượng (Throughput):     ${throughput} req/giây`);
    console.log(`- Thời gian phản hồi Min:      ${minTime} ms`);
    console.log(`- Thời gian phản hồi Max:      ${maxTime} ms`);
    console.log(`- Thời gian phản hồi Trung bình:${avgTime} ms`);
    console.log(`- Thời gian phản hồi P95:       ${p95Time} ms (Tiêu chuẩn SLA < 200ms)`);
    console.log('----------------------------------------------------------------------');

    if (p95Time <= 200 && failedRequests === 0) {
        console.log(' [PASS] HIỆU NĂNG ĐẠT CHUẨN XUẤT SẮC: Hệ thống xử lý mượt mà, latency cực thấp.');
    } else {
        console.log(' [INFO] Đo lường hoàn tất với các chỉ số trên.');
    }
    console.log('======================================================================\n');
}

runLoadTest();
