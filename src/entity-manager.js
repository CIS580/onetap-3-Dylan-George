module.exports = exports = EntityManager;

function EntityManager(width, height, cellSize)
{
	this.worldWidth = width;
	this.worldHeight = height;
	this.cellSize = cellSize;
	this.widthInCells = Math.ceil(width/cellSize);
	this.numberOfCells = width* Math.ceil(height/cellSize);
	this.cells = [];
	
	for(var i = 0; i < this.numberOfCells; i++)
	{
		this.cells[i] = [];
	}
}

EntityManager.prototype.addEntity() = function(entity)
{
	var left = Math.floor(entity.x/this.cellSize);
	var right = Math.ceil((entity.x + entity.width)/this.cellSize);
	var top = Math.floor(entity.y/this.cellSize);
	var bottom = Math.ceil((entity.y + entity.height)/this.cellSize);
	
	for(var x = left; x < right; x++)
	{
		for(var y = top; y <= bottom; y++)
		{
			this.cells[y*this.widthInCells + x].push(entity);
			if(!entity.cells) entity.cells = [];
			entity.cells.push({x: x, y: y});
		}
	}
}

EntityManager.prototype.updateEntity = function(entity)
{
	var x = Math.floor(entity.x/this.cellSize);
	var y = Math.ceil((entity.x + entity.width/this.cellSize));
	
	if(index != entity._cell)
	{
	}
	
}

Entitymanager.prototype.collide = function(callback)
{
	//diagonal
	//if(i < self.numberOfCells - self.widthInCells && i % (self.widthInCells)....
			checkForCollision(entity1, entity2, callback);
}

function checkForCollision(entity1, entity2, callback)
{
	//var collides = check for overlapping squares like in snake
	
	if(collides)
	{
		callback(entity1, entity2); //handle what happens from collision elsewhere
	}
}