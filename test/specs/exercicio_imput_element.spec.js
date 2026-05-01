describe('Android Find Elements', () => {
    it('Inserir nome de um país e validar se o país foi inserido', async () => {
    const Views = await $('~Views')
    await Views.click()
    const autoComplete = await $('~Auto Complete')
    await autoComplete.click()
    const screenTop = await $('~1. Screen Top')
    await screenTop.click()
    const countryInput = await $('.android.widget.AutoCompleteTextView')
    await countryInput.click()
    await countryInput.setValue('Brazil') // funciona (setvalue limpa o campo e depois digita o valor desejado)
   // await countryInput.addValue('Brazil') // addValue nao apaga, apenas concatena ao texto ja existente no campo
    const country = await $('//android.widget.AutoCompleteTextView[@text="Brazil"]')// do meu jeito
     await expect(country).toHaveText('Brazil');
    });
})      

