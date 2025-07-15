import { $, $$ } from '@wdio/globals'

// Завдання:
describe('Homework 16 lection', () => {

    // Завдання 1:
    it('1st Task', async () => {
        // Виконайте перехід на екран App→Search→Invoke Search
        await $('~App').click();
        await $('~Search').click();
        await $('~Invoke Search').click();

        // Перевірте, що дійсно відкритий потрібний екран
        await expect($('//android.widget.TextView[@text="App/Search/Invoke Search"]')).toBeDisplayed();

        // Введіть будь-який текст у поле Prefill query
        await $('id=io.appium.android.apis:id/txt_query_prefill').setValue('Test Prefill query');

        // Введіть будь-який текст у поле App Data
        await $('id=io.appium.android.apis:id/txt_query_appdata').setValue('Test App Data');

        // Перевірте, що обидва поля мають введений текст.
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText('Test Prefill query');
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveAttr('text', 'Test Prefill query');

        await expect($('id=io.appium.android.apis:id/txt_query_appdata')).toHaveText('Test App Data');
        await expect($('id=io.appium.android.apis:id/txt_query_appdata')).toHaveAttr('text', 'Test App Data');
        
        // Очистіть перше поле і перевірте, що воно пусте
        await $('id=io.appium.android.apis:id/txt_query_prefill').clearValue();
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).not.toHaveText('Test Prefill query'); // or toHaveText('');
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).not.toHaveAttr('text', 'Test Prefill query'); // or toHaveAttr('text', '');
    });

    // Завдання 2:
    it.only('2nd Task', async () => {
        // Виконайте перехід на екран Views→Controls→Будь-яка тема
        await $('~Views').click();
        await $('~Controls').click();
        await $('~5. Custom Theme').click();

        // Перевірте, що відповідний екран відкритий
        await expect($('//android.widget.TextView[@resource-id="android:id/title"]')).toBeDisplayed();

        // Чекніть елемень Checkbox 1 та RadioButton 2
        await $('~Checkbox 1').click();
        await $('~RadioButton 2').click();

        // Перевірте, що Checkbox 1 та RadioButton 2 - чекнуті
        await expect($('~Checkbox 1')).toHaveAttr('checked', 'true');
        await expect($('~RadioButton 2')).toHaveAttr('checked', 'true');

        // Оберіть значення Mars у дропдауні
        await $('android.widget.Spinner').click();
        await $('android=new UiSelector().text("Mars")').click();
        await expect($('//android.widget.TextView[@resource-id="android:id/text1"]')).toHaveText('Mars');
    });
});