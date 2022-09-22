// const salarioBruto = 3000;
// let inss = 0;
// let ir = 0;

// // INSS (Instituto Nacional do Seguro Social) 
// if (salarioBruto <= 1556.94) {
// inss = 0.08 * salarioBruto;
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
// inss = 0.09 * salarioBruto;
// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
// inss = 0.11 * salarioBruto;
// } else {
// inss = 570.88;
// }

// const salarioMenosInss = salarioBruto - inss;

// // IR (Imposto de Renda)
// if (salarioMenosInss <= 1903.98) {
// ir = 0;
// } else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
// ir = (salarioMenosInss * 0.075) - 142.80;
// } else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
// ir = (salarioMenosInss * 0.15) - 354.80;
// } else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
// ir = (salarioMenosInss * 0.225) - 636.13;
// } else {
// ir = (salarioMenosInss * 0.275) - 868.36;
// }

// console.log('Salário final:', salarioMenosInss - ir); 