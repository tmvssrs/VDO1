/*
let words = ["aap","kiekeboe","blabla","b"];

function sort(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array[i].length > array[j].length) {

                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    } return array + "<br>";
}
$("#result").html(sort(words));*/


class Sequencer {

    sortArray(array){

        for(let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {

                if (array[i].length > array[j].length) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        } return array;
    }
    constructor(){

    }
}

module.exports = Sequencer