export const initFaviconByTheme = () => {
	const setFaviconByTheme = (isDark) => {
		const favicon = document.getElementById("favicon");
		if (!favicon) return;

		favicon.href = isDark ? "/logo-dark.svg" : "/logo-light.svg";
	};

	// 监听系统主题
	const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

	setFaviconByTheme(darkMediaQuery.matches); // 初次加载

	darkMediaQuery.addEventListener("change", (e) => {
		setFaviconByTheme(e.matches);
	});
};
