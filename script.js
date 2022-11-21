/*
trae
*/
(function(){
    let slider = document.querySelector(".slider");
    let checkbox = document.querySelector(".checkbox");
    let pageviews = document.querySelector(".pageviews");
    let amount = document.querySelector(".amount");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");
    let discountnu = document.querySelector(".discountnu");
    let discountle = document.querySelector(".discountle");

    window.addEventListener("resize", () => {
        if(window.innerWidth >= 720){
            discountnu.classList.add("hide");
            discountle.classList.remove("hide");
        } else {
            discountnu.classList.remove("hide");
            discountle.classList.add("hide");
        }
})
    
    checkbox.addEventListener("change", () => {
        if(checkbox.checked) {
            month.classList.add("hide");
            year.classList.remove("hide");
          } else {
            month.classList.remove("hide");
            year.classList.add("hide");
          }
    })

    slider.addEventListener("input", () => {
        let i = slider.value;
        pageviews.innerText = array[i].pricing.pageviews;

        if(checkbox.checked) {
            amount.innerText = array[i].pricing.yearly;
        } else {
            amount.innerText = array[i].pricing.monthly;
        }
    })

    const array = [
        {
           pricing: {
              pageviews: "10K",
              monthly: "8.00",
              yearly: "72.00"
            }
          }
        ,
        {
            pricing: {
              pageviews: "50K",
              monthly: "12.00",
              yearly: "108.00"
            }
          }
        ,
        {
            pricing: {
              pageviews: "100K",
              monthly: "16.00",
              yearly: "144.00"
            }
          }
        ,
        {
            pricing: {
              pageviews: "500K",
              monthly: "24.00",
              yearly: "216.00"
            }
          }
        ,
        {
            pricing: {
              pageviews: "1M",
              monthly: "36.00",
              yearly: "324.00"
            }
          }
          ]
    })();