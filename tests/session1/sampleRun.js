//Refers to Test suite
describe('Sample test suite', () => {
    //refer a testcase, you can have mutiple testcase)
    it( 'Saple testcase', async () => {
        await browser.url('https://google.com/')
        await browser.pause(5000);
    })
})