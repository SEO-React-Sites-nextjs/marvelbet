import FeatureList from "../../FeatureList";
export default function Page1() {
  const features = [
    {
      title: "Information Management",
      description:
        "Easily view and update your personal details and contact information within the profile section.",
    },
    {
      title: "Modifying Personal Privacy",
      description:
        "Change passwords, enable 2FA, and adjust notification preferences directly on the app.",
    },
    {
      title: "Mobile Access Restrictions",
      description:
        "Set your own deposit, wagering, or time limits using the responsible gaming tools.",
    },
    {
      title: "Quick Account Retrieval",
      description:
        "Use the Forgot Password function directly on the app's login screen easily.",
    },
    {
      title: "Financial Oversight",
      description:
        "Monitor detailed transaction history and fast withdrawal progress in the dedicated finance section.",
    },
  ];
  return (
    <>
      <h2>Mobile Marvelbet Account Management</h2>
      <FeatureList features={features} className="row2" />
      <picture key="page2-banner">
        <source srcSet="/page1/page-banner2-m.png" media="(max-width: 767px)" />
        <img
          src="/page1/page-banner2.png"
          alt="JOIN NOW"
          className="page-banner"
        />
      </picture>
    </>
  );
}
