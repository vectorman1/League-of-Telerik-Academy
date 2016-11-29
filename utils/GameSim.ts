import { Hero } from "../game-objects/Hero"

export class GameSim {
    private player1 : Hero;
    private player2 : Hero;

    constructor(pl1 : Hero, pl2 : Hero) {
        this.player1 = pl1;
        this.player2 = pl2;
    }
    public Compete() {
        while (this.player1.isAlive() || this.player2.isAlive()) {
            let random : number = Math.floor(Math.random() * 2) + 1;
            if (random == 1) {
                let randomSpell : number = Math.floor(Math.random() * 4) + 1;
                switch (randomSpell) {
                    case 1:
                        this.player1.abilitySet.AbilityQ.Cast(this.player1, this.player2);
                        break;
                    case 2:
                        this.player1.abilitySet.AbilityW.Cast(this.player1, this.player2);
                        break;
                    case 3:
                        this.player1.abilitySet.AbilityE.Cast(this.player1, this.player2);
                        break;
                    case 4:
                        this.player1.abilitySet.AbilityR.Cast(this.player1, this.player2);
                        break;
                }
            }
            else if (random == 2) {
                let randomSpell : number = Math.floor(Math.random() * 4) + 1;
                switch (randomSpell) {
                    case 1:
                        this.player2.abilitySet.AbilityQ.Cast(this.player2, this.player1);
                        break;
                    case 2:
                        this.player2.abilitySet.AbilityW.Cast(this.player2, this.player1);
                        break;
                    case 3:
                        this.player2.abilitySet.AbilityE.Cast(this.player2, this.player1);
                        break;
                    case 4:
                        this.player2.abilitySet.AbilityR.Cast(this.player2, this.player1);
                        break;
                }
            }
            if (!this.player1.isAlive() || !this.player2.isAlive())
                break;
        }
    }
}