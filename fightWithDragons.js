// Chạy vòng while, tăng biến count mỗi lần 1 đơn vị tương đương với số lượt chém
// nếu số hit chém nhỏ hơn số đầu rồng mọc ra sau mỗi lần chém và không thể giết rồng trong 1 hit(x>d) thì trả về -1;
// nếu có thể giết rồng thì số đầu rồng = số đầu rồng - số đầu bị chém. nếu đầu rồng <= 0 thì trả về count,
// nếu không thì cộng thêm đầu rồng vào;



function fightWithDragons(x, d, h) {
    var index = x;
    var count = 0;
    while (true) {
        count++;
        if (d <= h && d < x) return -1;
        index = index - d;
        if (index <= 0) {
            return count;
        } index += h;
    }
}
