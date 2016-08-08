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
  this.route('containers', function() {
    this.route('detail', {
      path: ':id'
    });
  });
  this.route('images', function() {});
});
/* eslint-enable array-callback-return, prefer-arrow-callback */

export default Router;
