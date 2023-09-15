function createPersona(name, age, nationality, work, isIntrovertido) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.work = work;
    this.isIntrovertido = isIntrovertido;
    this.eat = function() {
        console.log('eat...');
    }
    // this.sleep = function() {
    //     console.log('sleep...');
    // }
}

// equivalente al bloque de la linea 10-12
createPersona.prototype.sleep = function() {
    console.log('sleep...');
}

function createPanadero(name, age, nationality, work, isIntrovertido, isComerciante, hasEspatula) {
    this.__proto__ = new createPersona(name, age, nationality, work, isIntrovertido);
    this.isComerciante = isComerciante,
    this.hasEspatula = hasEspatula;
    this.cook = function() {
        console.log('cook...');
    }
}

function createSuperHero(name, age, nationality, work, isIntrovertido, superpoder, secretName, alias) {
    this.__proto__ = new createPersona(name, age, nationality, work, isIntrovertido);
    this.superpoder = superpoder,
    this.secretName = secretName,
    this.alias = alias;
    this.fly = function() {
        console.log('fly...');
    }
}

const spiderman = new createSuperHero('peter parker', 20, 'americana', 'reportero', true, 'superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperHero('tony stark', 48, 'americana', 'scientist', false,'raios laseer', 'tony stark', 'iron man');
const tintan = new createPanadero('tintan', 25, 'mexicana', 'actor', false, true, false);
// const mecanico = new createPersona(...)
