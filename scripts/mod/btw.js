//==============//
//= BTW Blocks =//
//==============//
// Block of Flintの追加
mod.addBlock('btw/blockFlint.js', 'normal');
mod.addRecipe('Tutorial:blockFlint', 3, 3,
    'minecraft:flint', 'minecraft:flint', 'minecraft:flint',
    'minecraft:flint', 'minecraft:flint', 'minecraft:flint',
    'minecraft:flint', 'minecraft:flint', 'minecraft:flint'
);
mod.addRecipe('minecraft:flint 9', 1, 1, 
    'Tutorial:blockFlint'
);

// Chopping Blockの追加
mod.addBlock('btw/choppingBlock.js', 'normal');
mod.addRecipe('Tutorial:choppingBlock 5', 3, 2,
    'minecraft:stone', '',                'minecraft:stone',
    'minecraft:stone', 'minecraft:stone', 'minecraft:stone'
);
mod.addRecipe('minecraft:stone', 1, 1, 
    'Tutorial:doubleSlabStone'
);
mod.addRecipe('Tutorial:choppingBlock 5', 3, 2,
    'minecraft:double_stone_slab', '',                            'minecraft:double_stone_slab',
    'minecraft:double_stone_slab', 'minecraft:double_stone_slab', 'minecraft:double_stone_slab');
mod.addRecipe('minecraft:stone', 1, 1, 
    'Tutorial:choppingBlock'
);

// Beaconの追加
mod.addBlock('btw/beacon.js', 'slab');
mod.addRecipe('Tutorial:beacon', 3, 3,
    ':blockGlassColorless', ':blockGlassColorless', ':blockGlassColorless',
    ':blockGlassColorless', ':blockDiamond',        ':blockGlassColorless',
    ':stoneObsidian',       ':stoneObsidian',       ':stoneObsidian'
);

// 大麻（ブロック）の追加
mod.addBlock('special/tileHemp.js', 'crossTexture');

//=============//
//= BTW Items =//
//=============//
// 導火線の追加
mod.addItem('fuse.js', 'normal');
mod.addRecipe('Tutorial:fuse', 3, 3,
    '',                ':dustGunpowder',   '', 
    'minecraft:paper', 'minecraft:string', 'minecraft:paper', 
    '',                ':dustGunpowder',   ''
);
mod.addRecipe('Tutorial:fuse', 3, 3,
    '',               'minecraft:paper',  '', 
    ':dustGunpowder', 'minecraft:string', ':dustGunpowder', 
    '',               'minecraft:paper',  ''
);

// 大麻
mod.addItem('hemp.js', 'normal');
mod.addToOreDictionary('cropHemp', 'Tutorial:hemp');
// 大麻の種
mod.addItem('seedsHemp.js', 'normal');
mod.addToOreDictionary('seedsHemp', 'Tutorial:seedsHemp');
// 大麻の繊維
mod.addItem('fibersHemp.js', 'normal');
mod.addToOreDictionary('fibersHemp', 'Tutorial:fibersHemp');
mod.addRecipe('Tutorial:fibersHemp 2', 1, 2,
    'Tutorial:hemp',
    ':craftingToolMortar'
);
mod.addShapelessRecipe('minecraft:string',
    'Tutorial:fibersHemp', 'Tutorial:fibersHemp', 'Tutorial:fibersHemp'
);