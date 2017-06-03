$(document).ready(function(){
	$(".js-search-button").on("click", searchTracks);
	$(".btn-play").on("click", playTrack);
	$('audio').on('timeupdate', printTime);
	$('.artist-link').on("click", searchArtistDetails);
})

function searchTracks (e) {
	e.preventDefault()
	var inputValue = $(".track-input").val()
	var finalSearchTerm = inputValue.split(" ").join("+");
	$.ajax({
		type: "GET",
		url: `https://api.spotify.com/v1/search?type=track&query=${finalSearchTerm}`,
		success: getTracks,
		error: handleError
	})
}

function searchArtistDetails(e) {
	e.preventDefault()
	// var currentT = $(e.currentTarget)
	console.log(e.currentTarget)
	console.log($(e.currentTarget).data("id"))
	var id = $('.artist-link').data("id");
	console.log("aaaaaaaa")
	console.log(id);

	$.ajax({
		type: "GET",
		url: `https://api.spotify.com/v1/artists/${id}`,
		success: showModalBox,
		error: handleError
	})
}

function getTracks (response) {
	// console.log("getTracks:")
	// console.log(response)
	var trackName = response.tracks.items[0].name
	var artistId = response.tracks.items[0].artists[0].id
	var previewUrl = response.tracks.items[0].preview_url
	var trackArtist = response.tracks.items[0].artists[0].name
	var albumImg = response.tracks.items[0].album.images[0].url
	
	$(".title").html(trackName);
	$(".artist-link").html(trackArtist);
	$(".js-img").attr("src", albumImg);
	$(".js-audio").attr("src", previewUrl);
	$(".btn-play").removeClass("disabled").addClass("enabled")
	$(".artist-link").data("id", artistId);
}

function playTrack() {
	$("audio").trigger('play');
	$(".btn-play").addClass("playing")
	$(".btn-play").on("click", pauseTrack);

}

function pauseTrack () {
	$("audio").trigger('pause');
	$(".btn-play").removeClass("playing");
	$(".btn-play").on("click", playTrack);
}

function showModalBox(response) {
	console.log("showModalBox:")
	$('.modal-header').empty();
	$('.artist-photo').remove();
	$('.artist-info').empty();
	console.log(response);
	var artistTitle = response.name;
	console.log(artistTitle);
	var albumPhoto = response.images[0].url;
	var genres = [];
	response.genres.forEach(function (genre){
		genres.push(`${genre} `);
	})
	var followers = response.followers.total;
	var popularity = response.popularity;
	$('.modal-header').append(`<h1>${artistTitle}</h1>`);
	$('.js-img-artist').prepend(`<img class="artist-photo" src="${albumPhoto}">`)
	$('.artist-info').append(`<li>Artist: ${artistTitle}`);
	$('.artist-info').append(`<li>Genres: ${genres[0]}`);
	$('.artist-info').append(`<li>Followers: ${followers}`);
	$('.artist-info').append(`<li>Popularity: ${popularity}`);



	$('.js-modal').modal("show");
}

// Have printTime be called when the time is updated
function printTime () {
	$('progress').val(0);
    var current = $('audio').prop('currentTime');
    $('progress').val(current);
}


function handleError (error) {
	console.log("Error");
	console.log(error.responseText)
}