function keyboardRow(words) {
    let row1 = ["q", "w", "e", "r", "t", "y", "y", "u", "i", 'o', 'p'];
    let row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let row3 = ["z", "x", "c", "v", "b", "n", "m"];
    let result = [];

    function checkWord(word, row) {   // Tạo hàm kiểm tra word trong mảng words
        word = word.toLowerCase()     // Chuyển word về lowerCase
        word = word.split("");        // Tách word thành mảng.
        for (let i = 0; i < word.length; i++) {     //Kiểm tra các phần tử trong mảng có trong cùng 1 dòng không
            if (row.indexOf(word[i]) < 0) {
                return false;
            }
        } return true;
    }
    for (let i = 0; i < words.length; i++) {
        if (checkWord(words[i], row1) || checkWord(words[i], row2) || checkWord(words[i], row3)) {
            result.push(words[i]);      //Nếu các từ của words[i] cùng dòng 1 hoặc dòng 2 hoặc dòng 3 => push vào mảng
        }
    }
    return result;
}
