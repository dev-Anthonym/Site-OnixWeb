# Ônix Web Studio

Site-portfólio da Ônix Web Studio: apresentação, portfólio, planos, combos e contato pelo WhatsApp.

Feito só com HTML, CSS e JavaScript, sem nada para instalar. Para ver no computador, basta abrir o `index.html` no navegador.

## Onde alterar cada coisa

| O que | Onde |
| --- | --- |
| Número do WhatsApp | `assets/js/main.js`, na linha `const WHATSAPP = "5500000000000";` (DDI + DDD + número, só números) |
| Textos, planos e preços | `index.html` (cada seção tem um comentário `<!-- ===== Nome ===== -->`) |
| Preços do combo | `index.html`, atributos `data-combo="..."` dentro de cada plano |
| Projetos do portfólio | `index.html`, seção Portfólio: troque o `href="#"` pelo link do site e o texto "Em breve" |
| Cores e fontes | `assets/css/style.css`, no bloco `:root` no topo |
| Instagram | `index.html`, no rodapé (`instagram.com/onixweb`) |

## Publicar de graça no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
3. Em 1 ou 2 minutos o site fica no ar em `https://dev-Anthonym.github.io/Site-OnixWeb/`.

Quando tiver um domínio (ex.: `onixweb.com.br`), ele pode ser apontado para o GitHub Pages na mesma tela.
