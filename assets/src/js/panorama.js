/**
 * Panorama. Loading iframes Google
 */
if (document.querySelector('.slider-center__link')) {
  let panoramaLinks = document.querySelectorAll('.slider-center__link');
  
  Array.prototype.forEach.call(panoramaLinks, function(el) {
    el.addEventListener('click', function(event) {
      event.preventDefault();

      let elDataLinkPanorama = this.dataset.iframesrc;
      let elThisPanoramaParent = el.parentElement;
      let elThisPanoramaParentChildren = elThisPanoramaParent.children;
      
      // Hide slide elements
      for (var i=0; i < elThisPanoramaParentChildren.length; i++) {
        console.log('elThisPanoramaParentChildren[i]: ', elThisPanoramaParentChildren[i]);
        elThisPanoramaParentChildren[i].style.display='none';
      }

      // Create elements
      let divWrapperIframe = document.createElement('div');
          divWrapperIframe.classList.add('slider-center__iframe');

      let textLoaderIframe = document.createElement('span');
          textLoaderIframe.classList.add('slider-center__load');
          textLoaderIframe.textContent = "Идёт загрузка панорамы...";

      let iframePanorama = document.createElement('iframe');
          iframePanorama.src = elDataLinkPanorama;
          iframePanorama.width = '100%';
          iframePanorama.height = '355';
          iframePanorama.setAttribute('frameborder', '0');
          iframePanorama.setAttribute('allowfullscreen', '');
          iframePanorama.setAttribute('aria-hidden', 'false');
          iframePanorama.setAttribute('tabindex', '0');
          
      // Append elements
      elThisPanoramaParent.appendChild(divWrapperIframe);
      divWrapperIframe.appendChild(textLoaderIframe);
      divWrapperIframe.appendChild(iframePanorama);
    });
  });
}