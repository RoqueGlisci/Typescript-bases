(()=> {
    //Diferencia de type y inerfaces es que una ves que se define un type no se le pueden agregar mas propiedades, mientras que interface es siempre extendible.
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = { //age? es opcional
        name: 'pepe',
        age: 24,
        powers: ['super velocidad','viajer en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    }
})()