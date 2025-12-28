import { Metadata } from "next";
import InfoItem from "../components/InfoItem";
import Page1 from "../components/PageView/View3/Page1";
import Page2 from "../components/PageView/View3/Page2";
import PageSwiper from "../components/PageSwiper";

export const metadata: Metadata = {
  title:
    "Online Casino Payment Methods: bKash, Crypto, Fast Deposit and Withdrawal Guide",
  description:
    "Master the best Marvelbet payment methods! Use popular local payments in Bangladesh, master cryptocurrency payments, and ensure fast deposits and withdrawals.",
  keywords:
    "Marvelbet payment methods,Popular local payments,Cryptocurrency payments,Fast deposits methods, Casino deposit limit",
  alternates: {
    canonical: "/payment",
  },
  openGraph: {
    title:
      "Online Casino Payment Methods: bKash, Crypto, Fast Deposit and Withdrawal Guide",
    description:
      "Master the best Marvelbet payment methods! Use popular local payments in Bangladesh, master cryptocurrency payments, and ensure fast deposits and withdrawals.",
    url: "/payment",
    siteName: "Marvelbet Online Cricket Exchange",
    locale: "en_BD",
    type: "website",
  },
};

export default function View3() {
  return (
    <>
      <main>
        <section className="page-info">
          <div className="container">
            <h1>Marvelbet Payment Highly Recommended by Members</h1>
            <p>
              Learn more about the most trusted
              <a href=""> Marvelbet payment </a>
              methods, highly recommended by members in Bangladesh! 
            </p>
            <p>
              We support popular local payments in Bangladesh for instant
              transfers and offer secure cryptocurrency payments.
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
            <InfoItem title="Marvelbet Popular Local Payments">
              <ul>
                <li>
                  <strong>bKash:</strong>
                  Most preferred MFS for instant fast deposits and withdrawals
                  across Bangladesh.
                </li>
                <li>
                  <strong>Nagad:</strong>
                  Highly reliable local wallet, ensuring quick, secure transfers
                  with low fees.
                </li>
                <li>
                  <strong>Rocket:</strong>
                  Trusted mobile banking channel offering efficient and easy
                  fund transfers.
                </li>
                <li>
                  <strong>UPay:</strong>
                  Convenient local e-wallet providing alternative, quick, and
                  secure deposit options.
                </li>
                <li>
                  <strong>Bank Transfer (Local):</strong>
                  Secure method for larger transactions directly between local
                  bank accounts.
                </li>
              </ul>
            </InfoItem>
          </div>
        </section>
        <section className="section-block">
          <div className="container">
            <InfoItem
              title="Marvelbet's Main Payment Methods"
              className="no-bg"
            >
              <ul>
                <li>
                  <strong>E-Wallet:</strong>
                  Use localized MFS wallets for quick deposits and fast
                  withdrawals seamlessly.
                </li>
                <li>
                  <strong>Credit Card:</strong>
                  (Use if supported) Conveniently fund your account using major
                  international credit/debit cards.
                </li>
                <li>
                  <strong>Bank Transfer:</strong>
                  Standard payment methods for sending funds directly from your
                  banking institution reliably.
                </li>
                <li>
                  <strong>Cryptocurrency:</strong>
                  Use digital assets like USDT for fast, secure, and
                  decentralized international payments.
                </li>
                <li>
                  <strong>Local Bank Deposit (OTC):</strong>
                  Traditional method for depositing cash at a bank counter;
                  requires proof of payment.
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
