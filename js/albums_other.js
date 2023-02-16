// Other albums
function getAlbumsOther() {
	let albums = [];
	albums = albums.concat(getAlbumMonoprint());
	albums = albums.concat(getAlbumSilk());
	albums = albums.concat(getAlbumOil());
	return albums;
};

function getAlbumMonoprint() {
	return {
		name:"Monoprint",
		image:"pics/menu1/monoprint.jpg",
		pictures: [
			{
				title:"Moon River",
				url:"pics/gallery/monoprint/moon_river.jpg",
				year:2019,
			},
			{
				title:"Luxury Rubbish",
				url:"pics/gallery/monoprint/luxury_rubbish.jpg",
				width:35, height:50, year:2019,
			},
			{
				title:"Lanterns I",
				url:"pics/gallery/monoprint/lanterns1.jpg",
			},
			{
				title:"Lanterns II",
				url:"pics/gallery/monoprint/lanterns2.jpg",
			},
			{
				title:"Impression of silk III",
				url:"pics/gallery/monoprint/impression_silk3.jpg",
			},
			{
				title:"She",
				url:"pics/gallery/monoprint/she.jpg",
				width:30, height:40, year:2019,
			},
			{
				url:"pics/gallery/monoprint/untitled.jpg",
			},
		]
	}
}

function getAlbumSilk() {
	return {
		name:"Silk",
		image:"pics/menu1/silk.jpg",
		pictures: [
			{
				url:"pics/gallery/silk/bridal_shop.jpg",
				year:2020,
			},
			{
				title:"Madame Tâm",
				url:"pics/gallery/silk/madame_tam.jpg",
				year:2020, tag:"SOLD",
			},
			{
				url:"pics/gallery/silk/wedding.jpg",
				year:2020,
			},
			{
				title:"Self-portrait",
				url:"pics/gallery/silk/selfportrait.jpg",
				year:2019,
			},
		]
	}
}

function getAlbumOil() {
	return {
		name:"Oil",
		image:"pics/menu1/oil.jpg",
		pictures: [
			{
				url:"pics/gallery/oil/dr_hung.jpg",
				comment:"Oil on canvas",
				year:2018, tag:"SOLD",
			},
			{
				url:"pics/gallery/oil/wedding.jpg",
				comment:"Oil on canvas",
				year:2020,
			},
			{
				url:"pics/gallery/oil/gate.jpg",
				comment:"Oil on canvas",
				year:2019, tag:"SOLD",
			},
			{
				url:"pics/gallery/oil/city_view.jpg",
				comment:"Oil on canvas",
				year:2018,
			},
			{
				url:"pics/gallery/oil/bread.jpg",
				comment:"Oil on canvas",
				year:2018, tag:"SOLD",
			},
			{
				url:"pics/gallery/oil/still_life.jpg",
				comment:"Oil on canvas",
			},
			{
				url:"pics/gallery/oil/nude.jpg",
				comment:"Oil on canvas",
				year:2018,
			},
		]
	}
}
