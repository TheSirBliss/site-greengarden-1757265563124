import Link from 'next/link';

const servicesData = [
  {"name": "Manutenzione giardini", "description": "Cura periodica del verde e potature."},
  {"name": "Progettazione", "description": "Creazione di spazi verdi personalizzati."},
  {"name": "Impianti di irrigazione", "description": "Installazione e manutenzione di sistemi di irrigazione."},
  {"name": "Potatura alberi", "description": "Potatura professionale di alberi di ogni dimensione."},
  {"name": "Abbattimento alberi", "description": "Abbattimento sicuro e controllato di alberi."},
  {"name": "Trattamenti antiparassitari", "description": "Trattamenti ecologici per la protezione delle piante."},
  {"name": "Realizzazione prati", "description": "Creazione di prati erbosi di alta qualità."},
  {"name": "Piante e fiori", "description": "Fornitura e messa a dimora di piante e fiori."},
  {"name": "Sistemi di illuminazione", "description": "Installazione di sistemi di illuminazione per esterni."},
  {"name": "Consulenza", "description": "Consulenza personalizzata per la cura del tuo giardino."},
  {"name": "Pulizia aree verdi", "description": "Pulizia e rimozione di rifiuti dalle aree verdi."}
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-primary text-white p-4">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Servizi</Link></li>
          <li><Link href="/testimonials">Testimonianze</Link></li>
          <li><Link href="/contact">Contatti</Link></li>
          <li><Link href="/chi-sono">Chi Sono</Link></li>
        </ul>
      </nav>
      <main className="flex-grow p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Servizi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-2">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
              <button className="mt-4 bg-accent text-white py-2 px-4 rounded-lg hover:bg-yellow-600">Prenota</button>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} GreenGarden
      </footer>
    </div>
  );
}