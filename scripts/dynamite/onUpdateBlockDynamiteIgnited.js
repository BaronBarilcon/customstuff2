
var blockName = world.getBlockName(position);
var blockMetadata = world.getBlockMetadata(position);

if(blockName == 'Tutorial:blockDynamiteIgnited'){
    switch(blockMetadata){
    case 0:
        explodeCube(1);
        break;
        
    case 1:
        explodeCube(2);
        
        world.createExplosion(position, 0, false);
        break;
        
    case 2:
        explodeCube(3);
        
        world.createExplosion(position, 0, false);
        world.createExplosion(position, 0, false);
        break;
        
    }
}
if(blockName == 'Tutorial:blockMiningChargeIgnited'){
    switch(blockMetadata){
    case 0:
        explodeMiningCharge(1);
        break;
        
    case 1:
        explodeMiningCharge(2);
        
        world.createExplosion(position, 0, false);
        break;
        
    case 2:
        explodeMiningCharge(3);
        
        world.createExplosion(position, 0, false);
        world.createExplosion(position, 0, false);
        break;
    }
}

function explodeCube(radius){
    
    world.setBlockAndMetadata(position, 'minecraft:air', 0);
    
    for(var i = -radius; i <= radius; i++){
        for(var j = -radius; j <= radius; j++){
            for(var k = -radius; k <= radius; k++){
                var nx = position.x + i;
                var ny = position.y + j;
                var nz = position.z + k;
                
                var blockName = world.getBlockName(nx, ny, nz);
                var blockMetaData = world.getBlockMetadata(nx, ny, nz);
                
                if(!isBreakable(blockName, blockMetaData)){
                    continue;
                }
                
                world.harvestBlock(nx, ny, nz);
            }
        }
    }
    
    world.createExplosion(position, 0, false);
}


function explodeMiningCharge(radius){
    
    var horizontalAngle = world.getTileEntityFloatData(position, 'horizontalAngle');
    var verticalAngle = world.getTileEntityFloatData(position, 'verticalAngle');
    
    // 爆発範囲ずらす方向を確定
    var dx = 0;
    var dy = 0;
    var dz = 0;
    // 1方向だけ空気ブロックなら確定
    var airCount = 0;
    for(var i = -1; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            for(var k = -1; k <= 1; k++){
                if(Math.abs(i) + Math.abs(j) + Math.abs(k) == 1){
                    if(world.getBlockName(position.x + i, position.y + j, position.z + k) == 'minecraft:air'){
                        dx = -i;
                        dy = -j;
                        dz = -k;
                        airCount++;
                    }
                }
            }
        }
    }
    // プレイヤーの向いている方向から確定
    if(airCount != 1){
        var dx = 0;
        var dy = 0;
        var dz = 0;
        if(verticalAngle < -60){
            dy = 1;
        }else if(60 <= verticalAngle){
            dy = -1;
        }else if(-45 <= horizontalAngle && horizontalAngle < 45){
            dz = 1;
        }else if(45 <= horizontalAngle && horizontalAngle < 135){
            dx = -1;
        }else if(horizontalAngle < -135 || 135 <= horizontalAngle){
            dz = -1;
        }else if(-135 <= horizontalAngle && horizontalAngle < -45){
            dx = 1;
        }
    }
    
    world.setBlockAndMetadata(position, 'minecraft:air', 0);
    
    for(var i = -radius; i <= radius; i++){
        for(var j = -radius; j <= radius; j++){
            for(var k = -radius; k <= radius; k++){
                var nx = position.x + i + dx * radius;
                var ny = position.y + j + dy * radius;
                var nz = position.z + k + dz * radius;
                
                if(nx == position.x && ny == position.y && nz == position.z){
                    nx = position.x + dx * (radius * 2 + 1);
                    ny = position.y + dy * (radius * 2 + 1);
                    nz = position.z + dz * (radius * 2 + 1);
                }
                
                var blockName = world.getBlockName(nx, ny, nz);
                var blockMetaData = world.getBlockMetadata(nx, ny, nz);
                
                if(!isBreakable(blockName, blockMetaData)){
                    continue;
                }
                
                world.harvestBlock(nx, ny, nz);
            }
        }
    }
    
    world.createExplosion(position, 0, false);
}

function isBreakable(name, metadata){
    
    var blacklist1 = [
        'minecraft:air'
      , 'minecraft:bedrock'
      , 'minecraft:flowig_water'
      , 'minecraft:water'
      , 'minecraft:flowing_lava'
      , 'minecraft:lava'
      , 'minecraft:end_portal'
      , 'minecraft:end_portal_frame'
      , 'minecraft:command_block'
      , 'minecraft:obsidian'
      , 'minecraft:enchanting_table'
      , 'minecraft:ender_chest'
      , 'minecraft:beacon'
      , 'minecraft:mob_spawner'
    // gregtech
      , 'gregtech:gt.blockgranites'
      , 'gregtech:gt.blockstones'
    // twilight forest
      , 'TwilightForest:tile.TFDeadrock'
    ]
    
    for(var i = 0; i < blacklist1.length; i++){
        if(blacklist1[i] == name){
            return false;
        }
    }
    
    return true;
}