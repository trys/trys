var source = "",
	sourcesub,
	phonetic = [
	['a','alpha'],
	['b','bravo'],
	['c','charlie'],
	['d','delta'],
	['e','echo'],
	['f','foxtrot'],
	['g','golf'],
	['h','hotel'],
	['i','india'],
	['j','juliet'],
	['k','kilo'],
	['l','lima'],
	['m','mike'],
	['n','november'],
	['o','oscar'],
	['p','papa'],
	['q','quebec'],
	['r','romeo'],
	['s','sierra'],
	['t','tango'],
	['u','uniform'],
	['v','victor'],
	['w','whiskey'],
	['x','x-ray'],
	['y','yankee'],
	['z','zulu'],
	['A','ALPHA'],
	['B','BRAVO'],
	['C','CHARLIE'],
	['D','DELTA'],
	['E','ECHO'],
	['F','FOXTROT'],
	['G','GOLF'],
	['H','HOTEL'],
	['I','INDIA'],
	['J','JULIET'],
	['K','KILO'],
	['L','LIMA'],
	['M','MIKE'],
	['N','NOVEMBER'],
	['O','OSCAR'],
	['P','PAPA'],
	['Q','QUEBEC'],
	['R','ROMEO'],
	['S','SIERRA'],
	['T','TANGO'],
	['U','UNIFORM'],
	['V','VICTOR'],
	['W','WHISKEY'],
	['X','X-RAY'],
	['Y','YANKEE'],
	['Z','ZULU'],
	['1','One'],
	['2','Two'],
	['3','Three'],
	['4','Four'],
	['5','Five'],
	['6','Six'],
	['7','Seven'],
	['8','Eight'],
	['9','Nine'],
	['0','Zero'],
	['?','Question Mark'],
	['!','Exclamation Mark'],
	['*','Asterisk']
];

function generatePw() {
	'use strict';
	var i,
		e,
		n = 10,
		text = '';
	
	e = randomNumber(1,3);
	text += findCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ', e);

	i = randomNumber(1,3);
	text += findCharacters('0123456789', i);
	e = e + i;
	
	i = randomNumber(1,2);
	text += findCharacters('?!*', i);
	e = e + i;

	n = n - e;
	text += findCharacters('abcdefghijklmnopqrstuvwxyz', n);


	text = shuffle(text);
	

	$('.password').text(text);
	source = text;
	splitsource();
}

function randomNumber(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

function findCharacters(possible, number) {
	
	var subText = '';

	for(i=0; i < number; ++i){
		subText += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return subText;

}

function splitsource() {
	var str = source;
	var i = str.length;
	var arr = str.split("");
  $('.resultlist').empty();
	$(arr).each(function() {
		sourcesub = $(this);
		decodesource(sourcesub);
	});
};

function decodesource(sourcesub) {
	$(phonetic).each(function() {
		if(sourcesub[0] == this[0]){
			$('.resultlist').append('<li>'+this[1]+'</li>');
		}
	});
}

function shuffle(string) {
	var parts = string.split('');
	for (var i = parts.length; i > 0;) {
		var random = parseInt(Math.random() * i);
		var temp = parts[--i];
		parts[i] = parts[random];
		parts[random] = temp;
	}
	return parts.join('');
}

$(document).ready(function(){
  'use strict';
  generatePw();
  $('.generate').on("click", function(){
	generatePw()
  });
});
