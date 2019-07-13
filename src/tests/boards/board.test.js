import loginPage from "../../pages/login/page";
import { user } from "../../config/credentials";
import { randomText } from "../../utils/general";


describe("Tests related to board", () => {

    let homePage;
    let boardsPage;
    let name = 'Board-' + randomText();

    before("Login to boards page", () => {
        homePage = loginPage.login(user);
        boardsPage = homePage.navigatesToBoards();
        expect(boardsPage.checkBoards()).to.equal(true);
    });

    it("Verify user can able to create a private board successfully", () => {
        boardsPage.addPrivateBoards(name);
        boardsPage.navigateToHome();
        expect(boardsPage.checkBoardIsPresent(name)).to.equal(true);
    });

    it("Verify user can able to open a private board successfully", () => {
        boardsPage.navigateToHome();
        expect(boardsPage.openBoard(name)).to.equal(true);
    });

    it("Verify user can able to add list inside a board successfully", () => {
        boardsPage.navigateToHome();
        boardsPage.openBoard(name);
        expect(boardsPage.addList('List-' + randomText())).to.equal(true);
    });

    after("Logout from trello platform", () => {
        expect(boardsPage.logout()).to.equal(true);
    });

});
