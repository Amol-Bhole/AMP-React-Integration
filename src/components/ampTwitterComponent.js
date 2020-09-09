import React from 'react';
import * as AmpHelpers from 'react-amphtml/helpers';

import './styles.css';

function AmpImageComponent() {
  return (
    <div className='tweet'>
      <amp-twitter
        width='375'
        height='472'
        layout='responsive'
        data-tweetid='885634330868850689'
      ></amp-twitter>
    </div>
  );
}

export default AmpImageComponent;
