import React from 'react';
import Layout from '../components/layout';
import RecipeDisplay from '../components/recipeDisplayComponents/recipe-display';

export default ({ name, instructions, ingredients }) => {

  return (
    <Layout>
      <RecipeDisplay
        name={ name }
        instructions={ instructions }
        ingredients={ ingredients }
      />
    </Layout>
  )
};

//TODO: Move to seperate file as the same logic is needed for recipes page
export async function getStaticPaths() {
  // Get path/id for all recipes or just the ones that should be created at build time
  // If the file system should be used, check out the require.context function.

  const recipeSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      // Remove all / and \ and everything before, also remove last 5 chars (.json)
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -5);

      return slug;
    })
    return data;
  })(require.context('../recipes', true, /\.json$/));

  const paths = recipeSlugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  }

}

export async function getStaticProps({ params }) {
  // Get the data needed to display a given recipe,
  // Params contains the name or id of the recipe
  const { recipe } = params;

  const data = await import(`../recipes/${recipe}.json`);

  return {
    props: {
      name: data.name,
      instructions: data.instructions,
      ingredients: data.ingredients
    },
  }
}