function checkGrammar() {

    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    let issues = [];
    const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "");

    // Check capital letter
    if (!/^[A-Z]/.test(text)) {
        issues.push("Start the sentence with a capital letter.");
    }

    // Check punctuation
    if (!/[.!?]$/.test(text)) {
        issues.push("Add punctuation at the end of the sentence.");
    }

    // Check double spaces
    if (/\s{2,}/.test(text)) {
        issues.push("Remove unnecessary double spaces.");
    }

    // Common grammar mistakes
    if (/\bi am\b/i.test(text)) {
        issues.push('Use "I am" with a capital I.');
    }

    if (/\bhe go\b/i.test(text)) {
        issues.push('Use "he goes" instead of "he go".');
    }

    if (/\bshe go\b/i.test(text)) {
        issues.push('Use "she goes" instead of "she go".');
    }

    if (/\bi has\b/i.test(text)) {
        issues.push('Use "I have" instead of "I has".');
    }

    if (/\bhe have\b/i.test(text)) {
        issues.push('Use "he has" instead of "he have".');
    }

    if (/\bshe have\b/i.test(text)) {
        issues.push('Use "she has" instead of "she have".');
    }

    if (/\bthey is\b/i.test(text)) {
        issues.push('Use "they are" instead of "they is".');
    }

    if (/\bwe was\b/i.test(text)) {
        issues.push('Use "we were" instead of "we was".');
    }

    // Display result

    document.getElementById("issueCount").textContent =
        issues.length;

    const suggestionList =
        document.getElementById("suggestions");

    suggestionList.innerHTML = "";

    if (issues.length === 0) {

        const li = document.createElement("li");

        li.textContent =
            "No basic grammar issues found. Your text looks good!";

        suggestionList.appendChild(li);

    } else {

        issues.forEach(issue => {

            const li = document.createElement("li");

            li.textContent = issue;

            suggestionList.appendChild(li);
        });
    }
}