export function header () {

  var burgerBtn = document.querySelector('.main-header__burger');
  var burgerMenu = document.querySelector('.menu__main');
  var activeMenu = function () {

    if (burgerBtn.classList.contains('main-header__burger--closed')) {
      burgerBtn.classList.remove('main-header__burger--closed');
      burgerBtn.classList.add('main-header__burger--active');
      burgerMenu.classList.add('menu__main--active');
      document.body.style.overflow='hidden';
    } else {
      burgerBtn.classList.add('main-header__burger--closed');
      burgerBtn.classList.remove('main-header__burger--active');
      burgerMenu.classList.remove('menu__main--active');
      document.body.style.overflow='';
    }
  }

  burgerBtn.addEventListener('click', activeMenu);


  var MainMob = document.querySelector('.menu__main--wrap');
  var Menubtn = document.querySelectorAll('.drop__item span');
  var MenuItem = document.querySelectorAll('.drop__item');

  if (MainMob){
    Menubtn.forEach(function (item, i) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        if(MenuItem[i].classList.contains('drop__item--active'))
        {
          MenuItem[i].classList.remove('drop__item--active');
        }
        else {
          MenuItem[i].classList.add('drop__item--active');
        }
      });
    });
  }
  var prBtn = document.querySelectorAll('.products__category__item span');

  var prItem = document.querySelectorAll('.products__category__item--closed');
  var prM = document.querySelectorAll('.products__category__item div');
  var prMain = document.querySelector('.products__menu');
document.get
  // if (prMain){
  //   var removeActive = function (array, activeClass) {
  //     array.forEach(function (item) {
  //       item.classList.remove(activeClass);
  //     });
  //     return;
  //   };
  //   prBtn.forEach(function (item, i) {
  //     item.addEventListener('click', function (evt) {
  //       evt.preventDefault();
  //       if(prItem[i].classList.contains('products__category__item--active'))
  //       {
  //         prInf[i].classList.remove('products-list--active');
  //         prBtn[i].classList.remove('products-span--active');
  //         prM[i].classList.remove('products-div--active');
  //         prItem[i].classList.remove('products__category__item--active');
  //         prItem[i].classList.add('products__category__item--closed');
  //       }
  //       else {
  //         removeActive(prInf, 'products-list--active');
  //         removeActive(prBtn, 'products-span--active');
  //         removeActive(prM, 'products-div--active');
  //         removeActive(prItem, 'products__category__item--active');
  //         prInf[i].classList.add('products-list--active');
  //         prBtn[i].classList.add('products-span--active');
  //         prM[i].classList.add('products-div--active');
  //         prItem[i].classList.add('products__category__item--active');
  //       }
  //     });
  //   });
  // }
  if (prMain){
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };
    prBtn.forEach(function (item, i) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        if( prBtn[i].classList.contains('products-span--active'))
        {
          prBtn[i].classList.remove('products-span--active');
          prM[i].classList.remove('products-div--active');
          prItem[i].classList.remove('ul-active');
        }
        else {
          removeActive(prBtn, 'products-span--active');
          removeActive(prM, 'products-div--active');
          removeActive(prItem, 'ul-acteve');
          prBtn[i].classList.add('products-span--active');
          prM[i].classList.add('products-div--active');
          prItem[i].classList.add('ul-active');
        }
      });
    });
  }


  var filterItm = document.querySelectorAll('.filter__item');
  var filterList = document.querySelector('.products__filter');
  var FilterBtn = document.querySelectorAll('.products__filter li span');
  var FilterHead = document.querySelectorAll('.filter__header');

  if (filterList){
    FilterHead.forEach(function (item, i) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        if(filterItm[i].classList.contains('filter__item--active'))
        {
          filterItm[i].classList.remove('filter__item--active');
        }
        else {
          filterItm[i].classList.add('filter__item--active');
        }
      });
    });
  }

  var vacMain = document.querySelector('.vacancy__main');
  var vacBtn = document.querySelectorAll('.vacancy__header div');
  var vacDesc = document.querySelectorAll('.vacancy__descr');
  var vacKn = document.querySelectorAll('.vacancy__header');
  if (vacMain){
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };
    var addActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.add(activeClass);
      });
      return;
    };

    vacKn.forEach(function (item, i) {
      // vacBtn[0].classList.add('vacancy__image--active');
      // vacDesc[0].classList.add('vacancy__descr__open');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (vacDesc[i].classList.contains('vacancy__descr__closed')) {

          removeActive(vacBtn, 'vacancy__image--active');
          removeActive(vacDesc, 'vacancy__descr__open');
          addActive(vacBtn, 'vacancy__image--closed');
          addActive(vacDesc, 'vacancy__descr__closed');
          vacBtn[i].classList.add('vacancy__image--active');
          vacDesc[i].classList.add('vacancy__descr__open');
          vacBtn[i].classList.remove('vacancy__image--closed');
          vacDesc[i].classList.remove('vacancy__descr__closed');
          vacDesc[i].style.height = "auto";
          var height = vacDesc[i].clientHeight + "px";
          vacDesc[i].style.height = "0px";
          setTimeout(() => {
            vacDesc[i].style.height = height
          }, 0)
        }
        else {
          vacBtn[i].classList.remove('vacancy__image--active');
          vacBtn[i].classList.add('vacancy__image--closed');
          vacDesc[i].classList.add('vacancy__descr__closed');
          vacDesc[i].style.height = "0px";
          vacDesc[i].addEventListener('transitionend', () => {
            vacDesc[i].classList.remove('vacancy__descr__open')
          }, {once: true})
        }
      });
    });
  }
  var spare = document.querySelector('.spare');
  var spareImg = document.querySelectorAll('.spare__list-img li');
  var spareText = document.querySelectorAll('.scroll__list li');

  if (spare) {

    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };
    spareText.forEach(function (item, i) {
      removeActive(spareImg, 'spare__img--active');
      spareText[0].classList.add('scroll__item--active');
      spareImg[0].classList.add('spare__img--active');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        removeActive(spareText, 'scroll__item--active');
        removeActive(spareImg, 'spare__img--active');
        spareText[i].classList.add('scroll__item--active');
        spareImg[i].classList.add('spare__img--active');
      });
    });
  }

  var PrdHeader = document.querySelectorAll('.products__header span');
  var PrdCat = document.querySelectorAll('.products__category');
  var PrPage = document.querySelector('.products-page');

  var removeActive = function (array, activeClass) {
    array.forEach(function (item) {
      item.classList.remove(activeClass);
    });
    return;
  };

  if (PrPage){
    PrdHeader.forEach(function (item, i) {
      if (window.innerWidth < 767) {
        PrdCat[i].classList.remove('products__category--active');
        PrdHeader[i].classList.remove('span--active');
      }
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        if(PrdCat[i].classList.contains('products__category--active'))
        {
          PrdCat[i].classList.remove('products__category--active');
          PrdHeader[i].classList.remove('span--active');
        }
        else {
          PrdCat[i].classList.add('products__category--active');
          PrdHeader[i].classList.add('span--active');
        }
      });
    });
  }


  const BrnMain = document.querySelector('.contacts--wrap');
  const Brn = document.querySelectorAll('.branch');
  const BrnInf = document.querySelectorAll('.branch-inf');
  const BrnBTN = document.querySelectorAll('.contacts--item');


  if (BrnMain){
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };
    var addActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.add(activeClass);
      });
      return;
    };
    BrnBTN.forEach(function (item, i) {
      Brn[0].classList.remove('branch--off');
      BrnInf[0].classList.add('branch-inf--active');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        if(Brn[i].classList.contains('branch--off'))
        {
          addActive(Brn, 'branch--off');
          removeActive(BrnInf, 'branch-inf--active');
          removeActive(Brn, 'branch--active')
          Brn[i].classList.add('branch--active');
          Brn[i].classList.remove('branch--off');
          BrnInf[i].classList.add('branch-inf--active');
        }
        if(Brn[i].classList.contains('branch--active')){

        }
        else {
          Brn[i].classList.remove('branch--active');
          Brn[i].classList.add('branch--off');
          BrnInf[i].classList.remove('branch-inf--active')
        }
      });
    });
  }

  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [53.901087, 27.416279], // координаты центра на карте
      zoom: 17, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([53.901087, 27.416279], {
      balloonContent: "ЗАО «Амкодор-Спецсервис», 220003, РБ, Минская область, г. Минск, ул. Брикета, 39",
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/svg/flag.svg',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");

    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
          script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

          // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true;

          // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');

          // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });
        }
      }
    );
  }

  $(function() {

    //Запускаем основную функцию
    ymap();

  });



  var modTrigger = document.querySelectorAll('[data-mod-text-us]');
  const ModText = document.querySelector('.modal__text-us');
  const modCl = document.querySelectorAll('[data-mod-close]');

  modTrigger.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      ModText.classList.add('modal__text-us--active');

    });
  });
  modCl.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      ModText.classList.remove('modal__text-us--active');

    });
  });

  var modTriggerCall = document.querySelectorAll('[date-call-back]');
  const ModCall = document.querySelector('.modal-call-us');
  const modCallCl = document.querySelectorAll('[date-call-close]');

  modTriggerCall.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      ModCall.classList.add('modal-call-us--active');
      document.body.style.overflow='hidden';
    });
  });

  modCallCl.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      ModCall.classList.remove('modal-call-us--active');
      document.body.style.overflow='';
    });
  });

  if (ModCall) {
    ModCall.addEventListener('click', (e) => {
      if (e.target === ModCall) {
        ModCall.classList.remove('modal-call-us--active');
        document.body.style.overflow = '';
      }
    })
  }


  var scrolled;
  if (window.innerWidth > 1200) {
    window.onscroll = function () {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
        $(".main-header--main-page").css({"background": " #003C71"})
      }
      if (100 > scrolled) {
        $(".main-header--main-page").css({"background": "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"})
      }
    }
  }

  var InpSearch = document.querySelector('.input__search');
  var Phone = document.querySelector('.phone');
  var vib = document.querySelector('.social');
  var Mail = document.querySelector('.mail');
  var SClean = document.querySelector('.search__clean');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('.main-header__burger');
  var menuspan = document.querySelectorAll('.main-header__burger span');

  InpSearch.addEventListener('focus', function (evt) {
    evt.preventDefault();
    if (window.innerWidth < 767) {
      logo.style.visibility = "hidden";
      menu.style.visibility = "hidden";
      menu.style.transition= "none";
      menuspan.forEach(function (item, i) {
        menuspan[i].style.transition= "none";
      });
    }
    Phone.style.visibility = "hidden";
    vib.style.visibility = "hidden";
    vib.style.transition= "none";
    Mail.style.visibility = "hidden";
    SClean.style.display="block";

  });
  InpSearch.addEventListener('blur', function (evt) {
    evt.preventDefault();
    if (window.innerWidth < 767) {
      logo.style.visibility = "visible";
      menu.style.visibility = "visible";
      menu.style.transition= ".5s ease-in-out";
      menuspan.forEach(function (item, i) {
        menuspan[i].style.transition= ".25s ease-in-out ";
      });
    }
    Phone.style.visibility = "visible";
    vib.style.visibility = "visible";
    vib.style.transition= "";
    Mail.style.visibility = "visible";
    SClean.style.display="none";
    InpSearch.value=" ";
  });



  // var BlInput = document.querySelectorAll('.m-form__input');
  // var ItemInput = document.querySelectorAll('.m-form__input input').length;
  // var ItemLabel = document.querySelectorAll('.m-form__input .input__label');
  // BlInput.forEach(function (item, i) {
  //   if (ItemInput[i] === 0) {
  //     ItemLabel[i].classList.remove('input__label--active');
  //   } else {
  //     ItemLabel[i].classList.add('input__label--active');
  //   }
  // });


  $("#user_name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");

    } else {
      $(this).removeClass("not-empty");
    }
  });
  $("#user_phone").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });
  $("#user_name1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });
  $("#user_phone1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });
  $("#user-email").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });
  $("#user-mas").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });



}


