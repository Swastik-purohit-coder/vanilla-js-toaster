function CreateToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
        div.textContent = str;
        document.querySelector(".parent").appendChild(div);


        if (config.positionX !== "left" || positionY !== "top") {
           document.querySelector(".parent").className += 
           ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;

        }
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}
let toaster = CreateToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3
});
toaster("Hello, this is a toaster notification!");
setTimeout(() => {
    toaster("swastik accepted your request");
},2000);