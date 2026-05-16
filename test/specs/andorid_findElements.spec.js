describe('Android Find Elements', () => {
  it('Find element by accessibility id', async () => {
    const appOption = await $('~App')

    await appOption.click()
    const actionBar = await $('~Action Bar')
    await expect(actionBar).toBeExisting();
  });
  it('Find element by class name', async () => {
    const className = await $('.android.widget.TextView')
    console.log(await className.getText())
    await expect(className).toHaveText('API Demos')
  })
  xit('Find element by xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

    await $('//android.widget.TextView[@text="Command two"]').click()

    const textAssertion = await $('//android.widget.TextView')
    await expect(textAssertion).toHaveText('You selected: 1 , Command two')
  })
  it('Find element by UiAutomator', async () => {
    await $('android=new UiSelector().textContains("Alert")').click()
  })

  it('Find multiple elements', async () => {
    const expectedList = [
      'API Demos', "Access'ibility",
      'Accessibility', 'Animation',
      'App', 'Content', 'Graphics',
      'Media', 'NFC', 'OS',
      'Preference', 'Text', 'Views'
    ]

    const actualList = []

    const textList = await $$('android.widget.TextView')
    for (const element of textList) {
      actualList.push(await element.getText())
    }
    await expect(actualList).toEqual(expectedList)
  })
  it('Vertical srolling', async () => {
    await $('~App').click()
    await $('~Activity').click()

    //scrola até o fim sem olhar nada
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrolltOEnd(1,5)')
    //scrolla procurando o elemento de texto secure surfaces
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces"))').click()

    await expect($('~Secure Surfaces')).toExist()
  })
  it.only('Horizontal srolling', async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

    //scrolla horizontalmente
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')


    await driver.pause(30000)
  })
});