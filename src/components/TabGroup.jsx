import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const TabGroup = ({ tabs }) =>
  <ul>
    {tabs.map(tab =>
      <Tab
        key={tab.id}
        favIconUrl={tab.favIconUrl}
        title={tab.title}
        url={tab.url}
      />,
    )}
  </ul>;

TabGroup.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TabGroup;