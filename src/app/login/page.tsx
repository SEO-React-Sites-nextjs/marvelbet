import { Metadata } from "next";
import InfoItem from "../components/InfoItem";
import Page1 from "../components/PageView/View2/Page1";
import Page2 from "../components/PageView/View2/Page2";
import PageSwiper from "../components/PageSwiper";

export const metadata: Metadata = {
  title:
    "Cricket Exchange Login: Tutorial, Cross-Device, Third-Party Quick Login",
  description:
    "Master the simple, fast Marvelbet login process! Follow our login tutorial, utilize cross-device login, and secure third-party quick login. Get instant solutions for login failure.",
  keywords:
    "Marvelbet login,Login tutorial,Login failure,Cross-device login,Marvelbet login security",
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title:
      "Cricket Exchange Login: Tutorial, Cross-Device, Third-Party Quick Login",
    description:
      "Master the simple, fast Marvelbet login process! Follow our login tutorial, utilize cross-device login, and secure third-party quick login. Get instant solutions for login failure.",
    url: "/login",
    siteName: "Marvelbet Online Cricket Exchange",
    locale: "en_BD",
    type: "website",
  },
};

export default function View2() {
  return (
    <>
      <main>
        <section className="page-info home">
          <div className="container">
            <h1>Marvelbet Login Process is Amazing, Simple and Fast!</h1>
            <p>
              Get seamless access with the incredible
              <a href=""> Marvelbet login</a>! Follow our concise login tutorial
              to bypass common issues.
            </p>
            <p>
              Troubleshoot any login problems instantly and experience
              convenient cross-device login and secure third-party quick login
              options today!
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
            <InfoItem title="Marvelbet Login Tutorial">
              <ul>
                <li>
                  <strong>Homepage Guide:</strong>
                  Find the clear “Login” button easily in the top right corner
                  for quick access.
                </li>
                <li>
                  <strong>Correct Account Format:</strong>
                  Always ensure you enter the username or registered email
                  precisely.
                </li>
                <li>
                  <strong>Password Case Sensitivity:</strong>
                  Passwords are case-sensitive; check Caps Lock to avoid login
                  errors.
                </li>
                <li>
                  <strong>First Login:</strong>
                  You must complete the initial email/SMS verification after
                  registration for security.
                </li>
                <li>
                  <strong>Login Bonus:</strong>
                  Check the promotions page immediately after logging in to
                  claim your daily bonus.
                </li>
              </ul>
            </InfoItem>
          </div>
        </section>
        <section className="section-block">
          <div className="container">
            <InfoItem
              title="Marvelbet Login Failures and Solutions"
              className="no-bg"
            >
              <ul>
                <li>
                  <strong>Forgot Password:</strong>
                  Use the link to securely reset your password via email or
                  registered phone number.
                </li>
                <li>
                  <strong>Account Locked:</strong>
                  Contact 24/7 customer support immediately if your account is
                  locked due to security.
                </li>
                <li>
                  <strong>Login Verification Code Not Received:</strong>
                  Check your spam/junk folder or wait a few minutes before
                  requesting a resend.
                </li>
                <li>
                  <strong>Server Maintenance:</strong>
                  Check the official social channels for announcements regarding
                  planned system downtime.
                </li>
                <li>
                  <strong>Browser/App Cache:</strong>
                  Clear cached data or update the app to resolve persistent
                  technical login glitches.
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
