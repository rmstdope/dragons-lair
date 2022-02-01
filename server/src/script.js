const { PrismaClient } = require("@prisma/client");
const util = require("util");

const prisma = new PrismaClient();

async function main() {
  await prisma.characterWeapon.deleteMany({});
  await prisma.characterEquipment.deleteMany({});
  await prisma.characterHeroAbility.deleteMany({});
  await prisma.characterLanguage.deleteMany({});
  await prisma.characterSkill.deleteMany({});
  await prisma.characterSpell.deleteMany({});
  await prisma.characterMagicSchool.deleteMany({});
  await prisma.spell.deleteMany({});
  await prisma.skill.deleteMany({});
  await prisma.language.deleteMany({});
  await prisma.heroAbility.deleteMany({});
  await prisma.equipment.deleteMany({});
  await prisma.weapon.deleteMany({});
  await prisma.playerCharacter.deleteMany({});
  await prisma.magicSchool.deleteMany({});

  await prisma.skill.create({
    data: { name: "Klättra" },
  });
  await prisma.skill.create({
    data: { name: "Simma" },
  });

  await prisma.language.create({
    data: { name: "Dvärgiska" },
  });
  await prisma.language.create({
    data: { name: "Människospråk" },
  });

  await prisma.heroAbility.create({
    data: { name: "Järnnäve" },
  });

  await prisma.equipment.create({
    data: { name: "Pryttel", weight: 5 },
  });
  await prisma.equipment.create({
    data: { name: "Sak", weight: 10 },
  });
  await prisma.equipment.create({
    data: { name: "Atteralj", weight: 3 },
  });

  await prisma.weapon.create({
    data: {
      name: "Stav",
      damage: "1T4",
      breakValue: 10,
      length: 2,
      range: 0,
      weight: 5,
    },
  });

  await prisma.magicSchool.create({
    data: { id: 1, name: "Animism" },
  });
  await prisma.magicSchool.create({
    data: { id: 2, name: "Symbolism" },
  });
  await prisma.magicSchool.create({
    data: {
      id: 3,
      name: "Elementarmagi",
      spells: {
        create: [
          { name: "Eld" },
          { name: "Frost" },
          { name: "Försegla" },
          { name: "Ljus" },
          { name: "Mörker" },
          { name: "Stenvägg" },
          { name: "Gasmoln" },
          { name: "Blixt" },
          { name: "Energistråle" },
          { name: "Knäcka" },
          { name: "Förtrolla vapen" },
          { name: "Förbanna vapen" },
          { name: "Frammana/Skicka bort elementar" },
        ],
      },
    },
  });
  await prisma.magicSchool.create({
    data: { id: 4, name: "Illusionism" },
  });
  await prisma.magicSchool.create({
    data: {
      id: 5,
      name: "Nekromanti",
      spells: {
        create: [
          { name: "Besulda" },
          { name: "Paralysering" },
          { name: "Kontrollera lägre odöd" },
          { name: "Rädsla" },
        ],
      },
    },
  });
  await prisma.magicSchool.create({
    data: { id: 6, name: "Mentalism" },
  });

  await prisma.playerCharacter.create({
    data: {
      id: 1,
      name: "Noogal Vindspinnare",
      gender: "Man",
      race: "Människa",
      age: 56,
      strength: 10,
      physique: 12,
      size: 11,
      agility: 14,
      intelligence: 18,
      phsycicPower: 16,
      charisma: 8,
      bonusExperience: 2,
      heroPoints: 1,
      swordHand: "Höger",
      movement: "L10",
      socialPosition: "Ja",
      homeTown: "Triclive",
      currentPsy: 18,
      currentHp: 15,
      goldCarried: 20,
      goldInStorage: 30,
      silverCarried: 40,
      silverInStorage: 50,
      copperCarried: 60,
      copperInStorage: 70,
      lifeGoals:
        "Att störta alla demokratier och införa ett styrelseskick där en liten intellektuell elit bestömmer vad som är bäst för alla.",
      appearance:
        "En rynkig gammal prick, mörk i hyn, bruna ögon och grått långt hår. Skägg som når ner till bröstet. Kutryggig och stödjer sig ofta på sin stav.",
      magicSchools: {
        create: [
          {
            skillLevel: 10,
            experience: 2,
            magicSchool: { connect: { name: "Elementarmagi" } },
          },
          {
            skillLevel: 6,
            magicSchool: { connect: { name: "Nekromanti" } },
          },
        ],
      },
      spells: {
        create: [
          {
            skillLevel: 10,
            experience: 1,
            spell: { connect: { name: "Eld" } },
          },
        ],
      },
      skills: {
        create: [
          {
            skillLevel: 12,
            experience: 2,
            skill: { connect: { name: "Klättra" } },
          },
        ],
      },
      languages: {
        create: [
          {
            speak: 5,
            readWrite: 3,
            experience: 2,
            language: { connect: { name: "Människospråk" } },
          },
        ],
      },
      heroAbilities: {
        create: [
          {
            heroAbility: { connect: { name: "Järnnäve" } },
          },
        ],
      },
      equipment: {
        create: [
          {
            equipment: { connect: { name: "Pryttel" } },
          },
          {
            equipment: { connect: { name: "Sak" } },
          },
        ],
      },
      weapons: {
        create: [
          {
            weapon: { connect: { name: "Stav" } },
          },
        ],
      },
    },
  });

  const players = await prisma.playerCharacter.findMany({
    include: {
      skills: { include: { skill: true } },
      magicSchools: { include: { magicSchool: true } },
      spells: { include: { spell: true } },
      languages: { include: { language: true } },
      heroAbilities: { include: { heroAbility: true } },
      equipment: { include: { equipment: true } },
      weapons: { include: { weapon: true } },
    },
  });
  console.log(
    util.inspect(players, { showHidden: false, depth: null, colors: true })
  );
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
