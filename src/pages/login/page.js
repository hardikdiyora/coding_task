import BasePage from "../base";
import homePage from "../home/page";
import _elements from "./selectors";

/**
 * Class for login page of trello platform
 **/
class LoginPage extends BasePage {

    open() {
        super.open('/login');
    }

    /***
     * To login into platform.
     *
     * @param email The email of the user.
     * @param password The password of the user
     * @returns {HomePage} return HomePage object if it successful.
     */
    login({email, password}){
        this.open();
        this.fillLoginFormAndSubmit(email, password);
        return _elements.header.waitForDisplayed() ? homePage : this;
    }

    fillLoginFormAndSubmit(email, password) {
        _elements.username.setValue(email);
        _elements.password.setValue(password);
        _elements.loginBtn.click();
        return this;
    }
}

export default new LoginPage();
