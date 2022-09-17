$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccountPage.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6113321500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill all mandetory fields",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify message my account",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 56417300,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3253284700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcStepdefs.iEnterEmailAddress()"
});
formatter.result({
  "duration": 85285200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcStepdefs.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 53754800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcStepdefs.iFillAllMandetoryFields()"
});
formatter.result({
  "duration": 11763048500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 33074700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcStepdefs.iVerifyMessageMyAccount()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.after({
  "duration": 655208200,
  "status": "passed"
});
formatter.uri("signinPage.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In Page Test",
  "description": "",
  "id": "sign-in-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5489406900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to sign in page successfully",
  "description": "",
  "id": "sign-in-page-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify that Authentication message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4778907700,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iVerifyThatAuthenticationMessageIsDisplayed()"
});
formatter.result({
  "duration": 34013800,
  "status": "passed"
});
formatter.after({
  "duration": 655391100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify the Error Message with invalie credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 16,
      "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 17,
      "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 18,
      "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 19,
      "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 20,
      "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4365163700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the Error Message with invalie credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2626853600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 60830100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 78388800,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1750865000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "SignInStepdefs.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 27633200,
  "status": "passed"
});
formatter.after({
  "duration": 613693100,
  "status": "passed"
});
formatter.before({
  "duration": 5106659100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the Error Message with invalie credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3077191800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 82265300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 61173500,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2690834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "SignInStepdefs.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 33303600,
  "status": "passed"
});
formatter.after({
  "duration": 645158300,
  "status": "passed"
});
formatter.before({
  "duration": 5903218500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the Error Message with invalie credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4525495300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 64784500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 64369500,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 932540100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "SignInStepdefs.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 24344900,
  "status": "passed"
});
formatter.after({
  "duration": 617767900,
  "status": "passed"
});
formatter.before({
  "duration": 5252432900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the Error Message with invalie credentials",
  "description": "",
  "id": "sign-in-page-test;verify-the-error-message-with-invalie-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2126454300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 68086100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 72612700,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1483602800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "SignInStepdefs.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 24003900,
  "status": "passed"
});
formatter.after({
  "duration": 611768400,
  "status": "passed"
});
formatter.before({
  "duration": 6128806000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter emailid",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "i verify that sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3755457400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iEnterEmailid()"
});
formatter.result({
  "duration": 76074500,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iEnterPassword()"
});
formatter.result({
  "duration": 68253300,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8163976600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iVerifyThatSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 28838600,
  "status": "passed"
});
formatter.after({
  "duration": 634011800,
  "status": "passed"
});
formatter.before({
  "duration": 6512811100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter emailid",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify sign in link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6496444800,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iEnterEmailid()"
});
formatter.result({
  "duration": 71396900,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iEnterPassword()"
});
formatter.result({
  "duration": 70820000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignInButton()"
});
formatter.result({
  "duration": 12897935000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 10494430200,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepdefs.iVerifySignInLinkDisplayed()"
});
formatter.result({
  "duration": 31075700,
  "status": "passed"
});
formatter.after({
  "duration": 629218500,
  "status": "passed"
});
formatter.uri("womenCategoryPage.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7158218200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user should navigate to women category page successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify women text",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnWomenTab()"
});
formatter.result({
  "duration": 4846652300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iVerifyWomenText()"
});
formatter.result({
  "duration": 34285400,
  "status": "passed"
});
formatter.after({
  "duration": 628016400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the message product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on x button nad close the pop up",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8162134200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the message product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on x button nad close the pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnWomenTab()"
});
formatter.result({
  "duration": 3140664900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStepdefs.iClickOnProduct(String)"
});
formatter.result({
  "duration": 7111750900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStepdefs.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1099986800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectSize(String)"
});
formatter.result({
  "duration": 1106748100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectColour(String)"
});
formatter.result({
  "duration": 1048254700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1077974400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 4040310400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.clickOnXButtonNadCloseThePopUp()"
});
formatter.result({
  "duration": 741072200,
  "status": "passed"
});
formatter.after({
  "duration": 640773800,
  "status": "passed"
});
formatter.before({
  "duration": 9404875500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the message product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on x button nad close the pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5987368300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStepdefs.iClickOnProduct(String)"
});
formatter.result({
  "duration": 5330241900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStepdefs.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1099994100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectSize(String)"
});
formatter.result({
  "duration": 1097859000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectColour(String)"
});
formatter.result({
  "duration": 21057487100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1072322500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 4052345800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.clickOnXButtonNadCloseThePopUp()"
});
formatter.result({
  "duration": 52047700,
  "status": "passed"
});
formatter.after({
  "duration": 633259400,
  "status": "passed"
});
formatter.before({
  "duration": 7103411600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the message product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on x button nad close the pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnWomenTab()"
});
formatter.result({
  "duration": 6224750200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStepdefs.iClickOnProduct(String)"
});
formatter.result({
  "duration": 5440206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStepdefs.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1110086300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectSize(String)"
});
formatter.result({
  "duration": 1053007800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectColour(String)"
});
formatter.result({
  "duration": 1040077000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1068552900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 4043711300,
  "error_message": "java.lang.AssertionError: expected [] but found [Proceed to checkout]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.automation.steps.WomenCategoryStepdefs.iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart(WomenCategoryStepdefs.java:65)\r\n\tat ✽.And I verify the message product successfully added to your shopping cart(womenCategoryPage.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.clickOnXButtonNadCloseThePopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 834807300,
  "status": "passed"
});
formatter.before({
  "duration": 5278488400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the message product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on x button nad close the pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnWomenTab()"
});
formatter.result({
  "duration": 4678713900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStepdefs.iClickOnProduct(String)"
});
formatter.result({
  "duration": 116382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStepdefs.iChangeQuantity(String)"
});
formatter.result({
  "duration": 21071670400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DHAWALHP\u0027, ip: \u0027192.168.0.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f37ba4f1c1380c6068a0b9b2ff13f2aa, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhawa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54344}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54344/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f37ba4f1c1380c6068a0b9b2ff13f2aa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.clear(Unknown Source)\r\n\tat com.automation.utility.Utility.clearValue(Utility.java:363)\r\n\tat com.automation.pages.ProductPage.changeQty(ProductPage.java:73)\r\n\tat com.automation.steps.WomenCategoryStepdefs.iChangeQuantity(WomenCategoryStepdefs.java:33)\r\n\tat ✽.And I change quantity \"2\"(womenCategoryPage.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryStepdefs.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStepdefs.iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStepdefs.clickOnXButtonNadCloseThePopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 842085900,
  "status": "passed"
});
});