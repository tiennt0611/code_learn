// Tách số thành mảng. số nhỏ nhất sẽ là sort của mảng, số lớn nhất là reverse của mảng.
// Lấy max-min. nếu bằng 6174 thì return count, nếu không thì trừ cho đến khi bằng 6174 hoặc 0.

function kaprekarConst(n) {
    var value = n;
    var count = 0;
    while (true) {
        count +=1;
        let nString = value.toString();
        let nArr = nString.split('');
        let minArr = nArr.sort();
        let min = Number(minArr.join(''));
        let maxArr = minArr.reverse();
        let max = Number(maxArr.join(''));
        let minus = max - min;
        if(minus == 6174){
            return count;
        }
        else if(minus == 0){
            return 0;
        }else{value = minus}
    }
}
