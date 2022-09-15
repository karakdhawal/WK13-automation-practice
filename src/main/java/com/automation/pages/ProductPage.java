package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//input[@id='quantity_wanted']")
    WebElement qtyBox;

    @CacheLookup
    @FindBy (xpath = "//select[@id='group_1']")
    WebElement sizeDropDown;
    @CacheLookup
    @FindBy (xpath = "//div[@class='box-cart-bottom']/div[1]/p[1]/button[1]/span[1]")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy (xpath = "//div[@class='clearfix']/div[1]/h2[1]")
    WebElement shoppingCartText;

    @CacheLookup
    @FindBy (xpath = "//span[@class='cross']")
    WebElement cross;

    public void clickOnXButtonAndCloseThePopup (){
        clickOnElement(cross);
    }

    public String verifyTheMessageProductSuccessfullyAddedToYourShoppingCart (){
        return getTextFromElement(shoppingCartText);
    }

    public void clickOnAddToCartButton (){
        clickOnElement(addToCartButton);
    }

    @CacheLookup
    @FindBy (xpath = "//div[@id='attributes']/fieldset[2]/div[1]/ul[1]")
    List<WebElement> colourList;

    public void selectColour (String colour){
        for (WebElement listClr : colourList){
            if(listClr.getText().equalsIgnoreCase(colour)){
                clickOnElement(listClr);
                break;
            }
        }
    }
    public void selectSize (String size){
        selectByValueFromDropDown(sizeDropDown, size);
    }

    public void changeQty (String qty) {
        clearValue(qtyBox);
        sendTextToElement(qtyBox, qty);
    }



}
