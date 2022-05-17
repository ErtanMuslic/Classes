const fetch = require("node-fetch");
const fn = async (author) =>{
	try {
		// const author = args.join("%20");
		// const author = args[0]; 
		const CheckedAuthor = await authorCheck(author)

		if(!CheckedAuthor){
			return "That author doesnt exist";
		}

		const response = await fetch(`https://api.quotable.io/random${CheckedAuthor ? `?author=${CheckedAuthor}` : ""}`);//.then(response => {
    		const result = await response.json();


			console.log(result);
			console.log(result.content + "; author: " + result.author);
			
	} catch (error) {
	 console.log(error);	
	}
};

const authorCheck = async () => {
	try {
		const response = await fetch(`https://api.quotable.io/search/authors?query=${author}`);
		const result = await response.json();
		
		console.log(result);

		if(!result.count) {
			return false;
		}

		return result.results[0].name;
	} catch (error) {
		console.log(error);
	}
}

const getQuotes = async (page, sortBy, order) =>{
	try {
		const paramsExist = page || sortBy || order;
		const moreThen2 = page && sortBy;
		const response = await fetch(`https://api.quotable.io/quotes?page=${paramsExist ? "?" : ""}
		${page ? `page=${page}` : ""
	}${sortBy ? `${page && sortBy ? "&" : ""}sortBy=${sortBy}` : ""}
	${sortBy}${order ? `order=${order}` : ""}`);
    		const result = await response.json();
			return result.results;
			
	} catch (error) {
	 console.log(error);	
	}
};

getQuotes(185,"content","desc").then((result) =>{
	for (let i = 0; i < result.length; i++) {
		const element = result[i];
		console.log(element.content + ' by: ' + element.author)
	}
});