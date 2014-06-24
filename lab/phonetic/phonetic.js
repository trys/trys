var source = "";
var sourcesub;
var phonetic = [
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
	['?','Question mark'],
	['!','Exclamation mark'],
	['*','Asterisk']
];

function inputcode() {
	$("#source").keyup(function (e) {
	    if (e.keyCode == 13) {
	    	source = $("#source").val();
	    	$("#source").val("");
	    	$('.resultlist').html("");
	    	$('.source').html("");
	    	$('.source').append(source);
	    	splitsource();
	    }
	})
};

function splitsource() {
	var str = source;
	var i = str.length;
	var arr = str.split("");
	$(arr).each(function() {
		sourcesub = $(this);
		decodesource(sourcesub);
	});
};

function decodesource(sourcesub) {
	//alert(sourcesub[0])
	$(phonetic).each(function() {
		if(sourcesub[0] == this[0]){
			$('.resultlist').append('<li>'+this[1]+'</li>');
		}
	});
}


$(document).ready(function() {
	$("#source").focus();
	inputcode();
});
