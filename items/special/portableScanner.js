name = "portableScanner";
creativeTab = "Tutorial";
maxStack = 1;

textureFile[0] = "portableScanner.png";
information[0] = "Can scan Blocks of Tutorial Mod.";

addToCreative[0] = true;
onUse[0] = "mod.loadScript('portableScanner/onUsePortableScanner.js');";