console.log('seciond file')
/* how to add a whole section */

const secondList = document.getElementById('second-list');
console.log(secondList)

/* what to add */

const li = document.createElement('li')
li.innerText = 'my dynamic item'
secondList.appendChild(li)
