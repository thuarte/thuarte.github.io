// Acrylic albums
function getAlbumsAcrylic() {
	let albums = [];
	albums = albums.concat(getAlbumBlossoms());
	albums = albums.concat(getAlbumSacredMountains());
	albums = albums.concat(getAlbumEnchantedForests());

	for (var album of albums) {
		for (var picture of album.pictures) {
			if (!picture.comment) {
				picture.comment = "Acrylic on canvas";
			}
		}
	}
	
	return albums;
}

function getAlbumBlossoms() {
	return {
		name:"Blossoms",
		image:"pics/gallery/acrylic/summer_love.jpg",
		pictures: [
			{
				title:"Azalea",
				url:"pics/gallery/acrylic/azalea.jpg",
				width:80, height:80, year:2023,
			},
			{
				title:"Summer love",
				url:"pics/gallery/acrylic/summer_love.jpg",
				width:65, height:81, year:2022,
			},
			{
				title:"Flower's song",
				url:"pics/gallery/acrylic/flowers.jpg",
				width:65, height:81, year:2021,
			},
			{
				title:"La vie en rose!",
				url:"pics/gallery/acrylic/la_vie_en_rose.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Still life",
				url:"pics/gallery/acrylic/still_life.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Tulips",
				url:"pics/gallery/acrylic/tulips.jpg",
				width:50, height:70, year:2021,
			},
			{
				title:"Lotus",
				url:"pics/gallery/acrylic/lotus.jpg",
				width:65, height:81, year:2021,
			},
			{
				title:"Joy",
				url:"pics/gallery/acrylic/joy.jpg",
				width:30, height:40, year:2021, tag:"SOLD",
			},
		]
	}
}

function getAlbumSacredMountains() {
	return {
		name:"Sacred Mountains",
		image:"pics/gallery/acrylic/sacred_mountain3.jpg",
		pictures: [
			{
				title:"Sacred Mountains",
				url:"pics/gallery/acrylic/sacred_mountains.jpg",
				width:50, height:70, year:2021,
			},
			{
				title:"Tranquilité",
				url:"pics/gallery/acrylic/tranquillité.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Sacred Mountain I",
				url:"pics/gallery/acrylic/sacred_mountain1.jpg",
				width:65, height:81, year:2021,
			},
			{
				title:"Sacred Mountain II",
				url:"pics/gallery/acrylic/sacred_mountain2.jpg",
				width:65, height:81, year:2021,
			},
			{
				title:"Sacred Mountain III",
				url:"pics/gallery/acrylic/sacred_mountain3.jpg",
				width:65, height:81, year:2021,  tag:"SOLD",
			},
			{
				title:"Sacred Mountain IV",
				url:"pics/gallery/acrylic/sacred_mountain4.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Sacred Mountain V",
				url:"pics/gallery/acrylic/sacred_mountain5.jpg",
				width:65, height:81, year:2021,
			},
			{
				title:"In the hall of Mountain King",
				url:"pics/gallery/acrylic/in_the_hall_of_mountain_king.jpg",
				width:81, height:65, year:2021,
			},
			{
				title:"Eternity",
				url:"pics/gallery/acrylic/eternity.jpg",
				width:100, height:80, year:2021, tag:"SOLD",
			},
		]
	}
}

function getAlbumEnchantedForests() {
	return {
		name:"Enchanted Forests",
		image:"pics/gallery/acrylic/enchanted_forest2.jpg",
		pictures: [
			{
				title:"Enchanted Forest V",
				url:"pics/gallery/acrylic/enchanted_forest5.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:60, height:80, year:2022,
			},
			{
				title:"Into the unknown",
				url:"pics/gallery/acrylic/into_the_unkown.jpg",
				width:60, height:80, year:2022,
			},
			{
				title:"A night's symphony II",
				url:"pics/gallery/acrylic/night_symphony2.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Enchanted Forest II",
				url:"pics/gallery/acrylic/enchanted_forest2.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Enchanted Forest III",
				url:"pics/gallery/acrylic/enchanted_forest3.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Enchanted Forest IV",
				url:"pics/gallery/acrylic/enchanted_forest4.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Enchanted Forest I",
				url:"pics/gallery/acrylic/enchanted_forest1.jpg",
				width:60, height:60, year:2021, tag:"SOLD",
			},
			{
				title:"Enchanted Forest",
				url:"pics/gallery/acrylic/enchanted_forest.jpg",
				width:30, height:30, year:2017,
			},
			{
				title:"A night's symphony I",
				url:"pics/gallery/acrylic/night_symphony1.jpg",
				width:30, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"Intuition",
				url:"pics/gallery/acrylic/intuition.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"A night's symphony I",
				url:"pics/gallery/acrylic/night_symphony1.jpg",
				width:30, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"Childhood's dream",
				url:"pics/gallery/acrylic/childhood_dream.jpg",
				width:19, height:24, year:2021,
			},
			{
				title:"Once upon a december",
				url:"pics/gallery/acrylic/december.jpg",
				width:19, height:24, year:2020, tag:"SOLD",
			},
		]
	}
}
