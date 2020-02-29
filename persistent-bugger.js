function persistence(num) {
    let count = 0;
    while (num > 9) {
        let str = num.toString().split('');
        let total = str.reduce((acc, currentValue) => {
            return acc * currentValue;
        }, 1);
        console.log(total);
        num = total;
        count++;
    }
    return 'Total count: ' + count;
}
console.log(persistence(39));