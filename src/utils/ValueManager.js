export const ValueManager = class {
	constructor() {
		this.value = 0;
		this.dot = false;
	}

	inputValue(inputValue) {
		if (this.dot === true) {
			let val = String(this.value) + '.' + inputValue
			this.value = +val;
			this.dot = false;
		} else if (inputValue === '.') {
			if (![...String(this.value)].includes('.'))
				this.dot = true;
		}
		else {
			let val = String(this.value) + inputValue
			this.value = +val;
		}
	}
}
