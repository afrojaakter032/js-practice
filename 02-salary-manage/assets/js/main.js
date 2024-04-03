document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-card-btn").addEventListener("click", () => {
        document.querySelector(".card-wrap").insertAdjacentHTML("afterend", document.querySelector(".card").outerHTML);
        attachRemoveButtonListeners();
    });

    function attachRemoveButtonListeners() {
        document.querySelectorAll(".remove-card-btn").forEach((el) => {
            el.addEventListener("click", () => {
                let card = el.parentNode.parentNode.parentNode;
                card.remove();
            });
        });
    }
    attachRemoveButtonListeners();

    
});