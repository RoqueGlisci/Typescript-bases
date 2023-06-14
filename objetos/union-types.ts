(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers:  number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Roque';
    console.log(myCustomVariable); //typeof para ver el tipo
    
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {
        name: 'Bruce',
        age: 32,
        powers: [1]
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    
})()