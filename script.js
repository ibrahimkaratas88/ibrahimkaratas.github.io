<!-- Add this button to the body of your HTML -->
<button onclick="scrollToTop()" id="topBtn">Top</button>

<!-- In script.js -->
<script>
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<!-- CSS for the button -->
#topBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    display: none;
}

window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
</script>
