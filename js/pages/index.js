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

    function infiniteLoad(opt) {      

        if(!opt){
            return
        }
        let lastIndex;
        let loading = false;
        let maxItems = 100;
        let itemsPerLoad = 10;

        function temp(i) {
            if (i <= 3) {
                return `<span class="k-top">sdf</span>`
            }
            return ''
        }

        function addItems(number, lastIndex) {
            
            let html = '';
            for (let i = lastIndex + 1; i <= lastIndex + number; i++) {
                // html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
                html += `<li class="item-content">
                <a href="https://www.baidu.com" class="item-inner row" external>
                <div class="col-60">
                <h4 class="k-atitle">                
                首届中国区块链媒体社会责任论坛图文直播---${i}
                </h4>
                <p class="k-atag">${temp(i)}<span>sdf</span><span>sdf</span></p>
                </div>
                <div class="col-40"><img src="https://modao.cc/uploads3/images/2314/23149833/raw_1532511667.jpeg" class="k-aimg" /></div>
                </a></li>`
            }
            opt.find('.list-container').append(html);

        }
        if (!opt.find('.list-container li').length) {
             lastIndex = 10;
            addItems(itemsPerLoad, 0);
        } else {
            lastIndex = opt.find('.list-container li').length
        }

       
        $('.content').off('scroll').on('scroll', function () {
            
            let hei = $('.content').scrollHeight() - 500;
            let top = $('.content').scrollTop();  

            if (top > hei) {

                // 如果正在加载，则退出
                if (loading) return;

                // 设置flag
                loading = true;

                setTimeout(function () {
                    // getIdxArt(function(res){
                    // console.log(res)
                    loading = false;

                    if (lastIndex >= maxItems) {
                        opt.find('.infinite-scroll-preloader').remove();
                        $('.content').off('scroll');
                        return;
                    }

                    addItems(itemsPerLoad, lastIndex);
                    lastIndex =  opt.find('.list-container li').length;
                    // })
                }, 500);


            }
        })


        function getIdxArt(call) {
            $.get('/', function (res) {
                if (call && res) {
                    call(res)
                }

            })
        }
    }
    infiniteLoad($('.k-steer-list'))

    $('.k-nav').on('click','li',function(){
        let ele = $(this);
        let txt = ele.find('a').text();
        switch(txt){
            case '关注':
            infiniteLoad($('.k-follow-list'))
            break;
            case '推荐':
            infiniteLoad($('.k-steer-list'))            
            break;

        }
        
    })


})