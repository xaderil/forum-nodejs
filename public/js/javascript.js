$("document").ready(function() {
  $("#btn1").on("click", function() {
    var per1, per2;
    per1 = jQuery("#input1").val();
    if (per1 == 28) {
      $("#st1").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ правильный").animate({
          opacity: 1.0,
          backgroundColor: "#23D140"
        })
      })
    } else {
      $("#st1").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ неправильный").animate({
          opacity: 1.0,
          backgroundColor: "#CC201E"
        })
      })
    }

  })
  $("#btn2").on("click", function() {
    var per1, per2;
    per1 = jQuery("#input2").val();
    if (per1 == 24) {
      $("#st2").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ правильный").animate({
          opacity: 1.0,
          backgroundColor: "#23D140"
        })
      })
    } else {
      $("#st2").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ неправильный").animate({
          opacity: 1.0,
          backgroundColor: "#CC201E"
        })
      })
    }

  })
  $("#btn3").on("click", function() {
    var per1, per2;
    per1 = jQuery("#input3").val();
    if (per1 == 6) {
      $("#st3").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ правильный").animate({
          opacity: 1.0,
          backgroundColor: "#23D140"
        })
      })
    } else {
      $("#st3").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ неправильный").animate({
          opacity: 1.0,
          backgroundColor: "#CC201E"
        })
      })
    }

  })
  $("#btn4").on("click", function() {
    var per1, per2;
    per1 = jQuery("#input4").val();
    if (per1 == 20) {
      $("#st4").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ правильный").animate({
          opacity: 1.0,
          backgroundColor: "#23D140"
        })
      })
    } else {
      $("#st4").animate({
        opacity: 0.0
      }, 0, function() {
        $(this).text("Ответ неправильный").animate({
          opacity: 1.0,
          backgroundColor: "#CC201E"
        })
      })
    }

  })


  $("#vp0").on("click", function() {
    $("#vp1, #vp2, #vp3, #vp4").animate({
      backgroundColor: "#D8E6F3"
    }, 150)
    $(this).animate({
      backgroundColor: "#19A6EB"
    }, 150)

    $("#conta").animate({
      opacity: 0.0
    }, 200, function() {
      $("#conta").text("Отсутствие правильных ответов говорит о полном непонимании материала. Настоятельно рекомендуется пройти квест заново.").animate({opacity:1.0}, 200)
    })
  })
  $("#vp1").on("click", function() {
    $("#vp0, #vp2, #vp3, #vp4").animate({
      backgroundColor: "#D8E6F3"
    }, 150)
    $(this).animate({
      backgroundColor: "#19A6EB"
    }, 150)

    $("#conta").animate({
      opacity: 0.0
    }, 200, function() {
      $("#conta").text("Задание №3 является представителем простейших заданий из ЕГЭ по информатике, поэтому 3 неправильных ответа могут говорить недостаточном понимании материала. Рекомендуется пройти тест заново.").animate({opacity:1.0}, 200)
    })
  })
  $("#vp2").on("click", function() {
    $("#vp1, #vp0, #vp3, #vp4").animate({
      backgroundColor: "#D8E6F3"
    }, 150)
    $(this).animate({
      backgroundColor: "#19A6EB"
    }, 150)

    $("#conta").animate({
      opacity: 0.0
    }, 200, function() {
      $("#conta").text("2 неправильных ответа из 4 могут говорить о недостаточном знании материала для успешной сдачи ЕГЭ по информатике. Рекомендуется пройти квест заново.").animate({opacity:1.0}, 200)
    })
  })
  $("#vp3").on("click", function() {
    $("#vp1, #vp2, #vp0, #vp4").animate({
      backgroundColor: "#D8E6F3"
    }, 150)
    $(this).animate({
      backgroundColor: "#19A6EB"
    }, 150)

    $("#conta").animate({
      opacity: 0.0
    }, 200, function() {
      $("#conta").text("1 неправильный ответ из 4 говорит об усвоении материала учащимся и допущении ошибки из-за невнимательности.").animate({opacity:1.0}, 200)
    })
  })
  $("#vp4").on("click", function() {
    $("#vp1, #vp1, #vp2, #vp3, #vp0").animate({
      backgroundColor: "#D8E6F3"
    }, 150)
    $(this).animate({
      backgroundColor: "#19A6EB"
    }, 150)

    $("#conta").animate({
      opacity: 0.0
    }, 200, function() {
      $("#conta").text("Отсутствие ошибок говорит о полном усвоении материала и проявлении внимательности при решении заданий. Повторное прохождение квеста не обязательно.").animate({opacity:1.0}, 200)
    })
  })
})
