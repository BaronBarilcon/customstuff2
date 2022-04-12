name = "tesseractPump";
creativeTab = "Tutorial";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "tesseractPump_remove.png";
information[0] = "It transforms state of around blocks to \"Normal\".";

addToCreative[1] = false;
textureFile[1] = "tesseractPump_cell.png";
information[1] = "It transforms state of around blocks to \"Mossy\".";

onRightClick[0] = "mod.loadScript('tesseractPump/onRightClickTesseractPump.js');";
onRightClick[1] = "mod.loadScript('tesseractPump/onRightClickTesseractPump.js');";