import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="foo">Welcome to the Recipe Webapp!</div>
      <br/>
      <p>Check out the </p>
      <Link href="/create-recipe">
        <a>create-recipe </a>
      </Link>
      <p>page.</p>
    </>
  );
}
