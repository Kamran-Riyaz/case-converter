(function () {
  const TRANSFORM_TYPES = {
    SENTENCE: "sentenceCase",
    UPPER: "upperCase",
    LOWER: "lowerCase",
    TITLE: "titleCase",
  };

  const CLEAR_BUTTON_ID = "clear-btn";

  // Function to transform text based on specified transformation type
  function transformText(transformType) {
    const inputText = document.getElementById("original-text").value;
    let transformedText;

    switch (transformType) {
      case TRANSFORM_TYPES.SENTENCE:
        transformedText = sentenceCase(inputText);
        break;
      case TRANSFORM_TYPES.UPPER:
        transformedText = inputText.toUpperCase();
        break;
      case TRANSFORM_TYPES.LOWER:
        transformedText = inputText.toLowerCase();
        break;
      case TRANSFORM_TYPES.TITLE:
        transformedText = titleCase(inputText);
        break;
      default:
        console.error(`Invalid transform type: ${transformType}`);
        return;
    }

    document.getElementById("converted-text").value = transformedText;
  }

  // Function to convert text to sentence case
  function sentenceCase(text) {
    return text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => match.toUpperCase());
  }

  // Function to convert text to title case
  function titleCase(text) {
    return text.replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }

  // Event listener for transformation buttons
  function addTransformButtonListener(buttonId, transformType) {
    document.getElementById(buttonId).addEventListener("click", function () {
      transformText(transformType);
    });
  }

  // Adding event listeners
  addTransformButtonListener("btn-sentence-case", TRANSFORM_TYPES.SENTENCE);
  addTransformButtonListener("btn-upper-case", TRANSFORM_TYPES.UPPER);
  addTransformButtonListener("btn-lower-case", TRANSFORM_TYPES.LOWER);
  addTransformButtonListener("btn-title-case", TRANSFORM_TYPES.TITLE);

  // Clear textarea boxes
  document.getElementById(CLEAR_BUTTON_ID).addEventListener("click", () => {
    document.getElementById("original-text").value = "";
    document.getElementById("converted-text").value = "";
  });
})();
