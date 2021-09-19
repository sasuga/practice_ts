function aho() {
    //3のつく数字と3の倍数はアホになります。
    for (var i = 1; i < 100; i++) {
        if (i % 3 == 0 || String(i).match(/3/)) {
            console.log("あほ");
        }
        else {
            console.log(String(i));
        }
    }
}
aho();
