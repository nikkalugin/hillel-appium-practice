import { expect } from '@wdio/globals'
import { randomUserEmail, users } from '../../../credentials/credentials';
import HomeScreen from '../../page-objects/screens/HomeScreen';
import SignUpForm from '../../page-objects/forms/SignUpForm';
import GarageScreen from '../../page-objects/screens/GarageScreen';
import { activateApp, terminateApp } from '../../helpers/appStatesHellper';

describe('Homework for Lection 18', () => {
    beforeEach(async () => {
        await activateApp("com.hillelAuto");
        await HomeScreen.clickSignUpBtn();
    });

    afterEach(async () => {
        await GarageScreen.logOutIfLoggedIn();
        await terminateApp("com.hillelAuto");
    });

    it('All fields are empty', async () => {
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.nameRequiredErrorMessage).toBeDisplayed();
        await expect(SignUpForm.lastNameRequiredErrorMessage).toBeDisplayed();
        await expect(SignUpForm.emailRequiredErrorMessage).toBeDisplayed();
        await expect(SignUpForm.passwordRequiredErrorMessage).toBeDisplayed();
        await expect(SignUpForm.reenterPasswordRequiredErrorMessage).toBeDisplayed();
    });

    it('Name value is invalid', async () => {
        await SignUpForm.fillingValuesSignUpForm('123', users.userRegistration.lastName, users.userRegistration.email, users.userRegistration.password, users.userRegistration.password);
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidNameErrorMessage).toBeDisplayed();
    });

    it('Short "Name" value', async () => {
        await SignUpForm.fillingNameField('q');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.shortOrLongNameErrorMessage).toBeDisplayed();
    });

    it('Long "Name" value', async () => {
        await SignUpForm.fillingNameField('qweqwe123qqweqwe123q1');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.shortOrLongNameErrorMessage).toBeDisplayed();
    });

    it('Last Name value is invalid', async () => {
        await SignUpForm.fillingValuesSignUpForm(users.userRegistration.name, '123', users.userRegistration.email, users.userRegistration.password, users.userRegistration.password);
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidLastNameErrorMessage).toBeDisplayed();
    });

    it('Short "Last Name" value', async () => {
        await SignUpForm.fillingLastNameField('q');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.shortOrLongLastNameErrorMessage).toBeDisplayed();
    });

    it('Long "Last Name" value', async () => {
        await SignUpForm.fillingLastNameField('qweqwe123qqweqwe123q1');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.shortOrLongLastNameErrorMessage).toBeDisplayed();
    });

    it('Email value is invalid', async () => {
        await SignUpForm.fillingValuesSignUpForm(users.userRegistration.name, users.userRegistration.lastName, '123', users.userRegistration.password, users.userRegistration.password);
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidEmailErrorMessage).toBeDisplayed();
    });

    it('Password value is invalid', async () => {
        await SignUpForm.fillingValuesSignUpForm(users.userRegistration.name, users.userRegistration.lastName, users.userRegistration.email, '1', users.userRegistration.password);
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidPasswordErrorMessage).toBeDisplayed();
    });

    it('Passwords do nat match', async () => {
        await SignUpForm.fillingValuesSignUpForm(users.userRegistration.name, users.userRegistration.lastName, users.userRegistration.email, users.userRegistration.password, 'QweQwe123');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.passwordsDoNotMatchErrorMessage).toBeDisplayed();
    });

    it.only('Successful registration', async () => {
        await SignUpForm.fillingValuesSignUpForm(users.userRegistration.name, users.userRegistration.lastName, randomUserEmail, users.userRegistration.password, users.userRegistration.password);
        await SignUpForm.clickRegisterBtn();
        await expect(GarageScreen.garageTitle).toBeDisplayed();
    });
});