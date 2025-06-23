import { $, driver, expect } from '@wdio/globals'
import { randomUserEmail } from '../../credentials/credentials';

describe('Homework for Lection 18', () => {
    const clickMenuItemByIndex = async (index) => {
        const { width: screenWidth, height: screenHeight } = await driver.getWindowRect();
        const menuTopY = Math.floor(screenHeight * 0.07);
        const menuBottomY = Math.floor(screenHeight * 0.33);
        const menuLeftX = Math.floor(screenWidth * 0.61);
        const menuRightX = Math.floor(screenWidth * 0.98);

        const menuItemHeight = Math.floor((menuBottomY - menuTopY) / 6);
        const clickX = menuLeftX + Math.floor((menuRightX - menuLeftX) / 2);
        const clickY = menuTopY + index * menuItemHeight + Math.floor(menuItemHeight / 2);
        await driver.action('pointer').move(clickX, clickY)
            .down()
            .pause(100)
            .up()
            .perform();
    };

    beforeEach(async () => {
        await driver.activateApp("com.hillelAuto");
        await $('//android.widget.TextView[@text="Sign up"]').click();
    });

    afterEach(async () => {
        if (await $('//android.widget.TextView[@text="Garage"]').isDisplayed()) {
            await $('//android.widget.TextView[@text="My Profile"]').click();
            await clickMenuItemByIndex(5);
        }
        await driver.terminateApp("com.hillelAuto");
    });

    it('All fields are empty', async () => {
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Name is required"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="Last name is required"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="Email is required"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="Password is required"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="Re-enter Password is required"]')).toBeDisplayed();
    });

    it('Name value is invalid', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('123');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('TestLastName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue('test@test.com');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Name is invalid"]')).toBeDisplayed();
    });

    it('Short "Name" value', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('q');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Name has to be from 2 to 20 characters long"]')).toBeDisplayed();
    });

    it('Long "Name" value', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('qweqwe123qqweqwe123q1');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Name has to be from 2 to 20 characters long"]')).toBeDisplayed();
    });

    it('Last Name value is invalid', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('TestFirstName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('123');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue('test@test.com');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Last Name is invalid"]')).toBeDisplayed();
    });

    it('Short "Last Name" value', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('q');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Last name has to be from 2 to 20 characters long"]')).toBeDisplayed();
    });

    it('Long "Last Name" value', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('qweqwe123qqweqwe123q1');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Last name has to be from 2 to 20 characters long"]')).toBeDisplayed();
    });

    it('Email value is invalid', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('TestFirstName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('TestLastName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue('123');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Email is not valid"]')).toBeDisplayed();
    });

    it('Password value is invalid', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('TestFirstName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('TestLastName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue('test@test.com');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('1');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"]')).toBeDisplayed();
    });

    it.only('Passwords do nat match', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('TestFirstName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('TestLastName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue('test@test.com');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Passwords do not match"]')).toBeDisplayed();
    });

    it('Successful registration', async () => {
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[1]').setValue('TestFirstName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[2]').setValue('TestLastName');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[3]').setValue(randomUserEmail);
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[4]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Name"]/following-sibling::android.widget.EditText[5]').setValue('QweQwe123!');
        await $('//android.widget.TextView[@text="Register"]').click();
        await expect($('//android.widget.TextView[@text="Garage"]')).toBeDisplayed();
    });
});