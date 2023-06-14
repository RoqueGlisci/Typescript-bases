(()=> {

    class Avenger{
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado');
        }

        protected getFullname(){ //protected solo se puede acceder dentro de la misma clase o clases que extienda o hereden 
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger { 
        constructor(
            name: string,
            realName: string,
            public isMutant:boolean,
        ){
            super(name, realName)
            console.log('constructor xmen llamado');
        }

        getFullnameDesdeXmen(){
            console.log(super.getFullname()); //metodo que extiendo de la clase Avenger
            
        }
    }

    const wolverine = new Xmen('Wolverin','Logan', true)
    // console.log(wolverine);
    // wolverine.getFullnameDesdeXmen();
    

})()