// 图库加图
export default (length) => {
  const modules = import.meta.glob('../img/instragram/*')
  const $ = jQuery
  const fatherNode = $('.instragram-feed-area');
  Object.keys(modules).slice(0, length).forEach(async (key) => {
    const src = await modules[key]();
    const c = $(
      `<div class="single-instagram-item">
      <img src="${src.default}" alt="">
      <div class="instagram-hover-content text-center d-flex align-items-center justify-content-center">
      </div>
  </div>`
    )
    fatherNode.append(c);
  })
}