var x = player.getPosX();
var y = player.getPosY();
var z = player.getPosZ();

var minDistance = 999999999999;
// í èÌÉNÉäÉbÉN
var minPos = {
    "x": itemstack.getFloatData("x"), 
    "y": itemstack.getFloatData("y"), 
    "z": itemstack.getFloatData("z")
};

if(minPos.x == -1 && minPos.y == -1 && minPos.z == -1){
    minDistance = 99999999999;
}else if(world.getBlockName(minPos.x, minPos.y, minPos.z) != "minecraft:chest"){
    mod.loadScript("sensorChest/onUseSensorChest.js");
}else{
    minDistance = Math.pow(minPos.x + 0.5 - x, 2) + Math.pow(minPos.z + 0.5 - z, 2);
    var yy = (y - minPos.y);
    if(yy < -30) yy = -30;
    if(30 < yy) yy = 30;
    if(yy < 0){
        yy /= 60;
    }else{
        yy /= 30;
    }
    world.playSound("random.levelup", (x + minPos.x)/2, y, (z + minPos.z)/2, 1.0, 1.0 + yy);
}

if(minDistance < 99999999999){
    player.sendMessage("min distance: " + Math.sqrt(minDistance).toFixed(2) + ".");
}