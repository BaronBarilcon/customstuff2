var x = Math.floor(player.getPosX());
var y = Math.floor(player.getPosY());
var z = Math.floor(player.getPosZ());

var rangeHorizon = null;
var rangeVertical = 30;
var ranges = [10, 30, 75];

var minDistance = 999999999999;
var minPos = {"x":x, "y":y, "z":z};
var chestCount = 0;

var searchBlock = "minecraft:chest";

if(player.isSneaking()){
    itemstack.setFloatData("x", -1);
    itemstack.setFloatData("y", -1);
    itemstack.setFloatData("z", -1);
    for(var l = 0; l < ranges.length; l++){
        rangeHorizon = ranges[l];
        
        for(var i = -rangeHorizon; i < rangeHorizon; i++){
            for(var k = -rangeHorizon; k < rangeHorizon; k++){
                for(var j = -rangeVertical; j < rangeVertical; j++){
                    var nx = x + i;
                    var ny = y + j;
                    var nz = z + k;
                    
                    var blockName = world.getBlockName(nx, ny, nz);
                    if(blockName == searchBlock){
                        var distance = i*i + k*k;
                        
                        if(distance < minDistance){
                            minDistance = distance;
                            itemstack.setFloatData("x", nx);
                            itemstack.setFloatData("y", ny);
                            itemstack.setFloatData("z", nz);
                        }
                        chestCount++;
                        world.playSound("random.levelup", x + i/2, y + j/2, z + k/2, 1.0, 1.0 + j / rangeVertical);
                    }
                }
            }
        }
        if(minDistance < 99999999999){
            break;
        }
    }
    world.playSound("mob.endermen.portal", x, y, z, 0.7, 1.5);
    player.sendMessage(chestCount + " " + mod.getLocalizedItemName(searchBlock) + "s.");
}