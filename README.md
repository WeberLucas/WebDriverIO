📱 WebdriverIO + Appium — Android (API Demos)
<div align="center">

Projeto de automação mobile com <strong>WebdriverIO v9</strong>, <strong>Appium 2</strong> e <strong>Allure Report</strong> 🚀

<br> <img src="https://img.shields.io/badge/WebdriverIO-v9-orange?style=for-the-badge&logo=webdriverio" /> <img src="https://img.shields.io/badge/Appium-2-662d91?style=for-the-badge&logo=appium" /> <img src="https://img.shields.io/badge/Android-Automation-3DDC84?style=for-the-badge&logo=android" /> <img src="https://img.shields.io/badge/Allure-Report-blue?style=for-the-badge" /> </div>
📂 Estrutura (padrão do trabalho)
data/            # massa de teste, constantes, activities
helpers/         # utilitários (app, waits)
screen/          # Screen Objects
test/specs/      # testes
app/android/     # APK ApiDemos-debug.apk
⚙️ Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

✅ Node.js 18+
✅ Android SDK
✅ Emulador Android ou device USB
✅ Appium 2 (npx appium ou instalado globalmente)
📦 APK

Coloque o ApiDemos-debug.apk em:

app/android/ApiDemos-debug.apk

Origem usual:

Repositório oficial:
https://github.com/appium/android-apidemos
Ou material do curso.
🚀 Instalação
npm install
▶️ Executar testes

Com o emulador/device ligado e Appium rodando na porta 4723:

npm test

O projeto sobe automaticamente via @wdio/appium-service

📱 Variável opcional para nome do device
Windows
set DEVICE_NAME=Pixel_4_API_30
npm test
Linux / Mac
DEVICE_NAME=Pixel_4_API_30 npm test
📊 Allure

Gerar relatório:

npm run allure:report
🧠 Cursor
✅ Rule

Variáveis devem seguir o padrão:

xxx_xxx

Exemplos:

login_button
home_screen
user_name
password_input
✅ Skill

Localização:

.cursor/skills/wdio-mobile-automation/

Contém padrões mobile para:

data
helpers
screen
test
🧩 Arquitetura Utilizada

O projeto utiliza:

✅ Screen Object Pattern
✅ Separação de responsabilidades
✅ Organização escalável
✅ Reutilização de componentes
✅ Estrutura limpa para manutenção
🛠️ Tecnologias Utilizadas
Tecnologia	Finalidade
WebdriverIO	Framework de automação
Appium	Automação mobile
Allure	Relatórios
Node.js	Runtime JavaScript
Android SDK	Ambiente Android
💡 Objetivo

Este projeto tem como foco:

📱 Automação mobile Android
🧪 Boas práticas em testes automatizados
🚀 Estrutura profissional utilizando WebdriverIO + Appium
📊 Relatórios organizados com Allure
🧩 Facilidade de manutenção e escalabilidade
<div align="center">
🚀 Mobile Automation • WebdriverIO • Appium • Android
</div>