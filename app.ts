// const msg: string = 'hola mundo'
// console.log(msg);

// const hero = {
//     name: 'ironman',
//     age: 45
// }

// console.log(hero);


//-------------------------------------

// funcion anonima autoinvocada - para no caer en el scope global
// Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque

(() => {
    const a: number = 10
    let b: number = 10

})()



