/* //easy going - Write a for loop that will log the numbers 1 through 20.

for(let i = 0; i <= 20; i++){
    console.log(i)
}
// */


/* // get even - Write a for loop that will log only the even numbers in 0 through 200.

for (let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
// */


/* //fizzbuzz

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    } else if(i % 3 === 0){
        console.log('fizz')
    } else if(i % 5 === 0){
        console.log('buzz')
    } else {
        console.log(i)
    }
}
// */


/* //wild wild life - update elements in array
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++
wolfy[3] = 'Gotham City'
dart.push('hawkins')
wolfy[0] = 'Gameboy'
// */


/* // methods
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//favMovies.sort()
//favMovies.pop()
//favMovies.push('Guardians on the galaxy')
//favMovies.unshift('first')
//favMovies.splice(3, 1,'Avatar')
//console.log(favMovies.slice(8)) */

//

/* // Cat, Print random string from an array
let cat = "love me, pet me! HSSSSS"
let catArr = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']

const sentence =  catArr[(Math.floor(Math.random() * catArr.length))]
console.log(cat + sentence) */

//

/* // find the median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function median(nums){
    nums = nums.sort((a, b) => a - b)
    if (nums.length %2 !== 0){
        return nums[Math.floor(nums.length / 2)]
    } else {
        let mid1 = nums[nums.length / 2]
    }
}
console.log(median(nums)) */