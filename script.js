let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

//Animation
// timeline
// .to('.text', 3,{x:300})
// .to('.text',3,{opacity:0})
// //syntax =>(class,duration,what to do)

timeline
.to('.rock',3,{y:-300})
.to('.girl1',3,{y:-200},'-=3')
.fromTo('.bg1',3,{y: -50},{y: 0, duration:3},'-=3')
.to('.content',3,{top:'0%'},'-=3')
.fromTo('.content-images',3,{opacity:0},{opacity:1,duration:1})
.fromTo('.text',3,{opacity:0},{opacity:1,duration:1})

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "200%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller)