import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;