const { expect } = require("chai");

describe('Basic xpath locator strategy', () => {
    it.only('Verify forgot password on messenger takes user to Find Your Account page', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Messenger link
         * 3. Click on 'Forgot you password?'
         * 4. Verify user lands on 'Find Your Account' page 
         */
        
        // 1. Launch facebook.com
        await browser.url('https://wwww.facebook.com/');

        await browser.pause(4000);

        // 2. Click on Messenger link
        // Go to inspect find the messenger(hyperlink) tag, use the locator strategies Table and a-tag is also known as link-tag 
        // Use Code to find WebElement: const webElement = await $('=Link text');
        const messengerLinkElement = await $('//a[@title="Check out Messenger."]');
        await messengerLinkElement.click();

        await browser.pause(3000);

        //3. Click on 'Forgot you password?'
        // Use code to find link WebElement: const webElement = await $('*=partial link text');
        const fypLinkElement = await $('span*=your password?');
        await fypLinkElement.click();

        await browser.pause(3000);

        //3B: Click on Go to Facebook.com
        const fbLinkElement = await $('span*=Facebook.com');
        await fbLinkElement.click();
        
        await browser.pause(3000);

        //* 4. Verify user lands on 'Forgotten your password' page 
        // use code to find link webElement: const webElement = await $('.classValue')
        const fyaHeaderElement = await $('.uiHeaderTitle');
        // Go to Functions to interact with a WebElement: and the purpose: isDisplayed(), use that. 
        const isfyaHeaderDisplayed = await fyaHeaderElement.isDisplayed();
        //because you have to verify use except from chai library 
        expect(isfyaHeaderDisplayed, 'Find your account header is NOT Displayed').to.be.true;

        await browser.pause(3000);
    })

})
