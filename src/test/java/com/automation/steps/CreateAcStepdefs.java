package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import gherkin.lexer.Th;
import org.testng.Assert;

public class CreateAcStepdefs {
    @And("^I enter email address$")
    public void iEnterEmailAddress() {
        new SignInPage().enterEmailAddress();
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().clickOnCreateAnAccountButton();
    }

    @And("^I fill all mandetory fields$")
    public void iFillAllMandetoryFields() throws InterruptedException {
        new CreateAccountPage().enterFirstName();
        Thread.sleep(500);
        new CreateAccountPage().enterLastName();
        Thread.sleep(500);
        new CreateAccountPage().enterPassword();
        Thread.sleep(1000);
        new CreateAccountPage().enterAddressField();
        Thread.sleep(500);
        new CreateAccountPage().enterCity();
        Thread.sleep(500);
        new CreateAccountPage().selectState();
        Thread.sleep(1000);
        new CreateAccountPage().enterPostcode();
        Thread.sleep(500);
        new CreateAccountPage().enterMobilePhoneNumber();
        Thread.sleep(500);
        new CreateAccountPage().clickOnRegisterButton();
    }

    @And("^I click on Register Button$")
    public void iClickOnRegisterButton() {
        String actualMes = new CreateAccountPage().verifyMessageMyAccount();
        Assert.assertEquals(actualMes, "MY ACCOUNT");
    }

    @Then("^I verify message my account$")
    public void iVerifyMessageMyAccount() {
    }
}
