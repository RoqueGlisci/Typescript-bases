(() => {

   const Batman: string = 'Batman';
   const linternaVerde: string = 'Linterna Verde';
   const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(` I'm ${Batman}`);

    console.log(Batman.toUpperCase());

    console.log(Batman[10]?.toUpperCase() || 'No esta presente'); //[10] pata tomar el decimo caracter de la palabrea
    
})()