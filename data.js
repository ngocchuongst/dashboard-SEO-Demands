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
    capNhat: "2026-06-22",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    ghiChu: "Mục tiêu & demand lấy từ PLAN EARNED MEDIA THÁNG 6. Ads = Meta API live (1–22/6). MỚI: Adsplus 5 đã tách campaign PURCHASE theo từng demand (Tour/Tóc đẹp đi làm/Thera/Nghỉ trưa/Tan làm) — đúng trục demand. Campaign 'Clip tốt nhất T4' đã PAUSED. Dư Luận giờ chạy trên Adsplus 5 (TK Chương). Daily post organic + Traffic GA4 = số tay tới 15/6 (chưa pull lại). Ô '—' = chưa có actual.",
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
    { date: "2026-06-22", note: "live ads tách theo demand; clip T4 paused; +3 bài dư luận + 2 bài SEO Local cổ vai gáy", metrics: {
      "Tổng số earned media": 13, "Post kênh dư luận": 9,
      "SEO sessions /discovers": 0, "Bài SEO live": 6, "CPA (post gắn ads)": 64 } },
  ],

  /* ---------- 1. TỔNG QUAN — MỤC TIÊU & % ĐẠT ---------- */
  tongQuan: [
    { ten: "Tổng số earned media", target: 23, actual: 13, donVi: "bài", note: "Cộng tổng: Dư luận 9 (4 Threads + 5 FB page) + KOC Hoàng Không Sao 4 clip TikTok T6 = 13/23. (Daily 30Shine tách theo dõi riêng ở tab Daily, không tính vào đây).", nguon: "Live đa kênh" },
    { ten: "Tổng reach thu về", target: 1625000, actual: 592597, donVi: "reach", note: "Cập nhật 22/6 (chỉ ORGANIC): Daily 30Shine 39.139 (gồm Anh tôi 1.357 + Thera 982 + WC Argen organic 2.524) + Dư luận Threads 77.157 (view) + FB dư luận boost 181.674 (Trụ cột 137.700 + Burnout 43.000 + Coder 974) + KOC Hoàng TikTok T6 294.627 (view). ⚠️ Bài Daily WC 'Anh em Argen' organic 2.524 — phần 2,6M là do ADS → KHÔNG tính. KHÔNG cộng riêng bảng 'Dư luận ads' (đã trong reach FB boost). Chưa gồm: Đàn Ông Bụi, Kiến Thức Tinh Hoa, UGC.", nguon: "Live đa kênh" },
    { ten: "Post kênh dư luận", target: 18, actual: 9, donVi: "bài", note: "Đã lên 9/18 (tới 22/6): Threads 4 (2 @trag.ngyen + 2 @hanoihiddenvibes) + FB page 5. Người làm: Chương. 3 bài mới 22/6 (cổ vai gáy/gội) số cần verify.", nguon: "Mục tiêu" },
    { ten: "Engagement rate", target: 1, actual: 4.1, donVi: "%", note: "Daily 30Shine (4 bài có số): Lượt tương tác FB 1.405 / reach 34.276 = 4,1% (FB tính cả lượt click). Nếu chỉ react+cmt+share = 237/34.276 = 0,69%. Nguồn: Business Suite.", nguon: "Business Suite" },
    { ten: "CPA (post gắn ads)", target: 21, actual: 64, donVi: "K (đạt khi ≤)", note: "Mục tiêu <21K. CẢNH BÁO: camp 'Clip tốt nhất T4' đạt 19.3K (11.870 đơn) nhưng đã PAUSED. 5 camp purchase tách theo demand đang chạy: CPA gộp ~64K (Tour 76.6K, Nghỉ trưa 66K, Thera 62K, Tóc đẹp đi làm 59K, Tan làm 52K) — đang ramp, CPM 12–14K đẹp nhưng CPA chưa về ngưỡng. Theo dõi sát tuần tới.", nguon: "Meta live 1–22/6", thapTotHon: true },
    { ten: "SEO sessions /discovers", target: 510, actual: 0, donVi: "ss/tháng", note: "Baseline 0 (blog mới từ 5/2026). Lộ trình tuần: W23=30 → W24=80 → W25=150 → W26=250.", nguon: "SEO PLAN T6" },
    { ten: "Bài SEO live", target: 9, actual: 6, donVi: "bài", note: "6 bài đã publish: 4 bài W22 + 2 bài Local cổ vai gáy HN & HCM (đăng 22/6). Còn bài #10 Thera timeline (in-progress) + #5–9 plan. Đã VƯỢT tiến độ về số bài, lệch chủ đề so plan gốc (đẩy mạnh cụm cổ vai gáy/Thera).", nguon: "SEO PLAN T6" },
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
    { tuyen: "KOC Hoàng (Không Sao)", soBai: 8, reach: 1200000, concept: "Biến hình tóc trẻ/che khuyết điểm dân VP", nguoiLam: "Hoàng", note: "Quét yt-dlp 22/6 (@hoangkhonggsao) — CHỈ T6/2026: 4 clip / 294.627 view. 1 clip gánh toàn bộ: nhuộm Ombre sếp Tùng 2/6 = 293.000 (99,5%); 3 clip 12-13/6 flop (Skincare 357 · WC đi làm 530 · Dự đoán MV Tùng 740). ⚠️ Mới 4/8 clip & lệ thuộc 1 hit. (view = proxy công khai, không phải reach Analytics)" },
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
    { ngay: "23/6", postGoc: "Người trẻ 28-35 đã đau cổ vai gáy như U60 — do việc hay lười?", demand: "Thera", kenh: "FB + Threads", trangThai: "Done (lên sớm 22/6: FB Đàn Ông Bụi + 2 Threads @hanoihiddenvibes)" },
    { ngay: "25/6", postGoc: "Đàn ông tự thưởng cho bản thân thế nào tháng này?", demand: "Tour", kenh: "Threads", trangThai: "Cần làm" },
    { ngay: "26/6", postGoc: "Tan tầm tắc đường: về thẳng nhà hay 'trốn' 1 tiếng? Vợ nghĩ gì?", demand: "Tan làm", kenh: "FB", trangThai: "Cần làm" },
  ],

  /* Dư luận — SỐ THẬT từ 2 campaign ads chạy trên TK Tỉnh (Meta API, 1–15/6).
     3 creative đang chạy: P01 Trụ cột · P02 Coder · P03 Burnout (đều demand Tour/D01). */
  duLuanAds: {
    ky: "1–22/6/2026",
    nguon: "Meta Ads API · Adsplus 5 (Tỉnh) · TK Chương",
    tongChi: 2107936, reachGop: 208039, tongTuongTac: null,
    campaigns: [
      { ten: "ALL · Tương tác · Dư Luận · Chương", loai: "Engagement", spend: 1429876, reach: 79556, impr: 101464, ctr: 1.87, cpm: 14092, freq: 1.28, eng: null },
      { ten: "ALL · Reach · Dư Luận · Chương", loai: "Awareness", spend: 678060, reach: 128483, impr: 135079, ctr: 1.10, cpm: 5020, freq: 1.05, eng: null },
    ],
    posts: [
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Reach", page: "Gộp seeding", reach: 9116, impr: 9396, spend: 48656, ctr: 0.24, cpm: 5178, clicks: 23, react: 2, eng: 174 },
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Tương tác", page: "Gộp seeding", reach: 4223, impr: 4922, spend: 87227, ctr: 1.08, cpm: 17722, clicks: 53, react: 29, eng: 36 },
      { post: "P01 · Trụ cột (ngồi trong xe)", camp: "Tương tác", page: "Bản Lĩnh Đàn Ông", reach: 152, impr: 161, spend: 2189, ctr: 1.24, cpm: 13596, clicks: 2, react: 1, eng: 1 },
      { post: "P03 · Burnout thức khuya", camp: "Tương tác", page: "Kinh Doanh Châu Á", reach: 2151, impr: 2185, spend: 9639, ctr: 0.14, cpm: 4411, clicks: 3, react: 4, eng: 4 },
      { post: "P03 · Burnout thức khuya", camp: "Tương tác", page: "Kinh Doanh Châu Á", reach: 1811, impr: 1811, spend: 7503, ctr: 0.28, cpm: 4143, clicks: 5, react: 2, eng: 2 },
      { post: "P02 · Coder 'Năm 29 tuổi'", camp: "Tương tác", page: "Tạp Chí KD Thời Đại", reach: 48, impr: 53, spend: 551, ctr: 1.89, cpm: 10396, clicks: 1, react: 1, eng: 1 },
    ],
    note: "Tới 22/6: 2 camp Dư Luận đã scale mạnh — reach gộp 208K (×12 so với 17K ngày 15/6), chi 2.1M. CTR Tương tác lên 1.87% (tốt). CPM Reach 5.020đ vẫn rất rẻ. Bảng 'posts' bên dưới là breakdown CŨ kỳ 1–15/6 (chưa pull lại ad-level kỳ 1–22). 5–9 đơn purchase là phụ (mục tiêu là reach/tương tác seeding).",
  },

  /* Daily post organic trên page 30Shine Official (5 link Chương gửi) — KHÔNG phải earned media.
     FB ẩn reach organic sau login → chỉ lấy được tương tác công khai (cảm xúc/bình luận/share). */
  dailyPosts: {
    ky: "Mùa WC · T6/2026 · 30Shine Official (organic)",
    mucTieu: { soBai: 18, reach: 400000, note: "Theo tuyến Content Always-on (PLAN EARNED MEDIA T6): 18 bài organic / 400K reach." },
    tongReach: 39139, tongView: 50512, tongReact: 354, tongCmt: 37, tongShare: 15,
    note: "Quy ước: View ('Lượt xem') = reach proxy (bài nào chưa có 'Người xem' thì lấy view). Chỉ tính ORGANIC. 7 bài. Bài WC 'Anh em Argen': organic 2.524, phần 2,6M là do ads → KHÔNG tính vào tổng.",
    list: [
      { ten: "Tour du lịch 45′ — không cần nghỉ phép, không cần đi xa", demand: "Tour", reach: 1254, view: 2156, react: 101, cmt: 13, share: 2, url: "https://www.facebook.com/share/p/17njnFn4Cn/" },
      { ten: "Hào quang nhà vô địch — Hoàng Sao 'The GOAT' (250tr)", demand: "Lan toả WC", reach: 3087, view: 5917, react: 67, cmt: 4, share: 4, url: "https://www.facebook.com/share/p/18mW3X2VMm/" },
      { ten: "Thức khuya xem WC — gội/massage hồi sức 45′", demand: "Nghỉ trưa", reach: 28974, view: 35068, react: 22, cmt: 16, share: 3, url: "https://www.facebook.com/share/p/14ixGifgi3g/" },
      { ten: "Stíp Jobs VN gội đầu sau tan làm — xoá hói, tóc bồng", demand: "Tan làm", reach: 961, view: 1565, react: 4, cmt: 0, share: 1, url: "https://www.facebook.com/share/p/1JQmWKnd7v/" },
      { ten: "Anh em Argen ăn mừng Hattrick WC — căn hộ 45′ 🏆 (organic 2.524; 2,6M do ads — KHÔNG tính)", demand: "Lan toả WC", reach: 2524, view: 2524, react: 134, cmt: 3, share: 2, click: 1039, url: "https://web.facebook.com/share/p/1bCemYE4Nz/" },
      { ten: "Anh tôi tr… (16/6)", demand: "—", reach: 1357, view: 2300, react: 24, cmt: 1, share: 1, url: "https://web.facebook.com/share/p/1HUQSfwvTC/" },
      { ten: "Thera Studio 1 Ngủ — 'Căn hộ phục hồi' gỡ rối cổ vai gáy (20/6)", demand: "Thera", reach: 982, view: 982, react: 2, cmt: 0, share: 2, url: "https://web.facebook.com/share/p/1828U1zVGY/" },
    ],
  },

  /* Dư luận organic của Chương — 6 bài đã lên (2 Threads + 4 Facebook page) tới 15/6.
     Threads = view + tương tác thật. FB = reactions/cmt/share công khai thật (reach organic FB ẩn sau login).
     LƯU Ý: 4 link Chương gọi "TikTok" thực tế là 4 post FB trên 4 page dư luận — đã lấy theo link thật. */
  duLuanOrganic: {
    ky: "Tới 22/6/2026",
    reachThreads: 77157,
    reactionsFB: 2487,
    note: "Số THẬT từ Business Suite + Threads (22/6). Bài Threads 'Khách quen 8h tối' bùng: 76.600 view / 1.400 like / 139 cmt / 13 repost / 23 share. 3 bài FB Trụ cột·Burnout·Coder = bài ĐƯỢC BOOST → cột View = 'Người xem' (reach tổng organic+ads): Trụ cột 137.700, Burnout 43.000, Coder 974 (Coder gần như chưa được đẩy). Còn thiếu số: Đàn Ông Bụi (cổ vai gáy 22/6), Kiến Thức Tinh Hoa (Vai gáy 30t), 2 Threads @hanoihiddenvibes mới (cổ vai gáy 478 view / gội màu mè 8 view — mới đăng).",
    list: [
      { ten: "Khách quen 8h tối T6 — 'chỗ duy nhất không ai gọi là sếp'", kenh: "Threads @trag.ngyen", view: 76600, like: 1400, cmt: 139, share: 23, url: "https://www.threads.com/@trag.ngyen/post/DZjv7M9FCny" },
      { ten: "Kiểm tra độ mệt đàn ông qua 5 phút nằm ghế gội", kenh: "Threads @trag.ngyen", view: 71, like: 1, cmt: 1, share: 1, url: "https://www.threads.com/@trag.ngyen/post/DZjxA-MlHqU" },
      { ten: "Trụ cột 36t (ngồi trong xe trước cổng nhà) · BOOST", kenh: "FB · Bản Lĩnh Đàn Ông", view: 137700, like: 855, cmt: 17, share: 5, url: "https://www.facebook.com/permalink.php?story_fbid=pfbid03kFNJYD1mcnvsoKiy2oMBTE1dHv3oPoK515gAtzRKMRbGQ1LAE2TySfpP4PdnkK4l&id=61563496486162" },
      { ten: "Burnout 27t (lương ổn mà sáng nào cũng mệt) · BOOST", kenh: "FB · Kinh Doanh Châu Á", view: 43000, like: 1200, cmt: 15, share: 10, url: "https://www.facebook.com/permalink.php?story_fbid=pfbid02vJRskkBp8aNhBKrLBtgQvh6YisxbmGDVVVBJMJTdmwu27UDakyEzrPZdSoby2Nbol&id=61563416021934" },
      { ten: "Coder 29t (7 năm code, trống rỗng) · BOOST", kenh: "FB · Tạp Chí KD Thời Đại", view: 974, like: 432, cmt: 11, share: 0, url: "https://www.facebook.com/permalink.php?story_fbid=pfbid0uCeo6qxhEg94FEFzz4xEAogDXpqZ1C6DjcgRbaqabdWeHJYoeLeBwSHvYfhWtvGQl&id=61563276163931" },
      { ten: "Vai gáy 30t (cơ thể báo động, massage 125k)", kenh: "FB · Kiến Thức Tinh Hoa", view: null, like: null, cmt: null, share: null, url: "https://www.facebook.com/permalink.php?story_fbid=pfbid06YKJPJEZUDxJnSbokHaQPn7ovtTBSHG9R2NaHrcR7fMaCrphmMJTtWQp7PNmrFBXl&id=61563812254323" },
      { ten: "28t cổ vai gáy đau như chú u60 — bị phán 'tại lười' (22/6)", kenh: "FB · Đàn Ông Bụi", view: null, like: null, cmt: null, share: null, url: "https://www.facebook.com/share/p/1BXnfHiDNf/" },
      { ten: "29t cổ vai gáy đau như chú u60 — do việc hay lười? (22/6)", kenh: "Threads @hanoihiddenvibes", view: 478, like: 2, cmt: 2, share: null, url: "https://www.threads.com/@hanoihiddenvibes/post/DZ3ooYkmWUS" },
      { ten: "Đàn ông gội đầu ngoài hàng là màu mè? (22/6)", kenh: "Threads @hanoihiddenvibes", view: 8, like: null, cmt: 2, share: null, url: "https://www.threads.com/@hanoihiddenvibes/post/DZ3p57nGaK6" },
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
    { n: 10, tuan: "W25", loai: "Pillar·GEO", ten: "Thera Studio – Du Lịch 45 Phút: gội dưỡng sinh + massage CVG, kể theo từng phút", demand: "Trạm Phục Hồi / Tour", kw: "thera studio 30shine / combo gội massage nam", vol: "—", wc: false, status: "in_progress", note: "Draft HTML sẵn (22/6, ~1.700 từ, cấu trúc timeline, local HN+HCM). CHỜ paste Strapi Discover. [CẦN DATA]: giá/bước combo chính xác + số salon HN/HCM + JSON-LD nhờ dev." },
    { n: 11, tuan: "W25", loai: "Supporting·Local", ten: "Gội đầu massage cổ vai gáy cho nam ở Hà Nội: đi đâu cho đáng?", demand: "Trạm Phục Hồi", kw: "gội đầu massage cổ vai gáy nam hà nội", vol: "—", wc: false, status: "published", note: "Đăng 22/6. Local HN. slug: goi-dau-massage-co-vai-gay-cho-nam-ha-noi. [CẦN link live + GSC]." },
    { n: 12, tuan: "W25", loai: "Supporting·Local", ten: "Gội đầu massage cổ vai gáy cho nam ở TP.HCM: chọn sao cho chuẩn?", demand: "Trạm Phục Hồi", kw: "gội đầu massage cổ vai gáy nam tphcm", vol: "—", wc: false, status: "published", note: "Đăng 22/6. Local HCM. slug: goi-dau-massage-co-vai-gay-cho-nam-tphcm. [CẦN link live + GSC]." },
  ],
  /* Rank Google organic THẬT — audit qua WebSearch (seo-audit) 15/6. */
  seoRankAudit: {
    ngay: "2026-06-15",
    nguon: "WebSearch (Google organic, US endpoint) — proxy rank, chưa thay GSC",
    note: "Blog /discovers/ mới từ 5/2026, chưa authority → CHƯA bài nào vào top 10 cho keyword mục tiêu. Chỉ homepage 30shine.com rank ~#5 cho 'cắt tóc nam gần đây'. Số vị trí chính xác cần Google Search Console.",
    brand: "Brand SERP 'review 30shine': blog.30shine.com đứng #1 (bài phụ) nhưng review chính do VOZ · 1900 · SevenAM · barber-shop kiểm soát → nên đẩy review own-domain.",
    rows: [
      { kw: "kiểu tóc nam đẹp 2026", vol: "3.000+", rank: "Chưa top 10", doiThu: "chiaki · pasgo · cellphones", bai: "Bài 1 Pillar" },
      { kw: "gội đầu massage thư giãn nam", vol: "1.500", rank: "Chưa top 10", doiThu: "haspa · onsena · luaspa", bai: "Bài 2 Pillar" },
      { kw: "30shine giá bao nhiêu", vol: "2.000", rank: "Chưa top (bên 3 chiếm)", doiThu: "healthmart · reviewphongtap · blogtranphu", bai: "Bài 3" },
      { kw: "massage cổ vai gáy dân VP", vol: "800", rank: "Chưa top 10", doiThu: "bookingcare · dovako · anspa", bai: "Bài 4" },
      { kw: "đau cổ vai gáy dân VP", vol: "2.500", rank: "Chưa top (báo y tế)", doiThu: "suckhoedoisong · vinmec · dantri", bai: "Bài 5 in-progress" },
      { kw: "cắt tóc nam gần đây", vol: "4.000+", rank: "~#5 (homepage)", doiThu: "bachhoaxanh · classic.vn · instagram", bai: "Bài 9 pending" },
    ],
  },
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

  /* LIVE — Meta API, 1–22/6/2026 (Adsplus 5 "Tỉnh"). Campaign PURCHASE đã tách theo demand. */
  liveAds: {
    ky: "1–22/6/2026",
    accounts: [
      { ten: "Adsplus 5 (Tỉnh)", chi: 534.3, cpm: 16205, ctr: 0.92, reach: 5748174, note: "Account chính đang chạy — gồm 6 camp purchase + 2 camp Dư Luận." },
      { ten: "Adsplus 5.2 (NSM Tôn Cương)", chi: 22.4, cpm: 25709, ctr: null, reach: 547307, note: "Toàn bộ camp salon-location đã PAUSED (CPM 55–125K, CPA 119–799K). reach = cộng thô chưa khử trùng." },
    ],
    campaigns: [
      { ten: "Purchase · Clip tốt nhất hệ thống (T4) — ĐÃ PAUSED", chi: 229.3, cpm: 20762, ctr: 1.17, donHang: 11870, cpa: 19.3, status: "PAUSED" },
      { ten: "Demand · Tour du lịch 45′", chi: 86.3, cpm: 12775, ctr: 1.04, donHang: 1126, cpa: 76.6, status: "ACTIVE" },
      { ten: "Demand · Tóc đẹp đi làm", chi: 67.5, cpm: 14445, ctr: 0.84, donHang: 1140, cpa: 59.2, status: "ACTIVE" },
      { ten: "Demand · Thera Studio", chi: 51.2, cpm: 12739, ctr: 0.35, donHang: 827, cpa: 61.9, status: "ACTIVE" },
      { ten: "Demand · Nghỉ trưa", chi: 40.5, cpm: 12631, ctr: 0.76, donHang: 613, cpa: 66.1, status: "ACTIVE" },
      { ten: "Demand · Tan làm", chi: 30.4, cpm: 12001, ctr: 0.38, donHang: 582, cpa: 52.2, status: "ACTIVE" },
      { ten: "Salon · Location Purchase · Mess (T5)", chi: 26.8, cpm: 55243, ctr: 2.71, donHang: 740, cpa: 36.2, status: "ACTIVE" },
    ],
    tongChi: 556.7, cpmTong: 16205, tongReach: 5748174,
    note: "BƯỚC NGOẶT: camp 'Clip tốt nhất T4' (CPA 19.3K, 11.870 đơn) đã PAUSED; spend dồn sang 5 camp tách theo demand. 5 camp demand: 275.9M chi / 4.288 đơn → CPA gộp ~64K (cao hơn 19K vì mới ramp + tách nhỏ). CPM demand thấp đẹp (12–14K) nhưng CPA chưa về ngưỡng. Tour chi nhiều nhất (86M) nhưng CPA cao nhất (76.6K). HN queryable nhưng chưa bật MCP; HCM disabled; Bluefocus bật nhưng 0 chi T6.",
  },

  /* ---------- BƯỚC ĐỆM: TỪNG CAMPAIGN PURCHASE — TRƯỚC vs SAU KHI DƯ LUẬN MỞ PHỄU ----------
     5 camp demand purchase START 11/6; camp dư luận (Tương tác+Reach) START 14/6 20:18.
     → mỗi camp: TRƯỚC dư luận = 11–13/6 (3 ngày) vs SAU = 14–22/6 (9 ngày). Meta API live. */
  duLuanImpact: {
    catMoc: "14/6/2026 (camp dư luận lên sóng)",
    catMocLyDo: "5 camp demand purchase đều START 11/6; 2 camp dư luận (mở phễu) START 14/6 20:18. So mỗi camp: TRƯỚC = 11–13/6 (3 ngày đầu) vs SAU = 14–22/6 (9 ngày). ⚠️ CONFOUNDER: 'Trước' = 3 ngày launch (Meta honeymoon, freq ~1.6, CPA tự nhiên đẹp); 'Sau' đã scale chi 4–8× (freq 1.9–2.6) → CPA tăng phần lớn là SCALING DECAY, không phải do dư luận.",
    /* Control sạch nhất: clip T4 — CÙNG 1 creative chạy xuyên cả 2 kỳ */
    control: { ten: "Clip tốt nhất T4 (CÙNG creative cả 2 kỳ = control sạch)", cpmT: 23426, cpmS: 18387, ctrT: 1.39, ctrS: 0.98, cpaT: 27.3, cpaS: 24.4,
      nhanDinh: "Cùng 1 clip trước→sau: CPM −21%, CPA −11% (nhỉnh lên nhẹ), CTR −30%. Đây là tín hiệu DUY NHẤT có thể nhất quán với 'halo' dư luận (impression rẻ hơn + chuyển đổi nhỉnh trên cùng creative) — NHƯNG vẫn trong biên dao động tuần + trùng mùa World Cup, KHÔNG đủ chứng minh nhân quả." },
    perCamp: [
      { ten: "Tour du lịch 45′", cpmT: 18991, cpmS: 11780, ctrT: 1.96, ctrS: 0.89, cpaT: 39.6, cpaS: 101.9, dnT: 148, dnS: 76 },
      { ten: "Tóc đẹp đi làm",  cpmT: 21455, cpmS: 13353, ctrT: 1.11, ctrS: 0.80, cpaT: 30.5, cpaS: 77.9,  dnT: 148, dnS: 77 },
      { ten: "Thera Studio",    cpmT: 17261, cpmS: 12094, ctrT: 0.47, ctrS: 0.33, cpaT: 27.4, cpaS: 83.2,  dnT: 105, dnS: 57 },
      { ten: "Nghỉ trưa",       cpmT: 18992, cpmS: 11720, ctrT: 1.66, ctrS: 0.63, cpaT: 28.7, cpaS: 95.0,  dnT: 88,  dnS: 39 },
      { ten: "Tan làm",         cpmT: 15220, cpmS: 11190, ctrT: 0.65, ctrS: 0.31, cpaT: 23.5, cpaS: 89.3,  dnT: 108, dnS: 29 },
    ],
    ketLuan: "MỌI camp demand: SAU dư luận CPM giảm đều (−26→−38%) NHƯNG CTR giảm và CPA tăng 2.5–3.8× — KHÔNG thấy lift chuyển đổi như kỳ vọng 'mở phễu'. Tuy nhiên KHÔNG quy được cho dư luận: 'trước' là 3 ngày launch honeymoon, 'sau' đã scale 4–8× nên CPA tăng là scaling decay tự nhiên. Riêng control sạch (clip T4 cùng creative) lại nhỉnh lên nhẹ (CPA −11%). ⇒ Bằng chứng HIỆN TẠI KHÔNG đủ để kết luận dư luận giúp hay hại tín hiệu purchase: dư luận mới 0,4% spend + 9 ngày, quá sớm & quá nhỏ; còn bị scaling decay che mất.",
    caoDuoc: "Muốn đo THẬT 'mở phễu', đừng nhìn CPA camp đang scale mà nhìn: (1) branded search '30shine' trên GSC trước/sau 14/6, (2) traffic Direct/Branded trên GA4, (3) CTR/CVR của riêng tệp retarget người ĐÃ xem dư luận vs cold, (4) lý tưởng = geo holdout (tỉnh có seeding vs không). [CẦN DATA GA4/GSC].",
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
    { uuTien: "Cao", noiDung: "🔴 Engine chính 'Clip tốt nhất T4' (CPA 19.3K, 11.870 đơn) đã PAUSED → 5 camp purchase tách theo demand đang gánh, CPA gộp ~64K (gấp 3 ngưỡng 21K). Quyết định gấp: cho demand camp thêm ~1 tuần ramp + cắt camp CPA cao nhất, hay bật lại clip làm baseline đối chứng?", canCu: "Meta live 1–22/6" },
    { uuTien: "Cao", noiDung: "⚠️ Tour du lịch ngốn chi nhiều nhất (86M) nhưng CPA cao nhất (76.6K). Thera & Tan làm CTR rất thấp (0.35% / 0.38%) → soát lại hook/creative 3 camp này; CPM toàn bộ đẹp (12–14K) nên vấn đề nằm ở chuyển đổi, không phải phân phối.", canCu: "Meta live campaign" },
    { uuTien: "Cao", noiDung: "🔴 Camp 'Salon Location Mess' CPM 55K (đã giảm từ 84K) nhưng CPA 36K vẫn cao — soát targeting hoặc tắt. Toàn bộ camp salon trên Adsplus 5.2 đã paused (CPA 119–799K).", canCu: "Meta live campaign" },
    { uuTien: "TB", noiDung: "✅ Dư Luận seeding scale tốt: reach gộp 208K (×12 so 15/6), CPM Reach 5.020đ rất rẻ, CTR Tương tác 1.87%. Có thể tăng ngân sách camp Reach để đẩy phủ.", canCu: "Meta live · TK Chương" },
    { uuTien: "TB", noiDung: "🔴 GA4 Unassigned 33.6% (số 1–10/6, chưa pull lại) → tag UTM hỏng. Vẫn là blocker attribution; cần pull lại GA4 + fix tag.", canCu: "GA4 (chưa refresh)" },
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
