/**
 * Class for Base page which is super class for all page class.
 **/
export default class BasePage {

    open(route){
        browser.url(route);
    }

    get memberMenu() { return $('button[data-test-id*="member-menu"]'); }
    get logoutBtn() { return $('button[data-test-id$="logout"]'); }
    get thanks_msg() { return $('h1'); }
    get backToHome() { return $('a[aria-label$="Home"]'); }

    logout() {
        this.memberMenu.waitForDisplayed();
        this.memberMenu.click();
        this.logoutBtn.waitForDisplayed();
        this.logoutBtn.click();
        return this.thanks_msg.waitForDisplayed();
    }

    navigateToHome() {
        this.backToHome.waitForDisplayed();
        this.backToHome.click();
        browser.refresh();
    }
}
