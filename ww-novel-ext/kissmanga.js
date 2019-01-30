document.querySelectorAll('script').forEach(function(s) { s.remove(); });
document.querySelectorAll('iframe').forEach(function(s) { s.remove(); });
document.querySelectorAll('style').forEach(function(s) { s.remove(); });

var xaky_next,
	xaky_prev;

var xakyup = {};
onkeydown = onkeyup = function(e) {
	xakyup[e.keyCode] = e.type == 'keydown';
	//console.log(xakyup);
	
	if (xakyup[17] && xakyup[39]) {
		console.log('CTRL + ->');
		window.location.href = xaky_next.href;
    }else if (xakyup[17] && xakyup[37]) {
		console.log('CTRL + <-');
		window.location.href = xaky_prev.href;
    }
	if (e.keyCode !== 17 && e.keyCode !== 39 && e.keyCode !== 37) {
		//console.log('reset');
		xakyup = {};
	}
}

setTimeout(function() {
	document.getElementById('divImage').style.display = 'inline';
	console.log('Show divImage again');
	document.cookie = 'gogl1=; expires=' + new Date(0).toUTCString() +'; path=/';
	console.log('Removed gogl1 cookie');
	xaky_next = document.querySelector(".btnNext").parentElement;
	xaky_prev = document.querySelector(".btnPrevious").parentElement;
}, 3500);

// document.querySelectorAll('#divImage img').forEach(function(i) { console.log(i.src); })
