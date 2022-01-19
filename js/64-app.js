/** CAPITULO 64 **/
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    borrar: function(id){
        console.log(`Borrando canción ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Tu playlist fue creada: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.reproducir(1);
reproductor.reproducir(18);
reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist('Música para relajarse');
reproductor.reproducirPlaylist('Música para estudiar');