// sugar
// class constructor new this extends super

class createPersona {
    
    constructor(name, age, nationality, work, isIntrovertido) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.work = work;
        this.isIntrovertido = isIntrovertido;
    }

    eat() {
        console.log('eat...');
    }

}

class createPanadero extends createPersona {
    constructor(name, age, nationality, work, isIntrovertido, isComerciante, hasEspatula) {
        super(name, age, nationality, work, isIntrovertido);
        this.isComerciante = isComerciante,
        this.hasEspatula = hasEspatula;
    }
    cook() {
        console.log('cook...');
    }
}

class createSuperHero extends createPersona {
    constructor(name, age, nationality, work, isIntrovertido, superpoder, secretName, alias) {
        super(name, age, nationality, work, isIntrovertido);
        this.superpoder = superpoder,
        this.secretName = secretName,
        this.alias = alias;
    }
    fly() {
        console.log('fly...');
    }
}

const spiderman = new createSuperHero('peter parker', 20, 'americana', 'reportero', true, 'superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperHero('tony stark', 48, 'americana', 'scientist', false,'raios laseer', 'tony stark', 'iron man');
const tintan = new createPanadero('tintan', 25, 'mexicana', 'actor', false, true, false);