import FeatureList from "../../FeatureList";
import InfoItem from "../../InfoItem";

export default function Page3() {
  const features = [
    {
      title: "Download and Installation Steps",
      description:
        "Visit the official site and click the Android/iOS link to start the download.",
    },
    {
      title: "Allow Installation",
      description:
        "Enable Install from Unknown Sources in your phone's security settings for the app file.",
    },
    {
      title: "Complete Mobile Registration",
      description:
        "Open the app and quickly fill in your details to create an account.",
    },
    {
      title: "Login Securely",
      description:
        "Use your new credentials or biometric data for fast, protected access.",
    },
    {
      title: "Fund Your Account",
      description:
        "Use mobile payment options like bKash/Nagad to deposit instantly.",
    },
    {
      title: "Place Bet",
      description:
        "Navigate to your desired sport or casino game and place your first wager.",
    },
  ];
  return (
    <>
      <h2>Mobile Marvelbet Apps Leads Downloads in Bangladesh</h2>
      <p>
        The Mobile <a href="/mobile">Marvelbet Apps</a> lead downloads across
        Bangladesh! Download the latest version for free now. Quickly complete
        mobile registration.
      </p>
      <p>
        Learn how to handle version update notifications and troubleshoot any
        download failure instantly. Your optimized betting experience is just a
        click away!
      </p>
      <FeatureList
        features={features}
        className="home-page-list"
        title="Velki Casino Popular Game Types"
      />
      <InfoItem title="Mobile Marvelbet App Download Notes" className="white">
        <ul>
          <li>
            <strong>Free Download:</strong>
            Always ensure you are using the direct link from the official
            Marvelbet website for the legitimate free download.
          </li>
          <li>
            <strong>Latest Version:</strong>
            If prompted, immediately download and install the latest version to
            ensure optimal security and features.
          </li>
          <li>
            <strong>Mobile Registration:</strong>
            If registration fails, verify all required fields are filled and
            strong passwords are used.
          </li>
          <li>
            <strong>Download and Installation Steps:</strong>
            Restart your phone and check your internet connection if the app
            {" won't"} install after downloading the file.
          </li>
          <li>
            <strong>Version Update:</strong>
            Accept the update prompt within the app or manually redownload the
            latest version from the site.
          </li>
          <li>
            <strong>Download Failure:</strong>
            Clear your {"device's"} cache and check available storage space to
            resolve common download failure errors.
          </li>
        </ul>
      </InfoItem>
    </>
  );
}
