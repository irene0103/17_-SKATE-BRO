//alert add to cart
$(function(){
  $('#addcart').click(function(){
    alert('Add to cart.');
  });
})

//下拉選單
// let i=0;
// $("#part-menu").click(function(){
//     if($(window).width()<767){
//         $("#part-menu-list").slideToggle();
//     }
// });

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
//購物車


///刪除
$(function(){
  $('.item-del').click(function(){ 
      $(this).parents('.item-menu').css('display','none')
  })
})


// <!-- Initialize Swiper -->
    
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
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

    ///客製化輸入字
    $(function () {	
			let textMax = $('#talk').attr('maxlength')
			$('#feedback').html(` maximum <span style="color:#ECAF3A;">${textMax}</span> letters.`)

			$('#talk').keyup(function(){
				let textLength = $(this).val().length
				$('#feedback').html(` maximum <span style="color:#ECAF3A">${textMax - textLength}</span> letters.`)

				$('#content').text($('#talk').val()).css('font','16px')
			})
		});		

    //換照片
    $(function(){
      $('#sm-btn01').click(function(){
        $('.create-main>ul>li:first-child').css('display','block')
        $('.create-main>ul>li:not(:first-child)').not().hide()
      })
      $('#sm-btn02').click(function(){
        $('.create-main>ul>li:nth-child(2)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(2))').not().hide()
      })
      $('#sm-btn03').click(function(){
        $('.create-main>ul>li:nth-child(3)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(3))').not().hide()
      })
      $('#sm-btn04').click(function(){
        $('.create-main>ul>li:nth-child(4)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(4))').css('display','none')
      })
      $('#sm-btn05').click(function(){
        $('.create-main>ul>li:nth-child(5)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(5))').css('display','none')
      })
      $('#sm-btn06').click(function(){
        $('.create-main>ul>li:nth-child(6)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(6))').css('display','none')
      })
      $('#sm-btn07').click(function(){
        $('.create-main>ul>li:nth-child(7)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(7))').css('display','none')
      })
      $('#sm-btn08').click(function(){
        $('.create-main>ul>li:nth-child(8)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(8))').css('display','none')
      })
      $('#sm-btn09').click(function(){
        $('.create-main>ul>li:nth-child(9)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(9))').css('display','none')
      })
      $('#sm-btn10').click(function(){
        $('.create-main>ul>li:nth-child(10)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(10))').css('display','none')
      })
      $('#sm-btn11').click(function(){
        $('.create-main>ul>li:nth-child(11)').css('display','block')
        $('.create-main>ul>li:not(:nth-child(11))').css('display','none')
      })
      $('#sm-btn12').click(function(){
        $('.create-main>ul>li:last-child').css('display','block')
        $('.create-main>ul>li:not(:last-child').css('display','none')
      })
    })
 