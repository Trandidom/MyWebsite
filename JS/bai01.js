function daoNguocChuoi(chuoi) {
    return chuoi.split('').reverse().join('');
}

console.log(daoNguocChuoi("hello")); 