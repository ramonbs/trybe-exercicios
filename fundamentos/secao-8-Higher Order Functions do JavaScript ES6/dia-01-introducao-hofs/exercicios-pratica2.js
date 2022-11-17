const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength, min) => {
  const totalDamage = Math.round(Math.random() * (strength - min) + min);

  return totalDamage;
};

const warriorDamage = (strength, weaponDmg) => {
  const totalDamage = Math.round(
    Math.random() * (strength * weaponDmg - strength) + strength
  );

  return totalDamage;
};

const mageDamage = {
  damage: (intelligence) =>
    Math.round(
      Math.random() * (intelligence * 2 - intelligence) + intelligence
    ),
  mana: (mana, turn) => {
    let manaTotal = mana;
    if (manaTotal <= 15) {
      return `Não possui mana suficiente`;
    } else {
      for (let i = 0; i < turn; i += 1) {
        manaTotal -= 15;
      }
    }
    return manaTotal;
  },
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => {
    const totalWarriorDamage = warriorDamage(
      warrior.strength,
      warrior.weaponDmg
    );
    warrior.damage = totalWarriorDamage;
    dragon.healthPoints -= totalWarriorDamage;
  },
  mageTurn: (mageDamage) => {
    const totalMageDamage = mageDamage.damage(mage.intelligence);
    mage.damage = totalMageDamage;
    mage.mana = mageDamage.mana(mage.mana, 1);
    dragon.healthPoints -= totalMageDamage;
  },
  dragonTurn: (dragonDamage) => {
    const totalDragonDamage = dragonDamage(dragon.strength, 15);
    mage.healthPoints -= totalDragonDamage;
    warrior.healthPoints -= totalDragonDamage;
    dragon.damage = totalDragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());
