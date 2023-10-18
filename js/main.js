let crsr = document.querySelector("#cursor");
let crsrblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrblr.style.left = dets.x - 140 + "px";
  crsrblr.style.top = dets.y - 140 + "px";
});

//Gsap
window.onload = function () {
  gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top -20%",
      end: "top -5%",
      scrub: 1,
    },
  });
};

window.onload = function () {
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
};


