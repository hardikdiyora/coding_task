import loginPage from "../../pages/login/page";
import { user } from "../../config/credentials";

describe("Tests related to login page", () => {

    it("Verify user can able to login successfully using valid credentials", () => {
        loginPage.login(user);
        expect(loginPage.logout()).to.equal(true);
    });

});
