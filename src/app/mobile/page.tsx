import { Metadata } from "next";
import InfoItem from "../components/InfoItem";
import Page1 from "../components/PageView/View4/Page1";
import Page2 from "../components/PageView/View4/Page2";
import PageSwiper from "../components/PageSwiper";

export const metadata: Metadata = {
  title:
    "Mobile Exchange App Download: Latest Version, Advantages & Account Management",
  description:
    "Download the Mobile Marvelbet App free download now! Get the latest version with easy installation steps. Discover Mobile Marvelbet advantages, manage your account securely.",
  keywords:
    "Mobile Marvelbet App,Marvelbet free download,Mobile Marvelbet advantages,Mobile Marvelbet version update, Marvelbet app installation",
  alternates: {
    canonical: "/mobile",
  },
  openGraph: {
    title:
      "Mobile Exchange App Download: Latest Version, Advantages & Account Management",
    description:
      "Download the Mobile Marvelbet App free download now! Get the latest version with easy installation steps. Discover Mobile Marvelbet advantages, manage your account securely.",
    url: "/mobile",
    siteName: "Marvelbet Online Cricket Exchange",
    locale: "en_BD",
    type: "website",
  },
};

export default function View4() {
  return (
    <>
      <main>
        <section className="page-info">
          <div className="container">
            <h1>Why the Mobile Marvelbet App is Essential</h1>
            <p>
              The <a href="">Mobile Marvelbet</a> App consistently ranks among
              the top downloads in Bangladesh! Learn the basic download tips and
              advantages of the Marvelbet app.
            </p>
            <p>
              Easily manage your funds with the simple and easy-to-use Marvelbet
              account management features, and stay up-to-date with app version
              updates.
            </p>
            <div className="page-group-button only-one">
              <a className="play-button" href="http://jeetbuzz999.com/">
                PLAY NOW
              </a>
            </div>
          </div>
        </section>
        <section className="section-block block-yellow">
          <div className="container">
            <InfoItem title="Mobile Marvelbet Download ">
              <ul>
                <li>
                  <strong>Official Download:</strong>
                  Always use the dedicated link on the Marvelbet official
                  website for the genuine app.
                </li>
                <li>
                  <strong>Free Download:</strong>
                  The application is entirely free; never pay to download or
                  install the app file.
                </li>
                <li>
                  <strong>Device Requirements:</strong>
                  Compatible with Android version 4.1 or newer; ensure
                  sufficient device storage space.
                </li>
                <li>
                  <strong>One-Click Installation:</strong>
                  After download, click the APK file once and select install for
                  rapid setup.
                </li>
                <li>
                  <strong>Initial Setup:</strong>
                  Follow prompts to allow installation from unknown sources, if
                  necessary, quickly.
                </li>
              </ul>
            </InfoItem>
          </div>
        </section>
        <section className="section-block">
          <div className="container">
            <InfoItem title="Marvelbet App Advantages" className="no-bg">
              <ul>
                <li>
                  <strong>Differences from the Web Version:</strong>
                  Offers superior speed, greater stability, and faster live
                  betting functionality instantly.
                </li>
                <li>
                  <strong>App-Exclusive Features:</strong>
                  Access specialized push notifications for scores and
                  personalized bonus alerts.
                </li>
                <li>
                  <strong>Most Frequently Used Features by Members:</strong>
                  The intuitive interface prioritizes fast access to live
                  betting and payment options.
                </li>
                <li>
                  <strong>Beginner-Friendly Features:</strong>
                  Simplified navigation and clear signposting help new users
                  find markets easily.
                </li>
                <li>
                  <strong>Enhanced Security:</strong>
                  Utilizes device-specific security like biometrics for safer,
                  quicker Mobile Marvelbet login.
                </li>
              </ul>
            </InfoItem>
          </div>
        </section>
        <section className="section-block home-page2-wrapper">
          <div className="container">
            <Page1 />
          </div>
        </section>
        <section className="section-block view-page2-wrapper">
          <div className="container">
            <Page2 />
          </div>
        </section>
        <PageSwiper />
      </main>
    </>
  );
}
