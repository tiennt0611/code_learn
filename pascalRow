//value là giá trị push vào mảng arr. pascalRow(n) sẽ có output là arr có n+1 phần tử.
//chạy vòng lặp từ 0 đến n.nếu j=0 thì push 1 vào arr(tại vị trí đầu tiên).
//nếu không thì value=value*(n-j+1)/j; rồi push value vào vị trí j cho đến vị trí thứ n.
//trả lại arr gồm các value đã đc push vào.


function pascalRow(n){
    var value =0;
    var arr = [];
    for(let j=0;j<=n;j++){
        if(n==0 || j==0){
            value=1;
            arr.push(value);    //nếu n=0 hoặc j=0 => push 1 vào array
        } 
        else{
            value=value*(n-j+1)/j;
            arr.push(value);
        }
    }return arr;
}
