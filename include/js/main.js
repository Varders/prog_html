/* Toggle function open */

function toggle_chat(block_open, button, class_open, image_close, image_open) {
	button.onclick = function(){
		let copy_button = button.innerHTML;
		block_open.classList.toggle(class_open);
		if (block_open.classList.contains(class_open)){
			button.innerHTML = image_close;
		} 
		else{
			button.innerHTML = image_open;
		}
	}
}

let = block_chat = document.querySelector(".block-chat");
let = button_chat = document.querySelector(".chat-menu");
let = class_open_chat = "open_block_chat";
let = chat_image_open = '<img src="include/images/header/chat.svg">';
let = chat_image_close = '<img src="include/images/header/close_chat.svg">';
toggle_chat(block_chat, button_chat, class_open_chat, chat_image_close, chat_image_open);


/* Open main menu */
let block_menu = document.querySelector(".menu_block");
let button_menu = document.querySelector(".burger-menu");
let class_open_menu = "open_menu";
let menu_image_open = '<img src="include/images/header/close_chat.svg">';
let menu_image_close = '<img src="include/images/header/burger-menu.svg">';
toggle_chat(block_menu, button_menu, class_open_menu, menu_image_open, menu_image_close);