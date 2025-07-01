// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro Max",
        categoria: "smartphones",
        preco: "R$ 9.999",
        descricao: "O smartphone mais avançado da Apple com chip A17 Pro, câmera tripla de 48MP e design em titânio.",
        imagem: "fas fa-mobile-alt",
        especificacoes: {
            "Tela": "6.7 polegadas Super Retina XDR OLED",
            "Processador": "A17 Pro com Neural Engine",
            "RAM": "8GB",
            "Armazenamento": "256GB/512GB/1TB",
            "Câmera": "Tripla 48MP + 12MP + 12MP",
            "Bateria": "4441mAh com carregamento rápido",
            "Sistema": "iOS 17"
        }
    },
    {
        id: 2,
        nome: "MacBook Pro M3 Max",
        categoria: "laptops",
        preco: "R$ 24.999",
        descricao: "Notebook profissional com chip M3 Max, até 128GB de RAM unificada e tela Liquid Retina XDR.",
        imagem: "fas fa-laptop",
        especificacoes: {
            "Tela": "16 polegadas Liquid Retina XDR",
            "Processador": "Apple M3 Max",
            "RAM": "32GB/64GB/128GB unificada",
            "Armazenamento": "1TB/2TB/4TB/8TB SSD",
            "GPU": "Integrada M3 Max",
            "Sistema": "macOS Sonoma",
            "Bateria": "Até 22 horas"
        }
    },
    {
        id: 3,
        nome: "AirPods Pro 2",
        categoria: "acessorios",
        preco: "R$ 2.999",
        descricao: "Fones de ouvido sem fio com cancelamento de ruído adaptativo e áudio espacial personalizado.",
        imagem: "fas fa-headphones",
        especificacoes: {
            "Tipo": "Intra-auricular sem fio",
            "Cancelamento de Ruído": "Adaptativo ativo",
            "Áudio Espacial": "Personalizado com head tracking",
            "Bateria": "Até 6 horas (30h com case)",
            "Conexão": "Bluetooth 5.3",
            "Compatibilidade": "iOS, Android, macOS",
            "Resistência": "IPX4 (água e suor)"
        }
    },
    {
        id: 4,
        nome: "PlayStation 5 Pro",
        categoria: "gaming",
        preco: "R$ 5.999",
        descricao: "Console de nova geração com gráficos 8K, ray tracing avançado e SSD ultrarrápido de 2TB.",
        imagem: "fas fa-gamepad",
        especificacoes: {
            "Processador": "AMD Zen 4 8-core",
            "GPU": "AMD RDNA 4 18 TFLOPs",
            "RAM": "24GB GDDR7",
            "Armazenamento": "2TB SSD NVMe",
            "Resolução": "Até 8K",
            "Ray Tracing": "Avançado com AI",
            "Compatibilidade": "PS4, PS5"
        }
    },
    {
        id: 5,
        nome: "Samsung Galaxy S24 Ultra",
        categoria: "smartphones",
        preco: "R$ 8.999",
        descricao: "Flagship da Samsung com IA integrada, câmera de 200MP e S Pen integrado.",
        imagem: "fas fa-mobile-alt",
        especificacoes: {
            "Tela": "6.8 polegadas Dynamic AMOLED 2X",
            "Processador": "Snapdragon 8 Gen 3",
            "RAM": "12GB/16GB",
            "Armazenamento": "256GB/512GB/1TB",
            "Câmera": "Quádrupla 200MP + 12MP + 50MP + 10MP",
            "Bateria": "5000mAh com carregamento 45W",
            "Sistema": "Android 14 + One UI 6.1"
        }
    },
    {
        id: 6,
        nome: "Dell XPS 15 OLED",
        categoria: "laptops",
        preco: "R$ 12.999",
        descricao: "Notebook premium com tela OLED 4K, processador Intel de 14ª geração e design InfinityEdge.",
        imagem: "fas fa-laptop",
        especificacoes: {
            "Tela": "15.6 polegadas 4K OLED",
            "Processador": "Intel Core i9-14900H",
            "RAM": "32GB DDR5",
            "Armazenamento": "1TB SSD NVMe",
            "GPU": "NVIDIA RTX 4070 8GB",
            "Sistema": "Windows 11 Pro",
            "Bateria": "Até 13 horas"
        }
    },
    {
        id: 7,
        nome: "Apple Watch Series 9",
        categoria: "acessorios",
        preco: "R$ 3.999",
        descricao: "Smartwatch com chip S9, detecção de queda avançada e monitoramento cardíaco preciso.",
        imagem: "fas fa-watch",
        especificacoes: {
            "Tela": "Always-On Retina LTPO OLED",
            "Processador": "Apple S9 SiP",
            "Armazenamento": "64GB",
            "Bateria": "Até 18 horas",
            "Resistência": "IP6X + resistente a água",
            "Sensores": "ECG, oxímetro, acelerômetro",
            "Compatibilidade": "iPhone 8 ou posterior"
        }
    },
    {
        id: 8,
        nome: "Nintendo Switch OLED",
        categoria: "gaming",
        preco: "R$ 2.999",
        descricao: "Console híbrido com tela OLED de 7 polegadas, áudio aprimorado e maior armazenamento.",
        imagem: "fas fa-gamepad",
        especificacoes: {
            "Tela": "7 polegadas OLED",
            "Processador": "NVIDIA Tegra X1+",
            "RAM": "4GB LPDDR4X",
            "Armazenamento": "64GB",
            "Resolução": "720p (portátil) / 1080p (dock)",
            "Bateria": "Até 9 horas",
            "Compatibilidade": "Todos os jogos Switch"
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

// Elementos da busca
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clearSearch = document.getElementById('clearSearch');

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
                    <i class="fas fa-eye"></i>
                    Ver Detalhes
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Abrir modal do produto otimizado para mobile
function abrirModal(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) return;

    // Adiciona loading
    modalContent.innerHTML = '<div style="text-align:center;padding:2rem"><i class="fas fa-spinner fa-spin fa-2x"></i><br>Carregando...</div>';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Renderiza conteúdo após pequeno delay (para evitar travamento)
    setTimeout(() => {
        if (isMobile()) {
            // Modal simplificado para mobile
            modalContent.innerHTML = `
                <div class="modal-product">
                    <div class="modal-product-header">
                        <div class="modal-product-image">
                            <i class="${produto.imagem}"></i>
                        </div>
                        <div class="modal-product-info">
                            <h2>${produto.nome}</h2>
                            <div class="modal-product-price">${produto.preco}</div>
                        </div>
                    </div>
                    <div class="modal-product-specs">
                        <h3>Especificações</h3>
                        <div class="specs-grid">
                            ${Object.entries(produto.especificacoes).slice(0, 4).map(([key, value]) => `
                                <div class="spec-item">
                                    <strong>${key}:</strong> ${value}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="modal-product-actions">
                        <button class="btn btn-primary" onclick="contatarVendedor('${produto.nome}')">
                            <i class="fas fa-whatsapp"></i> Contatar
                        </button>
                        <button class="btn btn-secondary" onclick="fecharModal()">
                            <i class="fas fa-times"></i> Fechar
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Modal completo para desktop/tablet
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
                        <h3>Especificações Técnicas</h3>
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
                            <i class="fas fa-times"></i> Fechar
                        </button>
                    </div>
                </div>
            `;
        }
    }, isMobile() ? 250 : 80); // Delay maior no mobile para suavizar transição
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
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.2)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Efeito de partículas no hero
function criarParticulas() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.style.position = 'absolute';
        particula.style.width = '2px';
        particula.style.height = '2px';
        particula.style.background = 'rgba(0, 212, 255, 0.5)';
        particula.style.borderRadius = '50%';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.top = Math.random() * 100 + '%';
        particula.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particula.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particula);
    }
}

// Funções de Busca
function inicializarBusca() {
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length >= 2) {
                buscarProdutos(query);
            } else {
                ocultarResultadosBusca();
            }
        }, 300);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) {
            buscarProdutos(searchInput.value.trim().toLowerCase());
        }
    });

    // Limpar busca
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        ocultarResultadosBusca();
        searchInput.focus();
    });

    // Fechar resultados ao clicar fora
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            ocultarResultadosBusca();
        }
    });

    // Navegação com teclado
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ocultarResultadosBusca();
            searchInput.blur();
        }
    });
}

function buscarProdutos(query) {
    const resultados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(query) ||
        produto.descricao.toLowerCase().includes(query) ||
        produto.categoria.toLowerCase().includes(query)
    );

    mostrarResultadosBusca(resultados, query);
}

function mostrarResultadosBusca(resultados, query) {
    if (resultados.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum produto encontrado para "${query}"</p>
                <small>Tente buscar por outro termo</small>
            </div>
        `;
    } else {
        searchResults.innerHTML = resultados.map(produto => `
            <div class="search-result-item" onclick="selecionarProdutoBusca(${produto.id})">
                <div class="search-result-icon">
                    <i class="${produto.imagem}"></i>
                </div>
                <div class="search-result-info">
                    <div class="search-result-name">${produto.nome}</div>
                    <div class="search-result-category">${produto.categoria}</div>
                </div>
                <div class="search-result-price">${produto.preco}</div>
            </div>
        `).join('');
    }

    searchResults.classList.add('active');
    clearSearch.style.display = 'block';
}

function ocultarResultadosBusca() {
    searchResults.classList.remove('active');
    clearSearch.style.display = 'none';
}

function selecionarProdutoBusca(produtoId) {
    ocultarResultadosBusca();
    searchInput.value = '';
    
    // Abrir modal do produto
    abrirModal(produtoId);
    
    // Scroll para a seção de produtos
    document.getElementById('produtos').scrollIntoView({
        behavior: 'smooth'
    });
}

// Função utilitária para detectar mobile
function isMobile() {
    return window.innerWidth <= 600 || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    if (!isMobile()) {
        animarElementos();
        criarParticulas();
    }
    headerScroll();
    inicializarBusca();
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
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
    padding: 2rem;
    border-radius: 12px;
    min-width: 120px;
    text-align: center;
}

.modal-product-info h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-weight: 800;
}

.modal-product-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.modal-product-price {
    font-size: 2rem;
    font-weight: 800;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.modal-product-specs {
    margin-bottom: 2rem;
}

.modal-product-specs h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 700;
}

.specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.spec-item {
    padding: 0.8rem;
    background: var(--card-bg);
    border-radius: 8px;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
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

// --- Busca Mobile ---
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const mobileSearchModal = document.getElementById('mobileSearchModal');
const closeMobileSearch = document.getElementById('closeMobileSearch');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const mobileSearchResults = document.getElementById('mobileSearchResults');

if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', () => {
        mobileSearchModal.style.display = 'block';
        setTimeout(() => mobileSearchInput.focus(), 200);
        document.body.style.overflow = 'hidden';
        mobileSearchInput.value = '';
        mobileSearchResults.innerHTML = '';
    });
}
if (closeMobileSearch) {
    closeMobileSearch.addEventListener('click', () => {
        mobileSearchModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}
if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length >= 2) {
            const resultados = produtos.filter(produto =>
                produto.nome.toLowerCase().includes(query) ||
                produto.descricao.toLowerCase().includes(query) ||
                produto.categoria.toLowerCase().includes(query)
            );
            if (resultados.length === 0) {
                mobileSearchResults.innerHTML = `<div class='no-results'><i class='fas fa-search'></i><p>Nenhum produto encontrado</p></div>`;
            } else {
                mobileSearchResults.innerHTML = resultados.map(produto => `
                    <div class='search-result-item' style='padding:0.7rem' onclick='selecionarProdutoBusca(${produto.id})'>
                        <div class='search-result-icon'><i class='${produto.imagem}'></i></div>
                        <div class='search-result-info'>
                            <div class='search-result-name'>${produto.nome}</div>
                            <div class='search-result-price'>${produto.preco}</div>
                        </div>
                    </div>
                `).join('');
            }
            mobileSearchResults.style.display = 'block';
        } else {
            mobileSearchResults.innerHTML = '';
            mobileSearchResults.style.display = 'none';
        }
    });
}
// Esconde modal de busca mobile ao clicar fora
if (mobileSearchModal) {
    mobileSearchModal.addEventListener('click', (e) => {
        if (e.target === mobileSearchModal) {
            mobileSearchModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
// Exibe só a lupa no mobile
function toggleMobileSearchUI() {
    if (window.innerWidth <= 600) {
        if (mobileSearchBtn) mobileSearchBtn.style.display = 'flex';
        const desktopSearch = document.querySelector('.desktop-search');
        if (desktopSearch) desktopSearch.style.display = 'none';
    } else {
        if (mobileSearchBtn) mobileSearchBtn.style.display = 'none';
        const desktopSearch = document.querySelector('.desktop-search');
        if (desktopSearch) desktopSearch.style.display = 'flex';
    }
}
window.addEventListener('resize', toggleMobileSearchUI);
document.addEventListener('DOMContentLoaded', toggleMobileSearchUI); 