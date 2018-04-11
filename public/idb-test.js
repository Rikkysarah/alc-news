import idb from 'idb';

var dbPromise = idb.open('news-db', 2, function(upgradeDb){
    var keyValStore = upgradeDb.createObjectStore('keyVal');
    keyValStore.put('World', 'hello')
    console.log('dbPromise')
})
