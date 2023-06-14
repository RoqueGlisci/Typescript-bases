(()=> {
    //Es posible heredar interfaces con la palabra "extends"
    interface Carro{
        llantas:number;
        modelo:string;
    }
    
    interface Volvo extends Carro{
        seguro:boolean;
    }
    
    var volvo:Volvo = {
        llantas: 4,
        modelo:"sedan",
        seguro:true
    
    }

    console.log(volvo);
      
//----------------------------------------------------------------------------------
    interface Client {
        name: String;
        age?: number;
        address:  Address;
        getFullAddress?(id: string):string; //metodo
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client1: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'fasdf',
            city: 'pepe'
        },
        getFullAddress(id: string){
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'toto',
        age: 223,
        address: {
            id: 3242,
            zip: 'aaa',
            city: 'loto'
        }
    }
})()