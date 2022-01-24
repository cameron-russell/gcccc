console.log("executing foreground script");

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

//find element to position under
let el = document.querySelector(".js-yearly-contributions");

//create a container
let div = document.createElement("div");
div.classList.add("pinned-items-setting-link", "Link--muted");
div.setAttribute("id", "gcccc-container");
div.innerText = "Change colours ";
div.insertAdjacentHTML("beforeend", `<div class="dropdown-caret"></div>`);

//insert container into page
el.insertAdjacentElement("afterend", div);

//add menu element
div.insertAdjacentHTML("beforeend", menu);

//menu element
let gccccMenu = document.getElementById("gcccc-color-menu");
gccccMenu.addEventListener("click", (e) => e.stopPropagation());

//hide and show the menu
div.addEventListener("click", () => toggleMenu(gccccMenu.classList));
function toggleMenu(classList) {
  if (classList.contains("gcccc-closed")) {
    gccccMenu.classList.remove("gcccc-closed");
  } else gccccMenu.classList.add("gcccc-closed");
}

// apply function to event listener on each color square
let lessmore = document.getElementById("gcccc-lessmore");
let svgs = Array.from(lessmore.childNodes).filter((el) => el.nodeName == "svg");
svgs.forEach((svg) =>
  svg.addEventListener("click", (e) => {
    e.stopPropagation();
    sendCSSToBackground();
  })
);

// close if anything else clicked on the page
document.addEventListener("click", (e) => {
  if (e.target !== div) {
    if (!gccccMenu.classList.contains("gcccc-closed")) {
      gccccMenu.classList.add("gcccc-closed");
    }
  }
});

function sendCSSToBackground() {
  console.log("sendCSS func");

  // chrome.runtime.sendMessage({
  //   message: { refreshed: true },
  // });
}
