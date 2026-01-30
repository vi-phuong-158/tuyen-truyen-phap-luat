# PROJECT BLUEPRINT: TUYEN TRUYEN PHAP LUAT

**Trạng thái:** DRAFT (Chờ duyệt)
**Mục tiêu:** Xây dựng cổng thông tin pháp luật hiện đại, tích hợp NotebookLM.

## 1. 📋 Deliverables (Sản phẩm bàn giao)
-   [ ] **1 File HTML duy nhất (`index.html`)**: Chứa toàn bộ cấu trúc, nội dung và CSS (Tailwind CDN) để dễ dàng upload lên GitHub Pages.
-   [ ] **Thư mục `assets/`**: Chứa ảnh, icon, file PDF văn bản.
-   [ ] **Tính năng "Giả lập Chat AI"**:
    -   *Vấn đề:* NotebookLM hiện **không hỗ trợ nhúng Iframe** công khai (người dùng sẽ bị chặn nếu không login hoặc trình duyệt chặn chéo trang).
    -   *Giải pháp:* Thiết kế một khung Chat giao diện đẹp ngay trên web. Khi người dùng gõ câu hỏi và ấn Enter -> Hệ thống sẽ mở Tab mới vào thẳng NotebookLM với context đã nạp sẵn. Đây là trải nghiệm mượt mà nhất.
-   [ ] **Chế độ hiển thị văn bản**:
    -   Dạng lưới (Grid) 3 văn bản chính.
    -   Nút "Xem nhanh" mở Modal ngay trên trang.
    -   Nút "Tải về" mở file PDF gốc.

## 2. 🚫 Out of Scope (Không làm)
-   [ ] Backend Database (Dữ liệu cứng trong HTML/JS để dễ deploy GitHub Pages).
-   [ ] Hệ thống CMS quản lý bài viết (Sửa bài viết = Sửa code HTML).

## 3. 📂 File Structure
```
/tuyen-truyen
  index.html       (Main App)
  /assets
    /images        (Logo, Banner)
    /docs          (PDF files)
  README.md        (Hướng dẫn deploy)
```

## 4. 🧱 Coder Pack (Hướng dẫn cho Builder)
**Tech Stack:**
-   **Core:** HTML5, TailwindCSS (CDN).
-   **Script:** Google Fonts, Lucide Icons (CDN).
-   **Logic:** Vanilla JS (No Framework).

**Quy tắc Code:**
-   Sử dụng `tailwind.config` trong thẻ `<script>` để định nghĩa màu ngành (Đỏ cờ, Vàng sao).
-   Mobile First: Mọi thành phần phải hiển thị tốt trên điện thoại dọc.
-   AI Button: Luôn trôi (Floating) ở góc phải dưới cùng.

## 5. Deployment Strategy
-   Platform: **GitHub Pages**.
-   Cách làm:
    1.  Push code lên nhánh `main`.
    2.  Vào Settings -> Pages -> Chọn Source là `main` / `root`.
