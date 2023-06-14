(() => {

    let avenger: any = 234
    
    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0));
    console.log((avenger as string).charAt(0)); //as string lo trata como un string es de ts
    
    
    avenger = 150.8998;
    // console.log(avenger.toFixed(2));
    console.log(<number>avenger.toFixed(2)); //<number> lo trata como numero es de ts
    
})()