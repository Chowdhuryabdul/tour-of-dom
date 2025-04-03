/* want to give style with all the sections */
const sections = document.querySelectorAll('section') /* as it is only section tag so we will not use any dot or hash, we will use it dot for the class and hash for the ID. we can also use her getElementsByTag method as well */
console.log(sections)
for(section of sections){ /* here we can use for of and for each as we will get nodelist, but we use getElementByClassNmae then we have to use only for of... */
    section.style.border = '2px solid steelblue' /* here we have give the style in the section */
    section.style.marginBottom = '15px'
    section.style.borderRadius = '15px'
    section.style.paddingLeft = '17px'
    section.style.backgroundColor = 'lightgray'
    console.log(section)
}

/* want to give style to particular tag */

const plcesContainer = document.getElementById('places-container')
plcesContainer.style.backgroundColor = 'yellow'

/* if we want to add a new style which is declared in css File. we can add it by classList method as a new style. but we did not write this style in the html main File, rather than it is more dynamic and we decalred in the css file and add thorugh the js */

const placesContainer = document.getElementById('places-container');
// placesContainer.classList.add('yellow-bg')
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text') /* which we declared in the css file and add in the html tag. now we have removed it form here */