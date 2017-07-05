import React from 'react';
import { Meteor } from 'meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('redner-target'));
});
