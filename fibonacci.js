function fibonacci(n, fibo) {
    if(fibo===undefined){
        fibo = [0,1]
    }
    if(fibo[fibo.length-1]<n){
        const current = fibo[fibo.length-1]+fibo[fibo.length-2]
        fibo.push(current)
        return fibonacci(n, fibo)
    }
    if(fibo[fibo.length-1]>n){
        fibo.pop()
    }
    return fibo
}
                        // 5,702,887
console.log(fibonacci(4000000));