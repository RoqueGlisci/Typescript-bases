(() => {

    const fullName = (firstName: string, lastName?: string): String => {//lastName? es opcional el valor puede o no mandarse 
        return `${firstName} ${lastName || '----'}` 
    }

    const name = fullName('Tony')
    console.log({name});
    
})()