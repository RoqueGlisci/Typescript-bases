(()=> {

    class Avenger{
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado');
        }

        //los get y set pueden tener el mismo nombre
        get fullName() {//tiene que retornar
            return `${this.name} --- ${this.realName}`;
        }

        set fullName(name: string) { //tiene que recibir un argumento
            if(name.length < 3){
                throw new Error('El nombre debe de ser mayor de 3 letras')
            }
            this.name = name;
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
    // console.log(wolverine.fullName); //cundo de llama al get no se coloca los ()
    
    // wolverine.fullName = 'Roque';
    // console.log(wolverine.fullName); 

})()