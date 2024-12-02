// flex container
const container = document.querySelector('.flex-container');
container.style.backgroundColor = '#f0f0f0'; // Light gray background
container.style.border = '5px solid black';

// getting each flex item by its ID
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');

//sstyling items
item1.style.backgroundColor = 'red';
item1.style.border = '2px dashed blue';
item1.style.color = 'white';

item2.style.backgroundColor = 'green';
item2.style.border = '3px dotted yellow';
item2.style.color = 'black';

item3.style.backgroundColor = 'blue';
item3.style.border = '4px solid white';
item3.style.color = 'yellow';

// adjusting size of each flex item
item1.style.width = '600px';
item1.style.height = '200px';

item2.style.width = '600px';
item2.style.height = '200px';

item3.style.width = '600px';
item3.style.height = '200px';
