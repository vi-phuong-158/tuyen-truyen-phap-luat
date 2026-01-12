CỔNG THÔNG TIN TUYÊN TRUYỀN PHÁP LUẬT & TRỢ LÝ ẢO AI

Người đề xuất: Đồng chí Vi Phương
Phụ trách kỹ thuật: Trợ lý Vibe Coding
Ngày lập: 12/01/2026
Kho lưu trữ (Repository): https://github.com/vi-phuong-158/tuyen-truyen-phap-luat

1. MỤC TIÊU CHIẾN LƯỢC

Xây dựng một trang web (Landing Page) hiện đại, tinh gọn, mang đậm bản sắc lực lượng Công an nhân dân (CAND), nhằm:

Phổ biến các văn bản quy phạm pháp luật mới nhất về xuất nhập cảnh, cư trú của người nước ngoài (Nghị định 282/2025/NĐ-CP, Luật Nhập cảnh..., Quyết định của UBND tỉnh Phú Thọ).

Tích hợp công cụ AI (NotebookLM) để hỗ trợ công dân/cán bộ tra cứu, hỏi đáp nhanh về luật.

2. ĐỐI TƯỢNG PHỤC VỤ (TARGET AUDIENCE)

Cán bộ chiến sĩ trong ngành (tra cứu nghiệp vụ).

Người nước ngoài và công dân Việt Nam (tìm hiểu quy định pháp luật).

3. YÊU CẦU KỸ THUẬT & MỸ THUẬT

3.1. Phong cách thiết kế (UI/UX)

Màu sắc chủ đạo:

Đỏ cờ (tượng trưng cho Tổ quốc).

Vàng (Ngôi sao năm cánh).

Xanh rêu/Xanh cổ vịt đậm (Màu sắc đặc trưng của trang phục/an ninh).

Trắng (Nền, tạo sự hiện đại, thoáng đãng).

Phong cách: "Flat Design" (Thiết kế phẳng), bố cục khối rõ ràng, font chữ không chân (Sans-serif) hiện đại nhưng nghiêm túc (như Roboto hoặc Inter).

Responsive: Hiển thị tốt trên cả máy tính và điện thoại di động (Mobile First).

3.2. Cấu trúc trang (Sitemap)

Header (Bộ chỉ huy): Logo (Công an hiệu hoặc biểu tượng pháp luật), Tên cổng thông tin, Menu điều hướng.

Hero Section (Mặt trận chính): Banner lớn, khẩu hiệu hành động (Slogan), nút kêu gọi hành động (CTA) dẫn đến AI Chat.

Khu vực Văn bản (Kho dữ liệu):

Hiển thị danh sách 03 tài liệu đã cung cấp dưới dạng các thẻ (Card) đẹp mắt.

Có tóm tắt nội dung chính của từng văn bản.

Nút "Xem chi tiết/Tải về".

Khu vực AI (Trung tâm chỉ huy số):

Giới thiệu về Trợ lý ảo NotebookLM.

Nhúng (Embed) giao diện hoặc tạo nút kết nối trực tiếp đến link NotebookLM của đồng chí.

Footer (Hậu cần): * Thông tin bản quyền.

Ghi rõ: "Thiết kế bởi Đại úy Vi Ngọc Phương - Bí thư Chi đoàn ghép PA01-PA08".

Các liên kết quan trọng.

3.3. Công nghệ sử dụng

Ngôn ngữ: HTML5, CSS3 (Sử dụng Tailwind CSS qua CDN để code gọn nhẹ trong 1 file).

Hiệu ứng: JavaScript cơ bản (xử lý tương tác, cuộn trang mượt mà).

Icon: FontAwesome hoặc Lucide (biểu tượng hiện đại).

4. DỮ LIỆU ĐẦU VÀO (INPUT DATA)

Văn bản 1: Nghị định 282/2025/NĐ-CP (Xử phạt VPHC lĩnh vực ANTT...).

Văn bản 2: Văn bản hợp nhất Luật Nhập cảnh, xuất cảnh...

Văn bản 3: Quyết định quy chế phối hợp quản lý người nước ngoài tại Phú Thọ.

AI Source: https://notebooklm.google.com/notebook/03f2338f-f7f7-4adf-aba3-52b93672b484

5. LỘ TRÌNH TRIỂN KHAI (TASKS)

Task 1: Thiết lập khung sườn HTML (Skeleton) và tích hợp Tailwind CSS. Cấu hình màu sắc chủ đạo của ngành.

Task 2: Xây dựng giao diện Header và Hero Section (Banner cổ động, khẩu hiệu).

Task 3: Xây dựng khu vực hiển thị Tài liệu (Document Section). Trích xuất dữ liệu từ 03 file PDF để đưa vào nội dung hiển thị.

Task 4: Xây dựng giao diện tích hợp/liên kết AI NotebookLM (Iframe hoặc Link Button).

Task 5: Hoàn thiện Footer với thông tin tác giả và hiệu ứng tương tác (Mobile responsive).