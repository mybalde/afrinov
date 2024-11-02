import { FaShippingFast, FaShoppingCart, FaTools, FaLaptop, FaHandshake, FaBuilding } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Import/Export',
      description: 'Gestion des opérations de transport international.',
      icon: <FaShippingFast className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Achat et Ventes',
      description: 'Fourniture de marchandises variées.',
      icon: <FaShoppingCart className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Fournitures de matériel informatique et électronique',
      description: 'Fourniture et vente de matériel de qualité.',
      icon: <FaLaptop className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Service Après-Vente',
      description: 'Assistance et maintenance des équipements.',
      icon: <FaTools className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'Prestations de services',
      description: 'Support technique et conseil.',
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
    },
    {
      title: 'BTP',
      description: 'Travaux de construction et rénovation.',
      icon: <FaBuilding className="text-primary text-4xl mb-4" />,
    },
  ];

  return (
    <div>
      <main className="container mx-auto my-12 p-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
