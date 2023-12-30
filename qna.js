const questions = [
    "What's a memorable adventure or journey we've experienced together?",
    "Can you recall a time when I surprised you with an unexpected act of kindness?",
    "In your opinion, what's my most admirable quality?",
    "If we were to plan a dream vacation together, where would we go and why?",
    "Is there a particular skill or hobby of mine that you find fascinating?",
    "What's a piece of advice from me that you've found especially valuable?",
    "Can you share a moment when I provided crucial support or encouragement?",
    "Is there a goal or dream of mine that you're particularly excited to see come true?",
    "What's a shared interest or passion that has strengthened our friendship?",
    "Do you remember a time when I helped you overcome a challenge or obstacle?",
    "If we were characters in a story, how would you describe our dynamic?",
    "What's a favorite tradition or ritual we have that brings us closer?",
    "Is there a particular place or environment where you think I shine the most?",
    "Can you share a funny or amusing memory that involves the two of us?",
    "If we could collaborate on a creative project together, what would it be?"
];

// The "Best Question" is the last one in the list.

// The above questions are now stored in the 'questions' array.

const form = document.getElementById("question-form");

questions.forEach((question, index) => {
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: ${question}`;
    const input = document.createElement("input");
    input.type = "text";
    input.name = `answer${index + 1}`;
    form.appendChild(label);
    form.appendChild(input);
});

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const answers = [];

    for (let pair of formData.entries()) {
        answers.push(pair[1]);
    }

    // You can now process the answers as needed (e.g., send to a server, display them, etc.)
    console.log(answers);
});
