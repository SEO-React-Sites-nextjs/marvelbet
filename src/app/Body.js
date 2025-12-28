import Page1 from "./components/PageView/View1/Page1";
import Page2 from "./components/PageView/View1/Page2";
import Page3 from "./components/PageView/View1/Page3";
import Page4 from "./components/PageView/View1/Page4";
import Page5 from "./components/PageView/View1/Page5";
import InfoItem from "./components/InfoItem";
import Question from "./components/Question/Question";
import PageSwiper from "./components/PageSwiper";

const navItems = [
  { href: "#page1", label: "Login Process" },
  { href: "#page2", label: "Payment Methods" },
  { href: "#page3", label: "Mobile Marvelbet Apps" },
  { href: "#page4", label: "Registration" },
  { href: "#page5", label: "Bonuses with Promotions" },
  { href: "#page6", label: "FAQs" },
];

const sections = [
  {
    id: "page1",
    Component: Page1,
    sectionClass: "home-page1-wrapper",
  },
  {
    id: "page2",
    Component: Page2,
    sectionClass: "home-page2-wrapper",
  },
  {
    id: "page3",
    Component: Page3,
    sectionClass: "home-page3-wrapper",
  },
  {
    id: "page4",
    Component: Page4,
    sectionClass: "home-page4-wrapper",
  },
  { id: "page5", Component: Page5, sectionClass: "home-page5-wrapper" },
  {
    id: "page6",
    sectionClass: "home-page6-wrapper",
    render: () => (
      <Question
        h2="FAQs"
        list={faqData}
        jsonLd={true}
        description={
          <>
            <p>
              This <a href="/faqs">Marvelbet FAQs</a> addresses the most common
              questions regarding starting, accessing, and funding your
              Marvelbet account.
            </p>
          </>
        }
      />
    ),
  },
];
const faqData = [
  {
    question:
      "What's the fastest way to log in to Marvelbet for mobile cricket bettors?",
    answer:
      "The fastest Marvelbet login process is to use the dedicated app and enable automatic login or biometric login, allowing you to instantly access live cricket odds without any manual intervention.",
  },
  {
    question:
      "Which Marvelbet payment method offers the best speed and security?",
    answer:
      "The fastest and most secure Marvelbet payment methods are local mobile financial services in Bangladesh, such as bKash and Nagad, which offer instant mobile payment transactions.",
  },
  {
    question: "How can I ensure I download the official Marvelbet mobile app?",
    answer:
      "To ensure you get the latest and genuine Marvelbet mobile app, please always use the official download link provided on the Marvelbet website and never use third-party app stores.",
  },
  {
    question: "Does Marvelbet have strict registration requirements or fees?",
    answer:
      "No, Marvelbet registration is completely free, but you must be at least 18 years old to successfully create an account.",
  },
];

const Body = () => {
  return (
    <main>
      <section className="page-info home">
        <div className="container">
          <h1>The Premier Marvelbet Online Cricket Exchange for Aficionados</h1>
          <p>
            <a href="">Marvelbet online cricket exchange</a> is the top choice
            for the 2026 IPL season.
          </p>
          <p>
            Follow every match of Royal Challengers Bangalore and other teams in
            real time, and enjoy secure trading, exclusive bonuses, and
            comprehensive market depth.
          </p>
          <InfoItem title="Marvelbet Online Cricket Exchange Highlights at a Glance">
            <ul>
              <li>
                <strong>Login Process:</strong>
                Simple, two-step login process for fast, secure access to all
                live betting markets.
              </li>
              <li>
                <strong>Payment Methods:</strong>
                Supports secure, instant local payment methods like bKash and
                Nagad for easy transactions.
              </li>
              <li>
                <strong>Mobile Marvelbet Apps:</strong>
                Dedicated mobile Marvelbet apps for Android/iOS offer superior
                speed and performance for in-play wagering.
              </li>
              <li>
                <strong>Registration:</strong>
                The straightforward registration process takes minutes,
                requiring minimal personal information to get started.
              </li>
              <li>
                <strong>Bonuses with Promotions:</strong>
                Claim lucrative welcome bonuses with promotions, including the
                popular weekly cashback.
              </li>
            </ul>
          </InfoItem>
          <div className="page-group-button">
            <a className="play-button" href="http://jeetbuzz999.com/">
              PLAY NOW
            </a>
            <a className="sign-up-button" href="http://jeetbuzz999.com/">
              SIGN UP
            </a>
          </div>
        </div>
      </section>
      <section className="page-nav">
        <div className="container">
          <div className="nav-left">
            <div className="nav-title">Table of contents</div>
            <div className="nav-wrapper">
              {navItems.map((item) => (
                <a className="nav-item" key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="nav-right">
            <img src="/page1/page-img.png" alt="Table of contents" />
          </div>
        </div>
      </section>
      {sections.map(({ sectionClass, id, Component, render }) => [
        <section id={id} key={id} className={`section-block ${sectionClass}`}>
          <div className="container">{render ? render() : <Component />}</div>
        </section>,
      ])}
      <PageSwiper />
    </main>
  );
};

export default Body;
