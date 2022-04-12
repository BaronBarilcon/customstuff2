/**
 * 鉱石辞書名からアイテム名とメタデータを取得
 * @param string class 鉱石辞書名
 * @return object{string 'name', string 'meta'} アイテム名、メタデータ
 */
function getItemByOreDictClass(class){
    var items = mod.getOreDictClassItems(class);
    if(items.length === 0){
        return null;
    }
    
    for(var i = 0; i < items.length; i++){
        // IC2アイテムスキップ
        if(items[i].substr(0, items[i].indexOf(':')) != 'IC2'){
            var pos = items[i].lastIndexOf(':');
            var itemName = items[i].substr(0, pos);
            var metadata = items[i].substr(pos + 1);
            return {'name': itemName, 'meta': metadata};
        }
    }
}

/**
 * アイテム名とメタデータから鉱石辞書名を取得
 * @param string itemName アイテム名
 * @param string metadata メタデータ
 * @return string 鉱石辞書名
 */
var Classes = {};
function getOreDictClassByItem(itemName, metadata){
    if(itemName + ':' + metadata in Classes){
        return Classes[itemName + ':' + metadata];
    }
    var classes = mod.getOreDictClasses();
    for(var i = 0; i < classes.length; i++){
        if( mod.isItemInOreDictClass(itemName, metadata, classes[i]) ){
            Classes[itemName + ':' + metadata] = classes[i];
            return classes[i];
        }
    }
    Classes[itemName + ':' + metadata] = null;
    return null;
}

/**
 * インベントリにアイテム追加、入らない場合はドロップ
 * @param ScriptablePosition position 座標
 * @param string itemName アイテム名
 * @param string count 数
 * @param string metadata メタデータ
 * @return なし
 *
 */
function addItemIntoInventory(position, itemName, count, metadata){
    if(count <= 0){
        return;
    }
    var inventory = world.getInventory(position);
    var cnt = inventory.add(itemName, count, metadata);
    if(cnt == 0){
        world.spawnItem(position.x, position.y + 0.5, position.z, itemName, count, metadata);
    }
}

/**
 * 満腹度減少
 * @param number point 減少満腹度
 * @return なし
 */
function reduceHunger(point){
    var hunger = player.getHunger();
    var saturation = player.getSaturation();
    
    saturation -= point;
    
    if(saturation < 0){
        hunger += saturation;
        saturation = 0;
    }
    
    if(hunger < 0){
        hunger = 0;
    }
    
    player.setHunger(hunger);
    player.setSaturation(saturation);
}
