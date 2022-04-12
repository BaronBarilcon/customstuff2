mod.loadScript('util.js');

var x = position.x;
var y = position.y;
var z = position.z;
var range = 13;
var INVENTORY_MAX = 27;
var FERTILIZER = 2000;
var FERTILIZER_MAX = FERTILIZER * 16;
var FERTILIZER_PROCESS = 40;

var fertilizer = world.getTileEntityIntData(position, 'fertilizer');

// �G�l���M�[��[
if(fertilizer < FERTILIZER){
    var coords = [{'x':  0, 'z': -1}, {'x':  0, 'z':  1}, {'x': -1, 'z':  0}, {'x':  1, 'z':  0}];
    for(i = 0; i < coords.length; i++){
        var nx = x + coords[i]['x'];
        var ny = y;
        var nz = z + coords[i]['z'];
        var blockName = world.getBlockName(nx, ny, nz);
        if(blockName == 'Tutorial:farmblockPlant'){
            var fertilizerSource = world.getTileEntityIntData(nx, ny, nz, 'fertilizer');
            if(FERTILIZER <= fertilizerSource){
                // Farmblock(Plant) -> Farmblock(Gather) �փG�l���M�[�ړ�
                var consumeEnergy = Math.floor(fertilizerSource / 1);
                fertilizerSource -= consumeEnergy;
                fertilizer       += consumeEnergy;
                world.setTileEntityIntData(position, 'fertilizer', fertilizer);
                world.setTileEntityIntData(nx, ny, nz, 'fertilizer', fertilizerSource);
            }
        }
    }
    if(0 < fertilizer){
        world.setBlockMetadata(position, 1);
    }else{
        world.setBlockMetadata(position, 0);
    }
}

// ���� �i�G�l���M�[�ɂ͗]�T�������Ă����j
if(FERTILIZER <= fertilizer){
    var inventory = world.getInventory(position);
    var entities = world.enumEntities(position, range, 'item');
    for(var i = 0, j = 0; i < INVENTORY_MAX; i++){
        // �C���x���g���ɋ󂫘g�����݂���
        if(inventory.getStackSize(i) == -1){
            for(; j < entities.length; j++){
                if(checkGatherable(entities[j])){
                    var entityItem = entities[j].asItem();
                    var itemName = entityItem.getItemName();
                    var itemDamageValue = entityItem.getItemDamageValue();
                    var itemStackSize = entityItem.getItemStackSize();
                    inventory.add(itemName, itemStackSize, itemDamageValue);
                    entities[j].setDead();
                    fertilizer -= FERTILIZER_PROCESS * itemStackSize;
                    j++;
                    break;
                }
            }
        }
    }
    
    world.setTileEntityIntData(position, 'fertilizer', fertilizer);
}

function checkGatherable(entity){
    if(entity && entity.isItem()){
        var entityItem = entity.asItem();
        
        var itemName = entityItem.getItemName();
        var itemDamageValue = entityItem.getItemDamageValue();
        // ���
        if(itemName == 'minecraft:apple'){
            return true;
        }
        
        var class = getOreDictClassByItem(itemName, itemDamageValue);
        if(class){
            // ����
            if(class.substr(0, 3) == 'log'){
                return true;
            }
            // �c��
            if(class == 'treeSapling'){
                return true;
            }
        }
    }
    return false;
}