"use strict";

const inputs = document.querySelectorAll("input");
const inset = document.querySelector(`input[type="checkbox"]`);
const firstLine = document.getElementById("first");
const secondLine = document.getElementById("second");
const thirdLine = document.getElementById("third");

// Theme Switcher

const storedTheme =
	localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

function switchMode() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	let targetTheme = "light";
	location.reload();
	if (currentTheme === "light") {
		targetTheme = "dark";
	}
	document.documentElement.setAttribute("data-theme", targetTheme);
	localStorage.setItem("theme", targetTheme);
}

// Inset Checkbox

inset.addEventListener("input", () => (inset.checked ? (inset.value = "inset") : (inset.value = null)));

// Render onscreen shadow and colors by assigning values to CSS root variables.

function handleShadow() {
	const suffix = this.dataset.suffix || "";
	if (suffix != ";") {
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}
	if (suffix === ";") {
		document.documentElement.style.setProperty(`--${this.name}`, this.value);
	}
}

// Render the CSS text lines and range figures by assigning values to corresponding span elements.

function handleCSS() {
	const suffix = this.dataset.suffix || "";
	const allSpan = document.querySelectorAll(`span[name="${this.name}"]`);
	allSpan.forEach((span) => (span.textContent = this.value + suffix));
}

// On user input, invoke functions and assign values to respective elements.

inputs.forEach((input) => input.addEventListener("input", handleShadow));
inputs.forEach((input) => input.addEventListener("input", handleCSS));

// Default and Duplicate Text

const defaultSpan = `
	<span name="inset"></span>
	<span name="x">20px</span>
	<span name="y">20px</span>
	<span name="blur">0px</span>
	<span name="spread">0px</span>
	<span name="color" id="color-span-1" data-theme="light">#16001A;</span>
    <span name="color" id="color-span-2" data-theme="dark">#55006C;</span>
    `;

function duplicateLines() {
	firstLine.innerHTML += defaultSpan;
	secondLine.innerHTML += defaultSpan;
	thirdLine.innerHTML += defaultSpan;
}

duplicateLines();

// Copy to Clipboard

const clipboard = new ClipboardJS(".copy");
clipboard.on("success", function (e) {
	const copy = document.querySelector(".copy");
	copy.innerHTML = "Copied!";

	setTimeout(() => {
		copy.innerHTML = "Copy CSS";
	}, 1000);

	e.clearSelection();
});

// Reset to Default Settings

function resetValues() {
	location.reload();
}

// Service Worker and Console Text

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/sw.js")
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3e7kHds", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
