// Biến chứa toàn bộ danh sách sản phẩm lấy từ API
let danhSachGoc = [];

//Hàm lấy dữ liệu từ API khi mới vào trang
async function layDuLieu() {
    const loadingText = document.getElementById('loading-text');
    
    try {
        // Gọi API 
        let ketQua = await fetch('https://fakestoreapi.com/products');
        
        // Chuyển đổi sang JSON
        danhSachGoc = await ketQua.json();
        
        // Tắt chữ Loading
        loadingText.style.display = 'none';

        // Gọi hàm hiển thị ra màn hình
        hienThiSanPham(danhSachGoc);

    } catch (loi) {
        console.log(loi);
        loadingText.innerText = "Lỗi rồi! Không tải được dữ liệu.";
        loadingText.style.color = "red";
    }
}

//Hàm hiển thị danh sách ra màn hình 
function hienThiSanPham(danhSach) {
    const khungHienThi = document.getElementById('product-list');
    
    // Nếu không có sản phẩm nào
    if (danhSach.length === 0) {
        khungHienThi.innerHTML = '<p style="text-align:center; width:100%">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    // Tạo một chuỗi HTML dài chứa tất cả sản phẩm để gán vào khung
    let htmlContent = '';

    // Duyệt qua từng sản phẩm để tạo thẻ HTML tương ứng
    for (let i = 0; i < danhSach.length; i++) {
        let sanPham = danhSach[i];
        
        htmlContent += `
            <div class="card">
                <img src="${sanPham.image}" alt="Anh san pham">
                <h3>${sanPham.title}</h3>
                <p class="price">$${sanPham.price}</p>
                <button class="btn" onclick="xemChiTiet(${sanPham.id})">Xem chi tiết</button>
            </div>
        `;
    }

    // Gán chuỗi HTML vào khung
    khungHienThi.innerHTML = htmlContent;
}

//Hàm tìm kiếm sản phẩm
function timKiemSanPham() {
    // Lấy chữ người dùng đang nhập vào ô tìm kiếm
    let tuKhoa = document.getElementById('search-box').value.toLowerCase();

    // Lọc danh sách gốc theo từ khóa
    let danhSachTimDuoc = danhSachGoc.filter(function(sanPham) {
        return sanPham.title.toLowerCase().includes(tuKhoa);
    });

    // Hiển thị danh sách mới tìm được 
    hienThiSanPham(danhSachTimDuoc);
}

//Hàm sắp xếp sản phẩm theo giá
function sapXepSanPham() {
    let kieuSapXep = document.getElementById('sort-box').value;
    
    // Tạo bản sao để không làm hỏng thứ tự mảng gốc khi sắp xếp
    let tuKhoa = document.getElementById('search-box').value.toLowerCase();
    let danhSachHienTai = danhSachGoc.filter(sp => sp.title.toLowerCase().includes(tuKhoa));

    if (kieuSapXep === 'tang') {
        danhSachHienTai.sort((a, b) => a.price - b.price);
    } else if (kieuSapXep === 'giam') {
        danhSachHienTai.sort((a, b) => b.price - a.price);
    }

    hienThiSanPham(danhSachHienTai);
}

//Các hàm xử lý Modal 
const modal = document.getElementById('modal-container');

function xemChiTiet(idSanPham) {
    // Tìm sản phẩm trong danh sách gốc dựa vào ID
    let sanPham = danhSachGoc.find(sp => sp.id === idSanPham);

    if (sanPham) {
        // Điền thông tin vào modal
        document.getElementById('m-image').src = sanPham.image;
        document.getElementById('m-title').innerText = sanPham.title;
        document.getElementById('m-price').innerText = "$" + sanPham.price;
        document.getElementById('m-desc').innerText = sanPham.description;

        // Hiện modal lên
        modal.style.display = 'block';
    }
}

function dongModal() {
    modal.style.display = 'none';
}

// Click ra ngoài vùng trắng thì đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        dongModal();
    }
}

// Gọi hàm lấy dữ liệu ngay khi tải trang
layDuLieu();