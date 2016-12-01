import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('releases', this.store.find('release'));
    controller.set('articles', this.store.find('article'));
  }
});
