import * as EmailValidator from 'email-validator';
import Validator, { error } from 'is_js'

function validation(data) {
    let errors = {}
    let valid = true;


    if (!EmailValidator.validate(data.email)) {
        errors.email = "Please enter a valid Email ID!"
        valid = false;
    }

    if (Validator.empty(data.email)) {
        errors.email = "Please enter your Email ID!"
    }

    if (Validator.empty(data.message)) {
        errors.message = "Please enter your message!"
    }
    
    if(Validator.empty(data.name)){
        errors.name = "Please enter your name!"
    }
    
    return {
        isValid: valid,
        errors: errors
    };
}

export default validation;