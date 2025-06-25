class GarageScreen {

    get garageTitle() {
        return $('//android.widget.TextView[@text="Garage"]');
    }

    get profileBtn() {
        return $('//android.widget.TextView[@text="My Profile"]');
    }

    async clickMenuItemByIndex(index) {
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

    async openProfile() {
        await this.profileBtn.click();
    }

    async clickLogoutBtn() {
        await this.clickMenuItemByIndex(5);
    }
}

export default new GarageScreen();