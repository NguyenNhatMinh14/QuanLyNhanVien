function checkEmptyValue(value,errorId){
    if(value){
        document.getElementById(errorId).innerHTML=''
        return true;
    }else{
        document.getElementById(errorId).innerHTML='Vui lòng không để trống'
        return false
    }
}

 function checkEmailValue(value,errorId){
    var regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var checkEmail = regexEmail.test(value)
    if(checkEmail){
        document.getElementById(errorId).innerHTML=''
        return true
    }else{
        document.getElementById(errorId).innerHTML='Vui lòng nhập đúng định dạng email'
        return false
    }
 }
 //hàm kiểu tra số lượng ký tự
 function checkMinMaxValue(value,errorId,min,max){
    var doDaiKyTu = value.trim().length()
    if(doDaiKyTu >min && doDaiKyTu<max){
        document.getElementById(errorId).innerHTML=''
        return true
    }else{
        document.getElementById(errorId).innerHTML=`Vui lòng nhập dữ liệu trong khoản ${min} ký tự và ${max} ký tự`
        return false
    }

 }


 