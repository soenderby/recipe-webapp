import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import RecipeCatalog from '../components/recipesComponents/recipe-catalog';

// TODO: Determine if ...props is necessary
export default ({ recipes }) => {
  console.log(recipes);
  return (
    <Layout>
      <RecipeCatalog recipes={ recipes }/>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get path/id for all recipes or just the ones that should be created at build time
  // If the file system should be used, check out the require.context function.

  const createRecipe=( name = '' ) => ({ name });

  const recipeSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      // Remove all / and \ and everything before, also remove last 5 chars (.json)
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -5);

      return slug;
    })
    return data;
  })(require.context('../recipes', true, /\.json$/));

  const paths = recipeSlugs.map((slug) => createRecipe(slug));


  return {
    props: {
      recipes: [...paths]
    }
  }
}
