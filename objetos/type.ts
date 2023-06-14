(()=> {

    type Hero = {
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