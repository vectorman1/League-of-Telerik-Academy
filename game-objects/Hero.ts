import { AbilitySet } from "./AbilitySet"
import { HeroClass } from "../enums/HeroClass"
import { Item } from "./Item"
import { World } from "./World"
import { PlayerState } from "../enums/PlayerState"
export class Hero {
    name: string;
    level: number;
    abilitySet: AbilitySet;
    class: HeroClass;
    items : Item[] = [];
    health : number;
    world : World;
    playerState : PlayerState;

    constructor(name: string, health: number, level: number, abilitySet: AbilitySet, clas: HeroClass, playerState : PlayerState = PlayerState.Alive) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.abilitySet = abilitySet;
        this.class = clas;
        this.playerState = playerState;
    }

    public AddItem(item: Item) {
        this.items.push(item);
    }

    public UseItem(item: Item) {
        this.items[this.items.indexOf(item)].Cast(this);
        this.items.slice(this.items.indexOf(item), 1);
    }

    public Walk(): void {

    }
    public Run(): void {
        
    }
    public Jump(): void {

    }

    public isAlive() : boolean {
        if (this.playerState == PlayerState.Alive) {
            return true;
        }
        return false;
    }

}
