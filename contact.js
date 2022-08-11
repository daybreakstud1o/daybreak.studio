// $(document).ready(function(){
console.log("contact file is running");
router.useScript(() => {

  document.querySelectorAll(".contact-heading span").forEach((elm)=>{
    elm.style.display = "none";
  })

  console.log("contact script is running");
  var elementDelay = 75;
  for (
    let i = 0;
    i < document.querySelectorAll(".contact-heading span").length;
    i++
  ) {
    document.querySelectorAll(".contact-heading span").forEach((element, i) => {
      setTimeout(function () {
        element.style.display = "inline-block";
      }, i * elementDelay);
    });
  }
});
// });
