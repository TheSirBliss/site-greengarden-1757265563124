import Link from 'next/link';

export default function Home() {
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
        <h1 className="text-5xl font-bold text-primary mb-4">GreenGarden</h1>
        <p className="text-lg text-gray-700 mb-8">Il tuo giardino, la nostra passione.</p>
        <p className="text-lg text-gray-700">Benvenuti su GreenGarden, il tuo partner ideale per la cura e la progettazione del tuo spazio verde. Offriamo una vasta gamma di servizi per soddisfare ogni tua esigenza, dalla semplice manutenzione alla creazione di giardini personalizzati. Scopri di più sui nostri servizi e contattaci per un preventivo gratuito!</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} GreenGarden
      </footer>
    </div>
  );
}