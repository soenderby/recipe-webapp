import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default () =>
  <Layout>
    <div className="foo">Welcome to the Recipe Webapp!</div>
    <br/>
    <p>
      Check out the 
      <Link href="/create-recipe">
        <a> create-recipe </a>
      </Link> 
      page.
    </p>
    
    <p></p>
  </Layout>
;
