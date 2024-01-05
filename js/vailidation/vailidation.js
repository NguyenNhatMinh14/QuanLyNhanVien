function checkEmptyValue(value,errorId){
    if(value){
        document.getElementById(errorId).innerHTML=''
        return true;
    }else{
        document.getElementById(errorId).innerHTML='Vui lòng không để trống'
        return false
    }
}