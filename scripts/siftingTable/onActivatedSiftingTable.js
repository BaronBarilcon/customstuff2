mod.loadScript('util.js');

var SLOT_COUNT = 20;

var recipes1 = [
    'CertusQuartz'
  , 'Monazite'
  , 'NetherQuartz'
  , 'Quartzite'
  , 'Lazurite'
  , 'Sodalite'
  , 'Lapis'
  , 'Apatite'
  , 'Phosphorus'
  , 'Coal'
  , 'Lignite'
  
  , 'Firestone'
  , 'InfusedOrder'
  , 'InfusedWater'
  , 'InfusedFire'
  , 'InfusedEarth'
  , 'InfusedAir'
  , 'InfusedEntropy'
];
//=========
//= :crushedPurifiedXXX x1
//= -> :gemXXX x0.8
//= -> :dustXXX x0.5
//=========
// 6516 certus quartz
// 6520 monazite
// 6522 nether quartz
// 6523 quartzite
// 6524 lazurite
// 6525 sodalite
// 6526 lapis
// 6530 apatite
// 6534 phosphorus
// 6535 coal
// 6538 lignite coal

var recipes2 = [
    'Diamond'
  , 'Emerald'
  , 'Ruby'
  , 'Sapphire'
  , 'GreenSapphire'
  , 'Olivine'
  , 'Topaz'
  , 'Tanzanite'
  , 'Amethyst'
  , 'Opal'
  , 'FoolsRuby'
  , 'BlueTopaz'
  , 'GarnetRed'
  , 'GarnetYellow'

  , 'Amber'
];
//=========
//= :crushedPurifiedXXX x1
//= -> :gemExquisiteXXX x0.03
//= -> :gemFlawlessXXX x0.12
//= -> :gemXXX x0.45
//= -> :gemFlawedXXX x0.14
//= -> :gemChippedXXX x0.28
//= -> :dustXXX x0.35
//=========
// 6500 diamond
// 6501 emerald
// 6502 ruby
// 6503 sapphire
// 6504 green sapphire
// 6505 olivine
// 6507 topaz
// 6508 tanzanite
// 6509 amethyst
// 6510 opal
// 6512 ruby
// 6513 blue topaz
// 6527 red garnet
// 6528 yellow garnet

// 使用
if(player.isSneaking()){
    var state = world.getBlockMetadata(position);
    
    if(state == 0){
        //player.sendMessage('sneak clicked!');

        var inventory = player.getInventory();
        var itemstack = inventory.getStack(player.getCurrentSlot());
        if(itemstack == null){
            
            var count = inventory.getItemCount('minecraft:gravel', 0);
            if(1 <= count){
                world.setBlockMetadata(position, 1);
                world.setTileEntityStringData(position, 'input', 'minecraft:gravel');
                world.setTileEntityIntData(position, 'kind', 0);
                world.setTileEntityIntData(position, 'progress', 0);
                inventory.remove('minecraft:gravel', 1, 0);
            }
        }else{
            var itemName = itemstack.getItemName();
            var damage = itemstack.getDamage();
            
            var class = getOreDictClassByItem(itemName, damage);
            //player.sendMessage('you have ' + class);
            
            for(var i = 0; i < recipes1.length; i++){
                if(class == 'crushedPurified' + recipes1[i]){
                    world.setBlockMetadata(position, 1);
                    world.setTileEntityStringData(position, 'input', recipes1[i]);
                    world.setTileEntityIntData(position, 'kind', 1);
                    world.setTileEntityIntData(position, 'progress', 0);
                    //player.sendMessage('set ' + recipes1[i]);
                    itemstack.setStackSize(itemstack.getStackSize() - 1);
                }
            }
            
            for(var i = 0; i < recipes2.length; i++){
                if(class == 'crushedPurified' + recipes2[i]){
                    world.setBlockMetadata(position, 1);
                    world.setTileEntityStringData(position, 'input', recipes2[i]);
                    world.setTileEntityIntData(position, 'kind', 2);
                    world.setTileEntityIntData(position, 'progress', 0);
                    //player.sendMessage('set ' + recipes2[i]);
                    itemstack.setStackSize(itemstack.getStackSize() - 1);
                }
            }
        }
        
    }else{
        var kind = world.getTileEntityIntData(position, 'kind');
        if(kind == 0){
            world.playSound('dig.gravel', position, 1.0, 1.0);
        }else{
            world.playSound('dig.sand', position, 1.0, 1.0);
        }
        var progress = world.getTileEntityIntData(position, 'progress');
        
        if(20 <= progress){
            var input = world.getTileEntityStringData(position, 'input');
            world.setBlockMetadata(position, 0);
            
            if(kind == 0){
                addItemIntoInventory(position, 'minecraft:flint', 1, 0);
            }
            
            if(kind == 1){
                if(Math.random() < 0.8){
                    var item = getItemByOreDictClass('gem' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.5){
                    var item = getItemByOreDictClass('dust' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
            }
            
            if(kind == 2){
                if(Math.random() < 0.03){
                    var item = getItemByOreDictClass('gemExquisite' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.12){
                    var item = getItemByOreDictClass('gemFlawless' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.45){
                    var item = getItemByOreDictClass('gem' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.14){
                    var item = getItemByOreDictClass('gemFlawed' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.28){
                    var item = getItemByOreDictClass('gemChipped' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
                if(Math.random() < 0.35){
                    var item = getItemByOreDictClass('dust' + input);
                    addItemIntoInventory(position, item['name'], 1, item['meta']);
                }
            }
            if(!player.isInCreative()){
                reduceHunger(1);
            }
            //player.sendMessage(input + ' recipe');
        }
        progress++;
        world.setTileEntityIntData(position, 'progress', progress);
        player.swingItem();
    }
}
// インベントリオープン
else{
    player.openGui('siftingTable', position);
    result = true; 
}