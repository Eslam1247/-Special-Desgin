// check if localstorage 
var maincolor = localStorage.getItem('color-option')
if (maincolor !== null) {
    //console.log('No')
    document.documentElement.style.setProperty('--second-color', localStorage.getItem('color-option'))
        // remove active 
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        // add active for colors
        if (element.dataset.color === maincolor) {
            element.classList.add('active');
        }

    })

}



// scroll bottom to top
let myButton = document.getElementById('up');

window.onscroll = function() {
        // Display after 400px height
        if (window.pageYOffset >= 200) {
            myButton.style.display = 'block';
        } else {
            myButton.style.display = 'none';
        }
    }
    //Onclick function
myButton.addEventListener('click', function() {
    window.scrollTo({
        top: 00,
        left: 0,
        behavior: "smooth"
    });
});




// random background option 
let backgroundoption = true
    // background intreval
let backgroundint;
// local storage background
let backgroundlocal = localStorage.getItem('background-option')
    // check
if (backgroundlocal !== null) {
    if (backgroundlocal === 'true') {
        backgroundoption = true;
    } else {
        backgroundoption = false;
    }

}
document.querySelectorAll('.random-background span').forEach(element => {
    element.classList.remove('active')
})


if (backgroundlocal === 'true') {
    document.querySelector('.random-background .yes').classList.add('active')

} else {
    document.querySelector('.random-background .no').classList.add('active')
}






// toggle setting icons
document.querySelector('.toggle-setting i').onclick = function() {
    // toggle class fa-spin
    this.classList.toggle('fa-spin');
    // get open setting-box
    var setting = document.querySelector('.settings-box');
    setting.classList.toggle('open');
};




// switch colors 
const colorli = document.querySelectorAll('.colors-list li')

colorli.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--second-color', e.target.dataset.color)
            // set color
        localStorage.setItem('color-option', e.target.dataset.color)

    })
})




// switch bacground option
const randomBack = document.querySelectorAll('.random-background span')
    // loop all span
randomBack.forEach(span => {
    span.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
                element.classList.remove("active")
            })
            // add active class
        e.target.classList.add("active")
        if (e.target.dataset.background === 'yes') {
            backgroundoption = true
            localStorage.setItem('background-option', true)
            randomizeim();
        } else {
            backgroundoption = false
            localStorage.setItem('background-option', false)
            clearInterval(backgroundint)
        }
    })

})




// select landing page 
let landingpage = document.querySelector('.landing-page')
    // Get array of image
let arrayimge = ["1.jpg", "3.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg"];
// function randomizeinges
function randomizeim() {
    if (backgroundoption === true) {
        backgroundint = setInterval(() => {
            // get random math
            let randommath = Math.floor(Math.random() * arrayimge.length)
                // change background image url
            landingpage.style.backgroundImage = 'url("image/' + arrayimge[randommath] + '")'
        }, 10000)
    }
}
randomizeim();




// select our skills selector
let ourskills = document.querySelector('.skills')

window.onscroll = function() {
    // skills ofeset
    let skillsofesettop = ourskills.offsetTop
        // skills outer height
    let skillsouterheight = ourskills.offsetHeight
        // window height
    let windowheight = this.innerHeight
        // window scrollTop
    let windowscroll = this.pageYOffset
    if (windowscroll > (skillsofesettop + skillsouterheight - windowheight)) {
        let allskills = document.querySelectorAll('.skills-box .skills-progress span')
        allskills.forEach(skills => {
            skills.style.width = skills.dataset.progress
        })
    }

}



// create Popup Images
let ourgalllary = document.querySelectorAll('.gallery img')

ourgalllary.forEach(img => {
        img.addEventListener('click', (e) => {

            // create overlay 
            let overlay = document.createElement('div')
                // add class for overlay
            overlay.className = 'popup-overlay'
                // append to body
            document.body.appendChild(overlay)
                // create popup box
            let popupbox = document.createElement('div')
                // add class
            popupbox.className = 'popup-box'



            // create alt
            if (img.alt !== null) {
                // create heading
                let imgheading = document.createElement('h3')
                    // create text from heading
                let imgtext = document.createTextNode(img.alt)
                    // append text to heading
                imgheading.appendChild(imgtext)
                popupbox.appendChild(imgheading)
            }


            // create image for pop
            let poppupimage = document.createElement('img')
                // set image  source
            poppupimage.src = img.src
                // add image to pop box
            popupbox.appendChild(poppupimage)
                // append to body
            document.body.appendChild(popupbox)
                // create close span
            let closebutton = document.createElement('span')
                // create the close button
            let closebuttonText = document.createTextNode('X')
                // append 
            closebutton.appendChild(closebuttonText)
                // add class to close button
            closebutton.className = 'close-button'
            popupbox.appendChild(closebutton)

        })
    })
    // create close
document.addEventListener('click', (e) => {
    if (e.target.className === 'close-button') {
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();
    }
})



// Select All Bullets
const allbullets = document.querySelectorAll('.nav .bullet')
    // Select All links
const alllinks = document.querySelectorAll('.links a')

function scrolltosmeewhere(elemnets) {
    elemnets.forEach(ele => {

        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })


        })
    })
}
scrolltosmeewhere(allbullets)
scrolltosmeewhere(alllinks)



// hundle 
function hundle(ele) {
    ele.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active')
        })
        // add active class
    ele.target.classList.add('active')

};

// Bullets select

let bulspan = document.querySelectorAll('.bullets-option span')
let bullCon = document.querySelector('.nav')
let localitem = localStorage.getItem('bullet-option')
if (localitem !== null) {
    bulspan.forEach(span => {
        span.classList.remove('active')
    })
    if (localitem === 'block') {
        bullCon.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active')
    } else {
        bullCon.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active')
    }
}

bulspan.forEach(span => {
    span.addEventListener('click', (e) => {

        if (span.dataset.display === "show") {
            bullCon.style.display = 'block';
            localStorage.setItem('bullet-option', 'block')
        } else {
            bullCon.style.display = 'none';
            localStorage.setItem('bullet-option', 'none')
        }
        hundle(e);
    })

})


// Reset Local
document.querySelector('.reset').onclick = function() {
    localStorage.clear()
        // localStorage.removeItem('bullet-option');
        //localStorage.removeItem('color-option')
        //localStorage.removeItem('background-option')
    window.location.reload();
}

let menubtn = document.querySelector('.menu')
let tlinks = document.querySelector('.links')

/*
menubtn.onclick = function(e) {
    e.stopPropagation()
    this.classList.toggle('menu-active')
    tlinks.classList.add("open")
}


document.addEventListener('click', (e) => {
    if (tlinks !== menubtn && e.target !== tlinks) {
        if (links.classList.contains("open")) {
            menubtn.classList.toggle('menu-active')
            tlinks.classList.toggle('open')

        }
    }
})

tlinks.onclick = function(e) {
    e.stopPropagation();
}
*/


function openMenu() {
    const menu = document.querySelector('.links')
    menu.classList.toggle('is-active')
}