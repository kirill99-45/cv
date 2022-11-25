export const LeftSide = {
  name : 'Кирилл Рогов',
  position : 'Frontend Developer',
  photo : `https://sun9-77.userapi.com/impg/-tnWD1FWTlCKXtAYBVDGFu-AV9YjhCUPOlYeKQ/ZpvKZ2fHeFU.jpg?size=625x854&quality=96&sign=55d170c4adda9a770215f624add7b89c&type=album0`,
  skills :
  {
    hardSkills :
    [
      'HTML', 'CSS', 'SCSS', 'JS', 'TS', 'REACT', 'JEST', 'REDUX', 
    ],
    languages :
    [
      'ENGLISH - B1'
    ],
    softSkills :
    [
      'Командная работа', 'Креативность', 'Пунктуальность', 'Менеджмент', 'Ответственность'
    ],
  },
  contacts :
  [
    {
      link : 'tel:+89039126358',
      title : '8-903-912-63-58',
      icon : 'phone',
      type : 'phone',
    },
    {
      link : 'https://t.me/kirill99_45',
      title : 't.me/kirill99_45',
      icon : 'telegram',
      target : '_blank'
    },
    {
      link : 'https://github.com/kirill99-45',
      title : '@kirill99-45',
      icon : 'github',
      target : '_blank'
    },
    {
      link : 'mailto:kirill99_45@mail.ru',
      title : 'kirill99_45@mail.ru',
      icon : 'envelope',
      type : 'mail',
    },
  ]
}

export const RightSide = {
  about :
  `Если говорить в общих чертах, то я командный игрок с острым чувством личной ответственности.
  Имею предпринимательский (более 3х лет), инвестиционный (2 года) и управленческий (1 год) опыт. На
  последнем месте работы управлял инвестиционными проектами, участвовал в разработке новых практик.`,
  jobs :
  [
    {
      years : ['н.м.', '2022'],
      yearsTitle : '6 мес.',
      position : 'РАЗРАБОТКА',
      company : 'Freelance',
      activity :
      [
        {
          title : 'Разработка простых одностроничных сайтов',
          description : 'Реклама мужских наручных часов и концерта от студии танцев',
        },
        {
          title : 'Приложение для налоговых консультаций',
          description : `В команде из 2 человек разрабатывали приложение, которое должно было помогать риэлторам консультировать
          продавцов недвижимости о возникающих (или нет) у них налогах и возможностях их оптимизации`,
        }
      ],
    },
    {
      years : ['2022', '2021'],
      yearsTitle : '10 мес.',
      position : 'АГЕНТ ПО НЕДВИЖИМОСТИ',
      company : 'AН "ПроДом"',
      activity :
      [`Работа с инвесторами`, `Ведение собственных проектов`, `Разработка новых практик`, `Налоговые консультации`],
    },
    {
      years : ['2021', '2020'],
      yearsTitle : '7 мес.',
      position : 'ПОМОЩНИК ЮРИСТА',
      company : 'AБ "Sollars"',
      activity :
      [`Документооборот`, `Составление договоров, претензий`, `Участие в судебных заседаниях`],
    },
  ],
  education :
  [
    {
      years : ['2017', '2021'],
      yearsTitle : '4 г.',
      university : 'НГУ',
      activity : 'Юрист в сфере частного права'
    },
    {
      years : ['2021', '2022'],
      yearsTitle : '10 мес.',
      university : 'САМООБРАЗОВАНИЕ',
      activity : 'Frontend science'
    },
  ],
  homeProject :
  {
    description : `Основным проектом, над которым я работал последние 6 месяцев является приложение о фильмах,
    в котором я изучал новое и дотачивал ранее изученное. В нём подключены сторонние библиотеки (react-router-dom, axios,
      font-awesome), есть работа с внешними API (вывод данных о погоде, курсе валют) и элементами со сторонних ресурсов (iframe).
      Реализованы собственные валидации вводимых пользователем данных и обработка выводимых данных на экран. Адаптивная верстка
      под все размеры экранов. Подробнее ниже :)`,
    slider :
    [
      {
        id : 0,
        mainSliderSrc : 'https://avatars.mds.yandex.net/i?id=997bcedb93f60b7c98295c78daa0d16a-5042325-images-thumbs&n=13',
        title : 'Работа с внешними API',
        description :
        [
          {
            title : 'WEATHER API',
            body : `Данные о погоде отображаются в шапке приложения и указывают на текущую температуру. Присутствует поле для ввода
            необходимого пользователю города.  С точки зрения кода, поиск города проходит в 2 основных этапа: 1)  уточнение координат
            искомого города (lat, lot) 2) поиск данных на основе координат и их вывод`,
          },
          {
            title : 'Currency API',
            body : `Данные о курсе валют – на данный момент зафиксировано отображение только доллара по отношению к рублю, есть возможность также ввести альтернативный
            выбор для пользователя. С точки зрения дополнительного функционала, была идея сделать изменчивым фон для отображения курса (красный или зеленый).
            Суть была в том, чтобы хранить данные в LocalStorage и через определенный интервал времени сравнивать текущие и предыдущие значения. В зависимости
            от результата менять цвет подцветки. Но, так как Local Storage формируется при первичном обращении к приложению, то большинство этого даже не заметит,
            т.к. сравнивать будет не с чем.`,
          },
          {
            title : 'JSONplaceholder',
            body : `Данные с JSON были одной из первых страниц в приложении, на которой я тренировался вывод данных с реального сервера. Сделана автоматическая загрузка контента при скролле`,
          }
        ],
        slidesContainer :
        [
          {
            id: 1,
            title : 'WEATHER API',
            src : `https://sun9-15.userapi.com/impg/_sp6y9oHx_1uEYM5jfX-eSwAooGS9ZhmDN8IhA/vVLrknfsLrQ.jpg?size=857x372&quality=96&sign=48ae26e2ef3ef17214f4fc6c9bd0dfb4&type=album`,
          },
          {
            id: 2,
            title : 'Currency',
            src : `https://sun9-22.userapi.com/impg/_gUQyeoU-v7VgvBwGb2T4C3Fd-VPhN0VjGaNmQ/Olw6NmC2X4g.jpg?size=518x139&quality=96&sign=8d27c3c055502cfa819ccc771bde5ff5&type=album`,
          },
        ]
      },
      {
        id : 1,
        mainSliderSrc : 'https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Websites/responsive-design-c.jpg',
        title : 'Адаптивная верстка',
        description :
        [
          {
            title : 'Страница записей для мобильных устройств',
            body : `В ходе разработки учтена возможность использования пользователем устройств различных размеров, от 1200 до 280 пикселей в ширину.
            В результате чего расположение и стилизация элементов адаптируется под каждый размер, что сохраняет визуальную целостность приложения.`,
          }
        ],
        slidesContainer :
        [
          {
            id: 4,
            title : 'Страница записей для мобильных устройств',
            src : `https://sun9-86.userapi.com/impg/15o2khXSBWY-pKNSUG4jA9OJSCGQ9ELCa_JCfQ/0-5VVgCZPHg.jpg?size=356x539&quality=96&sign=b95a88c3a517e164d90a081f2dbfae61&type=album`,
          },
          {
            id: 5,
            title : 'Страница записей для мобильных устройств',
            src : `https://sun9-79.userapi.com/impg/A7DqIOPPZvFqDLyhoCe26Z_MX6wcrArC2wb7OQ/WM3LH5eLtcU.jpg?size=275x541&quality=96&sign=bbb3794b4179d3272a9e61ef0f3cfd3b&type=album`,
          },
          {
            id: 6,
            title : 'Страница пользователя для компьютеров',
            src : `https://sun9-59.userapi.com/impg/43D96EfnXLVqwQkdDHCL0mkQA5_Lg-aJJ_Ymrw/yJ6eLloPjiM.jpg?size=278x524&quality=96&sign=a26c0d7a466708e914fb4da1e4272f61&type=album`,
          },
          {
            id: 7,
            title : 'Страница всех пользователей для мобильных устройств',
            src : `https://sun9-8.userapi.com/impg/bUS2j-c75-5T-82-GlfPdgKa6YzceHjp4ZR9kQ/1rfQo3yQXUA.jpg?size=278x511&quality=96&sign=369b57ba90df0db4bc1eafecff0b9906&type=album`,
          },
          {
            id: 8,
            title : 'Страница пользователя для мобильных устройств',
            src : `https://sun9-59.userapi.com/impg/43D96EfnXLVqwQkdDHCL0mkQA5_Lg-aJJ_Ymrw/yJ6eLloPjiM.jpg?size=278x524&quality=96&sign=a26c0d7a466708e914fb4da1e4272f61&type=album`,
          },
          {
            id: 9,
            title : 'Страница фильма для компьютеров',
            src : `https://sun9-80.userapi.com/impg/b_QVxWyeGKIxSaDtycug06WD2Ye96CQlSdWQTg/kr2mgkDt6F4.jpg?size=1280x725&quality=96&sign=c0f3aacd5a6a2d78b42deded4dcabee7&type=album`,
          },
          {
            id: 10,
            title : 'Страница фильма для мобильных устройств',
            src : `https://sun9-48.userapi.com/impg/7o1D3yt6JdFfKGHNs4CTwbBotfl31LxrYQjclw/NJrD4rdg1Nc.jpg?size=306x522&quality=96&sign=7f01bcc73cd070cc1f3f646f07512c9b&type=album`,
          },
        ],
       },
      {
        id : 2,
        mainSliderSrc : 'https://www.businessprocessincubator.com/wp-content/uploads/thumbnails/thumbnail-164503.jpg',
        title : 'Функционал приложения',
        result : [],
        description :
        [
          {
            title : 'I. Фильтрация данных',
            body : `В приложении есть два основных фильтра: 1) отображение фильмов в зависимости от даты выхода, продолжительности и оценок пользователей; 2) отображение
            пользователей – если неавторизоваться, то данный функционал будет недоступен, в противном случае, во вкладке «Пользователи», можно выбрать один из
            3 вариантов отображение пользователей: • Все • Мои подписчики • Я подписан В зависимости от выбранного варианта будут отображаться те или иные пользователи`,
          },
          {
            title : 'II. Живой поиск',
            body : `Во вкладках «Фильмы», «Пользователи» и «Записи» присутствует живой поиск, который не только сортирует массив на наличие искомых слов,
            но и подсвечивает их в результате поиска.`,
          },
          {
            title : 'III. Слайдеры',
            body : `В приложении есть два основных слайдера – на странице фильма и пользователя.

            Разница между ними состоит в том, что в первом присутствует мини-слайдер, который находится ниже основного, отображая все имеющиеся слайды, в том числе выделяя
            основной слайд, который выведен на большом слайде. Есть возможность управлять слайдами как с помощью большого слайда (стрелки по бокам), так и мини-слайдера – клики на нужных слайдах.

            Второй слайдер отличается тем, что он отображает не только нужный слайд, но и дополнительную информацию, связанную с данным слайдом – комментарии, дата создания,
            номер слайда, пользователя, чей это слайд, количество лайков. Также присутствует возможность оставлять комментарии к данному слайду. Есть валидация на наличие/отсутствие комментариев.`,
          },
          {
            title : 'IV. Роутинг',
            body : `Подключена библиотека «React-router-dom», с помощью которой реализованы переходы между компонентами`,
          },
          {
            title : 'V. Валидация',
            body : `Присутствую различные проверки заполнения полей ввода. Например, при создании новой записи проверка длинны заголовка (не менее 10 символов) и длинны основного
            текста (не менее 100 символов). В случае, если условие не выполнено, выводится сообщение об ошибке с описанием, также подсвечивается неправильно заполненная форма.`,
          },
          {
            title : 'VI. Обработка данных',
            body : `Есть элементы разметки, отображение которых зависит от получаемых данных. Например, на странице пользователя присутствуют надписи о количестве подписчиков, подписок и фотографий. В зависимости от указанной цифры
            приложение отображает нужное окончание (18 фотографиЙ, 1 фотографиЯ). На главной странице фильмов у каждого элемента присутствует блок с датой его выпуска, цвет
            которого зависит от того, насколько давно от текущего года вышел фильм. И т.д.`,
          },
          {
            title : 'VII. Рендеринг',
            body : `При первой загрузке компонента до его полной загрузки происходит закрашивание имеющихся картинок`,
          },
          {
            title : 'VII. Подключение сторонних элементов',
            body : `Youtube проигрыватель на странице фильма`,
          }
        ],
        slidesContainer :
        [
          {
            id: 12,
            title : 'Фильтрация данных',
            src : `https://sun9-11.userapi.com/impg/5rSDbX6NxQ7hPCj1mx2cb6KJ1j67z3MOpPgVhA/nM8YScj5f3k.jpg?size=1280x573&quality=96&sign=4187b503aecb0b26523551cdf5c7ef85&type=album`,
          },
          {
            id: 13,
            title : 'Слайдер',
            src : `https://sun9-80.userapi.com/impg/3wwSgSsh7DRnfmkS1s5HNz8rfNyqJK5_XC4OAA/JohdlYD_X28.jpg?size=615x677&quality=96&sign=b8fef894dac92d31eb5dec49cea90278&type=album`,
          },
          {
            id: 14,
            title : 'Роутинг',
            src : `https://sun9-7.userapi.com/impg/Tyv2tbnh1jMlat-RUPSPdkrsdoMFJtUXtP_Sew/65sCP6mL9vc.jpg?size=1174x281&quality=96&sign=b132579c293d4c03dbf138022ec56dba&type=album`,
          },
          {
            id: 15,
            title : 'Живой поиск',
            src : `https://sun9-82.userapi.com/impg/BaClXwX_yAs7oFB7sOegiTLvEOKXS09612iREA/fEw3KP440EM.jpg?size=1216x379&quality=96&sign=f7e9718e95b28d75423fbe4c1f21e719&type=album`,
          },
          {
            id: 17,
            title : 'Обработка данных',
            src : `https://sun9-81.userapi.com/impg/0MdxgTXKj6OUePRqfS2kIOo7cs_Nld5-suxw4w/mePGTO7tpFU.jpg?size=722x308&quality=96&sign=6d5d87907bb58c229d064965a84aa13e&type=album`,
          },
          {
            id: 19,
            title : 'Подключение сторонних элементов',
            src : `https://sun9-31.userapi.com/impg/trMJLs7ghH9718kI4St3_RTChrmxngsS9WIckQ/Jq8h3oJcEWM.jpg?size=1175x398&quality=96&sign=aab4f12a946c590c4bb9cf2929961eed&type=album`,
          },
        ],
      },
    ],
  }
}
