import { CookieCheck } from "./modules/cookiebar";

const siteModules = [];

(function() {
	const init = () => {
		siteModules.push(new CookieCheck());
	};

	document.addEventListener("DOMContentLoaded", function() {
		init();
	});
})();