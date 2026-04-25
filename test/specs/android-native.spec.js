describe('Android Native Feature Tests', () => {
    it('Acess an Activity directly', async () => {
       await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(30000)

       await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
});