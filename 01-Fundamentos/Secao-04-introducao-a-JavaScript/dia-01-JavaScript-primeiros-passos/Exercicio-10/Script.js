const angulo1 = 40;
const angulo2 = -30;
const angulo3 = 110;

const somaAngulos = angulo1 + angulo2 + angulo3;

// if (somaAngulos === 180 && typeof angulo1 && typeof angulo2 && typeof angulo3 === 'number') {
//     console.log(true);
// } else if (somaAngulos !== 180 && typeof angulo1 && typeof angulo2 && typeof angulo3 === 'number') {
//     console.log(false);
// } else if (typeof angulo1 && typeof angulo2 && typeof angulo3 !== 'number'){
//     console.log('erro');
// }

if (somaAngulos === 180) {
    console.log(true);
} else if (somaAngulos !== 180 && Math.sign(angulo1) === 1 && Math.sign(angulo2) === 1 && Math.sign(angulo3) === 1) {
    console.log(false);
} else if (Math.sign(angulo1) === -1 || Math.sign(angulo2) === -1 || Math.sign(angulo3) === -1) {
    console.log('erro');
}
