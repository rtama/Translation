// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

	// Your code here
	$(".lang_to").html(lang_to);
	$(".lang_from").html(lang_from);
	var keys = Object.keys(current_dict);
	
	function randomWord(keys) {
		var rand = Math.floor((Math.random() * keys.length))
		return keys.rand
	}
	document.write("lkjsdlkgjsdoigjsoidgj");
	document.write(keys[2]);
	console.log(keys[2]);
	document.write(randomWord(keys));
    });
