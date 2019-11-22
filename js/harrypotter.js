class HarryPotter {
	constructor() {
		this.key = '$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC';
	}

	async getChar(charName) {
			// fetch URL - be extra careful with spaces when formatting. it screwed up the url for a while
			const charResponse = await fetch(`https://www.potterapi.com/v1/characters?
												name=${charName}&key=${this.key}`);
												
												
			const charInfo = await charResponse.json();
			console.log(charInfo);

			return {
				charInfo: charInfo
			}
	}


}

// example with further queries
// https://www.potterapi.com/v1/characters?name=Hannah%20Abbott&house=Hufflepuff
// &key=$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC

// https://www.potterapi.com/v1/characters?name=Hannah%20Abbott&house=Hufflepuff
//&key=$2a$10$O6fcVebZfuHJcmenq6rqpu113Bt7gxS40RfdJp5s/RhCdTvsnOiaC