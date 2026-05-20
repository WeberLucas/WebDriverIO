export async function clicar_quando_visivel(seletor) {
    const elemento = typeof seletor === 'string' ? $(seletor) : seletor;
    await elemento.waitForDisplayed();
    await elemento.click();
    return elemento;
}

export async function preencher_quando_visivel(seletor, valor) {
    const elemento = typeof seletor === 'string' ? $(seletor) : seletor;
    await elemento.waitForDisplayed();
    await elemento.setValue(valor);
    return elemento;
}
