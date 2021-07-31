// gatsby-config.js
const siteMetadata = require('./site-metadata.json')


module.exports = {
	pathPrefix: '/',
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
    			   options: {
      			   enableIdentityWidget: true,
			   htmlTitle: 'Profile Manager',
			   htmlFavicon: siteMetadata.siteIcon,
    			},
		},
		`gatsby-plugin-netlify`,
       	`gatsby-transformer-remark`,
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
            options: {
                name: `siteData`,
                path: `${__dirname}/siteData`
		  }
		},
//		{
//			resolve: `gatsby-source-filesystem`,
//            options: {
//                path: `${__dirname}/siteData/social.yml`
//		  }
//		},
//		  {
//			resolve: `gatsby-source-filesystem`,
//			options: {
//			  path: `./site/photos.yml`,
//			},
//		  },
		{
			resolve: `gatsby-plugin-mailgo`,
			options: {
			  mailgoConfig: {
				dark: true,
				showFooter: false,
			  },
			},
		  },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `Funk With El Monk`,
			  short_name: `El Monk`,
			  description: siteMetadata.description,
			  lang: `en`,
			  start_url: `/`,
			  background_color: `#000`,
			  theme_color: `#000`,
			  display: `minimal-ui`,
			  icon: siteMetadata.siteIcon,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
