import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [ipAddress, setIpAddress] = useState('Fetching...');
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const getDeviceInfo = () => {
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
      setDeviceInfo(info);
    };

    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        setIpAddress('Failed to fetch IP');
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setLocation({ latitude: 'Permission denied', longitude: 'Permission denied' });
          }
        );
      } else {
        setLocation({ latitude: 'Not supported', longitude: 'Not supported' });
      }
    };

    getDeviceInfo();
    getIpAddress();
    getLocation();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto my-8 p-4">
        <h2 className="text-3xl font-bold mb-4">Bienvenue chez M.I.E Afrinnov</h2>
        <p className="mb-4">Votre expert en import/export, matériel informatique et plus, basé à Yaoundé.</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Informations sur l'appareil et le navigateur</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(deviceInfo, null, 2)}
        </pre>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Adresse IP</h3>
        <p className="bg-gray-100 p-4 rounded">{ipAddress}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Coordonnées GPS</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(location, null, 2)}
        </pre>
      </main>
      <Footer />
    </div>
  );
}
