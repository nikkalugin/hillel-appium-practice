import { driver, expect } from '@wdio/globals'
import { randomUserEmail } from '../../../credentials/credentials';
import HomeScreen from '../../page-objects/screens/HomeScreen';
import SignUpForm from '../../page-objects/forms/SignUpForm';
import GarageScreen from '../../page-objects/screens/GarageScreen';

describe('Homework for Lection 18', () => {
    beforeEach(async () => {
        await driver.activateApp("com.hillelAuto");
        await HomeScreen.clickSignUpBtn();
    });

    afterEach(async () => {
        if (await GarageScreen.garageTitle.isDisplayed()) {
            await GarageScreen.openProfile();
            await GarageScreen.clickMenuItemByIndex(5);
        }
        await driver.terminateApp("com.hillelAuto");
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
        await SignUpForm.fillingValuesSignUpForm('123', 'TestLastName', 'test@test.com', 'QweQwe123!', 'QweQwe123!');
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
        await SignUpForm.fillingValuesSignUpForm('TestFirstName', '123', 'test@test.com', 'QweQwe123!', 'QweQwe123!');
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
        await SignUpForm.fillingValuesSignUpForm('TestFirstName', 'TestLastName', '123', 'QweQwe123!', 'QweQwe123!');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidEmailErrorMessage).toBeDisplayed();
    });

    it('Password value is invalid', async () => {
        await SignUpForm.fillingValuesSignUpForm('TestFirstName', 'TestLastName', 'test@test.com', '1', 'QweQwe123!');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.invalidPasswordErrorMessage).toBeDisplayed();
    });

    it('Passwords do nat match', async () => {
        await SignUpForm.fillingValuesSignUpForm('TestFirstName', 'TestLastName', 'test@test.com', 'QweQwe123!', 'QweQwe123');
        await SignUpForm.clickRegisterBtn();
        await expect(SignUpForm.passwordsDoNotMatchErrorMessage).toBeDisplayed();
    });

    it.only('Successful registration', async () => {
        await SignUpForm.fillingValuesSignUpForm('TestFirstName', 'TestLastName', randomUserEmail, 'QweQwe123!', 'QweQwe123!');
        await SignUpForm.clickRegisterBtn();
        await expect(GarageScreen.garageTitle).toBeDisplayed();
    });
});