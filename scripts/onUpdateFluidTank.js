mod.loadScript('util.js');

try{
    var inputName = world.getContainerSlotItemName(position, 0);
    var inputMetadata = world.getContainerSlotMetadata(position, 0);
    var inputCount = world.getContainerSlotStackSize(position, 0);
    if(inputName){
        var inputClass = getOreDictClassByItem(inputName, inputMetadata);
        if(inputClass && inputClass.substr(0, 4) == 'cell'){
            var inputMaterial = inputClass.substr(4);
mod.printLine('input: ' + inputName + ':' + inputMetadata + ' ' + inputCount + ' (' + inputMaterial + ')');
            var fluidName = world.getTileEntityStringData(position, 'fluidName');
            var fluidCount = world.getTileEntityIntData(position, 'fluidCount');
            if(fluidCount == -1) fluidCount = 0;
            if(fluidCount == 0 || fluidName == 'null') fluidName = 'null';
            
            var outputName = world.getContainerSlotItemName(position, 2);
            var outputMetadata = world.getContainerSlotMetadata(position, 2);
            var outputCount = world.getContainerSlotStackSize(position, 2);
            if(outputCount == -1) outputCount = 0;
            if(outputName){
                var outputClass = getOreDictClassByItem(outputName, outputMetadata);
            }else{
                var outputClass = null;
            }
            
            if(outputClass && outputClass.substr(0, 4) == 'cell'){
                var outputMaterial = outputClass.substr(4);
            }else{
                var outputMaterial = 'null';
            }
mod.printLine('output: ' + outputName + ':' + outputMetadata + ' ' + outputCount + ' (' + outputMaterial + ')');
            
            
            if(inputMaterial == 'Empty'){
                
            }else{
                var convertCount = Math.min(64 - outputCount, inputCount);
mod.printLine(convertCount);
                if((fluidName == 'null' || fluidName == inputMaterial) && (outputCount == 0 || outputMaterial == 'Empty')){
                    world.setContainerSlot(position, 0, inputName, inputCount - convertCount, inputMetadata);
                    fluidCount += convertCount;
                    fluidName = inputMaterial;
                    world.setContainerSlot(position, 2, 'IC2:itemCellEmpty', outputCount + convertCount, 0);
mod.printLine(fluidCount);
mod.printLine(fluidName);
                }
            }
            world.setTileEntityStringData(position, 'fluidName', fluidName);
            world.setTileEntityIntData(position, 'fluidCount', fluidCount);
        }
    }
}catch(e){
    mod.printLine(e.message);
}