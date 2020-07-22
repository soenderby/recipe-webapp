import React from 'react';
import Layout from '../components/layout';
import LabeledText from '../components/profileComponents/labeled-text';
import RecipeCatalog from '../components/recipesComponents/recipe-catalog';

import './profile.scss';

export default ({ user={}, favoriteRecipes=[], authoredRecipes=[] }) => 
  <Layout>
    <div className='profile'>
      <div className='user-details'>
        {
          // The layout of user-details sucks
          /*
          <h3 className='title'>{ 'User Details' }</h3>
          <LabeledText label={ 'Username' } text={ user.username }/>
          <LabeledText label={ 'Email' } text={ user.email }/>
          */
        }
        <p className='username'>{ user.username }</p>
        <p className='email'>{ user.email }</p>
      </div>
      <div className='favorite-recipes'>
        <h3 className='favorites-title'>{ 'Favorite Recipes' }</h3>
        {
          favoriteRecipes.length > 0 ? 
              <RecipeCatalog recipes={ favoriteRecipes }/>
            :
              <p className='no-favorites-message'>
                {'You do not yet have any favorite recipes'}
              </p>
        }
      </div>
      {
        authoredRecipes.length > 0 ? 
          <div className='authored-recipes'>
            <h3 className='authored-title'>{ 'Your Recipes' }</h3>
            <RecipeCatalog recipes={ authoredRecipes }/>
          </div>
          :
          <></>
      }
    </div>
  </Layout>
;

export async function getStaticProps() {
 // This page should likely use the useSWR hook instead of 
 // getStaticProps

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
      user: {username: 'testUser', email: 'testMail'},
      favoriteRecipes: paths,
      authoredRecipes: []
    }
  }
}