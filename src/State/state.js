let rerenderEntireTree = () => {
  console.log('render');
}

const Store =
{
  state :
  {
    leftSide :
    {
      name : 'Кирилл Рогов',
      position : 'Frontend Developer',
      photo : `https://sun9-77.userapi.com/impg/-tnWD1FWTlCKXtAYBVDGFu-AV9YjhCUPOlYeKQ/ZpvKZ2fHeFU.jpg?size=625x854&quality=96&sign=55d170c4adda9a770215f624add7b89c&type=album0`,
      skills :
      {
        hardSkills :
        [
          'HTML', 'CSS', 'JS', 'REACT'
        ],
        softSkills :
        [
          'Командная работа', 'Креативность', 'Пунктуальность', 'Менеджмент', 'Ответственность'
        ],
      },
      contacts : ['8-903-912-63-58', 't.me/kirill99_45', '@kirill99-45', 'kirill99_45@mail.ru'],
    },
    rightSide :
    {
      about :
      `Если говорить в общих чертах, то я командный игрок с острым чувством личной ответственности.
       Имею предпринимательский, инвестиционный и управленческий опыт работы. На последней работе управлял инвест
       проектами – согласование бюджета с инвестором, контроль за ремонтом, а также организационные
       (согласование отключения воды/электричества, даты выхода на сделку, условия по сделке и т.д.) и юридические вопросы.`,
      jobs :
      [
        {
          years : ['2020', '2021'],
          yearsTitle : '7 мес.',
          position : 'ПОМОЩНИК ЮРИСТА',
          company : 'AБ "Sollars"',
          activity : `Документооборот, составление договоров, претензий, участие в судебных заседаниях`,
        },
        {
          years : ['2021', '2022'],
          yearsTitle : '10 мес.',
          position : 'АГЕНТ ПО НЕДВИЖИМОСТИ',
          company : 'AН "ПроДом"',
          activity : `Работа с инвесторами, ведение собственных проектов, разроботка новых практик, налоговые консультации`,
        }
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
          yearsTitle : '8 мес.',
          university : 'САМООБРАЗОВАНИЕ',
          activity : 'Frontend science'
        },
      ],
      homeProject :
      {
        description : `Основным проектом, над которым я работал последние 4 месяца является SPA, в котором я
        изучал новое и дотачивал ранее изученное. В данном приложении подключены сторонние библиотеки
        (react-router-dom, axios), есть работа с внешними API (вывод данных о погоде, курсе валют) и
        элементами (iframe). Реализована собственная валидация вводимых пользователем данных и обработка
        выводимых данных на экран. Адаптивная верстка, написанная на flex’ах. Подробнее ниже :)`,
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
                body : `Данные с JSON были одной из первых страниц в приложении, на которой я тренировался вывод данных с реального сервера. Сделана пагинация.`,
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
              {
                id: 3,
                title : 'JSONplaceholder',
                src : `https://sun9-19.userapi.com/impg/XfKJegfXHTyBX7SnoJ09wzT7r3_Hx901cQs8wA/_udqegwCQoI.jpg?size=947x211&quality=96&sign=b7703282af6d3f3c8287558185eab9cf&type=album`,
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
                src : `https://sun1-90.userapi.com/impg/6jKv46W7uTlgfM_-EBXQYkRnCrdN-jGmtV_Dbg/IouEN5jd47A.jpg?size=460x532&quality=96&sign=2032f937b4016b68fb9c078a410cc48a&type=album`,
              },
              {
                id: 5,
                title : 'Страница пользователя для компьютеров',
                src : `https://sun9-57.userapi.com/impg/tY414-auciOyGavXAVC6kUQ4zUaFW8yPej5pZg/_VolemqJJq8.jpg?size=457x546&quality=96&sign=a08e041c3cbc1307cc97f66202400c74&type=albu`,
              },
              {
                id: 6,
                title : 'Страница пользователя для компьютеров',
                src : `https://sun1-16.userapi.com/impg/KDb5llEX-ipsSC_ByhZyhvq9Y9jtQySc23Yohw/H13Zq_0BEGo.jpg?size=1280x685&quality=96&sign=4b424ab100e24af3e733b901cfb2babf&type=album`,
              },
              {
                id: 7,
                title : 'Страница всех пользователей для мобильных устройств',
                src : `https://sun9-8.userapi.com/impg/Q44002749dQhsBERRH06KGz2JYos6XmXFRWRng/gO579-ST8n8.jpg?size=456x530&quality=96&sign=1ba6292d811b0e2bec874f31035a4fef&type=album`,
              },
              {
                id: 8,
                title : 'Страница пользователя для мобильных устройств',
                src : `https://sun9-39.userapi.com/impg/1Vghdk86CpgfqvF1hPV7OGQYa3efZybLPT8wwA/AD0WH9UhIZc.jpg?size=460x536&quality=96&sign=67c9f212559edea480103980f70137a4&type=albu`,
              },
              {
                id: 9,
                title : 'Страница фильма для компьютеров',
                src : `https://sun9-35.userapi.com/impg/NFwJHSoWHxazX-NO9z8xQR8cRWRQ2_v1q6pojQ/eQbLvCpmsoA.jpg?size=1280x688&quality=96&sign=4e15af7d3231ff49ddb608c72ae1b2a0&type=album`,
              },
              {
                id: 10,
                title : 'Страница фильма для мобильных устройств',
                src : `https://sun1-98.userapi.com/impg/WCmgqWTf0hyNHsbGESSuYoA2pFqn1vvc4zkWMw/j7lEpQjumYk.jpg?size=456x553&quality=96&sign=6ac91e770bbb1f83f08e3d53ccc3fbd4&type=album`,
              },
              {
                id: 11,
                title : 'Страница фильма для мобильных устройств',
                src : `https://sun9-13.userapi.com/impg/4hSYeUB1XDmgRvN-ET5X-YTcBTPLkGj7YeACMg/5rjKp3unvK8.jpg?size=460x536&quality=96&sign=aa0cdeeea9080a900981615cc755f804&type=album`,
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
                src : `https://sun9-13.userapi.com/impg/xDCL8IbIxPWBzt_ubqryI844rlpMxcMUVx6d9A/M7SgQRV3Zbk.jpg?size=1280x504&quality=96&sign=122030775f97da7cb85f9c426f42608e&type=album`,
              },
              {
                id: 13,
                title : 'Слайдер',
                src : `https://sun9-84.userapi.com/impg/GUur3LxUzY5AsrrAwFLqwiegCwanOIzSqj_U0Q/hHNhvTFEcwk.jpg?size=593x618&quality=96&sign=1a624b4a370671415463c423eb5abe96&type=album`,
              },
              {
                id: 14,
                title : 'Роутинг',
                src : `https://sun1-85.userapi.com/impg/Twst0K5WruAdar4-pYG35wbdoyMQKsb66c1FeQ/Nr5Pur1uVnk.jpg?size=935x479&quality=96&sign=f3825b4a7322ad325a2d9d86d936a883&type=album`,
              },
              {
                id: 15,
                title : 'Живой поиск',
                src : `https://sun9-46.userapi.com/impg/O4918rCmXqMOddzmzoNQIVJYbqR0JqTH7UOEIw/EL04MYTCgKo.jpg?size=1280x477&quality=96&sign=aa1abf8268d7df316efd3e8e350a7469&type=album`,
              },
              {
                id: 16,
                title : 'Валидация',
                src : `https://sun9-14.userapi.com/impg/I01RD7pfVRoFvTT5dCOTa-vy4ipyVYvzPSYtqg/JATxAKZYU7I.jpg?size=961x413&quality=96&sign=31e9338afcb08ff82aebfde01fa74977&type=album`,
              },
              {
                id: 17,
                title : 'Обработка данных',
                src : `https://sun1-90.userapi.com/impg/II-uBycp6MUYets2LYavIG85DiMspKL-cJCJ2A/5pDC-qh9pek.jpg?size=829x537&quality=96&sign=dbfbd4dfb02d0d01c3e30b5477585bf8&type=album`,
              },
              {
                id: 18,
                title : 'Рендеринг',
                src : `https://sun9-69.userapi.com/impg/SMF3phH9h8NCuuS953ONNTDA1XKZFmRqgw6vaw/kgVtk_-M5Ms.jpg?size=753x612&quality=96&sign=815485b7ef48fa87c16cb1f01199be2b&type=album`,
              },
              {
                id: 19,
                title : 'Подключение сторонних элементов',
                src : `https://sun9-52.userapi.com/impg/AwY6hYcsVonGY0E139JSvx1Y0dCC3ODRzefLCg/QMnvM64WFFM.jpg?size=595x278&quality=96&sign=ae38757eec7fda9690791c764ef79f01&type=album`,
              },
            ],
          },
        ],
      }
    }
  },

  subcribe(observer) {
    rerenderEntireTree = observer;
  },
}

export default Store;
