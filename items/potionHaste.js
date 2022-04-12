name = "potionHaste";
creativeTab = "Tutorial";
maxStack = 8;

//Drinkable I 3:00
addToCreative[0] = true;
textureFile[0] = "potion/potion_bottle_drinkable_haste.png";
hasEffect[0] = true;
usingAction[0] = "drink";

alwaysEdible[0] = true;

potion[0] = "digSpeed";
potionAmplifier[0] = 0;
potionDuration[0] = 180;
potionProbability[0] = 1.0;

onEaten[0] = "player.add('minecraft:glass_bottle', 1, 0)";
information[0] = "Haste (3:00)";


//Drinkable II 1:30
addToCreative[1] = true;
textureFile[1] = "potion/potion_bottle_drinkable_haste.png";
hasEffect[1] = true;
usingAction[1] = "drink";

alwaysEdible[1] = true;

potion[1] = "digSpeed";
potionAmplifier[1] = 1;
potionDuration[1] = 90;
potionProbability[1] = 1.0;

onEaten[1] = "player.add('minecraft:glass_bottle', 1, 0)";
information[1] = "Haste II (1:30)";


//Drinkable I 8:00
addToCreative[2] = true;
textureFile[2] = "potion/potion_bottle_drinkable_haste.png";
hasEffect[2] = true;
usingAction[2] = "drink";

alwaysEdible[2] = true;

potion[2] = "digSpeed";
potionAmplifier[2] = 0;
potionDuration[2] = 480;
potionProbability[2] = 1.0;

onEaten[2] = "player.add('minecraft:glass_bottle', 1, 0)";
information[2] = "Haste (8:00)";