// Chatbot para suporte ao cliente
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        // Criar elementos do chatbot
        this.createChatbotHTML();
        this.bindEvents();
        this.loadInitialMessage();
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <div id="chatbot-toggle" class="chatbot-toggle">
                    <i class="fas fa-comments"></i>
                    <span class="notification-dot"></span>
                </div>
                
                <div id="chatbot-window" class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <i class="fas fa-robot"></i>
                            <span>Suporte TechStore</span>
                        </div>
                        <button id="chatbot-close" class="chatbot-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div id="chatbot-messages" class="chatbot-messages">
                        <!-- Mensagens aparecerão aqui -->
                    </div>
                    
                    <div class="chatbot-input-container">
                        <input type="text" id="chatbot-input" placeholder="Digite sua mensagem..." maxlength="200">
                        <button id="chatbot-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        send.addEventListener('click', () => this.sendMessage());

        // Adicionar event listener para quick replies usando event delegation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply')) {
                const action = e.target.dataset.action;
                this.handleQuickReply(action);
            }
        });
    }

    toggleChat() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            window.style.display = 'block';
            document.getElementById('chatbot-input').focus();
            this.scrollToBottom();
        } else {
            window.style.display = 'none';
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-window').style.display = 'none';
    }

    loadInitialMessage() {
        setTimeout(() => {
            this.addMessage('bot', 'Olá! 👋 Sou o assistente virtual da TechStore. Como posso ajudar você hoje?', this.menuOptions());
        }, 1000);
    }

    menuOptions() {
        return [
            { text: 'Ver produtos', action: 'show_products' },
            { text: 'Informações de entrega', action: 'delivery_info' },
            { text: 'Garantia', action: 'warranty_info' },
            { text: 'Falar com humano', action: 'human_support' }
        ];
    }

    addMessage(sender, text, quickReplies = []) {
        const messagesContainer = document.getElementById('chatbot-messages');
        // Remove quick replies antigos
        const oldQuickReplies = messagesContainer.querySelectorAll('.quick-replies');
        oldQuickReplies.forEach(qr => qr.remove());

        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${text}</div>
                ${quickReplies.length > 0 ? this.createQuickReplies(quickReplies) : ''}
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        this.messages.push({ sender, text, timestamp: new Date() });
    }

    createQuickReplies(replies) {
        // Sempre adiciona o botão de voltar ao menu
        const allReplies = [
            ...replies,
            { text: 'Voltar ao menu', action: 'main_menu' }
        ];
        const repliesHTML = allReplies.map(reply => 
            `<button class="quick-reply" data-action="${reply.action}">${reply.text}</button>`
        ).join('');
        
        return `<div class="quick-replies">${repliesHTML}</div>`;
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message) {
            this.addMessage('user', message);
            input.value = '';
            this.processUserMessage(message);
        }
    }

    processUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simular processamento
        setTimeout(() => {
            if (lowerMessage.includes('produto') || lowerMessage.includes('comprar') || lowerMessage.includes('preço')) {
                this.addMessage('bot', 'Temos uma grande variedade de produtos! 🛍️', [
                    { text: 'Smartphones', action: 'category_smartphones' },
                    { text: 'Notebooks', action: 'category_laptops' },
                    { text: 'Acessórios', action: 'category_acessorios' },
                    { text: 'Gaming', action: 'category_gaming' }
                ]);
            }
            else if (lowerMessage.includes('entrega') || lowerMessage.includes('frete') || lowerMessage.includes('envio')) {
                this.addMessage('bot', '🚚 Nossa entrega é rápida e segura!', [
                    { text: 'Prazo de entrega', action: 'delivery_time' },
                    { text: 'Custo do frete', action: 'delivery_cost' },
                    { text: 'Rastreamento', action: 'tracking' }
                ]);
            }
            else if (lowerMessage.includes('garantia') || lowerMessage.includes('devolução')) {
                this.addMessage('bot', '✅ Todos os nossos produtos têm 1 mês de garantia!', [
                    { text: 'Como funciona a garantia', action: 'warranty_details' },
                    { text: 'Processo de devolução', action: 'return_process' },
                    { text: 'Falar com suporte', action: 'human_support' }
                ]);
            }
            else if (lowerMessage.includes('contato') || lowerMessage.includes('telefone') || lowerMessage.includes('whatsapp')) {
                this.addMessage('bot', '📞 Você pode nos contatar pelos seguintes canais:', [
                    { text: 'WhatsApp', action: 'whatsapp_contact' },
                    { text: 'Telefone', action: 'phone_contact' },
                    { text: 'Email', action: 'email_contact' }
                ]);
            }
            else {
                this.addMessage('bot', 'Desculpe, não entendi sua pergunta. 😅 Pode reformular ou escolher uma das opções abaixo:', this.menuOptions());
            }
        }, 800);
    }

    handleQuickReply(action) {
        if (action === 'main_menu') {
            this.addMessage('bot', 'Menu principal. Como posso ajudar você?', this.menuOptions());
            return;
        }
        console.log('Handling action:', action); // Debug
        
        switch(action) {
            case 'show_products':
                this.addMessage('bot', 'Aqui estão nossas categorias principais:', [
                    { text: 'Smartphones', action: 'category_smartphones' },
                    { text: 'Notebooks', action: 'category_laptops' },
                    { text: 'Acessórios', action: 'category_acessorios' },
                    { text: 'Gaming', action: 'category_gaming' }
                ]);
                break;
                
            case 'delivery_info':
                this.addMessage('bot', '🚚 Nossa entrega é rápida e segura!', [
                    { text: 'Prazo de entrega', action: 'delivery_time' },
                    { text: 'Custo do frete', action: 'delivery_cost' },
                    { text: 'Rastreamento', action: 'tracking' }
                ]);
                break;
                
            case 'warranty_info':
                this.addMessage('bot', '✅ Todos os nossos produtos têm 1 mês de garantia!', [
                    { text: 'Como funciona a garantia', action: 'warranty_details' },
                    { text: 'Processo de devolução', action: 'return_process' },
                    { text: 'Falar com suporte', action: 'human_support' }
                ]);
                break;
                
            case 'warranty_details':
                this.addMessage('bot', '📋 **Como funciona nossa garantia:**\n\n• Todos os produtos têm 1 mês de garantia\n• Cobre defeitos de fabricação\n• Troca ou devolução do dinheiro\n• Atendimento prioritário para clientes com garantia\n\nPrecisa de mais informações?', [
                    { text: 'Processo de devolução', action: 'return_process' },
                    { text: 'Falar com suporte', action: 'human_support' }
                ]);
                break;
                
            case 'return_process':
                this.addMessage('bot', '🔄 **Processo de devolução:**\n\n1. Entre em contato conosco\n2. Descreva o problema\n3. Enviamos etiqueta de retorno\n4. Produto chega em 1-2 dias\n5. Análise em até 3 dias úteis\n6. Resolução: troca ou reembolso', [
                    { text: 'Como funciona a garantia', action: 'warranty_details' },
                    { text: 'Falar com suporte', action: 'human_support' }
                ]);
                break;
                
            case 'human_support':
                this.addMessage('bot', '👨‍💼 Vou conectar você com nosso atendente humano!', [
                    { text: 'WhatsApp', action: 'whatsapp_contact' },
                    { text: 'Telefone', action: 'phone_contact' }
                ]);
                break;
                
            case 'whatsapp_contact':
                this.addMessage('bot', '📱 Clique no botão abaixo para abrir o WhatsApp:', []);
                setTimeout(() => {
                    window.open('https://wa.me/54999771085?text=Olá! Preciso de ajuda com um produto.', '_blank');
                }, 500);
                break;
                
            case 'phone_contact':
                this.addMessage('bot', '📞 Nosso telefone é: (54) 99977-1085', []);
                break;
                
            case 'email_contact':
                this.addMessage('bot', '📧 Nosso email é: contato@techstore.com', []);
                break;
                
            case 'delivery_time':
                this.addMessage('bot', '⏰ O prazo de entrega é de 1-3 dias úteis para a maioria das regiões!', [
                    { text: 'Custo do frete', action: 'delivery_cost' },
                    { text: 'Rastreamento', action: 'tracking' }
                ]);
                break;
                
            case 'delivery_cost':
                this.addMessage('bot', '💰 Frete grátis para compras acima de R$ 200! Abaixo disso, R$ 15,90.', [
                    { text: 'Prazo de entrega', action: 'delivery_time' },
                    { text: 'Rastreamento', action: 'tracking' }
                ]);
                break;
                
            case 'tracking':
                this.addMessage('bot', '📦 Após a confirmação do pagamento, você receberá o código de rastreamento por email e WhatsApp!', [
                    { text: 'Prazo de entrega', action: 'delivery_time' },
                    { text: 'Custo do frete', action: 'delivery_cost' }
                ]);
                break;
                
            case 'category_smartphones':
                this.addMessage('bot', '📱 **Smartphones em destaque:**\n\n• iPhone 15 Pro - R$ 8.999\n• Samsung Galaxy S24 - R$ 6.999\n\nQuer ver mais detalhes de algum produto?', [
                    { text: 'Ver todos os smartphones', action: 'show_all_smartphones' },
                    { text: 'Outras categorias', action: 'show_products' }
                ]);
                break;
                
            case 'category_laptops':
                this.addMessage('bot', '💻 **Notebooks em destaque:**\n\n• MacBook Air M2 - R$ 9.999\n• Dell XPS 13 - R$ 7.999\n\nQuer ver mais detalhes de algum produto?', [
                    { text: 'Ver todos os notebooks', action: 'show_all_laptops' },
                    { text: 'Outras categorias', action: 'show_products' }
                ]);
                break;
                
            case 'category_acessorios':
                this.addMessage('bot', '🎧 **Acessórios em destaque:**\n\n• AirPods Pro - R$ 2.499\n• Fones, capas, carregadores\n\nQuer ver mais detalhes de algum produto?', [
                    { text: 'Ver todos os acessórios', action: 'show_all_accessories' },
                    { text: 'Outras categorias', action: 'show_products' }
                ]);
                break;
                
            case 'category_gaming':
                this.addMessage('bot', '🎮 **Produtos Gaming em destaque:**\n\n• PlayStation 5 - R$ 4.499\n• Headsets, controles, jogos\n\nQuer ver mais detalhes de algum produto?', [
                    { text: 'Ver todos os produtos gaming', action: 'show_all_gaming' },
                    { text: 'Outras categorias', action: 'show_products' }
                ]);
                break;
                
            case 'show_all_smartphones':
            case 'show_all_laptops':
            case 'show_all_accessories':
            case 'show_all_gaming':
                this.addMessage('bot', '🛍️ Para ver todos os produtos desta categoria, acesse nossa seção de produtos no site!', [
                    { text: 'Ver produtos', action: 'show_products' },
                    { text: 'Falar com humano', action: 'human_support' }
                ]);
                break;
                
            default:
                this.addMessage('bot', 'Desculpe, não entendi essa opção. Pode escolher uma das opções disponíveis ou falar com um humano?', this.menuOptions());
                break;
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Inicializar chatbot quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
}); 