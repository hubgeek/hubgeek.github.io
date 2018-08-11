$(function () {  
    $(".swiper-container").swiper({
        autoplay: 5000,
        speed: 400,
        loop: true,
        parallax: true,
        grabCursor: true,
        spaceBetween: 0,
        paginationHide: true
    })


    $(document).on('click','.k-more', function () {
        var buttons1 = [
         
          {
            text: '收藏',
            // bold: true,
            // color: 'danger',
            onClick: function() {
              $.alert("“收藏“成功");
            }
          },
        //   {
        //     text: '分享至',
        //     label: true
        //   },
          {
            text: '分享至微信', //'<div class="k-share"><div class="k-wechat"></div><div class="k-weibo"></div><div class="k-qq"></div></div>'
            onClick: function() {
              $.alert("“微信“分享成功");
            }
          },
          {
            text: '分享至微博',           
            onClick: function() {
              $.alert("“微博“分享成功");
            }
          },
          {
            text: '分享至QQ',
            onClick: function() {
              $.alert("“QQ“分享成功");
            }
          },
        ];
        var buttons2 = [
          {
            text: '取消',
            bg: 'danger'
          }
        ];
        var groups = [buttons1, buttons2];
        $.actions(groups);
    }); 




})