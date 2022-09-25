//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 
//Por exemplo: O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
let num = 10;

for (let index = num - 1; index >= 1; index-= 1) {
    num = num * index;
}
console.log(num);

//for:
//index = 10-1 = 9; 9 é maior ou igual a 1 = sim; 9 = 9 - 1 = 8
//num 10 = num 10 * index 9; (num = 90)

//index = 8; 8 é maior ou igual a 1 = sim; 8 = 8 - 1 = 7
//num 90 = num 90 * index 8; (num = 720)

//index = 7; 7 é maior ou igual a 1 = sim; 7 = 7 - 1 = 6
//num 720 = num 720 * index 7; (num = 5040)

//index = 6; 6 é maior ou igual a 1 = sim; 6 = 6 - 1 = 5
//num 5040 = num 5040 * index 6; (num = 30240)

//index = 5; 5 é maior ou igual a 1 = sim; 5 = 5 - 1 = 4
//num 30240 = num 30240 * index 5; (num = 151200)

//index = 4; 4 é maior ou igual a 1 = sim; 4 = 4 - 1 = 4
//num 151200 = num 151200 * index 4; (num = 604800)

//index = 3; 3 é maior ou igual a 1 = sim; 3 = 3 - 1 = 3
//num 604800 = num 604800 * index 3; (num = 1814400)

//index = 2; 2 é maior ou igual a 1 = sim; 2 = 2 - 1 = 1
//num 1814400 = num 1814400 * index 2; (num = 3628800)

//index = 1; 1 é maior ou igual a 1 = sim; 1 = 1 - 1 = 0
//num 3628800 = num 3628800 * index 1; (num = 3628800)
