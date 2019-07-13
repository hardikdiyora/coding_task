import BasePage from "../base";
import _elements from "./selectors";


/**
 * Class for boards page for trello platform.
 **/
class BoardsPage extends BasePage {

    checkBoards() {
       return _elements.allBoards.waitForDisplayed();
    }

    /***
     * To add the private board.
     *
     * @param name The name of the board.
     * @returns {boolean} returns true if board menu displays.
     */
    addPrivateBoards(name) {
        _elements.addBoard.click();
        _elements.boardTitle.setValue(name);
        _elements.createBtn.click();
        return _elements.boardMenu.waitForDisplayed();
    }

    /***
     * To check whether respective board is present.
     *
     * @param name The name of the board.
     * @returns {boolean} returns true if board is present
     */
    checkBoardIsPresent(name) {
        _elements.boardsLists.waitForDisplayed();
        return _elements.boardsTitle.findIndex(item => {
            return item.getText() === name;
        }) >= 0;
    }

    /***
     * To open the board.
     *
     * @param name The name of the board.
     * @returns {boolean} returns true if opened board is same as requested.
     */
    openBoard(name) {
        if(this.checkBoardIsPresent(name)) {
            $(`div[title=${name}]`).click();
            _elements.boardMenu.waitForDisplayed();
            return _elements.boardName.getText() === name;
        } else {
            return false;
        }
    }

    /***
     * To add a list inside the board.
     *
     * @param name The name of the list.
     */
    addList(name) {
        let total_list = _elements.listsTitle.length;
        _elements.createList.click();
        browser.waitUntil(() => {
            return _elements.listInput.waitForEnabled()
        }, 5000, 'Expected list input field should enable within 5s', 500);
        _elements.listInput.setValue(name);
        _elements.addListBtn.click();
        return  browser.waitUntil(() => {
            return _elements.listsTitle.length === total_list+1;
        }, 5000, 'Expected list should added within 5s', 500);
    }
}

export default new BoardsPage();
