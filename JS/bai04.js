function kiemTraNguyenTo(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function demSoNguyenTo(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (kiemTraNguyenTo(i)) {
            count++;
        }
    }
    return count;
}

const result = demSoNguyenTo(10);
console.log(`${result} (${result === 4 ? '2, 3, 5, 7' : 'Không có số nguyên tố nào'})`);