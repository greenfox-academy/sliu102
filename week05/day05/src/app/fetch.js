const URL = 'https://api.github.com/';

var urlAuthen = 'Basic ' + btoa('sliu102'+':'+'2ef2c37c44551b6e60d945d10d51688fea67c640');
var myHeaders = new Headers();         
myHeaders.append("Authorization", urlAuthen);        
var myInit = {            
	method:'GET',            
	headers:myHeaders        
};

function getUserInfo(reposName, callback) {
  var list = [];
  var result = fetch(URL+'repos/greenfox-academy/'+reposName,myInit)
  	.then(function (response){
    	return response.json();
  	})
  	.then(function (data) {
	    var name = data.name;
	    var description = data.description;
	    var lastCommitTime = data.updated_at;
	    console.log('then', data,name,description,lastCommitTime);
	    list.push(name);
	    list.push(description);
	    list.push(lastCommitTime);
	    callback(list);
	    return list;
	  })
  return result;
}


module.exports = getUserInfo; 


