import Layout from '../components/Layout';

const Testimonials = () => {
  return (
    <Layout title="Testimonianze" description="Leggi le recensioni dei nostri clienti">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Testimonianze</h1>

        {/* Add your testimonials here.  You can fetch them from a database or API.  Below is an example */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic text-lg">"Ottimo servizio, giardino bellissimo!"</p>
            <p className="text-gray-900 font-bold mt-2">- Mario Rossi</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic text-lg">"Consigliatissimo, professionisti altamente qualificati!"</p>
            <p className="text-gray-900 font-bold mt-2">- Anna Bianchi</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </main>
    </Layout>
  );
};

export default Testimonials;