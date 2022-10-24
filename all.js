//alert add to cart
$(function(){
  $('#addcart').click(function(){
    alert('Add to cart.');
  });
})

/// + - 按鈕
window.addEventListener("load", function(){
	//-------------------
	let btnPluses = document.getElementsByClassName("btnPlus");
	let btnMinuses = document.getElementsByClassName("btnMinus");
	let qtys = document.getElementsByClassName("qty");

	for(let i=0; i<btnPluses.length; i++){
		//------+ 按鈕
		btnPluses[i].onclick = function(){
			qtys[i].value = parseInt(qtys[i].value) + 1; //+
		}

		//------- 按鈕
		btnMinuses[i].onclick = function(){
			if(qtys[i].value > 0){
				qtys[i].value = qtys[i].value - 1;//-
			}
		}
	}
})

///刪除
$(function(){
  $('.item-del').click(function(){ 
      $(this).closest('.item-menu').css('display','none')
  })
})


// <!-- Initialize Swiper -->
    
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      // 點小圖換大圖
    function showLarge(e){ 
        let small = e.target;
        document.getElementById("large").src = small.src;
    }
    function init(){
        let imgs = document.querySelectorAll("#smallPanel img");
        for(let i=0;i<imgs.length; i++){
            imgs[i].onclick = showLarge;
        }
    }
    
    window.addEventListener("load", init, false);
 