# League of Telerik Academy

OOP Exercise. 

## Description:

### Classes:

`Hero` class:
 - Has health;
 - Has levels;
 - Has hero classes;
 - Has abilities (collected in the `AbilitySet` object);
 - Has capability of holding items and later casting them (if they have an ability);
 

`AbiitySet` class:
 - Collects all 4 `Ability` objects (Q, W, E, R) of the hero for cleaner structure.
 
 
`Ability` class:
 - Has `name` field;
 - Has `AbilityType` field (taken from `AbilityType` enumeration);
 - Has `coolDown`\* field;
 - Has `castTime`\* field;
 - Has `cost`\* field;
 - Has `damage`\* field;
 - Has `heal`\* field;
 
 
`Item` class:
 - Has `name` field;
 - Has `holder` field;
 - Has `ability`\* field;
 
 
`World` class:
 - Has `worldContents` field;
 

### Enumerations:

`AbilityType` enum:
 - Used in the `Ability` object construction, determining the type of the ability:
  - `Damage`;
  - `Heal`;
  

`HeroClass` enum:
 - Used in the `Hero` object construction, determining the type of the hero:
  - `Druid`;
  - `Warrior`;
  - `Shaman`;


`PlayerState` enum:
 - Used in the `Hero` object construction, determining the state of the hero:
  - `Dead`;
  - `Alive`;
  

### Utility Classes:

`GameSim` class:
 - Battles 2 given `Hero` instances, based on `Math.random()`. `Math.random()` for who casts an ability and `Math.random()` for which ability is casted.
 
 
<hr>

*&ast; means optional parameter, defaults to `0`*
