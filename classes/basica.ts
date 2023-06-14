(()=> {

    // class Avenger {
    //     private name: string; //solo se tiene acceso a esta propiedad dentro de la clase Avenger
    //     public team: string; //se puede acceder fuera de la clase. si no se culoca public a la propiedad por defecto es public -> team: string;
    //     public realName?: string;
    //     static avgAge: number = 35; //se acceden haciendo referencia a la clase no a la instancia

    //     constructor( name: string, team: string, realName?:string){
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }

    // }

    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);

    // ----------------------------------------------------------
    //---forma corta---
    //---class, metodos herencia--
    
    class Avenger {
        static avgAge: number = 35;

        constructor(
            private name: string,
            public team: string,
            public realName?:string
        ){}

        public bio() {
            return `${this.name} (${this.team})`
        }
    }

    
    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    
    // console.log(antman.bio());

})()