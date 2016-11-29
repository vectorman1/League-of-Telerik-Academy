import { AbilitySet } from "./game-objects/AbilitySet"
import { Ability }from "./game-objects/Ability"
import { Hero } from "./game-objects/Hero"
import { World } from "./game-objects/World"
import { HeroClass } from "./enums/HeroClass"
import { Item } from "./game-objects/Item"
import { AbilityType } from "./enums/AbilityType"
import { GameSim } from "./utils/GameSim"
let Stamat = new Hero("Stamat", 300, 1, 
                    new AbilitySet(
                        new Ability("RAZKUR6i ZEMQTA", AbilityType.Damage, 5, 0.1, 20, 50),
                        new Ability("PORASTNI RASTENIE", AbilityType.Damage, 20, 5, 70, 70), 
                        new Ability("PODPALI POJAR", 30, AbilityType.Damage, 0.3, 60, 10), 
                        new Ability("IZQJ DUNER", 200, AbilityType.Damage, 10, 150, 200)), HeroClass.Warrior
                    );


let Dragan = new Hero("Dragan", 200, 1,
                    new AbilitySet(
                        new Ability("EBI BOIKO BORISOV", AbilityType.Damage, 5, 10, 30, 10),
                        new Ability("PII MTNDEW", AbilityType.Damage, 1, 1, 40, 40),
                        new Ability("QJ DORITOS", AbilityType.Damage, 30, 30, 30, 30),
                        new Ability("QUICKSCOPE MANIAK", AbilityType.Damage, 4, 5, 6, 20)), HeroClass.Shaman
                    );


let world = new World();

world.AddControllable(Stamat);
world.AddControllable(Dragan);
console.log(`-----------------------`);

let gamesim = new GameSim(Stamat, Dragan);
gamesim.Compete();