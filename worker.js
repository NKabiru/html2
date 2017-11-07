function count() {
    for(var i  = 0; i < 1000; i++){
        if(i % 2 != 0){
            postMessage(i);
        }
    }
}

count();