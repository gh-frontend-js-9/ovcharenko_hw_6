let array = [3, 7, 21,42,60];

   function foobar(array) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 7 == 0) && (array[i] % 3 == 0)) {
           array[i] = "foobar";
        } else if (array[i] % 7 == 0) {
        	array[i] = "bar";
        } else if (array[i] % 3 == 0) {
        	array[i] = "foo";
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }
    return array
}

