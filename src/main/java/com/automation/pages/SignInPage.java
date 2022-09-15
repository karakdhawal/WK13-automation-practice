package com.automation.pages;

import com.automation.utility.Utility;
import cucumber.api.java.zh_cn.假如;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage () {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//div[@id='center_column']/h1[1]")
    WebElement authenticationText;

    @CacheLookup
    @FindBy (xpath = "//input[@id='email']")
    WebElement email;

    @CacheLookup
    @FindBy (xpath = "//input[@id='passwd']")
    WebElement passwd;

    @CacheLookup
    @FindBy (xpath = "//button[@id='SubmitLogin']")
    WebElement signinbutton;

    @CacheLookup
    @FindBy (xpath = "//div[@class='alert alert-danger']/ol[1]/li[1]")
    WebElement errorMes;

    @CacheLookup
    @FindBy (xpath = "//input[@id='email']")
    WebElement emailfield;

    @CacheLookup
    @FindBy (xpath = "//input[@id='passwd']")
    WebElement passwordfield;

    @CacheLookup
    @FindBy (xpath = "//a[@class='logout']")
    WebElement logOutText;

    @CacheLookup
    @FindBy (xpath = "//a[@class='login']")
    WebElement signInText;

    @CacheLookup
    @FindBy (xpath = "//input[@id='email_create']")
    WebElement emailaddfieldcreateAc;

    @CacheLookup
    @FindBy (xpath = "//button[@id='SubmitCreate']/span")
    WebElement createAnAc;

    public void clickOnCreateAnAccountButton (){
        clickOnElement(createAnAc);
    }
    public void enterEmailAddress (){
        Random randomNum = new Random();
        int randomgenerator = randomNum.nextInt(1000);
        sendTextToElement(emailaddfieldcreateAc, "lorduk"+randomgenerator+"@gmail.com");
    }

    public String verifyThatSignInLinkDisplayed (){
        return getTextFromElement(signInText);
    }

    public void clickOnSignOutLink (){
        clickOnElement(logOutText);
    }
    public String verifyThatSignOutLinkIsDisplayed (){
        return getTextFromElement(logOutText);
    }

    public void enterPassword (){
        sendTextToElement(passwordfield, "123456");
    }
    public void enterEmailID (){
        sendTextToElement(emailfield, "lorduk@gmail.com");
    }
    public String verifytheErrorMessage (){
        return getTextFromElement(errorMes);
    }

    public void clickOnSignInButton (){
        clickOnElement(signinbutton);
    }

    public void enterPassword (String password){
        sendTextToElement(passwd, password);
    }

    public void enterUsername (String username){
        sendTextToElement(email, username);
    }

    public String verifyThatAuthenticationIsDisplayed (){
        return getTextFromElement(authenticationText);
    }
}
