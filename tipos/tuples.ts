(() => {

    const hero: [string, number, boolean] = ['hola', 100, false] // es para que el primer tipo de datos sea string y el otro number 

    hero[0] = 'pepe';
    hero[1] = 5;
    hero[2] = true;

    console.log(hero);
    
 })()