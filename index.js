const repeat = (n, fn){
    for(let i =0; i < n; i++){
        fn(n);
    }
}

repeat(5, (n)=>{n*5});