'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/angular-material/angular-material.min.css',
				'public/lib/font-awesome/css/font-awesome.min.css',
				'public/lib/font-awesome/fonts/fontawesome-webfont.svg',
				'public/lib/v-accordion/dist/v-accordion.min.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-aria/angular-aria.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-file-upload/angular-file-upload.js',
				'public/lib/angular-material/angular-material.js',
				'public/lib/angular-svg-round-progressbar/build/roundProgress.min.js',
				'public/lib/v-accordion/dist/v-accordion.js',
				'public/lib/angular-material-icons/angular-material-icons.js',
				'public/lib/angular-messages/angular-messages.js'
			],
			tests: ['public/lib/angular-mocks/angular-mocks.js']
		},
		css: [
			'modules/*/client/css/*.css'
		],
		less: [
			'modules/*/client/less/*.less'
		],
		sass: [
			'modules/*/client/scss/*.scss'
		],
		js: [
			'modules/core/client/app/config.js',
			'modules/core/client/app/init.js',
			'modules/*/client/*.js',
			'modules/*/client/**/*.js'
		],
		views: ['modules/*/client/views/**/*.html']
	},
	server: {
		allJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
		models: 'modules/*/server/models/**/*.js',
		routes: ['modules/*[!core]/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
		sockets: 'modules/*/server/sockets/**/*.js',
		config: 'modules/*/server/config/*.js',
		policies: 'modules/*/server/policies/*.js',
		views: 'modules/*/server/views/*.html'
	}
};
