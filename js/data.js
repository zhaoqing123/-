
// var treeNodes = [
//     {"id":1, "pId":0, "name":"泸沽湖"},
//     {"id":11, "pId":1,"leavl":2,"name":"泸沽湖风景街道1"},
//     {"id":111, "pId":11,"leavl":3,"name":"摄像头1"},
//     {"id":112, "pId":11, "leavl":3,"name":"摄像头2"},
//     {"id":12, "pId":1, "leavl":2,"name":"泸沽湖风景街道2"},
//     {"id":121, "pId":12,"leavl":3, "name":"摄像头1"},
//     {"id":122, "pId":12, "leavl":3,"name":"摄像头2"},
//     {"id":13, "pId":1,"leavl":2, "name":"泸沽湖风景街道3"},
//     {"id":131, "pId":13,"leavl":3, "name":"摄像头1"},
//     {"id":132, "pId":13, "leavl":3,"name":"摄像头2"},

//     {"id":2, "pId":0, "name":"泸沽湖1"},
//     {"id":21, "pId":2, "leavl":2,"name":"泸沽湖风景街道11"},
//     {"id":211, "pId":21,"leavl":3,"name":"摄像头1"},
//     {"id":212, "pId":21,"leavl":3,"name":"摄像头2"},
//     {"id":22, "pId":2, "leavl":2,"name":"泸沽湖风景街道22"},
//     {"id":221, "pId":22,"leavl":3,"name":"摄像头1"},
//     {"id":222, "pId":22,"leavl":3,"name":"摄像头2"},
//     {"id":23, "pId":2,"leavl":2, "name":"泸沽湖风景街道33"},
//     {"id":231, "pId":23,"leavl":3,"name":"摄像头1"},
//     {"id":232, "pId":23,"leavl":3,"name":"摄像头2"},

//     {"id":3, "pId":0, "name":"泸沽湖2"},
//     {"id":31, "pId":3, "leavl":2,"name":"泸沽湖风景街道551"},
//     {"id":311, "pId":31,"leavl":3,"name":"摄像头1"},
//     {"id":312, "pId":31,"leavl":3,"name":"摄像头2"},
//     {"id":32, "pId":3, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":321, "pId":22,"leavl":3,"name":"摄像头1"},
//     {"id":322, "pId":22,"leavl":3,"name":"摄像头2"},
//     {"id":33, "pId":3, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":331, "pId":23,"leavl":3,"name":"摄像头1"},
//     {"id":332, "pId":23,"leavl":3,"name":"摄像头2"},

//     {"id":4, "pId":0, "name":"泸沽湖3"},
//     {"id":41, "pId":4,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":411, "pId":41,"leavl":3,"name":"摄像头1"},
//     {"id":412, "pId":41,"leavl":3,"name":"摄像头2"},
//     {"id":42, "pId":4, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":421, "pId":42,"leavl":3,"name":"摄像头1"},
//     {"id":422, "pId":42,"leavl":3,"name":"摄像头2"},
//     {"id":43, "pId":4,"leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":431, "pId":43,"leavl":3,"name":"摄像头1"},
//     {"id":432, "pId":43,"leavl":3,"name":"摄像头2"},

//     {"id":5, "pId":0, "name":"泸沽湖4"},
//     {"id":51, "pId":5,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":511, "pId":51,"leavl":3,"name":"摄像头1"},
//     {"id":512, "pId":51,"leavl":3,"name":"摄像头2"},
//     {"id":52, "pId":5,"leavl":2, "name":"泸沽湖风景街2"},
//     {"id":521, "pId":52,"leavl":3,"name":"摄像头1"},
//     {"id":522, "pId":52,"leavl":3,"name":"摄像头2"},
//     {"id":53, "pId":5,"leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":531, "pId":53,"leavl":3,"name":"摄像头1"},
//     {"id":532, "pId":53,"leavl":3,"name":"摄像头2"},

//     {"id":6, "pId":0, "name":"泸沽湖5"},
//     {"id":61, "pId":6,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":611, "pId":61,"leavl":3,"name":"摄像头1"},
//     {"id":612, "pId":61,"leavl":3,"name":"摄像头2"},
//     {"id":62, "pId":6, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":621, "pId":62,"leavl":3,"name":"摄像头1"},
//     {"id":622, "pId":62,"leavl":3,"name":"摄像头2"},
//     {"id":63, "pId":6,"leavl":2, "name":"泸沽湖风景街道3223"},
//     {"id":631, "pId":63,"leavl":3,"name":"摄像头1"},
//     {"id":632, "pId":63,"leavl":3,"name":"摄像头2"},
    

//     {"id":7, "pId":0, "name":"泸沽湖6"},
//     {"id":71, "pId":7, "leavl":2,"name":"泸沽湖风景街道551"},
//     {"id":711, "pId":71,"leavl":3,"name":"摄像头1"},
//     {"id":712, "pId":71,"leavl":3,"name":"摄像头2"},
//     {"id":72, "pId":7, "name":"泸沽湖风景街2"},
//     {"id":721, "pId":72,"leavl":3,"name":"摄像头1"},
//     {"id":722, "pId":72,"leavl":3,"name":"摄像头2"},
//     {"id":73, "pId":7, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":731, "pId":73,"leavl":3,"name":"摄像头1"},
//     {"id":732, "pId":73,"leavl":3,"name":"摄像头2"},


//     {"id":8, "pId":0, "name":"泸沽湖7"},
//     {"id":81, "pId":8,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":811, "pId":81,"leavl":3,"name":"摄像头1"},
//     {"id":812, "pId":81,"leavl":3,"name":"摄像头2"},
//     {"id":82, "pId":8, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":821, "pId":82,"leavl":3,"name":"摄像头1"},
//     {"id":822, "pId":82,"leavl":3,"name":"摄像头2"},
//     {"id":83, "pId":8, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":831, "pId":83,"leavl":3,"name":"摄像头1"},
//     {"id":832, "pId":83,"leavl":3,"name":"摄像头2"},

//     {"id":9, "pId":0, "name":"泸沽湖8"},
//     {"id":91, "pId":9,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":911, "pId":91,"leavl":3,"name":"摄像头1"},
//     {"id":912, "pId":91,"leavl":3,"name":"摄像头2"},
//     {"id":92, "pId":9, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":921, "pId":92,"leavl":3,"name":"摄像头1"},
//     {"id":922, "pId":92,"leavl":3,"name":"摄像头2"},
//     {"id":93, "pId":9, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":931, "pId":93,"leavl":3,"name":"摄像头1"},
//     {"id":932, "pId":93,"leavl":3,"name":"摄像头2"},

//     {"id":10, "pId":0, "name":"泸沽湖9"},
//     {"id":101, "pId":10, "leavl":2,"name":"泸沽湖风景街道551"},
//     {"id":1011, "pId":101,"leavl":3,"name":"摄像头1"},
//     {"id":1012, "pId":101,"leavl":3,"name":"摄像头2"},
//     {"id":102, "pId":10,"leavl":2, "name":"泸沽湖风景街2"},
//     {"id":1021, "pId":102,"leavl":3,"name":"摄像头1"},
//     {"id":1022, "pId":102,"leavl":3,"name":"摄像头2"},
//     {"id":103, "pId":10, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":1031, "pId":103,"leavl":3,"name":"摄像头1"},
//     {"id":1032, "pId":103,"leavl":3,"name":"摄像头2"},

//     {"id":11, "pId":0, "name":"泸沽湖10"},
//     {"id":111, "pId":11,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":1111, "pId":111,"leavl":3,"name":"摄像头1"},
//     {"id":1112, "pId":111,"leavl":3,"name":"摄像头2"},
//     {"id":112, "pId":11, "leavl":2,"name":"泸沽湖风景街2"},
//     {"id":1121, "pId":112,"leavl":3,"name":"摄像头1"},
//     {"id":1122, "pId":112,"leavl":3,"name":"摄像头2"},
//     {"id":113, "pId":11, "leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":1131, "pId":113,"leavl":3,"name":"摄像头1"},
//     {"id":1132, "pId":113,"leavl":3,"name":"摄像头2"},

//     {"id":12, "pId":0, "name":"泸沽湖11"},
//     {"id":121, "pId":12,"leavl":2, "name":"泸沽湖风景街道551"},
//     {"id":1211, "pId":121,"leavl":3,"name":"摄像头1"},
//     {"id":1212, "pId":121,"leavl":3,"name":"摄像头2"},
//     {"id":122, "pId":12,"leavl":2, "name":"泸沽湖风景街2"},
//     {"id":1221, "pId":122,"leavl":3,"name":"摄像头1"},
//     {"id":1222, "pId":122,"leavl":3,"name":"摄像头2"},
//     {"id":123, "pId":12,"leavl":2,"name":"泸沽湖风景街道3223"},
//     {"id":1231, "pId":123,"leavl":3,"name":"摄像头1"},
//     {"id":1232, "pId":123,"leavl":3,"name":"摄像头2"},
// ]


// var data={
//     'tit1':
//     'tit2':
// }


// for(var i=0;i<data.length;i++){

// }


// var setting = {	};
		var zNodes =
			{
				isRoot:true,
				name:"泸沽湖摄像头目录结构",
				open:true,
				id:"sjio3234kkk",
				children:
				[
				{ name:"泸沽湖",
					children: [
						{ name:"泸沽湖风景街道1",
							children: [
								{ name:"泸沽湖风景街道2",
									children: [
										{ name:"泸沽湖风景街道3",
											children:[
												{ name:"摄像头1"},
												{ name:"摄像头2"},
												{ name:"摄像头3"},
												{ name:"摄像头4"}
											]},
										{ name:"泸沽湖风景街道3",
											children:[
												{ name:"摄像头1"},
												{ name:"摄像头2"},
												{ name:"摄像头3"}
											]},
										{ name:"泸沽湖风景街道3",
											children:[
												{ name:"摄像头1"},
												{ name:"摄像头2"},
												{ name:"摄像头3"},
												{ name:"摄像头4"}
											]}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"}
									]}
							]},
						{ name:"泸沽湖风景街道1",
							children: [
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]}
							]},
						{ name:"泸沽湖风景街道1", isParent:true}
					]},
				{ name:"泸沽湖2",
					children: [
						{ name:"泸沽湖风景街道1",
							children: [
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"}
									]}
							]},
						{ name:"泸沽湖风景街道1",
							children: [
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]}
							]},
						{ name:"泸沽湖风景街道1",
							children: [
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]},
								{ name:"泸沽湖风景街道2",
									children:[
										{ name:"摄像头1"},
										{ name:"摄像头2"},
										{ name:"摄像头3"},
										{ name:"摄像头4"}
									]
								}
							]}
					]},
				{ name:"泸沽湖3", isParent:true}
	
			]
				};



