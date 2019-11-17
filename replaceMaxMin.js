let array = [10, 1, 3, 552, 234];


function getMax(array) {
    let index = 0;
    let max = array[0];
    for (let i = 0; i < array.length; i++) {

        if (max < array[i]) {
            max = array[i];
            index = i;
        }

    }

    return {
        number: max,
        index: index
    }
}


function getMin(array) {
    let min = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            index = i;
        }
    }
    return {
        number: min,
        index: index
    }
}

function replaceNumb(array) {
    let maxIndex = getMax(array).index;
    let minIndex = getMin(array).index;
    [array[maxIndex],array[minIndex]] = [array[minIndex],array[maxIndex]]
    return array
}

function sum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum+=array[i];
	}
	return sum
}