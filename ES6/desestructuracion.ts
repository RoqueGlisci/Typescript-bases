(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.124312
    }

    // const { poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase()); // .toFixed(2) muestra 2 desimales
    
    const printAvenger = ({ironman, ...resto}: Avengers)=> { // el ...resto muestra el objeto completo
        console.log(ironman, resto);
    }
    // printAvenger(avengers)

    // -------------------------------------------------------

    // const avengersArr: [string, string, string] = ['Cap. America','Hulk', 'ironman]
    const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.323] // [string, boolean, number] es una tupla

    // const [ , ironman,] = avengersArr;
    const [capitan, ironman,] = avengersArr;

    console.log({ironman, capitan});
    
})()