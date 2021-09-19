function ahoaho() {
	let result = '';
	for(var i=1;i<1000;i++) {
		if(i%3==0 || String(i).match(/3/)) {
			result += 'あほ\n';
		} else {
			result+=String(i)+'\n';
		}
	}
	console.log(result);
}
ahoaho();
