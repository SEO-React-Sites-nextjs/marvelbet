import FeatureList from "../../FeatureList";
export default function Page2() {
  const features = [
    {
      title: "Advantages of Third-Party Login",
      description:
        "Reduces password fatigue and speeds up the initial account access significantly.",
    },
    {
      title: "Third-Party Login Selection",
      description:
        "Choose popular options like Facebook or Google for quick and easy authentication.",
    },
    {
      title: "Third-Party Login Binding",
      description:
        "Link your external social media profile within the account settings securely.",
    },
    {
      title: "Third-Party Login Unbinding",
      description:
        "Easily remove the connection if you prefer to use traditional username/password login.",
    },
    {
      title: "Third-Party Login Security",
      description:
        "Utilize 2FA on the linked social media account for an extra layer of protection.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Third-Party Quick Login</h2>
      <FeatureList features={features} className="row2 white-bg" />
    </>
  );
}
