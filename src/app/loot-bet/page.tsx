import Post, {
  type PostProps,
  buildMetaDataAndArticleSchema,
  extractFirstSentence,
} from '@/src/app/components/post';

import coverImg from '@/public/staticPostImage/LOOTBET-Cricket-Exchange-Who-Will-Win-Dota-2-The-International-2026-Best-Prediction-Right-Now.webp';

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********
// /foo or foo are both fine
// invalid url will be transformed to undefined
const pageUrl = `LOOTBET-Cricket-Exchange-Who-Will-Win-Dota-2-The-International-2026-Best-Prediction-Right-Now`;
const postTime = new Date('2026-08-25').toISOString();

// MARK: ********* CUSTOMIZE HERE *********
// MARK: ********* CUSTOMIZE HERE *********

export default function Page() {
  return <Post {...props}></Post>;
}

const article: Omit<PostProps, 'schema'> = {
  title: {
    title: `LOOT.BET Cricket Exchange: Who Will Win Dota 2 The International 2026 – Best Prediction Right Now`,
    descArr: [
      `LOOT.BET bettors watching Dota 2's biggest stage have a clear window to act, with The International 2026 Main Event playoffs kicking off August 20, 2026, at the Oriental Sports Center in Shanghai. Six teams have already punched their tickets through the group stage and elimination round, and the field is tighter than defending champions Team Falcons would like heading into the double-elimination bracket.`,
    ],
    coverImg: {
      src: coverImg,
      alt: `LOOT.BET Cricket Exchange: Who Will Win Dota 2 The International 2026 – Best Prediction Right Now`,
    },
  },
  paragraph: [
    {
      title: `How We Got Here`,
      breakLineDesc: `TI 2026 opened its Swiss-system group stage on August 13, with the top three seeds advancing directly to the playoffs and the rest fighting through a single-elimination gauntlet on August 16. TEAM VISION swept all four of their group-stage opponents to claim the top seed outright, while Team Liquid finished second after dropping just one series, and Nigma Galaxy rounded out the direct qualifiers as the tournament's clear dark horse after upsetting Team Spirit along the way. Team Falcons, Team Spirit, and BoomBoys all had to survive the elimination round to punch their playoff tickets, a reminder that even the reigning champions found this year's group stage far from comfortable.`,
    },
    {
      title: `Team Vision Enters as the Form Team, Not Just the Top Seed`,
      breakLineDesc: `A 4-0 sweep through the group stage isn't a fluke, and TEAM VISION's win over Falcons in Round 2 is the result bettors keep coming back to. What makes VISION dangerous isn't just their record; it's that they beat the defending champions and Team Spirit in the same run without dropping a series. Any prediction market that isn't pricing them as co-favourites alongside Falcons is underrating what they've actually shown on Shanghai's stage so far.`,
    },
    {
      title: `Falcons' Path Back to the Aegis Is Real, But Narrower Than Last Year`,
      breakLineDesc: `Team Falcons are chasing consecutive titles and a place among the sport's only multi-time champions, but the version of Falcons that beat Xtreme Gaming in last year's grand final looked more dominant through the group stage than the one that needed the elimination round to survive Vici Gaming this time. That doesn't rule Falcons out; championship teams often peak in the double-elimination bracket rather than the Swiss stage, but it does mean the safer handicap plays now sit against them advancing through the upper bracket cleanly.`,
    },
    {
      title: `Nigma Galaxy Is the Value Pick Worth Watching`,
      breakLineDesc: `Every TI produces at least one team the market underprices, and Nigma Galaxy's run through the group stage, beating Team Spirit along the way, makes them exactly that team this year. Dark horses with a group-stage scalp over a top contender tend to carry momentum further than the odds initially suggest, and Nigma's path into the playoffs came without needing the elimination round at all.
      
      With TEAM VISION's unbeaten run, Falcons' title pedigree, and Nigma Galaxy's underdog momentum all colliding in the same double-elimination bracket, TI 2026 is shaping up as one of the more genuinely unpredictable Internationals in recent memory. VISION's clean sweep gives them the strongest case on form, but Falcons' experience in best-of-five deciders shouldn't be discounted heading into the grand final on August 23. Whichever way the Aegis swings, LOOT.BET remains the place to track the odds as the bracket unfolds.`,
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
