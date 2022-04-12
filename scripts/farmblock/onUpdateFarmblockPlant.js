mod.loadScript('util.js');

var x = position.x;
var y = position.y;
var z = position.z;

var rangeX = 8;
var rangeZ = 8; 

var rangeX2 = 13;
var rangeY2 = 30;
var rangeZ2 = 13; 

var SIZE = 20;
var STRING_MAX = 256;
var INVENTORY_MAX = 6;

var FERTILIZER = 2000;
var FERTILIZER_MAX = FERTILIZER * 16;
var FERTILIZER_PROCESS = 40;

var progress = world.getTileEntityIntData(position, 'progress');
var fertilizer = world.getTileEntityIntData(position, 'fertilizer');

// 40回に1回実行
if(progress == 30){
    if(fertilizer < FERTILIZER_MAX){
        //  インベントリから肥料検索
        var inventory = world.getInventory(position);
        var itemCount = inventory.getItemCount('IC2:itemFertilizer', 0);
        if(0 < itemCount){
            var consumableCount = Math.floor((FERTILIZER_MAX - fertilizer) / FERTILIZER);
            var consumeCount = Math.min(itemCount, consumableCount);
            inventory.remove('IC2:itemFertilizer', consumeCount, 0);
            fertilizer += FERTILIZER * consumeCount;
        }
    }
    if(0 < fertilizer){
        world.setBlockMetadata(position, 1);
    }else{
        world.setBlockMetadata(position, 0);
    }
}

if(FERTILIZER_PROCESS <= fertilizer){
    // 40回に1回実行
    if(progress == 20){
        // 植林可能場所検索
        var coordsAry = [];
        for(var i = -rangeX; i <= rangeX; i++){
            for(var k = -rangeZ; k <= rangeZ; k++){
                var nx = x + i;
                var ny = y;
                var nz = z + k;
                // FFM マルチファーム最小サイズ
                if(Math.abs(i) + Math.abs(k) <= 9 && (1 < Math.abs(i) || 1 < Math.abs(k))){
                    if(checkPlantable(nx, ny, nz)){
                        coordsAry.push(nx + ',' + ny + ',' + nz);
                    }
                }
            }
        }
        var coords = coordsAry.join(' ');
        if(STRING_MAX < coords){
            coords = coords.substring(0, STRING_MAX);
            coords = coords.substring(0, coords.lastIndexOf(' '));
        }
        world.setTileEntityStringData(position, 'coords', coords);
        fertilizer -= FERTILIZER_PROCESS;
    }
    // 40回に1回実行
    else if(progress == 40){
        // 伐採可能場所検索
        var coordsAry2 = [];
        for(var j = rangeY2; 0 <= j; j--){
            for(var i = -rangeX2; i <= rangeX2; i++){
                for(var k = -rangeZ2; k <= rangeZ2; k++){
                    var nx = x + i;
                    var ny = y + j;
                    var nz = z + k;
                    if(checkHarvestable(nx, ny, nz)){
                        coordsAry2.push(nx + ',' + ny + ',' + nz);
                    }
                }
            }
        }
        var coords2 = coordsAry2.join(' ');
        if(STRING_MAX < coords2){
            coords2 = coords2.substring(0, STRING_MAX);
            coords2 = coords2.substring(0, coords2.lastIndexOf(' '));
        }
        world.setTileEntityStringData(position, 'coords2', coords2);
        fertilizer -= FERTILIZER_PROCESS;
    }else{
        var planted = false;
        var coords = world.getTileEntityStringData(position, 'coords');
        if(coords){
            var coordsAry = coords.split(' ');
            
            // 苗木設置可能判定
            while(0 < coordsAry.length){
                var coord = coordsAry[0].split(',');
                if(coord.length != 3){
                    coordsAry = [];
                    break;
                }
                var nx = coord[0];
                var ny = coord[1];
                var nz = coord[2];
                if(checkPlantable(nx, ny, nz)){
                    break;
                }else{
                    coordsAry = coordsAry.splice(1);
                    break;
                }
            }
            
            if(0 < coordsAry.length){
                //  インベントリから苗木検索
                var inventory = world.getInventory(position);
                for(var i = 0; i < INVENTORY_MAX; i++){
                    var itemstack = inventory.getStack(i);
                    if(itemstack){
                        var itemName = itemstack.getItemName();
                        var damage = itemstack.getDamage();
                        var class = getOreDictClassByItem(itemName, damage);
                        if(class == 'treeSapling'){
                            // 苗木設置
                            var coord = coordsAry[0].split(',');
                            var nx = coord[0];
                            var ny = coord[1];
                            var nz = coord[2];
                            world.setBlockAndMetadata(nx, ny, nz, itemName, damage);
                            inventory.remove(itemName, 1, damage);
                            coordsAry = coordsAry.splice(1);
                            planted = true;
                            world.playSound('dig.grass', nx, ny, nz, 1.0, 1.0);
                            fertilizer -= FERTILIZER_PROCESS;
                            break;
                        }
                    }
                }
            }
            
            var coords = coordsAry.join(' ');
            world.setTileEntityStringData(position, 'coords', coords);
        }
        
        if(!planted){
            var coords2 = world.getTileEntityStringData(position, 'coords2');
            if(coords2){
                var coordsAry2 = coords2.split(' ');
                
                // 伐採可能判定
                while(0 < coordsAry2.length){
                    var coord2 = coordsAry2[0].split(',');
                    if(coord2.length != 3){
                        coordsAry2 = [];
                        break;
                    }
                    var nx = coord2[0];
                    var ny = coord2[1];
                    var nz = coord2[2];
                    if(checkHarvestable(nx, ny, nz)){
                        break;
                    }else{
                        coordsAry2 = coordsAry2.splice(1);
                        break;
                    }
                }
                if(0 < coordsAry2.length){
                    // 伐採
                    var coord2 = coordsAry2[0].split(',');
                    var nx = coord2[0];
                    var ny = coord2[1];
                    var nz = coord2[2];
                    world.harvestBlock(nx, ny, nz);
                    coordsAry2 = coordsAry2.splice(1);
                }
                
                var coords2 = coordsAry2.join(' ');
                world.setTileEntityStringData(position, 'coords2', coords2);
                fertilizer -= FERTILIZER_PROCESS;
            }
        }
    }
}
progress++;
if(40 < progress){
    progress = 0;
}
world.setTileEntityIntData(position, 'progress', progress);
world.setTileEntityIntData(position, 'fertilizer', fertilizer);

function checkPlantable(x, y, z){
    var blockName = world.getBlockName(x, y, z);
    if(blockName == 'minecraft:air'){
        var blockName = world.getBlockName(x, y - 1, z);
        if(blockName == 'minecraft:grass' || blockName == 'minecraft:dirt'){
            return true;
        }
    }
    
    return false;
}
function checkHarvestable(x, y, z){
    var blockName = world.getBlockName(x, y, z);
    var metadata = world.getBlockMetadata(x, y, z);
    var class = getOreDictClassByItem(blockName, metadata);
    if(class){
        if(class.substr(0, 3) == 'log' || class.substr(0, 4) == 'wood'){
            return true;
        }
    }
    return false;
}