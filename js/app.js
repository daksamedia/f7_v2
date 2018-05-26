// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
var id_hewan;

if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'com.akadbaiq.app',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  statusbar: {
    iosOverlaysWebView: true,
	overlay:false,
  },
  touch: {
    // Disable fast clicks
    fastClicks: true,
  },
  view: {
    stackPages: true,
    xhrCache: true,
	animateWithJS:true,
  },
  dialog: {
    // set default title for all dialog shortcuts
    title: 'AkadbaiQ'
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  
});


var mainView = app.views.create(’.view-main’, {
stackPages:true,
animateWithJS:true
});
