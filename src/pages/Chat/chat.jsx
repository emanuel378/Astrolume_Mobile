import { useState, useEffect } from 'react';
import Groq from 'groq-sdk';

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Eu sou Lua, sua assistente virtual. Posso ajudar com matemática, horas, conhecimentos gerais, ou o que você precisar! ✨' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  
  
  const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true 
});

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));
      
      history.push({ role: 'user', content: input });

      const completion = await groq.chat.completions.create({
        messages: history,
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1000,
      });

      const botResponse = completion.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
      
    } catch (error) {
      console.error('Erro detalhado:', error);
      
      let botResponse = '';
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('horas') || lowerInput.includes('hora') || lowerInput.includes('que horas')) {
        const now = new Date();
        const horas = now.getHours().toString().padStart(2, '0');
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');
        botResponse = `🕐 São ${horas}:${minutos}:${segundos} agora!`;
      }
      else if (lowerInput.includes('quanto é') || lowerInput.match(/\d+\s*[\+\-\*\/]\s*\d+/)) {
        const match = input.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
        if (match) {
          const num1 = parseInt(match[1]);
          const op = match[2];
          const num2 = parseInt(match[3]);
          let result;
          switch(op) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? (num1 / num2).toFixed(2) : 'indefinido'; break;
            default: result = 'operação inválida';
          }
          botResponse = `🧮 ${num1} ${op} ${num2} = ${result}`;
        } else {
          botResponse = '🤔 Exemplos:\n• "2 + 2"\n• "10 * 5"\n• "20 / 4"';
        }
      }
      else if (lowerInput.includes('função afim') || lowerInput.includes('funcao afim')) {
        if (isMobile) {
          botResponse = `📐 FUNÇÃO AFIM (1° grau)\n\nf(x) = ax + b\n\na = coeficiente angular\nb = coeficiente linear\n\nEx: Táxi: R$ 2,50/km + R$ 5,00`;
        } else {
          botResponse = `📐 **FUNÇÃO AFIM (1° grau)**

Definição: f(x) = ax + b

Componentes:
• a = coeficiente angular (taxa de variação)
• b = coeficiente linear (valor inicial)

Exemplo prático: Táxi
• Bandeirada: R$ 5,00 (b)
• Valor por km: R$ 2,50 (a)
• f(x) = 2,50x + 5

Aplicações:
• Planos de celular (mensalidade + consumo)
• Conversão de temperaturas (°C → °F = 1,8C + 32)
• Salário com comissão
• Preços de hospedagem`;
        }
      }
      else if (lowerInput.includes('olá') || lowerInput.includes('oi') || lowerInput.includes('ola')) {
        botResponse = `✨ Olá! Tudo bem? Sou a Lua, sua assistente virtual!

Posso te ajudar com:
• 🕐 Horas e datas
• 🧮 Operações matemáticas
• 📚 Função afim
• 💡 Conhecimentos gerais

O que você precisa? 💫`;
      }
      else {
        botResponse = `✨ **Sobre "${input.length > 30 ? input.substring(0, 30) + '...' : input}"**

Sou a Lua e estou aqui para ajudar! 💫

🔧 **Estou usando a API do Groq com IA real!** 

Se está vendo esta mensagem, pode ser que:
1. O modelo está temporariamente indisponível
2. Problema de conexão com a API
3. Limite de requisições atingido

**Teste perguntar:**
• "Que horas são?"
• "O que é função afim?"
• "2 + 2"

Como posso te ajudar agora? ✨`;
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      { role: 'assistant', content: 'Olá! Eu sou Lua, sua assistente virtual. Posso ajudar com matemática, horas, conhecimentos gerais, ou o que você precisar! ✨' }
    ]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a2a 0%, #1a1a3a 100%)',
      padding: isMobile ? '10px' : '20px',
      position: 'relative'
    }}>
      {/* Estrelas de fundo - reduzidas em mobile */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(isMobile ? 50 : 150)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * (isMobile ? 2 : 3)}px`,
              height: `${Math.random() * (isMobile ? 2 : 3)}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: Math.random() * 0.8,
              animation: `twinkle ${Math.random() * 3 + 1}s infinite`
            }}
          />
        ))}
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        padding: isMobile ? '0' : '0 10px'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '20px' : '30px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h1 style={{ 
              color: '#c084fc', 
              fontSize: isMobile ? '1.8rem' : '2.5rem', 
              margin: 0,
              textShadow: '0 0 10px rgba(192, 132, 252, 0.5)'
            }}>
              Lua IA ✨
            </h1>
            {isMobile && (
              <button
                onClick={clearChat}
                style={{
                  background: 'rgba(124, 58, 237, 0.3)',
                  border: '1px solid #7c3aed',
                  color: '#c084fc',
                  padding: '5px 10px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                Limpar
              </button>
            )}
          </div>
          <p style={{ color: '#9ca3af', marginTop: '5px', fontSize: isMobile ? '12px' : '14px' }}>
            Tire suas dúvidas
          </p>
        </div>

        {/* Chat area */}
        <div style={{
          height: isMobile ? '60vh' : '500px',
          overflowY: 'auto',
          marginBottom: isMobile ? '15px' : '20px',
          padding: isMobile ? '12px' : '20px',
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderRadius: isMobile ? '12px' : '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(192, 132, 252, 0.2)',
          WebkitOverflowScrolling: 'touch'
        }}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: isMobile ? '10px' : '15px',
                animation: 'fadeIn 0.3s ease-in'
              }}
            >
              <div
                style={{
                  maxWidth: isMobile ? '85%' : '70%',
                  padding: isMobile ? '8px 12px' : '10px 15px',
                  borderRadius: '15px',
                  backgroundColor: message.role === 'user' ? '#7c3aed' : '#374151',
                  color: 'white',
                  borderBottomRightRadius: message.role === 'user' ? '4px' : '15px',
                  borderBottomLeftRadius: message.role === 'assistant' ? '4px' : '15px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.4',
                  fontSize: isMobile ? '14px' : '16px',
                  wordBreak: 'break-word'
                }}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                padding: isMobile ? '8px 12px' : '10px 15px', 
                borderRadius: '15px',
                borderBottomLeftRadius: '4px'
              }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div style={{ 
          display: 'flex', 
          gap: isMobile ? '8px' : '10px',
          flexDirection: isMobile && window.innerWidth < 480 ? 'column' : 'row'
        }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pergunte qualquer coisa..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: isMobile ? '10px 14px' : '12px 16px',
              backgroundColor: '#1f2937',
              border: '1px solid #4b5563',
              borderRadius: '25px',
              color: 'white',
              fontSize: isMobile ? '14px' : '16px',
              outline: 'none',
              WebkitAppearance: 'none'
            }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            {!isMobile && (
              <button
                onClick={clearChat}
                style={{
                  padding: isMobile ? '10px 16px' : '12px 20px',
                  backgroundColor: 'rgba(124, 58, 237, 0.3)',
                  border: '1px solid #7c3aed',
                  borderRadius: '25px',
                  color: '#c084fc',
                  cursor: 'pointer',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}
              >
                Limpar
              </button>
            )}
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                flex: isMobile && window.innerWidth < 480 ? 1 : 'auto',
                padding: isMobile ? '10px 16px' : '12px 24px',
                backgroundColor: '#7c3aed',
                border: 'none',
                borderRadius: '25px',
                color: 'white',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: 'bold',
                opacity: isLoading || !input.trim() ? 0.5 : 1,
                transition: 'opacity 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {isMobile ? 'Enviar' : 'Enviar ✨'}
            </button>
          </div>
        </div>

        {/* Info footer para mobile */}
        {isMobile && (
          <div style={{
            textAlign: 'center',
            marginTop: '15px',
            fontSize: '10px',
            color: '#6b7280'
          }}>
            Pressione Enter para enviar
          </div>
        )}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dot {
          animation: bounce 0.6s infinite;
          font-size: 20px;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Scrollbar personalizada */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 10px;
        }
        
        /* Melhorias para mobile */
        @media (max-width: 480px) {
          input, button {
            -webkit-tap-highlight-color: transparent;
          }
          
          button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}