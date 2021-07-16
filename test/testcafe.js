import { Selector, RequestHook } from 'testcafe';

var setHeaderHook = (key, value) => {
    return class extends RequestHook {
        constructor(requestFilterRules, responseEventConfigureOpts) {
            super(requestFilterRules, responseEventConfigureOpts);
        }
        async onRequest(event) {
            event.requestOptions.headers[key] = value;
        }
        async onResponse(event) {
        }
    }
}


fixture`Getting Started`
    .page(`http://localhost:5000/tiktok/oauth`)
    .requestHooks(setHeaderHook("Authorization", 
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI2MzgwNDM0LCJqdGkiOiI4OWNkYjdiZjAzODk0YzAxOTRiOTZiNzdiMWQ1YTJjNCIsInVzZXJfaWQiOjEsInVzZXIiOnsidXNlcm5hbWUiOiIrMTQyNDI0MjQyNDIifSwidXNlcm5hbWUiOiIrMTQyNDI0MjQyNDIiLCJyb2xlIjoiYmFzaWMiLCJoYXN1cmEiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJiYXNpYyJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJiYXNpYyIsIngtaGFzdXJhLXVzZXItaWQiOiIxIn19.9fRTB45rGY2FeMTMC_ISkVQLS-eQu9xdOwT3ifxL5oY"))


test('My first test', async t => {
    // await t.expect(Selector("body").innerText)
        // .contains("asldkjalkjslfj");
        await t.click(Selector(".foobar"))
        .debug()
});
/*
@tag("integration")
    def test_tiktok_oauth_redirect_integration(self):
        refresh = RefreshToken.for_user(self.alice)
        self.client.credentials(
            HTTP_AUTHORIZATION="Bearer " + str(refresh.access_token)
        )
        response = self.client.post(
            reverse("tiktok_oauth"),
        )
        self.assertEqual(status.HTTP_302_FOUND, response.status_code)
        self.alice.refresh_from_db()
        chromeProfile = webdriver.ChromeOptions()
        chromeProfile.add_argument("--disable-automation")
        chromeProfile.add_experimental_option("excludeSwitches", ["enable-automation"])
        chromeProfile.add_experimental_option("useAutomationExtension", False)
        # chromeProfile.add_argument("--proxy-server={0}".format(proxy.proxy))
        chromeProfile.add_experimental_option(
            "mobileEmulation", {"deviceName": "iPhone X"}
        )
        driver = webdriver.Remote(
            command_executor="http://chrome:4444",
            options=chromeProfile,
        )
        redirect_url = response.url
        response = driver.get(redirect_url)
        driver.add_cookie({"name": "csrfState", "value": self.alice.csrf_state})
        response = driver.get(redirect_url)
        elem = driver.find_elements_by_class_name("channel-name-2qzLW")[2]
        elem.click()  # clicks use phone / email / username
        driver.save_screenshot("test1.png")
        tiktok_window = driver.current_window_handle
        google_window = driver.window_handles[1]
        driver.switch_to_window(google_window)
        driver.save_screenshot("test2.png")
        elem = driver.find_element_by_name("identifier")
        elem.send_keys("fun803284@gmail.com")
        elem.send_keys(Keys.ENTER)
        driver.save_screenshot("test3.png")
        elem = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "password"))
        )
        elem.send_keys("coolcool1!")
        driver.save_screenshot("test4.png")
        elem.send_keys(Keys.ENTER)
        # wait for the google window to close
        while True:
            driver.implicitly_wait(1)
            try:
                driver.title
            except:
                break
        driver.switch_to_window(tiktok_window)
        driver.save_screenshot("test5.png")
        elem = WebDriverWait(driver, 20).until(
            # EC.presence_of_element_located((By.CLASS_NAME, "authorize-btn "))
            EC.presence_of_element_located((By.XPATH, "//div[text()='Authorize']"))
        )
        driver.execute_script(
            "document.getElementsByClassName('authorize-btn')[0].click()"
        )
        driver.implicitly_wait(15)
        driver.save_screenshot("test6.png")
        driver.close()
        time.sleep(10)
        self.assertTrue(TiktokOAuth.objects.filter(owner=self.alice).exists())

        */