import FeatureList from "../../FeatureList";
export default function Page1() {
  const features = [
    {
      title: "Incorrect Turnover Calculation",
      description:
        "Ensure you met the minimum odds requirements for bets to count toward turnover.",
    },
    {
      title: "Expired Bonus Period",
      description:
        "Use the bonus within 7 days of claiming it, or it will automatically expire.",
    },
    {
      title: "Bonus Not Displayed",
      description:
        "Contact support if the bonus isn't credited immediately after deposit verification.",
    },
    {
      title: "Bonus Wagering Stuck",
      description:
        "Clear your app cache or update the Marvelbet app to resolve technical display glitches.",
    },
    {
      title: "Maximum Bet Limit Exceeded",
      description:
        "Ensure individual bets do not exceed the maximum allowed amount while clearing turnover.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Bonuses and Error Solutions</h2>
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
