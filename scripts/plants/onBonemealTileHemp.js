var x = position.x;
var y = position.y;
var z = position.z;

var metadata = world.getBlockMetadata(position);
var used = false;
// 1’i–Ú¬nÏ‚İ
if(metadata == 7){
    var name = world.getBlockName(x, y + 1, z);
    if(name == 'minecraft:air'){
        // 2’i–Ú¬’·
        world.setBlockAndMetadata(x, y + 1, z, 'Tutorial:tileHemp', 8);
        used = true;
    }
}
// 1’i–Ú–¢¬n
else if(0 <= metadata && metadata < 7){
    // ¬’·
    world.setBlockMetadata(position, Math.min(metadata + 2, 7));
    used = true;
}

if(used){
    // œ•²1ŒÂÁ”ï
    if(!player.isInCreative()){
        var count = player.removeFromSlot(player.getCurrentSlot(), 1);
    }
}