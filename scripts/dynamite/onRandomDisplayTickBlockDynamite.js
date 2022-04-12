for(var i = 0; i < 5; i++){
    world.spawnParticle('largesmoke'
        , position.x + 0.25 + Math.random() * 0.5
        , position.y + 0.50 + Math.random() * 0.5
        , position.z + 0.25 + Math.random() * 0.5
        , 0, 0, 0);
}
