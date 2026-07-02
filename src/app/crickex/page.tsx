// postPageTemplate

import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/Crickex-Hit-a-Six.webp';

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `Crickex-Hit-a-Six`;
const postTime = new Date('2025-07-02').toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `Hit a Six with Crickex – Play Now and Win Big!`,
    descArr: [
      `Are you an enthusiastic cricket fan wishing for a thrilling sports betting experience and a chance to score big? Crickex provides a great environment for sports betting, including cricket betting live, where you can make predictions and relive the thrill of the game. Whether your preference for sports betting leans towards cricket or you simply enjoy online casino games at a fast pace, Crickex can serve everyone's interests.`,
    ],
    coverImg: {
      src: coverImg,
      alt: 'Crickex cricket betting, live betting and casino games',
    },
  },
  paragraph: [
    {
      title: `Crickex Sports Betting – A Thrilling Way to Bet on Cricket`,
      breakLineDesc: `Crickex is well-known for its extensive sports betting experience, especially in the cricket betting scene. If you're a novice or experienced bettor, Crickex sports betting is accessible and ensures an exciting experience every time. You can bet on many different cricket matches, ranging from international matches to betting on IPL matches and World Cup cricket bets.

With the competitive online cricket odds the site offers, you can bet with confidence. Crickex also has special promotions such as free bet promotions and cashback offers that can increase members' winnings and give players even more opportunities to bet without having to risk anything. You will also have access to the Crickex live cricket betting option, meaning you will have action to participate in as it happens by placing bets on different aspects of the action during the game.`,
    },
    {
      title: `Hit a Six – The Ultimate Cricket Experience`,
      breakLineDesc: `Cricket lovers enjoy sixes, and now Crickex gives you the ability to add sixes to your betting experience. Hitting a six bet lets you bet on specific things that will happen in a match, like the number of sixes scored by a player or when a six will be scored. This is an extra thrill to cricket betting, especially when betting on big events like the IPL or the World Cup.

The Crickex Cricket Game area also has a lot of interesting betting options, which allow you to guess about the outcomes of a number of key events occurring during a match. It's not just about picking a winner or loser, it's about getting into the finer details of the game to improve your betting strategy and to make each match more exciting.`,
    },
    {
      title: `Crickex Casino Games – A Perfect Mix of Sports and Casino Fun`,
      breakLineDesc: `Crickex goes beyond sports betting. If you enjoy online casino games (as well as cricket betting), then Crickex has plenty to offer. The selection of casino games on Crickex is extensive and matches your cricket betting experience perfectly, with classic table games and live dealer games, so you can essentially have a full gambling experience all in the same place.

Regardless of whether you are wagering on cricket matches or the roulette wheel, Crickex provides a quality gaming experience. And don't forget about the cashback offer from Crickex, which allows players a potential return of some of their losses, giving a sense of security to their betting. It is a great way to enjoy cricket and casino games while having the potential of a lifetime win.

You will see that Crickex delivers good odds for cricket betting, as well as providing special Crickex free bet promotions, and multiple betting opportunities, whether you are placing live cricket betting or placing bets on casino games. All you have to do is play, and maybe, just maybe, you will hit a six with Crickex!`,
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
