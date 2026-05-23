import { API_DEMOS_ACTIVITIES, API_DEMOS_PACKAGE } from '../data/api_demos.data.js';

export async function abrir_activity(app_package, app_activity) {
    await driver.startActivity(app_package, app_activity);
}

export async function abrir_api_demos() {
    await abrir_activity(API_DEMOS_PACKAGE, API_DEMOS_ACTIVITIES.home);
}

export async function abrir_alert_dialogs() {
    await abrir_activity(API_DEMOS_PACKAGE, API_DEMOS_ACTIVITIES.alert_dialogs);
}

export async function abrir_gallery() {
    await abrir_activity(API_DEMOS_PACKAGE, API_DEMOS_ACTIVITIES.gallery);
}
