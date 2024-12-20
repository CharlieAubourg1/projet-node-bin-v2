const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const User = require("../models/users");

const router = new Router();

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            return res.sendStatus(401); // Utilisateur non trouvé
        }

        // Comparaison du mot de passe haché
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.sendStatus(401); // Mot de passe incorrect
        }

        // Génération du token JWT
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                role: user.role, // Inclure le rôle dans le token
            },
            process.env.JWT_SECRET
        );

        // Retourne le token au client
        res.json({ token });
    } catch (err) {
        next(err); // Passer les erreurs au gestionnaire d'erreurs
    }
});

module.exports = router;
