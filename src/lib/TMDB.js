const fetch = require('isomorphic-unfetch');
const querystring = require('querystring');

class TMDB {
	constructor(config) {
		this.api_key = config.api_key;
		this.basePath = 'https://api.themoviedb.org/3';
	}

	request(endpoint, options) {
		let url = `${this.basePath}${endpoint}&api_key=${this.api_key}`;

		let headers = {
			'Content-type': 'application/json',
		};

		let config = {
			...options,
			...headers,
		};

		return fetch(url, config)
			.then((res) => {
				if (res.status === 200) return res.json();
			})
			.catch((err) => console.error(err));
	}

	/** Search for TV shows */
	search(options) {
		let query = options ? `?${querystring.stringify(options)}` : '';

		let url = '/search/tv' + query;
		let config = {
			method: 'GET',
		};

		return this.request(url, config);
	}

	/** Return a list of genres */
	getGenres(options) {
		let query = options ? `?${querystring.stringify(options)}` : '';

		let url = `/genre/tv/list${query}`;
		let config = {
			method: 'GET',
		};

		return this.request(url, config);
	}

	/** Return all information about a TV show */
	getSerie(id, options) {
		let query = options ? `?${querystring.stringify(options)}` : '';

		let url = `/tv/${id}${query}`;
		let config = {
			method: 'GET',
		};

		return this.request(url, config);
	}
}

module.exports = TMDB;