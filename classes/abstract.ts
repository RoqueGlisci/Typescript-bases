(() => {
    //su usa de base para crear otras clases o para que un argumento implemento las caracteristica de la calse abstracta
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvar'
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }

    let wolverine = new Xmen('wolverine', 'Logan')
    let magneto = new Villian('magneto', 'pepe')

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
        console.log(character.name);
        
    }

    // printName(wolverine)
    // printName(magneto)
    
})()