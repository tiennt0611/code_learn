    //Gán r bằng v + a
    //khai báo result. So sánh kết quả cộng 2 số mới sau khi đã lược bỏ 0 với (v + a) sau khi lược bỏ hết số 0



function nonZeros(v, a){
    let r = v + a;
    let rw0 = r.toString().replace(/0/g,"");    //chuyển v, a và r ra chuỗi và lược bỏ số 0
    let vw0 = v.toString().replace(/0/g,"");
    let aw0 = a.toString().replace(/0/g,"");
    let result;
    Number(rw0) == Number(vw0) + Number(aw0) ? result = "YES" : result = "NO";
    return result
}
