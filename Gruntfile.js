module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*██████████████████████████████████████████████████████████████████████████████\n" +
				" █  <%= pkg.author.company %>\n" +
				" █  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" █  <%= pkg.description %>\n" +
				" █  <%= pkg.homepage %>\n" +
				" █  Made by <%= pkg.author.name %>\n" +
				" █  Under <%= pkg.license %> License\n" +
				" █████████████████████████████████████████████████████████████████████████████*/\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/*.js"],
				dest: "dist/jquery.youtube-background-player.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/*.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.youtube-background-player.js"],
				dest: "dist/jquery.youtube-background-player.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.youtube-background-player.js": "src/jquery.youtube-background-player.coffee"
				}
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["jshint", "build"]);
	grunt.registerTask("travis", ["default"]);

};
