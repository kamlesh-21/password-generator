let array = ['a', 'b', 'c', 'd', '1', '2', '3', '4', '@', '$', '&', '(', ')', '^'];
let pwd1 = document.getElementById("option-One")
let pwd2 = document.getElementById("option-Two")
let pwd3 = document.getElementById("option-Three")
let pwd4 = document.getElementById("option-Four")


function genPsswd() {
    let password1 = "";
    for (let i = 0; i < 11; i++) {
        generate = array[Math.floor(Math.random()*14)]
        password1 += generate;
    }
    pwd1.innerHTML = password1;
     let password2 = "";

    for (let i = 0; i < 11; i++) {
        generate = array[Math.floor(Math.random()*14)]
        password2 += generate;
     }
    pwd2.innerHTML = password2;
 
        let password3 = "";

        for (let i = 0; i < 11; i++) {
        generate = array[Math.floor(Math.random()*14)]
        password3 += generate;
    }
    pwd3.innerHTML = password3;

      
        let password4 = "";

        for (let i = 0; i < 11; i++) {
        generate = array[Math.floor(Math.random()*14)]
        password4 += generate;
    }
    pwd4.innerHTML = password4;
  
}


