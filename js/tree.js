function Tree(options,win,doc){
	this.container = options.container;
	options = options || {};
	this.data = options.data;
	this.pNode = options.pNode;
	this.pNodeClass = options.pNodeClass;
	this.node = options.node;
	this.nodeClass = options.nodeClass;
	//节点关闭状态
	this.nodeClassHide = "click-on";
	//节点打开状态
	this.nodeClassOpen = "icon-clicks";
	this.NodeStack = [];
	this.win = win || window;
	this.doc = doc || document;
}
/**
 * 以ul为起点的根
 */
Tree.prototype.createPNode  = function(){
	var pUl = this.pNode || this.doc.createElement("ul");
	this.pNodeClass && pUl.classList.add(this.pNodeClass);
	this.pNode = pUl;
	return pUl;
}
/**
 * 创建叶子节点
 *			<div class="second-tit hand pr">
				<span class="hover-layer pa"></span>
				<span class="scril-icon scril-on pa"></span>
				<span class="comicon pa second-click icon-clicks"></span>
				<span class="text-tit-second pa">泸沽湖风景街道</span>
			</div>
 * @param {Object} leftObj
 */
Tree.prototype.createLeaf = function(Obj){
	var childNodes = Obj.children;
	var leaf = true;
	if(childNodes && (childNodes instanceof Array)){
		leaf = false
	}
	var div = this.doc.createElement("div");
	if(Obj.isRoot){
//		div.classList.add("nav-first","pr","hand");	
//		div.classList.add("second-tit","pr","hand");
//		div.setAttribute("data-id",this.getRandomId());	
//		var span = this.doc.createElement("span");
//		span.classList.add("comicon", "pa","arrow-down","arrow-open");
//		span.textContent = Obj.name;
//		div.appendChild(span);
//		div.setAttribute("data-leaf",leaf);		
	}else{
		div.classList.add("second-tit","pr","hand");
		var span = this.doc.createElement("span");
		span.classList.add("hover-layer","pa");
		div.appendChild(span);
		div.setAttribute("data-id",this.getRandomId());
		var span = this.doc.createElement("span");
		span.classList.add("scril-icon","scril-on","pa");
		div.appendChild(span);	
		
		var span = this.doc.createElement("span");
		span.classList.add("comicon", "pa", "second-click", "icon-clicks");
		div.appendChild(span);
		
		
		var span = this.doc.createElement("span");
		span.classList.add("text-tit-second","pa");
		span.textContent = Obj.name;
		span.setAttribute("data-key",Obj.id);
		div.setAttribute("data-leaf",leaf);
		div.appendChild(span);
	}
	
	

	
	return div;
}
//创建目录结点
Tree.prototype.createDirNode = function(isOpen){
	var ul = this.doc.createElement("ul");
	ul.classList.add("nav-second");
	if(isOpen){
		ul.classList.add("show");		
	}else{
		ul.classList.add("hide");
	}
	return ul;
},

//切换到打开状态
/**
 * 
 * @param {Object} e 选中的元素e
 */
Tree.prototype.openSelStat = function(e){
		var dir = e.nextElementSibling;
		//打开目录
		if(dir){
			dir.classList.remove("hide");
		}
		//切换状态
		var node = e.querySelectorAll(".comicon.pa.second-click");
		if(node){
			node = node.item(0);
			node.classList.add("click-on");	
		}
}

/**
 * 获取节点状态
 */
Tree.prototype.isOpen = function(e){
	var node = e.querySelectorAll(".comicon.pa.second-click");
	node = node.item(0);
	if(!node){
		return  false;
	}
	return  node.classList.contains("click-on");;
}
//切换到关闭状态
/**
 * 
 * @param {Object} e 选中的元素e
 */
Tree.prototype.closeSelStat = function(e){
	var dir = e.nextElementSibling;
		//打开目录
		if(dir){
			dir.classList.add("hide");
		}
		//切换状态
		var node = e.querySelectorAll(".comicon.pa.second-click");
		if(node){
			node = node.item(0);
			node.classList.remove("click-on");	
		}
}

/**
 * 
 * @param {Object} root 接收一个根节点
 */
Tree.prototype.deepConstructor = function(root){
	if(typeof (root) === "undefined" || typeof (root) != "object"){
		return false;
	}
	
	var ul =  null;
	var li = this.doc.createElement("li");
	li.appendChild(this.createLeaf(root));
	
	var childNodes = root.children;
	if(childNodes && (childNodes instanceof Array)){
		ul = this.createDirNode(root.open);
		for(var key in childNodes){
			ul.appendChild(this.deepConstructor(childNodes[key]));
		}
	}
	ul && li.appendChild(ul);
	return li;
}

Tree.prototype.getRandomId = function(){
	return Math.random().toString(36).substr(2, 9);
}
//初始化事件
Tree.prototype.initEvt = function(){
	this.NodeStack = [];
	var leafList = this.doc.querySelectorAll("div[data-id]");
			var self = this;
			[].forEach.call(leafList, function(element) {
				self.NodeStack.push(element);
	    		element.addEventListener("click",function(e){
					self.openNode(this);				
				});
		});	
}

//切换结点状态
Tree.prototype.openNode = function(e){
		if(this.isOpen(e)){
			e.setAttribute("data-open","close");
			this.closeSelStat(e);
		}else{
			e.setAttribute("data-open","open");
			this.openSelStat(e);
		}
	
}



Tree.prototype.run = function(){
	console.log(this.data);
	var dom = this.deepConstructor(this.data);
	this.pNode.appendChild(dom);
	this.initEvt();
//	this.container.innerHTML= this.pNode.innerHTML;
   }
