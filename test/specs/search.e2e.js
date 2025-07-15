import { $, $$ } from '@wdio/globals'

// Завдання:
describe('Homework 15 lection', () => {
    // Знайдіть будь-який елемент у тесті, використовуючи Accessibility ID
    it('Search element by using Accessibility ID', async () => {
        const osBtn = await $('~OS');
        await expect(osBtn).toBeDisplayed();
    });

    // Знайдіть будь-який елемент у тесті, використовуючи Resource ID
    it('Search element by using Resource ID', async () => {
        const fullScreen = await $('id=android:id/decor_content_parent');
        await expect(fullScreen).toBeDisplayed();
    });

    // Знайдіть будь-який елемент у тесті, використовуючи Class Name
    it('Search element by using Class Name', async () => {
        const footerScroll = await $('android.view.View');
        await expect(footerScroll).toBeDisplayed();
    });

    // Знайдіть будь-який елемент у тесті, використовуючи XPath
    it('Search element by using XPath', async () => {
        const accessibilityBtn = await $('//android.widget.TextView[@content-desc="Accessibility"]');
        await expect(accessibilityBtn).toBeDisplayed();
    });

    // Знайдіть будь-який елемент у тесті, використовуючи UiSelector
    it('Search element by using UiSelector', async () => {
        const graphicsBtn = await $('android=new UiSelector().text("Graphics")');
        await expect(graphicsBtn).toBeDisplayed();
    });

    // Виконайте пошук декількох елементів одночасно за допомогою $$
    it('Search elements by using $$', async () => {
        const elements = await $$('android.widget.TextView');
        await expect(elements).toBeElementsArrayOfSize(13);
    });
});
