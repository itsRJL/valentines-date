window.addEventListener("load", () => {

  const initial = document.getElementById("initialContent");
  const confirm = document.getElementById("confirmContent");
  const question = document.getElementById("questionContent");
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("dateVideo");
  const source = document.getElementById("videoSource");
  const closeBtn = document.getElementById("closeVideo");
  const summary = document.getElementById("summaryCard");
  const placeSpan = document.getElementById("chosenPlace");
  const backBtn = document.getElementById("backBtn");
  const confirmBtn = document.getElementById("confirmChoice");

  const options = document.querySelectorAll(".option");

  let selectedChoice = ""; // preview choice
  let userChoice = "";     // confirmed choice


  // ============================
  // FLOW: Initial → Confirm → Question
  // ============================
  setTimeout(() => {
    initial.style.display = "none";
    confirm.style.display = "block";

    setTimeout(() => {
      confirm.style.display = "none";
      question.style.display = "block";
    }, 3000);

  }, 5000);


  // ============================
  // CLICK PICTURE → HIGHLIGHT + SHOW VIDEO
  // ============================
  options.forEach(option => {
    option.addEventListener("click", () => {

      options.forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");

      selectedChoice = option.getAttribute("data-value");

      // Show preview video
      if (selectedChoice === "picnic") {
        source.src = "ayalavid.mp4";
        video.poster = "ayala.jpg";
      } 
      else if (selectedChoice === "dinner") {
        source.src = "upvid.mp4";
        video.poster = "up.jpg";
      }

      video.load();
      modal.style.display = "flex";
      video.play();
    });
  });


  // ============================
  // CLOSE VIDEO → BACK TO QUESTION
  // ============================
  function closeVideo() {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;

    question.style.display = "block"; // stay in question card
  }

  closeBtn.addEventListener("click", closeVideo);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeVideo();
    }
  });


  // ============================
  // CONFIRM BUTTON → REGISTER → SUMMARY
  // ============================
  confirmBtn.addEventListener("click", () => {

    if (!selectedChoice) {
      alert("Preview a place first 💕");
      return;
    }

    userChoice = selectedChoice;

    question.style.display = "none";

    if (userChoice === "picnic") {
      placeSpan.textContent = "Ayala Triangle Garden (Makati)";
    } 
    else if (userChoice === "dinner") {
      placeSpan.textContent = "UP Sunken Garden (QC)";
    }

    summary.style.display = "block";
  });


  // ============================
  // BACK BUTTON → RESET EVERYTHING
  // ============================
  backBtn.addEventListener("click", () => {

    summary.style.display = "none";
    question.style.display = "block";

    selectedChoice = "";
    userChoice = "";

    options.forEach(o => o.classList.remove("selected"));
  });

});
