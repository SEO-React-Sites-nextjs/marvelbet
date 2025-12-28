import FeatureList from "../../FeatureList";
export default function Page2() {
  const features = [
    {
      title: "Update Instructions",
      description:
        "Follow the prompt when launching the app or visit the official site for the new download.",
    },
    {
      title: "How to Set Up Automatic Updates",
      description:
        "Android users must usually download the new APK, as automatic updates are limited.",
    },
    {
      title: "Compatibility with Older Mobile Versions",
      description:
        "The app maintains minimal system requirements for broad compatibility.",
    },
    {
      title: "Latest Version",
      description:
        "Downloading the latest version ensures all security patches and new betting features are installed.",
    },
    {
      title: "Troubleshoot Update Failure",
      description:
        "Clear app cache or check available space before attempting to reinstall the new file.",
    },
  ];
  return (
    <>
      <h2>Mobile Marvelbet Version Updates</h2>
      <FeatureList features={features} className="row2 white-bg" />
    </>
  );
}
