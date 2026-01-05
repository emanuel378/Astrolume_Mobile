export async function register(req, res) {
  const { nome, email, senha } = req.body;

  return res.status(201).json({
    uid: 'teste123',
    nome,
    email
  });
}
