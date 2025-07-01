import { selectMenuItemByIndex } from "../../helpers/actions";
import { myProfileMenuLocation } from "../../test-data/coordinates";

class GarageScreen {

    get garageTitle() {
        return $('//android.widget.TextView[@text="Garage"]');
    }

    get profileBtn() {
        return $('~My profile');
    }

    async clickMenuItemByIndex(index) {
        await selectMenuItemByIndex(index, 6, myProfileMenuLocation)
    };

    async openProfile() {
        await this.profileBtn.click();
    }

    async logOutIfLoggedIn() {
        if (await this.garageTitle.isDisplayed()) {
            await this.openProfile();
            await this.clickMenuItemByIndex(5);
        }
    }
}

export default new GarageScreen();