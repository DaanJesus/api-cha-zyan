const express = require('express');
const router = express.Router();
const Presence = require('../models/presence');

router.post('/confirm', async (req, res) => {
    const { whatsapp, nome, agregados } = req.body;

    if (!whatsapp || !nome) {
        return res.status(400).json({ message: 'Preencha todos os campos e adicione ao menos um agregado' });
    }

    try {
        const confirmacao = new Presence({
            whatsapp,
            nome,
            agregados
        });

        await confirmacao.save();
        res.status(200).json({ message: 'Presença confirmada com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar no banco:', error);
        res.status(500).json({ message: 'Erro ao confirmar presença' });
    }
});

module.exports = router;