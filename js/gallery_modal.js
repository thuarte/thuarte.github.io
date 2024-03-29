﻿// Open modal on gallery item click
$(document).ready(function(){
	$(".gallery-item").click(function(){
		
		// Bypass if screen is narrow (image already displayed in full width)
		if ($(window).width() <= 576) {
			return;
		}
		
		// Get info form clicked element
		var title = $(this).find(".card-title").text();
		var image = $(this).find("img").first();
		var infos = $(this).find(".card-text");
		
		// Set modal style and structure
		var modal = $("#galleryModal");
		$(modal).addClass("modal fade");
		$(modal).html('<div class="modal-dialog modal-dialog-centered" style="max-width: 600px;"></div>');
		$(modal).find(".modal-dialog").html('<div class="modal-content"></div>');
		$(modal).find(".modal-content").html('<div class="modal-header"></div>');
		$(modal).find(".modal-content").append('<div class="modal-body"></div>');
		$(modal).find(".modal-content").append('<div class="modal-footer"></div>');
		
		// Update modal content
		$(modal).find(".modal-header").html('<h4 class="modal-title">' + title + '</h4>');
		$(modal).find(".modal-header").append('<button type="button" class="close" data-dismiss="modal">&times;</button>');
		$(modal).find(".modal-body").html('<img class="w-100" src="' + $(image).attr("src") + '">');
		$(modal).find(".modal-body").append('<div id="modalInfo" class="d-flex justify-content-between mt-2"></div>');
		$(modal).find(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>');
		
		$(infos).filter(function() {
			return $(this).text().length > 0
		}).each(function () {
			$(modal).find("#modalInfo").append('<div>' + $(this).html() + '</div>');
		});
		
		// Display modal
		$(modal).modal();
	});
});