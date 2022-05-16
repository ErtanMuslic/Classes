const fetch = require("node-fetch");
const fn = async (author) =>{


	
		// const author = args.join("%20");
		// const author = args[0]; 
		const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`);//.then(response => {
    		const result = await response.json();

			console.log(result);
			console.log(result.content + "; author: " + result.author);
};

fn("Buddha");