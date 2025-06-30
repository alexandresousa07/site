# TechStore - Site de Produtos Eletrônicos

Um site moderno e responsivo para anunciar produtos eletrônicos, desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Modal Interativo**: Visualização detalhada dos produtos
- **Filtro por Categoria**: Organização inteligente dos produtos
- **Formulário de Contato**: Integração com WhatsApp
- **Animações**: Efeitos visuais suaves e elegantes

## 📁 Estrutura do Projeto

```
Meu Site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🛠️ Como Usar

### 1. Abrir o Site
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

### 2. Personalizar Produtos
Edite o array `produtos` no arquivo `script.js` para adicionar, remover ou modificar produtos:

```javascript
const produtos = [
    {
        id: 1,
        nome: "Nome do Produto",
        categoria: "categoria",
        preco: "R$ 999",
        descricao: "Descrição do produto",
        imagem: "fas fa-icon",
        especificacoes: {
            "Especificação": "Valor",
            // ... mais especificações
        }
    }
    // ... mais produtos
];
```

### 3. Categorias Disponíveis
- `smartphones` - Smartphones
- `laptops` - Notebooks
- `acessorios` - Acessórios
- `gaming` - Produtos para Gaming

### 4. Personalizar Informações de Contato
Edite as informações de contato no arquivo `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h3>Telefone</h3>
        <p>SEU_TELEFONE</p>
    </div>
</div>
```

### 5. Personalizar WhatsApp
No arquivo `script.js`, altere o número do WhatsApp na função `contatarVendedor`:

```javascript
const whatsappUrl = `https://wa.me/SEU_NUMERO?text=${encodeURIComponent(mensagem)}`;
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no arquivo `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Azul principal */
    --secondary-color: #667eea;  /* Azul secundário */
    --text-color: #1f2937;       /* Cor do texto */
    --light-bg: #f8fafc;         /* Fundo claro */
}
```

### Fontes
O site usa a fonte Inter do Google Fonts. Para alterar, modifique no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SUA_FONTE:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Ícones
Os ícones são do Font Awesome. Para adicionar novos ícones, consulte: https://fontawesome.com/icons

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com grid de 3-4 colunas
- **Tablet**: Layout adaptado com grid de 2 colunas
- **Mobile**: Layout em coluna única com menu hambúrguer

## 🔧 Funcionalidades

### Navegação
- Menu fixo no topo
- Navegação suave entre seções
- Menu hambúrguer para mobile

### Produtos
- Cards interativos
- Modal com detalhes completos
- Filtro por categoria
- Especificações técnicas

### Contato
- Formulário funcional
- Integração com WhatsApp
- Informações de contato

### Animações
- Scroll reveal
- Hover effects
- Transições suaves

## 🌐 Hospedagem

Para hospedar o site, você pode usar:

1. **GitHub Pages** (Gratuito)
2. **Netlify** (Gratuito)
3. **Vercel** (Gratuito)
4. **Qualquer servidor web**

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário no site.

## 📄 Licença

Este projeto é de uso livre para fins comerciais e pessoais.

---

**Desenvolvido com ❤️ para sua loja de produtos eletrônicos** 