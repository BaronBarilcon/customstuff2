//================//
//= Basic Blocks =//
//================//
// Block of Fleshの追加
mod.addBlock('blockFlesh.js', 'normal');
mod.addRecipe('Tutorial:blockFlesh', 3, 3,
    'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh',
    'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh',
    'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'
);
mod.addRecipe('minecraft:rotten_flesh 9', 1, 1, 
    'Tutorial:blockFlesh'
);
mod.addToOreDictionary('blockFlesh', 'Tutorial:blockFlesh');

// Block of Boneの追加
mod.addBlock('blockBone.js', 'normal');
mod.addToOreDictionary('blockBone', 'Tutorial:blockBone');
mod.addRecipe('Tutorial:blockBone', 3, 3,
    'minecraft:bone', 'minecraft:bone', 'minecraft:bone',
    'minecraft:bone', 'minecraft:bone', 'minecraft:bone',
    'minecraft:bone', 'minecraft:bone', 'minecraft:bone'
);
mod.addRecipe('minecraft:bone 9', 1, 1, 
    'Tutorial:blockBone:0'
);
mod.addRecipe('minecraft:bone 9', 1, 1, 
    'Tutorial:blockBone:12'
);
mod.addRecipe('Tutorial:blockBone:12 4', 2, 2,
    'Tutorial:blockBone:0', 'Tutorial:blockBone:0',
    'Tutorial:blockBone:0', 'Tutorial:blockBone:0'
);

// Block of Gunpowderの追加
mod.addBlock('blockDustGunpowder.js', 'gravity');
mod.addToOreDictionary('blockDustGunpowder', 'Tutorial:blockDustGunpowder');
mod.addRecipe('Tutorial:blockDustGunpowder', 3, 3, 
  'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 
  'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 
  'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'
);
mod.addRecipe('minecraft:gunpowder 9', 1, 1, 
  'Tutorial:blockDustGunpowder'
);

// Block of Blazeの追加
mod.addBlock('blockBlaze.js', 'normal');
mod.addToOreDictionary('blockBlaze', 'Tutorial:blockBlaze:0');
mod.addRecipe('Tutorial:blockBlaze', 3, 3, 
  ':dustBlaze', ':dustBlaze', ':dustBlaze', 
  ':dustBlaze', ':dustBlaze', ':dustBlaze', 
  ':dustBlaze', ':dustBlaze', ':dustBlaze'
);
mod.addRecipe('minecraft:blaze_rod 9', 1, 1, 
  'Tutorial:blockBlaze'
);

// Block of Oystersの追加
mod.addBlock('blockCreeperOysters.js', 'normal');
mod.addToOreDictionary('blockCreeperOysters', 'Tutorial:blockCreeperOysters:0');
mod.addRecipe('Tutorial:blockCreeperOysters', 3, 3, 
  'MyMod:creeperOysters', 'MyMod:creeperOysters', 'MyMod:creeperOysters', 
  'MyMod:creeperOysters', 'MyMod:creeperOysters', 'MyMod:creeperOysters', 
  'MyMod:creeperOysters', 'MyMod:creeperOysters', 'MyMod:creeperOysters'
);
mod.addRecipe('MyMod:blockCreeperOysters 9', 1, 1, 
  'Tutorial:blockCreeperOysters'
);

// Invert Redstone Lampの追加
mod.addBlock('lampRedstoneInvert.js', 'normal');
mod.addRecipe('Tutorial:lampRedstoneInvert:1', 1, 3,
    ':dyeBlue',
    'minecraft:redstone_lamp',
    'minecraft:redstone_torch'
);

// Compressed Cobblestoneの追加
mod.addBlock('compressedCobblestone.js', 'normal');
mod.addRecipe('Tutorial:compressedCobblestone:0', 3, 3,
    'minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone',
    'minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone',
    'minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone'
);
mod.addRecipe('minecraft:cobblestone 9', 1, 1, 
    'Tutorial:compressedCobblestone:0'
);
for(var i = 0; i < 7; i++){
    var lowCobble = 'Tutorial:compressedCobblestone:' + i;
    var highCobble = 'Tutorial:compressedCobblestone:' + (i+1);
    mod.addRecipe(highCobble, 3, 3,
        lowCobble, lowCobble, lowCobble,
        lowCobble, lowCobble, lowCobble,
        lowCobble, lowCobble, lowCobble
    );
    mod.addRecipe(lowCobble + ' 9', 1, 1, 
        highCobble
    );
}



// Grass Baleの追加
mod.addItem('cropGrass.js', 'normal');
mod.addBlock('blockGrassBale.js', 'normal');
mod.addRecipe('Tutorial:blockGrassBale', 3, 3,
    'Tutorial:cropGrass', 'Tutorial:cropGrass', 'Tutorial:cropGrass',
    'Tutorial:cropGrass', 'Tutorial:cropGrass', 'Tutorial:cropGrass',
    'Tutorial:cropGrass', 'Tutorial:cropGrass', 'Tutorial:cropGrass'
);
mod.addRecipe('Tutorial:cropGrass 9', 1, 1, 
    'Tutorial:blockGrassBale:0'
);
mod.addRecipe('Tutorial:cropGrass 9', 1, 1, 
    'Tutorial:blockGrassBale:12'
);
mod.addRecipe('Tutorial:blockGrassBale:12 4', 2, 2,
    'Tutorial:blockGrassBale:0', 'Tutorial:blockGrassBale:0',
    'Tutorial:blockGrassBale:0', 'Tutorial:blockGrassBale:0'
);

// Dry Grass Baleの追加
mod.addItem('cropGrassDry.js', 'normal');
mod.addBlock('blockGrassBaleDry.js', 'normal');
mod.addRecipe('Tutorial:blockGrassBaleDry', 3, 3,
    'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry',
    'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry',
    'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry', 'Tutorial:cropGrassDry'
);
mod.addRecipe('Tutorial:cropGrassDry 9', 1, 1, 
    'Tutorial:blockGrassBaleDry:0'
);
mod.addRecipe('Tutorial:cropGrassDry 9', 1, 1, 
    'Tutorial:blockGrassBaleDry:12'
);
mod.addRecipe('Tutorial:blockGrassBaleDry:12 4', 2, 2,
    'Tutorial:blockGrassBaleDry:0', 'Tutorial:blockGrassBaleDry:0',
    'Tutorial:blockGrassBaleDry:0', 'Tutorial:blockGrassBaleDry:0'
);

//==========//
//= Fluids =//
//==========//
mod.addBlock('fluid/Octane.js', 'fluid');
mod.addBlock('fluid/EthylTertButylEther.js', 'fluid');
mod.addBlock('fluid/Gasoline.js', 'fluid');
mod.addBlock('fluid/HighOctaneGasoline.js', 'fluid');

mod.addItem('fluid/bucketOctane.js', 'bucket');
mod.addItem('fluid/bucketEthylTertButylEther.js', 'bucket');
mod.addItem('fluid/bucketGasoline.js', 'bucket');
mod.addItem('fluid/bucketHighOctaneGasoline.js', 'bucket');

mod.addToOreDictionary('bucketOctane', 'Tutorial:bucketOctane');
mod.addToOreDictionary('bucketEthylTertButylEther', 'Tutorial:bucketEthylTertButylEther');
mod.addToOreDictionary('bucketGasoline', 'Tutorial:bucketGasoline');
mod.addToOreDictionary('bucketHighOctaneGasoline', 'Tutorial:bucketHighOctaneGasoline');

//===============//
//= Basic Items =//
//===============//
// 粉の追加
mod.addItem('dust.js', 'normal');
mod.addToOreDictionary('dustGranite',    'Tutorial:dust:0');
mod.addToOreDictionary('dustDiorite',    'Tutorial:dust:1');
mod.addToOreDictionary('dustAndesite',   'Tutorial:dust:2');

// リネンの種
mod.addItem('seedsLin.js', 'normal');
mod.addToOreDictionary('seedsLin', 'Tutorial:seedsLin');
mod.addToOreDictionary('seedsFlax', 'Tutorial:seedsLin');
// リネンの繊維
mod.addItem('fibersLin.js', 'normal');
mod.addToOreDictionary('fibersLin', 'Tutorial:fibersLin');
mod.addToOreDictionary('fibersFlax', 'Tutorial:fibersLin');
// リネン
mod.addItem('lin.js', 'normal');
mod.addToOreDictionary('cropLin', 'Tutorial:lin');
mod.addToOreDictionary('cropFlax', 'Tutorial:lin');
mod.addRecipe('Tutorial:fibersLin 2', 1, 2,
    'Tutorial:lin',
    ':craftingToolMortar'
);
mod.addShapelessRecipe('minecraft:string',
    'Tutorial:fibersLin', 'Tutorial:fibersLin', 'Tutorial:fibersLin'
);

// ジルコニアの追加
mod.addBlock('blockZirconia.js', 'normal');
mod.addItem('ingotZirconia.js', 'normal');
mod.addRecipe('Tutorial:blockZirconia', 3, 3,
    'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia',
    'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia',
    'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia', 'Tutorial:ingotZirconia'
);
mod.addRecipe('Tutorial:ingotZirconia 9', 1, 1, 
    'Tutorial:blockZirconia'
);
mod.addToOreDictionary('ingotZirconia', 'Tutorial:ingotZirconia');
mod.addToOreDictionary('ingotCustomMat19', 'Tutorial:ingotZirconia');
mod.addToOreDictionary('blockZirconia', 'Tutorial:blockZirconia');
mod.addToOreDictionary('blockCustomMat19', 'Tutorial:blockZirconia');

// Engraved Energy Chip
mod.addItem('engravedEnergyChip.js', 'normal');
