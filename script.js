setInterval(() => {
  var date = new Date();
  var localTime = date.getTime();
  var localOffset = date.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var offset = 12;
  var nzTime = utc + 3600000 * offset;
  var convertedDateTime = new Date(nzTime);
  var hour = (convertedDateTime.getTime() / (60 * 60 * 1000) + offset) % 24;
  var day =
    ((convertedDateTime.getTime() / (24 * 60 * 60 * 1000) + offset / 24) % 7) -
    4;
  var icon;

  if (
    hour < 7 ||
    ((hour > 19.5 || hour < 7) && (day > 0 || day < 5 || day === 6))
  ) {
    icon = "far fa-moon-stars";
    $("#timeDesc").text("Probably Asleep.");
  } else if (hour > 8 && hour < 16 && (day > 0 || day < 5)) {
    icon = "far fa-graduation-cap";
    $("#timeDesc").text("At School.");
  } else {
    icon = "far fa-grin-stars";
    $("#timeDesc").text("Online.");
  }

  $("#localClock").html(
    `<i class="${icon}"></i> ${convertedDateTime.toLocaleString()}`
  );
}, 100);
