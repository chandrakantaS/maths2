module.exports = class Math {
	constructor(num) {
		this.num = num;
	}

	getNum() {
		return this.num;
	}

	hexDec() {
		var rems = [], rem;
		while (this.num > 0) {
			console.log(rem, this.num)
			rem = parseInt(this.num%16)
			switch(rem) {
				case 10:
				rem = 'A';
				break;
				case 11:
				rem = 'B';
				break;
				case 12:
				rem = 'C';
				break;
				case 13:
				rem = 'D';
				break;
				case 14:
				rem = 'E';
				break;
			}
			rems.push(rem);
			this.num = parseInt(this.num/16);
			console.log('this.num: ', this.num)
		} 
		return rems.reverse().join().replace(/,/g, '');
	}
	decBinary() {
		var rems = [], rem;
			
		while (this.num > 0) {
			rem = this.num%2;
			// console.log(rem)
			this.num = parseInt(this.num/2);
			// console.log(this.num);
			rems.push(rem);
		}
		return rems.reverse().join().replace(/,/g, '');
	}
}