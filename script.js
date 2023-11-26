let speech = new SpeechSynthesisUtterance();

let voices = [];if

let voiceSelect = document.querySelector("select");

window.SpeechSynthesis.onvoiceschanged = () => {
	voices = window.SpeechSynthesis.getVoices();
	speech.voice = voices[0];

	voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)) )
}