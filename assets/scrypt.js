//SELECTEUR
//document.querySelector("h4").style.background = "red";

//const baliseHTML = document.querySelector("h4");
//baliseHTML.style.background = "yellow";

//click event
/*
const questionContainer = document.querySelector(".click-event");

questionContainer.addEventListener("click", () => {
    questionContainer.style.background = "red";
    questionContainer.style.border = "3px solid teal";
});
*/
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector("p");
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
    answer.classList.add("reponse");
    answer.style.background = "green";
    answer.style.borderRadius = "30px";
})
btn2.addEventListener("click", () => {
    answer.classList.add("reponse");
    answer.style.background = "red";
    answer.style.borderRadius = "30px";
});

//Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25% )";
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50% )";
    mousemove.style.border = "2px solid teal";
});
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "red";
});

answer.addEventListener('mouseover', () => {
    answer.style.transform = "rotate(10deg)";
})

//-------------------------------------------------
//KeyPresse event
const keypresseContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
    const audio = new Audio();
    audio.src = "./assets/hira.mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === "j") {
        keypresseContainer.style.background = "pink";
    } else if (e.key === "g") {
        keypresseContainer.style.background = "teal";
    } else {
        keypresseContainer.style.background = "red";
    }
    //ring();
});

//------------------------------------------------------------
//scroll Event
const nav = document.querySelector("nav");
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//------------------------------------------------------------
//Formulaire Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";


inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3> Pseudo: ${pseudo}</h3 >
        <h4>Langage Préféré : ${language}</h4>
        `;
    } else {
        alert('Veuillez acceptr les CGV');
    }
});
//--------------------------------------------------------------------
//Load event
window.addEventListener("load", () => {
    // console.log("Document chargé !");
});

//--------------------------------------------------------------------
//ForEach

//const boxes = document.getElementsByClassName("box");
/*
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});
*/
//---------------------------------------------------------------------
//addEventListener vs onsclick
/*document.body.onclick = () => {
    console.log("ckicl !!!!");
};
document.body.onscroll = () => {
    console.log("scroll !!");
};*/

document.body.addEventListener("click", () => {
    console.log("clic ");
}
);

document.body.addEventListener("click", () => {
    console.log("clic 2 !");
},
    true
);
//-----------------------------------------------------------------------
//Stop propagation
/*questionContainer.addEventListener("click", (e) => {
    alert("Test");
    e.stopPropagation()
});*/
//removeEventListener
//-----------------------------------------------------------------------
//BOM
//window.open("http://google.com", "cours js", "height = 600, width=800");
//window.close();

btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?");
});

btn1.addEventListener("click", () => {
    let answer = prompt("Entrer votre Nom");
    questionContainer.innerHTML += "<h3> Bravo " + answer + " !!</h3>";
});

//Timer, compte a rebours
setTimeout(() => {
    questionContainer.style.borderRadius = "200px";
}, 2000);
/*
let intervel = setInterval(() => {
    document.body.innerHTML += `
        <div class="box">
            <h2> Nouvelle Boite ! </h2>
        </div>
    `;
}, 1000);

document.body.addEventListener("click", (e) => {
    e.target.remove();
    clearInterval(intervel);
})
*/
// Location
/*
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
*/
//location.replace("http://lequipe.fr");

/*window.onload = () => {
    location.href = "../css/index.html";
};*/

//History
//window.history.back();
/*
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
});*/
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.button');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}
function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}