$(document).ready(function () {
  const sidebar = $(".sidebar");
  const sidebarToggle = "#sidebar-toggle";
  sidebar.load("../layout/sidebar.html");

  // toggle sidebar mobile
  $(document).on("click", sidebarToggle, function () {
    sidebar.addClass("active");
  });

  // remove sidebar
  const sb = $(sidebarToggle);

  $(document).on("click", function (e) {
    e.preventDefault();

    if (!sidebar.hasClass("active")) {
      return;
    }

    if (
      !sb.is(":contains(" + e.target.textContent + ")") &&
      !sidebar.is(":contains(" + e.target.textContent + ")")
    ) {
      sidebar.removeClass("active");
    }
  });
});
