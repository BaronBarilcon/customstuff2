player.sendMessage('test.');
try{
    player.sendMessage('test2.');
    var inventory = world.getInventory(position);

    for(var i = 0; i < 27; i++){
        var stack = inventory.getStack(i);
        if(stack){
            var nbt = stack.getNbt();
        }
    }
}catch(e){
    player.sendMessage('error.');
    player.sendMessage(e.message);
}