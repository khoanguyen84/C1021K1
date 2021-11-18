let totalPrimes = 50;
let count = 0;
let number = 2;
let numberIsPrime = true;
while (count <= totalPrimes) {
    numberIsPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            numberIsPrime = false;
            break;
        }
    }
    if (numberIsPrime) {
        console.log(n);
        count++;
    }
    n++;
}