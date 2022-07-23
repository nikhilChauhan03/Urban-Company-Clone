const faqs = document.querySelectorAll(".nikhil_faq_select");

faqs.forEach((el)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("active");
    })
})