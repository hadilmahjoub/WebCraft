const range = document.querySelector("#range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
    const labelWidth = getComputedStyle(label).getPropertyValue("width");

    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    const min = +e.target.min;
    const max = +e.target.max;

    const left =
        value * (numWidth / max) -
        numLabelWidth / 2 +
        scale(value, min, max, 12, -12);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
