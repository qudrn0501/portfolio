const modal = {

  init: function () {
    this.modtab();
  },
  modtab: function () {
    let openBtn1 = $(".pjt1_open");
    let openBtn2 = $(".pjt2_open");
    let closeBtn1 = $(".pjt1_close");
    let closeBtn2 = $(".pjt2_close");

    // 열기 버튼 클릭
    $(openBtn1).click(function () {
      $(".pjt_mockup").addClass("on");
    });
    $(openBtn2).click(function () {
      $(".pjt_mockup").addClass("on");
    });
    // 닫기 버튼 클릭
    $(closeBtn1).click(function () {
      $(".pjt_mockup").removeClass("on");
    });
    $(closeBtn2).click(function () {
      $(".pjt_mockup").removeClass("on");
    });
  }
}

$(document).ready(function () {
  modal.init();
})