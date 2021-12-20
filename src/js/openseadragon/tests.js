var map = (function (me, undefined) {
  me.hotspots = [
    {
      x: 500,
      y: 500,
      w: 250,
      h: 250,
      id: "1",
      link: "1",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Исследование нитей",
      description: `
      <div class="ssb__full-text">
        <p>
        -дипзум, при клике выводить окно с картинками попарно до-после. На пк просто рядом стоящие изображения, на мобилке и планшете через до-после
        </p>
      </div>

      <!-- Изображение до/после на пк и планшете -->
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <!-- Изображение после -->
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
      </div>

      <div class="before-after  ssb__before-after-slider">
        <!-- Изображение до -->
        <img src="images/before-after/before-after-thumb-1.jpg" />
        <!-- Изображение после -->
        <img src="images/before-after/before-after-thumb-1b.jpg" />
      </div>
			`,
      data: "research",
    },
    {
      x: 4500,
      y: 2500,
      w: 250,
      h: 250,
      id: "1",
      link: "1",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Это точка про птицу",
      description: `
      <div class="ssb__full-text">
        <p>Очень много текста</p>
        <p>при клике выводится окно с 2 изображениями, на пк просто рядом стоящие изображения, на мобилке и планшете через до-после</p>
      </div>

      <!-- Изображение до/после на пк и планшете -->
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/test.png">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <!-- Изображение после -->
        <a class="ssb__gallery-popup-link" href="images/test.png">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>

      </div>
      <p>Макрофотография шерстяной красной нити при различном увеличении.
      Шерстяная нить II порядка, толщиной ок 1,2 мм, S-крутки с шагом 4,17 мм., состоит из двух нитей I порядка толщиной ок. 0,68 мм, Z-крутки с шагом ок. 1,87 мм. </p>

      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/test.png">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <!-- Изображение после -->
        <a class="ssb__gallery-popup-link" href="images/test.png">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
      </div>

      <div class="before-after  ssb__before-after-slider">
        <!-- Изображение до -->
        <img src="images/before-after/before-after-thumb-1.jpg" />
        <!-- Изображение после -->
        <img src="images/before-after/before-after-thumb-1b.jpg" />
      </div>
			`,
      data: "bird",
    },
    {
      x: 1500,
      y: 2500,
      w: 250,
      h: 250,
      id: "2",
      link: "2",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Растение",
      description: `
      <div class="ssb__full-text">
        <p>Дублирует раздел про птиц, отличается только цветом точки.</p>
        <p>Очень много текста</p>
        <p>при клике выводится окно с 2 изображениями, на пк просто рядом стоящие изображения, на мобилке и планшете через до-после</p>
      </div>
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/fashion-1.jpg">
          <img src="images/fashion-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/fashion-1b.jpg">
          <img src="images/fashion-1b.jpg" />
        </a>
      </div>
      <div class="before-after  ssb__before-after-slider">
        <img src="images/fashion-1.jpg" />
        <img src="images/fashion-1b.jpg" />
      </div>
			`,
      data: "plants",
    },
    {
      x: 5500,
      y: 1500,
      w: 250,
      h: 250,
      id: "2",
      link: "2",
      image: "images/intro-venera.jpg",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Сюжет",
      description: `
      <div class="ssb__full-text">
        <p>Обычный шаблон. В поле image добавляется картинка, ниже идет заголовок и текст</p>
        <p>Очень много текста</p>
        <p>при клике выводится окно, где есть фото и описание (см. триумф надежды)</p>
      </div>
			`,
      data: "story",
    },
    {
      x: 1500,
      y: 1500,
      w: 250,
      h: 250,
      id: "3",
      link: "3",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Это просто точка, со всем содержимым",
      description: `
      <div class="ssb__full-text">
        <p>Сюда пишется весь текст</p>
        <p>Тут может быть картинка, секция до-после, галерея с попапами</p>
      </div>

      <div class="ssb__gallery">
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
      </div>
			`,
      data: "",
    },
    {
      x: 500,
      y: 500,
      w: 250,
      h: 250,
      id: "1",
      link: "1",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "История костюма",
      description: `
      <a class="ssb__gallery-popup-link" href="images/fashion-thumb-1.jpg"><img src="images/fashion-thumb-1.jpg"></a>
      <div class="ssb__full-text">
        <p>В произведениях живописи и графики</p>
      </div>
      <div class="ssb__gallery">
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
      </div>
			`,
      data: "fashion",
    },
  ];

  return me;
})(map || {});
