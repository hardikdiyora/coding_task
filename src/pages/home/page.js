import BasePage from "../base";
import _elements from "./selectors";
import boardsPage from "../boards/page";


/**
 * Class for main landing page for trello platform.
 **/
class HomePage extends BasePage {
    open() {
        super.open('/');
    }

    navigatesToBoards() {
        _elements.boardsLink.waitForDisplayed();
        _elements.boardsLink.click();
        return boardsPage;
    }
}

export default new HomePage();
