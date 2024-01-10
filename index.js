const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningconatinerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchapi(word) {
    try {
        infoTextEl.style.display = "block";
        meaningconatinerEl.style.display = "none";
        infoTextEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        infoTextEl.style.display = "none";
        meaningconatinerEl.style.display = "block";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definitions;
        audioEl.src = result[0].phonetics[0].audio;
        console.log(result[0]);
    } catch (error) {
        console.log(error);
    }
}



inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchapi(e.target.value);
    }
});
