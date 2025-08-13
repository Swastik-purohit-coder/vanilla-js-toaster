# Vanilla JS Toaster 🔔

A lightweight and dependency-free toast notification system built with **pure HTML + JavaScript**.  
Easily display customizable, self-closing notifications in your web projects without any external libraries.

---

## ✨ Features
- 🎨 **Themes** – Dark & Light mode.
- 📍 **Custom Positioning** – Top/Bottom + Left/Right alignment.
- ⏳ **Auto Dismiss** – Set duration in seconds.
- 🛠 **Zero Dependencies** – Pure Vanilla JavaScript.

---



## 📂 Installation
Clone the repository:
```bash
git clone https://github.com/Swastik-purohit-coder/vanilla-js-toaster.git
🚀 Usage
1️⃣ Include HTML structure
<div class="parent fixed"></div>
<script src="script.js"></script>
2️⃣ Create a toaster instance
let toaster = CreateToaster({
    positionX: "right",   // "left" or "right"
    positionY: "bottom",  // "top" or "bottom"
    theme: "dark",        // "light" or "dark"
    duration: 3           // seconds
});
3️⃣ Show notifications
toaster("Hello, this is a toaster notification!");

setTimeout(() => {
    toaster("Swastik accepted your request");
}, 2000);
⚙️ Configuration Options
| Option      | Type   | Default    | Description                                        |
| ----------- | ------ | ---------- | -------------------------------------------------- |
| `positionX` | string | `"right"`  | Horizontal position: `"left"` or `"right"`         |
| `positionY` | string | `"bottom"` | Vertical position: `"top"` or `"bottom"`           |
| `theme`     | string | `"dark"`   | Theme color: `"light"` or `"dark"`                 |
| `duration`  | number | `3`        | Duration in seconds before notification disappears |
📄 License

This project is licensed under the MIT License – feel free to use and modify.
🙌 Author

Swastik Kumar Purohit
GitHub • LinkedIn

