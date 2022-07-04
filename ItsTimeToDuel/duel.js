class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Effect){
            throw new Error("Only Units Can Attack other Units!")
        }else{
            target.res -= this.power
            console.log(`${this.name} attacks ${target.name} for ${this.power} Damage.\n${target.name} now has ${target.res} Resilience.\n`)
        }
        return this;
    }
}

class Effect extends Card{
    constructor(name , cost, magnitude , text, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this. text = text;
        this.stat = stat;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat === "res"){
                target.res += this.magnitude
                
                console.log(`${this.name} Was Played!\n${this.magnitude} added to ${target.name} Resilience\n${target.name} now has ${target.res} Resilience.\n`)

            }else{
                target.power += this.magnitude
                console.log(`${this.name} Was Played!\n${this.magnitude} added to ${target.name} Power\n${target.name} now has ${target.power} Power.\n`)
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
        return this;
    }
}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4);
const bbn = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, 3, "Increase target's resilience by 3" , "res")
const upr = new Effect("Unhandled Promise Rejection", 1, -2, "Reduce target's resilience by 2" , "res")
const pp = new Effect("Pair Programming", 3, 2, "Increase target's power by 2" , "power")

hardAlgo.play(rbn)
upr.play(bbn)
pp.play(rbn)
rbn.attack(bbn)