import gsap from "gsap";


let mm = gsap.matchMedia();

mm.add("(max-width:640px" , ()=>{

    const t = gsap.timeline({
        
      });
      
      t.to("#img>img", { 
        rotate: '350deg',
        duration:5,
        scrub:2,
      });
})