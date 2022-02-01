import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const serverResolvers = {
  Query: {
    characters: () => prisma.playerCharacter.findMany(),
    character: (_parent: any, args: any) =>
      prisma.playerCharacter.findUnique({
        where: { id: args.id },
        include: {
          magicSchools: { include: { magicSchool: true } },
          spells: { include: { spell: true } },
          skills: { include: { skill: true } },
          languages: { include: { language: true } },
          heroAbilities: { include: { heroAbility: true } },
          equipment: { include: { equipment: true } },
          weapons: { include: { weapon: true } },
        },
      }),
  },
  PlayerCharacter: {
    magicSchools: (parent) => {
      return parent.magicSchools;
    },
    spells: (parent) => {
      return parent.spells;
    },
    skills: (parent) => {
      return parent.skills;
    },
    languages: (parent) => {
      return parent.languages;
    },
    heroAbilities: (parent) => {
      return parent.heroAbilities;
    },
    equipment: (parent) => {
      return parent.equipment;
    },
    weapons: (parent) => {
      return parent.weapons;
    },
  },
  MagicSchool: {
    name: (parent) => {
      return parent.magicSchool.name;
    },
  },
  Spell: {
    name: (parent) => {
      return parent.spell.name;
    },
  },
  Skill: {
    name: (parent) => {
      return parent.skill.name;
    },
  },
  Language: {
    name: (parent) => {
      return parent.language.name;
    },
  },
  HeroAbility: {
    name: (parent) => {
      return parent.heroAbility.name;
    },
  },
  Equipment: {
    name: (parent) => {
      return parent.equipment.name;
    },
    weight: (parent) => {
      return parent.equipment.weight;
    },
  },
  Weapon: {
    name: (parent) => {
      return parent.weapon.name;
    },
    damage: (parent) => {
      return parent.weapon.damage;
    },
    breakValue: (parent) => {
      return parent.weapon.breakValue;
    },
    length: (parent) => {
      return parent.weapon.length;
    },
    range: (parent) => {
      return parent.weapon.range;
    },
    weight: (parent) => {
      return parent.weapon.weight;
    },
  },
};

module.exports = serverResolvers;
