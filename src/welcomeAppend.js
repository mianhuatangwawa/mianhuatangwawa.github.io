// 图库加图

const modules = import.meta.glob('../img/carousel/*')
const $ = jQuery
const fatherNode = $('.welcome-slides');
Object.keys(modules).forEach(async (key) => {
  const src = await modules[key]();
  const template = `<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(${src.default});"><div class="container h-100"><div class="row h-100 align-items-center"><div class="col-12 col-lg-8 col-xl-6"><div class="welcome-text"><h2 data-animation="bounceInDown" data-delay="900ms">Hello <br>I\`m Jackson</h2><p data-animation="bounceInDown" data-delay="500ms">I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p><div class="hero-btn-group" data-animation="bounceInDown" data-delay="100ms"><a href="#" class="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a><a class="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a></div></div ></div ></div ></div ></div > `
  fatherNode.append($(template));
})