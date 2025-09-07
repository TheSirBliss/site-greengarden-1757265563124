import Link from 'next/link';

export default function ChiSono() {
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
        <h1 className="text-5xl font-bold text-primary mb-4">Chi Siamo</h1>
        <p className="text-lg text-gray-700 mb-8">GreenGarden nasce dalla passione per la natura e il desiderio di creare spazi verdi unici e armoniosi. Crediamo che un giardino ben curato sia un'oasi di pace e benessere, un luogo dove rilassarsi e ritrovare sé stessi.  La nostra filosofia si basa sulla sostenibilità, utilizzando tecniche e prodotti eco-compatibili per rispettare l'ambiente e la salute delle persone.  Ci impegniamo a fornire un servizio di alta qualità, personalizzato sulle esigenze di ogni cliente, per trasformare il vostro spazio verde in un riflesso della vostra personalità. Il nostro team è composto da professionisti esperti e appassionati, sempre aggiornati sulle ultime tecniche e tendenze del settore.  Siamo orgogliosi del nostro lavoro e ci dedichiamo con impegno e cura ad ogni progetto, per garantire la massima soddisfazione dei nostri clienti.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} GreenGarden
      </footer>
    </div>
  );
}