let userName = prompt(`What isyour name?`);
let userQuestion = prompt(`Ask your question?`);
let randomNumber = Math.floor(Math.random() * 8);
switch (randomNumber) {
    case 0:
        document.getElementById("result").innerHTML = 'It is certain';
        break;
    case 1:
        document.getElementById("result").innerHTML = 'It is decidedly so';
        break;
    case 2:
        document.getElementById("result").innerHTML = 'Signs point to yes';
        break;
    case 3:
        document.getElementById("result").innerHTML = 'Cannot predict now';
        break;
    case 4:
        document.getElementById("result").innerHTML = 'Don\'t count on it';
        break;
    case 5:
        document.getElementById("result").innerHTML = 'My sources say no';
        break;
    case 6:
        document.getElementById("result").innerHTML = 'Outlook not so good';
        break;
    case 7:
        document.getElementById("result").innerHTML = 'You are in grave danger';
        break;
}  