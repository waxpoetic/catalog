import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('releases');
  this.route('artists');
  this.route('shop');
  this.route('podcast');
  this.route('news');
  this.route('signup');
  this.route('events');
  this.route('publishing');
  this.route('production');
  this.route('demos');
  this.route('about');
  this.route('faq');
  this.route('legal');
  this.route('contact');
});

export default Router;
