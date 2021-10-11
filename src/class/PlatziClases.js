//Por fuera de la clase, vamos a crear dos funciones, que reciban el id de los videos, para mantener "seguros" los url
const videoPlay = (id) => {
  // const secretURL = "https://www.youtube.com/watch?v=ZQ5v0d7oBkI"
  const secretURL = `https://www.platzi.com/secret_class/id=${id}/`;
  console.log(`Se está reproduciendo desde la url ${secretURL}`);
};

const videoStop = (id) => {
  const secretURL = `https://www.platzi.com/secret_class/id=${id}/`;
  console.log(`Pausamos la url ${secretURL}`);
};

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  Play() {
    videoPlay(this.videoID);
  }

  Pause() {
    videoStop(this.videoID);
  }
}
