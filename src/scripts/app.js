import { CookieCheck } from "./modules/cookiebar";

const siteModules = [];

(function() {
	const init = () => {
		console.log('JS Initiated');
		siteModules.push(new CookieCheck());
	};

	document.addEventListener("DOMContentLoaded", function() {
		init();
	});
})();