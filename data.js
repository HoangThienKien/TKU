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
