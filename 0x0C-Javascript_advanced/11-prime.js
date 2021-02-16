function countPrimeNumbers() {
    let primeArray = new Array(100).fill(true);
    let totalCount = 0;
    for (let i = 2; i < 100; i++) {
        if (primeArray[i] === true) {
            totalCount++;
            for (let j = i * i; j < 100; j += i) {
                primeArray[j] = false;
            }
        }
    }
    return totalCount;
}

let timeStart00 = performance.now();

setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        console.log(countPrimeNumbers());
    }
});

let timeEnd00 = performance.now();

console.log("Execution time of calculating prime numbers 100 times was " + (timeEnd00 - timeStart00) + "milliseconds.");
