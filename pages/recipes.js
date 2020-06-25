import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import RecipeCatalog from '../components/recipesComponents/recipe-catalog';

// TODO: Determine if ...props is necessary
export default ({ recipes }) => {
  return (
    <Layout>
      <RecipeCatalog recipes={ recipes }/>
    </Layout>
  );
}

export async function getStaticProps() {
  const recipes = await import('../testRecipes.json');

  return {
    props: {
      recipes: recipes.default
    }
  }
}
