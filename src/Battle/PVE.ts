import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monster: SimpleFighter[] | Fighter[];

  constructor(fighter: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._monster = monster;
  }
    
  public get fighter() : Fighter {
    return this._fighter;
  }

  public get monster() : SimpleFighter[] | Fighter[] {
    return [...this._monster];
  }
    
  override fight(): number {
    do {
      this.monster.forEach((m) => {
        this._fighter.attack(m);
        m.attack(this.fighter);
      }); 
    } while (this.monster.some((monster) => monster.lifePoints > 0));

    return super.fight();
  }
}

export default PVE;