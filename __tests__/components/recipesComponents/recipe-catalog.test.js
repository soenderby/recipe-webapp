import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import RecipeCatalog from '../../../components/recipesComponents/recipe-catalog';
import { createCatalogItem } from '../../testUtils/recipe-catalog-reducer-factories';

describe('RecipeCatalog component', async assert => {
  {
    const $ = render(<RecipeCatalog/>);

    assert({
      given: 'nothing',
      should: 'render recipe-catalog element',
      actual: $('.recipe-catalog').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeCatalog recipes={[ createCatalogItem() ]}/>);

    assert({
      given: 'array with single element',
      should: 'render correct number of recipe-card components',
      actual: $('.recipe-card').length,
      expected: 1
    });
  }

  {
    const $ = render(<RecipeCatalog recipes={[
      createCatalogItem(),
      createCatalogItem(),
      createCatalogItem()
    ]}/>);

    assert({
      given: 'array with multiple elements',
      should: 'render correct number of recipe-card components',
      actual: $('.recipe-card').length,
      expected: 3
    });
  }

});