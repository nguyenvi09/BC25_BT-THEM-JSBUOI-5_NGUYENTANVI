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
 * BT2
 */