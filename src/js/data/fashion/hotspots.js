var map = (function (me, undefined) {
  me.hotspots = [
    {
      x: 7186,
      y: 3000,
      w: 150,
      h: 150,
      id: "1",
      link: "#2",
      image: "",
      audio: "audio/01.mp3",
      checkResize: false,
      data: "fashion",
      category: "Мода",
      title: "Костюм",
      description: `
      <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
        <div class="ssb__full-text">
          <p>Аарон облачен в альбу — длиннополую тунику, аналог стихаря или подризника, и далматику синего цвета с рисунком, характерным для итальянских тканей XV–XVI веков.На голове надета митра — часть литургического облачения символизировала языки пламени, сошедшие на апостолов в день Пятидесятницы.</p>
          <div class="ssb__gallery">
            <a class="ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
              <img src="images/fashion/fashion-example-thumb.jpg" />
            </a>
            <a class="ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
              <img src="images/fashion/fashion-example-thumb.jpg" />
            </a>
            <a class="ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
              <img src="images/fashion/fashion-example-thumb.jpg" />
            </a>
            <a class="ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
              <img src="images/fashion/fashion-example-thumb.jpg" />
            </a>
            <a class="ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
              <img src="images/fashion/fashion-example-thumb.jpg" />
            </a>
          </div>
        </div>`,
    },
    // {
    //   x: 576,
    //   y: 2910,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/03.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Отроки одеты в одно из самых популярных одеяний Средневековья и Раннего Возрождения — роб. Эта длиннополая одежда отличалась от упелянда более простым кроем рукава.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 976,
    //   y: 710,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/02.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Костюм Аквилона состоит из предметов одежды как современных авторам шпалеры, так и отсылающих к далеким эпохам. «Современно» выглядят мягкие сапоги: такие часто можно увидеть в иконографии конца XV — XVI века. Просторная туника декорирована по краям, что характерно для времени Византийской империи и раннего Средневековья. Отделка краев одежд носила обереговый смысл. Развевающийся шарф, которым перехвачен рукав, подчеркивает фантазийность костюма и передает динамику полета.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 2870,
    //   y: 810,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/05.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Одеяние Борея отчасти напоминает одежды Древней Греции, Византийской империи, раннего Средневековья. Нижняя туника из зеленой ткани имеет черты, характерные для рубах начала XVI века: объемные рукава присобраны снизу на манжеты. Верхняя просторная туника сшита из красной материи и декорирована по краям. Типичные для Древнего мира короткие рукава носят фантазийный характер за счет фестонов и вышитых перехватов. Подобная отделка рукавов присутствует в костюме Византийской империи и эпохи раннего Средневековья, но всегда на ровной ткани, без сборок. Туника Борея подпоясана, имеет напуск по талии, что также характерно для одеяний Древнего мира, Византийской империи и раннего Средневековья. На ногах Борея надеты сандалии: эта обувь была самой распространенной у древних греков и римлян. Несколько воинственный вид придает стилизованный элемент военного костюма — поножи.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 3810,
    //   y: 810,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/06.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>На Вольтурне надета объемная туника, напоминающая одежды Древней Греции и раннего Средневековья за исключением огромных летящих рукавов. Края щедро покрыты вышивкой, служащей оберегом. Туника подпоясана шарфом, развевающиеся концы которого создают ощущение полета.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 6286,
    //   y: 3800,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/07.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Гедеон изображен в стилизованном парадном доспехе, имеющем черты доспехов воинов Древней Греции, Древнего Рима, а также времени создания шпалеры. Он состоит из наручей, поножей и кирасы, из-под которой виден мягкий кольчужный воротник. Кираса состояла из двух частей, передней и задней, скрепленных по бокам специальными застежками или ремнями с пряжками. На левом боку виднеется меч Господа и Гедеона (Суд. 7: 20). Из-под кирасы видна котт — парадная рубашка, подол которой украшен вышивкой для оберега. Интересны шоссы: их подошва выполнена из более плотной кожи, кроме того, она симметрична — нет различия между ногами. Такой крой был характерен не только для времени создания шпалеры, но и позднее. Короткий кап, плащ в форме полукруга, застегнутый спереди ювелирной застежкой из драгоценных металла и камней — аграфом, подчеркивает молодость Гедеона. Цвет плаща, богатая вышивка на одеянии и насыщенный декор доспеха говорят о богатстве владельца.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 5286,
    //   y: 4000,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/08.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Голову Давида венчает корона. Подобные короны в виде обруча, увенчанные зубцами с растительными мотивами, можно увидеть на миниатюрах из книг, скульптурах и витражах XV столетия. На герое надет кап — плащ в форме полукруга, синий цвет которого напоминает, что перед нами монарх. Из-под капа видны части доспеха: наручи, поножи, кольчуга или воротник кирасы, под которую надевали стеганый поддоспешник и котт. Края рубах обязательно украшались вышивкой для оберега.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 6686,
    //   y: 4800,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/09.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Детали одеяния Даниила типичны для костюма аристократии конца XV — начала XVI века: высокий воротник-стойка, трубчатые складки, объемные рукава. Декор по краям одежд с незапамятных времен выполнял не только эстетическую, но и обереговую функцию.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 1700,
    //   y: 3100,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/10.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>В начале XVI века для платья в аристократическом костюме был типичен утянутый лиф, очень широкие рукава с контрастным подбоем, декор вышивкой по краям. Спереди лиф имел шнуровку, иногда скрытую. Характерна и форма декольте в виде каре. Грудь закрыта рубашкой шмиз. Рубашку щедро украшали вышивкой между полотнищами ткани и по горловине, где художник, создававший картон для шпалеры, разместил имя обладательницы. Под широкими рукавами платья видны другие — узкие рукава. Для эпохи Возрождения было характерно иметь к одному платью несколько пар разных рукавов. Такие, как на изображении, могли быть пришнурованы к платью или корсажу, который одевался под платье, — его основная задача была сформировать модный силуэт.</p>
    //       <p>Обязательным предметом женского костюма был головной убор. Один из его видов — френч худ («французский капюшон») был популярен во всей Европе. Во Франции он назывался «шаперон». Это сложный многослойный головной убор, отличительной особенностью которого является капюшон, в который прятали длинные волосы.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 1000,
    //   y: 4700,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/12.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p> Манассия — царь Иудейский, сын благочестивого царя Езекии, виновный в <p>Голову Манассии венчает корона — символ власти. Короны и венцы выполнялись из золота, украшались жемчугом и драгоценными камнями, каждый из которых имел свою символику. Подобные короны можно увидеть в книжных миниатюрах, скульптурах, витражах XV столетия.</p>
    //       <p>Упелянд Манассии богато украшен тесьмой. Объемные складки спереди и сзади в XV столетии были любимой деталью костюма. Большая горловина в форме каре, обнажающая рубашку шмиз, изображена согласно моде конца XV — начала XVI века. Синий цвет с XII столетия стал необыкновенно популярен и закрепился в дальнейшем как королевский. Сантюр украшен бляшками с включением драгоценных камней: они могли крепиться на кожаную основу или представлять собой отдельные звенья, соединенные друг с другом. На ногах царя надеты шоссы. У знатных людей шоссы выполнялись из кожи, замши, тонкого сукна и имели шов сзади.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 1700,
    //   y: 3700,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/13.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Мардохей одет в упелянд. Эта одежда отличалась просторностью, богатая ткань красиво показывала свои достоинства в мягких складках. Статус владельца подчеркивает мех рыси, которым подбит упелянд. В Средневековье, эпоху Возрождения и в последующие века мех рыси считался одним из роскошных и постоянно присутствовал в гардеробе аристократии. Небольшой воротник и полы декорированы, по всей видимости, объемной вышивкой золотной нитью. Под упеляндом видна шмиз, а под просторными рукавами — рукава пурпуэна.</p>
    //       <p>Одежду обязательно опоясывали сантюром. Помимо утилитарной функции пояс выполнял функции оберега и защиты от болезней и сил зла. Поэтому его нередко делали красного цвета. На сантюре Мардохея подвешен омоньер — так назывались сумочка, кошель или мешочек для раздачи милостыни. Подобные омоньеры можно часто видеть на изображениях мужчин и женщин начиная с XIII века. Поскольку одежда не имела карманов (они появились только в конце XVI столетия), сумочка была необходимым предметом для хранения мелочей и денег. Омоньеры шились из дорогих тканей, богато декорировались вышивкой, были плоскими и служили маркером аристократии, знаком милосердия.</p>
    //       <p>На голове Мардохея надет головной убор, похожий на куколь — капюшон, известный еще в Древнем Риме. В эпоху Средневековья он стал принадлежностью костюма монахов католической и православных церквей.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 6700,
    //   y: 2700,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/14.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>На Моисее надет упелянд. По объемному воротнику можно догадаться, что это распашная одежда, которая декорирована и спереди, вдоль пол. Красный цвет воспринимался как цвет монархов, символизировал власть, победу, ассоциировался с праведной кровью, пролитой христианскими мучениками. Считалось, что этот цвет надежно защищает от злых духов и болезней. К поясу Моисея подвешен омоньер — характерный предмет в костюме знати. Омоньеры шились из дорогих тканей, богато декорировались объемной вышивкой золотными нитями, драгоценными камнями в кастах, жемчугом и т. д.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 2400,
    //   y: 1900,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/15.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Платье Надежды сшито из ткани зеленого цвета, который в эпоху Возрождения указывал на целомудрие, любовь и радость. Широкие рукава, подол и, скорее всего, горловина украшены вышивкой золотной нитью. Из-под верхних рукавов видны узкие красные, по всей видимости, пришнурованные к корсажу. Для костюма Ренессанса был характерен незашитый локтевой шов, его соединяли контрастной шнуровкой, часто черного цвета, которая подчеркивала белизну рубашки шмиз. В талии платье перехвачено скромным сантюром.</p\n>" +
    //       "<p>Сложносочиненный и богато украшенный головной убор почти полностью закрывает волосы, подобный часто можно встретить в иконографии. Однако обрамление его края далеко от бытовых форм и напоминает диадему — символ избранности.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 3500,
    //   y: 4800,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/16.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `
    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Волосы Сусанны видны частично, на затылке они убраны в богатую сетку, которую поддерживает обод из золотых медальонов. Такой вид прически был широко распространен в эпоху Возрождения. Сетки плели из золотных и шелковых нитей, расшивали жемчугом, драгоценными камнями в кастах. Платье героини по сравнению с другими изображенными женщинами на первый взгляд очень простое, но скромная вышивка, обрамляющая края, богатство складок, контрастный подбой королевского цвета и, наконец, шлейф подчеркивают его аристократичность. Для эпохи Возрождения было характерно изготавливать рукава из ткани другого цвета и фактуры. Рукава могли пришнуровывать и использовать для разных платьев. Интересно, что они перехвачены веревками, а не вышитой тесьмой или ювелирными украшениями. Этот нюанс указывает на судьбу персонажа. Большое декольте в форме каре закрыто рубашкой шмиз. Рубашки собирались по горловине в несколько рядов стежками. Таким образом у шеи образовывалось подобие воротника с орнаментом.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 2900,
    //   y: 4200,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/18.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Статус Эсфири обозначают корона, мантия, богатство платья и украшений. Подобные короны можно увидеть на изображениях французских королев XV века. Одеяние Эсфири выполнено из шелка синего королевского цвета и богато украшено вышивкой. Королевские мантии подбивались горностаем со времен Средневековья: он обозначал мужество перед лицом опасности и являлся «символом персонифицированного осязания (одного из пяти чувств)». Как гласит легенда, один из герцогов Бретани — Ален Кривая Борода (Alain Barbetorte), преследуемый врагами, был вынужден остановиться у илистой и грязной реки. Он «заметил горностая, убегающего от скачущих лошадей и тоже остановленного рекой. У самой воды горностай резко развернулся, предпочитая смерть грязи. Оценив мужество зверька, Ален II крикнул своим соратникам: “Лучше смерть, чем позор!”, и воодушевленные бретонцы повернулись лицом к противнику».</p>
    //       <p>Королевская мантия удерживалась на плечах с помощью аграфа. Платье Эсфири типично для аристократического костюма конца XV — начала XVI века: имеет утянутый лиф, очень широкие рукава с контрастным подбоем, декор вышивкой по краям. Для плотного прилегания лиф имел шнуровку спереди, на спинке или по бокам, иногда скрытую. Рисунок ткани типичен для работ итальянских ткачей XV–XVI веков: на нем виден стилизованный плод артишока. Характерна и форма декольте в виде каре. Грудь закрыта рубашкой шмиз. Верхняя часть рубашки щедро декорировалась вышивкой и собиралась по горловине в несколько рядов стежками по счету. Таким образом у шеи образовывалось подобие воротника с орнаментом. Под широкими рукавами платья видны другие — узкие рукава. Для эпохи Возрождения было характерно иметь к одному платью несколько пар разных рукавов.</p>
    //       <p>Платье опоясано сантюром. У знати и королев он был особенно богат, это настоящее ювелирное украшение, звенья которого выполнены из золота, драгоценных камней, жемчуга.</p>
    //       <p>Корона надета поверх головного убора, бывшего обязательным элементом женского костюма. Для Ренессанса был характерен сложный многослойный головной убор в виде чепчика, частично обнажавший волосы.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 2300,
    //   y: 3500,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/19.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>Платье Юдифи имеет признаки аристократического костюма XV века: утянутый лиф, объемную, ложащуюся мягкими складками юбку. Для плотного прилегания лиф имел шнуровку спереди, по бокам, на спинке, иногда скрытую. Грудь закрыта рубашкой шмиз. Рубашки собирались по горловине в несколько рядов стежками: таким образом у шеи образовывалось подобие воротника с орнаментом, ставшее впоследствии воротником. Насколько рубашки были объемны, можно судить по рукавам, выпущенным пышными буфами из-под рукавов платья. Для эпохи Возрождения было характерно иметь к одному платью несколько пар разных рукавов, их зачастую делали из более богатых тканей, нежели само платье, например, как на изображении, из драгоценного золотного аксамита.</p>
    //       <p>Платье опоясано сантюром, спущенным ниже талии, что несколько архаично для времени создания шпалеры. У знати он был особенно богат, это настоящее ювелирное украшение, звенья которого выполнены из золота, драгоценных камней, жемчуга, а центр подчеркнут пряжкой.</p>
    //       <p>На Юдифи богатый головной убор — бальцо (такие носили замужние женщины). Подобный головной убор, выполненный из драгоценных тканей и богато декорированный вышивкой, часто встречается на итальянских портретах XV–XVI веков.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
    // {
    //   x: 6300,
    //   y: 1000,
    //   w: 150,
    //   h: 150,
    //   image: "",
    //   audio: "audio/04.mp3",
    //   checkResize: false,
    //   data: "fashion",
    //   category: "Мода",
    //   title: "Костюм",
    //   description: `

    //   <a class="ssb__gallery-popup-link  ssd__main-img" href="images/fashion/fashion-full-1.jpg"  data-caption="Описание для картинки во всплывающем окне"><img src="images/fashion/fashion-thumb-1.jpg"></a>
    //     <div class="ssb__full-text">
    //       <p>На голове Бога Отца надета корона. В отличие от других корон, изображенных на шпалере (на Давиде и Манассии), она более «современна»: имеет перекрестие, увенчанное крестом, что встречается на изображениях византийских императоров и европейских монархов начиная с X века. В дальнейшем этот тип символа власти закрепился и прошел через века. Короны и венцы выполнялись из золота, драгоценных камней, жемчуга.</p>
    //       <p>Поверх объемной белоснежной туники крестообразно лежит лорум (лат. lorum). Длинная узкая полоса из парчи — богатой ткани, сплошь покрытой драгоценной вышивкой, ведет свое происхождение из Древнего Рима. Лорум был частью облачения императора в Византии. </p>
    //       <p>На плечах Бога Отца развевается просторная мантия королевского синего цвета. Богатая золотная вышивка по краям также подчеркивает статус. Мантия скреплена драгоценным аграфом (фр. agrafe) — ювелирной застежкой из благородного металла, драгоценных камней, жемчуга.</p>
    //       <!-- Изображение до/после на пк и планшете -->
    //         <!-- Изображение до -->
    //         <a class="ssb__before-after  ssb__before-after--split-image  ssb__gallery-popup-link" href="images/fashion/fashion-full.jpg">
    //           <img src="images/fashion/fashion-example-thumb.jpg" />
    //         </a>

    //       <div class="before-after  ssb__before-after-slider">
    //         <!-- Изображение до -->
    //         <img src="images/fashion/fashion-example-1.jpg" />
    //         <!-- Изображение после -->
    //         <img src="images/fashion/fashion-example-1b.jpg" />
    //       </div>
    //     </div>`,
    // },
  ];

  return me;
})(map || {});
