import CommunityGarden from '../Wiki/Resources/Gardening.png'
import Minimalism from '../Wiki/Resources/Minimalism.png'
import SustainHouse from '../Wiki/Resources/Sustain_House.png'
import Vegan from '../Wiki/Resources/Vegan.png'
import Plastics from '../Wiki/Resources/Plastics.png'
import SustainableHomeGarden from '../Wiki/Resources/Gardening2.png'
import GreenGetaway from '../Wiki/Resources/Getaway.png'
import TinyHouse from '../Wiki/Resources/Tiny_House.png'
import EcoVillage from '../Wiki/Resources/Eco_Village.png'
import FuturisticCity from '../Wiki/Resources/Future_City.png'
import Earthship from '../Wiki/Resources/Earthship.png'

export function getLifestyleOption(results) {
    var currentLargest = results[0];
    for (var result of results) {
	if (result.score > currentLargest.score)
	    currentLargest = result
    }
    return currentLargest.category
}

export function getLifestyleName(lifestyleChar) {
    switch (lifestyleChar) {
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
export function getLifestyleImage(lifestyleChar) {
    switch (lifestyleChar) {
    case "a":
	return CommunityGarden;
    case "b":
	return Minimalism;
    case "c":
	return SustainHouse;
    case "d":
	return TinyHouse;
    case "e":
	return Plastics;
    case "f":
	return SustainableHomeGarden;
    case "g":
	return GreenGetaway;
    case "h":
	return TinyHouse;
    case "i":
	return EcoVillage;
    case "j":
	return FuturisticCity;
    case "k":
	return Earthship;
    }
}
