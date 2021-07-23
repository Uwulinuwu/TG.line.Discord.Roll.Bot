"use strict";
const {
	DynamicLoader
} = require('bcdice');

async function calldice(gameType, message) {
	const loader = new DynamicLoader();
	const GameSystem = await loader.dynamicLoad(gameType);
	const result = GameSystem.eval(message);
	return (result && result.text) ? result.text : null;
}
async function callHelp(gameType) {
	const loader = new DynamicLoader();
	const GameSystem = await loader.dynamicLoad(gameType);
	const result = GameSystem.HELP_MESSAGE;
	return result;
}
var variables = {};

var gameName = function () {
	return '【歌風】 .UK (nUK nUK@c or nUKc)'
}

var gameType = function () {
	return 'Dice:UK:hktrpg'
}
var prefixs = function () {
	return [{
		first: /^[.]UK$/i,
		second: null
	}]
}
var getHelpMessage = async function () {
	return '【歌風】\n' + await callHelp("Utakaze");
}
var initialize = function () {
	return variables;
}

var rollDiceCommand = async function ({
	mainMsg
}) {
	let rply = {
		default: 'on',
		type: 'text',
		text: ''
	};
	let result = '';
	switch (true) {
		case /^help$/i.test(mainMsg[1]) || !mainMsg[1]:
			rply.text = '【歌風】\n' + await callHelp("Utakaze");
			return rply;
		default:
			result = await calldice("Utakaze", mainMsg[1]);
			(result) ? rply.text = `${mainMsg[1]} ${(mainMsg[2]) ? mainMsg[2] : ''}\n${result}` : null;
			return rply;
	}
}


module.exports = {
	rollDiceCommand: rollDiceCommand,
	initialize: initialize,
	getHelpMessage: getHelpMessage,
	prefixs: prefixs,
	gameType: gameType,
	gameName: gameName
};