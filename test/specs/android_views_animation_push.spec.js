describe('Android Native - Views > Animation', () => {
    it('should open Views, open Animation and show Push text', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            'io.appium.android.apis.ApiDemos'
        );

        await $('//*[@text="Views"]').click();
        await $('//*[@text="Animation"]').click();

        await expect($('//*[@text="Push"]')).toExist();
    });
});
