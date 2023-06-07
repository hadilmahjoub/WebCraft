const tl = gsap.timeline({
    defaults: { duration: 0.9, ease: "Power0.easeNone" },
});

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const first = document.querySelector("#first");
const spin = document.querySelector("#spin");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();

    if (Array.from(search.classList).indexOf("active") != -1) {
        console.log("EL SEARCH ACTIIVEEE");
        // el delay lel jme3a lo5rin bech el spin tetka3ber
        search.style.transitionDelay = 1 + "s";
        input.style.transitionDelay = 1 + "s";
        btn.style.transitionDelay = 1 + "s";
    } else {
        console.log(spin);
        // ena7io el search
        first.style.display = "none";

        // n7ottou el spin
        spin.style.display = "block";
 
        // enka3brouu el spin
        // spin.style.transform = `rotate(-360deg)`;
        tl.fromTo("#spin", { rotation: "0deg" }, { rotation: "-360deg" });

        // nraj3ou el search w tetsaker
        setTimeout(() => {
            spin.style.display = "none";
            first.style.display = "block";
        }, 1000);

        // enna7i el delay wa9et bech n7el el search
        search.style.transitionDelay = "";
        input.style.transitionDelay = "";
        btn.style.transitionDelay = "";
    }
});
