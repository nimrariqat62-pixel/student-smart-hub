// Student Smart Hub - Interactive Script

function exploreHub() {
    alert("Welcome to Student Smart Hub! 🎓\n\nScroll down to explore core CS study guides, planning tools, and career roadmaps designed for your success.");
}

// Interactive feedback when clicking on feature cards
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            if (index === 0) {
                alert("📚 CS & C++ Notes: Simplified explanations for Pointers, OOP, and DSA coming soon!");
            } else if (index === 1) {
                alert("🧠 Daily Planner: Smart study schedule tracker module is under active development.");
            } else if (index === 2) {
                alert("🎯 Roadmap & Scholarships: Guidance for fully-funded Master's opportunities in South Korea & beyond.");
            }
        });
    });
});
