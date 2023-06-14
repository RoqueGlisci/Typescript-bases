(()=> {

    let flash: {name: string, age?: number, power: string[], getName?: () => string } = { //age? es opcional
        name: 'pepe',
        age: 24,
        power: ['super velocidad','viajer en el tiempo']
    }

    // flash = {
    //     name: 'otro nombre',
    //     // age: 50,
    //     power: ['super fuerza'],
    //     getName(){
    //         return this.name
    //     }
    // }

    // console.log(flash.getName());
    console.log(flash);
    
})()