/* jshint browser: true */
"use strict";

/**
 * Burger menu
 */
if (document.getElementById('btn-mob-menu')) {
  let btnMobMenuOpen = document.getElementById('btn-mob-menu');
  let btnMobMenuClose = document.getElementById('main-menu-close');
  let menuMain = document.getElementById('header-menu');
  let headerShading = document.getElementById('header-shading');

  function openMobMenu() {
    if (menuMain !== undefined) {
      menuMain.classList.add('main-menu--show');
      document.querySelector('body').classList.add('body-fixed-menu');
    }
  }

  function closeMobMenu(el) {
    el.addEventListener('click', function () {
      if (menuMain !== undefined) {
        menuMain.classList.remove('main-menu--show');
        document.querySelector('body').classList.remove('body-fixed-menu');
      }
    });
  }

  // Open Burger menu
  if (btnMobMenuOpen !== undefined || btnMobMenuOpen !== null) {
    btnMobMenuOpen.addEventListener('click', function () {
      openMobMenu();
    });
  }

  // Close Burger menu
  closeMobMenu(btnMobMenuClose);
  closeMobMenu(headerShading);

  if (menuMain !== undefined) {
    document.addEventListener('keydown', function (event) {
      let keyCode = event.keyCode;
      if (keyCode === 27) {
        menuMain.classList.remove('main-menu--show');
        document.querySelector('body').classList.remove('body-fixed');
      }
    });
  }

  /**
   * Show button .menu-item-has-children
   */
  let menuHasDropdown = document.querySelectorAll('#header-menu .menu-item.menu-item-has-children');
  if (menuHasDropdown[0] !== undefined) {
    Array.prototype.forEach.call(menuHasDropdown, function(el) {
      el.addEventListener('click', function() {
        el.classList.toggle('menu-item-has-children--show');
      });
    });
  }

  /**
   * Sub-menu - .current_page_item
   */
  if (menuMain !== undefined) {
    var currentPageItem = document.querySelector('#header-menu .current_page_item');

    if (currentPageItem !== undefined && currentPageItem != null) {
      var parentСurrentPage = currentPageItem.parentElement;
      var nameClassParentСurrentPage = parentСurrentPage.className;

      if ("sub-menu" == nameClassParentСurrentPage) {
        currentPageItem.classList.remove('current_page_item');
        parentСurrentPage.parentElement.classList.add('current_page_item');
      }
    }
  }
}

/**
 * jQuery
 */
 jQuery(function ($) {
  /**
   * Add a "look more" menu items icon
   */
  // if ($('.menu-item-has-children .sub-menu').length) {
  //   $('.menu-item-has-children .sub-menu').before('<button class="sub-menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="15" height="7"><path d="M8.9 8.9l8-8c.2-.2.2-.5 0-.7s-.5-.2-.7 0L8.5 7.8.8.1C.7 0 .4 0 .2.1.1.2 0 .4 0 .5c0 .1 0 .2.1.3l8 8c.3.2.6.2.8.1z" fill="#323232"/></svg></button>');
  // }
});