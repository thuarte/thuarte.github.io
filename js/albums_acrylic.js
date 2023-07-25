// Acrylic albums
function getAlbumsAcrylic() {
	let albums = [];
	albums = albums.concat(getAlbumMarine());
	albums = albums.concat(getAlbumEnchantedForests());
	albums = albums.concat(getAlbumAbstract());
	albums = albums.concat(getAlbumSacredMountains());
	albums = albums.concat(getAlbumBlossoms());

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
		image:"pics/gallery/acrylic/enchanted_forest6.jpg",
		pictures: [
			{
				title:"Enchanted Forest VI",
				url:"pics/gallery/acrylic/enchanted_forest6.jpg",
				comment:"Acrylic on canvas",
				width:100, height:80, year:2023,
			},
			{
				title:"Enchanted Forest V",
				url:"pics/gallery/acrylic/enchanted_forest5.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:60, height:80, year:2022,
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
				title:"Intuition",
				url:"pics/gallery/acrylic/intuition.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Butterfly lovers",
				url:"pics/gallery/acrylic/butterflies.jpg",
				width:60, height:60, year:2020,
			},
			{
				title:"A night's symphony II",
				url:"pics/gallery/acrylic/night_symphony2.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"A night's symphony I",
				url:"pics/gallery/acrylic/night_symphony1.jpg",
				width:30, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"Enchanted Forest I",
				url:"pics/gallery/acrylic/enchanted_forest1.jpg",
				width:60, height:60, year:2021, tag:"SOLD",
			},
			{
				title:"Pursuit for happiness",
				url:"pics/gallery/acrylic/pursuit_for_happiness.jpg",
				width:150, height:70, year:2021,
			},
			{
				title:"A crane's dream",
				url:"pics/gallery/acrylic/cranes.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Enchanted Forest IV",
				url:"pics/gallery/acrylic/enchanted_forest4.jpg",
				width:60, height:60, year:2021,
			},
			{
				title:"Childhood's dream",
				url:"pics/gallery/acrylic/childhood_dream.jpg",
				width:19, height:24, year:2021,
			},
			{
				title:"Soliloquie",
				url:"pics/gallery/acrylic/into_the_unkown.jpg",
				width:60, height:80, year:2022, tag:"SOLD",
			},
			{
				title:"Once upon a december",
				url:"pics/gallery/acrylic/december.jpg",
				width:19, height:24, year:2020, tag:"SOLD",
			},
			{
				title:"Enchanted Forest",
				url:"pics/gallery/acrylic/enchanted_forest.jpg",
				width:30, height:30, year:2017,
			},
		]
	}
}

function getAlbumMarine() {
	return {
		name:"Marine",
		image:"pics/gallery/acrylic/journey2.jpg",
		pictures: [
			{
				title:"Journey I",
				url:"pics/gallery/acrylic/journey1.jpg",
				width:80, height:80, year:2023,
			},{
				title:"Journey II",
				url:"pics/gallery/acrylic/journey2.jpg",
				width:80, height:80, year:2023,
			},
			{
				title:"Journey",
				url:"pics/gallery/acrylic/journey.jpg",
				width:100, height:80, year:2021,
			},
			{
				title:"Rise",
				url:"pics/gallery/acrylic/rise.jpg",
				width:50, height:100, year:2022,
			},
			{
				title:"Imagine",
				url:"pics/gallery/acrylic/imagine.jpg",
				width:81, height:65, year:2022,
			},
			{
				title:"Hope",
				url:"pics/gallery/acrylic/hope.jpg",
				width:81, height:65, year:2022,
			},
			{
				title:"Carousel",
				url:"pics/gallery/acrylic/carousel.jpg",
				width:65, height:81, year:2022,
			},
			{
				title:"Color me happy",
				url:"pics/gallery/acrylic/color_me_happy.jpg",
				width:60, height:60, year:2021, tag:"SOLD",
			},
			{
				title:"Harmony",
				url:"pics/gallery/acrylic/harmony.jpg",
				width:50, height:100, year:2022, tag:"SOLD",
			},
			{
				title:"The Seekers",
				url:"pics/gallery/acrylic/the_seekers.jpg",
				width:60, height:60, year:2021, tag:"SOLD",
			},
			{
				title:"Adrift",
				url:"pics/gallery/acrylic/adrift.jpg",
				width:22, height:33, year:2020, tag:"SOLD",
			},
			{
				title:"Fantasia",
				url:"pics/gallery/acrylic/fantasia.jpg",
				width:19, height:24, year:2020,
			},
		]
	}
}

function getAlbumAbstract() {
	return {
		name:"Abstract",
		image:"pics/gallery/acrylic/abstract.jpg",
		pictures: [
				{
				title:"Diversity II",
				url:"pics/gallery/acrylic/diversity2.jpg",
				comment:"Acrylic, water colour on paper",
				width:29, height:39, year:2023,
			},
			{
				title:"Diversity",
				url:"pics/gallery/acrylic/diversity.jpg",
				comment:"Acrylic, water colour on paper",
				width:29, height:39, year:2023,
			},
			{
				title:"Tropical love",
				url:"pics/gallery/acrylic/tropical_love.jpg",
				comment:"Acrylic, water colour on paper",
				width:38, height:56, year:2023,
			},
			{
				title:"Vitality II",
				url:"pics/gallery/acrylic/vitality2.jpg",
				comment:"Acrylic, water colour on paper",
				width:38, height:56, year:2023,
			},
			{
				title:"Revitalisation",
				url:"pics/gallery/acrylic/revitalisation.jpg",
				comment:"Acrylic, water colour on paper",
				width:38, height:56, year:2023,
			},
			{
				title:"Soliloquie",
				url:"pics/gallery/acrylic/soliloquie.jpg",
				width:100, height:80, year:2022,
			},
			{
				title:"Connection",
				url:"pics/gallery/acrylic/connection.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:81, height:65, year:2021,
			},
			{
				title:"Reconciliation",
				url:"pics/gallery/acrylic/reconciliation.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:50, height:70, year:2021,
			},
			{
				title:"Infinity",
				url:"pics/gallery/acrylic/infinity.jpg",
				width:65, height:81, year:2022,
			},
			{
				title:"Garden of light",
				url:"pics/gallery/acrylic/garden_of_light.jpg",
				width:81, height:65, year:2021,
			},
			{
				title:"Impromptu",
				url:"pics/gallery/acrylic/impromptu.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:65, height:81, year:2021,
			},
			{
				title:"Enigma",
				url:"pics/gallery/acrylic/enigma.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:65, height:81, year:2021,
			},
			{
				title:"Melody of life",
				url:"pics/gallery/acrylic/melody_of_life.jpg",
				width:30, height:40, year:2021,
			},
			{
				title:"Thinker",
				url:"pics/gallery/acrylic/thinker.jpg",
				width:30, height:40, year:2021,
			},
			{
				title:"Vitality",
				url:"pics/gallery/acrylic/vitality.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:30, height:40, year:2021,
			},
			{
				title:"Desire",
				url:"pics/gallery/acrylic/desire.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:50, height:100, year:2022, tag:"SOLD",
			},
			{
				title:"Spring is here!",
				url:"pics/gallery/acrylic/spring_is_here.jpg",
				comment:"Acrylic, plant fiber on canvas",
				width:81, height:65, year:2021, tag:"SOLD",
			},
			{
				title:"Abstract",
				url:"pics/gallery/acrylic/abstract.jpg",
				width:65, height:81, year:2022, tag:"SOLD",
			},
			{
				title:"Paysage",
				url:"pics/gallery/acrylic/paysage.jpg",
				width:30, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"Drifting",
				url:"pics/gallery/acrylic/drifting.jpg",
				width:40, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"Untitled",
				url:"pics/gallery/acrylic/untitled001.jpg",
				width:40, height:40, year:2021, tag:"SOLD",
			},
			{
				title:"A blue blue soul",
				url:"pics/gallery/acrylic/blue_soul.jpg",
				width:20, height:30, year:2019,
			},
			{
				title:"Time, Space and Existence",
				url:"pics/gallery/acrylic/time_space_and_existence.jpg",
				comment:"MEADOWS' collection",
				width:30, height:30, year:2017,
			},
			{
				title:"The doors",
				url:"pics/gallery/acrylic/doors.jpg",
				width:50, height:50, year:2017,
			},
			{
				title:"Déjà vu",
				url:"pics/gallery/acrylic/deja_vu.jpg",
				width:50, height:50, year:2017, tag:"SOLD"
			},
			{
				title:"Utopia",
				url:"pics/gallery/acrylic/utopia.jpg",
				width:100, height:100, year:2016,
			},
			{
				title:"Fiction",
				url:"pics/gallery/acrylic/fiction.jpg",
				width:60, height:40, year:2016,
			},
		]
	}
}
