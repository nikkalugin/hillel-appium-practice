import { $, $$ } from '@wdio/globals'

// Завдання:
describe('Homework 17 lection', () => {

    beforeEach(async () => {
        driver.activateApp('io.appium.android.apis');
    });

    afterEach(async () => {
        driver.terminateApp('io.appium.android.apis');
    });

    // Завдання 1: Виконайте скрол до самого низу екрану Views(до елемента WebView3) використовуючи скрол по координатах
    it('1st Task', async () => {
        await $('~Views').click();
        while (!await $('~WebView3').isDisplayed()) {
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 500, y: 2000 },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 500 },
                        { type: 'pointerMove', duration: 500, x: 500, y: 200 },
                        { type: 'pointerUp', button: 0 }
                    ]
                }
            ]);
        }
    });

    // Завдання 2: Виконайте скрол до самого низу екрану Views(до елемента WebView3) використовуючи скрол до елементу
    it('2nd Task', async () => {
        await $('~Views').click();
        const webView3 = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("WebView3"));`);
    });
});