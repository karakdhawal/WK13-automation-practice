package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage (){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy (xpath = "//span[@class='cat-name']")
    WebElement womenText;

    @CacheLookup
    @FindBy (xpath = "//a[@class='product-name']")
    List<WebElement> productlist;

    public void clickOnTheProduct (String product) throws InterruptedException {
        for (WebElement listPrd : productlist){
            if (listPrd.getText().equalsIgnoreCase(product)){
                Thread.sleep(2000);
                listPrd.click();
                break;
            }
        }
    }
    public String verifyWomenText (){
        return getTextFromElement(womenText);
    }


}


