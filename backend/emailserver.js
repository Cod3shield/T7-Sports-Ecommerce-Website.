const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// EMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourEmail@gmail.com",
    pass: "yourAppPassword", // IMPORTANT: app password dili normal password
  },
});

// SEND EMAIL ROUTE
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "yourEmail@gmail.com",
      subject: "T7 Sports Inquiry",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});