name = "leverBlock";
material = "iron";
stepSound = "metal";
creativeTab = "Tutorial";
tickrate = 20;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:leverBlock";
pick[0] = "Tutorial:leverBlock";

onUpdate[0] = "mod.loadScript('leverBlock/onUpdateLeverBlock.js');";
onActivated[0] = "mod.loadScript('leverBlock/onActivatedLeverBlock.js'); mod.loadScript('leverBlock/onUpdateLeverBlock.js');";

textureFileXP[0] = "leverBlock_off.png";
textureFileXN[0] = "leverBlock_off.png";
textureFileYP[0] = "leverBlock_off.png";
textureFileYN[0] = "leverBlock_off.png";
textureFileZP[0] = "leverBlock_off.png";
textureFileZN[0] = "leverBlock_off.png";


addToCreative[1] = false;
hardness[1] = 5.0;
resistance[1] = 30.0;
toolClass[1] = "pickaxe";
drop[1] = "Tutorial:leverBlock";
pick[1] = "Tutorial:leverBlock";

onUpdate[1] = "mod.loadScript('leverBlock/onUpdateLeverBlock.js');";
onActivated[1] = "mod.loadScript('leverBlock/onActivatedLeverBlock.js');";

textureFileXP[1] = "leverBlock_on.png";
textureFileXN[1] = "leverBlock_on.png";
textureFileYP[1] = "leverBlock_on.png";
textureFileYN[1] = "leverBlock_on.png";
textureFileZP[1] = "leverBlock_on.png";
textureFileZN[1] = "leverBlock_on.png";
