(() => {

    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const heroName = returnName()

    const activateBatisignal = (): string => {
        return 'Barisenal activada';
    }

    console.log(typeof activateBatisignal); //function
    
})()