name = "portableOreStorage";
creativeTab = "Tutorial";
maxStack = 1;
maxDamage = 8;

textureFile[0] = "portableOreStorage.png";
information[0] = "For carrying a lot of ores simply.";

addToCreative[0] = true;
onUse[0] = "mod.loadScript('portableOreStorage/onUsePortableOreStorage.js');";
onRightClick[0] = "mod.loadScript('portableOreStorage/onRightClickPortableOreStorage.js');";