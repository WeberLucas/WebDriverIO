# WebdriverIO + Appium — Android (API Demos)

Projeto de automação mobile com WebdriverIO v9, Appium 2 e Allure.

## Estrutura

```
helper/          # utilitários (app, waits)
screens/         # Screen Objects
test/specs/      # testes
app/android/     # APK ApiDemos-debug.apk
```

## Pré-requisitos

- Node.js 18+
- Android SDK + emulador ou device USB
- Appium 2 (`npx appium` ou instalado globalmente)

## APK

Coloque o **ApiDemos-debug.apk** em:

```
app/android/ApiDemos-debug.apk
```

Origem usual: repositório [appium/android-apidemos](https://github.com/appium/android-apidemos) ou material do curso.

## Instalação

```bash
npm install
```

## Executar testes

```bash
# emulador/device ligado; Appium na porta 4723 (sobe via @wdio/appium-service)
npm test
```

Variável opcional para nome do device:

```bash
set DEVICE_NAME=Pixel_4_API_30
npm test
```

## Allure

```bash
npm run allure:report
```

## Cursor

- **Rule:** variáveis no formato `xxx_xxx`
- **Skill:** `.cursor/skills/wdio-mobile-automation/` — padrões mobile (screens, helper, waits)
