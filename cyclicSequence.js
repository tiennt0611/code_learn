function cyclicSequence(sequence) {
    while (sequence[0] > sequence[sequence.length - 1]) {   // Kiểm tra mảng, nếu phần tử đầu tiên lớn hơn phần tử cuối cùng
        let num = sequence.shift();                         // xóa phần tử đầu tiên khỏi mảng và push vào vị trí cuối cùng
        sequence.push(num);
    }
    for (let i = 0; i < sequence.length - 1; i++) {       //Kiểm tra mảng nhận được có tăng dần không. 
        if (sequence[i] >= sequence[i + 1]) {             // Nếu có trả về true
            return false;
        }
    } return true;
}
