let danhSachGoc = [];


async function layDuLieu() {
    const loadingText = document.getElementById('loading-text');
    
    try {
       
        let ketQua = await fetch('https://fakestoreapi.com/products');
        
    
        danhSachGoc = await ketQua.json();
        
   
        loadingText.style.display = 'none';

      
        hienThiSanPham(danhSachGoc);

    } catch (loi) {
        console.log(loi);
        loadingText.innerText = "Lỗi rồi! Không tải được dữ liệu.";
        loadingText.style.color = "red";
    }
}


function hienThiSanPham(danhSach) {
    const khungHienThi = document.getElementById('product-list');
    

    if (danhSach.length === 0) {
        khungHienThi.innerHTML = '<p style="text-align:center; width:100%">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

   
    let htmlContent = '';

   
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

   
    khungHienThi.innerHTML = htmlContent;
}


function timKiemSanPham() {
 
    let tuKhoa = document.getElementById('search-box').value.toLowerCase();

  
    let danhSachTimDuoc = danhSachGoc.filter(function(sanPham) {
        return sanPham.title.toLowerCase().includes(tuKhoa);
    });

   
    hienThiSanPham(danhSachTimDuoc);
}


function sapXepSanPham() {
    let kieuSapXep = document.getElementById('sort-box').value;
    
   
    let tuKhoa = document.getElementById('search-box').value.toLowerCase();
    let danhSachHienTai = danhSachGoc.filter(sp => sp.title.toLowerCase().includes(tuKhoa));

    if (kieuSapXep === 'tang') {
        danhSachHienTai.sort((a, b) => a.price - b.price);
    } else if (kieuSapXep === 'giam') {
        danhSachHienTai.sort((a, b) => b.price - a.price);
    }

    hienThiSanPham(danhSachHienTai);
}


const modal = document.getElementById('modal-container');

function xemChiTiet(idSanPham) {

    let sanPham = danhSachGoc.find(sp => sp.id === idSanPham);

    if (sanPham) {
      
        document.getElementById('m-image').src = sanPham.image;
        document.getElementById('m-title').innerText = sanPham.title;
        document.getElementById('m-price').innerText = "$" + sanPham.price;
        document.getElementById('m-desc').innerText = sanPham.description;

      
        modal.style.display = 'block';
    }
}

function dongModal() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal) {
        dongModal();
    }
}


layDuLieu();