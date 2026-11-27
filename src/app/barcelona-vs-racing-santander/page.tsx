import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/Barcelona-vs-Racing-Santander-Nine-Goals-at-Camp-Nou-Shake-Up-La-Liga-Odds.webp';

// MARK: ********** CUSTOMIZE HERE **********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `barcelona-vs-racing-santander-nine-goals-at-camp-nou-shake-up-la-liga-odds`;
const postTime = new Date('2026-11-26').toISOString();

// MARK: ********** CUSTOMIZE HERE **********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `Barcelona vs Racing Santander: Nine Goals at Camp Nou Shake Up La Liga Odds`,
    descArr: [
      `Fans looking for non-stop goals got a wild ride when Barcelona vs Racing Santander lit up the pitch on September 16, 2026. The Barcelona vs Racing Santander showdown in week six of the 2026–27 La Liga season ended in a 7–2 scoreline at Spotify Camp Nou, giving bettors on our online casino plenty to talk about.`,
    ],
    coverImg: {
      src: coverImg,
      alt: `Barcelona vs Racing Santander: Nine Goals at Camp Nou Shake Up La Liga Odds`,
    },
  },
  paragraph: [
    {
      title: `Reliving the Wildest Moments from the Nine-Goal Clash`,
      breakLineDesc: `Right from the eighth minute, João Cancelo set the tone by firing home a slick pass from Lamine Yamal to put the hosts ahead. Raphinha doubled the cushion from the penalty spot at the 25-minute mark after Pedro Felipe clipped him inside the area. Racing refused to fold quietly, though, as Maguette Gueye bundled the ball over the line five minutes later off an Asier Villalibre assist. Any hope of a comeback took a heavy blow when Villalibre accidentally turned a deflected Cancelo effort into his own net in the 36th minute. Raphinha added another before the break via Dani Olmo, while Racing keeper Julen Agirrezabala stopped a Lamine Yamal spot-kick just before halftime. After the interval, a costly slip by substitute goalie Wojciech Szczęsny gifted Yassir Zabiri an easy finish in the 65th minute, before Raphinha buried a second penalty, Gabriel Jesus curled one into the top corner, and Yamal tapped in a late Karim Adeyemi cross.`,
    },
    {
      title: `Standout Stars Who Carried the Heavy Scoring Load`,
      breakLineDesc: `Raphinha stole the spotlight and walked off with the match ball after bagging a clinical hat-trick that pushed his early-season tally into double figures. Every time the Brazilian winger cut inside, the visiting backline looked completely out of answers. João Cancelo also had a night to remember, stretching the pitch down the flank, scoring the opener, and forcing the own goal that broke Racing's momentum. Lamine Yamal showed immense character too; shaking off his saved penalty before halftime, the teenager stayed hungry, set up two goals, hit the post, and finally got his own name on the scoresheet in the 89th minute. On the other side, Julen Agirrezabala deserved credit for keeping the scoreline from growing even worse, pulling off several sharp stops amid 30 total shots.`,
    },
    {
      title: `Clever Coaching Choices that Shaped the Ninety Minutes`,
      breakLineDesc: `Hansi Flick sent out a rotated lineup built around relentless pressing and quick vertical passes, and his plan worked like clockwork. By keeping 69 percent of the ball and racking up 64 touches inside the opposing box, the hosts suffocated Racing whenever they tried to build from the back. Flick also timed his second-half chances well, bringing on Gavi, Marc Bernal, and Gabriel Jesus to inject fresh legs right when the pace threatened to dip. Meanwhile, Racing manager José Alberto López tried to stay compact and hit on the break through Asier Villalibre and Juan Carlos Arana. While that counter-attacking shape briefly troubled the Catalan high line in transition, the newly promoted side simply could not hold up against constant wave after wave of pressure.`,
    },
    {
      title: `Fixing Defensive Slips Before the Next Big Kickoff`,
      breakLineDesc: `Hansi Flick will want his defenders to tighten up during transitions, especially after Juan Carlos Arana missed a golden chance early in the second half and Wojciech Szczęsny gifted a cheap goal while replacing the injured Joan García. For José Alberto López, the priority is obvious: cut down on clumsy fouls inside the box after giving away multiple penalties and far too many corners. Both clubs have plenty to build on before they meet again in April 2027, making Barcelona vs Racing Santander a fixture worth circling on your calendar.`,
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
