package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage (){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy (xpath = "//div[@class='header_user_info']/a[1]")
    WebElement siginLink;

    @CacheLookup
    @FindBy (xpath = "//a[@title='Women']")
    WebElement womenTab;

    public void clickOnWomenTab (){
        clickOnElement(womenTab);
    }
    public void clickOnSignInLink (){
        clickOnElement(siginLink);
    }
}
