
var userAction = function(bodyData,res,callback){
    console.log('>>>>in>>User>>Service>>Action>>>');
    res.send('respond with a resource');
    // callback('respond with a resource'); // use for calling next function 

}


module.exports = {
    userAction: userAction,
}