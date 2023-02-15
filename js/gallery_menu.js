// Create gallery menu
$(document).ready(function(){
	// Acrylic
	createMenu(
		$("#galleryMenuAcrylic"),
		getAlbumsAcrylic()
	);
	
	// Other
	createMenu(
		$("#galleryMenuOther"),
		getAlbumsOther()
	);
});

function createMenu(container, data){
	if (!container || !data){
		return;
	}
	
	container.append('<div class="row"></div>');
	var div = container.find("div");
	data.forEach(item => div.append(
		'<div class="col-lg-4 col-md-6 mt-1 mb-4">' +
		'<div class="card picture-btn" style="background-image: url(' + item.image + ')">' +
		'<h2 class="picture-btn-text">' + item.name + '</h2>' +
		'<div class="card-img-overlay">' +
		'<a href="gallery_album.html?name=' + item.name + '" class="stretched-link"></a>' +
		'</div>' +
		'</div>' +
		'</div>'
	));
}
