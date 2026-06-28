const TKU_ENTITIES = {
  yThuc: {
    label: "Ý Thức",
    sub: "Consciousness",
    body: [
      "Thực thể đầu tiên loé lên từ vô hạn của Hỗn Mang — không đầu, không cuối, không khái niệm, không trật tự.",
      "Khi Ý Thức nhận ra sự tồn tại của chính mình, nó chuyển mình, hòa quyện với Hư Vô như một vũ điệu khổng lồ của năng lượng — tạo nên sự xáo động đầu tiên của vũ trụ."
    ]
  },
  huVo: {
    label: "Hư Vô",
    sub: "The Void",
    body: [
      "Khoảng lặng vô tận xuất hiện cùng lúc với Ý Thức — không phải sự trống rỗng đối nghịch, mà là người bạn đồng hành từ giây phút đầu tiên.",
      "Hai thực thể khác bản chất hòa quyện vào nhau, và chính cuộc hòa quyện đó là sự xáo động khởi sinh ra mọi điều theo sau."
    ]
  },
  nhan: {
    label: "Nhân",
    sub: "The Mother of Seeds",
    body: [
      "Thực thể mang năng lượng Âm, hình hài người phụ nữ cổ xưa, sinh ra từ xáo động đầu tiên. Nhân xoay quanh hỗn mang, gieo vào đó vô số hạt mầm khả năng — mỗi suy nghĩ, mỗi hành động, mỗi lựa chọn đều bắt đầu từ Nhân.",
      "Mẹ Nhân giữ hai cuộn giấy cổ vô tận: Cuộn Nhân Thiện và Cuộn Nhân Ác. Bà không trừng phạt, không ban thưởng — chỉ giữ gìn và chứng kiến.",
      "“Không có hành động nào biến mất. Mọi hạt nhân đều tìm thấy chỗ của nó trên cuộn giấy của ta.”"
    ]
  },
  qua: {
    label: "Quả",
    sub: "The Father of Results",
    body: [
      "Mang năng lượng Dương, sinh ra như đối trọng cần thiết cho những hạt mầm của Nhân. Nhân và Quả tìm thấy nhau, quấn lấy nhau như hai dòng chảy đối nghịch không thể tách rời.",
      "Bố Quả là người đàn ông lạnh lùng, ít nói, tay luôn cầm một thanh gươm sắc bén rực lửa. Khi nhân đã chín muồi, Quả chỉ làm một việc: chặt đứt mọi cảm xúc và thực thi kết quả."
    ]
  },
  thoiGian: {
    label: "Thời Gian",
    sub: "Lord Time",
    body: [
      "Con đầu của Nhân và Quả — mang đến khái niệm trước, sau, bắt đầu, kết thúc.",
      "Thời Gian tạo ra 10 Thiên Can và 12 Địa Chi, kết hợp thành 60 Hoa Giáp — bánh răng của cỗ máy thời gian vũ trụ. Mỗi Hoa Giáp mang một năng lượng riêng, giữ cho dòng thời gian không vỡ vụn.",
      "Trong cấu trúc xoắn ốc, Thời Gian chính là khoảng cách dọc trục của mỗi vòng quay — nhịp đo của một chu kỳ trọn vẹn."
    ]
  },
  khongGian: {
    label: "Không Gian",
    sub: "Lady Space",
    body: [
      "Con thứ hai của Nhân và Quả — mở rộng như cánh đồng nguyên tử vô tận, tạo nơi chốn để vạn vật tồn tại.",
      "Không Gian sinh ra Tứ Tượng — Thanh Long, Chu Tước, Bạch Hổ, Huyền Vũ — cai quản bốn phương, bảo hộ và cân bằng 60 Hoa Giáp.",
      "Trong cấu trúc xoắn ốc, Không Gian chính là bán kính của vòng xoay — độ rộng mà mỗi vòng chiếm lấy."
    ]
  },
  dungQuan: {
    label: "Dụng Quân",
    sub: "Đứa con thứ ba",
    body: [
      "Dụng (用) — động lực nằm dưới mọi hành vi cho đi, giữ lại, trao đổi. Quân (君) — đấng cai quản không trực tiếp can thiệp, vô vi mà trị.",
      "Là em của Thời Gian và Không Gian, cùng một dòng máu Nhân-Quả — nhưng là đứa con cá biệt trong gia đình ấy. Không gắn kết với Thời Gian, Không Gian, Hoa Giáp hay Tứ Tượng mà các anh chị mình tạo ra — không vì bị loại trừ, mà vì tự nó chọn đứng ngoài lề mọi mái nhà đã được xây.",
      "Dụng Quân không bước đi. Nó giữ một tọa độ duy nhất, bất động, giữa mọi dòng chảy giá trị của vũ trụ — như một ngón tay nhúng vào lòng nước yên, chỉ xoay tại chỗ, toàn bộ phân tử nước cuốn theo một trục vô hình quanh nó.",
      "“Ta không tạo ra giàu có. Ta cũng không tạo ra nghèo khổ. Ta chỉ biến Nhân của các ngươi thành Quả mà các ngươi phải nhận.”"
    ]
  }
};

const TKU_TU_TUONG = {
  thanhLong: {
    label: "Thanh Long",
    sub: "Azure Dragon · Đông · Mộc",
    count: 16,
    role: "Khởi động chu kỳ. Xuất hiện đầu tiên trong mỗi arc mới.",
    detail: "Sinh trưởng · Khởi phát · Mở đường. Tứ Niệm: Thân — nền tảng đầu tiên của nhận thức.",
    hoaGiapNote: "12 Hoa Giáp Mộc gốc + Lộ Bàng Thổ (Canh Ngọ, Tân Mùi) + Sa Trung Thổ (Bính Thìn, Đinh Tỵ)"
  },
  chuTuoc: {
    label: "Chu Tước",
    sub: "Vermilion Bird · Nam · Hỏa",
    count: 14,
    role: "Cực thịnh. Xuất hiện khi xung đột đạt đỉnh điểm.",
    detail: "Bộc phát · Rực sáng · Danh tiếng. Tứ Niệm: Thọ — cảm giác vui, khổ, trung tính.",
    hoaGiapNote: "12 Hoa Giáp Hỏa gốc + Ốc Thượng Thổ (Bính Tuất, Đinh Hợi)"
  },
  bachHo: {
    label: "Bạch Hổ",
    sub: "White Tiger · Tây · Kim",
    count: 16,
    role: "Thanh lọc. Đặt ra luật — hoặc phá vỡ luật cũ để tạo trật tự mới.",
    detail: "Thu liễm · Chiến lực · Kết tinh. Tứ Niệm: Tâm — trạng thái tham, sân, định, loạn.",
    hoaGiapNote: "12 Hoa Giáp Kim gốc + Thành Đầu Thổ (Mậu Dần, Kỷ Mão) + Bích Thượng Thổ (Canh Tý, Tân Sửu)"
  },
  huyenVu: {
    label: "Huyền Vũ",
    sub: "Black Tortoise · Bắc · Thủy",
    count: 14,
    role: "Tái cấu trúc. Xuất hiện khi mọi thứ sụp đổ — và xây lại từ nền.",
    detail: "Tàng ẩn · Bền bỉ · Sinh tồn. Tứ Niệm: Pháp — quy luật, cấu trúc vận hành.",
    hoaGiapNote: "12 Hoa Giáp Thủy gốc + Đại Trạch Thổ (Mậu Thân, Kỷ Dậu)"
  }
};

const TKU_MA_VUONG = {
  tham: { label: "Tham", en: "Avarice", color: "#EF9F27" },
  san: { label: "Sân", en: "Wrath", color: "#E24B4A" },
  si: { label: "Si", en: "Delusion", color: "#7F77DD" },
  man: { label: "Mạn", en: "Pride", color: "#D4537E" },
  nghi: { label: "Nghi", en: "Doubt", color: "#5DCAA5" }
};

const TKU_LORE_SUMMARY = {
  title: "Vũ trụ là một chuỗi xoắn, không phải một vòng tròn",
  paragraphs: [
    "Ý Thức và Hư Vô là hai sợi quấn vào nhau từ giây phút đầu tiên — không đối nghịch, mà là hai bản chất khác nhau hòa quyện. Dụng Quân là trục bất động ở tâm, không cai quản tiền bạc mà cai quản động cơ đằng sau mỗi lần con người cho đi hay giữ lại.",
    "Mỗi nấc thang nối hai sợi là một Hoa Giáp — một chu kỳ tồn tại mang năng lượng riêng. 60 Hoa Giáp chia thành bốn nhóm lớn, mỗi nhóm được một trong Tứ Tượng bảo hộ và cân bằng: Thanh Long khởi động, Chu Tước đẩy lên cực thịnh, Bạch Hổ thanh lọc, Huyền Vũ tái cấu trúc — rồi vòng xoắn lại tiếp tục ở một tầng cao hơn.",
    "Năm Ma Vương — Tham, Sân, Si, Mạn, Nghi — không phải kẻ địch của Dụng Quân. Chúng tạo ra áp lực khiến mỗi nấc thang bị vênh, ăn mòn từ bên trong. Nhưng chính ở đáy của áp lực đó, một dòng chảy thứ cấp luôn tìm đến nơi vênh nặng nhất để kéo nó lên một tầng tồn tại mới — không phải tiêu diệt Ma Ấn, mà chuyển hóa nó, biết rằng nó sẽ quay lại ở một cấp độ cao hơn."
  ]
};

const TKU_NGU_HANH = {
  moc: { label: "Mộc", en: "Wood", color: "#639922", tuTuong: "thanhLong" },
  hoa: { label: "Hỏa", en: "Fire", color: "#E24B4A", tuTuong: "chuTuoc" },
  kim: { label: "Kim", en: "Metal", color: "#B4B2A9", tuTuong: "bachHo" },
  thuy: { label: "Thủy", en: "Water", color: "#378ADD", tuTuong: "huyenVu" },
  tho: { label: "Thổ", en: "Earth", color: "#BA7517", tuTuong: null }
};

const TKU_NAP_AM = {
  haiTrungKim: { label: "Hải Trung Kim", meaning: "Kim trong biển", hanh: "kim", hoaGiap: ["giapTy", "atSuu"] },
  lwTrungHoa: { label: "Lư Trung Hoả", meaning: "Lửa trong lò", hanh: "hoa", hoaGiap: ["binhDan", "dinhMao"] },
  daiLamMoc: { label: "Đại Lâm Mộc", meaning: "Rừng lớn", hanh: "moc", hoaGiap: ["mauThin", "kyTy"] },
  loBangTho: { label: "Lộ Bàng Thổ", meaning: "Đất ven đường", hanh: "tho", hoaGiap: ["canhNgo", "tanMui"] },
  giamHaThuy: { label: "Giản Hạ Thuỷ", meaning: "Nước khe sâu", hanh: "thuy", hoaGiap: ["binhTy", "dinhSuu"] }
};

const TKU_HOA_GIAP = {
  giapTy: {
    stt: 1, name: "Giáp Tý", amDuong: "Dương", napAm: "haiTrungKim",
    meaning: "Kim trong biển", archetype: "Explorer / Pathfinder",
    tuTuong: "bachHo", faction: "Ocean Order", symbol: "Mỏ neo bạc chìm trong sóng",
    years: [1924, 1984, 2044, 2104],
    tinhCach: "Năng động, thích khởi xướng · Nhanh nhạy với cơ hội",
    dongLuc: "Chứng minh giá trị tiềm ẩn · Tìm môi trường đủ lớn để phát triển",
    noiSo: "Bị bỏ lỡ cơ hội · Tiềm năng không được khai thác",
    manh: "Bình tĩnh khi khủng hoảng · Tư duy sâu, không bề nổi",
    yeu: "Khó mở lòng · Dễ chậm nhịp nếu thiếu động lực bên ngoài",
    arc: "Ẩn mình → Tích lũy nội lực → Lộ diện đúng thời → Lãnh đạo chiến lược",
    queBirth: "Thuần Càn (䷀) · Tiềm năng sáng tạo mạnh",
    queTrial: "Thủy Lôi Truân (䷂) · Khó khăn giai đoạn đầu",
    queAwakening: "Thiên Hỏa Đồng Nhân (䷌) · Thành công khi hợp lực",
    maAn: [
      { ma: "tham", ten: "Vô Khát Ấn", giai: "chứng minh giá trị tiềm ẩn không bao giờ thấy đủ với chính mình" },
      { ma: "nghi", ten: "Hoài Tâm Ấn", giai: "khó mở lòng vì không tin chắc môi trường xung quanh đủ an toàn" }
    ]
  },
  binhDan: {
    stt: 3, name: "Bính Dần", amDuong: "Dương", napAm: "lwTrungHoa",
    meaning: "Lửa trong lò", archetype: "Fire Warrior",
    tuTuong: "chuTuoc", faction: "Solar Kingdom", symbol: "Ngọn lửa bốc cao",
    years: [1926, 1986, 2046, 2106],
    tinhCach: "Nhiệt huyết, mạnh mẽ · Dễ truyền cảm hứng",
    dongLuc: "Được thể hiện bản thân · Tạo ảnh hưởng mạnh mẽ",
    noiSo: "Bị dập tắt đam mê · Bị giới hạn khả năng",
    manh: "Dám làm · Không sợ va chạm",
    yeu: "Dễ nóng vội · Khó duy trì dài hạn",
    arc: "Bùng nổ → Va chạm → Kiểm soát lửa → Trở thành nguồn sáng dẫn đường",
    queBirth: "Ly Vi Hỏa (䷝) · Ánh sáng, nhiệt huyết",
    queTrial: "Hỏa Thủy Vị Tế (䷿) · Chưa hoàn tất",
    queAwakening: "Hỏa Phong Đỉnh (䷱) · Lửa được kiểm soát",
    maAn: [
      { ma: "san", ten: "Phản Hỏa Ấn", giai: "phản ứng đến trước khi suy nghĩ kịp hình thành" },
      { ma: "tham", ten: "Vô Khát Ấn", giai: "luôn cần thêm ảnh hưởng, thêm sự chú ý để cảm thấy đủ" }
    ]
  },
  mauThin: {
    stt: 5, name: "Mậu Thìn", amDuong: "Dương", napAm: "daiLamMoc",
    meaning: "Rừng lớn", archetype: "Forest King",
    tuTuong: "thanhLong", faction: "Forest Clan", symbol: "Cây đại thụ rễ sâu",
    years: [1928, 1988, 2048, 2108],
    tinhCach: "Tư duy lớn · Có khả năng tổ chức và mở rộng",
    dongLuc: "Phát triển quy mô · Tạo hệ sinh thái riêng",
    noiSo: "Mất kiểm soát khi mở rộng · Hệ thống sụp đổ",
    manh: "Tư duy hệ thống · Độ bền cao",
    yeu: "Dễ ôm đồm · Khó tập trung chi tiết nhỏ",
    arc: "Mở rộng → Quá tải → Tinh gọn → Trở thành hệ trục bền vững",
    queBirth: "Phong Lôi Ích (䷩) · Tăng trưởng mạnh",
    queTrial: "Trạch Phong Đại Quá (䷛) · Quá tải hệ thống",
    queAwakening: "Phong Địa Quán (䷓) · Tầm nhìn chiến lược",
    maAn: [
      { ma: "tham", ten: "Vô Khát Ấn", giai: "mở rộng không điểm dừng, luôn cần hệ thống lớn hơn để cảm thấy đủ" },
      { ma: "man", ten: "Thủ Ngã Ấn", giai: "khi hệ thống bị thử thách, phản ứng phòng thủ hơn là nhìn lại" }
    ]
  },
  canhNgo: {
    stt: 7, name: "Canh Ngọ", amDuong: "Dương", napAm: "loBangTho",
    meaning: "Đất ven đường", archetype: "Road Warden",
    tuTuong: "thanhLong", faction: "Earth Dominion", symbol: "Con đường trải dài",
    years: [1930, 1990, 2050, 2110],
    tinhCach: "Thực tế, tổ chức tốt · Có tư duy hệ thống",
    dongLuc: "Tạo cấu trúc rõ ràng · Đưa mọi thứ vào quy trình",
    noiSo: "Hỗn loạn · Thiếu kiểm soát",
    manh: "Bền bỉ · Làm được việc",
    yeu: "Thiếu linh hoạt · Ít sáng tạo đột phá",
    arc: "Lao động → Tối ưu quy trình → Chuẩn hóa hệ thống → Trở thành nền móng vững chắc",
    queBirth: "Địa Trạch Lâm (䷒) · Điều hành hệ thống",
    queTrial: "Trạch Địa Tụy (䷬) · Quá nhiều yếu tố tập trung",
    queAwakening: "Địa Thiên Thái (䷊) · Cân bằng âm dương",
    maAn: [
      { ma: "tham", ten: "Chiếm Hữu Ấn", giai: "kiểm soát quy trình đến mức khó chấp nhận sự sáng tạo lệch chuẩn" },
      { ma: "nghi", ten: "Bất An Ấn", giai: "nỗi sợ hỗn loạn là một trạng thái nền không gắn với mối đe dọa cụ thể" }
    ]
  },
  binhTy: {
    stt: 13, name: "Bính Tý", amDuong: "Dương", napAm: "giamHaThuy",
    meaning: "Nước khe sâu", archetype: "Water Tactician",
    tuTuong: "huyenVu", faction: "Ocean Order", symbol: "Dòng nước uốn lượn dưới nền đá",
    years: [1936, 1996, 2056, 2116],
    tinhCach: "Linh hoạt, nhanh nhạy · Thích nghi tốt",
    dongLuc: "Tìm con đường thông minh nhất · Tối ưu hóa nguồn lực nhỏ",
    noiSo: "Bị chặn lối · Không được tự do xoay chuyển",
    manh: "Thích nghi nhanh · Tư duy linh hoạt",
    yeu: "Dễ phân tán · Thiếu định hướng dài hạn",
    arc: "Thích nghi → Phân tán → Tập trung dòng chảy → Trở thành hệ dẫn truyền chiến lược",
    queBirth: "Thủy Lôi Truân (䷂) · Sinh ra trong môi trường biến động",
    queTrial: "Thủy Hỏa Ký Tế (䷾) · Mâu thuẫn nội tâm",
    queAwakening: "Phong Thủy Hoán (䷺) · Buông bỏ để tái sinh",
    maAn: [
      { ma: "nghi", ten: "Hoài Tâm Ấn", giai: "phân tán vì không tin chắc vào một hướng đi duy nhất" },
      { ma: "si", ten: "Ẩn Thoát Ấn", giai: "né tránh sự ràng buộc bằng việc liên tục thay đổi đường đi" }
    ]
  }
};
