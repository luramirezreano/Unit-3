/**
 * url()
 * 
 * To launch a webpage (or webUrl) on a browser-window
 * input: url-address as a string 
 */



describe('Basic functions of WebDriverIO', () => {
  let expect;
  
  before(async () => {
      expect = (await import('chai')).expect;
  });


  it('To launch a webpage', async () => {
      // Launch the weather.com webpage
       await browser.url('https://weather.com/');

    //   // Pause execution for 5 seconds to observe the launched page
       await browser.pause(5000); // 5000 milliseconds = 5 seconds 
  });

  it.only('Learning maximizeWindow, getTitle, getUrl functions', async () => {
      /**
       * 1. Launch facebook.com
       * 2. Maximize the window 
       * 3. Get the page title 
       * 4. Verify page title starts with 'Facebook'
       * 5. Get current url 
       * 6. Verify current url contains 'book.co'       
       */

      // 1. Launch facebook.com
      await browser.url('https://facebook.com/');

      // Pause execution for 5 seconds to observe the launched page
      await browser.pause(5000);

      // 2. Maximize the window 
      await browser.maximizeWindow();

      // Pause execution for 5 seconds to observe the maximized window
      await browser.pause(5000);

      // 3. Get the page title 
      const pageTitle = await browser.getTitle();

      // 4. Verify page title starts with 'Facebook'
      expect(pageTitle.startsWith('Facebook'), 'Page title does not start with "Facebook"').to.be.true;

      // 5. Get current url 
      const pageUrl = await browser.getUrl();

      // 6. Verify current url contains 'book.co'
      expect(pageUrl.includes('book.co'), 'Page url does not contain "book.co"').to.be.true;
  });
});
// it.only('Learning geWindowHandle, back, foward, refresh functions', async () => {
//     /**
//      * 1. launch weather.com
//      * 2. get WindowHandle
//      * 3. Verify windowHandle length is grater than 0 
//      * 4. Launch facebook.com
//      * 5. Launch amazon.com
//      * 6. Go to back
//      * 7. Go to back
//      * 8. Launch scholastic.com
//      * 9. Go back 
//      * 10. Go to foward
//      * 11. Launch zillow.com
//      * 12. Refresh Window
//      */
//     // 1. Launch weather.com
//     await browser.url('https://www.weather.com/');

//     // 2. get WindowHandle
//     const handle = await browser.getWindowHandle();

//     // 3. Verify windowHandle length is grater than 0
//     expect(handle.length > 0).toBe(true);
//     //expect(handle.length > 0, 'Window handle length is NOT greater than 0');
// expect(handle.length > 0, 'window hankk').to.be.true;

//     // 4. Launch facebook.com
//     await browser.url('https://www.facebook.com/');

//     //5. Launch amazon.com
//     await browser.url('https://www.amazon.com/');
    
//     // 6. Go to back
//     await browser.back();

//     // 7. Go to back
//     await browser.back();

//     // 8. Launch scholastic.com
//     await browser.url('https://www.scholastic.com/');

//     //9. Go back 
//     await browser.back();

//     // 10. Go to foward
//     await browser.forward();

//     // 11. Launch zillow.com
//     await browser.url('https://zillow.com/');
  

//     // 12. Refresh Window
//     await browser.refresh();







//})