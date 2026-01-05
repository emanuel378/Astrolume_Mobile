// Login.jsx
import { Link } from 'react-router-dom';
import FundoEstrelado from '../../componets/FundoEstrelado/FundoEstrelado';
import './login.css';


export default function Login() {
    return (
        <>
            <FundoEstrelado />
            <div className="container-cadastro">
                
                {/* Título */}
                <div className="titulo-cadastro">
                    <h1 className="titulo-poppins">Entrar</h1>
                    <h1 className="titulo-gugi">Astro Lume</h1>
                </div>

                {/* Formulário */}
                <form className="form-cadastro">
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Seu@email.com"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <button type="submit" className="btn-cadastrar">
                        Entrar
                    </button>
                </form>

                {/* Divisor */}
                <div className="divisor">
                    <span className="linha"></span>
                    <span className="ou">OU</span>
                    <span className="linha"></span>
                </div>

                {/* Login social */}
                <div className="botoes-sociais">
                    <button className="btn-social google">
                        Google
                    </button>
                    <button className="btn-social facebook">
                        Facebook
                    </button>
                </div>

                {/* Links */}
                <div className="links-navegacao">
                    <Link to="/cadastro" className="link-login">
                        Não tem conta? <span>Criar agora</span>
                    </Link>

                    <Link to="/" className="link-voltar">
                        ← Voltar para Início
                    </Link>
                </div>
            </div>
        </>
    );
}
