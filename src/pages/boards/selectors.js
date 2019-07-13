/**
 * Class for web elements of boards page.
 **/
export default class Selectors {
    static get allBoards() { return $('.all-boards'); }

    //create board
    static get addBoard() { return $('div[class$="mod-add"]'); }
    static get boardTitle() { return $('.subtle-input'); }
    static get createBtn() { return $('.primary'); }
    static get boardMenu() { return $('div[class$="board-menu"]'); }
    static get boardsTitle() { return $$('.board-tile-details-name'); }
    static get boardsLists() { return $('ul[class$="section-list"]'); }
    static get boardName() { return $('span[class$="board-header-btn-text"]'); }

    //create list
    static get createList() { return $('.placeholder'); }
    static get listInput() { return $('input[class="list-name-input"]'); }
    static get addListBtn() { return $('input[type="submit"]'); }
    static get listsTitle() { return $$('h2[class^="list-header"]'); }
}
