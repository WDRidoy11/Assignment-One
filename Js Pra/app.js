let firstName = prompt('Enter your First Name');
let lastName = prompt('Enter your Last Name');
let fullName = firstName + ' ' + lastName + '.';
let NameUpCase = fullName.toUpperCase();
let nameLength = fullName.length;
let outPut = document.getElementById('outPut');
outPut.innerHTML = 'My Name is ' + NameUpCase + ' Number of Character : ' + nameLength;