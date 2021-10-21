let myBlock;
document.addEventListener("DOMContentLoaded",function(){
    myBlock = document.createElement("div")
    myBlock.textContent = "Hello world";
    myBlock.style.width="100px";
    myBlock.style.height="100px";
    myBlock.style.backgroundColor="red";
    myBlock.style.color="white";
    myBlock.style.lineHeight="100px";
    myBlock.style.textAlign="center";
    myBlock.style.postition="absolute";
    myBlock.style.top="100px";
    myBlock.style.left="150px";
    document.body.appendChild(myBlock);
})
