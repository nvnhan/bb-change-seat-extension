(() => {
	const getCurrentTab = (callback) => chrome.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT }, (tabs) => callback(tabs[0]));
	/**
	 * Lấy dữ liệu từ form
	 */
	const getRequestData = () => {
		return {
			adult: $("#nguoi-lon").val(),
			child: $("#tre-em").val(),
		};
	};

	$(document).ready(() => {
		// Ấn nút thay đổi
		///////////////////
		$("#change").on("click", () => {
			getCurrentTab((tab) => chrome.runtime.sendMessage({ data: getRequestData(), tab }));
		});
	}); // End ready
})();
