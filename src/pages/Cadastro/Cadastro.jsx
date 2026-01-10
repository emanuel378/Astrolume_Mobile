// Cadastro.jsx
import { Link, useNavigate } from 'react-router-dom'; // ← Adicione useNavigate
import { useState } from 'react';
import axios from 'axios';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './cadastro.css';

export default function Cadastro() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // ← Crie a instância do navigate

    async function handleCadastro(e) {
        e.preventDefault();
        setLoading(true);
        try {
           const api = import.meta.env.VITE_API_URL;

            const response = await axios.post(
                `${api}/auth/register`,
                {
                    nome: usuario,
                    email,
                    senha
                }
            );


            console.log('Cadastro OK:', response.data);
            alert('Cadastro realizado com sucesso!');
            
            // 🔥 REDIRECIONA PARA A TELA DE GALÁXIAS
            navigate('/galaxias'); // ← Aqui está o redirecionamento
            
        } catch (error) {
            console.error(error.response?.data || error);
            alert('Erro ao cadastrar');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <FundoEstrelado />
            <div className="container-cadastro">
                <div className="titulo-cadastro">
                    <h1 className="titulo-poppins">Bem vindo ao</h1>
                    <h1 className="titulo-gugi">Astro Lume</h1>
                </div>

                {/* 🔥 AQUI ESTÁ O SEGREDO */}
                <form className="form-cadastro" onSubmit={handleCadastro}>
                    <div className="input-group">
                        <label htmlFor="usuario">Usuário</label>
                        <input 
                            type="text" 
                            id="usuario"
                            placeholder="Nome de usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            id="senha"
                            placeholder="Insira sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn-cadastrar" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>

                <div className="divisor">
                    <span className="linha"></span>
                    <span className="ou">OU</span>
                    <span className="linha"></span>
                </div>

                <div className="botoes-sociais">
                    <button className="btn-social google">Google</button>
                    <button className="btn-social facebook">Facebook</button>
                </div>

                <div className="links-navegacao">
                    <Link to="/login" className="link-login">
                        Já tem conta? <span>Entrar</span>
                    </Link>
                    
                    <Link to="/" className="link-voltar">
                        ← Voltar para Início
                    </Link>
                </div>
            </div>
        </>
    );
}
