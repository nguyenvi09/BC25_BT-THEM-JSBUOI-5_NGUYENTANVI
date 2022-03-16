let $ = document.getElementById.bind(document);

/**
 * Tính thuế thu nhập cá nhân
 * 
 * - Đầu vào: nhập hoTen, tongThuNhapNam, soNguoiPhuThuoc
 * 
 * - Xử lý: 
 * B1: tính thuNhapChiuThue = tongThuNhapNam - 4tr - soNguoiPhuThuoc*1.6tr
 * B2: tạo các hàm tương ứng với số % chịu thuế
 * ta tính lũy tiến theo các mốc chịu % thuế tương ứng
 * B3: dùng if lọc điều kiện chịu thuế
 * 
 * - Đầu ra: xuất tiền thuế TNCN phải trả
 */

$("btnKetQua").onclick = function(){
    var hoTen = $("hoTen").value;
    var tongThuNhapNam = $("tongThuNhapNam").value *1;
    var soNguoiPhuThuoc = $("soNguoiPhuThuoc").value;
    var tongTienPhaiTra;

    var thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc*1.6;
    if(thuNhapChiuThue <= 60){
        tongTienPhaiTra = thueSuat5PhanTram(thuNhapChiuThue);
    }else if( 60 < thuNhapChiuThue && thuNhapChiuThue <= 120){
        tongTienPhaiTra = thueSuat10PhanTram(thuNhapChiuThue);
    }else if(120 < thuNhapChiuThue && thuNhapChiuThue <= 210){
        tongTienPhaiTra = thueSuat15PhanTram(thuNhapChiuThue);
    }else if(210 < thuNhapChiuThue && thuNhapChiuThue <= 348){
        tongTienPhaiTra = thueSuat20PhanTram(thuNhapChiuThue);
    }else if(348 < thuNhapChiuThue && thuNhapChiuThue <= 624){
        tongTienPhaiTra = thueSuat25PhanTram(thuNhapChiuThue);
    }else if(624 < thuNhapChiuThue && thuNhapChiuThue <= 960){
        tongTienPhaiTra = thueSuat30PhanTram(thuNhapChiuThue);
    }else{
        tongTienPhaiTra = thueSuat35PhanTram(thuNhapChiuThue);
    }

    $("tongTienPhaiTra").innerHTML = "Thuế thu nhập cá nhân của " + hoTen + " phải trả là: " + tongTienPhaiTra.toFixed(2) + " triệu";
};

function thueSuat5PhanTram(thuNhapChiuThue){
    return thuNhapChiuThue * 0.05;
};

function thueSuat10PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + (thuNhapChiuThue - 60) * 0.1);
};

function thueSuat15PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15);
};

function thueSuat20PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2);
};

function thueSuat25PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 348) * 0.25);
};

function thueSuat30PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3);
};

function thueSuat35PhanTram(thuNhapChiuThue){
    return (60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35);
};

/**
 * TÍNH TIỀN CÁP
 * 
 * - Đầu vào: maKH, chọn loại khách hàng, soKN, soLuongKCC
 * 
 * - Xử lý: 
 * B1: tạo hàm lấy loại khách hàng
 * B2: ẩn hiện trường số kết nối 
 * B3: tạo 2 hàm tính tiền cáp
 * B4: dùng switch kiểm tra giá trị chính xác rồi tính tiền cáp
 * 
 * - Đầu ra: In mã khách hàng và số tiền cáp phải trả ra màn hình
 */

const PHI_HD_NHADAN = 4.5;
const PHI_DV_NHADAN = 20.5;
const THUEKENH_NHADAN = 7.5;

const PHI_HD_DOANHNGHIEP = 15;
// phí dịch vụ của 10 kết nối đầu
const PHI_DV_DOANHNGHIEP_10 = 75;
const THUEKENH_DOANHNHGIEP = 50;

function layLoaiKH(){
    var doanhNghiep = $("doanhNghiep");
    var loaiKH = "";

    if(doanhNghiep.checked){
        loaiKH = "doanhNghiep";
    }else{
        loaiKH = "nhaDan";
    }

    return loaiKH;
}

document.addEventListener("click", function(){
    var doanhNghiep = $("doanhNghiep");

    if(doanhNghiep.checked){
        // $("soKN").disabled = false;
        document.querySelector(".soKetNoi").style.display = "block";
    }else{
        // $("soKN").disabled = true;
        document.querySelector(".soKetNoi").style.display = "none";
    }
});

$("btnTinhTienCap").onclick = function(){
    var maKH = $("maKH").value;
    var soLuongKCC = $("soLuongKCC").value *1;
    var soKN = $("soKN").value *1;
    var loaiKH = "";
    var tongTienCap;

    loaiKH = layLoaiKH();
    switch (loaiKH) {
        case "doanhNghiep":
            tongTienCap = tongTienCapDoanhNghiep(soLuongKCC, soKN);
            break;
        case "nhaDan":
            tongTienCap = tongTienCapNhaDan(soLuongKCC);
            break;
    };

    $("tongTienCap").innerHTML = "Mã khách hàng " + maKH + " phải trả là: " + tongTienCap + " $";
}



function tongTienCapNhaDan(soLuongKCC){
    return PHI_HD_NHADAN + PHI_DV_NHADAN + THUEKENH_NHADAN * soLuongKCC;
}

function tongTienCapDoanhNghiep(soLuongKCC, soKN){
    if(soKN <= 10){  
        return PHI_HD_DOANHNGHIEP + THUEKENH_DOANHNHGIEP * soLuongKCC 
                         + ((PHI_DV_DOANHNGHIEP_10 / 10) * soKN);
    }else {
        return PHI_HD_DOANHNGHIEP + THUEKENH_DOANHNHGIEP * soLuongKCC 
                         + 75 + 12.5 * (soKN - 10);
    };
};