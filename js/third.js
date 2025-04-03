/* add a whole section by innerHTML */

/* where to add- need to find this one first */
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);
/* which element want to make */
const section = document.createElement('section')
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra text added here</p>
<ul>
<li>first item</li>
<li>second item</li>
<li>third item</li>
<li>fourth item</li>
</ul>
`
mainContainer.appendChild(section)
