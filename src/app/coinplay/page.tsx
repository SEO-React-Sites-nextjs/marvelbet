import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/Coinplay-The-All-in-One-Multi-Currency-Betting-Platform.webp';

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `Coinplay-The-All-in-One-Multi-Currency-Betting-Platform`;
const postTime = new Date('2026-08-20').toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `Coinplay: The All-in-One Multi-Currency Betting Platform`,
    descArr: [
      `Coinplay launched back in November 2022, bringing a whole new vibe to the digital betting world. As a matter of fact, Coinplay makes it incredibly simple to dive into top-tier crypto casino entertainment. We wanted to build a space where everything you need is packed into one neat package. If you are tired of bouncing between different websites to place sports wagers and spin reels, you are completely covered right here.`,
    ],
    coverImg: {
      src: coverImg,
      alt: `Coinplay: The All-in-One Multi-Currency Betting Platform`,
    },
  },
  paragraph: [
    {
      title: `Control Your Display, Speed Up Your Play`,
      breakLineDesc: `We recently polished our brand new app and updated our web pages to make your betting sessions smoother than ever. The layout gives you total control, letting you switch between a bright light mode or a sleek dark mode depending on what feels right for your eyes. You will notice that jumping from the main page to the sportsbook or the live dealer rooms happens in an instant. This fresh page layout cuts out the clutter so you can focus strictly on having a good time. Whether you use a smartphone, tablet, or desktop computer, the app runs perfectly across all devices. We made sure everything scales correctly so you never miss a single detail during a live match.`,
    },
    {
      title: `Forty Cryptos, One Seamless Account`,
      breakLineDesc: `Cryptocurrency gives you freedom, which is exactly why our platform accepts over forty different digital currencies. You can easily deposit popular choices like Bitcoin, Ethereum, and Tether, or try out smaller altcoins like Dogecoin, Tron, and even specific fan tokens from popular soccer clubs. What makes this system truly unique is the ability to hold up to five different crypto coins in a single account simultaneously. You do not have to swap everything into one token just to play. This new feature allows seasoned bettors to diversify their balances while giving beginners a chance to test the waters with smaller deposits. Everything runs on the blockchain, so you always know your money is handled transparently.`,
    },
    {
      title: `Pragmatic Play, Hacksaw, and Beyond`,
      breakLineDesc: `Our online casino section is absolutely packed with over three thousand games, and we are constantly adding brand new releases to the catalog. We teamed up with massive industry providers like Pragmatic Play and Hacksaw Gaming to bring you the highest quality graphics and interactive mechanics. If you hate waiting for random scatters to land, you will love our dedicated Buy Bonus category, which lets you jump directly into the most exciting parts of a slot game. We also dropped some fresh table games and live dealer streams where you can play against real people in real time. For those who want to test things out first, you can even play slots for free without making a deposit.`,
    },
    {
      title: `Claim Up to 5,000 USDT Plus 40 Free Spins Today`,
      breakLineDesc: `Everyone loves getting extra value, so we put together some incredibly generous new promos for you to enjoy. Right from the jump, new users can grab a massive welcome bonus that matches a first deposit up to 5,000 USDT, plus forty free spins to use on our top slots. But the freebies do not stop after your first day. We give out regular cashbacks for both casino and sports bets to keep you in the game longer. We also offer bet insurance and a unique Advancebet feature that lets you place wagers even if you are waiting for other matches to settle. These fresh rewards make every dollar stretch further.`,
    },
    {
      title: `Juggle Tokens, Play Games: Your Coinplay Destination`,
      breakLineDesc: `Between the giant game library, massive bonuses, and the ability to juggle multiple crypto tokens, this platform brings something special to the table. Our continuous updates mean there will always be fresh content waiting for you every time you log in. Make your next move count and join the action over at Coinplay. We genuinely believe you will have an amazing time playing at Coinplay.`,
    },
  ],
};

const { metadata, articleSchema } = buildMetaDataAndArticleSchema({
  title: article.title.title as string,
  description: extractFirstSentence(article.title.descArr[0] as string),
  articleBody: article.title.descArr[0] as string,
  imgAlt: article.title.coverImg?.alt,

  pageUrl,
  postTime,
  img: coverImg,
});

const props: PostProps = {
  ...article,
  schema: [articleSchema],
};

export { metadata };
