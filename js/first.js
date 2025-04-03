console.log('first file')
/* find bt tag name */
const allLi = document.getElementsByTagName('li');
console.log(allLi)

/* find element by class */
const alltitles = document.getElementsByClassName('section-title')
console.log(alltitles)
for(let i of alltitles){
    console.log(i)
}

/* find element by ID */

const findById = document.getElementById('second-section');
console.log(findById)
/* style setting */
findById.style.color = 'violet'
findById.style.backgroundColor = 'lightGray'

// document.querySelectorAll - it will give all the nodes
// document.querySelector - it will give the first one