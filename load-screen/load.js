$(document).ready(function () {
  // Function to cycle loading text
  function cycleLoadingText() {
    const loadingTexts = ["Loading.", "Loading..", "Loading..."];
    let index = 0;
    setInterval(function () {
      index = (index + 1) % loadingTexts.length;
      $("#loadingText").fadeOut(200, function () {
        $(this).text(loadingTexts[index]).fadeIn(200);
      });
    }, 700); 
  }

  cycleLoadingText();

  
  function hideLoadingScreen() {
    $("#loadingOverlay").addClass("hidden");

    setTimeout(function () {
      $("#loadingOverlay").remove();
    }, 500);

    $("#mainContent").fadeIn(500);
  }

  function performAsyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, 3000);
    });
  }

  performAsyncTask()
    .then(function () {
      hideLoadingScreen();
    })
    .catch(function (error) {
      console.error("An error occurred:", error);
      hideLoadingScreen();
    });
});
