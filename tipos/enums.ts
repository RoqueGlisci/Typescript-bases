(() => {

    // enum AudioLevel {
    //     min = 1, 
    //     medium = 5, 
    //     max = 10
    // }

    // let currentAudio: AudioLevel = 10

    enum AudioLevel {
        min, //0
        medium, //1
        max //2
    }

    let currentAudio1 = AudioLevel.medium
    let currentAudio2 = AudioLevel.min
    let currentAudio3 = AudioLevel.max

    console.log(currentAudio1); //1
    console.log(currentAudio2); //0
    console.log(currentAudio3); //2
    console.log(AudioLevel);
    
    
    enum enumeracion {
        a=10,
        b,
        c=9,
        d
      }

    console.log(enumeracion.a);
    console.log(enumeracion.b); //11
    console.log(enumeracion.c);
    console.log(enumeracion.d); //10
    
 })()