export function getLifestyle(results) {
    var currentLargest = results[0];
    for (var result of results) {
	if (result.score > currentLargest.score)
	    currentLargest = result
    }
    switch (currentLargest.category) {
    case "a":
	return "Community Garden"
    case "b":
	return "Minimalism"
    case "c":
	return "Optimize Your House for Sustainability"
    case "d":
	return "Try Vegetarian or Veganism"
    case "e":
	return "Cut out single-use Plastics"
    case "f":
	return "Sustainable Gardening at Home"
    case "g":
	return "Green Getaway"
    case "h":
	return "Tiny House"
    case "i":
	return "Ecovillage"
    case "j":
	return "Futuristic Cities"
    case "k":
	return "Earthships"
    }
}
    
