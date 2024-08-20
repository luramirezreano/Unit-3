//const { expect } = require("chai"); // this doesnt appear and gives me an error if I type it
//(Error:  Unable to load spec files quite likely because they rely on `browser` object that is not fully initialized.    
//`browser` object has only `capabilities` and some flags like `isMobile`.)
describe('Basic locator strategy', () => {
    it('Verify user can enter login credentials and click login button', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Enter "abcd@test.com" in login email
         * 3. Enter "test@1234" in login password
         * 4, Click "Log In" button
         */

        //1. Launch facebook.com
        await browser.url('https://wwww.facebook.com/');

        await browser.pause(5000);

        //2. Enter "abcd@test.com" in login email     // From the locator strategy table we use the id-attribute 
        const loginEmailElement = await $('#email');  // use the code to find webElement const webE.. #idValue (the variable is change after const the id value is email so change it from value to email )
        loginEmailElement.setValue('abc@test.com');   // from the Functions to interact with webElement we use the function to type: setValue)

        await browser.pause(5000);

        //3. Enter "test@1234" in Login password 
        const loginPassElement = await $('input[name=pass]');  // we should use id attribute but for practice we should use anyOther-attribute
        loginPassElement.setValue('test@1234');

        await browser.pause(3000);

        // 4. Click "Log In" button
        const loginBtnElement = await $('button=Log In');  //you can use the anyOther-attribute, but for practice we used the text-value 
        loginBtnElement.click();                           // Use the functions to interact with webE. and use the purpose of click 

        await browser.pause(2000);



    })

    let expect;
  
    before(async () => {
      expect = (await import('chai')).expect;
    });
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
        const messengerLinkElement = await $('=Messenger');
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

        await browser.pause(5000);
    })

})
// error is thrown: AssertionError: Find your account header is NOT Displayed: expected false to be true
    //at Context.<anonymous> (C:\Users\Lucia\Desktop\Widio-Tutorials\tests\session3\WebElementsTests-1.js:85:88)