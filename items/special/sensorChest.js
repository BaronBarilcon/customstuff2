name = "sensorChest";
creativeTab = "Tutorial";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "sensorChest.png";
information[0] = "Searching Chests.";

onRightClick[0] = "mod.loadScript('sensorChest/onRightClickSensorChest.js');";
onUse[0] = "mod.loadScript('sensorChest/onUseSensorChest.js');";