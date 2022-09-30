import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import movieBreakdown from '../images/actualPlay/how-to-run-a-contest.jpg';

const LearnToPlay = () => {
  const data = useStaticQuery(graphql`
    {
      allYoutubeVideo(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            id
            title
            videoId
            publishedAt(formatString: "MMM DD, YYYY")
            privacyStatus
            channelTitle
            thumbnail {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Learn to Play Fate" />
      <main className="main-content-wrapper">
        <h1 className="page-title">Learn to Play Fate</h1>
        <p>
          Thanks to the support of the Fate SRD Patreon, we've been putting
          together a lot of actual play videos you can learn from. Enjoy!
        </p>
        <br />

        <ul className="ap-card__ul">
          <li>
            <a href="https://vimeo.com/manage/videos/747298589">
              <img
                className="ap-card__img"
                src={movieBreakdown}
                alt="The Chase Scene from Indiana Jones 3 as a Contest • Fate SRD Movie Breakdown"
              />
            </a>
            <h3 className="ap-card__title">
              <a href="https://vimeo.com/manage/videos/747298589">
                The Chase Scene from Indiana Jones 3 as a Contest • Fate SRD
                Movie Breakdown
              </a>
            </h3>
            <p className="small">September 07, 2022</p>
          </li>
          {data.allYoutubeVideo.edges
            .filter((item) => item.node.videoId !== '1dYG32qrPnk')
            .map((item) => (
              <li key={item.node.title} className="ap-card__card">
                {console.log(item.node.title, item.node.videoId)}
                <a
                  href={`https://www.youtube.com/watch?v=${item.node.videoId}`}
                >
                  <img
                    className="ap-card__img"
                    src={item.node.thumbnail.url}
                    alt={item.node.title}
                  />
                </a>
                <h3 className="ap-card__title">
                  <a
                    href={`https://www.youtube.com/watch?v=${item.node.videoId}`}
                  >
                    {item.node.title}
                  </a>
                </h3>
                <p className="small">{item.node.publishedAt}</p>
              </li>
            ))}
        </ul>
      </main>
    </Layout>
  );
};

export default LearnToPlay;
