/* this is in case of adding a tag */
/* where to add */
const placesList = document.getElementById('places-list');
/* what to be added */
const li = document.createElement('li')
li.innerText = 'paharatoliBon'
/* add the child */
placesList.appendChild(li)


/* this is in case of adding a whole section */

/* where to add */
const addMainContainer = document.getElementById('main-container');

/* what to be added */
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My food list'
section.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'Rice'
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Biriani';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'Burger'
ul.appendChild(li3)

section.appendChild(ul)

/* now i am adding it to the main container */
addMainContainer.appendChild(section)

/* how to make a section with the innerHTML method directly */
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section </h1>
<ul> 
   <li>T-shirt </li>
<li>Lungi </li>
<li>sando genji </li>
</ul>
`
addMainContainer.appendChild(sectionDress)