function generousMan(n, m){
    var count = 0;
    while(true){
        if(n < 0) return "Van"
        if(m < 0) return "Viet"
        count +=1;
        if(count%2!=0){        //Chạy vòng lặp, n-count nếu count là số lẻ
            n = n -count;       //m-count nếu count là số chẵn
        }                       // trừ đến khi n hoặc m < 0
        if(count%2 == 0){
            m = m - count;            
        }
        
    }
}
