import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email envoyé avec succès');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus("Erreur lors de l'envoi de l'email");
      }
    } catch (error) {
      console.error('Error sending email:', error);  // Utilisation de 'error'
      setStatus("Erreur lors de l'envoi de l'email");
    }
  };

  return (
    <div>
      <main className="container mx-auto my-12 p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-primary font-semibold mb-2" htmlFor="name">Votre nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-semibold mb-2" htmlFor="email">Votre email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-semibold mb-2" htmlFor="phone">Votre téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-semibold mb-2" htmlFor="message">Votre message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded font-semibold hover:bg-secondary transition">
            Envoyer
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </main>
    </div>
  );
}
