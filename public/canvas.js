$(document).ready(function () {
	if (
		!$('#myCanvas').tagcanvas(
			{
				textColour: '#08fdd8',
				outlineColour: 'transparent',
				depth: 1,
				maxSpeed: 0.1,
				weight: true,
				noSelect: true,
			},
			'tags'
		)
	) {
		// something went wrong hide the canvas container,
		$('#myCanvasContainer');
	}
});
