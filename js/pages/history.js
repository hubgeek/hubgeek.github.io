$(function(){
    $('.k-del').on('click', function () {
        if ($('.k-none').length){
            $.alert('没有历史纪录');
            return
        }
        $.confirm('是否清除所有历史纪录?', function () {
            $.alert('您已清除所有历史纪录');
            $('.content').html('<div class="k-none" style="text-align:center;">空空如也，没有浏览记录</div>')
            
            // $.ajax({
                
            // })
        });
    });
})