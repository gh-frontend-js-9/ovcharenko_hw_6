let first_word = "Beer";
let second_word = "Tekila";

function matches(first_word, second_word) {
		let matches = 0;
		for (let i = 0; i < first_word.length; i++) {
			let symbol = first_word[i] 
			for (let j = 0; j < second_word.length;j++){
			if (symbol == second_word[j]) {
				matches++;
			}
			}
		}
		return matches/(first_word.length+second_word.length)*100;
}