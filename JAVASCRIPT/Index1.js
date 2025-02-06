document.getElementById("CreateProfile").addEventListener("click", function () {

    const username = document.getElementById("username").value  //line 3 is working
    const age = document.getElementById("age").value
    const color = document.getElementById("color").value
    const hobbies = document.getElementById("hobbies").value

    //console.log(username)
    //console.log(age)
    //console.log(color)
    //console.log(hobbies)...check whether Js code is running well

    document.getElementById("profileName").textContent = username
    document.getElementById("profileAge").textContent = age
    document.getElementById("profileHobbies").textContent = hobbies

    document.getElementById("profile").style.backgroundColor= color

    //If the age is below 18, display on profile card "You are under 18!"//
    //But if age is over 18, display "You are an adult"//
    //if, if else, if then else//

    if (age >= 18) {
        document.getElementById("info").textContent = "You are an adult"
    } else {
        document.getElementById("info").textContent = "You are not an adult!"
    }
    



} )