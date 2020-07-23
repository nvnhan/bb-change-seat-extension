////////////////////////////////
// SCRIPT ĐƯỢC CHÈN VÀO TRANG WEB
// NHẬN VÀ PHẢN HỒI REQUEST TỪ TOOL
// XỬ LÝ CÁC NGHIỆP VỤ CHÍNH
//////////////////////////////////

(() => {
	const fill = (data) => {
		console.log("filling");

		$(".form__field--1-3:first select option:first").val(data.adult).text(data.adult);
		$(".form__field--1-3:nth-child(2) select option:first").val(data.child).text(data.child);
	};

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		fill(request.data);
	});
})();
