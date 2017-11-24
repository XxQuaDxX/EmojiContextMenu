
if (typeof isKaomojiMenu==='undefined') {
	isKaomojiMenu=true;
	chrome.runtime.onMessage.addListener(function (message, sender) {
		if (typeof sender.id!=='undefined' && sender.id==chrome.runtime.id) {
			var elem=document.activeElement;
			if (elem) {
				if (elem.isContentEditable) {
				    document.execCommand("insertHTML", false, message);
				} else {
					var start = elem.selectionStart;
					var end = elem.selectionEnd;
					if (!elem.value) elem.value='';
					elem.value =  elem.value.slice(0, start) + message + elem.value.substr(end);
					elem.selectionStart = start + message.length;
					elem.selectionEnd = elem.selectionStart;
				}
			}
		}
	});
} 