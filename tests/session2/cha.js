describe('Verify user can go back and forward as expected', () => {
    let expect;
    
    before(async () => {
        expect = (await import('chai')).expect;
    });
  
    it('To launch a webpage', async () => {
        // 1. Launch https://www.amazon.com/
        await browser.url('https://www.amazon.com/');
        await browser.pause(8000);

        // 2. Verify page title contains "Spend less. Smile more."
        const pageTitle = await browser.getTitle();
        expect(pageTitle.includes('Spend less. Smile more.'), 'Page title does not contain "Spend less. Smile more."').to.be.true;
    
        // 3. Launch https://www.hotels.com/
        await browser.url('https://www.hotels.com/');
        await browser.pause(8000);

        // 4. Verify current URL contains "hotels.com"
        let pageUrl = await browser.getUrl();
        expect(pageUrl.includes('hotels.com'), 'Page URL does not contain "hotels.com"').to.be.true;
    
        // 5. Go back
        await browser.back();
        await browser.pause(8000);

        // 6. Verify current URL contains "amazon.com"
        pageUrl = await browser.getUrl();
        expect(pageUrl.includes('amazon.com'), 'Page URL does not contain "amazon.com"').to.be.true;

        // 7. Go forward
        await browser.forward();
        await browser.pause(8000);

        // 8. Verify page title contains "Deals & Discounts for Hotel Reservations"
        const forwardPageTitle = await browser.getTitle();
        expect(forwardPageTitle.includes('Deals & Discounts for Hotel Reservations'), 'Page title does not have "Deals & Discounts for Hotel Reservations"').to.be.true;
    });
});
