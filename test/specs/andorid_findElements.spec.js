describe('Android Find Elements', () => {
    it('Find element by accessibility id', async ()  => {
    const appOption = await $('~App')

    await appOption.click()
    const actionBar = await $('~Action Bar')
    await expect(actionBar).toBeExisting();
    });
    it.only('Find element by class name', async () => {
    const className = await $('.android.widget.TextView')
    console.log(await className.getText())
    await expect(className).toHaveText('API Demos')
    })
});