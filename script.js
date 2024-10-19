const tabsContainer = document.querySelector(".operations__tab-container")
const tabs = document.querySelectorAll(".operations__tab")
const tabsContent = document.querySelectorAll(".operations__content")
const tabsContainerProjects1 = document.querySelector(
  ".projects1__tab-container"
)
const tabsProjects1 = document.querySelectorAll(".projects1__tab")
const tabsContentProjects1 = document.querySelectorAll(".projects1__content")

const tabsContainerProjects2 = document.querySelector(
  ".projects2__tab-container"
)
const tabsProjects2 = document.querySelectorAll(".projects2__tab")
const tabsContentProjects2 = document.querySelectorAll(".projects2__content")

const tabsContainerRedirects = document.querySelector(
  ".redirects__tab-container"
)
const tabsRedirects = document.querySelectorAll(".redirects__tab")
const tabsContentRedirects = document.querySelectorAll(".redirects__content")

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav")
const navEl = document.querySelector(".nav")

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open")
})

// SCROLL INTO SECTION

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault()

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})

// REVEAL SECTION
const allSections = document.querySelectorAll(".section")

const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove("section--hidden")
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add("section--hidden")
})

// TABS

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab")

  if (!clicked) return

  tabs.forEach((t) => t.classList.remove("operations__tab--active"))
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"))

  clicked.classList.add("operations__tab--active")

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active")
})

// Function to handle tab switching for the first project section
const handleTabClickProjects1 = (e) => {
  const clicked = e.target.closest(".projects1__tab")
  if (!clicked) return

  tabsProjects1.forEach((t) => t.classList.remove("projects1__tab--active"))
  tabsContentProjects1.forEach((c) =>
    c.classList.remove("projects1__content--active")
  )

  clicked.classList.add("projects1__tab--active")

  document
    .querySelector(`.projects1__content--${clicked.dataset.tab}`)
    .classList.add("projects1__content--active")
}

// Function to handle tab switching for the second project section
const handleTabClickProjects2 = (e) => {
  const clicked = e.target.closest(".projects2__tab")
  if (!clicked) return

  tabsProjects2.forEach((t) => t.classList.remove("projects2__tab--active"))
  tabsContentProjects2.forEach((c) =>
    c.classList.remove("projects2__content--active")
  )

  clicked.classList.add("projects2__tab--active")

  document
    .querySelector(`.projects2__content--${clicked.dataset.tab}`)
    .classList.add("projects2__content--active")
}

// Function to handle tab switching for redirects section
const handleTabClickRedirects = (e) => {
  const clicked = e.target.closest(".redirects__tab")
  if (!clicked) return

  tabsRedirects.forEach((t) => t.classList.remove("redirects__tab--active"))
  tabsContentRedirects.forEach((c) =>
    c.classList.remove("redirects__content--active")
  )

  clicked.classList.add("redirects__tab--active")

  document
    .querySelector(`.redirects__content--${clicked.dataset.tab}`)
    .classList.add("redirects__content--active")
}

// Add event listeners to all tab containers
tabsContainerProjects1.addEventListener("click", handleTabClickProjects1)
tabsContainerProjects2.addEventListener("click", handleTabClickProjects2)
tabsContainerRedirects.addEventListener("click", handleTabClickRedirects)
