import FeatureList from "../../FeatureList";
export default function Page1() {
  const features = [
    {
      title: "Android App Login",
      description:
        "Enjoy lightning-fast, secure access via the dedicated Android APK application.",
    },
    {
      title: "iOS App Login",
      description:
        "Use the official iOS shortcut/app link for smooth, device-optimized access.",
    },
    {
      title: "Mobile Web Login",
      description:
        "Access all features securely through any mobile browser without installation hassle.",
    },
    {
      title: "Desktop Login",
      description:
        "Use the main website for the full-screen view and comprehensive dashboard access.",
    },
    {
      title: "Seamless Transition",
      description:
        "Log out of one device before logging into another for maximum account integrity.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Cross-Device Login</h2>
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
