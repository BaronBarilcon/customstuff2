name = "transformerMosscrack";
creativeTab = "Tutorial";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "transformerMosscrack_normal.png";
information[0] = "It transforms state of around blocks to \"Normal\".";

addToCreative[1] = false;
textureFile[1] = "transformerMosscrack_mossy.png";
information[1] = "It transforms state of around blocks to \"Mossy\".";

addToCreative[2] = false;
textureFile[2] = "transformerMosscrack_cracked.png";
information[2] = "It transforms state of around blocks to \"Cracked\".";

onRightClick[0] = "mod.loadScript('transformerMosscrack/onRightClickTransformerMosscrack.js');";
onRightClick[1] = "mod.loadScript('transformerMosscrack/onRightClickTransformerMosscrack.js');";
onRightClick[2] = "mod.loadScript('transformerMosscrack/onRightClickTransformerMosscrack.js');";