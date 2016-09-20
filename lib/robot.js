'use strict';

function Robot() {
	this.bearing = "no bearing"
  this.coordinates = [0, 0]
  // this.instructions = []
  
  this.orient = function(movement){
  	if (movement === "east"){
  		this.bearing = "east"
  	} else if (movement === "west"){
  		this.bearing = "west"
  	} else if (movement === "north"){
  		this.bearing = "north"
  	} else if (movement === "south"){
  		this.bearing = "south"
		} else {
			throw Error(['Invalid Robot Bearing'])
		}
  }

  this.turnRight = function(){
  	switch(this.bearing) {
  		case "north":
  			this.bearing = "east"
  			break
			case "east":
				this.bearing = "south"
				break
			case "south":
				this.bearing = "west"
				break
			case "west":
				this.bearing = "north"
				break
  	}
  }

  this.turnLeft = function(){
  	switch(this.bearing) {
  		case "north":
  			this.bearing = "west"
  			break
			case "east":
				this.bearing = "north"
				break
			case "south":
				this.bearing = "east"
				break
			case "west":
				this.bearing = "south"
				break
  	}
  }

  this.at = function(x, y){
  	this.coordinates = []
  	this.coordinates.push(x, y)
  }

  this.advance = function (){
  	switch(this.bearing){
  		case "north":
	  		++this.coordinates[1]
	  		break
  		case "east":
	  		++this.coordinates[0]
	  		break
  		case "south":
  			--this.coordinates[1]
  			break
			case "west":
				--this.coordinates[0]
				break
  	}
  }

  this.instructions = function(commands){
  	var robotInstructions = []
  	var commands = commands.split("")

  	for (var i in commands){
  		if (commands[i] === "L"){
  			robotInstructions.push('turnLeft')
  		}

  		if (commands[i] === "R"){
  			robotInstructions.push('turnRight')
  		}

  		if (commands[i] === "A"){
  			robotInstructions.push('advance')
  		}
  	}
  	return robotInstructions
  }

  this.place = function(directionInfo){
  	this.coordinates = [directionInfo.x, directionInfo.y]
  	this.bearing = directionInfo.direction
  }

  this.evaluate = function(commands){
  	var commands = this.instructions(commands)

  	for (var i in commands){
  		if (commands[i] === 'turnLeft'){
  			this.turnLeft()
  		}

  		if (commands[i] === 'turnRight'){
  			this.turnRight()
  		}

  		if (commands[i] === 'advance'){
  			this.advance()
  		}

  	}
  }
}
