class SignUpForm {

    get nameField() {
        return $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]');
    }

    get lastNameField() {
        return $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]');
    }

    get emailField() {
        return $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]');
    }

    get passwordField() {
        return $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]');
    }

    get reenterPasswordField() {
        return $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]');
    }

    get registerBtn() {
        return $('//android.widget.TextView[@text="Register"]');
    }

    get nameRequiredErrorMessage() {
        return $('//android.widget.TextView[@text="Name is required"]');
    }

    get lastNameRequiredErrorMessage() {
        return $('//android.widget.TextView[@text="Last name is required"]');
    }

    get emailRequiredErrorMessage() {
        return $('//android.widget.TextView[@text="Email is required"]');
    }

    get passwordRequiredErrorMessage() {
        return $('//android.widget.TextView[@text="Password is required"]');
    }

    get reenterPasswordRequiredErrorMessage() {
        return $('//android.widget.TextView[@text="Re-enter Password is required"]');
    }

    get invalidNameErrorMessage() {
        return $('//android.widget.TextView[@text="Name is invalid"]');
    }

    get shortOrLongNameErrorMessage() {
        return $('//android.widget.TextView[@text="Name has to be from 2 to 20 characters long"]');
    }

    get invalidLastNameErrorMessage() {
        return $('//android.widget.TextView[@text="Last Name is invalid"]');
    }

    get shortOrLongLastNameErrorMessage() {
        return $('//android.widget.TextView[@text="Last name has to be from 2 to 20 characters long"]');
    }

    get invalidEmailErrorMessage() {
        return $('//android.widget.TextView[@text="Email is not valid"]');
    }

    get invalidPasswordErrorMessage() {
        return $('//android.widget.TextView[@text="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"]');
    }

    get passwordsDoNotMatchErrorMessage() {
        return $('//android.widget.TextView[@text="Passwords do not match"]');
    }

    async clickRegisterBtn() {
        await this.registerBtn.click();
    }

    async fillingNameField(name) {
        await this.nameField.setValue(name);
    }

    async fillingLastNameField(lastName) {
        await this.lastNameField.setValue(lastName);
    }

    async fillingValuesSignUpForm(name, lastName, email, password, reenterPassword) {
        await this.nameField.setValue(name);
        await this.lastNameField.setValue(lastName);
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.reenterPasswordField.setValue(reenterPassword);
    }
}

export default new SignUpForm();