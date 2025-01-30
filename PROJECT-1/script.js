const facts = [
    "AI can analyze data and recognize patterns faster than humans.",
    "The term 'Artificial Intelligence' was first coined in 1956 at a conference at Dartmouth College.",
    "AI systems can learn from data and improve their performance over time through machine learning.",
    "Natural Language Processing (NLP) is a branch of AI that helps machines understand human language.",
    "AI is used in various applications, including self-driving cars, virtual assistants, and recommendation systems."
];

// Function to generate a random fun fact
function generateFunFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("funFactDisplay").innerText = facts[randomIndex];
}

// Event listener for the button
document.getElementById("generateButton").addEventListener("click", generateFunFact);