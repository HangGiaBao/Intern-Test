Hàng Gia Bảo
Link github: https://github.com/HangGiaBao/Intern-Test
Link deploy: https://test-intern-1.netlify.app
1. Giới thiệu
Đây là bài test dự án xây dựng trang web hiển thị danh sách sản phẩm, tìm kiếm và xem chi tiết thông tin sản phẩm. Dự liệu được lấy từ FakeStoreAPI
2. Cách chạy dự án
B1: Clone repository từ Github hoặc tải file zip về sau đó giải nén từ link
B2: Mở thư mục code trong VS Code Studio
B3: Cài đặt Extension "Live Server" (nếu chưa có)
B3: Chuột phải vào file index.html sau đó chọn Open with Live Server để mở trang web
3. Các chức năng đã hoàn thành
P1: Hiển thị danh sách sản phẩm 
- Gọi API lấy sản phẩm
- Hiển thị thông tin sản phẩm bao gồm hình ảnh, tên sản phẩm, giá sản phẩm
P2: Tìm kiếm sản phẩm 
- Tạo ô inout để người dùng có thể nhập tên sản phẩm
- Tìm kiếm và lọc danh sách sản phẩm
- Hiển thị thông báo không tìm thấy sản phẩm
- Tìm kiếm sản phẩm không phân biệt chữ hoa chữ thường
P3: Hiển thị sản phẩm chi tiết 
- Mỗi sản phẩm sẽ có nút xem chi tiết sản phẩm, bấm vào nút xem chi tiết sẽ xem được thông tin sản phẩm
- Bấm nút đóng/tắt để thoát bảng thông tin sản phẩm
P4: Giao diện và trải nghiệm
- Giao diện thân thiện với người dùng
P5: Các chức năng khác
- Sắp xếp sản phẩm theo giá tăng dần hoặc giảm dần
4. Báo cáo sử dụng AI
- Câu lệnh promt đã sử dụng: giải thích và giúp tôi cách dùng Grid để chia cột tự động xuống dòng responsive mà không cần sử dụng nhiều media query
=> Đoạn code AI trả về và cách chỉnh sửa: AI gợi ý dùng thuộc tính auto-fit. Em đã chỉnh sửa thành auto-fill và chỉnh lại kích thước tối thiểu là 250px để giao diện đẹp hơn
- Câu lệnh promt đã sử dụng: liệu có thể tạo 50-100 sản phẩm được không?
=> AI gợi ý và cách chỉnh sửa: vì link FakeStoreAPI chỉ có 20 sản phẩm trong cơ sở dữ liệu, tuy nhiên có thể sử dụng vòng lặp "for" để push từng phần vào mảng mới 
- Câu lệnh promt đã sử dụng: "Làm sao để so sánh chuỗi trong javascript mà không phân biệt chữ hoa hay chữ thường, ví dụ nhập a vẫn tìm thấy A?
=> AI gợi ý: Sử dụng Regular Expression (Biểu thức chính quy). Em đã chỉnh sửa lại bằng cách sử dụng hàm "toLowerCase()" đưa tất cả tên sản phẩm và từ khóa về chữ thường rồi mới so sánh 
- Câu lệnh promt đã sử dụng: Làm sao để lấy dữ liệu từ API bằng JavaScript
=> AI gợi ý: AI đưa ra đoạn code sử dụng cú pháp fetch().then().catch(). Sau một hồi tìm hiểu từ youtube thì em đã chuyển sang cú pháp async/await để lấy dữ liệu từ API và nhờ AI cách hiển thị chữ "Đang tải dữ liệu"
5. Những khó khăn gặp phải
- Gặp khó khăn trong việc lấy dữ liệu từ API, Khi làm HTML/CSS trước nên khi lấy API cần phải chỉnh sửa giao diện liên tục 
- Khó khăn trong việc lọc tìm kiếm bằng chữ hoa và chữ thường
- Mất nhiều thời gian để chỉnh sửa giao diện sao cho cho phù hợp và đúng với yêu cầu


**DeadLine**
16:34 26/11/2025
