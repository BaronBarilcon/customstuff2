name = "grassSickle";
creativeTab = "Tutorial";
maxStack = 1;

damage = 2;
full3d = true;
toolClass = "hoe";
maxDamage = 256;

addToCreative[0] = true;
textureFile[0] = "grassSickle.png";
information[0] = "";
efficiency[0] = 4.0;
onHitEntity[0] = "itemstack.damageItem(2);";

onBlockStartBreak[0] = "mod.loadScript('grassSickle/onBlockStartBreak.js');";
