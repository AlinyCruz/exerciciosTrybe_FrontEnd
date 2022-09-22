const currentHour = 16;
let message;

if (currentHour === 22) { // <---- se for 22 horas
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) { // <---- se for entre 18 e 21 horas
    message = 'Rango da noite, vamos jantar'; 
} else if (currentHour >= 14 && currentHour < 18) { // <---- se for entre 14 e 17 horas
    message = 'Vamos fazer um bolo pro café da tarde ?'; 
} else if (currentHour >= 11 && currentHour < 14) { // <---- se for entre 11 e 13 horas
    message = 'Hora do almoço!!!'; 
} else if (currentHour >= 4 && currentHour < 11){  // <---- se for entre 4 e 10 horas
    message = 'Hmmm, cheiro de café recém - passado'; 
} else {                                           // <---- se for entre 23 e 3 horas
    message = 'Estaremos dormindo'; 
}

console.log(message);