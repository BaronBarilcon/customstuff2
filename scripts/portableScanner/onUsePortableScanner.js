mod.loadScript('util.js');

// ç¿ïW x y z
player.sendMessage('----- X: ' + position.x + ' Y: ' + position.y + ' Z: ' + position.z + ' -----');
// blockName, blockMetadata
var blockName = world.getBlockName(position);
var blockMetadata = world.getBlockMetadata(position);
player.sendMessage('ID: ' + blockName + '  MetaData: ' + blockMetadata);
// blockLocalizedName
try{
    var blockLocalizedName = mod.getLocalizedItemName(blockName + ':' + blockMetadata);
    player.sendMessage('Name: ' + blockLocalizedName);
}catch(e){
    mod.printLine(e);
    player.sendMessage('Name: Sorry, Could not be analyzed.');
}

//** Sifting Table **//
if(blockName == 'Tutorial:siftingTable'){
    if(blockMetadata == 1){
        var kind     = world.getTileEntityIntData(position, 'kind');
        var progress = world.getTileEntityIntData(position, 'progress');
        var input    = world.getTileEntityStringData(position, 'input');
        player.sendMessage('Progress: ' + getProgress(progress, 20));
        player.sendMessage('RecipeKind: ' + kind);
        if(kind == 0){
            player.sendMessage('InputItem: ' + input);
        }
        if(kind == 1 || kind == 2){
            var inputItem = getItemByOreDictClass('crushedPurified' + input);
            var inputItemLocalizedName = mod.getLocalizedItemName(inputItem['name'] + ':' + inputItem['meta']);
            player.sendMessage('InputItem: ' + inputItemLocalizedName);
        }
    }
}

//** Farmblock (Plant) **//
var FERTILIZER = 2000;
var FERTILIZER_MAX = FERTILIZER * 16;
if(blockName == 'Tutorial:farmblockPlant'){
    var fertilizer = world.getTileEntityIntData(position, 'fertilizer');
    var progress   = world.getTileEntityIntData(position, 'progress');
    player.sendMessage('Fertilizer: ' + getProgress(fertilizer, FERTILIZER_MAX));
    player.sendMessage('Progress: ' + getProgress(progress, 40));
}

//** Farmblock (Gather) **//
if(blockName == 'Tutorial:farmblockGather'){
    var fertilizer = world.getTileEntityIntData(position, 'fertilizer');
    player.sendMessage('Fertilizer: ' + getProgress(fertilizer, FERTILIZER_MAX));
}

// âπ
world.playSound('random.orb', position, 0.5, 0.5 + Math.random() * 0.5);

function getProgress(currentValue, maxValue, length){
    return currentValue + ' / ' + maxValue + '  ' + getProgressBarString(currentValue, maxValue, length);
}

function getProgressBarString(currentValue, maxValue, length){
    if(typeof length === 'undefined'){
        length = 16;
    }
    var progressBar = '';
    var rate = Math.round((currentValue / maxValue) * length);
    for(var i = 0; i < length; i++){
        if(i < rate){
            progressBar += '|';
        }else{
            progressBar += '.';
        }
    }
    return '[' + progressBar + ']';
}
