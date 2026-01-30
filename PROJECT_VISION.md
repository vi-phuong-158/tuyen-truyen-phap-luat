# VISION PROPOSAL: CỔNG THÔNG TIN TUYÊN TRUYỀN PHÁP LUẬT (VI-TUYEN-TRUYEN)

**Dự án:** Cổng thông tin tuyên truyền pháp luật & Trợ lý ảo AI
**Kiến trúc sư:** Vibecode AI
**Ngày:** 30/01/2026

## 1. 🎯 Executive Summary
Một **Cổng thông tin số (Digital Hub)** hiện đại, mang đậm bản sắc Công an nhân dân, giúp người dân và cán bộ tra cứu nhanh các quy định mới nhất về xuất nhập cảnh (Nghị định 282, Luật Xuất nhập cảnh) và tương tác trực tiếp với **Trợ lý ảo AI** để giải đáp thắc mắc pháp lý 24/7.

## 2. 📐 Architecture & Layout
**Cấu trúc trang (Single Page Application - Landing Page):**
-   **Header:** Logo ngành, Tên đơn vị (Công an tỉnh Phú Thọ), Điều hướng, Chuyển đổi ngôn ngữ (VN/EN/CN).
-   **Hero Section (Mặt trận chính):** Banner động "Ba Nhất", Khẩu hiệu thi đua, Nút CTA lớn "Hỏi đáp AI".
-   **Documents (Kho văn bản):** Hiển thị 3 văn bản trọng tâm dưới dạng thẻ bài (Card) với tính năng "Xem nhanh" (Quick View) không cần tải file.
-   **AI Assistant (Trung tâm chỉ huy):** Khu vực giới thiệu và nhúng Chatbot NotebookLM.
-   **Footer (Hậu cần):** Thông tin bản quyền, tác giả (Đại úy Vi Ngọc Phương).

**Luồng người dùng (User Flow):**
1.  Truy cập -> Ấn tượng với Banner & Khẩu hiệu ngành.
2.  Cần tìm luật -> Lướt xuống mục Văn bản -> Xem nhanh tóm tắt.
3.  Cần hỏi chi tiết -> Bấm nút "Hỏi đáp AI" -> Chat với Trợ lý ảo.

## 3. 🛠 Tech Stack Recommendation
| Component | Technology | Reason |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / CSS3 (Tailwind CSS) | Đơn giản, triển khai cực nhanh, không cần build phức tạp. |
| **Interactivity** | Vanilla JavaScript | Nhẹ nhàng, đủ xử lý hiệu ứng cuộn và Modal. |
| **Assets** | Lucide Icons, Google Fonts | Giao diện hiện đại, chuyên nghiệp. |
| **AI Integration** | Google NotebookLM (Embed/Link) | Tận dụng sức mạnh RAG của Google trên dữ liệu luật. |

## 4. 🎨 Look & Feel
-   **Màu sắc:** Đỏ cờ (Tổ quốc) - Vàng (Ngôi sao) - Xanh (An ninh).
-   **Phong cách:** "Flat & Bold". Chữ to, rõ ràng, hình khối mạnh mẽ.
-   **Hiệu ứng:** 
    -   *Glassmorphism* (Kính mờ) cho các thẻ văn bản.
    -   *Micro-interactions* (Hiệu ứng nhỏ) khi di chuột vào nút bấm.

---
### ❓ Questions for Context (Kiến trúc sư hỏi Chủ nhà)
1.  **AI Integration:** Bạn muốn nhúng (Embed) khung chat trực tiếp vào web hay chỉ cần nút bấm mở ra tab mới dẫn đến NotebookLM? (Hiện tại code cũ đang dùng link).
2.  **Dữ liệu văn bản:** Ngoài 3 văn bản hiện có (NĐ 282, Luật XNC, Quy chế), sắp tới có cần cập nhật thường xuyên không? (Để tính phương án quản lý file).
3.  **Deploy:** Bạn dự định chạy web này trên môi trường nào? (Github Pages, Hosting riêng hay Server nội bộ?).
