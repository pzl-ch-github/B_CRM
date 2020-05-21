
$(function(){
  $('.left-nav li').click(function(){
    // console.log(this);
    // console.log($(this).text());
    var text = $(this).text();
    // console.log(text);
    if(text=='首页'){
      $('.right-content').load('./pages/home.html')
    }else if(text=='栏目管理'){
      $('.right-content').load('./pages/category.html')
    }else if(text=='文章管理'){
      $('.right-content').load('./pages/article.html')
    }else if(text=='评论管理'){
      $('.right-content').load('./pages/comment.html')
    }else if(text=='用户管理'){
      $('.right-content').load('./pages/user.html')
    }
    // 改变背景色
    $(this).css({
      backgroundColor:'white',
      color:'#333'
    })
    $(this).siblings().css({
      backgroundColor:'rgb(48,65,86)',
      color:'#ccc'
    })
  })
})