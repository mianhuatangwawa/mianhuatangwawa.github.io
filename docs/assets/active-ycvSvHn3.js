(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const u="modulepreload",f=function(e){return"/"+e},p={},t=function(n,a,s){let i=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");i=Promise.all(a.map(r=>{if(r=f(r),r in p)return;p[r]=!0;const l=r.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!s)for(let c=o.length-1;c>=0;c--){const g=o[c];if(g.href===r&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":u,l||(m.as="script",m.crossOrigin=""),m.href=r,document.head.appendChild(m),l)return new Promise((c,g)=>{m.addEventListener("load",c),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>n()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},v=(e,n)=>{const a=Object.assign({"../img/bg-img/000shenhezheng_pics.jpg":()=>t(()=>import("./000shenhezheng_pics-sojZNvMz.js"),__vite__mapDeps([])),"../img/bg-img/001kaidong_pics.jpg":()=>t(()=>import("./001kaidong_pics-NXcx2RDh.js"),__vite__mapDeps([])),"../img/bg-img/002shenhefan_pics.jpg":()=>t(()=>import("./002shenhefan_pics-wIu6aavE.js"),__vite__mapDeps([])),"../img/bg-img/003shenheyang_pics.jpg":()=>t(()=>import("./003shenheyang_pics-ghgsBDc4.js"),__vite__mapDeps([])),"../img/bg-img/100p1_intro.jpg":()=>t(()=>import("./100p1_intro-_sk0O9_v.js"),__vite__mapDeps([])),"../img/bg-img/101p2_intro.jpg":()=>t(()=>import("./101p2_intro-yHQoYsre.js"),__vite__mapDeps([])),"../img/bg-img/102p3_intro.jpg":()=>t(()=>import("./102p3_intro-I8M60y2V.js"),__vite__mapDeps([])),"../img/bg-img/103p4_intro.jpg":()=>t(()=>import("./103p4_intro-3W9KA6N4.js"),__vite__mapDeps([])),"../img/bg-img/300YS01funingna_head.jpg":()=>t(()=>import("./300YS01funingna_head-Os3PgJCI.js"),__vite__mapDeps([])),"../img/bg-img/301YS02leidianjiangjun_head.jpg":()=>t(()=>import("./301YS02leidianjiangjun_head-1Zw0fkQv.js"),__vite__mapDeps([])),"../img/bg-img/302YS03shenhe_head.jpg":()=>t(()=>import("./302YS03shenhe_head-21j4ODL3.js"),__vite__mapDeps([])),"../img/bg-img/303R01tanghanhan_head.jpg":()=>t(()=>import("./303R01tanghanhan_head-8cOjIuad.js"),__vite__mapDeps([])),"../img/bg-img/304KT01leimu_head.jpg":()=>t(()=>import("./304KT01leimu_head-n46pG-Y7.js"),__vite__mapDeps([])),"../img/bg-img/305KT02tangmeimei_head.jpg":()=>t(()=>import("./305KT02tangmeimei_head-FuS7lxtK.js"),__vite__mapDeps([])),"../img/bg-img/306KT03chuyin_head.jpg":()=>t(()=>import("./306KT03chuyin_head-RpFu-p9m.js"),__vite__mapDeps([])),"../img/bg-img/306TG01kafuka_head.jpg":()=>t(()=>import("./306TG01kafuka_head-FrPEYea6.js"),__vite__mapDeps([])),"../img/bg-img/307R02difa_head.jpg":()=>t(()=>import("./307R02difa_head-DrqCK5sW.js"),__vite__mapDeps([])),"../img/bg-img/399customize_head.jpg":()=>t(()=>import("./399customize_head-BFtIbc_e.js"),__vite__mapDeps([])),"../img/bg-img/400bodyshow_video.mp4":()=>t(()=>import("./400bodyshow_video-EWvypTeX.js"),__vite__mapDeps([])),"../img/bg-img/gallery.jpg":()=>t(()=>import("./gallery-KhbBfaTF.js"),__vite__mapDeps([]))}),s=jQuery,i=s(".alime-portfolio");Object.keys(a).slice(0,e).forEach(async o=>{var d;const r=await a[o](),l=((d=o.split("_")[1])==null?void 0:d.replace(/\..*/,""))||"nature";let _;l==="video"||l==="tutoral"?_=s(`<div class="col-6 single_gallery_item ${l} mb-30 wow fadeInUp" data-wow-delay="100ms">
      <div class="single-portfolio-content">
        <video class='video-width' controls>
          <source src="${r.default}" type="video/mp4">
        </video>
      </div>
      </div>
    </div>`):_=s(`<div class="col-12 col-sm-6 col-lg-3 single_gallery_item ${l} mb-30 wow fadeInUp" data-wow-delay="100ms">
      <div class="single-portfolio-content">
        <img src="${r.default}" alt="">
        <div class="hover-content">
        <a href="${r.default}" class="portfolio-img">+</a>
      </div>
      </div>
    </div>`),i.append(_)})},h=e=>{const n=Object.assign({"../img/instragram/01.jpg":()=>t(()=>import("./01-_8x0pXlD.js"),__vite__mapDeps([])),"../img/instragram/02.jpg":()=>t(()=>import("./02-kftuoUIH.js"),__vite__mapDeps([])),"../img/instragram/03.jpg":()=>t(()=>import("./03-12nS94lg.js"),__vite__mapDeps([])),"../img/instragram/04.jpg":()=>t(()=>import("./04-Re-2gn7a.js"),__vite__mapDeps([])),"../img/instragram/05.jpg":()=>t(()=>import("./05-F4OOCkHJ.js"),__vite__mapDeps([])),"../img/instragram/06.jpg":()=>t(()=>import("./06-Eus9A9YH.js"),__vite__mapDeps([])),"../img/instragram/07.jpg":()=>t(()=>import("./07-rIRtYeD6.js"),__vite__mapDeps([])),"../img/instragram/08.jpg":()=>t(()=>import("./08-bhAMR2qY.js"),__vite__mapDeps([])),"../img/instragram/09.jpg":()=>t(()=>import("./09-I7teMV2R.js"),__vite__mapDeps([])),"../img/instragram/10.jpg":()=>t(()=>import("./10-64EfYJ5-.js"),__vite__mapDeps([])),"../img/instragram/11.jpg":()=>t(()=>import("./11-9o8hM5wt.js"),__vite__mapDeps([])),"../img/instragram/12.jpg":()=>t(()=>import("./12-3XYnQ8ff.js"),__vite__mapDeps([])),"../img/instragram/13.jpg":()=>t(()=>import("./13-p5P9MDcj.js"),__vite__mapDeps([]))}),a=jQuery,s=a(".instragram-feed-area");Object.keys(n).slice(0,e).forEach(async i=>{const o=await n[i](),r=a(`<div class="single-instagram-item">
      <img src="${o.default}" alt="">
      <div class="instagram-hover-content text-center d-flex align-items-center justify-content-center">
      </div>
  </div>`);s.append(r)})};setTimeout(()=>{(function(e){var n=e(window);if(n.on("load",function(){e("#preloader").fadeOut("1000",function(){e(this).remove()})}),e.fn.classyNav&&e("#alimeNav").classyNav(),e.fn.owlCarousel){var a=e(".welcome-slides");a.owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:1e4,nav:!0,navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>']}),a.on("translate.owl.carousel",function(){var i=e("[data-animation]");i.each(function(){var o=e(this).data("animation");e(this).removeClass("animated "+o).css("opacity","0")})}),e("[data-delay]").each(function(){var i=e(this).data("delay");e(this).css("animation-delay",i)}),e("[data-duration]").each(function(){var i=e(this).data("duration");e(this).css("animation-duration",i)}),a.on("translated.owl.carousel",function(){var i=a.find(".owl-item.active").find("[data-animation]");i.each(function(){var o=e(this).data("animation");e(this).addClass("animated "+o).css("opacity","1")})})}if(e.fn.owlCarousel){var s=e(".instragram-feed-area");s.owlCarousel({items:6,loop:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:3e3,responsive:{0:{items:2},576:{items:3},768:{items:4},992:{items:5},1200:{items:6}}})}e.fn.imagesLoaded&&e(".alime-portfolio").imagesLoaded(function(){e(".portfolio-menu").on("click","button",function(){var o=e(this).attr("data-filter");i.isotope({filter:o})});var i=e(".alime-portfolio").isotope({itemSelector:".single_gallery_item",percentPosition:!0,masonry:{columnWidth:".single_gallery_item"}})}),e(".portfolio-menu button.btn").on("click",function(){e(".portfolio-menu button.btn").removeClass("active"),e(this).addClass("active")}),e(".search-btn").on("click",function(){e(".search-form").toggleClass("search-form-active")}),n.on("scroll",function(){n.scrollTop()>0?e(".main-header-area").addClass("sticky"):e(".main-header-area").removeClass("sticky")}),e.fn.magnificPopup&&(e(".video-play-btn").magnificPopup({type:"iframe"}),e(".portfolio-img").magnificPopup({type:"image",gallery:{enabled:!0,preload:[0,2],navigateByImgClick:!0,tPrev:"Previous",tNext:"Next"}})),e.fn.tooltip&&e('[data-toggle="tooltip"]').tooltip(),n.width()>767&&new WOW().init(),e.fn.jarallax&&e(".jarallax").jarallax({speed:.5}),e.fn.scrollUp&&n.scrollUp({scrollSpeed:1e3,scrollText:'<i class="arrow_carrot-up"</i>'}),e('a[href="#"]').on("click",function(i){i.preventDefault()})})(jQuery)},150);export{t as _,v as a,h as b};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}