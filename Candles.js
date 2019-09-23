// gán sáp và result bằng số nến ban đầu, khi sáp >=b là khi mà có thể tạo ra 1 cây nến mới từ số sáp còn lại.
// số cây nến tạo ra sau khi đốt bằng interger số sáp chia b và có số sáp dư bằng sap%b. 
// số sáp sẽ bằng số cây + số sáp dư



function candles(a, b){
    let sap = a;
    let result = a;
    while(sap>=b){
        let cay = Math.floor(sap/b);  //khi đốt nến ra số cây
        let du = sap%b;    //và ra số sáp dư
        sap = cay + du;    //tính số sáp tiếp theo còn lại để đốt. nếu số này >=b thì đốt tiếp tục
        result = result + cay;   //ra số cây nến sau khi đốt
    }
    return result;  //trả về số cây đã đốt
}
