document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq__item");

  items.forEach((item) => {
    const btn = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");
    const icon = item.querySelector(".faq__icon svg");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // 모든 항목 닫기
      items.forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".faq__answer").style.display = "none";
        el.querySelector(".faq__icon svg").style.transform = "rotate(0deg)";
      });

      // 클릭한 항목만 열기
      if (!isOpen) {
        item.classList.add("is-open");
        answer.style.display = "block";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
