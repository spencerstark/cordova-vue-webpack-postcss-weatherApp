module.exports = {
  plugins: [
    require('postcss-smart-import')({
	    // addDependencyTo: webpack
    }),
    require('postcss-custom-media')({ 
    /* ...options */ 
	}),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}