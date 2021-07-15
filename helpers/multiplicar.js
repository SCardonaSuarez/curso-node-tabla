const fs = require('fs')
const colors = require('colors');


const crearArchivo = async (base = 5, listar=false, hasta = 10)=>{

    try {



        let salida = ''
        let consola = ''
        for(let i = 1; i <=hasta; i++){
    
            salida  += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`);

        }


        if(listar){
            console.log('======================='.brightGreen);
            console.log(` Tabla del:`.bgMagenta, colors.blue(base));
            console.log('======================='.brightGreen);
            console.log(consola);

        }
    
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return (`Tabla-${base}.txt creado`);
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}
