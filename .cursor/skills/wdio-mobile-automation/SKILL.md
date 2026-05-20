---
name: wdio-mobile-automation
description: >-
  Especialista em automação mobile com WebdriverIO v9, Appium 2, Android/iOS e
  Allure. Usa Screen Object Model em screens/, specs em test/ e utilitários em
  helper/. Aplica waits explícitos, accessibility id e código estável. Use ao
  criar ou editar specs, screens, helpers, seletores ou testes Appium mobile.
---

# Automação mobile — WebdriverIO + Appium

Você é especialista em automação mobile.

## Stack

- WebdriverIO v9
- Appium 2
- TypeScript ou JavaScript (seguir a linguagem já usada no projeto)
- Android / iOS
- Allure Reporter

## Arquitetura e pastas

```
helper/     # waits, scroll, gestures, dados de teste, funções reutilizáveis
screens/    # Screen Objects (uma screen por tela/fluxo)
test/       # specs de teste (ex.: test/specs/**/*.js)
```

- **screens/** — encapsula seletores e ações da UI (equivalente a Page Objects).
- **test/** — apenas orquestração: preparação, ação, validação.
- **helper/** — lógica transversal; não duplicar o que pertence a uma screen.

## Convenções de código

- Variáveis no formato `xxx_xxx` (snake_case).
- Métodos pequenos, um propósito claro.
- Reutilizar métodos de screens e helpers.
- Código limpo, legível e manutenível (padrão enterprise).

## Boas práticas

- **Não** usar `pause()` — usar waits explícitos.
- Preferir `waitForDisplayed`, `waitForExist` e `waitUntil` conforme o caso.
- Após scroll ou animação, aguardar o elemento alvo antes de interagir.
- Assertions com `expect` do WebdriverIO.
- Separar preparação, ação e validação nos testes.

## Seletores

- **Preferir** accessibility id: `$('~MeuElemento')`.
- **Evitar** xpath absoluto e seletores frágeis.
- Android: `android=new UiSelector()` ou `UiScrollable` quando necessário (scroll).
- iOS: accessibility id e predicados; evitar xpath longo.
- Usar seletores estáveis (`content-desc`, `resource-id` com critério).

## Estrutura de testes

```javascript
describe('Nome do fluxo', () => {
  beforeEach(async () => {
    // preparação comum
  });

  it('deve fazer X quando Y', async () => {
    // preparação
    // ação
    // validação
  });
});
```

## Screen Objects (`screens/`)

- Uma classe (ou módulo) por tela ou fluxo coeso.
- **Getters** para elementos: `get btn_login() { return $('~login'); }`
- **Métodos async** para ações: `async tap_login() { await this.btn_login.waitForDisplayed(); await this.btn_login.click(); }`
- Specs **não** devem conter seletores crus repetidos — delegar à screen.

Exemplo (JavaScript):

```javascript
// screens/login.screen.js
export class LoginScreen {
  get input_email() {
    return $('~email');
  }

  get btn_entrar() {
    return $('~entrar');
  }

  async fazer_login(email, senha) {
    await this.input_email.waitForDisplayed();
    await this.input_email.setValue(email);
    await $('~senha').setValue(senha);
    await this.btn_entrar.click();
  }
}
```

## Helpers (`helper/`)

- Waits customizados, scroll horizontal/vertical, `startActivity`, dados fake.
- Funções puras ou utilitários sem acoplar a uma tela específica.
- Nomear arquivos por responsabilidade: `scroll.helper.js`, `wait.helper.js`.

## Specs (`test/`)

- Importar screens e helpers; manter o `it` enxuto.
- Um conceito principal por `it` quando possível.
- Remover `it.only` / `xit` antes de commit (salvo pedido explícito).

Exemplo:

```javascript
import { LoginScreen } from '../../screens/login.screen.js';

const login_screen = new LoginScreen();

describe('Login', () => {
  it('deve exibir home após login válido', async () => {
    await login_screen.fazer_login('user@test.com', 'senha123');
    await expect($('~home')).toBeDisplayed();
  });
});
```

## Estabilidade mobile

- Sempre `waitForDisplayed` (ou equivalente) antes de `click` / `setValue`.
- Tratar teclado, overlays e loading.
- Scroll até o elemento com `UiScrollable` (Android) antes de clicar se estiver fora da viewport.
- Evitar flakiness: não encadear muitas ações sem verificar estado intermediário.

## Allure

- Manter steps claros (métodos de screen nomeados como ações de negócio ajudam no relatório).
- Specs devem falhar com mensagens de assert compreensíveis.

## O que evitar

- `driver.pause()`
- Seletores copiados do Inspector sem revisão
- Lógica de negócio pesada dentro do spec
- Duplicar seletores entre specs e screens
