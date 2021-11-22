$(() => {

	$("img").each(function(){
		$(this).click(function(){
			$("body").css("overflow, hidden")
			$("#back").remove()
			$("body").prepend('<div id="back"></div>')
			$("#back").fadeIn("slow", function(){
				$(this).css({
					width: "100%",
					height: "100vh",
					position: "fixed",
					top: 0,
					left: 0,
					background: "rgba(0, 0, 0, 0.6)"
				})
			}).html('<div style="background: url(' + this.src + ') center/cover" id="image"></div')

			$("#image").css({
				position: "relative",
				width: "400px",
				height: "400px",
				left: $(this).offset().left,
				top: $(this).offset().top
			}).animate({
				width: "600px",
				left: "50%",
				top: '50%'
			})

			$("#image").append('<button>˟</buttons')
			$("button").css({
				background: "none",
				border: "none",
				outline: "none",
				color: "#fff",
				'font-size':"2em"
			})

			$("button").click(function() {
				$("#back").fadeOut(1000);
			})
		})
	})
})