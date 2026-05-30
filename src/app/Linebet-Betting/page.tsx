// postPageTemplate

import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from "@/src/app/components/post";

import coverImg from "@/public/staticPostImage/Linebet-Betting.webp";

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo  are both fine
// invalid url will be transformed to undefined
const pageUrl = `Linebet-Betting`;
const postTime = new Date("2025-04-09").toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, "schema"> = {
  title: {
    title: `Why Linebet Is the Ultimate Betting Hub for Big Dreamers and Bigger Wins`,
    descArr: [
      `In a world where fortune favors the bold, Linebet has emerged as the place for big dreamers who want to make their dreams a reality. Whether you're here to bet big on Linebet or you're just looking to put a little spice into your day with a cheeky flutter, this is the platform where ambition meets opportunity. From the jackpot that fills your screen to unexpected treats every day, Linebet is far more than a mere betting site— it's a playground for punters with great big smiles chasing those big winnings.`,
    ],
    coverImg: {
      src: coverImg,
      alt: "live odds, live action & top casino games at linebet",
    },
  },
  paragraph: [
    {
      title: `The Only Place for Sports and Casino Fans`,
      breakLineDesc: `Why is Linebet the real betting hub? To begin with, no other digital venue has as much under one roof. Whether you're an enthusiastic sports bettor or a slots fan whose whole world is the exciting thrill when the reels roll, there is something here for every sort of player.

Football? Cricket? Basketball? Live odds you need to see to believe. Live betting is where Linebet really comes into its own. You can just imagine what it's like to place a wager as your favourite striker moves up to take a free kick. If you are more of a devotee of casinos, then Linebet's selection of casino games— from good old-fashioned blackjack games to reel spins that have arrived in the here and now— will let you keep spinning long after midnight's here and gone.
`,
    },
    {
      title: `Bonuses That Mean Business`,
      breakLineDesc: `Let's face it — big wins are all the sweeter when the handouts start piling up. Linebet understands that, and over the new user's initial deposit, it delivers a welcome bonus to get you off to a flying start.

What’s more, there's no shortage of daily rewards bringing a little ray of sunshine to your day when you log in for quiet times. And if you have friends who like a little bet now and again, then the referral program should teach them something while filling your circle's pockets. Everybody gains a win— at the most literal level.
`,
    },
    {
      title: `Tools to Make You Smarter, Faster, Richer`,
      breakLineDesc: `If fortune-telling is what you like, you're sure to find Linebet’s jackpot forecasts a pleasure. This isn’t your grandma's bingo parlor— these high-stakes wagers have real money on the line. Just make your picks, listen to the stats, follow your gut instincts (they can't be far wrong), and watch the genie at work.

The excitement of making a prediction brings a whole new dimension to this gamble. Even if you don’t have a great head for figures, the clear break-up between the stats and the odds makes for an easy way to participate. Whether you win or learn, you're always coming away with something valuable.

Now, with the power behind you to bet big on Linebet and have at your fingertips a range of tips to serve as Linebet betting tips plus odds for today at Linebet, your quest for success just got far more into focus. Don’t just get down some bets; let yourself wander and picture your winnings way ahead. At Linebet, it doesn’t always have to be winnings for the house. Now, we can both be winners.
`,
    },
  ],
};

const { metadata, articleSchema } = buildMetaDataAndArticleSchema({
  title: article.title.title as string, // article.title.title may be ReactNode
  description: extractFirstSentence(article.title.descArr[0] as string), // article.title.descArr[0] may be ReactNode
  articleBody: article.title.descArr[0] as string, // article.title.descArr[0] may be ReactNode
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
