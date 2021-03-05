 let divSize = () => {
        var imgQuery = document.querySelector("#header-img-1");
        var divHeight = imgQuery.clientHeight;        
        document.getElementById("header-img-container").style.height = divHeight + "px";
    }
    divSize();
    window.addEventListener("resize", divSize);


let contactSubmit = () => {
		alert("Thank you! Your request has been submitted");
	}