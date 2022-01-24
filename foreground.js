console.log("executing foreground script");

// let menu = `<details-menu id="gcccc-color-menu" class="gcccc-closed" role="menu">
//   <form class="edit_user" accept-charset="UTF-8" method="post">
//   <div id="gcccc-lessmore" class="color-fg-muted">
//   Less
//     <svg width="10" height="10" class="d-inline-block">
//       <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="0"></rect>
//     </svg>
//     <svg width="10" height="10" class="d-inline-block">
//       <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="1"></rect>
//     </svg>
//     <svg width="10" height="10" class="d-inline-block">
//       <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="2"></rect>
//     </svg>
//     <svg width="10" height="10" class="d-inline-block">
//       <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="3"></rect>
//     </svg>
//     <svg width="10" height="10" class="d-inline-block">
//       <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="4"></rect>
//     </svg>
//   More
// </div>
//   </form>
// </details-menu>`;
let html = document.querySelector("html");

let globalColours = [
  getComputedStyle(html)
    .getPropertyValue("--color-calendar-graph-day-L1-bg")
    .trim(),
  getComputedStyle(html)
    .getPropertyValue("--color-calendar-graph-day-L2-bg")
    .trim(),
  getComputedStyle(html)
    .getPropertyValue("--color-calendar-graph-day-L3-bg")
    .trim(),
  getComputedStyle(html)
    .getPropertyValue("--color-calendar-graph-day-L4-bg")
    .trim(),
];

console.log(globalColours);

let menu = `<details-menu id="gcccc-color-menu" class="gcccc-closed" role="menu">
  <form class="edit_user" accept-charset="UTF-8" method="post">
  <div id="gcccc-lessmore" class="color-fg-muted">
  Less
    <svg width="10" height="10" class="d-inline-block">
    <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="0"></rect>
    </svg>
    <div id="gcccc-input-1-wrapper" class="gcccc-wrapper"><input type="color" class="gcccc-input" id="gcccc-input-1" value=""/></div>
    <div id="gcccc-input-2-wrapper" class="gcccc-wrapper"><input type="color" class="gcccc-input" id="gcccc-input-2"/></div>
    <div id="gcccc-input-3-wrapper" class="gcccc-wrapper"><input type="color" class="gcccc-input" id="gcccc-input-3"/></div>
    <div id="gcccc-input-4-wrapper" class="gcccc-wrapper"><input type="color" class="gcccc-input" id="gcccc-input-4"/></div>
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

//update colours of menu element

// for each color picker, update the wrapper background color and the global variable
Array.from(document.querySelectorAll(".gcccc-input")).forEach((input, idx) => {
  input.parentElement.style.backgroundColor = globalColours[idx];
  input.onchange = function () {
    input.parentElement.style.backgroundColor = input.value;
    //update global css here
  };
});

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
