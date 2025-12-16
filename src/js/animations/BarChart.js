import gsap from "gsap";

//let bar = document.querySelector('.bar');

console.log("using GSAP: ", gsap.version);

    const bars = document.querySelectorAll('.chart .bar');

    bars.forEach((bar, i) => {
    const target = getComputedStyle(bar).getPropertyValue('--h').trim() || '0%';
    gsap.fromTo(bar, { height: '0%' }, {
      height: target,
      duration: 0.8,
      delay: 0.25 + i * 0.06,
      ease: 'power2.out'
    });
  });