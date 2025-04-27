function scrollMovies(rowId, distance) {
  const row = document.getElementById(rowId);
  row.scrollBy({
    left: distance,
    behavior: "smooth"
  });
}

document.getElementById("get-started-btn").addEventListener("click", function () {
  alert("Redirecting you to sign-up page!");
});
