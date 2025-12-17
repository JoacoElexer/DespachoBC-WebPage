import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
//let bar = document.querySelector('.bar');

console.log("using GSAP: ", gsap.version);

const bars = document.querySelectorAll('.chart .bar'); //Array de div con clase bar
const progressBar = document.querySelector('.chart .progressBar');
const progressNumber = document.querySelector('.chart .progressNumber');

bars.forEach((bar, i) => {
  const finalHeight = getComputedStyle(bar).getPropertyValue('--h').trim() || '0%';
  gsap.to(bar, 

    { height: finalHeight,
      duration: 1.2,
      delay: 0.90 + i * 0.06,
      ease: 'power2.out'
  });
});

gsap.to(progressBar,
  {
    height: '100%',
    duration: 0.8*bars.length/2,
    delay: 0.90 + 0.06,
    ease: 'power2.out'
  });


gsap.from(progressNumber, {
  textContent: "0%",
  duration: 0.8*bars.length/4,
  delay: 0.90 + 0.06,
  ease: "power1.in",
  snap: { textContent: 1 },
  stagger: 1,
  onUpdate(){
    progressNumber.textContent += "";
  }
  // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
});

  