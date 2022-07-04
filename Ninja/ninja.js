class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`The ninjas name is ${this.name}\n`)
    }

    showStats(){
        console.log(`Here Are The Ninjas Stats\n Name: ${this.name}\n Strength: ${this.strength}\n Speed: ${this.speed}\n Health: ${this.health}\n`)
    }

    drinkSake(){
        this.health +=10
        console.log(`${this.name} dinks Sake! 10 Health has been added!\n`)
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`${this.name} Speaks : You will stop caring so much about what people think of you, when you realize how seldom they do.\n`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();