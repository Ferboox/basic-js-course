/** CAPITULO 62 **/

iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Segunda función...');

    usuarioAutenticado('Fernando');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado ${usuario}`);
}