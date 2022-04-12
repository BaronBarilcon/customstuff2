var maxDamage = 8192;
var range = 20;
var blockName = world.getBlockName(position);

var damage = 32;

if( itemstack.hasEnchantment(34) ){
    var level = 1;
    if( itemstack.hasEnchantment(34, 2) ){
        level = 2;
    }
    if( itemstack.hasEnchantment(34, 3) ){
        level = 3;
    }
    if( itemstack.hasEnchantment(34, 4) ){
        level = 4;
    }
    
    if( Math.floor( Math.random() * (level + 1) ) != 0){
        damage = 0;
    }
}

if(player.isSneaking() && blockName == "TwilightForest:tile.TFMoonworm"){
    var x = Math.floor(player.getPosX());
    var y = Math.floor(player.getPosY());
    var z = Math.floor(player.getPosZ());
    for(var i = -range; i < range; i++){
        for(var j = -range; j < range; j++){
            for(var k = -range; k < range; k++){
                var nx = x + i;
                var ny = y + j;
                var nz = z + k;
                
                var blockName = world.getBlockName(nx, ny, nz);
                
                if(blockName == "TwilightForest:tile.TFMoonworm"){
                    var metadata = world.getBlockMetadata(nx, ny, nz);
                    world.harvestBlock(nx, ny, nz);
                    if(metadata != 6){
                        if(itemstack.getDamage() != maxDamage || 0 < player.getItemCount("minecraft:torch", 0)){
                            world.setBlock(nx, ny, nz, "minecraft:torch");
                            world.setBlockMetadata(nx, ny, nz, metadata);
                            if(0 < player.getItemCount("minecraft:torch", 0)){
                                player.remove("minecraft:torch", 1, 0);
                            }else{
                                itemstack.damageItem(damage);
                            }
                        }
                    }
                }
                if(itemstack.getDamage() == maxDamage && player.getItemCount("minecraft:torch", 0) == 0){
                    break;
                }
            }
            if(itemstack.getDamage() == maxDamage && player.getItemCount("minecraft:torch", 0) == 0){
                break;
            }
        }
        if(itemstack.getDamage() == maxDamage && player.getItemCount("minecraft:torch", 0) == 0){
            break;
        }
    }
}else{
    if(itemstack.getDamage() != maxDamage || 0 < player.getItemCount("minecraft:torch", 0)){
        var ret = player.placeBlock(position, side, "minecraft:torch", side, false);
        if(ret){
            if(0 < player.getItemCount("minecraft:torch", 0)){
                player.remove("minecraft:torch", 1, 0);
            }else{
                itemstack.damageItem(damage);
            }
        }
    }
}