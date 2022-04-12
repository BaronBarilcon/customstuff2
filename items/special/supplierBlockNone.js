name = "supplierBlockNone";
creativeTab = "Tutorial";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "supplierBlockNone_on.png";
information[0] = "It supplies \"None Block\" to you forever.|[supplying: ON]";

onUpdate[0] = "mod.loadScript('supplierBlockNone/onUpdateSupplierBlockNone.js');";
onUpdate[1] = "mod.loadScript('supplierBlockNone/onUpdateSupplierBlockNone.js');";

onRightClick[0] = "mod.loadScript('supplierBlockNone/onRightClickSupplierBlockNone.js');";
onRightClick[1] = "mod.loadScript('supplierBlockNone/onRightClickSupplierBlockNone.js');";

onUse[0] = "mod.loadScript('supplierBlockNone/onUseSupplierBlockNone.js');";
onUse[1] = "mod.loadScript('supplierBlockNone/onUseSupplierBlockNone.js');";

addToCreative[1] = false;
textureFile[1] = "supplierBlockNone_off.png";
information[1] = "It supplies \"None Block\" to you forever.|[supplying: OFF]";