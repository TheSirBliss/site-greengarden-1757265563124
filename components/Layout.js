import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'GreenGarden'}</title>
        <meta name="description" content={description || 'Your GreenGarden description'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add other meta tags as needed */}
      </Head>
      <nav className="bg-primary text-white p-4">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Servizi</Link></li>
          <li><Link href="/testimonials">Testimonianze</Link></li>
          <li><Link href="/contact">Contatti</Link></li>
          <li><Link href="/chi-sono">Chi Sono</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/privacy-policy">Privacy</Link></li>
          <li><Link href="/cookie-policy">Cookie</Link></li>

        </ul>
      </nav>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} GreenGarden | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/cookie-policy">Cookie Policy</Link>
      </footer>
    </>
  );
};

export default Layout;