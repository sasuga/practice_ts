function timestamp(func) {
	const sTime = performance.now();
	require('./'+func);
	const eTime = performance.now();
	return (eTime - sTime);
}

//aho.tsとahoaho.tsの実行時間を取得する。
let result = 'aho.ts    :' + timestamp('aho') + '\n';
result    += 'ahoaho.ts :' + timestamp('ahoaho.ts');

//出力
console.log(result); 

