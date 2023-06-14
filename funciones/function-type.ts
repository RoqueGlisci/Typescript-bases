
(() => {
    // forma mas corta / const addNumber = (a: number, b: number) => a + b;
    
    const addNumbers = (a: number, b: number) => {
        return a + b;
    }

    const greet = (name: string) => {
        return `Hola ${name}`
    }

    const saveTheWorld = () => {
        return `El mundo esta salvado`
    }

    let myFunction: Function; //general para las 3

    // let myFunction: (y: number, z: number) => number; //es una funcion que retorna un numero
    // let myFunction: (y: string) => string; 
    // let myFunction: () => string; 

    //si se coloca addNumbers() se lo esta llamando para ejecutar. sin los () es para asignarlo a una cariable 
    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('toto'));

    myFunction = saveTheWorld;
    console.log(myFunction());
    
})();