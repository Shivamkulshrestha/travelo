import logo from "./logo.svg";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  return (
    <>
      <Home />

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
      <script>
        var Alert = ReactBootstrap.Alert;
        {/* 
    $(document).ready(function () {
  $("#menu-btn").click(function () {
    $("body").toggleClass("is_open");

    if ($("body").hasClass("is_open")) {
      $("#menu-btn").hide();
      // $(".nav-item").width(310);
      $(".filter-brand").hide();
      $(".audit-list-main h6").css("fontSize", "18px");
      $(".search-input").width(320);
      $(".search-input").css("margin-left", "-10px");
    } else {
      // $(".nav-item").width(320);
      // $("#menu-btn").show();
      // $(".filter-brand").show();
      // $(".search-input").width(525);
      // $(".audit-list-main h6").css("fontSize", "22px");
      // $(".search-input").css("margin-right", "10px");
      // $(".search-input").css("margin-left", "46px", "important");
    }
  });
  $("#menu-bt").click(function () {
    $("body").toggleClass("is_open");
    {
      $(".nav-item").width(300);
      $("#menu-btn").show();
      $(".filter-brand").show();
      $(".search-input").width(535);
      $(".audit-list-main h6").css("fontSize", "22px");
      $(".search-input").css("margin-left", "46px", "important");
    }
  });
}); 
*/}
      </script>

    </>
  );
}
export default App;
