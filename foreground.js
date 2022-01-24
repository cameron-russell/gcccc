console.log("executing foreground script");
// let el = document.querySelector(
//   ".details-reset.details-overlay.dropdown.float-right.mt-1"
// );
let menu = `<details-menu id="gcccc-color-menu" class="gcccc-closed" role="menu">
  <form class="edit_user" accept-charset="UTF-8" method="post">
  <div id="gcccc-lessmore" class="color-fg-muted">
  Less
    <svg width="10" height="10" class="d-inline-block">
      <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="0"></rect>
    </svg>
    <svg width="10" height="10" class="d-inline-block">
      <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="1"></rect>
    </svg>
    <svg width="10" height="10" class="d-inline-block">
      <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="2"></rect>
    </svg>
    <svg width="10" height="10" class="d-inline-block">
      <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="3"></rect>
    </svg>
    <svg width="10" height="10" class="d-inline-block">
      <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="4"></rect>
    </svg>
  More
</div>
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
