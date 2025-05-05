let moedas = 0;
let total = 0;

while (total < 12) {
    total += 3;
    moedas++;
    console.log(`adicionou uma moeda e ficou com um total de: R$${total}`);
}
console.log(`total de moedas usadas: ${moedas}`);