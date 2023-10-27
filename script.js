const btns = document.getElementsByClassName("close");
const header = document.getElementsByClassName("first-header")[0]; // Assuming there is only one "first-header" element

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        header.style.left = "-100%";
    });
}

