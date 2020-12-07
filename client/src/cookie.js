export const getCookie = (cookieName) => {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
	var cookiePair = cookies[i].split('=');
	if (cookiePair[0].trim() === cookieName)
	    return cookiePair[1];
    }
    return null;
}

export default getCookie;
