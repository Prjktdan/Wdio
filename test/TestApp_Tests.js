const assert = require('assert')

describe('Contents', () => {

    it('Alert Link Loads', () => {
        browser.url('localhost:4567')
        $('#alert').click()
        assert ($('#alertexamples').waitForDisplayed() === true, "alert page didn't load")
    })

    it('Alerts Link Loads', () => {
        browser.url('localhost:4567')
        $('#alerts').click()
        // $('#confirmexample').click()
        // console.log(browser.acceptAlert())

        assert($('#confirmexample').waitForDisplayed() === true, "Alerts page didn't load")
    })

    it('Basic Ajax Link Loads', () => {
        browser.url('localhost:4567')
        $('#basicajax').click()
        assert($('#combo1').waitForDisplayed() === true, "Basic Ajax page didn't load")
    })

    it('Basic HTML Form Loads', () => {
        browser.url('localhost:4567')
        $('#htmlform').click()
        assert($('input[name="username"]').waitForDisplayed() === true, "Basic HTML form didn't load")
    })

    it('Basic Web Page Link Loads', () => {
        browser.url('localhost:4567')
        $('#webpage').click()
        assert($('#para1').waitForDisplayed() === true, "Basic Web Page didn't load")
    })

    it('Bounce page loads', () => {
        browser.url('localhost:4567')
        $('#bounce').click()
        assert($('//p[text() = "Aaargh!" ]').waitForDisplayed() === true, "Basic Ajax page didn't load")
    })

    it('Calculate Link Loads', () => {
        browser.url('localhost:4567')
        $('#calculate').click()
        assert($('#function').waitForDisplayed() === true, "Calculate page didn't load")
    })

    it('Find By Playground Link Loads', () => {
        browser.url('localhost:4567')
        $('#findby').click()
        assert($('#p8').waitForDisplayed() === true, "Find By Playground page didn't load")
    })

    it('Gui User Interactions Link Loads', () => {
        browser.url('localhost:4567')
        $('#useractions').click()
        assert($('#draggable1').waitForDisplayed() === true, "GUI User Interactions page didn't load")
    })

    it('JavaScript Countdown Link Loads', () => {
        browser.url('localhost:4567')
        $('#countdown').click()
        assert($('#javascript_countdown_time').waitForDisplayed() === true, "JavaScript Countdown page didn't load")
    })

    it('Key Click Display Link Loads', () => {
        browser.url('localhost:4567')
        $('#clickdisplay').click()
        assert($('input[value="click me"]').waitForDisplayed() === true, "Key Click Display page didn't load")
    })

    it('Refresh Link Loads', () => {
        browser.url('localhost:4567')
        $('#refresh').click()
        assert($('//p').waitForDisplayed() === true, "Refresh page didn't load")
    })

    it('Search Link Loads', () => {
        browser.url('localhost:4567')
        $('#search').click()
        assert($('input[value="Search"]').waitForDisplayed() === true, "Search page didn't load")
    })

    it('Frames Link Loads', () => {
        browser.url('localhost:4567')
        $('#frames').click()
        assert($('frame[name = "menu"]').waitForDisplayed() === true, "Frames page didn't load")
    })

    it('Basic Redirect Link Loads', () => {
        browser.url('localhost:4567')
        $('#redirect').click()
        assert($('#delaygotobasic').waitForDisplayed() === true, "Basic Redirect page didn't load")
    })

    it('Basic Canvas Example  Link Loads', () => {
        browser.url('localhost:4567')
        $('#cavas').click()
        assert($('#thecanvas').waitForDisplayed() === true, "Basic Canvas Example page didn't load")
    })

    it('File Upload Example  Link Loads', () => {
        browser.url('localhost:4567')
        $('#fileupload').click()
        assert($('#fileinput').waitForDisplayed() === true, "File Upload Example page didn't load")
    })

    it('Basic HTML5 Form Link Loads', () => {
        browser.url('localhost:4567')
        $('#html5form').click()
        assert($('input[name="colour"]').waitForDisplayed() === true, "Basic HTML5 Form page didn't load")
    })

})

describe('Credits Links', () => {

    it('Quackit Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="http://www.quackit.com"]').click()
        browser.switchWindow('Quackit Tutorials')
        assert($('a[href="/css/data_types/"]').waitForDisplayed() === true, "Quackit page didn't load")
    })

    it('Quackit Frames Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="http://www.quackit.com/html/templates/frames/"]').click()
        browser.switchWindow('HTML Frames Templates')
        assert($('h1[class="page-title"]').waitForDisplayed() === true, "Quackit Frames page didn't load")
    })

    it('Javascript Countdown Code Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="http://stuntsnippets.com/javascript-countdown/"]').click()
        browser.switchWindow('JavaScript countdown | StuntCoders')
        assert($('h1[class="page-title"]').waitForDisplayed() === true, "Javascript Countdown Code page didn't load")
    })
})

describe('About Links', () => {

    it('WebDriver Training Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="http://unow.be/at/webdriverapi"]').click()
        assert($('#enroll-button-top').waitForDisplayed() === true, "WebDriver Training page didn't load")
    })

    it('Books by Alan Richardson Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="http://seleniumsimplified.com/about-2nd-edition/"]').click()
        assert($('h1[class="pageTitle"]').waitForDisplayed() === true, "Books by Alan Richardson page didn't load")
    })

    it('Github Test App Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="https://github.com/eviltester/TestingApp"]').click()
        browser.switchWindow('GitHub - eviltester/TestingApp: A Compendium of Testing ...')
        assert($('a[href="/eviltester/TestingApp/commits/master"]').waitForDisplayed() === true, "Github Test App page didn't load")
    })
})

describe('Additional Links', () => {

    it('Buggy Games Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="/games/buggygames/"]').click()
        assert($('a[href="driving_game/console_driver.html"]').waitForDisplayed() === true, "Buggy Games page didn't load")
    })

    it('Applications for Testing Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="/apps/"]').click()
        assert($('a[href="/apps/7charval/simple7charvalidation.htm"]').waitForDisplayed() === true, "Applications for testing page didn't load")
    })

    it('The Pulper Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="/apps/pulp/"]').click()
        assert ($('#menu-books-list-table').waitForDisplayed() === true, "The Pulper page didn't load")
    })

    it('RestListicator Link Loads', () => {
        browser.url('localhost:4567')
        $('a[href="/listicator/"]').click()
        assert ($('a[href="https://github.com/eviltester/TestingApp/releases"]').waitForDisplayed() === true, "RestListicator page didn't load")
    })
})

