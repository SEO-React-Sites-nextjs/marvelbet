import FeatureList from "../../FeatureList";
export default function Page2() {
  const features = [
    {
      title: "Referral Bonus",
      description:
        "You and your friend both receive 500 BDT free bets when requirements are met.",
    },
    {
      title: "Calculation Method",
      description:
        "Friend must deposit 2,000 BDT and bet 6,000 BDT for the bonus to trigger.",
    },
    {
      title: "Claiming Referral Bonus",
      description:
        "The bonus is credited to both accounts automatically once the friend hits the target.",
    },
    {
      title: "Lifetime Income Potential",
      description:
        "Though paid once per friend, this program helps build a valuable network of users.",
    },
    {
      title: "Referral Link",
      description:
        "Share your unique tracking link for accurate tracking of all your referred players.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Referral Bonus Program</h2>
      <FeatureList features={features} className="row2 white-bg" />
    </>
  );
}
