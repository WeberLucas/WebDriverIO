---
name: wdio-mobile-automation
description: >-
  Especialista em automação mobile com WebdriverIO v9, Appium 2, Android/iOS e
  Allure. Usa Screen Object Model em screen/, specs em test/, utilitários em
  helpers/ e massa de dados em data/. Aplica waits explícitos, accessibility id
  e código estável. Use ao criar ou editar specs, screen, helpers, data,
  seletores ou testes Appium mobile.
---

# Automação mobile — WebdriverIO + Appium

Você é especialista em automação mobile.

## Stack

- WebdriverIO v9
- Appium 2
- TypeScript ou JavaScript (seguir a linguagem já usada no projeto)
- Android / iOS
- Allure Reporter

## Arquitetura e pastas (padrão do trabalho)

```
data/       # massa de teste, constantes, credenciais fake, activities
helpers/    # waits, scroll, gestures, startActivity, funções reutilizáveis
screen/     # Screen Objects (uma screen por tela/fluxo)
test/       # specs de teste (ex.: test/specs/**/*.js)
```

- **data/** — valores de entrada, packages, activities; sem lógica de UI.
- **screen/** — seletores e ações da UI (equivalente a Page Objects).
- **helpers/** — lógica transversal; não duplicar o que pertence a uma screen.
- **test/** — apenas orquestração: preparação, ação, validação.

## Convenções de código

- Variáveis no formato `xxx_xxx` (snake_case).
- Métodos pequenos, um propósito claro.
- Reutilizar screen, helpers e data.
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

## Screen Objects (`screen/`)

- Uma classe (ou módulo) por tela ou fluxo coeso.
- **Getters** para elementos: `get btn_login() { return $('~login'); }`
- **Métodos async** para ações com wait antes de interagir.
- Specs **não** devem conter seletores crus repetidos — delegar à screen.

Exemplo (JavaScript):

```javascript
// screen/login.screen.js
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

## Helpers (`helpers/`)

- Waits customizados, scroll, `startActivity`, integrações com driver.
- Funções sem acoplar a uma tela específica.
- Nomear por responsabilidade: `scroll.helper.js`, `wait.helper.js`.

## Data (`data/`)

- Constantes, JSON de massa, usuários de teste, textos esperados.
- Exemplo: `api_demos.data.js` com package, activities e `pais_brazil`.
- Specs importam data; screens recebem valores por parâmetro quando possível.

## Specs (`test/`)

- Importar de `data/`, `screen/` e `helpers/`; manter o `it` enxuto.
- Um conceito principal por `it` quando possível.
- Remover `it.only` / `xit` antes de commit (salvo pedido explícito).

Exemplo:

```javascript
import { DADOS_LOGIN } from '../../data/login.data.js';
import { LoginScreen } from '../../screen/login.screen.js';

const login_screen = new LoginScreen();

describe('Login', () => {
  it('deve exibir home após login válido', async () => {
    await login_screen.fazer_login(DADOS_LOGIN.email, DADOS_LOGIN.senha);
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
- Duplicar seletores entre specs e screen
- Colocar massa de teste dentro de screen ou helper (usar `data/`)
