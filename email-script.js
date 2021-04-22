console.log("inside js file");
let submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', submitdetails);

function checkemail() {
    var email = document.getElementById("email").value;
    if(email=="")
    return false;
    let regex = /[^@][a-z A-Z 0-9]@gmail.com/;
    if (!regex.test(email)) {
        showalert("Invalid Email..Kindly check and enter again");
        document.getElementById("email").value = "";
        return false;
    }
    else
    return true;
}

function checkpswd() {
    var pswd = document.getElementById('password').value;
    if(pswd=="")
    return false;
    if (pswd.length < 8) {
        showalert("Password must contain atleast 8 characters");
        document.getElementById('password').value="";
        return false;
    }
    else {
        let regex = /[a-z]/;
        if (!regex.test(pswd)){
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("1");
            return false;
        }
         let regex1 = /[A-Z]/;
         if (!regex1.test(pswd)) {
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("2");
            return false;
        }
        let regex2 = /[0-9]/;
         if (!regex2.test(pswd)) {
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("3");
            return false;
        }
         let regex3 = /{!|@|#|%|&|_|~}{1,}/;
        // let regex3 = /[^a-zA-Z0-9\\,\\.\\;]/g;
         if (!regex3.test(pswd)) {
            showalert("Kindly check your password as password should contain alteast 8 characters including small characters , capital characters and special symbols");
            document.getElementById('password').value = "";
            console.log("4");
            return false;
        }
        else
        return true;
        
    }
}
function submitdetails(){
    let submitobj = [];
    console.log("outside submit details");
    let val = checkemail();
    if(val){
        console.log("inside submit details2");
        let val2 = checkpswd();
        if(val2){
            console.log("inside submit details3");
            let email = document.getElementById("email").value;
            let pswd = document.getElementById('password').value;
            console.log(`${email} + ${pswd}`);
            let submitstr = localStorage.getItem('submitstr');
            let check = false;
            if(submitstr==null){
                    submitobj.push([email,pswd]);
                    localStorage.setItem('submitstr', JSON.stringify(submitobj));
                    showalert("Email submitted successfully");
                    console.log("Email submitted successfully using null");
                }
                else{
                        submitobj = JSON.parse(localStorage.getItem('submitstr'));
                        
                        submitobj.forEach(element => {
                        if(element[0]===email){
                        showalert("already taken email");
                        console("already taken email");
                        document.getElementById("email").value = "";
                        document.getElementById('password').value="";
                        check = true;
                    }
                    console.log(element);
                });
                if(!check){
                        submitobj.push([email,pswd]);
                        localStorage.setItem('submitstr',JSON.stringify(submitobj));
                        showalert("Email submitted successfully");
                        console.log("Email submitted successfully");
                        console.log("Email submitted successfully using check");
                    }
                }
            }
    }
        }
function checkdetails(){
    let submitobj = [];
    console.log("outside check details");
    let email = document.getElementById("email").value;
    let pswd = document.getElementById('password').value;
    let val = checkemail();
    if(pswd=="")
    val = false;
    if(val){
        // console.log("inside check details2");
        // let val2 = checkpswd();
        // if(val2)
        // {
        console.log("inside check details");
        let submitstr = localStorage.getItem('submitstr');
        let check = false;
        // let check2= false;
        if(submitstr==null){
            showalert("This email has not benn registered yet..Kindly submit it first");
        }
        else{
            submitobj = JSON.parse(submitstr);
            // check2 = true;
        }
        submitobj.forEach(element => {
            console.log(element[0]+" "+element[1]);
            console.log(email+" "+pswd);
            if(element[0]===email && element[1]===pswd)
            {
                console.log("inside checking becomes true");    
                check = true;
                showalert("CORRECT CREDENTIALS");
                console.log("CORRECT CREDENTIALS")
            }
            
        });
       if(!check){
        showalert("INCORRECT CREDENTIALS OR THS EMAIL IS NOT YET REGISTERED....KINDLY CHECK AND DO OT AGAIN");
        console.log("incorrect ");
       }
    // }
    }
}

// utilities function/helper function
function showalert(msg) {
    document.getElementById('showmsg').innerText = msg;
}



