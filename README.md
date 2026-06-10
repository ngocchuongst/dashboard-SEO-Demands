# Dashboard Marketing 30Shine

Web app theo dõi nội bộ team Marketing 30Shine. Mở `index.html` bằng trình duyệt.

## Cấu trúc
- `index.html` — UI + logic vẽ (Tailwind + Chart.js qua CDN)
- `data.js` — toàn bộ số liệu (`window.DASHBOARD_DATA`). Regenerate khi cập nhật.
- `INPUT_HANGNGAY.md` — file nhập liệu hàng ngày (link bài mới, rank, số liệu)

## 5 màn hình
1. Tổng quan — mục tiêu & % đạt
2. Content theo lô — demand / concept / lô / earned media
3. SEO — keyword, rank, cluster, bài viết
4. Chỉ số đề xuất — ads tier + số live + đề xuất
5. Đánh giá nội dung — đánh giá sơ bộ + đề xuất từng cụm

## Cập nhật
Điền `INPUT_HANGNGAY.md` → cập nhật `data.js` → F5 trình duyệt.

> ⚠️ Chứa dữ liệu nội bộ. KHÔNG để repo ở chế độ public.
