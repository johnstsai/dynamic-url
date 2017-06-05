function dynamicUrl() {
  var url = "https://image.flaticon.com/teams/new/1-freepik.jpg";
  return url;
}

var img = document.createElement("img");
img.src = dynamicUrl();
document.body.appendChild(img);