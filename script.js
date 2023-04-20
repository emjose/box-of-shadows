"use strict";
const _0x54d59f = _0x327e;
(function (_0x1e109e, _0x4effa3) {
	const _0x2d3368 = _0x327e,
		_0x4c6d60 = _0x1e109e();
	while (!![]) {
		try {
			const _0x1a0188 =
				-parseInt(_0x2d3368(0xa4)) / 0x1 +
				-parseInt(_0x2d3368(0xb5)) / 0x2 +
				(parseInt(_0x2d3368(0xa8)) / 0x3) * (parseInt(_0x2d3368(0xbd)) / 0x4) +
				-parseInt(_0x2d3368(0xa3)) / 0x5 +
				parseInt(_0x2d3368(0xaa)) / 0x6 +
				(parseInt(_0x2d3368(0xc6)) / 0x7) * (-parseInt(_0x2d3368(0xc8)) / 0x8) +
				parseInt(_0x2d3368(0xac)) / 0x9;
			if (_0x1a0188 === _0x4effa3) break;
			else _0x4c6d60["push"](_0x4c6d60["shift"]());
		} catch (_0x55eb8e) {
			_0x4c6d60["push"](_0x4c6d60["shift"]());
		}
	}
})(_0x5ea8, 0x3e938);
const inputs = document[_0x54d59f(0xb9)](_0x54d59f(0xb1)),
	inset = document["querySelector"]("input[type=\x22checkbox\x22]"),
	firstLine = document[_0x54d59f(0xa9)](_0x54d59f(0xc9)),
	secondLine = document["getElementById"](_0x54d59f(0xc3)),
	thirdLine = document[_0x54d59f(0xa9)]("third"),
	storedTheme =
		localStorage[_0x54d59f(0xa7)](_0x54d59f(0xc2)) ||
		(window[_0x54d59f(0xaf)](_0x54d59f(0xcd))["matches"] ? _0x54d59f(0x9c) : _0x54d59f(0xa0));
if (storedTheme) document["documentElement"][_0x54d59f(0xb6)](_0x54d59f(0xc7), storedTheme);
function switchMode() {
	const _0xc1952 = _0x54d59f,
		_0x509a53 = document[_0xc1952(0xbc)][_0xc1952(0xa1)](_0xc1952(0xc7));
	let _0x53f32a = _0xc1952(0xa0);
	location[_0xc1952(0x93)](),
		_0x509a53 === _0xc1952(0xa0) && (_0x53f32a = _0xc1952(0x9c)),
		document[_0xc1952(0xbc)][_0xc1952(0xb6)]("data-theme", _0x53f32a),
		localStorage["setItem"](_0xc1952(0xc2), _0x53f32a);
}
inset["addEventListener"](_0x54d59f(0xb1), () =>
	inset[_0x54d59f(0xae)] ? (inset[_0x54d59f(0xab)] = "inset") : (inset["value"] = null)
);
function handleShadow() {
	const _0x89973f = _0x54d59f,
		_0x31a3f2 = this["dataset"]["suffix"] || "";
	_0x31a3f2 != ";" &&
		document[_0x89973f(0xbc)]["style"][_0x89973f(0xb3)]("--" + this[_0x89973f(0x99)], this["value"] + _0x31a3f2),
		_0x31a3f2 === ";" &&
			document[_0x89973f(0xbc)]["style"][_0x89973f(0xb3)]("--" + this[_0x89973f(0x99)], this[_0x89973f(0xab)]);
}
function handleCSS() {
	const _0x2a42a7 = _0x54d59f,
		_0x4311c3 = this[_0x2a42a7(0x9a)][_0x2a42a7(0xc0)] || "",
		_0x3f88fd = document[_0x2a42a7(0xb9)]("span[name=\x22" + this["name"] + "\x22]");
	_0x3f88fd[_0x2a42a7(0xcf)]((_0x3105cd) => (_0x3105cd["textContent"] = this[_0x2a42a7(0xab)] + _0x4311c3));
}
inputs[_0x54d59f(0xcf)]((_0x5d0c91) => _0x5d0c91[_0x54d59f(0xb0)](_0x54d59f(0xb1), handleShadow)),
	inputs[_0x54d59f(0xcf)]((_0x18a85e) => _0x18a85e["addEventListener"](_0x54d59f(0xb1), handleCSS));
const defaultSpan = _0x54d59f(0xb7);
function duplicateLines() {
	const _0xac2da1 = _0x54d59f;
	(firstLine[_0xac2da1(0xcc)] += defaultSpan),
		(secondLine["innerHTML"] += defaultSpan),
		(thirdLine[_0xac2da1(0xcc)] += defaultSpan);
}
duplicateLines();
const clipboard = new ClipboardJS(_0x54d59f(0xb2));
function _0x5ea8() {
	const _0x12da09 = [
		"getAttribute",
		"%cGithub\x20\x20\x20%chttps://bit.ly/3iwQC6U",
		"612275hsLClh",
		"473616jdydVi",
		"%c❤️",
		"success",
		"getItem",
		"111741xfoUiC",
		"getElementById",
		"2301330mQYSGu",
		"value",
		"11290455iWngLU",
		"padding:\x2016px",
		"checked",
		"matchMedia",
		"addEventListener",
		"input",
		".copy",
		"setProperty",
		"background:\x20rgba(238,58,136,1)",
		"704572eysahj",
		"setAttribute",
		"\x0a\x09<span\x20name=\x22inset\x22></span>\x0a\x09<span\x20name=\x22x\x22>20px</span>\x0a\x09<span\x20name=\x22y\x22>20px</span>\x0a\x09<span\x20name=\x22blur\x22>0px</span>\x0a\x09<span\x20name=\x22spread\x22>0px</span>\x0a\x09<span\x20name=\x22color\x22\x20id=\x22color-span-1\x22\x20data-theme=\x22light\x22>#16001A;</span>\x0a\x20\x20\x20\x20<span\x20name=\x22color\x22\x20id=\x22color-span-2\x22\x20data-theme=\x22dark\x22>#55006C;</span>\x0a\x20\x20\x20\x20",
		"register",
		"querySelectorAll",
		"margin:\x204px\x200\x204px\x204px",
		"Copied!",
		"documentElement",
		"8GeMxKU",
		"Copy\x20CSS",
		"color:\x20rgba(238,58,136,1)",
		"suffix",
		"/sw.js",
		"theme",
		"second",
		"border-radius:\x204px",
		"margin:\x206px\x200\x206px\x200",
		"175HDXHHt",
		"data-theme",
		"162520BnWCYT",
		"first",
		"then",
		"serviceWorker",
		"innerHTML",
		"(prefers-color-scheme:\x20dark)",
		"log",
		"forEach",
		"%cPortfolio%chttps://bit.ly/3QQr1Ux",
		"reload",
		"join",
		"font-size:\x2018px",
		"width:\x20200px",
		"font-size:\x2014px",
		"%cThe\x20README\x20\x20\x20%chttps://bit.ly/3e7kHds",
		"name",
		"dataset",
		"padding:\x2012px",
		"dark",
		"color:\x20white",
		"margin:\x206px\x200\x206px\x2014px",
		"background:\x20linear-gradient(\x20109.6deg,\x20rgba(238,58,136,1)\x2011.2%,\x20rgba(128,162,245,1)\x2091.1%\x20)",
		"light",
	];
	_0x5ea8 = function () {
		return _0x12da09;
	};
	return _0x5ea8();
}
clipboard["on"](_0x54d59f(0xa6), function (_0xeccfcd) {
	const _0x320c28 = _0x54d59f,
		_0x370031 = document["querySelector"](_0x320c28(0xb2));
	(_0x370031[_0x320c28(0xcc)] = _0x320c28(0xbb)),
		setTimeout(() => {
			const _0x3441a8 = _0x320c28;
			_0x370031[_0x3441a8(0xcc)] = _0x3441a8(0xbe);
		}, 0x3e8),
		_0xeccfcd["clearSelection"]();
});
function resetValues() {
	location["reload"]();
}
function swRegistration() {
	const _0x2d52e1 = _0x54d59f,
		_0x1158b1 = ["font-size:\x2020px", _0x2d52e1(0x9b), _0x2d52e1(0xba), "color:\x20rgba(238,58,136,1)"][
			_0x2d52e1(0x94)
		](";");
	_0x2d52e1(0xcb) in navigator &&
		navigator[_0x2d52e1(0xcb)]
			[_0x2d52e1(0xb8)](_0x2d52e1(0xc1))
			[_0x2d52e1(0xca)](function (_0x45b97a) {
				const _0x4878f4 = _0x2d52e1;
				console[_0x4878f4(0xce)](_0x4878f4(0xa5), _0x1158b1);
			})
			["catch"](function (_0x1d1a5e) {
				const _0x90885d = _0x2d52e1;
				console[_0x90885d(0xce)](_0x1d1a5e);
			});
}
function _0x327e(_0x4a4fc4, _0x50695d) {
	const _0x5ea8c3 = _0x5ea8();
	return (
		(_0x327e = function (_0x327e76, _0x290f8a) {
			_0x327e76 = _0x327e76 - 0x93;
			let _0x4fc257 = _0x5ea8c3[_0x327e76];
			return _0x4fc257;
		}),
		_0x327e(_0x4a4fc4, _0x50695d)
	);
}
function consoleText() {
	const _0x5426d5 = _0x54d59f;
	console["clear"]();
	const _0x68921d = [_0x5426d5(0x9d), _0x5426d5(0xb4), _0x5426d5(0x95), "padding:\x2012px", _0x5426d5(0x9e)][
			_0x5426d5(0x94)
		](";"),
		_0x3d6431 = ["font-size:\x2014px", _0x5426d5(0xad), _0x5426d5(0xc5), _0x5426d5(0xbf)][_0x5426d5(0x94)](";");
	console[_0x5426d5(0xce)]("%cHello\x20World!\x20I\x27m\x20Emmanuel.", _0x68921d),
		console[_0x5426d5(0xce)]("%cThank\x20you\x20for\x20checking\x20out\x20my\x20work!", _0x3d6431);
	const _0x54a994 = [
		_0x5426d5(0x97),
		"color:\x20#fff",
		_0x5426d5(0x96),
		"padding:\x208px",
		"margin:\x206px\x200\x206px\x2014px",
		_0x5426d5(0xc4),
		_0x5426d5(0xb4),
		_0x5426d5(0x9f),
	][_0x5426d5(0x94)](";");
	console[_0x5426d5(0xce)](_0x5426d5(0xd0), _0x54a994, _0x3d6431),
		console[_0x5426d5(0xce)]("%cLinkedin\x20%chttps://bit.ly/3cygAD4", _0x54a994, _0x3d6431),
		console["log"](_0x5426d5(0xa2), _0x54a994, _0x3d6431),
		console[_0x5426d5(0xce)](_0x5426d5(0x98), _0x54a994, _0x3d6431),
		console[_0x5426d5(0xce)]("%cHave\x20a\x20wonderful\x20day!", _0x3d6431);
}
swRegistration(), consoleText();
