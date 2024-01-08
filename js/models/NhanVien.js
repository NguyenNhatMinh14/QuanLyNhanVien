function NhanVien(){
    this.tknv='';
    this.name='';
    this.email='';
    this.password='';
    this.datepicker='';
    this.luongCB=0
    this.chucvu='';
    this.gioLam=0
    // Phương thức tính lương
    this.tinhTongLuong=
    function(){
        var tongLuong = 0
        var chucVu = this.chucvu
        var luong = this.luongCB
        if(chucVu ==="Sếp"){
            tongLuong= luong *3
        }else if(chucVu === "Trưởng phòng"){
            tongLuong = luong * 2
        }if(chucVu==="Nhân viên"){
            tongLuong = luong
        }
        return tongLuong
        console.log(tongLuong)
    }
    //Phương thức xếp loại
    this.xepLoaiNhanVien=
    function(){
        var xepLoai =''
        var gioLam = this.gioLam
        if(gioLam >= 190){
            xepLoai='nhân viên xuất sắc'
        }else if(gioLam>=176){
            xepLoai = 'nhân viên giỏi'
        }else if(gioLam >= 160){
            xepLoai = 'nhan vien khá'
        }if(gioLam<160){
            xepLoai = ' nhân viên trung bình'
        }
        return xepLoai
    }
}