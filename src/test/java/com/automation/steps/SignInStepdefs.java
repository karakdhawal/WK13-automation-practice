package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class SignInStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I verify that Authentication message is displayed$")
    public void iVerifyThatAuthenticationMessageIsDisplayed() {
        String authenticText = new SignInPage().verifyThatAuthenticationIsDisplayed();
        Assert.assertEquals(authenticText, "AUTHENTICATION");
    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username){
        new SignInPage().enterUsername(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password){
        new SignInPage().enterPassword(password);
    }

    @And("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I verify the error message \"([^\"]*)\"$")
    public void iVerifyTheErrorMessage(String errorMes) {
        String errorText = new SignInPage().verifytheErrorMessage();
        Assert.assertEquals(errorText, errorMes);

    }

    @And("^I enter emailid$")
    public void iEnterEmailid() {
        new SignInPage().enterEmailID();
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new SignInPage().enterPassword();
    }

    @Then("^i verify that sign out link is displayed$")
    public void iVerifyThatSignOutLinkIsDisplayed() {
        String signOutLink = new SignInPage().verifyThatSignOutLinkIsDisplayed();
        Assert.assertEquals(signOutLink, "Sign out");
    }

    @And("^I click on sign out Link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I verify sign in link displayed$")
    public void iVerifySignInLinkDisplayed() {
        String signInTextverify = new SignInPage().verifyThatSignInLinkDisplayed();
        Assert.assertEquals(signInTextverify, "Sign in");
    }
}

