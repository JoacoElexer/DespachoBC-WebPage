import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("circle", {
  drawSVG: 0,
  rotation: -45,
  transformOrigin: "center center",
});

gsap.timeline({
  defaults: { duration: 1, ease: "sine.inOut" },
  yoyo: true,
})

  .to("#target1", { drawSVG: "0% -40%" })
  .to("#target2", { drawSVG: "-40% -65%" }, 0)
  .to("#target3", { drawSVG: "-65% -86%" }, 0)
  .to('#target4', { drawSVG: "-86% -100%" }, 0);