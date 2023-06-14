(() => {

    const fullName = (firstName:string, ...restArgs: string[]): string => {//para encadenar otros objetos en restArgs
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark','joseph', 'toto')

    console.log({superman});
    
})()