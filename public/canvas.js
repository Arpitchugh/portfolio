$(document).ready(function () {
	if (
		!$('#myCanvas').tagcanvas(
			{
				textColour: '#08fdd8',
				outlineColour: 'transparent',
				depth: .5,
				maxSpeed: 0.1,
				weight: true,
			},
			'tags'
		)
	) {
		// something went wrong hide the canvas container,
		$('#myCanvasContainer');
	}
});
