// 图库加图

const modules = import.meta.glob('../img/carousel/*')
const $ = jQuery
const fatherNode = $('.welcome-slides');
Object.keys(modules).forEach(async (key) => {
  const src = await modules[key]();
  const template = `<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(${src.default});"><div class="container h-100"><div class="row h-100 align-items-center"><div class="col-12 col-lg-8 col-xl-6"><div class="welcome-text"><h2 data-animation="bounceInDown" data-delay="300ms">欢迎您，<br>定制已上线！<br>体型已升级！</h2><p data-animation="bounceInDown" data-delay="300ms" style="font-size:large">Welcome, custom dolls are now available！The doll's body has been fully upgraded！</p><div class="hero-btn-group" data-animation="bounceInDown" data-delay="100ms"><a href="https://bzxqb317vhijc0ghbhhjlfoaf3aqx33.taobao.com/shop/view_shop.htm?spm=a21n57.1.0.0.1e65523cLvTqC2&appUid=RAzN8HWLtQmmqzVqyMgnxJn9kJVQEXnywnbYbjqvJDBs5Fr6ZgV" class="btn alime-btn mb-3 mb-sm-0 mr-4">点此购买</a><a href="https://bzxqb317vhijc0ghbhhjlfoaf3aqx33.taobao.com/shop/view_shop.htm?spm=a21n57.1.0.0.1e65523cLvTqC2&appUid=RAzN8HWLtQmmqzVqyMgnxJn9kJVQEXnywnbYbjqvJDBs5Fr6ZgV" class="btn alime-btn mb-3 mb-sm-0 mr-4">Buy outside of China</a></div></div ></div ></div ></div ></div > `
  fatherNode.append($(template));
})