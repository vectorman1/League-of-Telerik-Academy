import { AbilityType } from "../enums/AbilityType"
import { Hero } from "./Hero"
import { PlayerState } from "../enums/PlayerState"
export class Ability {
    public name : string;
    public coolDown : number;
    public castTime : number;
    public cost : number;
    public type : AbilityType;
    public damage : number;
    public heal : number;

    constructor(name : string, abilityType : AbilityType, 
                coolDown : number = 0, castTime : number = 0,
                cost : number = 0, damage : number = 0,
                heal : number = 0) {
        this.name = name;
        this.type = abilityType;
        this.coolDown = coolDown;
        this.castTime = castTime;
        this.cost = cost;
        this.damage = damage;
        this.heal = heal;
    }
    
    public Cast(source : Hero, target? : Hero) {
        if (source.isAlive()) {
            console.log(`${source.name} casts ${this.name} at ${target.name} for ${this.damage} damage!`);
            if (target.isAlive()) {
                target.health -= this.damage;
                if (target.health < 0) {
                    target.playerState = PlayerState.Dead;
                    console.log(`${target.name} is now dead.`);
                    return;
                }
                console.log(`${target.name}'s health is now ${target.health}!`);
                return;
            }
        }
    }
}
