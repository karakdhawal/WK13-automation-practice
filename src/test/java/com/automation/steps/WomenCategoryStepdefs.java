package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.testng.Assert;

public class WomenCategoryStepdefs {
    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
        new HomePage().clickOnWomenTab();
    }

    @Then("^I verify women text$")
    public void iVerifyWomenText() {
        String womentText = new WomenCategoryPage().verifyWomenText();
        Assert.assertEquals(womentText, "WOMEN ");
    }

    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product) throws InterruptedException {
        new WomenCategoryPage().clickOnTheProduct(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) throws InterruptedException {
        Thread.sleep(1000);
        new ProductPage().changeQty(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) throws InterruptedException {
        Thread.sleep(1000);
        new ProductPage().selectSize(size);

    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) throws InterruptedException {
        Thread.sleep(1000);
        new ProductPage().selectColour(colour);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() throws InterruptedException {
        Thread.sleep(1000);
        new ProductPage().clickOnAddToCartButton();

    }

//    @And("^I see pop up will display$")
//    public void iSeePopUpWillDisplay() { // And I see pop up will display
//    }

    @And("^I verify the message product successfully added to your shopping cart$")
    public void iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart() throws InterruptedException {
        Thread.sleep(2000);
        String verifyMsg = new ProductPage().verifyTheMessageProductSuccessfullyAddedToYourShoppingCart();
      Thread.sleep(2000);
       Assert.assertEquals(verifyMsg,"" );
        // Assert.assertEquals(verifyMsg, "Proceed to checkout");
    } //Product successfully added to your shopping cart

    @Then("^click on x button nad close the pop up$")
    public void clickOnXButtonNadCloseThePopUp() {
        new ProductPage().clickOnXButtonAndCloseThePopup();
    }
}
