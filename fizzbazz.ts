function fizzbazz():void {
	for(var i=1;i<100;i++) {
		let result: string ="";
		if(i%3==0) result="Fizz";
		if(i%5==0) result=result+"Bazz";
		if(result!="") {
			result = result + "!";
		} else {
			result = String(i);
		}
		console.log(result);
	}
}
fizzbazz();
