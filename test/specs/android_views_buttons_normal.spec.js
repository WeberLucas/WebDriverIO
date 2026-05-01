describe('Android Native - Views > Buttons', () => {
    it('should open Views, open Buttons and tap Normal button', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            'io.appium.android.apis.ApiDemos'
        );

        await $('//*[@text="Views"]').click();
        await $('//*[@text="Buttons"]').click();
        await $('//*[@text="Normal"]').click();

        await expect($('//*[@text="Views/Buttons"]')).toExist();
        await expect($('//*[@text="Normal"]')).toExist();
    });
});
