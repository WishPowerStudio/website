import PhotoSwipe from 'photoswipe/dist/photoswipe.js'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js'
import works from './works.json'

const WIDTH = 750
const HEIGHT = 1336

const initViewer = (elem, data) => {
  document.querySelector(elem).addEventListener('click', () => {
    const pswpElement = document.querySelectorAll('.pswp')[0]

    // build items array
    const items = data.map((item) => {
      return Object.assign({
        w: item.w ? item.w : WIDTH,
        h: item.h ? item.h : HEIGHT
      }, item)
    })

    // define options (if needed)
    const options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    }

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
    gallery.init()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initViewer('#wechat-works', works.wechat)
  initViewer('#html5-works', works.html5)
  initViewer('#ios-works', works.ios)
  initViewer('#android-works', works.android)
  initViewer('#web-works', works.web)
})
