import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2024 Slices Pizza<span role='img' aria-label='pizza'> 🍕🍕🍕 Built by Sachin</span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
