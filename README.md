# HƯỚNG DẪN TRIỂN KHAI (DEPLOYMENT GUIDE)

Dự án này đã được tối ưu hóa để chạy trên **GitHub Pages** (hoàn toàn miễn phí).

## 1. Cấu trúc thư mục
Đảm bảo thư mục của bạn có cấu trúc như sau:
```
/ (Root Repository)
├── index.html       (File chính)
├── logo.png         (Logo ngành)
├── icon.png         (Icon App/Bot)
├── *.pdf            (Các file văn bản luật)
└── README.md        (File này)
```

## 2. Cách đưa lên mạng (Deploy to GitHub Pages)

### Bước 1: Push code lên GitHub
Nếu bạn chưa đưa code lên GitHub, hãy dùng các lệnh sau trong Terminal (hoặc dùng GitHub Desktop):
```bash
git init
git add .
git commit -m "Initial commit: Tuyen Truyen Web App"
git branch -M main
git remote add origin [LINK_REPO_CUA_BAN]
git push -u origin main
```

### Bước 2: Bật GitHub Pages
1.  Truy cập Repository của bạn trên trình duyệt (https://github.com/...).
2.  Vào tab **Settings** (Cài đặt).
3.  Ở menu bên trái, tìm mục **Pages**.
4.  Tại phần **Build and deployment**:
    -   **Source**: Chọn "Deploy from a branch".
    -   **Branch**: Chọn `main` (hoặc `master`) và folder `/ (root)`.
5.  Bấm **Save**.

### Bước 3: Đợi 1-2 phút
GitHub sẽ tự động build. Sau khi xong, bạn sẽ thấy link trang web của mình ở ngay phía trên (dạng `https://username.github.io/repo-name/`).

---

## 3. Cập nhật dữ liệu
### Cập nhật Văn bản mới
1.  Copy file PDF mới vào thư mục code.
2.  Mở `index.html`, tìm phần `const docData = { ... }` (khoảng dòng 1600).
3.  Thêm mục mới theo mẫu có sẵn.
4.  Push code lên GitHub -> Web tự động cập nhật.

### Cập nhật Trợ lý ảo (NotebookLM)
Do chúng ta dùng NotebookLM của Google, bạn chỉ cần nạp tài liệu mới vào NotebookLM. Web sẽ dùng chung một đường link nên **không cần sửa code web**, Trợ lý ảo sẽ tự thông minh lên!
