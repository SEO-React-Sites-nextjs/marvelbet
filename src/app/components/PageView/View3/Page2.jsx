import FeatureList from "../../FeatureList";
export default function Page2() {
  const features = [
    {
      title: "What is Fast Deposit and Withdrawal",
      description:
        "Transactions completed rapidly, often within minutes, thanks to MFS integration.",
    },
    {
      title: "Reasons for Fast Deposit Failure",
      description:
        "Incorrect recipient numbers or insufficient MFS wallet balance typically cause failure.",
    },
    {
      title: "Reasons for Fast Withdrawal Failure",
      description:
        "Unmet bonus wagering requirements or pending KYC verification delay withdrawals.",
    },
    {
      title: "Deposit Limit",
      description:
        "Check the minimum and maximum deposit limits for your chosen method before attempting transfer.",
    },
    {
      title: "Withdrawal Limits",
      description:
        "Understand daily and weekly withdrawal ceilings, which may vary based on your VIP level.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Fast Deposit and Withdrawal Methods</h2>
      <FeatureList features={features} className="row2 white-bg" />
    </>
  );
}
