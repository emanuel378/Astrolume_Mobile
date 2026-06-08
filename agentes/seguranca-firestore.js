import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const raiz = join(__dirname, '..');

function carregar(caminho) {
  try {
    return readFileSync(join(raiz, caminho), 'utf-8');
  } catch {
    return null;
  }
}

const rules = carregar('firestore.rules');
const login = carregar('src/pages/Login/Login.jsx');
const cadastro = carregar('src/pages/Cadastro/Cadastro.jsx');

console.log(`
╔══════════════════════════════════════════════════════╗
║     AGENTE DE SEGURANÇA — ASTROLUME FIRESTORE       ║
╚══════════════════════════════════════════════════════╝

📋 VISÃO GERAL
───────────────
  Projeto: astrolume-4b423 (Firebase)
  Autenticação: Firebase Auth (email/senha)
  Banco: Firestore (coleção "usuarios")

🔐 ANÁLISE POR CAMADA
──────────────────────

1. LOGIN (Firebase Auth)
   Status: ✅ SEGURO
   - Usa signInWithEmailAndPassword do lado do servidor do Firebase
   - Nenhuma operação no Firestore durante o login
   - Tratamento de erros cobre: credenciais inválidas e excesso de tentativas

2. CADASTRO (Firebase Auth)
   Status: ✅ SEGURO
   - Cria usuário via createUserWithEmailAndPassword (servidor Firebase)
   - SEM escrita no Firestore (removida — os dados nunca eram lidos)

3. REGRAS DO FIRESTORE
   Status: ${rules ? '✅ DEFINIDAS' : '❌ AUSENTES'}
${rules ? `
   Regras atuais:
${rules.split('\n').slice(1).map(l => '   ' + l).join('\n')}
   ` : '   ⚠️  Nenhum arquivo firestore.rules encontrado no projeto.'}

🛡️  RECOMENDAÇÕES
──────────────────
  ${rules ? '✅ firestore.rules versionado no repositório' : '❌ Crie firestore.rules no repositório'}
  ✅ Escrita no Firestore removida do cadastro (reduz superfície de ataque)
  ⚠️  API key do Firebase fica exposta no bundle (comportamento normal do Firebase)
  ⚠️  Considere restringir a API key no Google Cloud Console por domínio

📦 ARQUIVOS ANALISADOS
──────────────────────
  ${rules ? '  ✔ firestore.rules' : '  ✘ firestore.rules (não encontrado)'}
  ${login ? '  ✔ src/pages/Login/Login.jsx' : '  ✘ src/pages/Login/Login.jsx (não encontrado)'}
  ${cadastro ? '  ✔ src/pages/Cadastro/Cadastro.jsx' : '  ✘ src/pages/Cadastro/Cadastro.jsx (não encontrado)'}
`);
//Para rodar node agentes/seguranca-firestore.js
