class HomeScreen {

    get signUpBtn() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }
}

export default new HomeScreen();