import { Metadata } from "next";
import InfoItem from "../components/InfoItem";
import Page1 from "../components/PageView/View6/Page1";
import Page2 from "../components/PageView/View6/Page2";
import PageSwiper from "../components/PageSwiper";

export const metadata: Metadata = {
  title:
    "Cricket Exchange Bonuses: Referral and Sign-up Bonus Claiming Rules and Methods",
  description:
    "Marvelbet bonuses are hot on the Bangladeshi internet! Learn about cricket bonus claiming rules and turnover multipliers. Join the referral bonus program and earn lifetime earnings.",
  keywords:
    "Marvelbet bonuses,Marvelbet promotions,Marvelbet referral bonuses, Marvelbet sign-up bonuses,Marvelbet cashback",
  alternates: {
    canonical: "/bonuses",
  },
  openGraph: {
    title:
      "Cricket Exchange Bonuses: Referral and Sign-up Bonus Claiming Rules and Methods",
    description:
      "Marvelbet bonuses are hot on the Bangladeshi internet! Learn about cricket bonus claiming rules and turnover multipliers. Join the referral bonus program and earn lifetime earnings.",
    url: "/bonuses",
    siteName: "Marvelbet Online Cricket Exchange",
    locale: "en_BD",
    type: "website",
  },
};

export default function View6() {
  return (
    <>
      <main>
        <section className="page-info">
          <div className="container">
            <h1>
              Marvelbet Bonuses: The Top Search Keyword in Bangladesh in 2026
            </h1>
            <p>
              <a href="">Marvelbet bonuses</a> are a top search trend because
              they offer genuine value! Learn the advantages of different bonus
              types and study important bonus claiming rules!
            </p>
            <p>
              Also, learn tips on claiming bonuses for free. {"Don't"} forget to
              take advantage of the generous referral bonus program to earn
              extra income.
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
            <InfoItem title="Marvelbet Bonus Type Advantages">
              <ul>
                <li>
                  <strong>Sign-Up Bonus:</strong>
                  Get 500 BDT for free bets upon account verification (no
                  deposit needed).
                </li>
                <li>
                  <strong>First Deposit Bonus:</strong>
                  Receive a massive 300% match on your initial deposit to triple
                  your funds.
                </li>
                <li>
                  <strong>Cricket Cashback:</strong>
                  Earn a 5% weekly cashback on losses to reduce overall risk.
                </li>
                <li>
                  <strong>Crash Game Bonus:</strong>
                  Access leaderboard prizes or specific rebates for playing
                  crash games.
                </li>
                <li>
                  <strong>App Download Bonus:</strong>
                  Get an exclusive reward simply for downloading the official
                  mobile app.
                </li>
              </ul>
            </InfoItem>
          </div>
        </section>
        <section className="section-block">
          <div className="container">
            <InfoItem title="Marvelbet Bonus Claim Rules" className="no-bg">
              <ul>
                <li>
                  <strong>Turnover Multiplier:</strong>
                  Wager the bonus amount a set number of times (e.g., 10x)
                  before withdrawal.
                </li>
                <li>
                  <strong>Restrictions on Eligible Betting Types:</strong>
                  Only bets within specific odds (e.g., 1.50 to 3.50) may count
                  toward turnover.
                </li>
                <li>
                  <strong>Maximum Amount:</strong>
                  The bonus is capped at a specific limit (e.g., 4,000 BDT for
                  the daily sports bonus).
                </li>
                <li>
                  <strong>No Repeated Claims:</strong>
                  Bonuses like the welcome offer can only be claimed once per
                  user.
                </li>
                <li>
                  <strong>Withdrawal Conditions:</strong>
                  All turnover requirements must be fully met before any
                  winnings become withdrawable.
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
