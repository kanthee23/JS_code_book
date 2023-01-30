// Find number of vowels in it

function findNumVowels(s){
    var s = s.toString();
    var letter = s.split('');
    var vowels = ['a','e','i','o','u'];
    var count = 0;

    for (var i =0; i < letter.length; i++){
        if (vowels.includes(letter[i])){
            count = count + 1;
        }
    }
    return count;
}

// console.log(findNumVowels('kantheepan'));
