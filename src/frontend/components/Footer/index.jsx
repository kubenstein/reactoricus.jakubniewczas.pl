import React from 'react';
import './styles.css';

import FunctionLink from 'components/FunctionLink';

const Footer = () => (
  <div styleName="wrapper">
    <FunctionLink href="http://jakubniewczas.pl/" target="_blank">
      Jakub Niewczas
    </FunctionLink>
    &nbsp;FullStack Developer.
  </div>
);

export default Footer;
