var METADATA_MAX = 4;

var x = position.x;
var y = position.y;
var z = position.z;

var metadata = world.getBlockMetadata(position);
// 1’i–Ú¬nÏ‚İ
if(metadata == METADATA_MAX){
    var name = world.getBlockName(x, y + 1, z);
    if(name == 'minecraft:air'){
        // 2’i–Ú¬’·
        world.setBlockAndMetadata(x, y + 1, z, 'Tutorial:tileLin', METADATA_MAX + 1);
    }
}
// 1’i–Ú–¢¬n
else if(0 <= metadata && metadata < METADATA_MAX){
    // ¬’·
    world.setBlockMetadata(position, Math.min(metadata + 2, METADATA_MAX));
}

// œ•²1ŒÂÁ”ï
if(!player.isInCreative()){
    player.removeFromSlot(player.getCurrentSlot(), 1);
}