import React from 'react';
import Layout from '../components/layout';
import RecipeCatalog from '../components/recipesComponents/recipe-catalog';

export default ({ user={}, favoriteRecipes=[], authoredRecipes=[] }) => 
  <Layout>
    <div className='user-details'>
      <p className='username'>{ user.username }</p>
      <p className='email'>{ user.email }</p>
    </div>
    <div className='profile'>
      <div className='favorite-recipes'>
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
            <RecipeCatalog recipes={ authoredRecipes }/>
          </div>
          :
          <></>
      }
    </div>
  </Layout>
;