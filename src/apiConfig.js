let apiUrl
const apiUrls = {
<<<<<<< HEAD
	// YOU MUST CHANGE PRODUCTION URL WHEN DEPLOYING
	production: '<replace_with_deployed_api_url>',
=======
    // YOU MUST CHANGE PRODUCTION URL WHEN DEPLOYING
	production: 'https://petmatchapi.fly.dev',
>>>>>>> 0c2aefa3a04d18d61d5a3f020f4372a0ce158047
	development: 'http://localhost:8000',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
