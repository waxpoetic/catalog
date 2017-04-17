import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('releases', this.store.findAll('release'));
    //controller.set('articles', this.store.findAll('article'));
  }
});
