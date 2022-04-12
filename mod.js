//*** Basics ***//
mod.loadScript('mod/basics.js');

//*** Specials ***//
mod.loadScript('mod/specials.js');

//*** BTW ***//
mod.loadScript('mod/btw.js');

//*** TwilightForest ***//
mod.loadScript('mod/twilightforest.js');

// クリエイティブタブの追加
mod.addCreativeTab('Tutorial', 'Tutorial:lampRedstoneInvert');

//=======================//
//= 他MODの鉱石辞書追加 =//
//=======================//
// Project Red <=> GregTech
mod.addToOreDictionary('stoneRedrock',       'ProjRed|Exploration:projectred.exploration.stone:0');
mod.addToOreDictionary('stoneRedrock',       'ProjRed|Exploration:projectred.exploration.stone:1');
mod.addToOreDictionary('stoneGabbroRock',    'ProjRed|Exploration:projectred.exploration.stone:2');
mod.addToOreDictionary('stoneGabbroRock',    'ProjRed|Exploration:projectred.exploration.stone:3');
mod.addToOreDictionary('stoneGabbroRock',    'ProjRed|Exploration:projectred.exploration.stone:4');
mod.addToOreDictionary('ingotBlueAlloy',     'ProjRed|Core:projectred.core.part:55');
mod.addToOreDictionary('dustNikolite',       'ProjRed|Core:projectred.core.part:56');
mod.addToOreDictionary('blockNikolite',      'ProjRed|Exploration:projectred.exploration.stone:11');
mod.addToOreDictionary('oreNikolite',        'ProjRed|Exploration:projectred.exploration.ore:6');
mod.addToOreDictionary('gemGreenSapphire',   'ProjRed|Core:projectred.core.part:39');
mod.addToOreDictionary('blockGreenSapphire', 'ProjRed|Exploration:projectred.exploration.stone:7');
mod.addToOreDictionary('oreGreenSapphire',   'ProjRed|Exploration:projectred.exploration.ore:2');
// ForgeMicroblock <=> GregTech
mod.addToOreDictionary('stickStone', 'ForgeMicroblock:stoneRod');
// Railcraft <=> GregTech
mod.addToOreDictionary('stoneChalk', 'Railcraft:cube:7');
mod.addToOreDictionary('stoneChalk', 'Railcraft:brick.quarried');
// GregTech <=> GregTech
// コバルト鉱石
mod.addToOreDictionary('oreCobalt',             'gregtech:gt.blockores:33');
mod.addToOreDictionary('oreNetherrackCobalt',   'gregtech:gt.blockores:1033');
mod.addToOreDictionary('oreEndstoneCobalt',     'gregtech:gt.blockores:2033');
mod.addToOreDictionary('oreBlackgraniteCobalt', 'gregtech:gt.blockores:3033');
mod.addToOreDictionary('oreRedgraniteCobalt',   'gregtech:gt.blockores:4033');
mod.addToOreDictionary('oreMarbleCobalt',       'gregtech:gt.blockores:5033');
mod.addToOreDictionary('oreBasaltCobalt',       'gregtech:gt.blockores:6033');
// カドミウム鉱石
mod.addToOreDictionary('oreCadmium',             'gregtech:gt.blockores:55');
mod.addToOreDictionary('oreNetherrackCadmium',   'gregtech:gt.blockores:1055');
mod.addToOreDictionary('oreEndstoneCadmium',     'gregtech:gt.blockores:2055');
mod.addToOreDictionary('oreBlackgraniteCadmium', 'gregtech:gt.blockores:3055');
mod.addToOreDictionary('oreRedgraniteCadmium',   'gregtech:gt.blockores:4055');
mod.addToOreDictionary('oreMarbleCadmium',       'gregtech:gt.blockores:5055');
mod.addToOreDictionary('oreBasaltCadmium',       'gregtech:gt.blockores:6055');
// タングステン鉱石
mod.addToOreDictionary('oreTungsten',             'gregtech:gt.blockores:81');
mod.addToOreDictionary('oreNetherrackTungsten',   'gregtech:gt.blockores:1081');
mod.addToOreDictionary('oreEndstoneTungsten',     'gregtech:gt.blockores:2081');
mod.addToOreDictionary('oreBlackgraniteTungsten', 'gregtech:gt.blockores:3081');
mod.addToOreDictionary('oreRedgraniteTungsten',   'gregtech:gt.blockores:4081');
mod.addToOreDictionary('oreMarbleTungsten',       'gregtech:gt.blockores:5081');
mod.addToOreDictionary('oreBasaltTungsten',       'gregtech:gt.blockores:6081');
// ニコライト鉱石
mod.addToOreDictionary('oreNikolite',             'gregtech:gt.blockores:812');
mod.addToOreDictionary('oreNetherrackNikolite',   'gregtech:gt.blockores:1812');
mod.addToOreDictionary('oreEndstoneNikolite',     'gregtech:gt.blockores:2812');
mod.addToOreDictionary('oreBlackgraniteNikolite', 'gregtech:gt.blockores:3812');
mod.addToOreDictionary('oreRedgraniteNikolite',   'gregtech:gt.blockores:4812');
mod.addToOreDictionary('oreMarbleNikolite',       'gregtech:gt.blockores:5812');
mod.addToOreDictionary('oreBasaltNikolite',       'gregtech:gt.blockores:6812');
// レッドガーネット鉱石
mod.addToOreDictionary('oreGarnetRed',             'gregtech:gt.blockores:527');
mod.addToOreDictionary('oreNetherrackGarnetRed',   'gregtech:gt.blockores:1527');
mod.addToOreDictionary('oreEndstoneGarnetRed',     'gregtech:gt.blockores:2527');
mod.addToOreDictionary('oreBlackgraniteGarnetRed', 'gregtech:gt.blockores:3527');
mod.addToOreDictionary('oreRedgraniteGarnetRed',   'gregtech:gt.blockores:4527');
mod.addToOreDictionary('oreMarbleGarnetRed',       'gregtech:gt.blockores:5527');
mod.addToOreDictionary('oreBasaltGarnetRed',       'gregtech:gt.blockores:6527');

// 燃料の追加
// Jet（黒玉）、褐炭と同じ6個製錬分
mod.addFuel('gregtech:gt.metaitem.01:2972', 1200);
mod.addFuel('gregtech:gt.metaitem.01:8972', 1200);

//======================//
//= モブドロップの追加 =//
//======================//
// スケルトンのドロップにスケルトンの頭を追加（）
mod.addRareMobDrop('Skeleton', 'minecraft:skull:0', 0.10);
// 羊のドロップに生の羊肉を追加（1～2個、平均1.5個）
// => UsefulFoodsの羊ドロップがコンフィグで切れないため不要に
//mod.addMobDrop('Sheep', 'MyMod:rawMutton', 1.0);
//mod.addMobDrop('Sheep', 'MyMod:rawMutton', 0.5);
// 狼のドロップに生の狼肉を追加（0～2個、平均1.0個）
mod.addMobDrop('Wolf', 'MyMod:rawWolfchop', 0.5);
mod.addMobDrop('Wolf', 'MyMod:rawWolfchop', 0.5);
// 村人のドロップに生の謎肉を追加（1～2個、平均1.5個）
mod.addMobDrop('Villager', 'MyMod:rawMysteryMeat', 1.0);
mod.addMobDrop('Villager', 'MyMod:rawMysteryMeat', 0.5);
// コウモリのドロップにコウモリの翼を追加（1～2個、平均1.2個）
mod.addMobDrop('Bat', 'MyMod:batWing', 1.0);
mod.addMobDrop('Bat', 'MyMod:batWing', 0.2);
// クリーパーのドロップにクリーパーオイスターを追加（0～1個、平均0.3個）
mod.addMobDrop('Creeper', 'MyMod:creeperOysters', 0.3);
