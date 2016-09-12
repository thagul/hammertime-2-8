import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    index(route) {
      this.transitionTo(route);
    }
  }
});
