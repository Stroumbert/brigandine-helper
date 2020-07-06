import f from './factions';
import c from './classes';

import imgAvenir from '../img/knight-avenir.png';

/* Knight Data Model
    knightName: {
        name: STRING,
        maxManaPool: NUMBER,
        faction: OBJECT REFERENCE,
        startingClass: OBJECT REFERENCE,
        img: IMPORTED IMAGE REFERENCE,
        growthRate: STRING,
        growth: STRING,
        startingLevel: NUMBER,
        startingHP: NUMBER,
        attack: NUMBER,
        defense: NUMBER,
        str: NUMBER,
        int: NUMBER,
        agi: NUMBER,
        manaPool: NUMBER,
        runeArea: NUMBER,
    }
*/

export default {
  Rubino: {
    name: 'Rubino',
    faction: f.norzaleo,
    maxManaPool: 390,
  },
  Elena: {
    name: 'Elena',
    faction: f.norzaleo,
    maxManaPool: 380,
  },
  Leonora: {
    name: 'Leonora',
    faction: f.norzaleo,
    maxManaPool: 350,
  },
  Ariana: {
    name: 'Ariana',
    faction: f.norzaleo,
    maxManaPool: 340,
  },
  Pick: {
    name: 'Pick',
    faction: f.norzaleo,
    maxManaPool: 330,
  },
  Grados: {
    name: 'Grados',
    faction: f.norzaleo,
    maxManaPool: 320,
  },
  Theodora: {
    name: 'Theodora',
    faction: f.norzaleo,
    maxManaPool: 320,
  },
  Schizler: {
    name: 'Schizler',
    faction: f.norzaleo,
    maxManaPool: 300,
  },
  Jack: {
    name: 'Jack',
    faction: f.norzaleo,
    maxManaPool: 300,
  },
  Maximilian: {
    name: 'Maximilian',
    faction: f.norzaleo,
    maxManaPool: 290,
  },
  Brendan: {
    name: 'Brendan',
    faction: f.norzaleo,
    maxManaPool: 280,
  },
  Ferrick: {
    name: 'Ferrick',
    faction: f.norzaleo,
    maxManaPool: 280,
  },
  Jiu: {
    name: 'Jiu',
    faction: f.norzaleo,
    maxManaPool: 270,
  },
  Klaus: {
    name: 'Klaus',
    faction: f.norzaleo,
    maxManaPool: 260,
  },
  
  Eliza: {
    name: 'Eliza',
    maxManaPool: 380,
    faction: f.guimoule,
  },
  Sugar: {
    name: 'Sugar',
    maxManaPool: 360,
    faction: f.guimoule,
  },
  Cain: {
    name: 'Cain',
    maxManaPool: 350,
    faction: f.guimoule,
  },
  Patricia: {
    name: 'Patricia',
    maxManaPool: 350,
    faction: f.guimoule,
  },
  Darian: {
    name: 'Darian',
    maxManaPool: 330,
    faction: f.guimoule,
  },
  Kate: {
    name: 'Kate',
    maxManaPool: 320,
    faction: f.guimoule,
  },
  Leanne: {
    name: 'Leanne',
    maxManaPool: 320,
    faction: f.guimoule,
  },
  Conrad: {
    name: 'Conrad',
    maxManaPool: 300,
    faction: f.guimoule,
  },
  Marcosias: {
    name: 'Marcosias',
    maxManaPool: 300,
    faction: f.guimoule,
  },
  Rose: {
    name: 'Rose',
    maxManaPool: 280,
    faction: f.guimoule,
  },
  Diana: {
    name: 'Diana',
    maxManaPool: 280,
    faction: f.guimoule,
  },
  "Mu'ah": {
    name: "Mu'ah",
    maxManaPool: 278,
    faction: f.guimoule,
  },
  Vayne: {
    name: 'Vayne',
    maxManaPool: 267,
    faction: f.guimoule,
  },
  Avenir: {
    name: 'Avenir',
    maxManaPool: 260,
    faction: f.guimoule,
    startingClass: c.bishop,
    img: imgAvenir,
    growthRate: 'D',
    growth: 'C',
    startingLevel: 12,
    startingHP: 283,
    attack: 93,
    defense: 110,
    str: 62,
    int: 76,
    agi: 76,
    manaPool: 188,
    runeArea: 3,
  },
  Faye: {
    name: 'Faye',
    maxManaPool: 220,
    faction: f.guimoule,
  },

};
