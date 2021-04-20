console.log("inside js file");
let submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', submitdetails);
let checkbtn = document.getElementById('check');
checkbtn.addEventListener('click', checkdetails);



function checkemail() {
    let email = document.getElementById("email").value;
    let regex = /[^@][a-z A-Z 0-9]@gmail.com/;
    if (!regex.test(email)) {
        showalert("Invalid Email..Kindly check and enter again");
        document.getElementById("email").value = "";
        return false;
    }
    // return true;
    else
       return true && checkpswd();
}

function checkpswd() {
    let pswd = document.getElementById('password').value;
    if (pswd.length < 8) {
        showalert("Password must contain atleast 8 characters");
        document.getElementById('password').value="";
        return false;
    }
    else {
        let regex = /[a-z]/;
        // let regex2 = /[A-Z]/;
        // let regex3 = /[@!#$%&*(){}[]]/;
        // let check = false;
        if (!regex.match(pswd)){
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("1");
            return false;
        }
         regex = /[A-Z]/;
         if (!regex.match(pswd)) {
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("2");
            return false;
        }
         regex = /[@!#$%&*(){}[]]/;
         if (!regex.match(pswd)) {
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("3");
            return false;
        }
        else
        return true;
        
    }
}
function submitdetails(){
    let val = checkemail();
    if(val){
        submitobj=[];
        let email = document.getElementById("email").value;
        let pswd = document.getElementById('password').value;
        console.log("inside submit details");
        let submit = localStorage.getItem('submit');
        if(submit==null){
            submitobj = [];
        }
        else{
            submitobj = JSON.parse(submit);
        }
        let check = false;
        submitobj.forEach(element => {
            if(element[0]===email){
                showalert("already taken email");
                document.getElementById("email").value = "";
                document.getElementById('password').value="";
                check = true;
            }
            console.log(element);
        });
        if(!check){
            submitobj.push([email,pswd]);
            localStorage.setItem('submit',JSON.stringify(submitobj));
            showalert("Email submitted successfully");
        }
    }
}
function checkdetails(){
    let val = checkemail();
    if(val){
        submitobj=[];
        let email = document.getElementById("email").value;
        let pswd = document.getElementById('password').value;
        console.log("inside submit details");
        let submit = localStorage.getItem('submit');
        let check = false;
        let check2= false;
        if(submit==null){
            showalert("This email has not benn registered yet..Kindly submit it first");
        }
        else{
            submitobj = JSON.parse(submit);
            check2 = true;
        }
        submitobj.forEach(element => {
            if(element[0]===email && element[1]===pswd)
            check = true;
            
        });
       if(check && check2){
           showalert("CORRECT CREDENTIALS");
           console.log("CORRECT CREDENTIALS")
       }
       else{
        showalert("INCORRECT CREDENTIALS OR THS EMAIL IS NOT YET REGISTERED....KINDLY CHECK AND DO OT AGAIN");
        console.log("incorrect ");
       }
    }
}

// utilities function/helper function
function showalert(msg) {
    document.getElementById('showmsg').innerText = msg;
}

