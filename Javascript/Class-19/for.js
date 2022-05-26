const form = document.getElementById("signup");
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const passwordInput = document.getElementById('password');
const dateInput = document.getElementById('date');

const isEmpty = (input,errorid) =>{
    if(input.value === ''){
        document.getElementById(errorid).textContent= "Invalid,Try againd";        
        return false;
    }
    else{
        document.getElementById(errorid).textContent="";
        return true;
    }
};

hasMinCharacters = (input,errorid,minlength) => {
    if(input.value.length <= minlength){
        document.getElementById(errorid).textContent= "Invalid,Try againd";        
        return false;
    }
    else{
        document.getElementById(errorid).textContent="";
        return true;
    }
}

const valid= (input,errorid) => {
    let valid = false;
    const exist = isEmpty(input,errorid);
    switch (input.id) {
        case 'name':
            const hasMin = hasMinCharacters(input,errorid,4);
            valid = exist && hasMin;
            break;
        case 'surname':
            const hasMin1 = hasMinCharacters(input,errorid,4);
            valid = exist && hasMin1;
            break;
        case 'password':
            const hasMin2 = hasMinCharacters(input,errorid,8);
            valid = exist && hasMin1;
            break;
        case 'date':
            break;
        default:
            break;
    }
    return valid;
};

const submitFunction = (event) =>{
    event.preventDefault();
    const nameValid = valid(nameInput,"errorName");
    const surnameValid = valid(surnameInput,"errorSurname");
    const passwordValid = valid(passwordInput,"errorPassword");
    const dateValid = valid(dateInput,"errorDate");

    if(nameValid && surnameValid && passwordValid && dateValid){
        alert("Your inputs are valid :)");
    }

    console.log(event);
}

form.addEventListener('submit',submitFunction);