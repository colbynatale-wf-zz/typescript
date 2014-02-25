export class Publisher {
	constructor(public name: string) {

	}
}

export class Character {
	constructor(public realName: string,
		        public handle: string) {

	}
}

export class Comic {
	private characters: Character[] = [];

	constructor(public publisher: Publisher,
				public name: string,
				public publishedDate: Date) {
	}

	addCharacter(character: Character) {
		this.characters.push(character);
	}

	hasCharacter(character: Character) {
		return this.characters.indexOf(character) > -1;
	}
}