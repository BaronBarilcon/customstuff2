
var detectorMetadata = world.getBlockMetadata(position);
var x = position.x;
var y = position.y;
var z = position.z;
var enabled = false;

// 雨検知器で天候が雨、または雷雨検知器で天候が雷雨の場合
if((detectorMetadata == 0 || detectorMetadata == 8) && world.isRaining() || 
   (detectorMetadata == 1 || detectorMetadata == 9) && world.isThundering()){
    enabled = true;
    // 真上に空気以外のブロックがある場合は動作しない
    for(var j = y + 1; j < 256; j++){
        var blockName = world.getBlockName(x, j, z);
        if(blockName != 'minecraft:air'){
            enabled = false;
            break;
        }
    }
}

if(enabled){
    world.setBlockMetadata(position, (detectorMetadata) % 8 + 8);
    // レッドストーン信号を出力
    mod.loadScript('util/signalRedstone.js');
}else{
    world.setBlockMetadata(position, (detectorMetadata) % 8);
}
