function greet() {
    let yourName = prompt("What is your name?");

    alert("Hello, " + yourName);

    let yourAge = prompt("How old are you?"); 

    let numberAge = parseInt(yourAge);

    let response = confirm("Have you had a birthday yet this year?");

    if ( response == true ) {       yearResult=
        new Date().getFullYear() - numberAge;
        alert("You were born in" + yearResult);
    }
    if ( response == false ) { yearResult=
        new Date().getFullYear() - numberAge - 1;
        alert("You were born in" + yearResult);
    }
        
}