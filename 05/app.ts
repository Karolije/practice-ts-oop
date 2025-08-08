abstract class Character {
    private _name: string;
    private _health: number;
    public burnEffect: boolean = false; 

    constructor(name: string, health: number = 100) {
        this._name = name;
        this.health = health;
    }

    set health(value: number) {
        if (value <= 0) {
            this._health = 0;
            console.log(`${this.name} umiera`);
        } else if (value > 100) {
            this._health = 100;
        } else {
            this._health = value;
        }
    }

    get health() {
        return this._health;
    }

    get name() {
        return this._name;
    }

    abstract useSkill(target: Character): void;

    static performAction(actor: Character, target: Character) {
        actor.useSkill(target);
    }

    applyBurnIfNeeded() {
        if (this.burnEffect) {
            const burnDamage = this.health * 0.1;
            this.health -= burnDamage;
            console.log(`${this.name} cierpi od spalenia (-10% HP): ${burnDamage.toFixed(1)}. Obecne zdrowie: ${this.health.toFixed(1)}`);
            this.burnEffect = false;
        }
    }
}

class Warrior extends Character {
    useSkill(target: Character): void {
        target.applyBurnIfNeeded();
        target.health = target.health - 15;
        console.log(`${this.name} użył Slam na ${target.name}. Zdrowie celu: ${target.health}`);
    }
}  
class Mage extends Character {
    useSkill(target: Character): void {
        target.applyBurnIfNeeded();
        target.health = target.health - 10;
        target.burnEffect = true;
        console.log(`${this.name} użył Fireball na ${target.name}. Zdrowie celu: ${target.health}`);
    }
}

class Healer extends Character {
    useSkill(target: Character): void {
        target.applyBurnIfNeeded();
        const percent = Math.random() * (0.2 - 0.1) + 0.1; 
        const healAmount = target.health * percent;
        target.health = target.health + healAmount;
        console.log(`${this.name} użył Heal na ${target.name}, lecząc o ${healAmount.toFixed(1)} (${(percent * 100).toFixed(0)}%). Zdrowie celu: ${target.health.toFixed(1)}`);
    }
}
const warrior1 = new Warrior("War1");
const warrior2 = new Warrior("War2");
const mage = new Mage("Mag");
const healer = new Healer("Healer");

// Symulacja
Character.performAction(warrior1, mage);
Character.performAction(warrior2, mage);
Character.performAction(mage, warrior1);
Character.performAction(healer, mage);
Character.performAction(warrior2, mage);
Character.performAction(mage, warrior1);
Character.performAction(warrior2, mage);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);
Character.performAction(mage, warrior1);

