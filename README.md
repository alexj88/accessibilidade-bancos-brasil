# AcessInvest
## Accessibilidade em Bancos Brasileiros  

Este projeto visa analisar e melhorar a acessibilidade digital nos bancos do Brasil, garantindo que todos os usuários, incluindo pessoas com deficiência, possam utilizar os serviços bancários online de forma igualitária.

## 📌 Objetivos  

- ✅ Avaliar o nível de acessibilidade dos principais bancos brasileiros  
- 🔍 Identificar barreiras comuns enfrentadas por usuários com deficiência  
- 🛠️ Fornecer recomendações para melhorias  
- ♿ Promover a inclusão digital no setor bancário  

## 🔬 Metodologia  

O projeto utiliza uma combinação de:  

1. **Avaliação técnica** com ferramentas automatizadas  
2. **Testes com usuários** reais com diferentes tipos de deficiência  
3. **Análise manual** de conformidade com as diretrizes WCAG.

## 🏦 Bancos Analisados  

- Banco do Brasil  
- Itaú  
- Bradesco  
- Santander  
- Caixa Econômica Federal  
- Nubank  
- Banco Inter  
- Outras instituições financeiras
## 🚀 Como Executar Localmente

O único requisito é ter [Node.js](https://nodejs.org/) (recomendado v18+) , npm e um navegador de sua preferência instalados.

### Passos para desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/alexj88/accessibilidade-bancos-brasil.git
   cd accessibilidade-bancos-brasil
2. **Instale as dependências:**
   ```bash
   npm install
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
6. **O projeto estará disponível em**
      ```bash
      http://localhost:8080
7. **Cole a url acima no navegador de sua preferência**
  
## 🔧 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) – Frontend Tooling  
- [React](https://react.dev/) – Biblioteca JavaScript  
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática  
- [Tailwind CSS](https://tailwindcss.com/) – Estilização  
- [shadcn/ui](https://ui.shadcn.com/) – Componentes UI acessíveis  
- [Radix UI](https://www.radix-ui.com/) – Componentes primitivos acessíveis


## 🤝 Como Contribuir  

1. 🍴 Faça um *fork* do projeto  
2. 🧪 Realize testes em sites/apps bancários  
3. 📝 Documente suas descobertas  
4. 🔄 Envie um *pull request* com suas contribuições  

## ⚙️ Requisitos  

- Conhecimento básico de acessibilidade web
  ### ferramenta utilizada
  - [PageSpeed Insights](https://pagespeed.web.dev/) - Ferramenta de Análise de Performace e Acessibilidade
- Ferramentas brasileiras de acessibilidade:
  
  - [ASES Web](https://asesweb.governoeletronico.gov.br/) - Avaliador e Simulador de Acessibilidade Sítios
  - [DaSilva](https://www.dasilva.org.br/) - Ferramenta de avaliação de acessibilidade
  - [NVDA em Português](https://www.nvaccess.org/download/) - Leitor de tela gratuito
  - [VLibras](https://www.vlibras.gov.br/) - Suite de ferramentas para acessibilidade de surdos
- Dispositivos com diferentes configurações de acessibilidade

## 🛠️ Ferramentas Utilizadas

### [PageSpeed Insights](https://pagespeed.web.dev)
Ferramenta gratuita do Google para análise de desempenho web (mobile e desktop).  

#### **Como Usar?**
1. Acesse [https://pagespeed.web.dev](https://pagespeed.web.dev).  
2. Insira a URL do site.  
3. Selecione **Mobile** ou **Desktop**.  
4. Clique em **Analisar**.  

#### **Vantagens**
- 🚀 **Oficial do Google** (alinhado com critérios de ranqueamento).  
- 💡 **Recomendações práticas** para melhorias.  
- 🆓 **Grátis** (sem necessidade de cadastro).  

#### **Limitações**
- ⏳ Dados não são em tempo real (teste sob demanda).  
- ⚙️ Algumas otimizações exigem conhecimento técnico avançado.  
> 🔗 **Link**: [PageSpeed Insights](https://pagespeed.web.dev)  
> 🏷️ **Categoria**: Análise de Desempenho Web


## ♿ Acessibilidade WCAG (via PageSpeed Insights)

Ferramenta integrada ao [PageSpeed Insights](https://pagespeed.web.dev) que avalia a conformidade de páginas web com os padrões internacionais de acessibilidade (**WCAG 2.1**). Ideal para garantir que seu site seja utilizável por pessoas com deficiências visuais, motoras ou cognitivas.

### 🔍 **Critérios Analisados**
O relatório verifica:
- **✅ Contrastes de cores**:  
  Texto/fundo devem ter taxa de contraste ≥ 4.5:1 (WCAG AA).  
- **📌 Elementos interativos**:  
  Botões e links devem ter tamanho adequado (≥ 24px) e áreas de toque claras.  
- **🔠 Tamanho de fonte**:  
  Texto redimensionável sem perda de funcionalidade.  
- **🏷️ Atributos semânticos**:  
  Uso correto de `alt` em imagens, `aria-label`, `header`, `nav` e `landmarks`.  
- **⌨️ Navegação por teclado**:  
  Todos os elementos devem ser acessíveis via `Tab`/`Shift+Tab`.  
- **🎯 Foco visível**:  
  Indicação clara do elemento em foco (ex.: borda destacada).  

### 📊 **Como Interpretar o Relatório?**
1. Acesse [PageSpeed Insights](https://pagespeed.web.dev).  
2. Insira a URL e clique em **Analisar**.  
3. Na seção **"Acessibilidade"**, encontre:  
   - 🟢 **Passou**: Atende aos critérios.  
   - 🟡 **Precisa de melhoria**: Problemas moderados.  
   - 🔴 **Falhou**: Violações graves da WCAG.  

### 🛠️ **Exemplos de Correções**  
- **Problema**: "Contraste de cores insuficiente".  
  **Solução**: Use ferramentas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).  
- **Problema**: "Imagem sem texto alternativo".  
  **Solução**: Adicione `alt="descrição significativa"`.  


> 🔗 **Referência WCAG**: [Diretrizes Oficiais](https://www.w3.org/WAI/standards-guidelines/wcag/)  
> 📌 **Categoria**: Auditoria de Acessibilidade  
- 📊 **Relatórios detalhados** com sugestões de otimização (CSS, JS, imagens, etc.).  
- 📱 **Simulação** em dispositivos móveis e desktop.  
- 🔍 **Auditoria integrada** de SEO e acessibilidade.  

## 📜 Licença  

Este projeto é licenciado sob a **[MIT License](LICENSE)**.  

## 📩 Contato  
acessinvest@email.com.br

Para dúvidas ou sugestões:  
- 📥 Abra uma *issue* no repositório  
- ✉️ Entre em contato com o mantenedor do projeto  
