class HarryPotter {
	constructor() {
		this.key = '$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC';
	}

	async getChar(charName) {
			// fetch URL - be extra careful with spaces when formatting. it screwed up the url for a while
			// Fetch to this URL returns an Array!
			const charResponse = await fetch(`https://www.potterapi.com/v1/characters?
												name=${charName}&key=${this.key}`);
												console.log(charResponse);
												
												
			const charInfo = await charResponse.json();
			console.log(charInfo);

			return {
				//Since the fetch returns an array of objects, we want to return the first element (The only one at that!) so the render
				//function can render everything nicely. 
				charInfo: charInfo[0]
			}
	}


}

// example with further queries
// https://www.potterapi.com/v1/characters?name=Hannah%20Abbott&house=Hufflepuff
// &key=$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC

// https://www.potterapi.com/v1/characters?name=Hannah%20Abbott&house=Hufflepuff
//&key=$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC