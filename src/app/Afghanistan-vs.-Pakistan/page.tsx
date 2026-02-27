import { Metadata } from 'next';
import InfoItem from '../components/InfoItem';
import Page1 from '../components/PageView/View5/Page1';
import Page2 from '../components/PageView/View5/Page2';
import PageSwiper from '../components/PageSwiper';

export const metadata: Metadata = {
  title: 'Afghanistan vs Pakistan: Sharjah Showdown Sees Spin Dominate',
  description:
    'Afghanistan vs Pakistan met in the final of the United Arab Emirates T20I Tri-Series on 7 September 2025 — a night that belonged to Pakistan’s spin attack as they closed out a 75-run win in Sharjah.',
  keywords:
    'Afghanistan vs Pakistan, Sharjah, T20I Tri-Series, Pakistan spin attack, Mohammad Nawaz, hat-trick, 141/8, 66 all out, Salman Agha, Rashid Khan',
  alternates: {
    canonical: '/Afghanistan-vs.-Pakistan',
  },
  openGraph: {
    title: 'Afghanistan vs Pakistan: Sharjah Showdown Sees Spin Dominate',
    description:
      'Afghanistan vs Pakistan met in the final of the United Arab Emirates T20I Tri-Series on 7 September 2025 — a night that belonged to Pakistan’s spin attack as they closed out a 75-run win in Sharjah.',
    url: '/Afghanistan-vs.-Pakistan',
    siteName: 'Marvelbet Online Cricket Exchange',
    locale: 'en_BD',
    type: 'website',
  },
};

export default function View5() {
  return (
    <>
      <main>
        <section className="page-info">
          <div className="container">
            <h1>Afghanistan vs Pakistan: Sharjah Showdown Sees Spin Dominate</h1>
            <p>
              Afghanistan vs Pakistan met in the final of the United Arab Emirates T20I Tri-Series
              on 7 September 2025 — a night that belonged to Pakistan’s spin attack as they closed
              out a 75-run win in Sharjah. Pakistan posted 141/8 batting first, then ripped through
              Afghanistan for just 66.
            </p>
            <div className="page-group-button only-one">
              <a className="play-button" href="http://jeetbuzz999.com/">
                PLAY NOW
              </a>
            </div>
          </div>
        </section>
        <section className="section-block block-yellow">
          <div className="container">
            <h2>Simple Starts then Nervy Middle Order Work</h2>
            <p>
              Pakistan’s batting never exploded but got enough from the top order to make a
              defendable 141. Fakhar Zaman’s 27 and Mohammad Nawaz’s useful 25 added steady runs at
              key moments, while Salman Agha kept the strike rotation honest. There were soft spots
              — wickets kept falling in the middle overs — but the total proved more than enough on
              a pitch that offered turn and bite.
            </p>
            <h2>Spin Control Created Sudden Batting Chaos</h2>
            <p>
              Left-arm spinner Mohammad Nawaz ripped the heart out of Afghanistan’s chase, finishing
              with a brilliant 5 for 19 and completing a hat-trick — a sequence that killed any hope
              of a recovery. Nawaz’s clever loop, change of pace and use of the rough forced errors
              and soft shots from the Afghan batters, and his figures were the difference between a
              close final and a demolition. He was rightly named player of the match and series.
            </p>
          </div>
        </section>
        <section className="section-block">
          <div className="container">
            <h2>Early Panic Followed by Missed Partnerships</h2>
            <p>
              Afghanistan’s chase turned into a horror show: a tight powerplay, quick wickets and
              poor partnerships. Rahmanullah Gurbaz and Sediqullah Atal offered small starts but the
              middle order could not build momentum. The scoreboard pressure after the first few
              dismissals magnified risk-taking, and Pakistan’s bowlers happily grabbed the chances.
              The innings shows Afghanistan’s vulnerability when quick starts don’t convert into
              stable partnerships.
            </p>
            <h2>Toss Decisions and Spinner-Friendly Plans Worked</h2>
            <p>
              Pakistan won the toss and batted first, which let their batters see the pitch before
              defending. More crucially, captain Salman Agha trusted his spinners and rotated Nawaz
              through attacking phases — a bold tactic that paid off massively. On the other side,
              Rashid Khan’s decision-making with his own spin attack kept Pakistan honest (Rashid
              picked up three wickets), but Afghanistan couldn’t match Pakistan’s control in key
              moments.
            </p>
          </div>
        </section>
        <section className="section-block home-page2-wrapper">
          <div className="container">
            <h2>Small Tactical Tweaks Could Yield Big Gains</h2>
            <p>
              For Pakistan: the triangular win highlights the value of having flexible spin options
              who can bowl in powerplays and middle overs. Pakistan should keep refining match-ups
              (which bowler to use when) and shore up middle-order finishing. For Afghanistan: the
              lesson is clear — build deeper partnerships and practice counter-punching against spin
              in low-scoring chases. Their batting lineup needs fixes that let them negotiate tight
              early overs without losing wickets in clumps.
            </p>
            <h2>Practical Fixes for Next Tournaments</h2>
            <p>
              Afghanistan must work on middle-order shot selection and running between the wickets
              under pressure. Pakistan still needs to tidy up the middle order and avoid giving away
              cheap wickets even when the spinners struggle. Fielding can always be sharpened —
              saving 5–8 runs in tight moments makes a difference in T20. Individual fitness and
              bench depth will matter as both teams look ahead to Asia Cup and World Cup prep.
            </p>
          </div>
        </section>
        <section className="section-block view-page2-wrapper">
          <div className="container">
            <h2>What Both Teams Have Been Doing Lately</h2>
            <p>
              Pakistan has tried to build continuity under new leadership and coaching, keeping a
              fairly stable T20 group while preparing for bigger events; captain Salman Ali Agha has
              said he doesn’t expect radical squad changes ahead of the 2026 T20 World Cup.
              Afghanistan’s stars like Rashid Khan are busy in T20 leagues (Rashid recently joined
              MI Emirates in ILT20) and the board has been naming squads that lean on spin depth for
              upcoming regional events. These moves show both nations balancing franchise cricket
              workload and national priorities.
            </p>
          </div>
        </section>
        <PageSwiper />
      </main>
    </>
  );
}
