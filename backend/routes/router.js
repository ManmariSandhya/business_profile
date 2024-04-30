const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
    const { email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sandymanmari@gmail.com",//process.env.EMAIL
                pass:  "amsf oqkk pixo kfey" 
            }
        });

        const mailOptions = {
            from: "sandymanmari@gmail.com",
            to: email,
            subject: "Business Profile Creation",
            html: '<h1>Congratulations!</h1><p>You have successfully created your business profile.</p>'
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(201).json({ status: 201, info });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error sending email" });
    }
});

module.exports = router;