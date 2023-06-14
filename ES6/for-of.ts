(() => {
    type Avengers = {
        name: string,
        weapon: string
    }

    const ironman: Avengers = {
        name: 'Ironman',
        weapon: 'Armonsuit'
    }
    const capAmerica: Avengers = {
        name: 'Capi',
        weapon: 'escudo'
    }
    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }


    const avengers = [ironman, capAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }

})()