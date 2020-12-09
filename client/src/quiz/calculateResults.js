import { getCookie } from '../cookie.js'

export function getQuizValue(name) {
    return {
	username: name,
	answers: [
	    getQuestion1(),
	    getQuestion2(),
	    getQuestion3(),
	    getQuestion4(),
	    getQuestion5(),
	    getQuestion6(),
	    getQuestion7(),
	    getQuestion8(),
	    getQuestion9(),
	    getQuestion10(),
	    getQuestion11(),
	    getQuestion12(),
	    getQuestion13(),
	    getQuestion14(),
	    getQuestion15(),
	    getQuestion16(),
	    getQuestion17(),
	    getQuestion18(),
	    getQuestion19(),
	    getQuestion20(),
	    getQuestion21(),
	    getQuestion22(),
	    getQuestion23(),
	    getQuestion24(),
	    getQuestion25(),
	    getQuestion26()
	    ]
    }
}
function getQuestion1() {
    var question = 1
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "a", value: -1 }, { category: "b", value: 1 }, { category: "e", value: -1 }, { category: "f", value: -1 } ]
	break;
    case "B":
	mods = [ { category: "c", value: -1 }, { category: "b", value: 1 }, { category: "h", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "i", value: 3 }, { category: "j", value: 4 }, { category: "k", value: 5 } ]
	break;
    case "D":
	mods = [ { category: "h", value: -5 }, { category: "g", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion2() {
    var question = 2
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	break;
    case "B":
	mods = [ { category: "j", value: 1 }, { category: "i", value: 2 }, { category: "h", value: -1 } ]
	break;
    case "C":
	mods = [ { category: "g", value: 1 }, { category: "j", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "h", value: 3 }, { category: "j", value: -1 }, { category: "i", value: -1 }, { category: "a", value: -1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion3() {
    var question = 3
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "d", value: -1 }, { category: "f", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "d", value: 1 }, { category: "a", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "d", value: -20 } ]
	break;
    case "D":
	mods = [ { category: "d", value: -1 }, { category: "e", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion4() {
    var question = 4
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "h", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "f", value: 1 }, { category: "i", value: -1 }, { category: "j", value: -1 } ]
	break;
    case "C":
	mods = [ { category: "h", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "h", value: 1 }, { category: "i", value: 1 }, { category: "j", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}
	
function getQuestion5() {
    var question = 5
    var ans = getCookie("q" + question);
    var mods = null;
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion6() {
    var question = 6
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "k", value: -1 }, { category: "c", value: 1 }, { category: "b", value: -1 } ]
	break;
    case "B":
	mods = [ { category: "b", value: 1 }, { category: "c", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "a", value: 1 }, { category: "d", value: 1 }, { category: "j", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "a", value: 1 }, { category: "c", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}
function getQuestion7() {
    var question = 7
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "g", value: 10 } ]
	break;
    case "B":
	mods = [ { category: "k", value: 10 } ]
	break;
    case "C":
	mods = [ { category: "k", value: -5 }, { category: "g", value: 5 } ]
	break;
    case "D":
	mods = [ { category: "k", value: -10 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion8() {
    var question = 8
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 2 } ]
	break;
    case "B":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "g", value: 2 }, { category: "i", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "g", value: 5 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion9() {
    var question = 9
    var ans = getCookie("q" + question);
    var mods = null;
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion10() {
    var question = 10
    var ans = getCookie("q" + question);
    var mods = null;
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion11() {
    var question = 11
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "d", value: 10 } ]
	break;
    case "B":
	mods = [ { category: "f", value: 1 }, { category: "c", value: 2 } ]
	break;
    case "C":
	mods = [ { category: "g", value: 5 }, { category: "j", value: 5 }, { category: "e", value: 2 } ]
	break;
    case "D":
	mods = [ { category: "c", value: 1 }, { category: "e", value: 1 }, { category: "j", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion12() {
    var question = 12
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "i", value: 5 }, { category: "j", value: 5 }, { category: "k", value: 5 } ]
	break;
    case "B":
	mods = [ { category: "i", value: -5 }, { category: "j", value: -5 }, { category: "k", value: -5 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion13() {
    var question = 13
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "h", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion14() {
    var question = 14
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "g", value: 10 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}
function getQuestion15() {
    var question = 15
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "k", value: -5 } ]
	break;
    case "B":
	mods = [ { category: "e", value: -5 } ]
	break;
    case "C":
	mods = [ { category: "d", value: -5 } ]
	break;
    case "D":
	mods = [ { category: "a", value: -5 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion16() {
    var question = 16
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "i", value: 6 }, { category: "j", value: 6 }, { category: "k", value: 6 } ]
	break;
    case "B":
	mods = [ { category: "e", value: 6 } ]
	break;
    case "C":
	mods = [ { category: "d", value: 6 } ]
	break;
    case "D":
	mods = [ { category: "a", value: 6 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion17() {
    var question = 17
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "a", value: 1 }, { category: "i", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "k", value: 1 }, { category: "c", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "g", value: 1 }, { category: "b", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "h", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion18() {
    var question = 18
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "k", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "K", value: 2 } ]
	break;
    case "D":
	mods = [ { category: "k", value: -1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion19() {
    var question = 19
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "a", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "a", value: 2 } ]
	break;
    case "D":
	mods = [ { category: "f", value: 1 }, { category: "g", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion20() {
    var question = 20
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "g", value: 5 } ]
	break;
    case "B":
	mods = [ { category: "i", value: 5 } ]
	break;
    case "C":
	mods = [ { category: "a", value: 5 } ]
	break;
    case "D":
	mods = [ { category: "h", value: 5 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion21() {
    var question = 21
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "b", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "b", value: -20 } ]
	break;
    case "C":
	mods = [ { category: "b", value: 5 } ]
	break;
    case "D":
	mods = [ { category: "b", value: 10 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion22() {
    var question = 22
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "j", value: 5 } ]
	break;
    case "B":
	mods = [ { category: "k", value: 5 } ]
	break;
    case "C":
	mods = [ { category: "k", value: -5 } ]
	break;
    case "D":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion23() {
    var question = 23
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "d", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "e", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "d", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "a", value: 1 }, { category: "f", value: -1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion24() {
    var question = 24
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "k", value: -1 } ]
	break;
    case "D":
	mods = [ { category: "k", value: -1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion25() {
    var question = 25
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    case "B":
	mods = [ { category: "g", value: 1 } ]
	break;
    case "C":
	mods = [ { category: "b", value: 1 }, { category: "d", value: 1 }, { category: "g", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "b", value: 1 }, { category: "i", value: 1 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}

function getQuestion26() {
    var question = 26
    var ans = getCookie("q" + question);
    var mods = null;
    switch (ans) {
    case "A":
	mods = [ { category: "g", value: 10 } ]
	break;
    case "B":
	mods = [ { category: "g", value: -20 } ]
	break;
    case "C":
	mods = [ { category: "i", value: 1 }, { category: "j", value: 2 }, { category: "k", value: 1 } ]
	break;
    case "D":
	mods = [ { category: "i", value: 2 }, { category: "j", value: 1 }, { category: "k", value: 1 } ]
	break;
    }
    return {
	questionID: question,
	answer: ans,
	modifiers: mods
    }
}
