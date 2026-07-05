document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const phrases = [
            "Front-end Engineer|",
            "Backend Database Engineer|",
            "Software Engineer|",
            "N8N & AI & Automation Engineer",

        ];

        let currentPhraseIndex = 0;
        let currentCharIndex = 0;

        function typePhrase() {
            if (currentCharIndex < phrases[currentPhraseIndex].length) {
                typingElement.textContent +=
                    phrases[currentPhraseIndex].charAt(currentCharIndex);

                currentCharIndex++;
                setTimeout(typePhrase, 100);

            } else {
                setTimeout(erasePhrase, 2000);
            }
        }

        function erasePhrase() {
            if (currentCharIndex > 0) {

                typingElement.textContent =
                    phrases[currentPhraseIndex].substring(
                        0,
                        currentCharIndex - 1
                    );

                currentCharIndex--;
                setTimeout(erasePhrase, 50);

            } else {
                currentPhraseIndex =
                    (currentPhraseIndex + 1) % phrases.length;

                setTimeout(typePhrase, 500);
            }
        }

        setTimeout(typePhrase, 500);
    }
});