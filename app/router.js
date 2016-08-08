import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

/* eslint-disable array-callback-return, prefer-arrow-callback */
Router.map(function () {
  this.route('users', function () {});
  this.route('login');
});
/* eslint-enable array-callback-return, prefer-arrow-callback */

export default Router;
