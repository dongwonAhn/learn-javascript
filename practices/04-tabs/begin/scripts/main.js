
// chat gpt
;(() => {
  document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab__content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetTheme = button.dataset.theme;

      // 1. 모든 탭 버튼에서 is-selected 제거
      tabButtons.forEach((btn) => btn.classList.remove('is-selected'));

      // 2. 클릭한 탭 버튼에 is-selected 추가
      button.classList.add('is-selected');

      // 3. 모든 콘텐츠에서 is-selected 제거
      tabContents.forEach((content) => content.classList.remove('is-selected'));

      // 4. 클릭한 탭 버튼의 data-theme와 일치하는 콘텐츠에 is-selected 추가
      const targetContent = document.querySelector(`.tab__content[data-theme="${targetTheme}"]`);
      if (targetContent) {
        targetContent.classList.add('is-selected');
      }
    });
  });
});
})()