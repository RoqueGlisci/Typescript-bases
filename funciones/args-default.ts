(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): String => {//lastName? es opcional el valor puede o no mandarse 
        if(upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase(); 
        }else{
            return `${firstName} ${lastName || '----'}`;
        }
    }

    const name = fullName('Tony', 'stark', true)
    console.log({name});
    
})()