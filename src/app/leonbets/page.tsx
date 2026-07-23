import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/Why-LeonBets-is-the-Best-Choice-for-Online-Sports-Betting.webp';

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `Why-LeonBets-is-the-Best-Choice-for-Online-Sports-Betting`;
const postTime = new Date('2025-07-02').toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `Why LeonBets is the Best Choice for Online Sports Betting`,
    descArr: [
      `Online sports betting has become one of the fastest-growing entertainment options worldwide, and among the many platforms available, LeonBets stands out as a top-tier choice for both beginners and experienced bettors. With a perfect combination of extensive sports coverage, secure payments, excellent customer service, and a user-friendly interface, LeonBets has set the benchmark for what a modern betting platform should offer.`,
    ],
    coverImg: {
      src: coverImg,
      alt: 'Why LeonBets is the Best Choice for Online Sports Betting',
    },
  },
  paragraph: [
    {
      title: `Comprehensive Sports Coverage and Major Leagues`,
      breakLineDesc: `One of the biggest advantages of LeonBets is its wide variety of sports. Whether you are passionate about soccer, football, basketball, or tennis, LeonBets has it all. Soccer fans can bet on prestigious leagues like the English Premier League, La Liga, Bundesliga, and Serie A, while basketball enthusiasts have access to NBA games and major European leagues. Tennis lovers can follow their favorite stars across Grand Slam tournaments such as Wimbledon, the US Open, the French Open, and the Australian Open.

But it’s not just the variety; it’s the depth. LeonBets provides multiple betting options for each event, including live betting, which allows you to place bets in real time as matches unfold. This level of flexibility ensures that every player can find betting options that match their style and strategy.`,
    },
    {
      title: `Safe and Convenient Payments`,
      breakLineDesc: `When it comes to handling money online, security is paramount, and LeonBets takes this seriously. The platform supports a variety of safe and convenient payment methods, including credit and debit cards, e-wallets, and bank transfers. All transactions are encrypted using advanced security protocols, so your personal and financial information remains protected.

Moreover, withdrawals are fast and hassle-free, allowing players to access their winnings almost instantly. This reliability gives users peace of mind and enhances the overall betting experience, knowing that their funds are both safe and easily accessible.`,
    },
    {
      title: `Outstanding Customer Service`,
      breakLineDesc: `A platform is only as good as the support it offers, and LeonBets excels in this area. The customer service team is available 24/7, ready to assist with any inquiries, from account setup to technical support and betting guidance. The support staff are knowledgeable and responsive, ensuring that users never feel stranded or frustrated. This commitment to excellent service is a major reason why LeonBets has earned a loyal user base.`,
    },
    {
      title: `Easy Sign-Up and Intuitive Interface`,
      breakLineDesc: `Getting started with LeonBets is remarkably simple. The registration process is quick and straightforward, so you can start betting in just a few minutes. Once inside, the platform’s clean and intuitive interface makes navigating between sports, leagues, and betting options effortless. Even if you are new to online betting, you can place your bets with confidence and ease.

LeonBets also features mobile-friendly design, so users can enjoy seamless betting experiences on smartphones and tablets without compromising functionality or speed.

With its wide range of sports, access to major leagues, secure payments, excellent customer service, and intuitive interface, LeonBets offers an all-in-one solution for online sports betting. Whether you’re a casual bettor or a seasoned sports enthusiast, LeonBets provides a reliable, exciting, and safe platform to make every game more thrilling.`,
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
