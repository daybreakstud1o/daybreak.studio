daybreak.router.useScript(()=>{

  // add the basic case study class
  document.body.classList.add("case-study");

  document.querySelector(".scroll-container").classList.add("full-height");


  const DESKTOP_ONLY = "transition-desktop-only";
  const MOBILE_ONLY = "transition-mobile-only";

  const elementDelay = 60;

  function splitIntoSpans(elm) {
    if (elm.childElementCount !== 0) return ()=>{};
    
    const wordsStr = (()=> {
      const splitText = elm.innerHTML.split(" ");
      if(splitText.length === 0) {
        return elm.innerHTML;
      }
      return splitText;
    })();
    
    elm.innerHTML = "";
    Array.from(wordsStr).forEach((str,i,arr)=>{
      const span = document.createElement("span");
      span.style.display = "none";
      span.style.whiteSpace = "break-spaces";
      
      if(elm.classList.contains(DESKTOP_ONLY))
        span.classList.add(DESKTOP_ONLY);

      if(elm.classList.contains(MOBILE_ONLY))
        span.classList.add(MOBILE_ONLY);

      const isLastElm = i+1 === arr.length;
      if(isLastElm) {
        span.innerText = str;
      } else {
        span.innerText = `${str} `; // str + "&nbsp;";
      }
      elm.appendChild(span);
    });

    return ()=>{
      Array.from(elm.children).forEach((span)=>{
        if(span.style.display !== "inline-block"){
          span.style.visibility = "visible";
          span.style.display = "inline-block";
        }
      })
    }
  }

  const allHeaders = Array.from(document.querySelectorAll(".heading-1"));
  const showSpanFunctions = allHeaders.map((headerElm)=>{
    return splitIntoSpans(headerElm);
  })

   // clone fixed nodes out of the current 
  function enableFixedElm(elms) {
    elms.forEach((elm)=>{
      const newElm = elm.cloneNode(true);
      newElm.remove();
      document.body.appendChild(newElm);
    });
  }
  const scrollFixedElm = document.querySelectorAll(".fixed, .next-up-image");
  enableFixedElm(scrollFixedElm);

  // Fix nav sticky position
  const stickyNavElm = document.querySelector("#fsdfsdfsdf");
  function enableNavStickyElm(originalElm) {
    originalElm.style.opacity = "0";
    
    const newElm = originalElm.cloneNode(true);
    originalElm.removeAttribute("id");
    document.body.appendChild(newElm);

    newElm.style.position = "fixed";
    newElm.style.opacity = "1";
    newElm.style.visibility = "visible";

    const getChildIndex = (element)=>Array.from(element.parentNode.children).indexOf(element);
    const observer = new MutationObserver((mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.attributeName !== "style") return; 
        if (mutation.target.style.visibility === "visible") {
          requestAnimationFrame(()=>{
            const index = getChildIndex(mutation.target);
            newElm.children[index].style.cssText = mutation.target.style.cssText;
          })
        }
      }
    });
    observer.observe(originalElm, { attributes: true, attributeFilter: ["style"], childList: true, subtree:true });

    let originalBounds = originalElm.getBoundingClientRect();
    const matchOriginalElmPosition = ()=>{
      originalBounds = originalElm.getBoundingClientRect();
      newElm.style.left = originalBounds.left + "px";
      newElm.style.top = originalBounds.top + "px";
    }
    matchOriginalElmPosition();

    const matchOriginalElmScroll = (scroll)=> {
      const originalElmTop = parseFloat(originalBounds.top);
      
      if(scroll > originalElmTop) {
        const scrollOffset = -originalElmTop;
        newElm.style.transform = `translateY(${scrollOffset}px)`;
      } else {
        const scrollOffset = -scroll;
        newElm.style.transform = `translateY(${scrollOffset}px)`;
      }
    }
    
    daybreak.scroll.observeScroll(matchOriginalElmScroll);
    window.addEventListener("resize", matchOriginalElmPosition);
    
    return ()=> {
      daybreak.scroll.unobserveScroll(matchOriginalElmScroll);
      window.removeEventListener("resize", matchOriginalElmPosition);
    }
  }
  const cleanupNavStickyElm = enableNavStickyElm(stickyNavElm);


  // if ($(window).width() > 992) {
    // enter top bar
  const allMainContainers = Array.from(document.querySelectorAll(".main-container"));
  const mainContainerInView = allMainContainers.filter((elm)=> {
    return daybreak.scroll.isInViewport(elm);
  })

  const excludeClass = ({selectors=[], exclude})=>{
    return selectors.map((selector)=>{
      return `${selector}:not(${exclude}, * > ${exclude})`
    }).join(",");
  } 

  const isMobile = window.innerWidth < 992;

  const elmsEnterAnimation = mainContainerInView.flatMap((container)=> {
    const selector = excludeClass({
      selectors: ["div:only-child", "img", "span", ".body-founders"], 
      exclude: isMobile? `.${DESKTOP_ONLY}` : `.${MOBILE_ONLY}`
    });
    const elmsToEnter = Array.from(container.querySelectorAll(selector));
    return elmsToEnter.map((elm)=> ()=>{

      // use different entry method base on their
      // element tag name 
      if(elm.tagName === "SPAN") {
        elm.style.display = "inline-block";
        elm.style.visibility = "visible";
        return;
      }
      elm.style.visibility = "visible";
    })
  })
  elmsEnterAnimation.forEach((animation,i)=>{
    setTimeout(animation, i * elementDelay);
  });

  const animationDoneTime = elementDelay * elmsEnterAnimation.length;
  setTimeout(()=>{
    requestAnimationFrame(()=>{
      document.querySelectorAll(".main-container *:only-child, .body-founders").forEach((elm)=>{
        elm.style.visibility = "visible";
      });
      showSpanFunctions.forEach((showSpanCallbacks)=>showSpanCallbacks());
    })
  },animationDoneTime);

  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );
  }

  const box = document.querySelector('#next-up-show');
  
  const handlePageScroll = (scrollPosition)=> {
    if (scrollPosition > 5) {
      document.querySelector("#case-top-bar-title").style.opacity = "0";
      document.querySelector("#project-expertise").classList.add("mobile-disappear");
    } else {
      document.querySelector("#case-top-bar-title").style.opacity = "1";
      document.querySelector("#project-expertise").classList.remove("mobile-disappear");
    }


    if (isInViewport(box) === true) {
      document.querySelector('.next-up-overlay').style.opacity = "1";
      var elementDelay = 250;
      for (let i = 0; i < document.querySelectorAll('.next-up-info > div').length; i++) {
        document.querySelectorAll('.next-up-info > div').forEach((element, i) => {
          setTimeout(function () {
            element.style.opacity = "1" ?? "";
          }, i * elementDelay);
        });
      }
      setTimeout(function () {
        for (let i = 0; i < document.querySelectorAll('.scroll-arrows svg path').length; i++) {
          document.querySelectorAll('.scroll-arrows svg path').forEach((element, i) => {
            setTimeout(function () {
              element.style.opacity = "1";
            }, i * elementDelay);
          });
        }
      }, document.querySelectorAll('.next-up-info > div').length * elementDelay);
    } else if (isInViewport(box) === false) {
      document.querySelector('.next-up-overlay').style.opacity = "0";
      for (let i = 0; i < document.querySelectorAll('.next-up-info > div').length; i++) {
        document.querySelectorAll('.next-up-info > div')[i].style.opacity = "0";
      }
      for (let i = 0; i < document.querySelectorAll('.scroll-arrows svg path').length; i++) {
        document.querySelectorAll('.scroll-arrows svg path')[i].style.opacity = "0.5";
      }
    }
  }

  daybreak.scroll.observeScroll(handlePageScroll);  

  $( ".close-casestudy" ).mouseover(function() {
    document.querySelector(".back-icon").style.visibility = "visible";
  });

  $( ".close-casestudy" ).mouseout(function() {
    document.querySelector(".back-icon").style.visibility = "hidden";
  });

  return ({beginTransition, onAbort})=>{
    daybreak.scroll.unobserveScroll(handlePageScroll);
    cleanupNavStickyElm();

    const { finish } = beginTransition();
    document.body.classList.remove("case-study");
    finish();
    onAbort(()=>{
      document.body.classList.add("case-study");
    })
  }
})
