const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("") // split the text to an array
        .map(
            (letter, i) =>
                `<span  style="transition-delay:${i * 40}ms ;">${letter}</span>`
        ) // create and array with a span around each element aka letter from the text
        .join("");   // join the span elements each one containing one letter
})