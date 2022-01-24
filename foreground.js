console.log("executing foreground script");
// let el = document.querySelector(
//   ".details-reset.details-overlay.dropdown.float-right.mt-1"
// );
let menu = `<details-menu id="gcccc-color-menu" class="gcccc-closed contributions-setting-menu" role="menu">
  <form class="edit_user" accept-charset="UTF-8" method="post">
    
  </form>    
  <div role="none" class="dropdown-divider"></div>
  <form class="edit_user" action="/users/cameron-russell/set_activity_overview_preference" accept-charset="UTF-8" method="post">
    
  </form>
</details-menu>`;

let el = document.querySelector(".js-yearly-contributions");

let div = document.createElement("div");
div.classList.add("pinned-items-setting-link", "Link--muted");
div.setAttribute("id", "gcccc-container");
div.innerText = "change";

el.insertAdjacentElement("afterend", div);
div.insertAdjacentHTML("beforeend", menu);
// chrome.scripting.insertCSS({ css: "" }, () => console.log("css injected!"));
let gccccMenu = document.getElementById("gcccc-color-menu");
div.addEventListener("click", () => toggleMenu(gccccMenu.classList));

function toggleMenu(classList) {
  if (classList.contains("gcccc-closed")) {
    gccccMenu.classList.remove("gcccc-closed");
  } else gccccMenu.classList.add("gcccc-closed");
}
