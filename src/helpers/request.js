const Request = function(url){
  this.url = url;

};

Request.prototype.get = function (onComplete){
  const xhr = new XMLHttpRequest();
  xhr.open("GET",this.url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();


  xhr.addEventListener("load", () => {
    // console.log(xhr);
    if(xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString)

    onComplete(data);

    // console.log(data);
  });


};


module.exports = Request;
