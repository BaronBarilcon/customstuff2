mod.loadScript('util.js');

var INVENTORY_MAX = 36;

var STRING_MAX = 256;
var STORAGE_MAX = 8;

// 非スニーク時
if(!player.isSneaking()){
    // ストレージ読み込み
    var storage = '';
    for(var i = 0; i < STORAGE_MAX; i++){
        var str = itemstack.getStringData('storage' + i);
        if(str){
            storage += str;
        }
    }
    var oresStr = storage.split(' ');
    var ores = {};
    for(var i = 0; i < oresStr.length; i++){
        var val = oresStr[i].split('*');
        if(val.length == 2){
            addOre(val[0], val[1]);
        }
    }

    var inventory = player.getInventory();
    var sum = 0;
    var kind = 0;
    for(var i = 0; i < INVENTORY_MAX; i++){
        var item = inventory.getStack(i);
        if(item){
            var itemName = item.getItemName();
            var damage = item.getDamage();
            var class = getOreDictClassByItem(itemName, damage);
            if(class){
                if(
                      //class.substr(0, 3) == 'ore'
                   (class.substr(0, 7) == 'crushed' && class.substr(0, 15) != 'crushedPurified')
                   || class.substr(0, 10) == 'dustImpure'
                   || class.substr(0, 10) == 'gemChipped'
                   || class.substr(0, 9) == 'gemFlawed'
                   || class.substr(0, 11) == 'gemFlawless'
                   || class.substr(0, 12) == 'gemExquisite'
                ){
                    // 鉱石収納
                    var stackSize = item.getStackSize();
                    addOre(itemName + ':' + damage, stackSize);
                    inventory.remove(itemName, stackSize, damage);
                    sum += stackSize;
                    kind++;
                }
            }
        }
    }
    if(sum == 0){
        var keys = Object.keys(ores);
        player.sendMessage('Storage: ');
        for(var i = 0; i < keys.length; i++){
            player.sendMessage('  ' + mod.getLocalizedItemName(keys[i]) + ' x' + ores[keys[i]]);
            sum += Number(ores[keys[i]]);
        }
        player.sendMessage('Summary: ' + keys.length + ' kind' + ((keys.length == 1)? '': 's') + ', ' + sum + ' item' + ((sum == 1)? '': 's') + '.');
    }else{
        player.sendMessage('Inserts ' + kind + ' slot' + ((kind == 1)? '': 's') + ', ' + sum + ' item' + ((sum == 1)? '': 's') + '.');
    }

    // ストレージ書き込み
    var keys = Object.keys(ores);
    var oreStrs = [];
    for(var i = 0; i < keys.length; i++){
        if(0 < ores[keys[i]]){
            oreStrs.push(keys[i] + '*' + ores[keys[i]]);
        }
    }
    var storage = oreStrs.join(' ');
    for(var i = 0; i < STORAGE_MAX; i++){
        var substorage = storage.substr(i * STRING_MAX, STRING_MAX);
        
        if(i == STORAGE_MAX - 1 && STORAGE_MAX * STRING_MAX < storage){
            substorage = substorage.substr(0, substorage.lastIndexOf(' '));
        }
        itemstack.setStringData('storage' + i, substorage);
    }
    
    itemstack.setDamage( Math.min(STORAGE_MAX, Math.ceil(storage.length / STRING_MAX)) );
}else{
    // ストレージ読み込み
    var storage = '';
    for(var i = 0; i < STORAGE_MAX; i++){
        var str = itemstack.getStringData('storage' + i);
        if(str){
            storage += str;
        }
    }
    var oresStr = storage.split(' ');
    var ores = {};
    for(var i = 0; i < oresStr.length; i++){
        var val = oresStr[i].split('*');
        if(val.length == 2){
            addOre(val[0], val[1]);
        }
    }

    // 鉱石取り出し
    var inventory = player.getInventory();
    var keys = Object.keys(ores);
    var sum = 0;
    for(var i = 0; i < keys.length; i++){
        var index = keys[i].lastIndexOf(':');
        var itemName = keys[i].substr(0, index);
        var damage = keys[i].substr(index + 1);
        if(val.length == 2){
            var count = inventory.add(itemName, ores[keys[i]], damage);
            ores[keys[i]] -= count;
            sum += count;
        }
    }
    if(0 < sum){
        player.sendMessage('Ejects ' + keys.length + ' kind' + ((keys.length == 1)? '': 's') + ', ' + sum + ' item' + ((sum == 1)? '': 's') + '.');
    }

    // ストレージ書き込み
    var keys = Object.keys(ores);
    var oreStrs = [];
    for(var i = 0; i < keys.length; i++){
        if(0 < ores[keys[i]]){
            oreStrs.push(keys[i] + '*' + ores[keys[i]]);
        }
    }
    var storage = oreStrs.join(' ');
    for(var i = 0; i < STORAGE_MAX; i++){
        var substorage = storage.substr(i * STRING_MAX, STRING_MAX);
        
        if(i == STORAGE_MAX - 1 && STORAGE_MAX * STRING_MAX < storage){
            substorage = substorage.substr(0, substorage.lastIndexOf(' '));
        }
        itemstack.setStringData('storage' + i, substorage);
    }
    
    itemstack.setDamage( Math.min(STORAGE_MAX, Math.ceil(storage.length / STRING_MAX)) );
}

function addOre(key, num){
    if(key in ores){
        ores[key] = Number(ores[key]) + Number(num);
    }else{
        ores[key] = num;
    }
}
