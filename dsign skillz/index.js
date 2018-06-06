var bandits = document.getElementsByClassName('bandit');
var banditLeft10OClock5High = document.getElementById('banditLeft10OClock5High');
var carrier = document.getElementById('carrier');
var explosion = document.getElementById('explosion');
var jet = document.getElementById('jet');
var missile = document.getElementById('missile');
var parachute = document.getElementById('parachute');

jet.addEventListener('webkitAnimationEnd', function() {
	jetAnimation();
});
jet.addEventListener('animationend', function() {
	jetAnimation();
});

missile.addEventListener('webkitAnimationEnd', function() {
	explode();
	parachuteFloat();
});
missile.addEventListener('animationend', function() {
	explode();
	parachuteFloat();
});

parachute.addEventListener('webkitAnimationEnd', function() {
	parachute.style.display = 'none';
});
parachute.addEventListener('animationend', function() {
	parachute.style.display = 'none';
});

function explode() {
	missile.style.display = 'none';

	for (var i = 0; i < bandits.length; i++) {
		bandits[i].style.opacity = 0;
		bandits[i].style.visibility = 'hidden';
	}

	explosion.style.opacity = 1;
	explosion.style.visibility = 'visible';
}

function jetAnimation() {
	jet.style.display = 'none';
	banditLeft10OClock5High.style.opacity = 1;
	banditLeft10OClock5High.style.visibility = 'visible';
	carrier.style.opacity = 0;
	carrier.style.visibility = 'hidden';
}

function launch() {
	missile.style.webkitAnimationPlayState = 'running';
	missile.style.animationPlayState = 'running';
}

function parachuteFloat() {
	setTimeout(function() {
		parachute.style.opacity = 1;
		parachute.style.visibility = 'visible';
		parachute.style.webkitAnimationPlayState = 'running';
		parachute.style.animationPlayState = 'running';
	}, 1500);
}

function takeoff() {
	jet.style.webkitAnimationPlayState = 'running';
	jet.style.animationPlayState = 'running';
}