function createSuperHero(superpoder, secretName, alias) {
    console.log(this);
    this.superpoder = superpoder,
    this.secretName = secretName,
    this.alias = alias;
}

const spiderman = new createSuperHero('superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperHero('raios laseer', 'tony stark', 'iron man');

/**
 * this: es el objeto que llama la funcion
 */