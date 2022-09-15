package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
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
    public void iClickOnProduct(String product){
        new WomenCategoryPage().clickOnTheProduct(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty){
        new ProductPage().changeQty(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) {
        new ProductPage().selectSize(size);

    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) {
        new ProductPage().selectColour(colour);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @And("^I see pop up will display$")
    public void iSeePopUpWillDisplay() {

    }

    @And("^I verify the message product successfully added to your shopping cart$")
    public void iVerifyTheMessageProductSuccessfullyAddedToYourShoppingCart() {
        String verifyMsg = new ProductPage().verifyTheMessageProductSuccessfullyAddedToYourShoppingCart();
        Assert.assertEquals(verifyMsg, "Product successfully added to your shopping cart");
    }

    @Then("^click on x button nad close the pop up$")
    public void clickOnXButtonNadCloseThePopUp() {
        new ProductPage().clickOnXButtonAndCloseThePopup();
    }
}
