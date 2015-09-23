/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


  'get /': 'MainController.index',
  'get /about': 'MainController.about',
  'get /contact': 'MainController.contact',
  'get /dealers': 'MainController.dealers',
  'get /delivery-program': 'MainController.delivery_program',

  'get /news': 'NewsController.index',
  'get /news/:id': 'NewsController.index',

  'get /ownership': 'MainController.ownership',

  'get /yachts/': 'YachtsController.index',
  'get /yachts/navetta': 'YachtsController.navetta',
  'get /yachts/navetta/52': 'YachtsController.navetta_52',
  'get /yachts/navetta/58': 'YachtsController.navetta_58',
  'get /yachts/fly': 'YachtsController.fly',
  'get /yachts/fly/40': 'YachtsController.fly_40',
  'get /yachts/fly/45': 'YachtsController.fly_45',
  'get /yachts/fly/52': 'YachtsController.fly_52',
  'get /yachts/fly/56': 'YachtsController.fly_56',
  'get /yachts/fly/60': 'YachtsController.fly_60',
  'get /yachts/fly/64': 'YachtController.fly_64',
  'get /yachts/fly/72': 'YachtsController.fly_72',
  'get /yachts/sty': 'YachtsController.sty',
  'get /yachts/sty/40': 'YachtsController.sty_40',
  'get /yachts/sty/45': 'YachtsController.sty_45',
  'get /yachts/sty/56': 'YachtsController.sty_56',
  'get /yachts/sty/64': 'YachtsController.sty_64',
  'get /yachts/sty/70': 'YachtsController.sty_70',
  'get /yachts/stl': 'YachtsController.stl',
  'get /yachts/stl/40': 'YachtsController.stl_40',

  'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',
  'post /api/user': 'UserController.create',

  /**
   * Post routes
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'post /api/post': 'PostController.create',
  'delete /api/post/:id': 'PostController.destroy',

  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
