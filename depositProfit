// gán result bằng số tiền deposit ban đầu. count là biến đếm số năm bắt đầu từ 0.
//nếu result < threshold thì result sẽ bằng với result nhân số rate/100. và năm tăng lên 1 đơn vị.
//vòng lặp trả về biến count cuối cùng với điều kiện result < threshold chính là số năm gửi tiền.



function depositProfit(deposit, rate, threshold){
    var result = deposit;
    var count = 0;
    while(result<threshold){
        result += (result*rate)/100;
        count +=1;
    }
    return count;
}
