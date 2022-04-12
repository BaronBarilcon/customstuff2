var UNIT = 0.25;

if( player.isSneaking() ){
    var inventory = world.getInventory(position);
    if(inventory != null){
        var energy = itemstack.getIntData("energy");
        if(energy == -1) energy = 0;
        
        var addenergy = 0;
        //Cobblestone
        var count = inventory.getItemCount("minecraft:cobblestone", 0);
        inventory.remove("minecraft:cobblestone", count, 0);
        addenergy += count;
        
        //Stone x2
        var count = inventory.getItemCount("minecraft:stone", 0);
        inventory.remove("minecraft:stone", count, 0);
        addenergy += count * 1.2;
        
        for(var i = 0; i < 8; i++){
            var count = inventory.getItemCount("Tutorial:compressedCobblestone", i);
            inventory.remove("Tutorial:compressedCobblestone", count, i);
            addenergy += Math.pow(10, i+1) * count;
        }
        
        addenergy = Math.floor(addenergy * UNIT);
        if(addenergy != 0){
            player.sendMessage("None Block x" + addenergy + " added.");
            player.sendMessage(" " + energy + " -> " + (addenergy + energy) );
            energy += addenergy;
            itemstack.setIntData("energy", energy);
        }
    }
}else{
    var energy = itemstack.getIntData("energy");
    player.sendMessage("current energy: "+ energy);
}