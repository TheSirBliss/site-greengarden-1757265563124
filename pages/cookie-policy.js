import Layout from '../components/Layout';

const CookiePolicy = () => {
  return (
    <Layout title="Cookie Policy" description="GreenGarden's Cookie Policy">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Cookie Policy</h1>
        <p>This is placeholder text for the cookie policy.  You should replace this with your actual cookie policy. This policy explains how we use cookies and similar technologies on our website.  It covers topics such as:</p>
        <ul>
          <li>What cookies are and how we use them</li>
          <li>Types of cookies we use</li>
          <li>How to manage your cookie preferences</li>
          <li>Changes to this policy</li>
        </ul>
        <p>Please review this policy carefully. By using our website, you agree to the terms of this policy.</p>
      </main>
    </Layout>
  );
};

export default CookiePolicy;