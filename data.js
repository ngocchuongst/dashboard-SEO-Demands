/* ============================================================
   DASHBOARD 30SHINE — DỮ LIỆU (Tháng 6/2026)
   Nguồn: "PLAN EARNED MEDIA THÁNG 6.xlsx" (plan thật của Chương)
          + Meta Ads API live (1–10/6) + GA4 30shine.com live
   Refresh: điền INPUT_HANGNGAY.md -> nhắn Claude "cập nhật dashboard" -> F5
   ============================================================ */
window.DASHBOARD_DATA = {
  meta: {
    ten: "Dashboard Marketing 30Shine",
    ky: "Tháng 6/2026 — Earned Media + Demand",
    capNhat: "2026-06-15",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    ghiChu: "Mục tiêu & demand lấy từ PLAN EARNED MEDIA THÁNG 6. Ads = Meta API live (1–15/6, gồm 2 camp Dư Luận trên TK Tỉnh). Daily post organic page 30Shine. Traffic = GA4 live. Ô '—' = chưa có actual.",
  },

  /* Link CTA chuẩn 30Shine (từ file plan) — content gắn về đây */
  ctaLinks: {
    homepage: "https://30shine.com/",
    booking: "https://30shine.com/booking?phone=0&salonId=0&step=0",
    salon: "https://30shine.com/system-salon",
    catToc: "https://30shine.com/dich-vu-cat-toc",
    spaRelax: "https://30shine.com/dich-vu-goi-massage-spa-relax",
    uon: "https://30shine.com/dich-vu-uon-nhuom-duong-toc",
  },

  /* ---------- 0. TRANG ĐANG THEO DÕI ---------- */
  /* Số liệu FB ẩn sau login → điền tay qua INPUT_HANGNGAY.md (mục 7) hoặc nối facebook_organic. */
  trangTheoDoi: [
    { ten: "30Shine Official", loai: "Chính", url: "https://www.facebook.com/30shineofficial/", id: "30shineofficial", follower: null, reach: null, engagement: null, post: null },
    { ten: "Đàn Ông Bụi", loai: "Dư luận", url: "https://www.facebook.com/profile.php?id=61564289031316", id: "61564289031316", follower: null, reach: null, engagement: null, post: null },
    { ten: "Tạp Chí Kinh Doanh Thời Đại", loai: "Dư luận", url: "https://www.facebook.com/profile.php?id=61563276163931", id: "61563276163931", follower: null, reach: null, engagement: null, post: null },
    { ten: "Bản Lĩnh Đàn Ông", loai: "Dư luận", url: "https://www.facebook.com/profile.php?id=61563496486162", id: "61563496486162", follower: null, reach: null, engagement: null, post: null },
    { ten: "Kinh Doanh Châu Á", loai: "Dư luận", url: "https://www.facebook.com/profile.php?id=61563416021934", id: "61563416021934", follower: null, reach: null, engagement: null, post: null },
    { ten: "Kiến Thức Tinh Hoa", loai: "Dư luận", url: "https://www.facebook.com/profile.php?id=61563812254323", id: "61563812254323", follower: null, reach: null, engagement: null, post: null },
  ],

  /* Lịch sử theo ngày để vẽ biểu đồ tăng trưởng (đổ vào sau khi nối facebook_organic).
     dates = mốc ngày; series = mỗi page 1 đường (data khớp index với dates). metric = chỉ số đang vẽ. */
  pageHistory: {
    metric: "Follower",
    dates: [],
    series: [
      { ten: "30Shine Official", data: [] },
      { ten: "Đàn Ông Bụi", data: [] },
      { ten: "Tạp Chí Kinh Doanh Thời Đại", data: [] },
      { ten: "Bản Lĩnh Đàn Ông", data: [] },
      { ten: "Kinh Doanh Châu Á", data: [] },
      { ten: "Kiến Thức Tinh Hoa", data: [] },
    ],
  },

  /* Snapshot theo ngày để SO SÁNH. Mỗi lần "lưu snapshot" → thêm 1 dòng.
     key trong metrics = đúng 'ten' của thẻ Tổng quan. So sánh = actual hiện tại − snapshot. */
  snapshots: [
    { date: "2026-06-11", note: "khởi tạo", metrics: {
      "Tổng số earned media": 0, "Post kênh dư luận": 0,
      "SEO sessions /discovers": 0, "Bài SEO live": 4, "CPA (post gắn ads)": 18.8 } },
  ],

  /* ---------- 1. TỔNG QUAN — MỤC TIÊU & % ĐẠT ---------- */
  tongQuan: [
    { ten: "Tổng số earned media", target: 23, actual: 0, donVi: "bài", note: "Có gắn CTA link booking/dịch vụ + seeding. Flow: đăng theo demand → ads test 2 ngày → bài cắn tiền giữ, không cắn thay ngay.", nguon: "Mục tiêu" },
    { ten: "Tổng reach thu về", target: 2025000, actual: 313181, donVi: "reach", note: "Tạm tính (partial): Dư luận Threads 27.971 + Ads dư luận 17.387 + KOC Hoàng TikTok 267.823. Chưa gồm 4 TikTok dư luận (thiếu link) + UGC. Lưu ý: TikTok = view (proxy), không phải reach Analytics.", nguon: "Live đa kênh" },
    { ten: "Post kênh dư luận", target: 18, actual: 6, donVi: "bài", note: "Đã lên 6/18 (tới 15/6): Threads 2 + TikTok 4. Người làm: Chương. (4 link TikTok cần Chương gửi để lấy view).", nguon: "Mục tiêu" },
    { ten: "Engagement rate", target: 1, actual: null, donVi: "%", note: "Mục tiêu tỷ lệ tương tác ≥1%.", nguon: "Mục tiêu" },
    { ten: "CPA (post gắn ads)", target: 21, actual: 18.8, donVi: "K (đạt khi ≤)", note: "Mục tiêu <21K. Campaign purchase chính đang chạy CPA 18.8K (8.212 đơn) → ĐẠT.", nguon: "Mục tiêu + Meta live", thapTotHon: true },
    { ten: "SEO sessions /discovers", target: 510, actual: 0, donVi: "ss/tháng", note: "Baseline 0 (blog mới từ 5/2026). Lộ trình tuần: W23=30 → W24=80 → W25=150 → W26=250.", nguon: "SEO PLAN T6" },
    { ten: "Bài SEO live", target: 9, actual: 4, donVi: "bài", note: "4 bài W22 đã publish; còn 5 bài W23–W26 (1 in-progress, 1 scheduled, 3 pending).", nguon: "SEO PLAN T6" },
    { ten: "SEO Engagement Rate", target: 65, actual: null, donVi: "%", note: "Đo trong GA4. Lộ trình ER tuần: 60 → 62 → 65 → 65%.", nguon: "SEO PLAN T6" },
  ],

  /* ---------- 2. CONTENT THEO LÔ ---------- */
  /* 6 tuyến demand đang chạy (file 'Tuyến các nhóm demand') */
  demands: [
    { ten: "Tour du lịch", noiDau: "Áp lực muốn đi xa để quên, nhưng vướng tài chính/gia đình", concept: "Tour du lịch 45′", giaiPhap: "Trải nghiệm riêng tư, kín đáo — thoát ly tại chỗ 45′", uuTien: "CAO (50% sx)" },
    { ten: "Nơi nghỉ trưa", noiDau: "Kiệt sức giữa ngày, buồn ngủ, ngủ gục bàn/sàn 12h–13h30", concept: "Trạm Sạc / Nghỉ trưa", giaiPhap: "45′ cắt–gội thư giãn nạp lại năng lượng", uuTien: "CAO" },
    { ten: "Trạm Phục Hồi", noiDau: "Đau mỏi cổ–vai–gáy kinh niên, ngại đi spa rườm rà", concept: "Thera Studio", giaiPhap: "Gội Combo 2,3 + LRT + Cabin Thera riêng tư", uuTien: "CAO" },
    { ten: "Nghỉ ngơi sau tan làm", noiDau: "Tan làm đường đông, về mệt, ngại đi đâu (sau 18h)", concept: "Trạm Sạc tối", giaiPhap: "45′ nghỉ qua giờ đông + cắt gội tỉnh táo", uuTien: "TB" },
    { ten: "Level Up tự tin", noiDau: "Bị nhìn già/luộm thuộm, hói chữ M, mất thiện cảm", concept: "Anh trai Coder", giaiPhap: "SC 10 bước / uốn tạo texture phồng tự nhiên, dễ chăm", uuTien: "TB" },
    { ten: "Cứu Tóc Mỏng", noiDau: "Tóc mỏng/bết khiến gương mặt thiếu sức sống", concept: "Anh trai Coder", giaiPhap: "Uốn lockform Hàn tạo phồng, che hói", uuTien: "TB" },
  ],

  /* Tuyến sản xuất earned media (W2–W4, 8–30/6) */
  tuyenSanXuat: [
    { tuyen: "Kênh Dư Luận", soBai: 18, reach: 425000, concept: "Bridge 4 demand (Tour/Nghỉ trưa/Thera/Tan làm)", nguoiLam: "Chương", note: "TikTok·Threads·FB · 10M ads · seeding 10 cmt/post" },
    { tuyen: "KOC Hoàng (Không Sao)", soBai: 8, reach: 1200000, concept: "Biến hình tóc trẻ/che khuyết điểm dân VP", nguoiLam: "Hoàng", note: "8 clip · móc nối kiểu tóc cầu thủ viral · THỰC TẾ T6 (TikTok @hoangkhonggsao): 4 clip / 267.823 view — 1 clip nhuộm tóc 2/6 = 266.900 (99,6%), 3 clip mới chỉ vài trăm view. (view công khai yt-dlp = proxy, không phải reach Analytics)" },
    { tuyen: "Lan Toả (World Cup)", soBai: 5, reach: 400000, concept: "Concept World Cup — dự đoán tỷ số", nguoiLam: "Vân Hà", note: "Free 02 gói SC tiếp phong độ WC · móc JTBD ngủ trưa/hồi sức" },
    { tuyen: "Content Always-on", soBai: 18, reach: 400000, concept: "Xoay 4 demand theo lịch", nguoiLam: "Vân Hà/Hoàng/Thanh Hà/Chương", note: "Facebook organic mỗi ngày" },
  ],

  /* Dư luận seeding của Chương — build bridge cho demand nào (file POST DƯ LUẬN) */
  duLuan: [
    { ngay: "8/6", postGoc: "Đàn ông chi 45′ cho bản thân = ích kỷ hay cần thiết?", demand: "Tour", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "9/6", postGoc: "Ngủ gục bàn/sàn giờ trưa — bình thường hay báo động?", demand: "Nghỉ trưa", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "10/6", postGoc: "Ngoại hình có quyết định thăng tiến/hẹn hò của đàn ông?", demand: "Kiểu tóc VP", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "11/6", postGoc: "Cả năm không dám đi du lịch vì gánh kinh tế — có quyền 'trốn' 45′?", demand: "Tour", kenh: "FB báo/group", trangThai: "Cần làm" },
    { ngay: "15/6", postGoc: "Lần cuối anh em làm gì đó chỉ để thư giãn cho riêng mình?", demand: "Tour", kenh: "FB group", trangThai: "Cần làm" },
    { ngay: "17/6", postGoc: "Công ty có nên bố trí chỗ nghỉ trưa tử tế?", demand: "Nghỉ trưa", kenh: "FB", trangThai: "Cần làm" },
    { ngay: "19/6", postGoc: "45 phút 'đi trốn' giữa tuần — xài kiểu gì cho lại sức?", demand: "Tour", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "23/6", postGoc: "Người trẻ 28-35 đã đau cổ vai gáy như U60 — do việc hay lười?", demand: "Thera", kenh: "FB", trangThai: "Cần làm" },
    { ngay: "25/6", postGoc: "Đàn ông tự thưởng cho bản thân thế nào tháng này?", demand: "Tour", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "26/6", postGoc: "Tan tầm tắc đường: về thẳng nhà hay 'trốn' 1 tiếng? Vợ nghĩ gì?", demand: "Tan làm", kenh: "FB", trangThai: "Cần làm" },
  ],

  /* Dư luận — SỐ THẬT từ 2 campaign ads chạy trên TK Tỉnh (Meta API, 1–15/6).
     3 creative đang chạy: P01 Trụ cột · P02 Coder · P03 Burnout (đều demand Tour/D01). */
  duLuanAds: {
    ky: "1–15/6/2026",
    nguon: "Meta Ads API · Adsplus 5 (Tỉnh)",
    tongChi: 155765, reachGop: 17387, tongTuongTac: 218,
    campaigns: [
      { ten: "ALL · Tương tác · Dư Luận", loai: "Engagement", spend: 107109, reach: 8271, impr: 9132, ctr: 0.70, cpm: 11729, freq: 1.10, eng: 44 },
      { ten: "ALL · Reach · Dư Luận", loai: "Awareness", spend: 48656, reach: 9116, impr: 9396, ctr: 0.24, cpm: 5178, freq: 1.03, eng: 174 },
    ],
    posts: [
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Reach", page: "Gộp seeding", reach: 9116, impr: 9396, spend: 48656, ctr: 0.24, cpm: 5178, clicks: 23, react: 2, eng: 174 },
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Tương tác", page: "Gộp seeding", reach: 4223, impr: 4922, spend: 87227, ctr: 1.08, cpm: 17722, clicks: 53, react: 29, eng: 36 },
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Tương tác", page: "Bản Lĩnh Đàn Ông", reach: 152, impr: 161, spend: 2189, ctr: 1.24, cpm: 13596, clicks: 2, react: 1, eng: 1 },
      { post: "P03 · Burnout thức khuya", camp: "Tương tác", page: "Kinh Doanh Châu Á", reach: 2151, impr: 2185, spend: 9639, ctr: 0.14, cpm: 4411, clicks: 3, react: 4, eng: 4 },
      { post: "P03 · Burnout thức khuya", camp: "Tương tác", page: "Kinh Doanh Châu Á", reach: 1811, impr: 1811, spend: 7503, ctr: 0.28, cpm: 4143, clicks: 5, react: 2, eng: 2 },
      { post: "P02 · Coder 'Năm 29 tuổi'", camp: "Tương tác", page: "Tạp Chí KD Thời Đại", reach: 48, impr: 53, spend: 551, ctr: 1.89, cpm: 10396, clicks: 1, react: 1, eng: 1 },
    ],
    note: "Reach (17.387) là CỘNG 2 camp, chưa khử trùng người. CPM Reach 5.178đ rẻ; camp Tương tác đem 44 engagement/107K chi. P01 Trụ cột mạnh nhất (reach + tương tác). P02 Coder gần như chưa được phân phối (48 reach).",
  },

  /* Daily post organic trên page 30Shine Official (5 link Chương gửi) — KHÔNG phải earned media.
     FB ẩn reach organic sau login → chỉ lấy được tương tác công khai (cảm xúc/bình luận/share). */
  dailyPosts: {
    ky: "Mùa WC · T6/2026 · 30Shine Official (organic)",
    note: "Reach organic FB không lấy được qua API (ẩn sau login) — số dưới là tương tác công khai đếm trên bài. Bài 1–2 FB chưa render được count → để '—', cập nhật tay nếu cần.",
    list: [
      { ten: "Tour du lịch 45′ — không cần nghỉ phép, không cần đi xa", demand: "Tour", react: null, cmt: null, share: null, url: "https://www.facebook.com/share/p/17njnFn4Cn/" },
      { ten: "Hào quang nhà vô địch — Hoàng Sao 'The GOAT' (250tr)", demand: "Lan toả WC", react: null, cmt: null, share: null, url: "https://www.facebook.com/share/p/18mW3X2VMm/" },
      { ten: "Trạm tiếp phong độ WC — 45′ trưa / 30′ chiều / 90′ tối", demand: "Nghỉ trưa", react: 12, cmt: 4, share: 1, url: "https://www.facebook.com/share/1D4GPQubyE/" },
      { ten: "Thức khuya xem WC — gội/massage hồi sức 45′", demand: "Nghỉ trưa", react: 22, cmt: 16, share: 3, url: "https://www.facebook.com/share/p/14ixGifgi3g/" },
      { ten: "Stíp Jobs VN gội đầu sau tan làm — xoá hói, tóc bồng", demand: "Tan làm", react: 4, cmt: null, share: 1, url: "https://www.facebook.com/share/p/1JQmWKnd7v/" },
    ],
  },

  /* Dư luận organic của Chương — 6 bài đã lên (2 Threads + 4 TikTok) tới 15/6.
     Threads = số THẬT (view/tương tác công khai). 4 TikTok chờ link để lấy view. */
  duLuanOrganic: {
    ky: "Tới 15/6/2026",
    reachThreads: 27971,
    note: "Threads = view + tương tác công khai thật. 4 bài TikTok dư luận chưa có link → chưa lấy được view (Chương gửi link/tài khoản TikTok seeding để cập nhật nốt).",
    list: [
      { ten: "Khách quen 8h tối T6 — 'chỗ duy nhất không ai gọi là sếp'", kenh: "Threads @trag.ngyen", view: 27900, like: 623, cmt: 76, share: 19, url: "https://www.threads.com/@trag.ngyen/post/DZjv7M9FCny" },
      { ten: "Kiểm tra độ mệt đàn ông qua 5 phút nằm ghế gội", kenh: "Threads @trag.ngyen", view: 71, like: 1, cmt: 1, share: 1, url: "https://www.threads.com/@trag.ngyen/post/DZjxA-MlHqU" },
      { ten: "TikTok dư luận #1", kenh: "TikTok", view: null, like: null, cmt: null, share: null, url: null },
      { ten: "TikTok dư luận #2", kenh: "TikTok", view: null, like: null, cmt: null, share: null, url: null },
      { ten: "TikTok dư luận #3", kenh: "TikTok", view: null, like: null, cmt: null, share: null, url: null },
      { ten: "TikTok dư luận #4", kenh: "TikTok", view: null, like: null, cmt: null, share: null, url: null },
    ],
  },

  /* ---------- 3. SEO (SEO PLAN T6/2026) ---------- */
  seoTargets: {
    sessions: 510, baseline: 0, baiLive: 9, er: 65,
    note: "Blog /discovers/ bắt đầu từ 0 (5/2026) — chưa authority/backlink. Target 510 là moderate-optimistic.",
  },
  seoWeekly: [
    { tuan: "W23", period: "1–7/6", target: 30, actual: null, ghiChu: "5 bài · ER 60% · bài vừa index, GSC chưa setup" },
    { tuan: "W24", period: "8–14/6", target: 80, actual: null, ghiChu: "6 bài · ER 62% · WC khai mạc 11/6 boost keyword" },
    { tuan: "W25", period: "15–21/6", target: 150, actual: null, ghiChu: "7 bài · ER 65% · bài bắt đầu rank" },
    { tuan: "W26", period: "22–28/6", target: 250, actual: null, ghiChu: "9 bài · ER 65% · footprint đầy đủ" },
  ],
  seoHieuSuat: [
    { ten: "Branded search 30Shine", do: "GSC: kw chứa '30shine'", baseline: "0", target: "≥ 25 clicks", actual: null },
    { ten: "Engagement time/session", do: "GA4: avg engagement time", baseline: "—", target: "≥ 2 phút", actual: null },
    { ten: "GSC impression /discovers/", do: "GSC: impressions total", baseline: "0", target: "≥ 5.000", actual: null },
  ],
  seoArticles: [
    { n: 1, tuan: "W22", loai: "Pillar", ten: "Kiểu tóc nam đẹp 2026 — 20 kiểu hot nhất", demand: "Lên Phong Độ", kw: "kiểu tóc nam đẹp 2026", vol: "3.000+", wc: false, status: "published" },
    { n: 2, tuan: "W22", loai: "Pillar", ten: "Gội đầu massage thư giãn — trải nghiệm 30Shine", demand: "Trạm Sạc", kw: "gội đầu massage thư giãn nam", vol: "1.500", wc: false, status: "published" },
    { n: 3, tuan: "W22", loai: "Supporting", ten: "Review 30Shine giá bao nhiêu — có đáng tiền?", demand: "Đáng Đồng Tiền", kw: "30shine giá bao nhiêu", vol: "2.000", wc: false, status: "published" },
    { n: 4, tuan: "W22", loai: "Supporting", ten: "Thera Studio — massage cổ vai gáy dân VP", demand: "Trạm Phục Hồi", kw: "massage cổ vai gáy dân văn phòng", vol: "800", wc: false, status: "published" },
    { n: 5, tuan: "W23", loai: "Supporting", ten: "Đau cổ vai gáy dân VP — 45 phút không cần thuốc", demand: "Trạm Phục Hồi", kw: "đau cổ vai gáy dân văn phòng", vol: "2.500", wc: false, status: "in_progress" },
    { n: 6, tuan: "W24", loai: "Pillar", ten: "Kiểu tóc Spiky Mullet nam 2026 (angle WC)", demand: "Lên Phong Độ", kw: "kiểu tóc spiky mullet nam", vol: "3.000+", wc: true, status: "scheduled", note: "Publish TRƯỚC 9/6" },
    { n: 7, tuan: "W25", loai: "Supporting WC", ten: "Thức đêm xem WC mệt — cách lấy lại phong độ", demand: "Trạm Sạc", kw: "mệt mỏi sau thức đêm xem bóng đá", vol: "1.000+", wc: true, status: "pending" },
    { n: 8, tuan: "W26", loai: "Supporting", ten: "Tóc mỏng rụng nhiều — phục hồi nang tóc 8 tuần", demand: "Cứu Tóc Mỏng", kw: "tóc mỏng rụng nhiều nam phải làm sao", vol: "1.200", wc: false, status: "pending" },
    { n: 9, tuan: "W26", loai: "Supporting·Local", ten: "Cắt tóc nam gần đây uy tín — top HCM & HN", demand: "Đáng Đồng Tiền", kw: "cắt tóc nam gần đây", vol: "4.000+", wc: false, status: "pending", note: "Gắn Google Maps + schema LocalBusiness" },
  ],
  seoTechnical: [
    { id: "T1", p: "P0", viec: "Submit sitemap blog lên GSC + verify property", owner: "Chương + IT", deadline: "2/6", status: null },
    { id: "T2", p: "P0", viec: "Fix GA4 conversion event ga4_dat_lich_hen", owner: "Chương → IT", deadline: "2/6", status: null },
    { id: "T3", p: "P0", viec: "Verify GA4 tag fire đúng cho /discovers/*", owner: "Chương + IT", deadline: "2/6", status: null },
    { id: "T4", p: "P1", viec: "Gắn UTM cho tất cả link push app/zalo/sms", owner: "Chương → Dev", deadline: "5/6", status: null },
    { id: "T5", p: "P1", viec: "Setup custom event GA4 (click_dat_lich + scroll_75)", owner: "Chương", deadline: "7/6", status: null },
    { id: "T6", p: "P1", viec: "Setup UTM Builder template + test đo booking", owner: "Chương", deadline: "7/6", status: null },
    { id: "T7", p: "P2", viec: "Backend log seo_ref vào booking DB", owner: "Backend dev", deadline: "14/6", status: null },
  ],

  /* ---------- 4. CHỈ SỐ ĐỀ XUẤT (ADS + TRAFFIC) ---------- */
  adsTiers: {
    facebook: [
      { tier: "⭐ STAR", dieuKien: "CPM ≤ 9.000đ", action: "Scale mạnh" },
      { tier: "🏆 WIN", dieuKien: "CPM 9.000–15.000đ", action: "Scale có kiểm soát" },
      { tier: "✅ OK", dieuKien: "CPM 15.000–18.000đ", action: "Giữ + tối ưu hook/offer" },
      { tier: "🛑 CUT", dieuKien: "CPM > 20.000đ", action: "Stop ngay" },
    ],
    tiktok: [
      { tier: "⭐ STAR", dieuKien: "Xem 25% >6%, CPM <15K, CPV100% <800đ", action: "Scale mạnh" },
      { tier: "🏆 WIN", dieuKien: "Xem 25% >5%, CPM <15K, CPV100% <1.500đ", action: "Scale có kiểm soát" },
      { tier: "✅ OK", dieuKien: "Xem 25% >3%, CPM <15K, CPV100% <3.000đ", action: "Giữ + tối ưu" },
      { tier: "🛑 CUT", dieuKien: "Xem 25% <3%, CPM >18K", action: "Stop ngay" },
    ],
  },

  /* LIVE — Meta API, 1–10/6/2026 */
  liveAds: {
    ky: "1–10/6/2026",
    accounts: [
      { ten: "Adsplus 5 (Tỉnh)", chi: 164.1, cpm: 21713, ctr: 1.20, reach: 1471290 },
      { ten: "Adsplus 5.2 (NSM Tôn Cương)", chi: 22.4, cpm: 25709, ctr: 0.89, reach: 508088 },
    ],
    campaigns: [
      { ten: "Purchase · Clip tốt nhất hệ thống (T4)", chi: 154.0, cpm: 20655, ctr: 1.16, donHang: 8212, cpa: 18.8 },
      { ten: "Salon · Location Purchase · Mess (T5)", chi: 10.7, cpm: 84403, ctr: 3.56, donHang: 77, cpa: null },
    ],
    tongChi: 186.5, cpmTong: 22126, tongReach: 1979378,
    note: "Campaign purchase chính: 8.212 đơn, CPA 18.8K (ĐẠT ≤21K). Campaign Salon CPM 84K = bất thường. HN/HCM/Bluefocus chưa bật MCP.",
  },

  /* LIVE — GA4 30shine.com, 1–10/6/2026 */
  liveTraffic: {
    ky: "1–10/6/2026", tong: 76092,
    channels: [
      { ten: "Unassigned", ss: 25572, canhBao: true },
      { ten: "Direct", ss: 22787 },
      { ten: "Organic Search", ss: 17963 },
      { ten: "Cross-network", ss: 5861 },
      { ten: "Organic Social", ss: 2463 },
      { ten: "Referral", ss: 970 },
      { ten: "Paid Shopping", ss: 371 },
      { ten: "Paid Search", ss: 86 },
    ],
    note: "Unassigned 33.6% = tag thiếu source/medium (BLOCKER attribution). Organic Search 17.963 ss (toàn site).",
  },

  deXuat: [
    { uuTien: "Cao", noiDung: "✅ Campaign purchase chính đang TỐT: CPA 18.8K (≤21K), 8.212 đơn/10 ngày. Nhưng CPM 20.655đ sát ngưỡng CUT → tối ưu creative để hạ CPM, giữ CPA.", canCu: "Meta live campaign" },
    { uuTien: "Cao", noiDung: "🔴 Campaign 'Salon Location Mess' CPM 84.403đ (gấp 4 lần ngưỡng CUT) chỉ 77 đơn — soát lại targeting/creative hoặc tắt.", canCu: "Meta live campaign" },
    { uuTien: "Cao", noiDung: "🔴 GA4 Unassigned = 33.6% traffic → tag UTM hỏng, attribution sai. Fix trước khi tin số traffic→đơn.", canCu: "GA4 live" },
    { uuTien: "TB", noiDung: "Earned media 0/23 & post dư luận 0/18 — mới đầu kỳ, cần vào guồng seeding W2 ngay (Chương đã có 10 task seeding sẵn).", canCu: "Mục tiêu + POST DƯ LUẬN" },
    { uuTien: "TB", noiDung: "Tour du lịch ưu tiên 50% sx — đảm bảo concept 'Tour 45′' có đủ creative + bridge seeding (đang là demand seed nhiều nhất: 5/10 post).", canCu: "Tuyến demand + dư luận" },
  ],

  /* ---------- 5. ĐÁNH GIÁ TỪNG NỘI DUNG ---------- */
  danhGia: [
    { nd: "Tour du lịch 45′ (ưu tiên 50% sx)", demand: "Tour", sao: 5, danhGia: "Demand ưu tiên cao nhất, seed nhiều nhất (5/10 post dư luận). Pain thoát ly tài chính/gia đình mạnh.", deXuat: "Dồn creative + bridge Threads/FB; đảm bảo có ad test để đo CPA thật cho riêng tuyến này." },
    { nd: "Trạm Phục Hồi — Thera Studio", demand: "Thera", sao: 4, danhGia: "Pain cổ-vai-gáy mass, brand-safe (boost được). Đã có bài SEO Thera publish 31/5.", deXuat: "Đồng bộ clip KOC/Hoàng W2 → duet TikTok W3; bridge seeding 23/6." },
    { nd: "Nơi nghỉ trưa / Trạm Sạc", demand: "Nghỉ trưa", sao: 4, danhGia: "JTBD rõ (ngủ gục bàn/sàn), gắn được World Cup (thức đêm → nghỉ trưa).", deXuat: "Tận dụng concept WC dự đoán tỷ số (Vân Hà) làm đòn bẩy reach." },
    { nd: "Lan Toả World Cup (dự đoán tỷ số)", demand: "Cross", sao: 4, danhGia: "Reach organic 400K, móc JTBD nghỉ trưa/hồi sức sau thức đêm. Free 02 gói SC.", deXuat: "Bám lịch trận; chốt CTA về booking, đo reach thực từng bài." },
    { nd: "Level Up tự tin / Cứu Tóc Mỏng — Anh trai Coder", demand: "Kiểu tóc VP", sao: 3, danhGia: "2 tuyến chung 1 concept (che hói, uốn phồng). KOC Hoàng phụ trách biến hình.", deXuat: "Tránh khoe tóc lộ liễu ở seeding (bridge 'ngoại hình & cơ hội'); để KOC show transform." },
    { nd: "Nghỉ ngơi sau tan làm", demand: "Tan làm", sao: 3, danhGia: "Pain thật (tan tầm đường đông) nhưng ưu tiên TB, ít seed hơn.", deXuat: "Giữ always-on, seed 26/6 (bridge vợ/gia đình); chưa cần đẩy ads mạnh." },
  ],
};
