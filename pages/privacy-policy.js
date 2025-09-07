import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy" description="GreenGarden's Privacy Policy">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p>
          This is placeholder text for the privacy policy. You should replace this with your actual privacy policy.  This policy outlines how we collect, use, and protect your personal information. It covers topics such as:
        </p>
        <ul>
          <li>What information we collect</li>
          <li>How we use your information</li>
          <li>How we protect your information</li>
          <li>Your rights regarding your information</li>
          <li>Contact information</li>
        </ul>
        <p>Please review this policy carefully. By using our website, you agree to the terms of this policy.</p>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;