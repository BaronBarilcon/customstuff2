name = "emptySpawnEgg";
creativeTab = "Tutorial";
maxStack = 64;

addToCreative[0] = true;
textureFile[0] = "test/emptySpawnEgg.png";
hasEffect[0] = true;

onUseOnEntity[0] = "mod.loadScript('emptySpawnEgg/useEmptySpawnEgg.js');";

information[0] = "Capture Mob.|Click on Vanilla Mob, to capture it to Spawn Egg.";
