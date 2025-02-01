let a = +prompt("تعداد درس های خود را وارد کنید")
let i,c,d, sum1=0 ,sum2=0;
for ( i = 1; i <= a; i++ ) {
    c = +prompt(" نمره درس " +i+" وارد کنید ")
    d = +prompt("ضریب درس را وارد کنید ")
    sum1 = sum1+(c*d);
    sum2 = sum2+d;
}

function sum(x,y){
    if (x > y){
        return x/y;
    }else{
        return y/x;
    }
}

let date =  document.getElementById("demo")
date.innerHTML = sum (sum1,sum2)