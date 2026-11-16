import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/Street-Fighter-Legends-Return-with-Exciting-New-Casino-Rewards-and-Features.webp';

// MARK: ********** CUSTOMIZE HERE **********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `street-fighter-legends-return-with-exciting-new-casino-rewards-and-features`;
const postTime = new Date('2026-10-17').toISOString();

// MARK: ********** CUSTOMIZE HERE **********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `Street Fighter Legends Return with Exciting New Casino Rewards and Features`,
    descArr: [
      `Street Fighter stands tall as an iconic arcade phenomenon that captured global attention decades ago before making its grand transition to online gaming platforms. On May 21, 2020, NetEnt officially launched the Street Fighter II: The World Warrior slot, bringing nostalgic pixel battles straight to modern digital casino lobbies. Players can choose their favorite legendary characters, spin the reels to execute iconic combo attacks, and trigger special bonus features reminiscent of the original cabinet experience. Our platform has embraced this timeless masterpiece to offer a fresh perspective on traditional slot gaming, blending retro aesthetics with modern win potential.`,
    ],
    coverImg: {
      src: coverImg,
      alt: `Street Fighter Legends Return with Exciting New Casino Rewards and Features`,
    },
  },
  paragraph: [
    {
      title: `Enjoying Fresh Games Added to Our Lobby`,
      breakLineDesc: `Beyond classic adaptations, our online casino library now features dozens of brand-new releases exclusive to registered members of our site. We work closely with top-tier software developers to bring you titles featuring high return percentages, innovative cluster pays, and highly engaging interactive bonus rounds. Users who love variety can dive into our newly added live dealer rooms or test out progressive jackpot slots that grow larger with every single wager placed across the network. Every single game undergoes rigorous independent testing to guarantee completely fair outcomes, reliable random number generation, and transparent gameplay for all participants involved in the action.`,
    },
    {
      title: `Participating in Our Upcoming Weekly Tournaments`,
      breakLineDesc: `To keep the excitement alive throughout the year, we regularly host thrilling weekly tournaments where registered players can climb competitive leaderboards and claim massive prize pools. Starting this coming Friday, our monthly slot championship kicks off with special multiplier boosts and point multipliers on selected popular games, giving participants more ways to win. Users simply need to opt-in directly through their account dashboard and play qualifying titles to secure their rightful spot among the top competitors on the board. These competitive events add an extra layer of enjoyment, allowing you to measure your strategic skills against other passionate gamers while enjoying a dynamic community atmosphere.`,
    },
    {
      title: `Getting Started on Our Platform Today`,
      breakLineDesc: `Joining our gaming community takes only a few minutes, thanks to a streamlined registration process that requires minimal paperwork and quick verification. Once registered, new members immediately unlock a generous welcome package featuring deposit matches and free spin bundles to kickstart their adventure. You can dive straight into the action, test various betting strategies, and experience the pure adrenaline of high-quality casino entertainment right from your home computer or mobile device. Spin the reels today and see how every legendary battle unfolds in Street Fighter. Relive the arcade glory right from your screen while enjoying the timeless excitement of Street Fighter.`,
    },
    {
      title: `Checking Out Our Account Protection Protocols`,
      breakLineDesc: `Protecting your personal data and financial transactions is a top priority for our operational team, utilizing advanced encryption protocols to safeguard every piece of information. Our dedicated customer service team remains available around the clock via live chat and email to assist with any questions regarding account setup, bonus claims, or game rules. Furthermore, our tiered loyalty program rewards long-term players with special perks, personalized account managers, and faster withdrawal processing times as they advance through VIP tiers. By combining top-tier software, generous promotions, and reliable assistance, we ensure your online gaming journey remains exceptionally smooth and satisfying from start to finish.`,
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
