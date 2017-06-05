/**
 * 
 * @authors Johns Tsai (ax_ex@hotmail.com)
 * @date    2017-06-03 
 * @version 2.1
 */
 function dynamicUrl() {
	var time = new Date();
	var year = time.getFullYear();
	var mo = time.getMonth()+1; //January is 0!
	var date = time.getDate();
	var hour = time.getHours();
	var min = time.getMinutes();
	
	if(date<10) {
    	date='0'+date
	} 

	if(mo<10) {
    	mo='0'+mo
	}
	if(hour<10) {
	   	hour='0'+hour
	}
	if(min<10) {
    	min='0'+min
	}

	var etime = year + "" + mo + "" + date + "" + hour + "" + min;
	var url = "http://webcam.goldengate.org/img-" + etime + ".jpg";
	return url;
}

var img = document.createElement("img");
img.src = dynamicUrl();
document.body.appendChild(img);