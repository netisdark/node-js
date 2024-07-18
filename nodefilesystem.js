var fs=require('fs');

fs.writeFile('demofile.html','Hello Content',function(err){
    if (err) throw err;
    console.log('SAVED');
})