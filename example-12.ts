
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
	North = "North",
	South = "South",
	East = "East",
	West = "West",
}

// Should having a heading property type Direction

class MapPosition {
	heading: Direction

	constructor() {
		this.heading = Direction.North;
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		// set the direction on your property 
		// Print the new direction
		this.heading = newDirection
		console.log(newDirection)
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `you are heading ${this.heading}`
	}
}

const location = new MapPosition()
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.West)



export default MapPosition
