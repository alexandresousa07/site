// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: "R$ 8.999",
        descricao: "O mais recente smartphone da Apple com chip A17 Pro e câmera tripla.",
        imagem: "fas fa-mobile-alt",
        especificacoes: {
            "Tela": "6.1 polegadas OLED",
            "Processador": "A17 Pro",
            "RAM": "8GB",
            "Armazenamento": "128GB/256GB/512GB/1TB",
            "Câmera": "Tripla 48MP + 12MP + 12MP",
            "Bateria": "3650mAh"
        }
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: "R$ 9.999",
        descricao: "Notebook ultraportátil com chip M2 da Apple, perfeito para produtividade.",
        imagem: "fas fa-laptop",
        especificacoes: {
            "Tela": "13.6 polegadas Retina",
            "Processador": "Apple M2",
            "RAM": "8GB/16GB",
            "Armazenamento": "256GB/512GB/1TB/2TB",
            "Sistema": "macOS Ventura",
            "Bateria": "Até 18 horas"
        }
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "acessorios",
        preco: "R$ 2.499",
        descricao: "Fones de ouvido sem fio com cancelamento de ruído ativo e áudio espacial.",
        imagem: "fas fa-headphones",
        especificacoes: {
            "Tipo": "Intra-auricular sem fio",
            "Cancelamento de Ruído": "Ativo",
            "Áudio Espacial": "Sim",
            "Bateria": "Até 6 horas (24h com case)",
            "Conexão": "Bluetooth 5.0",
            "Compatibilidade": "iOS, Android, macOS"
        }
    },
    {
        id: 4,
        nome: "PlayStation 5",
        categoria: "gaming",
        preco: "R$ 4.499",
        descricao: "Console de nova geração com gráficos 4K e SSD ultrarrápido.",
        imagem: "fas fa-gamepad",
        especificacoes: {
            "Processador": "AMD Zen 2 8-core",
            "GPU": "AMD RDNA 2 10.28 TFLOPs",
            "RAM": "16GB GDDR6",
            "Armazenamento": "825GB SSD",
            "Resolução": "Até 8K",
            "Ray Tracing": "Sim"
        }
    },
    {
        id: 5,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: "R$ 6.999",
        descricao: "Flagship da Samsung com IA integrada e câmera de 200MP.",
        imagem: "fas fa-mobile-alt",
        especificacoes: {
            "Tela": "6.2 polegadas Dynamic AMOLED",
            "Processador": "Snapdragon 8 Gen 3",
            "RAM": "8GB/12GB",
            "Armazenamento": "128GB/256GB/512GB",
            "Câmera": "Tripla 200MP + 12MP + 50MP",
            "Bateria": "4000mAh"
        }
    },
    {
        id: 6,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: "R$ 7.999",
        descricao: "Notebook premium com tela InfinityEdge e processador Intel de 13ª geração.",
        imagem: "fas fa-laptop",
        especificacoes: {
            "Tela": "13.4 polegadas 4K OLED",
            "Processador": "Intel Core i7-1355U",
            "RAM": "16GB LPDDR5",
            "Armazenamento": "512GB SSD",
            "Sistema": "Windows 11 Pro",
            "Bateria": "Até 12 horas"
        }
    }
];

// Elementos DOM
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const productsGrid = document.getElementById('productsGrid');
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const categoryCards = document.querySelectorAll('.category-card');

// Menu mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carregar produtos
function carregarProdutos(categoria = null) {
    productsGrid.innerHTML = '';
    
    const produtosFiltrados = categoria 
        ? produtos.filter(p => p.categoria === categoria)
        : produtos;

    produtosFiltrados.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <i class="${produto.imagem}"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <div class="product-price">${produto.preco}</div>
                <button class="product-button" onclick="abrirModal(${produto.id})">
                    Ver Detalhes
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Abrir modal do produto
function abrirModal(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) return;

    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-header">
                <div class="modal-product-image">
                    <i class="${produto.imagem}"></i>
                </div>
                <div class="modal-product-info">
                    <h2>${produto.nome}</h2>
                    <p class="modal-product-description">${produto.descricao}</p>
                    <div class="modal-product-price">${produto.preco}</div>
                </div>
            </div>
            <div class="modal-product-specs">
                <h3>Especificações</h3>
                <div class="specs-grid">
                    ${Object.entries(produto.especificacoes).map(([key, value]) => `
                        <div class="spec-item">
                            <strong>${key}:</strong> ${value}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-product-actions">
                <button class="btn btn-primary" onclick="contatarVendedor('${produto.nome}')">
                    <i class="fas fa-whatsapp"></i> Contatar Vendedor
                </button>
                <button class="btn btn-secondary" onclick="fecharModal()">
                    Fechar
                </button>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function fecharModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

// Fechar modal com X
closeModal.addEventListener('click', fecharModal);

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        fecharModal();
    }
});

// Filtro por categoria
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const categoria = card.dataset.category;
        carregarProdutos(categoria);
        
        // Scroll para produtos
        document.getElementById('produtos').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contatar vendedor (simulação)
function contatarVendedor(nomeProduto) {
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}`;
    const whatsappUrl = `https://wa.me/54999771085?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
}

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const nome = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const telefone = contactForm.querySelector('input[type="tel"]').value;
    const mensagem = contactForm.querySelector('textarea').value;

    // Simulação de envio
    alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    contactForm.reset();
});

// Animação de scroll
function animarElementos() {
    const elementos = document.querySelectorAll('.product-card, .category-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header com scroll
function headerScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    animarElementos();
    headerScroll();
});

// Estilos adicionais para o modal
const modalStyles = `
<style>
.modal-product {
    padding: 1rem 0;
}

.modal-product-header {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
}

.modal-product-image {
    font-size: 4rem;
    color: #2563eb;
    background: #f3f4f6;
    padding: 2rem;
    border-radius: 12px;
    min-width: 120px;
    text-align: center;
}

.modal-product-info h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
}

.modal-product-description {
    color: #6b7280;
    margin-bottom: 1rem;
}

.modal-product-price {
    font-size: 2rem;
    font-weight: 700;
    color: #2563eb;
}

.modal-product-specs {
    margin-bottom: 2rem;
}

.modal-product-specs h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #1f2937;
}

.specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.spec-item {
    padding: 0.5rem;
    background: #f9fafb;
    border-radius: 6px;
    font-size: 0.9rem;
}

.modal-product-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .modal-product-header {
        flex-direction: column;
        text-align: center;
    }
    
    .modal-product-image {
        align-self: center;
    }
    
    .specs-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-product-actions {
        flex-direction: column;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles); 