import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const getDeviceInfo = async () => {
      const info = {
        browser: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        onlineStatus: navigator.onLine ? 'Online' : 'Offline',
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        deviceMemory: navigator.deviceMemory || 'N/A',
        hardwareConcurrency: navigator.hardwareConcurrency || 'N/A',
        cookieEnabled: navigator.cookieEnabled,
        javaEnabled: navigator.javaEnabled(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      try {
        await fetch('/api/save-device-info', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info),
        });
      } catch (error) {
        console.error('Failed to save device info:', error);
      }
    };

    getDeviceInfo();
  }, []);

  return (
    <main className="flex flex-col min-h-[100vh] bg-light">
      <section className="flex-grow bg-gradient-to-r from-primary to-secondary text-white py-8 px-4 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">Bienvenue chez M.I.E Afrinnov</h2>
        <p className="text-base mb-4">Votre expert en import/export, matériel informatique et plus, basé à Yaoundé.</p>
        <button
          className="bg-white text-primary font-semibold py-1 px-3 rounded hover:bg-gray-100 transition"
          onClick={() => router.push('/services')}
        >
          Découvrir nos services
        </button>
      </section>

      <section className="container mx-auto my-12 p-4 min-h-[50vh]">
        <h3 className="text-3xl font-bold text-center mb-8">Nos Activités</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-primary mb-2">Import/Export</h4>
            <p>Gestion des opérations de transport international.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-primary mb-2">Achat et Ventes</h4>
            <p>Fourniture de marchandises variées.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-primary mb-2">Service Après-Vente</h4>
            <p>Assistance et maintenance des équipements.</p>
          </div>
          {/* Ajoute d'autres services si nécessaire */}
        </div>
      </section>
    </main>
  );
}
