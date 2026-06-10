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
    capNhat: "2026-06-10",
    ghiChu: "Mục tiêu & demand lấy từ PLAN EARNED MEDIA THÁNG 6. Ads = Meta API live (1–10/6). Traffic = GA4 live. Ô '—' = chưa có actual.",
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

  /* ---------- 1. TỔNG QUAN — MỤC TIÊU & % ĐẠT ---------- */
  tongQuan: [
    { ten: "Tổng số earned media", target: 23, actual: 0, donVi: "bài", note: "Có gắn CTA link booking/dịch vụ + seeding. Flow: đăng theo demand → ads test 2 ngày → bài cắn tiền giữ, không cắn thay ngay.", nguon: "Mục tiêu" },
    { ten: "Tổng reach thu về", target: 2025000, actual: null, donVi: "reach", note: "Cộng dồn các kênh KOC + UGC + Dư luận + Lan toả.", nguon: "Mục tiêu" },
    { ten: "Post kênh dư luận", target: 18, actual: 0, donVi: "bài", note: "Threads 5 + TikTok 3 + Facebook 10. Người làm: Chương.", nguon: "Mục tiêu" },
    { ten: "Engagement rate", target: 1, actual: null, donVi: "%", note: "Mục tiêu tỷ lệ tương tác ≥1%.", nguon: "Mục tiêu" },
    { ten: "CPA (post gắn ads)", target: 21, actual: 18.8, donVi: "K (đạt khi ≤)", note: "Mục tiêu <21K. Campaign purchase chính đang chạy CPA 18.8K (8.212 đơn) → ĐẠT.", nguon: "Mục tiêu + Meta live", thapTotHon: true },
    { ten: "SEO traffic /discover", target: 500, actual: 155, donVi: "ss/tháng", note: "T5 actual 155. Target T6 400–600.", nguon: "SEO_FINAL_REPORT_T5" },
    { ten: "SEO Entity Score", target: 20, actual: 0, donVi: "điểm", note: "Schema chưa deploy.", nguon: "SEO_FINAL_REPORT_T5" },
    { ten: "Bài Pillar Insecurity", target: 4, actual: 0, donVi: "bài", note: "Chưa có bài nào.", nguon: "SEO_MASTER_PLAN" },
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
    { tuyen: "KOC Hoàng (Không Sao)", soBai: 8, reach: 1200000, concept: "Biến hình tóc trẻ/che khuyết điểm dân VP", nguoiLam: "Hoàng", note: "8 clip · móc nối kiểu tóc cầu thủ viral" },
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

  /* ---------- 3. SEO ---------- */
  seoKeywords: [
    { kw: "dịch vụ ráy tai an toàn", rank: 6, cluster: "USP (lấy ráy tai)", trangThai: "Quick win" },
    { kw: "lấy ráy tai nam giới tốt nhất", rank: null, cluster: "USP", trangThai: "Chưa top 10" },
    { kw: "nam công sở giờ trưa đi đâu relax", rank: null, cluster: "Escape/Relax", trangThai: "Chưa top 10" },
    { kw: "trốn áp lực công việc 45 phút", rank: null, cluster: "Escape/Relax", trangThai: "Chưa top 10" },
    { kw: "kiểu tóc nam văn phòng", rank: null, cluster: "Transition", trangThai: "Chưa top 10" },
    { kw: "giải pháp cho nam bị hói", rank: null, cluster: "Insecurity", trangThai: "Chưa top 10" },
    { kw: "nam 35 tuổi trông trẻ ra", rank: null, cluster: "Insecurity", trangThai: "Chưa top 10" },
    { kw: "cắt tóc nam Hà Nội", rank: null, cluster: "Transactional", trangThai: "Chưa top 10" },
    { kw: "salon tóc nam tốt nhất", rank: null, cluster: "Transactional", trangThai: "Chưa top 10" },
  ],
  seoClusters: [
    { ten: "Insecurity (rụng tóc + trẻ hóa)", tyTrong: 33, soBai: 8, note: "Pillar lớn nhất — CHƯA có bài" },
    { ten: "Hybrid (tai ngứa + self-care)", tyTrong: 25, soBai: 6, note: "" },
    { ten: "Escape / Relax", tyTrong: 21, soBai: 5, note: "" },
    { ten: "Transition sự nghiệp", tyTrong: 21, soBai: 5, note: "" },
  ],
  seoArticles: [
    { ten: "Thera Studio: Gội Dưỡng Sinh & Massage CVG cho nam", ngay: "2026-05-31", trangThai: "Publish", pillar: "Escape" },
    { ten: "Du Lịch 45 Phút — Shine Combo 125K", ngay: "2026-06-01", trangThai: "Schema sẵn, chưa đủ nội dung", pillar: "Escape" },
    { ten: "Hack 7 tuổi với 1 lần cắt tóc (nam 35–45)", ngay: null, trangThai: "Chưa viết", pillar: "Insecurity" },
    { ten: "Rụng tóc nam tuổi 30 — nguyên nhân + giải pháp", ngay: null, trangThai: "Chưa viết", pillar: "Insecurity" },
  ],
  seoTargets: { t5Actual: 155, t6Target: "400–600", q3Target: "2.000", t10Target: "4.000–8.000", engagementRate: 67.1, engagementTarget: 60 },

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
