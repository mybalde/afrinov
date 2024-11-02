import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST,
      port: process.env.NEXT_SMTP_PORT,
      //secure: true,
      auth: {
          user: process.env.NEXT_SMTP_EMAIL,
          pass: process.env.NEXT_SMTP_PASSWORD
      }
    });

    try {
      // Options du mail
      const mailOptions1 = {
        from: `${process.env.NEXT_SMTP_FROM_NAME} <${process.env.NEXT_SMTP_FROM_EMAIL}>`,
        to: "bobolabado@yahoo.com", //process.env.NEXT_SMTP_EMAIL, // Email de réception
        subject: `Nouveau message de ${name}`,
        text: message,
        html: `
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Message :</strong> ${message}</p>
        `,
      };

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td>
                <table width="600" align="center" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td style="background-color: #0a58ca; padding: 20px; text-align: center; color: #ffffff;">
                      <h1 style="margin: 0; font-size: 24px;">Merci de nous avoir contactés</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px;">
                      <p style="font-size: 18px;">Bonjour ${name},</p>
                      <p>Nous vous remercions d’avoir pris contact avec <strong>M.I.E Afrinnov</strong> via notre site internet.</p>
                      <p>Votre message a bien été reçu, et notre équipe est en train d'examiner les informations que vous nous avez fournies. Nous reviendrons vers vous dans les plus brefs délais avec les réponses et les informations nécessaires.</p>
                      <p>En attendant, n'hésitez pas à nous contacter par téléphone ou par email si vous avez d'autres questions ou si vous souhaitez préciser votre demande.</p>
                      <p style="margin: 20px 0; text-align: center;">
                        <a href="mailto:contact@mieafrinnov.com" style="display: inline-block; padding: 10px 20px; color: #ffffff; background-color: #0a58ca; border-radius: 5px; text-decoration: none;">Contactez-nous</a>
                      </p>
                      <p>Merci encore pour votre intérêt envers M.I.E Afrinnov. Nous sommes impatients de pouvoir vous aider dans vos projets !</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f4f4f4; padding: 20px; text-align: center; color: #666; font-size: 12px;">
                      <p>M.I.E Afrinnov<br>Yaoundé, Cameroun</p>
                      <p>&copy; ${new Date().getFullYear()} M.I.E Afrinnov. Tous droits réservés.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `;

      const mailOptions2 = {
        from: `${process.env.NEXT_SMTP_FROM_NAME} <${process.env.NEXT_SMTP_FROM_EMAIL}>`,
        to: email, //process.env.NEXT_SMTP_EMAIL, // Email de réception
        subject: 'Merci pour votre prise de contact avec M.I.E Afrinnov',
        html: htmlContent,
      };

      // Envoie de l'email
      await transporter.sendMail(mailOptions1);
      await transporter.sendMail(mailOptions2);
      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      res.status(500).json({ error: `Erreur lors de l'envoi de l'email\n${error}` });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

