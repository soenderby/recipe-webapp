import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Layout from '../../components/layout';

const createLayout = props => render(<Layout props={props}/>);

describe('layout component', async assert => {
  {
    const $ = createLayout();

    assert({
      given: 'nothing',
      should: 'render layout element',
      actual: $('.layout').length,
      expected: 1
    });
  }

  {
    const $ = createLayout();

    assert({
      given: 'nothing',
      should: 'render page-content element',
      actual: $('.page-content').length,
      expected: 1
    });
  }

  {
    const $ =  render(
      <Layout > 
        <div className='child'>
        </div>
      </Layout>);

    assert({
      given: 'child component',
      should: 'render child component',
      actual: $('.child').length,
      expected: 1
    });
  }
});