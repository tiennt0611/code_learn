// tìm k sao cho x^0 + x^1 + ... + x^k < n
// gán k và result bằng 0. chạy vòng lặp và gán result = result + x^k. mỗi vòng sẽ tăng k lên 1 giá trị.
// result = 2^0 + 2^1 +.... cho đến khi result > n thì sẽ return số k-1. vì output chỉ lấy k ở thời điểm result nhỏ hơn n.




function specialPolynomial(x, n){
    var k = 0;
    var result =0;
    while(true){
        result += Math.pow(x,k);
        if(result>n){
            return k-1;
        }
        k+=1;
    }
}
