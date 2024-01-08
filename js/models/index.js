// Lấy dữ liệu từ input
arrNhanVien=[]
function getValueUser(){        
    var arrInput = document.querySelectorAll('form input,form select')
    console.log(arrInput)
    var arrError = document.querySelectorAll('form span.text-danger')
    console.log(arrError)
    // Chạy vòng lặp để lấy dữ liệu
    var nhanVien = new NhanVien
    var isValid = true
    for(var i = 0;i< arrInput.length;i++){
        var inputValue = arrInput[i].value
        var errorId = arrError[i].id
        var inputId = arrInput[i].id
        if(inputId == 'email'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkEmailValue(inputValue,errorId)
        }else if(inputId == 'tknv'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkMinMaxValue(inputValue,errorId,4,6)
        }else if(inputId == 'passwork'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkMinMaxValue(inputValue,errorId,4,6)
        }
        else if(inputId == 'passwork'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && 
            checkPasswork(inputId,errorId,6,10)
        }else{
            isValid &= checkEmptyValue(inputValue,errorId)

        }
        var id = inputId
        nhanVien[id] = inputValue
    }
    if(isValid){
    return nhanVien
    }
}
document.getElementById('btnThemNV').onclick= function(){
    //lấy dữ liệu 
    var nhanVien = getValueUser()
    if(nhanVien){
        //push dữ liệu nhân viên vào mảng
        arrNhanVien.push(nhanVien)
        console.log(arrNhanVien)
        //xóa các dữ liệu đang có trên form
        document.getElementById('formQLNV').reset()
        //lưu trữ dữ liệu xuống local 
        luuDuLieu('arrNhanVien',arrNhanVien)
        hienThiDuLieu();
    }
}
// Hiển thị lên table
function hienThiDuLieu(arr){
    if(arr == undefined){
        arr = arrNhanVien
    }
    // chạy vòng lặp qua từng phần tử mảng
    // tạo ra những chuỗi html trong xử lí vòng lặp
    var content =''
    for(var i =0;i<arr.length;i++){
        var nhanVien = arr[i];
        //đưa dữ liệu lên giao diện thông qua object mới
        var newNhanVien = new NhanVien();
        nhanVien= Object.assign(newNhanVien,nhanVien)

        content += `
        <tr>
            <td>${nhanVien.tknv}</td>
            <td>${nhanVien.name}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.datepicker}</td>
            <td>${nhanVien.chucvu}</td>
            <td>${nhanVien.tinhTongLuong()}</td>
            <td>${nhanVien.xepLoaiNhanVien()}</</td>
            <td>
                <button onclick="xoaDuLieuUser('${nhanVien.email}')" class="btn btn-danger">Xóa</button>
                <button onclick="getInfoUser('${nhanVien.email}')" class="btn btn-warning">Sửa</button>
            </td>
        </tr>
        `
    }
    document.getElementById('tableDanhSach').innerHTML=content
}

function luuDuLieu(key,value){
    var stringValue = JSON.stringify(value);
    localStorage.setItem(key,stringValue)
}
// Lấy dữ liệu
function layDuLieuLocalStorage(key){
    var dataLocal = localStorage.getItem('arrNhanVien');
    // kiểm tra xe dữ liệu lấy về
    if(dataLocal){
        //xử lý hành động
        var convertData = JSON.parse(dataLocal)
        arrNhanVien = convertData
        hienThiDuLieu();
    }else{
        //xử lí hành động khi không có dữ liệu
    }
}
layDuLieuLocalStorage()
//-----Xóa dữ liệu và hiển thị lên table
function xoaDuLieuUser(email){
    console.log(email)
    var index = -1
    for(var i =0;i<arrNhanVien.length;i++){
        if(arrNhanVien[i].email == email){
            console.log(i)
            index = i 
        }
    }
    if(index != -1){
        arrNhanVien.splice(index,1)
        luuDuLieu('arrNhanVien',arrNhanVien)
        hienThiDuLieu()
    }
}
function getInfoUser(email){
    console.log(email)
    var nhanVienIndex= {}
    for(var i =0; i<arrNhanVien.length;i++){
        var nhanVien = arrNhanVien[i]
        if(nhanVien.email == email){
            nhanVienIndex = nhanVien
        }
    }
    var arrInput = document.querySelectorAll('form input, form select')
    console.log(arrInput)
    for(var z =0;z<arrInput.length;z++){
        var htmlDom= arrInput[z]
        var id = htmlDom.id
        htmlDom.value = nhanVienIndex[id]
    }
    document.getElementById('email').readOnly = true
}

//-- Cập nhật dữ liệu
function updateValueUser(){
    console.log('hello')
    // lấy dữ liêu về
    var nhanVien = getValueUser()
    console.log(nhanVien)
    // tìm vị trí index
    for(var i=0;i<arrNhanVien.length;i++){
        if(nhanVien.email == arrNhanVien[i].email){
            arrNhanVien[i] = nhanVien
        }
    }
    luuDuLieu('arrNhanVien',arrNhanVien)
    hienThiDuLieu()
    document.getElementById('formQLNV').reset();
    document.getElementById('email').readOnly = false

    
}
document.getElementById('btnCapNhat').onclick = updateValueUser