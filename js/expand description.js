<script>
    function toggleDescription(button) {
        var description = button.parentElement.querySelector(".descrip");
        
        if (description.style.maxHeight === "0px") {
            description.style.maxHeight = description.scrollHeight + "px";
            button.textContent = "Скрыть";
        } else {
            description.style.maxHeight = "0px";
            button.textContent = "Описание";
        }
    }
</script>
