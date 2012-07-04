Backbone.RoutedView = Backbone.View.extend({
  
  initialize: function(options) {
    if( _.isEmpty(this.routes) ) { return; }
    this.prepare_router();
    this.create_routes();
    this.start_listener();
  },
  
  prepare_router: function() {
    this.router = new Backbone.Router({ routes: this.routes });
  },
  
  create_routes: function() {
    var self = this;
    _.each(this.router.routes, function(method, matcher) {
      self.router.on('route:'+ method, self[method], self);
    });
  },
  
  start_listener: function() {
    Backbone.history.start();
  }
  
});