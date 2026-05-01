describe('Android Native Feature Tests', () => {
    it('Acess an Activity directly', async () => {
       await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(30000)

       await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
    it.only('Working with dialog boxes', async ()=>{
      //entra no app android já na tela desejada(não funciona ios)
      await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
      await driver.pause(30000)  
   
      await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        //comando que aceita o alerta sozinho
        //await driver.acceptAlert();//caso queria negar ~e sõ usar o alert.dissiAlert
      

        //pegar texto do alerta
      console.log('ALERT TEXT -->',await driver.getAlertText())

        //click ok no botão
      await $('//*[@resource-id="android:id/button1"]').click()

        //verificar que a caixa de alerta não está mais visível 
        await expect($('//*[@resource-id="android::id/alertTitle"]')).not.toExist();
   })
});