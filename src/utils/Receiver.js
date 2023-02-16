export const Receiver = class {
	constructor() {
		this.showingResult = false;
		this.commandList = [];
		this.counter = 0;
		this.result = 0;
	}

	execute() {
		let result = 0;
		for (let i = 0; i < this.counter; i++) {
			result = this.commandList[i].execute(result);
		}
		return result;
	}

	addCommand(command) {
		this.commandList.push(command);
		this.counter += 1;
	}

};