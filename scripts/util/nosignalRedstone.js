// 以下の変数が必須
// * mod
// * world
// * position

// レッドストーン、レッドストーンリピータ、レッドストーンコンパレータにしか信号が伝わらない。

// 隣接ブロックへの相対座標配列
var positions = [
    [0,  0, -1]
  , [1,  0,  0]
  , [0,  0,  1]
  , [-1, 0,  0]
  , [0,  1,  0]
  , [0,  -1, 0]
];

// 隣接ブロックごとに以下の処理を実行
for(var l = 0; l < positions.length; l++){
    var nx = x + positions[l][0];
    var ny = y + positions[l][1];
    var nz = z + positions[l][2];
    
    var blockName = world.getBlockName(nx, ny, nz);
    var blockMetadata = world.getBlockMetadata(nx, ny, nz);
    
    // 6方向隣接のレッドストーンに信号OFF
    if(blockName == 'minecraft:redstone_wire'){
        world.setBlockMetadata(nx, ny, nz, 0);
    }
    
    if(positions[l][1] == 0){
        // XZ隣接のレッドストーンリピータに信号ON
        if(blockName == 'minecraft:powered_repeater'){
            if(blockMetadata % 4 == l){
                world.setBlockAndMetadata(nx, ny, nz, 'minecraft:unpowered_repeater', blockMetadata);
            }
        }
        // XZ隣接のレッドストーンコンパレータに信号ON
        if(8 <= blockName == 'minecraft:unpowered_comparator' && blockMetadata){
            if(blockMetadata % 4 == l){
                world.setBlockMetadata(nx, ny, nz, blockMetadata - 8);
            }
        }
    }
}