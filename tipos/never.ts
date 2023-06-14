(() => {

    const abc = (message: string): (never | number) => { //never no puede terminar exitosamente la funcion

        if(false){
            throw new Error(message)
        }
        
        return 1
    }
     
    abc('hola')
 })()