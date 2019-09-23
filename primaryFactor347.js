//Nhập vào số n. nếu n<=1 return false.
// Nếu n>1, nếu n chia hết cho 3 chia đến khi nào không chia hết cho 3 được nữa.
// tiếp tục như thế với 4 và 7. nếu kết quả cuối cùng n=1 nghĩa là n là tích của chỉ 3 số 3,4,7 => return true
// nếu n khác 1 => return false.


function primaryFactor347(n){
    if(n<=1) return false;
    while(n%3==0){
        n/=3;
    }
    while(n%4==0){
        n/=4;
    }
    while(n%7==0){
        n/=7;
    }
    return n==1;
}
