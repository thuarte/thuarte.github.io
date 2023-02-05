// Create gallery album
$(document).ready(function(){
	let container = $("#galleryAlbum");
	let url = new URL(window.location.href);
	let name = url.searchParams.get("name");

	let data = null;
	if (!data){
		data = getAlbumsAcrylic().find(d => d.name == name);
	}
	if (!data){
		data = getAlbumsOther().find(d => d.name == name);
	}
	createAlbum(container, data);
});

function createAlbum(container, data){
	if (!container || !data){
		return;
	}

	container.append('<h2>' + data.name + '</h2>');

	if (!data.pictures){
		container.append('<p>This album is empty.</p>');
		return;
	}

	container.append('<div class="card-columns"></div>');
	var div = container.find("div");
	data.pictures.forEach(item => {

		let url = item.url || '#';
		let title = item.title || '';
		let comment = item.comment || '';
		let dims = (item.width && item.height) ? + item.width + ' x ' + item.height + ' cm' : '';
		let year = item.year || '';
		let tags = item.tags || (item.tag ? [item.tag] : []);
		let anyText = (title || comment || dims || tags).length > 0 || year;

		return div.append(
			'<div class="card gallery-item bg-light text-dark">' +
			'<img class="card-img-top" src="' + url + '">' +
			(anyText ? '<div class="card-body">' +
			'<h4>' + 
			'<span class="card-title">' + title + '</span>' +
			tags.map(d => '<span class="badge badge-secondary ml-2">' + d + '</span>').join('') +
			'</h4>' +
			'<div class="card-text">' + comment + '</div>' +
			'<div class="d-flex justify-content-between">' +
			'<span class="card-text">' + dims + '</span>' +
			'<span class="card-text">' + year + '</span>' +
			'</div>' +
			'</div>' : '') +
			'</div>'
	)});
}