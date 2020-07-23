///////////////////////////
// SCRIPT Ở TOOL BACKGROUND
// NHẬN DỮ LIỆU TỪ SCRIPT ĐƯỢC CHÈN VÀO WEB GỬI VỀ
// XỬ LÝ VÀ THÔNG BÁO TỚI USER
///////////////////////

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
console.log("request", request)
	let tabId = request.tab ? request.tab.id : sender.tab.id;
    

	// Send data (state) cho script.js ở tab tương ứng
	chrome.tabs.sendMessage(tabId, { data: request.data });
});
