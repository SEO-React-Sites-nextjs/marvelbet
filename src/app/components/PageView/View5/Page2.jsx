import FeatureList from "../../FeatureList";
export default function Page2() {
  const features = [
    {
      title: "Fake Website Scams",
      description:
        "Scammers create duplicate sites; always check the URL carefully for the correct domain.",
    },
    {
      title: "Phishing Emails",
      description:
        "Never click links in unexpected emails asking for your Marvelbet registration details or password.",
    },
    {
      title: "Fake Customer Service",
      description:
        "Marvelbet customer service will never ask for your password or verification code directly.",
    },
    {
      title: "Secure Registration Tips",
      description:
        "Verify the site has the lock icon (SSL certificate) in the browser address bar.",
    },
    {
      title: "Verifying the Official Registration Page",
      description:
        "Ensure the URL matches the official domain before entering any personal data.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Registration Scam Exposed</h2>
      <FeatureList features={features} className="row2 white-bg" />
    </>
  );
}
