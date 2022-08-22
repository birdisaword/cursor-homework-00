let n, m

while (isNaN(n)) {
    n = prompt('enter value N');  
};
 N = (parseInt(n));
    console.log(N)

while (isNaN(m)) {
    m = prompt('enter value M');
};
M = (parseInt(m));
    console.log(M)

let omitEvens = confirm('omit even numbers?')
let sum = 0;

if (omitEvens){
for(let i = N; i <= M; i++){
    if(i % 2 == 1){
        sum = sum + i;
    }
}
console.log (sum)
} else {
    for(let i = N; i <= M; i++){
        sum = sum + i;
    }
    console.log (sum)
}