import FeatureList from "../../FeatureList";
export default function Page1() {
  const features = [
    {
      title: "Advantages of Cryptocurrency Payments",
      description:
        "Offers enhanced anonymity, high security, and near-instant processing speeds globally.",
    },
    {
      title: "Advantages of USDT Payments",
      description:
        "Uses a stablecoin tied to the USD, minimizing volatility during transactions.",
    },
    {
      title: "Cryptocurrency Payment Steps",
      description:
        "Select crypto, copy the wallet address, and send funds via the correct network (TRC20).",
    },
    {
      title: "Cryptocurrency is Suitable for Advanced Players",
      description:
        "Ideal for users familiar with digital wallets seeking high limits and speed.",
    },
    {
      title: "Blockchain Security",
      description:
        "Transactions are protected by decentralized blockchain technology, ensuring their integrity.",
    },
  ];
  return (
    <>
      <h2>Marvelbet Cryptocurrency Payments </h2>
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
