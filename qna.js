const questions = [
    "What was your first impression of me when we met?",
    "What do you believe sets me apart in terms of my strengths?",
    "In your opinion, what's an area where I could use improvement?",
    "How would you characterize my sense of humor?",
    "Could you recount a cherished memory from our time together?",
    "If you had to capture my essence in just one word, what would it be?",
    "What guidance would you offer for my personal growth?",
    "Can you share the most important life lesson you've learned from me?",
    "What personality trait do you think we share in common?",
    "Is there a book or movie you think aligns with my taste?",
    "Can you recall a particularly touching or considerate gesture I've made?",
    "Is there a specific goal of mine you'd like to actively support?",
    "What skill or talent would you like to see me cultivate?",
    "What's the most formidable challenge you believe I've conquered?",
    "Can you pinpoint a piece of advice from me that left a lasting impact?",
    "What's the most spontaneous adventure or activity we've embarked on?",
    "Is there something you believe I tend to fret about excessively?",
    "Have I introduced you to something or someone for which you're thankful?",
    "Is there an unexplored destination you think we should experience together?",
    "What action of mine never fails to bring a smile to your face?",
    "What specific achievement do you hope to see me reach in the next year?",
    "What dreams or aspirations of mine do you recall?",
    "What cause or issue do you know I'm deeply dedicated to?",
    "What's a unique or quirky habit of mine that stands out to you?",
    "Could you reveal a fun fact or hidden talent of mine?",
    "If you could describe me in one sentence, how would you describe me?"
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
