import FeatureList from "../../FeatureList";
export default function Page1() {
  const features = [
    {
      title: "KYC Necessity",
      description:
        "KYC is necessary before your first withdrawal to prove your identity and prevent fraud.",
    },
    {
      title: "Verification Passing Tips",
      description:
        "Submit clear, high-quality photos of official documents like a Passport or Driver's License.",
    },
    {
      title: "Verification Review Time",
      description:
        "Review time is usually quick, often completed within hours after submitting all required documents.",
    },
    {
      title: "Verification Documents",
      description:
        "Passport, National ID card, or Driver's License are common acceptable verification documents.",
    },
    {
      title: "Secure Submission",
      description:
        "Documents are submitted via an encrypted portal, ensuring complete registration privacy protection.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Registration Verification</h2>
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
