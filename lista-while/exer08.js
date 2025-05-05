let num = 1;

while (true) {
    let cubo = num ** 3;
    if (cubo > 100) break;
    console.log(`o cubo de ${num} é ${cubo}`);
    num++;
}