function makeTriangle(a, b, c) {

    function checkTriangle(a, b, c) {  //kiểm tra 3 số có thỏa mãn độ dài 3 cạnh của tam giác không
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true;
    }return false;
}

let arr = [a, b, c];
    let result = 0;
    while (!checkTriangle(...arr)) {        //Nếu chưa thỏa mãn 3 cạnh 1 tam giác thì tìm cạnh bé nhất
        let min = 0;
        for (let i = 1; i <= 2; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        arr[min]++;        // Tăng độ dài và result 1 đơn vị,
        result++;
    }
    return result;  // trả về result 
}
