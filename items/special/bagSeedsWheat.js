name = "bagSeedsWheat";
creativeTab = "Tutorial";
maxStack = 1;
maxDamage = 1024;

addToCreative[0] = true;
textureFile[0] = "bagSeedsWheat.png";
information[0] = "Expand the wheat field more and more!";

onUse[0] = "mod.loadScript('bagSeeds/onUseBagSeedsWheat.js');";
onRightClick[0] = "mod.loadScript('bagSeeds/onRightClickBagSeedsWheat.js');";
