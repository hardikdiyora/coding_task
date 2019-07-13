### **This repo shows the UI Automation with WebDriverIO.**

**- Testing Platform:** trello.com

**- Before start please read the pdf document :** intro.pdf

#### **Following Test cases are automated:**
  

**1.	Verify user can able to create a private board successfully**
~~~~
Test Description:
As a user, I should able to create a private board into the platform.

Pre-requisite:
- User should already register in trello.com.
- User is already navigate to /boards page.

Steps:
1. When user clicks on "Create new board" tile on Boards page.
2. Then in the pop up box user can able to enter new board name.
3. And When user click on "Create Board".
4. It will opens that new board.
5. Navigate to Home page and user can able to see new board is listed.
~~~~

**2.	Verify user can able to open a private board successfully**
~~~~
Test Description:
As a user, I should able to open corresponding board into the platform.

Pre-requisite:
- User should already register in trello.com.
- User is already navigate to /boards page.
- User is already having baord name.

Steps:
1. When user clicks on corresponding board name from Boards page.
2. It will opens that board.
~~~~

**3.	Verify user can able to add list inside a board successfully**
~~~~
Test Description:
As a user, I should able to add a list inside a board.

Pre-requisite:
- User should already register in trello.com.
- User is already navigate to /boards page.
- User is already having baord name.

Steps:
1. When user clicks on corresponding board name from Boards page.
2. It will opens that board.
3. When user clicks on "Add List" tile inside board.
4. And user can able give list name.
5. When user clicks on "Add List" button.
6. Then list is successfully created and user can see on board.
~~~~

