name = "rainDetector";
material = "rock";
stepSound = "stone";
creativeTab = "Tutorial";
tickrate = 40;

addToCreative[0] = true;
hardness[0] = 5.0;
resistance[0] = 30.0;
toolClass[0] = "pickaxe";
drop[0] = "Tutorial:rainDetector:0";
pick[0] = "Tutorial:rainDetector:0";
information[0] = "Outputs redstone signal when it is rainy or thunderstorm.|Must be placed in unobstructed sunlight.";

onUpdate[0] = "mod.loadScript('rainDetector/onUpdateRainDetector.js');";

textureFileXP[0] = "rainDetector0_side_off.png";
textureFileXN[0] = "rainDetector0_side_off.png";
textureFileYP[0] = "rainDetector0_top_off.png";
textureFileYN[0] = "rainDetector0_bottom_off.png";
textureFileZP[0] = "rainDetector0_side_off.png";
textureFileZN[0] = "rainDetector0_side_off.png";


addToCreative[1] = true;
hardness[1] = 5.0;
resistance[1] = 30.0;
toolClass[1] = "pickaxe";
drop[1] = "Tutorial:rainDetector:1";
pick[1] = "Tutorial:rainDetector:1";
information[1] = "Outputs redstone signal when it is thunderstorm.|Must be placed in unobstructed sunlight.";

onUpdate[1] = "mod.loadScript('rainDetector/onUpdateRainDetector.js');";

textureFileXP[1] = "rainDetector1_side_off.png";
textureFileXN[1] = "rainDetector1_side_off.png";
textureFileYP[1] = "rainDetector1_top_off.png";
textureFileYN[1] = "rainDetector1_bottom_off.png";
textureFileZP[1] = "rainDetector1_side_off.png";
textureFileZN[1] = "rainDetector1_side_off.png";



addToCreative[8] = false;
hardness[8] = 5.0;
resistance[8] = 30.0;
toolClass[8] = "pickaxe";
drop[8] = "Tutorial:rainDetector:0";
pick[8] = "Tutorial:rainDetector:0";

onUpdate[8] = "mod.loadScript('rainDetector/onUpdateRainDetector.js');";

textureFileXP[8] = "rainDetector0_side_on.png";
textureFileXN[8] = "rainDetector0_side_on.png";
textureFileYP[8] = "rainDetector0_top_on.png";
textureFileYN[8] = "rainDetector0_bottom_on.png";
textureFileZP[8] = "rainDetector0_side_on.png";
textureFileZN[8] = "rainDetector0_side_on.png";


addToCreative[9] = false;
hardness[9] = 5.0;
resistance[9] = 30.0;
toolClass[9] = "pickaxe";
drop[9] = "Tutorial:rainDetector:1";
pick[9] = "Tutorial:rainDetector:1";

onUpdate[9] = "mod.loadScript('rainDetector/onUpdateRainDetector.js');";

textureFileXP[9] = "rainDetector1_side_on.png";
textureFileXN[9] = "rainDetector1_side_on.png";
textureFileYP[9] = "rainDetector1_top_on.png";
textureFileYN[9] = "rainDetector1_bottom_on.png";
textureFileZP[9] = "rainDetector1_side_on.png";
textureFileZN[9] = "rainDetector1_side_on.png";
