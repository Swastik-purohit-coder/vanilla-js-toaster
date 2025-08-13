vanilla-js-toaster 🍞
A simple, lightweight, and dependency-free toaster notification library created with pure JavaScript.

Easily create clean and modern notifications for your web projects without needing any external libraries or frameworks.

Features
Zero Dependencies: Written in pure ("vanilla") JavaScript.

Customizable: Easily configure position, theme (dark/light), and duration.

Lightweight: A single, small JavaScript function.

Easy to Use: Get started in just a couple of minutes.

Styling with Classes: Uses simple class names for styling, making it compatible with frameworks like Tailwind CSS or your own custom CSS.

Getting Started
Follow these steps to add vanilla-js-toaster to your project.

1. HTML Setup
First, you need a container element in your HTML file where the notifications will appear. Create a div and give it a class of parent. The script will dynamically add positioning classes to this element, so you should style it with position: fixed; and flexbox properties for proper stacking.

2. JavaScript Setup
Next, place the CreateToaster function into your project's JavaScript file. Make sure this script is loaded in your HTML file.

3. Usage
In your main script, you first create a toaster instance by calling the CreateToaster function and passing it a configuration object. This returns a new function that you can then call anytime with a string message to display a notification.

Configuration Options
You can pass a configuration object to CreateToaster with the following keys:

Key	Type	Default	Description
positionX	string	"left"	The horizontal position ("left" or "right").
positionY	string	"top"	The vertical position ("top" or "bottom").
theme	string	"light"	The color theme ("light" or "dark").
duration	number	3	The time in seconds before the toast disappears.

Export to Sheets
Contributing
Contributions are welcome! If you have ideas for improvements or find a bug, please feel free to:

Fork the repository.

Create a new branch for your feature.

Commit your changes.

Push to the branch.

Open a Pull Request.

License
This project is licensed under the MIT License.
