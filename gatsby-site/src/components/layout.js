/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql } from 'gatsby';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
/* eslint-enable no-unused-vars */

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export default IndexPage;
  