/* ============================================================
   DASHBOARD 30SHINE — DỮ LIỆU
   Nguồn: tổng hợp từ workspace d:\MARKETING (file thật, 2026-06)
   Cách refresh: chạy lại lệnh regenerate -> ghi đè file này -> F5 trình duyệt
   Ô nào chưa có số thật -> để actual: null + note "Cần cập nhật"
   ============================================================ */
window.DASHBOARD_DATA = {
  meta: {
    ten: "Dashboard Marketing 30Shine",
    ky: "Tháng 6/2026",
    capNhat: "2026-06-10 (ads + traffic LIVE)",
    ghiChu: "Ads = Meta API live (1–10/6, tài khoản Adsplus query được; HN/HCM/Bluefocus chưa bật MCP hoặc disabled). Traffic = GA4 30shine.com live. Ô 'Cần cập nhật' = chưa có số thật.",
  },

  /* ---------- 1. TỔNG QUAN — MỤC TIÊU & % ĐẠT ---------- */
  tongQuan: [
    {
      ten: "Ngân sách Branding đã phân bổ",
      target: 600, actual: 600, donVi: "triệu",
      note: "Đã chia 5 tuyến (TMXD 42% / KOC 25% / Test Demand 15% / Salon 10% / Hoàng Sao 8%).",
      nguon: "MASTER_BRANDING_PLAN_T5_2026.xlsx",
    },
    {
      ten: "Video sản xuất (tổng tuyến)",
      target: 62, actual: null, donVi: "video",
      note: "Test 10 + KOC 20 + Hoàng Sao 18 + TMXD 14. Số đã giao thực tế cần cập nhật.",
      nguon: "MASTER_BRANDING_PLAN_T5_2026.xlsx",
    },
    {
      ten: "Demand test PASS (WIN)",
      target: 4, actual: 1, donVi: "demand",
      note: "PASS = tiêu hết 1.6tr/3 ngày. WIN xác nhận: Tĩnh Tai (CPA STAR ~22K). Còn lại đang test.",
      nguon: "PLAN_TEST_DEMANDS_T5 / DEMAND_MAPPING",
    },
    {
      ten: "SEO traffic /discover",
      target: 500, actual: 155, donVi: "ss/tháng",
      note: "T5 actual 155 ss. Target T6 = 400–600 ss (×3–4). Mốc 2.000 dời sang Q3.",
      nguon: "SEO_FINAL_REPORT_T5_2026",
    },
    {
      ten: "SEO Entity Score",
      target: 20, actual: 0, donVi: "điểm",
      note: "Schema JSON-LD chưa deploy (cần dev render) → actual = 0.",
      nguon: "SEO_FINAL_REPORT_T5_2026",
    },
    {
      ten: "Bài Pillar Insecurity",
      target: 4, actual: 0, donVi: "bài",
      note: "Pillar lớn nhất (33% / 8 bài T5–T10). T5 mới ra 2 bài nhóm thư giãn, CHƯA có bài Insecurity.",
      nguon: "SEO_MASTER_PLAN_T5-T10",
    },
  ],

  /* ---------- 2. CONTENT THEO LÔ ---------- */
  demands: [
    { id: "D1", ten: "Garage Phong Độ", vanDe: "Cổ-vai-gáy cứng 8–12h ngồi máy; dị ứng ngôn ngữ 'thư giãn' → bảo dưỡng cơ khí nam", trangThai: "TEST" },
    { id: "D2", ten: "Bảo Dưỡng Cổ Vai Gáy", vanDe: "Maintenance định kỳ CVG (pain P1)", trangThai: "LOCK" },
    { id: "D3", ten: "Power Nap / Bữa Trưa Phong Độ", vanDe: "Slot trưa fixed booking, reboot 45 phút", trangThai: "TEST" },
    { id: "D4", ten: "Tĩnh Tai / Lấy Ráy Tai", vanDe: "Ngứa tai do AirPods 6–10h/ngày; lấy ráy tai chuyên", trangThai: "WIN" },
    { id: "D15", ten: "Phòng Hồi Sức Sau Trận", vanDe: "Recovery sport (pickleball, marathon, bóng phủi) — pain P10/P11", trangThai: "TEST" },
    { id: "D16", ten: "Anh Tin — Cố Vấn Phong Độ", vanDe: "Character Zalo nhắc kỳ (pain Q10)", trangThai: "TEST" },
    { id: "D19", ten: "Lễ Bảo Dưỡng Hàng Tháng", vanDe: "Discipline/retention — chống 80% rớt sau 12 tuần", trangThai: "TEST" },
    { id: "D21", ten: "Kit Mang Về 30 Ngày", vanDe: "Salon-to-home, AOV +30–50%", trangThai: "TEST" },
  ],

  concepts: [
    { id: "C1", ten: "Crew Rest 30Shine", demand: "D3", chang: "Chặng 1", uuTien: "TOP", targetCPA: "14–20K", note: "Naming mượn từ Phi công 777" },
    { id: "C2", ten: "NASA Nap 26 Phút", demand: "D3", chang: "Chặng 1", uuTien: "TOP", targetCPA: "14–20K", note: "NASA Ames 1995" },
    { id: "C3", ten: "Tactical Nap — Như SEAL", demand: "D3", chang: "Chặng 1", uuTien: "TOP", targetCPA: "14–20K", note: "Navy SEAL" },
    { id: "C4", ten: "Service CVG 30S", demand: "D2", chang: "Chặng 1", uuTien: "A1 Garage", targetCPA: "14–20K", note: "Mercedes servicing" },
    { id: "C5", ten: "Mic Servicing", demand: "D4", chang: "Chặng 1", uuTien: "TOP", targetCPA: "14–20K", note: "Shure SM7B" },
    { id: "C6", ten: "Rửa Engine Da Đầu", demand: "D4", chang: "Chặng 1", uuTien: "A1 Garage", targetCPA: "14–20K", note: "Garage rửa engine" },
    { id: "C7", ten: "Physio 30 Phút", demand: "D2", chang: "Chặng 2", uuTien: "OK", targetCPA: "14–20K", note: "" },
    { id: "C8", ten: "ENT Check 30 Phút", demand: "D4", chang: "Chặng 2", uuTien: "OK", targetCPA: "14–20K", note: "" },
  ],

  loContent: [
    { lo: "videos_batch_2", soND: 6, concept: "Spa/Relax/Combo 2", demand: "D3/D4", trangThai: "Đã download (18/5)", kenh: "FB/TikTok" },
    { lo: "T6 — W1 (1–7/6)", soND: 3, concept: "Garage Phong Độ", demand: "D1", trangThai: "Plan", kenh: "FB Reel, TikTok" },
    { lo: "T6 — W2 (8–14/6)", soND: 4, concept: "Tĩnh Tai (ASMR LRT)", demand: "D4", trangThai: "Plan", kenh: "TikTok, FB, Tinhte" },
    { lo: "T6 — W3 (15–21/6)", soND: 4, concept: "Power Nap Trưa (Pit-Stop)", demand: "D3", trangThai: "Plan", kenh: "TikTok, FB" },
    { lo: "T6 — W4 (22–28/6)", soND: 4, concept: "Hồi Sức Sau Trận", demand: "D15", trangThai: "Plan", kenh: "TikTok, FB, group sport" },
    { lo: "Always-on", soND: 5, concept: "'Không bán thẻ'", demand: "D5", trangThai: "Seeding", kenh: "VOZ, FB group" },
  ],

  earnedMedia: [
    { tru: "Stylist-led", uuTien: 1, concept: "D1 Garage, D2 CVG, D3 Power Nap", viDu: "Reel 60s 'Kỹ Sư Phong Độ' scan→tune cổ-vai", nguoiLam: "58 salon (nội bộ)" },
    { tru: "UGC khách", uuTien: 2, concept: "D1,D2,D3,D4", viDu: "Khách reveal 'phong độ 98%'; ASMR LRT thật", nguoiLam: "Khách (~100K/video)" },
    { tru: "KOC (~30%)", uuTien: 3, concept: "D3 office, D4 sport", viDu: "KOC office quay trưa reboot; KOC sport quay recovery", nguoiLam: "2 KOC (từ pool 19)" },
    { tru: "Community seeding", uuTien: 4, concept: "D5 + D2,D4", viDu: "Thread VOZ 'salon nào KHÔNG ép thẻ?'", nguoiLam: "Chương (T-5 Seeding)" },
    { tru: "Brand-earned", uuTien: 5, concept: "D5 trust claim", viDu: "PR claim 'không hỏi mua thẻ trong buổi'", nguoiLam: "PR + Partnership" },
  ],

  /* ---------- 3. SEO ---------- */
  seoKeywords: [
    { kw: "dịch vụ ráy tai an toàn", rank: 6, cluster: "USP (lấy ráy tai)", trangThai: "Quick win" },
    { kw: "lấy ráy tai nam giới tốt nhất", rank: null, cluster: "USP", trangThai: "Chưa top 10" },
    { kw: "tai ngứa nên đi đâu lấy ráy", rank: null, cluster: "USP", trangThai: "Chưa top 10" },
    { kw: "cắt tóc nam Hà Nội", rank: null, cluster: "Transactional", trangThai: "Chưa top 10" },
    { kw: "cắt tóc nam TPHCM", rank: null, cluster: "Transactional", trangThai: "Chưa top 10" },
    { kw: "salon tóc nam tốt nhất", rank: null, cluster: "Transactional", trangThai: "Chưa top 10" },
    { kw: "kiểu tóc nam đi phỏng vấn", rank: null, cluster: "Transition", trangThai: "Chưa top 10" },
    { kw: "kiểu tóc nam văn phòng", rank: null, cluster: "Transition", trangThai: "Chưa top 10" },
    { kw: "nam công sở giờ trưa đi đâu relax", rank: null, cluster: "Escape/Relax", trangThai: "Chưa top 10" },
    { kw: "trốn áp lực công việc 45 phút", rank: null, cluster: "Escape/Relax", trangThai: "Chưa top 10" },
    { kw: "giải pháp cho nam bị hói", rank: null, cluster: "Insecurity", trangThai: "Chưa top 10" },
    { kw: "nam 35 tuổi trông trẻ ra", rank: null, cluster: "Insecurity", trangThai: "Chưa top 10" },
    { kw: "kiểu tóc cho nam đầu ít tóc", rank: null, cluster: "Insecurity", trangThai: "Chưa top 10" },
  ],
  seoClusters: [
    { ten: "Insecurity (rụng tóc + trẻ hóa)", tyTrong: 33, soBai: 8, note: "Pillar lớn nhất — CHƯA có bài nào" },
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
  seoTargets: {
    baselineOrganic: 44982, targetOrganic: 67473,
    t5Actual: 155, t6Target: "400–600", q3Target: "2.000", t10Target: "4.000–8.000",
    engagementRate: 67.1, engagementTarget: 60,
  },

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
  adsTop: [
    { ten: "KOC . Vũ Việt Anh", tuyen: "KOC", chi: 128.3, cpm: 15545 },
    { ten: "KOC Phạm Hoàng Nghĩa . Thông minh xứng đáng", tuyen: "TMXD", chi: 106.4, cpm: 13525 },
    { ten: "Chí Trung . Kinh tế eo hẹp vẫn muốn đẹp zai", tuyen: "TMXD", chi: 103.2, cpm: 12771 },
    { ten: "Chí Trung . Shinecombo122k . Táo Giao Thông", tuyen: "TMXD", chi: 98.3, cpm: 33556 },
    { ten: "Tuấn mã uốn nhuộm . Tan làm 9h tối", tuyen: "Uốn-Nhuộm", chi: 65.9, cpm: 11592 },
    { ten: "Ngứa tai đến 30Shine lấy ráy tai", tuyen: "Lấy ráy tai", chi: 60.0, cpm: 10253 },
  ],
  trafficBaseline: {
    cty1Chi: 263.7, cty1CPM: 16986, cty1Reach: 3637300, cty1VideoView: 11332693,
    note: "Cty 1 = purchase-optimized (T4/2026). Cty 2 = reach campaigns, phần lớn inactive.",
  },

  /* LIVE — Meta API, 1–10/6/2026 */
  liveAds: {
    ky: "1–10/6/2026",
    accounts: [
      { ten: "Adsplus 5 (Tỉnh)", chi: 164.1, cpm: 21713, ctr: 1.20, reach: 1471290, impressions: 7555531 },
      { ten: "Adsplus 5.2 (NSM Tôn Cương)", chi: 22.4, cpm: 25709, ctr: 0.89, reach: 508088, impressions: 872838 },
    ],
    tongChi: 186.5, cpmTong: 22126, tongReach: 1979378, tongImpr: 8428369,
    note: "HN/HCM/Bluefocus chưa bật Ads MCP hoặc bị disabled. Đây là 2 tài khoản Adsplus (tuyến Tỉnh/Nhượng quyền).",
  },

  /* LIVE — GA4 30shine.com, 1–10/6/2026 */
  liveTraffic: {
    ky: "1–10/6/2026",
    tong: 76092,
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
    note: "Unassigned 33.6% = tag thiếu source/medium (BLOCKER tracking đã cảnh báo). Organic Search = 17.963 ss (toàn site, khác /discover blog).",
  },

  deXuat: [
    { uuTien: "Cao", noiDung: "🔴 LIVE 1–10/6: cả 2 tài khoản Adsplus CPM > 20K (21.713đ & 25.709đ) = tier CUT. Đang đốt 186tr/10 ngày ở vùng giá xấu — soát lại creative/targeting, cắt ad CPM cao nhất.", canCu: "Meta API live + adsTiers FB CUT" },
    { uuTien: "Cao", noiDung: "🔴 LIVE GA4: Unassigned = 33.6% traffic (25.572/76.092 ss) → tag UTM thiếu source/medium, attribution hỏng. Fix tag trước khi tin bất kỳ số traffic→bill nào.", canCu: "GA4 live + SEO_BASELINE finding #3" },
    { uuTien: "Cao", noiDung: "Đẩy 'Lấy ráy tai' (CPM 10.253đ = WIN tier) — demand WIN, CPM tốt nhất nhóm. Scale + đồng bộ SEO keyword 'ráy tai an toàn' (đang rank #6).", canCu: "adsTop #6 + seoKeywords" },
    { uuTien: "Cao", noiDung: "CUT ngay 'Shinecombo122k Táo Giao Thông' (CPM 33.556đ > 20K). Đốt tiền không hiệu quả.", canCu: "adsTiers FB CUT" },
    { uuTien: "TB", noiDung: "TMXD chiếm 42% ngân sách nhưng CPM 12–18K (OK/WIN) — giữ nhưng test hook mới, tránh phụ thuộc 1 tuyến.", canCu: "Phân bổ ngân sách + adsTop" },
    { uuTien: "TB", noiDung: "Fix BLOCKER tracking: event ga4_dat_lich_hen = 0 suốt 53 tuần → mọi attribution booking đang hỏng, số traffic→bill không tin được.", canCu: "SEO_BASELINE finding #3" },
  ],

  /* ---------- 5. ĐÁNH GIÁ TỪNG NỘI DUNG ---------- */
  danhGia: [
    { nd: "C1–C3 Power Nap (Crew Rest / NASA / SEAL)", demand: "D3", sao: 5, danhGia: "TOP pick chặng 1. Pain P2 stress mass, naming mạnh. Nhưng D3 chưa WIN xác nhận.", deXuat: "Chạy test đủ 3 concept, giữ 1 thắng nhất rồi scale; đồng bộ Power Nap Trưa W3." },
    { nd: "C5 Mic Servicing / C6 Rửa Engine (Tĩnh Tai)", demand: "D4", sao: 5, danhGia: "Bệ đỡ chắc nhất — D4 đã WIN (CPA STAR ~22K), CPM ads 10.253đ. Demand đã validate.", deXuat: "ĐÀO SÂU chiều dọc thay vì mở demand ngang (đúng nguyên tắc 'đào 10 tầng'). Tăng ngân sách + SEO cluster USP." },
    { nd: "C4 Service CVG / C7 Physio (Cổ Vai Gáy)", demand: "D2", sao: 4, danhGia: "Pain P1 mass ⭐⭐⭐⭐⭐, baseline Win T5 CPA 23.7K. Demand LOCK, nền vững cho Garage.", deXuat: "Duy trì làm hero D1 Garage; tránh test lại, tập trung maintain top-of-mind." },
    { nd: "Garage Phong Độ (D1 umbrella)", demand: "D1", sao: 4, danhGia: "Concept umbrella chốt 20/5, metaphor cơ khí thay 'thư giãn' abstract. Đang TEST chặng 1.", deXuat: "Lock menu Tune/Bảo Dưỡng đồng bộ; W1 T6 là hero — đo 3s view ≥7%, CPM ≤18K." },
    { nd: "Hồi Sức Sau Trận (D15)", demand: "D15", sao: 3, danhGia: "Recovery sport, pain P10/P11 thật nhưng niche hơn. TEST chặng 2.", deXuat: "Test nhỏ qua KOC sport W4; chỉ scale nếu spend hết 1.6tr/3 ngày." },
    { nd: "Always-on 'Không bán thẻ' (D5)", demand: "D5", sao: 4, danhGia: "Trust claim chống pain Q1 (sợ bị ép thẻ) — verified nhiều brand TQ. Earned/community.", deXuat: "Seeding VOZ/group đều đặn; KHÔNG bịa promo; làm brand-earned dài hạn." },
  ],
};
