/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });

	//callbacks -- inserted here --
	//open apps -- inserted here --


	var app2 = qlik.openApp('Seasons.qvf', config);

	
	
	app2.bookmark.apply('d11cb508-f012-4821-abba-32e4b434675f');


	//get objects -- inserted here --
	app2.getObject('qv-fa','9da2d7dc-b373-4525-9c31-32bf33f3f698');
	app2.getObject('QV-5-i','gKUAmfp');
	app2.getObject('QV-5-g','gKUAmfp');
	app2.getObject('QV-5-e','gKUAmfp');
	app2.getObject('QV-5-k','gKUAmfp');
	
	app2.getObject('QV-5-c','gKUAmfp');
	app2.getObject('QV-5-j','HHjUr');

	
	
	
	app2.getObject('QV-5-f','HHjUr');
		
	app2.getObject('QV-5-h','HHjUr');
	
	app2.getObject('QV-5-d','HHjUr');
	
	
	app2.getObject('QV-5-b','HHjUr');
	
	app2.getObject('QV-54-1','pmcTWS');
	
	app2.getObject('QV-11','6fb8d2a8-6be7-47d6-baec-3663a4685a2e');
	app2.getObject('QV-26b-c1','15e4a455-c3bc-4c91-b206-8406269daa39');
	app2.getObject('QV-26b-b1','baabf3a6-63b0-4e37-bd46-d023f02f06ac');
	
	app2.getObject('QV-26b-a1','c97299f7-7b81-46d8-ba6e-5a3c4644a61c');
	app2.getObject('QV-reset','d166e43d-dbcf-441a-ac91-0ac658696e86');
	app2.getObject('QV-RD5','ed8544d3-e131-4c2a-8732-d1ba802d0aa1');
	app2.getObject('QV-RD4','ed8544d3-e131-4c2a-8732-d1ba802d0aa1');
	app2.getObject('QV-RD3','ed8544d3-e131-4c2a-8732-d1ba802d0aa1');
	app2.getObject('QV-RD2','ed8544d3-e131-4c2a-8732-d1ba802d0aa1');
	app2.getObject('QV-RD1','ed8544d3-e131-4c2a-8732-d1ba802d0aa1');
	app2.getObject('QV-53bb','f7f2b41c-48bf-4c8d-917f-9f3b0b5aaefa');
	app2.getObject('QV-54aa','ee26ae73-aace-43b4-8f9c-fb574012c279');
	app2.getObject('QV-2-9cc-2','82200a6a-58ab-4bf5-8c0f-e5ffc4a05a5c');
	app2.getObject('QV-2-9cc-1','77c75bc3-a005-40ee-8d06-e77a4090616a');
	app2.getObject('QV-2-9c11','2b98184c-4031-4916-8de9-376c8deea60e');
	app2.getObject('QV-2-9c1','7740e03c-8ce1-4730-a23e-e4b88e6626ce');
	app2.getObject('QV-2-9d1','99799976-9cc3-4a28-b6da-b6e2bcd5cf79');
	app2.getObject('QV-2-9d','a0d49677-4e78-440d-8e4f-b3755bf47780');
	app2.getObject('QV-26b','a052dc39-b54f-48f5-836d-6917437f4613');
	
	
	app2.getObject('QV-2-category2','rwGA');
	app2.getObject('QV-2-dest2','b7c63a1b-e31e-40d3-90ea-902d880da7ef');
	
	app2.getObject('QV-2-DMC2','UDQkz');
	app2.getObject('QV-2-dest','b7c63a1b-e31e-40d3-90ea-902d880da7ef');
	
	app2.getObject('QV-2-DMC','UDQkz');
	app2.getObject('QV-2-Category','rwGA');
	app2.getObject('QV-reset4','d166e43d-dbcf-441a-ac91-0ac658696e86');
	app2.getObject('QV-reset3','d166e43d-dbcf-441a-ac91-0ac658696e86');
	app2.getObject('QV-reset2','d166e43d-dbcf-441a-ac91-0ac658696e86');
	app2.getObject('QV-reset1','d166e43d-dbcf-441a-ac91-0ac658696e86');
	
	app2.getObject('QV-54a','5312007e-9eb4-4676-a1ad-5e77a8cfbb3b');
	app2.getObject('QV-F1','82f6aa16-e7e5-4caf-8b90-a820816be5ce');
	app2.getObject('QV-53a','f9437235-a931-4722-a4db-7e3e14f896fc');
	
	
	
	app2.getObject('QV-51-3','fxPaL');
	app2.getObject('QV-50-1','RBKvyM');
	app2.getObject('QV-49-1','WEgZxj');
	app2.getObject('QV-47-1','caeJDVk');
	app2.getObject('QV-51-4','Txpkz');
	app2.getObject('QV-41c','Txpkz');
	app2.getObject('QV-41a','fxPaL');
	app2.getObject('QV-40a','RBKvyM');
	app2.getObject('QV-39a','WEgZxj');
	app2.getObject('QV-37a','caeJDVk');
	app2.getObject('QV-32-1','fxPaL');
	app2.getObject('QV-31-1','RBKvyM');
	app2.getObject('QV-30-1','WEgZxj');
	app2.getObject('QV-28-1','caeJDVk');
	app2.getObject('QV-24a','fxPaL');
	app2.getObject('QV-23a','RBKvyM');
	app2.getObject('QV-5-a','fxPaL');
	app2.getObject('QV-4-a','RBKvyM');
	app2.getObject('QV-3-a','WEgZxj');
	
	
	app2.getObject('QV-2-9cc-6','VLC');
	app2.getObject('QV-2-9cc-4','FsytPz');
	app2.getObject('QV-2-9c6','VLC');
	app2.getObject('QV-2-9c4','FsytPz');
	
	
	app2.getObject('QV-2-9bb','VLC');
	app2.getObject('QV-2-9b','FsytPz');
	
	
	
	
	
	
	
	app2.getObject('QV-34-1','gjWdkS');
	app2.getObject('QV-33-1','BjMCJK');
	app2.getObject('QV-55-1','YhLbr');
	
	app2.getObject('QV-49','PHNvYzM');
	app2.getObject('QV-39','PHNvYzM');
	app2.getObject('QV-22','PHNvYzM');
	app2.getObject('QV-3','PHNvYzM');
	app2.getObject('QV-4-9a2','d8a4e2ab-357a-4867-8dcd-a012e5b7478a');
	app2.getObject('QV-26b-c','0d606b39-d23d-46fe-9772-a6bc7b1f3c70');
	app2.getObject('qv-imp-3','56e43b76-2505-4075-bc37-9ad84226eef9');
	
	app2.getObject('QV-26b-d','c4e6e9b9-9728-42d4-a48c-3ea7ac64c9e4');
	app2.getObject('QV-26b-b','a66bd44d-2f57-442f-9a1f-d90e4f219e09');
	app2.getObject('QV-26b-a','a8b85b8b-7ba6-4b0b-b5be-5c7696425e2d');
	app2.getObject('qv-imp-5','e636d0f9-91fc-47dd-af17-638dfd920cce');
	app2.getObject('qv-imp-4','69e6306b-bbe1-4dd8-8054-1cff32a3076a');
	
	app2.getObject('qv-imp-2','d2aff823-2c7c-4674-be83-a9ea8a32b61d');
	app2.getObject('qv-imp-1','b7c2536b-6e7d-4000-9c20-15bbb4d234e2');
	app2.getObject('QV-44-1','phjue');
	app2.getObject('QV-43-1','HzcFLJt');
	app2.getObject('QV-42-1','pjRfuEf');
	app2.getObject('QV-3-9b','8704d8ff-2497-49c1-8d03-a78c5326acbb');
	app2.getObject('QV-4-9a1','mepXuR');
	app2.getObject('QV-28a','PJVdg');
	app2.getObject('QV-26c-9c3','a74ab9eb-bba3-4389-a94f-acf454a6f68f');
	app2.getObject('QV-26c-9c2','0ad114f0-8bb6-4e65-a42d-a5147e5a54ff');
	
	
	app2.getObject('QV-2-9cz','de70f461-36b5-4960-be07-3146c731b24a');
	
	app2.getObject('QV-2-9c','0ad114f0-8bb6-4e65-a42d-a5147e5a54ff');
	
	app2.getObject('QV-26a-9bbb','1e2acce8-150a-4b68-9c84-30d39873c800');
	app2.getObject('QV-19-1y','09aef218-ba32-43a3-9c76-746a591fc4fd');
	app2.getObject('QV-19-1z','63143a89-dad3-47d5-8cd4-2b51793e35d5');
	app2.getObject('QV-19-1','d75841e3-36b2-4c2c-b547-86fbc56ce6d6');
	
	
	
	app2.getObject('QV-55','dhJPxL');
	app2.getObject('QV-52','ThYmwuR');
	app2.getObject('QV-56','jgsjSG');
	app2.getObject('QV-56-11','CNpgrXj');
	
	app2.getObject('QV-26a-9b','Qttcjg');
	
	
	
	app2.getObject('QV-35-1','CcKMDE');
	
	
	app2.getObject('QV-27a','GJmevzX');
	app2.getObject('QV-26a','YvaRfx');
	app2.getObject('QV-25a','rePUppT');
	app2.getObject('QV-34','jqEFrFZ');
	app2.getObject('QV-33','bpxGCKf');
	app2.getObject('QV-35','GKQSjQ');
	
	app2.getObject('QV-51-2','ayyyHbp');
	
	app2.getObject('QV-41b','SUSg');
	
	
	
	
	app2.getObject('QV-22a','mXhJPF');
	app2.getObject('QV-21a','XWweGcU');
	app2.getObject('QV-20a','pGEcrEj');
	app2.getObject('QV-24','gLGr');
	app2.getObject('QV-23','DVtt');
	
	app2.getObject('QV-21','nbdZfzt');
	app2.getObject('QV-20','rKmRjC');
	app2.getObject('QV-54b','CgLRkx');
	app2.getObject('QV-54','avDhdD');
	app2.getObject('QV-53b','pYmbDJY');
	app2.getObject('QV-53','yPJsFwg');
	
	
	app2.getObject('QV-51-1','MefYg');
	
	
	app2.getObject('QV-48-1','nmMZuN');
	
	app2.getObject('QV-51','bmfns');
	app2.getObject('QV-50','msDFec');
	
	app2.getObject('QV-48','SUCxvYr');
	app2.getObject('QV-47','KFqmES');
	app2.getObject('QV-26','WQEMUD');
	
	app2.getObject('QV-46','mNKH');
	app2.getObject('QV-45','fpXyWD');
	app2.getObject('QV-44','NgGKTJ');
	app2.getObject('QV-43','HhQpCd');
	app2.getObject('QV-42','jVtdG');
	
	
	
	app2.getObject('QV-38a','LmWRgRB');
	
	app2.getObject('QV-41','ysaTJtp');
	app2.getObject('QV-40','wnFDPT');
	
	app2.getObject('QV-38','JGvBkhs');
	app2.getObject('QV-37','pBGkgw');
	
	
	
	app2.getObject('QV-25b','jpydP');
	app2.getObject('QV-25','dxxU');
	
	
	
	
	
	
	app2.getObject('QV-27','WtjXPCJ');
	
	
	
	
	
	app2.getObject('QV-27b','dxxU');
	
	
	
	app2.getObject('QV-2-9cc-7','dLykfMd');
	app2.getObject('QV-2-9cc-5','uepwwx');
	app2.getObject('QV-2-9cc-3','AXZXP');
	app2.getObject('QV-2-9cc-9','UDQkz');
	
	
	app2.getObject('QV-19-2','jaUfau');
	app2.getObject('QV-16-b','cjNWwV');
	
	
	
	app2.getObject('QV-2-9c2','94cb857d-7c29-4eae-8980-c704cf520c11');
	app2.getObject('QV-2-9c7','02ed42b9-947e-49ac-8aed-db25a01846e7');
	
	
	app2.getObject('QV-2-9c5','d61ff223-182a-492f-b3f8-17d714b40246');
	app2.getObject('QV-2-9bc3','3dfb2f11-73bd-4bdd-a600-14c064855c05');
	
	
	
	
	
	app2.getObject('QV-2-9bb-1','740fe60b-6441-4b15-9e8b-6318e502476a');
	app2.getObject('QV-2-9b-1','e5b5de7d-039b-414d-9109-73b73b1c8b41');
	
	app2.getObject('QV-2-9c3','1d591b12-17e0-4415-85cc-697971ac8880');
	
	
	
	app2.getObject('QV-2-9bbb','89f0659b-0837-462a-ac88-795822375ccf');
	
	
	
	
	app2.getObject('QV-2-99','b7c63a1b-e31e-40d3-90ea-902d880da7ef');
	app2.getObject('QV-62','MQSMaP');
	
	
	
	
	
	
	app2.getObject('QV-2-9a','MwvHZJT');
	
	
	
	
	
	app2.getObject('QV-2-9cc','LpTjqh');
	
	
		
	
	app2.getObject('QV-29-1','jsUmNR');
	
	app2.getObject('QV-2-a','PtspCtm');
	
	
	
	
	
	app2.getObject('QV-61','13542f9e-2066-4561-8a4e-b6548023185b');
	
	
	app2.getObject('QV-10','KGpM');
	app2.getObject('QV-18','KzvKqJ');
	
	
	
	
	
	
	
	
	
	
	
	app2.getObject('QV-14','SepSnmG');
	
	
	
	
	app2.getObject('QV-1-a','caeJDVk');
	app2.getObject('QV-1','0ab687fb-1f8c-4cd2-a2b0-af070a0a94bc');
	
	
	
	
	
	
	app2.getObject('QV-2-cc','c44b65f6-5ec8-4489-b7e6-c1163f45b0c8');
	
	
	
	
	
	
	app2.getObject('QV-2-aa','4f6d410f-8797-4191-9743-7459b1a497e0');
	app2.getObject('QV-2-bb','de70f461-36b5-4960-be07-3146c731b24a');
	
	
	
	
	
	
	
	
	app2.getObject('QV-32','MHNTueP');
	app2.getObject('QV-31','ewpjwE');
	app2.getObject('QV-30','PHNvYzM');
	app2.getObject('QV-29','xXugxJ');
	app2.getObject('QV-28','pZjZ');
	app2.getObject('QV-2','PBxWDnv');
	
	app2.getObject('QV-65','spGLR');
	
	app2.getObject('QV-63','spGLR');
	
	
	app2.getObject('QV-16-a','ZxwDLB');
	app2.getObject('QV-60','KKmLUa');
	
	
	
	
	app2.getObject('QV-15-1','JDSyabj');
	
	
	
	
	
	
	app2.getObject('QV-16','ZxwDLB');
	app2.getObject('QV-19','ECaTUJE');
	
	
	
	
	
	app2.getObject('QV-15','vkhZW');
	
	app2.getObject('QV-13','f157d877-7c54-4154-8c71-31ce308eb369');
	
	
	
	
	
	
	
	app2.getObject('QV-5','2e512c7c-322b-488d-91f6-faf72be36183');
	app2.getObject('QV-4','49f9565f-d1bf-467f-954c-55014672f374');
	
	
		
	
	
	
	
	app2.getObject('QV-12','QMwEYt');
	
	
	
		
	
	
	app2.getObject('QV-6','tytYEfR');
	
	
	
	
	
	
	app2.getObject('QV-9','9dc1c93c-42e2-45f6-b8cf-d27c4157c807');
	
	
	
	
	
	
	
	
	app2.getObject('QV-7','129ab1e5-0496-49a3-99af-58c3cfe4b373');
	
	app2.getObject('QV-8','CNMHGyn');
		
	
	app2.getObject('QV32','rJWmnra');
	
	app2.getObject('QV37','24fb6fe4-acd8-437f-a0ad-0f88ba7c7990');
	
	
	
	
	$(document).ready(function () {
		qlik.resize();
	$("a").click(function() {
		qlik.resize();
	});
    });
	
	//create cubes and lists -- inserted here --


	if (app2) {

	$(".btn-round").click(function(){
	qlik.resize();
	});

		app2.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
