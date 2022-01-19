/** CAPITULO 68 **/
const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: (id) => console.log(`Borrando canción ${id}`),
    crearPlaylist: (nombre) => console.log(`Tu playlist fue creada: ${nombre}`),
    reproducirPlaylist: (nombre) =>console.log(`Reproduciendo playlist: ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'No me conoce (Remix)';
reproductor.obtenerCancion;

reproductor.reproducir(1);
reproductor.reproducir(18);
reproductor.pausar();

reproductor.borrar(30);

reproductor.crearPlaylist('Música para relajarse');
reproductor.reproducirPlaylist('Música para estudiar');