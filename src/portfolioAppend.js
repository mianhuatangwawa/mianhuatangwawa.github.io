// 图库加图
export default (length, videoLength) => {
  const modules = import.meta.glob('../img/bg-img/*')
  // const modulesVideo = import.meta.glob('../img/video/*')
  const $ = jQuery
  const fatherNode = $('.alime-portfolio');
  Object.keys(modules).slice(0, length).forEach(async (key) => {
    const src = await modules[key]();
    const type = key.split('_')[1]?.replace(/\..*/, '') || 'nature';
    let c;
    if (type === 'video' || type === 'tutoral') {
      c = $(`<div class="col-6 single_gallery_item ${type} mb-30 wow fadeInUp" data-wow-delay="100ms">
      <div class="single-portfolio-content">
        <video class='video-width' controls>
          <source src="${src.default}" type="video/mp4">
        </video>
      </div>
      </div>
    </div>`)
    } else {
      c = $(`<div class="col-12 col-sm-6 col-lg-3 single_gallery_item ${type} mb-30 wow fadeInUp" data-wow-delay="100ms">
      <div class="single-portfolio-content">
        <img src="${src.default}" alt="">
        <div class="hover-content">
        <a href="${src.default}" class="portfolio-img">+</a>
      </div>
      </div>
    </div>`)
    }
    fatherNode.append(c);
  })
  // Object.keys(modulesVideo).slice(0, videoLength).forEach(async (key) => {
  //   const src = await modulesVideo[key]();
  //   const c = $(`<div class="col-12 single_gallery_item video mb-30 wow fadeInUp" data-wow-delay="100ms">
  //     <div class="single-portfolio-content">
  //       <video class='video-width' controls poster="index_v1.jpg">
  //         <source src="${src.default}" type="video/mp4">
  //       </video>
  //     </div>
  //     </div>
  //   </div>`)
  //   fatherNode.append(c);
  // })
}