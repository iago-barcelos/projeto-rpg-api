import Fighter from "../Fighter";
import Battle from "./Battle";

class PVP extends Battle {
    private _p1: Fighter;
    private _p2: Fighter;
    
    constructor(p1: Fighter, p2: Fighter) {
        super(p1);

        this._p1 = p1;
        this._p2 = p2;  
    }

    get player1() {
        return this._p1
    }

    get player2() {
        return this._p2
    }

    override fight(): number {
        while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
            this.player1.attack(this.player2)
            this.player2.attack(this.player1)
        }

        return super.fight();
    }
}

export default PVP;