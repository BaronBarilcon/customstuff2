//==================//
//= Special Blocks =//
//==================//
// 自動丸石圧縮機の追加
mod.addBlock('special/automaticCobblestoneCondenser.js', 'normal');
mod.addTileEntity('automaticCobblestoneCondenser.js', 'chestBlock');
mod.addGui('automaticCobblestoneCondenser.js', 'chest');
mod.addRecipe('Tutorial:automaticCobblestoneCondenser', 3, 3,
    'Tutorial:compressedCobblestone:1', 'Tutorial:compressedCobblestone:1', 'Tutorial:compressedCobblestone:1'
  , 'Tutorial:compressedCobblestone:1', ':dustRedstone',                    'Tutorial:compressedCobblestone:1'
  , 'Tutorial:compressedCobblestone:1', 'Tutorial:compressedCobblestone:1', 'Tutorial:compressedCobblestone:1'
);

// 自動丸石圧縮機 Mk-2の追加
mod.addBlock('special/automaticCobblestoneCondenser2.js', 'normal');
mod.addTileEntity('automaticCobblestoneCondenser2.js', 'chestBlock');
mod.addGui('automaticCobblestoneCondenser2.js', 'chest');
mod.addRecipe('Tutorial:automaticCobblestoneCondenser2', 3, 3,
    'Tutorial:automaticCobblestoneCondenser', 'Tutorial:automaticCobblestoneCondenser', 'Tutorial:automaticCobblestoneCondenser'
  , 'Tutorial:automaticCobblestoneCondenser', ':blockRedstone',                         'Tutorial:automaticCobblestoneCondenser'
  , 'Tutorial:automaticCobblestoneCondenser', 'Tutorial:automaticCobblestoneCondenser', 'Tutorial:automaticCobblestoneCondenser'
);

// ノンブロックの追加
mod.addBlock('special/blockNone.js', 'normal');

// 空のスポナーの追加
mod.addBlock('special/emptyMonsterSpawner.js', 'normal');
mod.addRecipe('Tutorial:emptyMonsterSpawner', 3, 3,
    'gregtech:gt.blockmachines:4420', 'gregtech:gt.blockmachines:4412', 'gregtech:gt.blockmachines:4420'
  , 'gregtech:gt.blockmachines:4412', 'minecraft:nether_star',          'gregtech:gt.blockmachines:4412'
  , 'gregtech:gt.blockmachines:4420', 'gregtech:gt.blockmachines:4412', 'gregtech:gt.blockmachines:4420'
);
var MobIdList = [
    3, 4, 5, 6, 7, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
  , 36, 37, 38, 39, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 65
  , 66, 67, 70, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 120
];
for(var i = 0; i < MobIdList.length; i++){
    mod.addRecipe('minecraft:mob_spawner:' + MobIdList[i], 3, 3,
        'minecraft:spawn_egg:' + MobIdList[i], 'minecraft:spawn_egg:' + MobIdList[i], 'minecraft:spawn_egg:' + MobIdList[i]
      , 'minecraft:spawn_egg:' + MobIdList[i], 'Tutorial:emptyMonsterSpawner', 'minecraft:spawn_egg:' + MobIdList[i]
      , 'minecraft:spawn_egg:' + MobIdList[i], 'minecraft:spawn_egg:' + MobIdList[i], 'minecraft:spawn_egg:' + MobIdList[i]
    );
}

// ふるい台の追加
mod.addBlock('special/siftingTable.js', 'slab');
mod.addTileEntity('siftingTable.js', 'chestBlock');
mod.addGui('siftingTable.js', 'chest');
mod.addRecipe('Tutorial:siftingTable', 3, 3,
    ':stickLongWroughtIron', ':foilZinc',             ':stickLongWroughtIron'
  , ':stickLongWroughtIron', ':foilZinc',             ':stickLongWroughtIron'
  , ':stickLongSteel',       ':stickLongWroughtIron', ':stickLongSteel'
);

// ファームブロック（植樹・伐採）の追加
mod.addBlock('special/farmblockPlant.js', 'normal');
mod.addTileEntity('farmblockPlant.js', 'chestBlock');
mod.addGui('farmblockPlant.js', 'chest');
mod.addRecipe('Tutorial:farmblockPlant', 3, 3,
    'gregtech:gt.metaitem.01:32651', ':craftingDiamondBlade',         'gregtech:gt.metaitem.01:32651'
  , 'gregtech:gt.metaitem.01:32641', 'gregtech:gt.blockcasings:2',    'gregtech:gt.metaitem.01:32691'
  , ':frameGtWoodSealed',            'gregtech:gt.metaitem.01:32631', ':frameGtWoodSealed'
);
// ファームブロック（回収）の追加
mod.addBlock('special/farmblockGather.js', 'normal');
mod.addTileEntity('farmblockGather.js', 'chestBlock');
mod.addGui('farmblockGather.js', 'chest');
mod.addRecipe('Tutorial:farmblockGather', 3, 3,
    'gregtech:gt.metaitem.01:32652', ':craftingFilter',                'gregtech:gt.metaitem.01:32652'
  , 'gregtech:gt.metaitem.01:32642', 'gregtech:gt.blockmachines:9232', 'gregtech:gt.metaitem.01:32692'
  , ':frameGtWoodSealed',            'gregtech:gt.metaitem.01:32632',  ':frameGtWoodSealed'
);

// ダイナマイトの追加
mod.addTileEntity('dynamiteIgnited.js', 'normal');
mod.addBlock('special/blockDynamite.js', 'normal');
mod.addBlock('special/blockDynamiteIgnited.js', 'normal');
mod.addRecipe('Tutorial:blockDynamite:0', 1, 3,
    ':dustFlint'
  , 'IC2:blockITNT'
  , ':dustFlint'
);
mod.addRecipe('Tutorial:blockDynamite:1', 3, 3,
    'Tutorial:blockDynamite:0', ':dustFlint', 'Tutorial:blockDynamite:0'
  , 'Tutorial:blockDynamite:0', ':dustFlint', 'Tutorial:blockDynamite:0'
  , 'Tutorial:blockDynamite:0', ':dustFlint', 'Tutorial:blockDynamite:0'
);
mod.addRecipe('Tutorial:blockDynamite:2', 3, 3,
    ':dustFlint',               'Tutorial:blockDynamite:1', ':dustFlint'
  , 'Tutorial:blockDynamite:1', ':dustFlint',               'Tutorial:blockDynamite:1'
  , ':dustFlint',               'Tutorial:blockDynamite:1', ':dustFlint'
);
// マイニングチャージの追加
mod.addBlock('special/blockMiningCharge.js', 'normal');
mod.addBlock('special/blockMiningChargeIgnited.js', 'normal');
mod.addRecipe('Tutorial:blockMiningCharge:0', 1, 2,
    'IC2:itemDynamiteSticky'
  , 'Tutorial:blockDynamite:0'
);
mod.addRecipe('Tutorial:blockMiningCharge:1', 3, 3,
    'minecraft:air',          'IC2:itemDynamiteSticky',   'minecraft:air'
  , 'IC2:itemDynamiteSticky', 'Tutorial:blockDynamite:1', 'IC2:itemDynamiteSticky'
  , 'minecraft:air',          'IC2:itemDynamiteSticky',   'minecraft:air'
);
mod.addRecipe('Tutorial:blockMiningCharge:2', 3, 3,
    'IC2:itemDynamiteSticky', 'IC2:itemDynamiteSticky',   'IC2:itemDynamiteSticky'
  , 'IC2:itemDynamiteSticky', 'Tutorial:blockDynamite:2', 'IC2:itemDynamiteSticky'
  , 'IC2:itemDynamiteSticky', 'IC2:itemDynamiteSticky',   'IC2:itemDynamiteSticky'
);

// リネン（ブロック）の追加
mod.addBlock('special/tileLin.js', 'crossTexture');

// レバーブロック[WIP]の追加
mod.addBlock('special/leverBlock.js', 'normal');

// 雨／雷雨検知器の追加
mod.addBlock('special/rainDetector.js', 'normal');
mod.addRecipe('Tutorial:rainDetector:0', 3, 3,
    'minecraft:stone',    'minecraft:light_weighted_pressure_plate', 'minecraft:stone'
  , 'minecraft:repeater', 'minecraft:bucket',                        'minecraft:repeater'
  , 'minecraft:stone',    'minecraft:comparator',                    'minecraft:stone'
);
mod.addRecipe('Tutorial:rainDetector:1', 3, 3,
    'minecraft:stone',    'minecraft:heavy_weighted_pressure_plate', 'minecraft:stone'
  , 'minecraft:repeater', 'minecraft:bucket',                        'minecraft:repeater'
  , 'minecraft:stone',    'minecraft:comparator',                    'minecraft:stone'
);

//=================//
//= Special Items =//
//=================//
// 採掘速度上昇ポーションの追加
mod.addItem('potionHaste.js', 'food');

// ノンブロック供給装置の追加
mod.addItem('special/supplierBlockNone.js', 'normal');
mod.addRecipe('Tutorial:supplierBlockNone', 3, 3, 
    ':blockWool',            ':dustRedstone',                          ':blockWool'
  , 'minecraft:ender_chest', 'Tutorial:automaticCobblestoneCondenser', 'minecraft:ender_chest'
  , ':blockWool',            ':dustRedstone',                          ':blockWool'
);

// 空のスポーンエッグの追加
mod.addItem('special/emptySpawnEgg.js', 'normal');
mod.addRecipe('Tutorial:emptySpawnEgg', 3, 3, 
    'minecraft:web',       'minecraft:ender_eye', 'minecraft:web'
  , 'minecraft:ender_eye', 'minecraft:egg',       'minecraft:ender_eye'
  , 'minecraft:web',       'minecraft:ender_eye', 'minecraft:web'
);

// 苔/ヒビ変換器の追加
mod.addItem('special/transformerMosscrack.js', 'normal');
mod.addRecipe('Tutorial:transformerMosscrack', 3, 3, 
    'TConstruct:materials:6',        'gregtech:gt.blockmachines:503', 'TConstruct:materials:6'
  , 'gregtech:gt.blockmachines:593', 'IC2:itemScannerAdv',            'gregtech:gt.blockmachines:673'
  , 'TConstruct:materials:6',        'gregtech:gt.blockmachines:613', 'TConstruct:materials:6'
);

// 四次元ポンプの追加
mod.addItem('special/tesseractPump.js', 'normal');
mod.addRecipe('Tutorial:tesseractPump', 3, 3,
    'etfuturum:sponge', 'gregtech:gt.blockmachines:1144', 'etfuturum:sponge'
  , ':cellUUMatter',    'gregtech:gt.metaitem.01:32762',  ':cellUUMatter'
  , 'etfuturum:sponge', 'gregtech:gt.blockmachines:1145', 'etfuturum:sponge'
);

// チェストセンサーの追加
mod.addItem('special/sensorChest.js', 'normal');
mod.addRecipe('Tutorial:sensorChest', 3, 3, 
    ':craftingChest', ':gemDiamond',         ':craftingChest'
  , ':ingotAnyIron',  'minecraft:noteblock', ':ingotGold'
  , ':craftingChest', ':gemEmerald',         ':craftingChest'
);

// 等価交換ヘルパーの追加
mod.addItem('special/helperEqualTrade.js', 'normal');
mod.addRecipe('Tutorial:helperEqualTrade', 3, 3, 
    'minecraft:air',        'minecraft:planks:0',   'Thaumcraft:FocusTrade'
  , 'minecraft:planks:1',   'Tutorial:sensorChest', 'minecraft:planks:2'
  , 'Thaumcraft:WandRod:4', 'minecraft:planks:3',   'minecraft:air'
);

// 月光虫の執事の追加
mod.addItem('special/butlerMoonworm.js', 'normal');
mod.addRecipe('Tutorial:butlerMoonworm', 3, 3, 
    ':gemCharcoal', ':gemCharcoal',    ':gemCharcoal'
  , ':gemCharcoal', 'minecraft:torch', ':gemCharcoal'
  , ':gemCharcoal', ':gemCharcoal',    ':gemCharcoal'
);

// ポータブル鉱石ストレージの追加
mod.addItem('special/portableOreStorage.js', 'normal');
mod.addRecipe('Tutorial:portableOreStorage', 3, 3,
    'gregtech:gt.metaitem.01:32403', 'gregtech:gt.metaitem.01:32403', 'gregtech:gt.metaitem.01:32403'
  , 'gregtech:gt.metaitem.01:32403', ':ingotIron',                    'gregtech:gt.metaitem.01:32403'
  , 'gregtech:gt.metaitem.01:32403', 'gregtech:gt.metaitem.01:32403', 'gregtech:gt.metaitem.01:32403'
);

// ポータブルスキャナ
mod.addItem('special/portableScanner.js', 'normal');
mod.addRecipe('Tutorial:portableScanner', 3, 3,
    ':fibersLin', ':fibersLin',                    ':fibersLin'
  , ':fibersLin', 'gregtech:gt.metaitem.01:32762', ':fibersLin'
  , ':fibersLin', ':fibersLin',                    ':fibersLin'
);
mod.addRecipe('Tutorial:portableScanner', 3, 3,
    ':fibersHemp', ':fibersHemp',                   ':fibersHemp'
  , ':fibersHemp', 'gregtech:gt.metaitem.01:32762', ':fibersHemp'
  , ':fibersHemp', ':fibersHemp',                   ':fibersHemp'
);

// ポータブルスキャナ
mod.addItem('special/grassSickle.js', 'normal');
mod.addRecipe('Tutorial:grassSickle', 3, 3,
    '', 'minecraft:flint',                    ''
  , '', '', 'minecraft:flint'
  , ':stickWood', 'minecraft:flint',                    ''
);







// 種袋（小麦）
mod.addItem('special/bagSeedsWheat.js', 'normal');
mod.addRecipe('Tutorial:bagSeedsWheat', 3, 3,
    'ImmersiveEngineering:material:4', 'ImmersiveEngineering:material:4', 'ImmersiveEngineering:material:4'
  , 'ImmersiveEngineering:material:4', 'minecraft:wheat_seeds',           'ImmersiveEngineering:material:4'
  , 'ImmersiveEngineering:material:4', 'ImmersiveEngineering:material:4', 'ImmersiveEngineering:material:4'
);

// デバッグアイテム
mod.addItem('debug.js', 'normal');

// 流体タンクの追加（テスト）
mod.addBlock('special/fluidTank.js', 'furnace');
mod.addTileEntity('fluidTank.js', 'furnace');
mod.addGui('fluidTank.js', 'furnace');
