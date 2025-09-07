import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout title="Termini e Condizioni" description="Termini e condizioni d'uso del sito GreenGarden">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Termini e Condizioni</h1>
        <p>
          Questi sono i termini e le condizioni d'uso del sito web GreenGarden.  Si prega di leggerli attentamente prima di utilizzare il sito. Utilizzando questo sito, si accetta di essere vincolati da questi termini e condizioni.
        </p>

        <h2>Utilizzo del sito</h2>
        <p>
          È possibile utilizzare questo sito solo per scopi leciti. Non è consentito utilizzare questo sito per attività illegali, dannose o offensive.
        </p>

        <h2>Proprietà intellettuale</h2>
        <p>
          Tutti i contenuti di questo sito, inclusi testo, immagini, grafica e logo, sono protetti da copyright. Non è consentito copiare, distribuire o modificare i contenuti di questo sito senza il nostro consenso scritto.
        </p>

        <h2>Limitazione di responsabilità</h2>
        <p>
          Non saremo responsabili per eventuali perdite o danni derivanti dall'utilizzo di questo sito.
        </p>

        <h2>Modifiche ai termini e condizioni</h2>
        <p>
          Possiamo modificare questi termini e condizioni in qualsiasi momento. Si prega di verificare periodicamente questa pagina per eventuali modifiche.
        </p>

        <h2>Legge applicabile</h2>
        <p>
          Questi termini e condizioni sono regolati dalla legge italiana.
        </p>

        <h2>Contattaci</h2>
        <p>
          Se avete domande su questi termini e condizioni, contattateci.
        </p>
      </main>
    </Layout>
  );
};

export default Terms;