// Tính tống các số lẻ lớn hơn a, nhỏ hơn b.
// Chạy vòng lặp từ vị trí (a+1) đến vị trí (b-1)
// nếu là số lẻ => cộng vào kết quả

function sumOfOddNumbers(a, b){
    var count = 0;
    var index = a + 1;
    for(let i = index; i<b; i++){
        if(i%2 != 0){
            count =(count+i)%10000007;    //return count áp dụng với thêm với những số lớn
        }
    }return count;
    
}
