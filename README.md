🎯 Sobre o Projeto
O Asares nasceu da necessidade real (e um pouco desesperada) de gerenciar entradas, saídas, saldos e parcelamentos sem depender de bancos ou serviços externos. Totalmente offline, sem espionagem, sem julgamentos e sem nuvem (pelo menos por enquanto).

Aqui, seus dados são seus. O app funciona 100% no seu dispositivo, com criptografia local e autenticação biométrica. Seu CPF agradece.

✅ Funcionalidades (Requisitos Funcionais)
🔐 Autenticação e Segurança
🔑 Login via biometria (digital ou rosto).

🔢 PIN de segurança como alternativa.

🔓 Logout manual ou automático após inatividade (pra evitar aquele curioso).

🏦 Gerenciamento de Contas Bancárias
➕ Cadastro de múltiplos bancos (porque nem todo mundo tem só um).

✏️ Edição e exclusão de bancos.

💰 Saldo individual por banco.

📜 Extrato geral, somando tudo (ou quase tudo, depende do saldo).

💸 Gerenciamento de Entradas e Despesas
➖ Despesas com: valor, data, tag, observação, tipo (débito, crédito, dinheiro, Pix, etc.), banco e parcelamento.

➕ Entradas com: valor, data, tag, observação, banco de destino e nome do item (ex.: salário, PIX do amigo que te devia, etc.).

🏷️ Cadastro de tags personalizadas (tipo: "Role", "Mercado", "Cartão Nubank").

🗓️ Controle de despesas parceladas (inclusive visualizando parcelas futuras).

🔍 Extrato por banco e extrato geral com filtros por:

Data

Banco

Tag

Tipo (entrada/saída)

Valor

🚨 Avisos e Alertas
⚠️ Alerta se o saldo for insuficiente pra uma despesa.

🔻 Permitir (ou não) que um banco fique com saldo negativo (decisão sua, não do gerente).

🗓️ Resumo mensal com total de entradas e saídas (aquele tapa na cara da realidade).

🖥️ Interface e Usabilidade
🎨 Interface minimalista e intuitiva.

🌙 Suporte a modo escuro (pra combinar com a fatura do cartão).

📊 Gráficos e resumos visuais de gastos (em desenvolvimento futuro).

🔒 Requisitos Não Funcionais (RNF)
🚀 Desempenho
⏩ Abertura em até 3 segundos.

⚡ Respostas locais com menos de 500ms.

🔐 Segurança
🔒 Dados locais criptografados.

📱 Biometria seguindo padrões de segurança de Android e iOS.

🔐 Bloqueio automático após inatividade.

💾 Armazenamento
📍 Tudo armazenado localmente, sem nuvem.

🗂️ Suporte a backup manual criptografado.

☁️ Preparado para futuras integrações com nuvem (se você quiser).

📱 Portabilidade
✅ Compatível com Android e iOS.

🔧 Desenvolvido com React Native + Node.js.

🛠️ Manutenibilidade e Escalabilidade
🔗 Backend modular, APIs desacopladas e código organizado.

🧠 Documentado, versionado e com testes (não é só gambiarra, prometemos).

🕵️ Privacidade
🔍 Sem coleta de dados sensíveis.

🚫 Sem envio de informações sem consentimento.

🔌 Funciona 100% offline.

🏗️ Tecnologias Utilizadas
🔥 Frontend
React Native (Expo)

React Navigation

🔥 Backend (local)
Node.js

Banco local (SQLite, RealmDB ou MongoDB local — em definição)

Autenticação JWT + Biometria/PIN