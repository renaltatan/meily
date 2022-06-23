$(document).ready(function() {
	// redirect to website when click enter
	$('#test-website').on('change', function(e) {
		e.preventDefault();
    if ($(this).val().startsWith("https://") || $(this).val().startsWith("http://")) {
    	window.open($(this).val(), '_self');
    } else {
    	window.open("https://" + $(this).val(), '_self');
    }
	});

	// request to download video
	$('#download_video').on('click', function() {
		window.open("https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4", '_self');
	});

	// request to download audio
	$('#download_audio').on('click', function() {
		window.open("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3", '_self');
	});

	// request to file
	$('#upload_file').on('click', function() {
		window.open("https://postimages.org/", '_self');
	});
});