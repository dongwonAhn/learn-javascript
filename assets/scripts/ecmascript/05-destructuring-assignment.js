// --------------------------------------------------------------------------
// destructuring assignment
// - 구조 분해 할당 구문을 사용해 배열의 개별 항목 분해 및 할당
// - 구조 분해 할당 구문을 사용해 객체의 개별 항목 분해 및 할당
// - 콜백 함수의 매개변수를 구조 분해 할당하여 활용
// --------------------------------------------------------------------------

const courses = [
  {
    id: 1,
    title: 'HTML 펀더멘탈',
    url: 'https://fundamentals.dev/html',
  },
  {
    id: 2,
    title: 'CSS 펀더멘탈',
    url: 'https://fundamentals.dev/css',
  },
  {
    id: 3,
    title: 'JavaScript 펀더멘탈',
    url: 'https://fundamentals.dev/javascript',
  },
];

function spreadArray() {
  {
    const htmlCourse = courses[0];
    const webCourses = courses.slice(1);

    console.log(htmlCourse);
    console.log(webCourses);
  }

  // 🔶 구조 분해 할당 구문을 사용해 courses 배열에서 항목을 분해 및 할당합니다.
  // 참고: https://mzl.la/3Jfrwpm

  // console.log({ course: htmlCourse });
  // console.log({ rest: webCourses });
}

function spreadObject() {
  const [htmlCourse] = courses;

  {
    let htmlCourseId = htmlCourse.id;
    let htmlCourseTitle = htmlCourse.title;
    let htmlCourseUrl = htmlCourse.url;

    console.log(htmlCourseId);
    console.log(htmlCourseTitle);
    console.log(htmlCourseUrl);
  }

  // 🔶 구조 분해 할당 구문을 사용해 htmlCourse 객체에서 항목을 분해 및 할당합니다.
  // 참고: https://mzl.la/3Jfrwpm

  // console.log({ courseId });
  // console.log({ courseTitle });
  // console.log({ courseUrl });
}

function spreadRender() {
  const koreanFoods = {
    caption: '한식 메뉴',
    rows: [
      { headline: '뚝배기 불고기', content: 8000 },
      { headline: '스팸치즈볶음밥', content: 7500 },
      { headline: '불고기낙지덮밥', content: 9000 },
    ],
  };

  const rendredResult = renderTable(koreanFoods);
  console.log(rendredResult);

  function renderTable(data) {
    return removeSpaceHTMLString(/* html */ `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows.reduce(function (htmlString, item) {
          // 🔶 구조 분해 할당 구문을 사용해 item 객체에서 항목을 분해 및 할당합니다.
          // 참고: https://mzl.la/3Jfrwpm

          return (
            htmlString +
            /* html */ `
              <tr>
                <th>${item.headline}</th>
                <td>${numberWithComma(item.content)}원</td>
              </tr>
            `
          );
        }, '')}
      </table>
    `);
  }
}

function numberWithComma(numberValue) {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : '';
  });
}

function run() {
  spreadArray();
  spreadObject();
  spreadRender();
}

run();
