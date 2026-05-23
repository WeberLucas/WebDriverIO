📱 WebdriverIO + Appium — Android Automation
<div align="center">

Automação mobile utilizando <strong>WebdriverIO v9</strong>, <strong>Appium 2</strong> e <strong>Allure Report</strong> 🚀








</div>
✨ Sobre o Projeto

Projeto de automação mobile desenvolvido com:

⚡ WebdriverIO v9
📱 Appium 2
🤖 Android API Demos
📊 Allure Reports
🧩 Arquitetura baseada em Screen Objects
📂 Estrutura do Projeto
.
├── data/             # Massa de teste, constantes e activities
├── helpers/          # Helpers e utilitários
├── screen/           # Screen Objects
├── test/specs/       # Casos de teste
├── app/android/      # APK ApiDemos-debug.apk
└── README.md
⚙️ Pré-requisitos

Antes de executar o projeto, tenha instalado:

Node.js 18+
Android SDK
Emulador Android ou dispositivo físico
Appium 2

Executar Appium:

npx appium

ou instalado globalmente:

appium
📦 APK

Coloque o APK abaixo no diretório:

app/android/ApiDemos-debug.apk

APK utilizado:

ApiDemos-debug.apk

Origem oficial:

https://github.com/appium/android-apidemos
🚀 Instalação
npm install
▶️ Executando os Testes

Com o emulador/dispositivo conectado:

npm test
📱 Definir Device Opcionalmente

Windows:

set DEVICE_NAME=Pixel_4_API_30
npm test

Linux/MacOS:

DEVICE_NAME=Pixel_4_API_30 npm test
📊 Gerando Relatório Allure
npm run allure:report
🧠 Padrões do Projeto
Cursor Rules
Variáveis devem seguir o padrão:
xxx_xxx

Exemplo:

login_button
user_name
password_input
Cursor Skill

Localização:

.cursor/skills/wdio-mobile-automation/

Contém padrões para:

data
helpers
screen
test
🏗️ Arquitetura Utilizada

O projeto utiliza o padrão:

✅ Screen Object Pattern
✅ Separação de responsabilidades
✅ Reutilização de componentes
✅ Organização escalável
🧪 Tecnologias Utilizadas
Tecnologia	Finalidade
WebdriverIO	Framework de automação
Appium	Automação mobile
Allure	Relatórios
Node.js	Runtime
Android SDK	Ambiente Android
💡 Objetivo

Este projeto tem como foco:

Boas práticas em automação mobile
Estrutura profissional para testes
Facilidade de manutenção
Escalabilidade
<div align="center">
🚀 Automação Mobile com WebdriverIO + Appium
</div>