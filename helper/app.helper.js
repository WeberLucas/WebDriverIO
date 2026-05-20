export const API_DEMOS_PACKAGE = 'io.appium.android.apis';

export async function abrir_activity(app_package, app_activity) {
    await driver.startActivity(app_package, app_activity);
}

export async function abrir_api_demos() {
    await abrir_activity(API_DEMOS_PACKAGE, `${API_DEMOS_PACKAGE}.ApiDemos`);
}

export async function abrir_alert_dialogs() {
    await abrir_activity(
        API_DEMOS_PACKAGE,
        `${API_DEMOS_PACKAGE}.app.AlertDialogSamples`
    );
}

export async function abrir_gallery() {
    await abrir_activity(
        API_DEMOS_PACKAGE,
        `${API_DEMOS_PACKAGE}.view.Gallery1`
    );
}
