const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// Update the nav links with text for each link
let nav = document.querySelector('nav');
let navItems = document.querySelectorAll('nav > a');
navItems.forEach(function(value, i) {
  value.textContent = siteContent["nav"][`nav-item-${i+1}`];
});

//Append and prepend items to the nav
let appendedNavItem = document.createElement('a'),
    prependedNavItem = document.createElement('a'),
    appenddedNavText = document.createTextNode('Testimonials'),
    prependedNavText = document.createTextNode('Why DOM?');

  
nav.prepend(prependedNavItem);
prependedNavItem.appendChild(prependedNavText);

nav.appendChild(appendedNavItem).appendChild(appenddedNavText);


// Turn nav text green
document.querySelectorAll('nav > a').forEach(function(value, i) {
  value.style.color = 'green';  
});
  
  

// Update CTA section content 
let ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector('.cta button');
ctaBtn.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// Update main content
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
 
let mainContentH4 = document.querySelectorAll('.main-content h4');
let mainContentp = document.querySelectorAll('.main-content p');

mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentp[0].textContent = siteContent["main-content"]["features-content"];

mainContentH4[1].textContent = siteContent["main-content"]["about-h4"]; 
mainContentp[1].textContent = siteContent["main-content"]["about-content"];

mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentp[2].textContent = siteContent["main-content"]["services-content"];

mainContentH4[3].textContent = siteContent["main-content"]["product-h4"]; 
mainContentp[3].textContent = siteContent["main-content"]["product-content"];

mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"]; 
mainContentp[4].textContent = siteContent["main-content"]["vision-content"];


// Update contact content

let contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll('.contact > p');
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];


// Update footer content
let footerParagraph = document.querySelector('footer > p');
footerParagraph.textContent = siteContent["footer"]["copyright"];


//Stretch button click
ctaBtn.addEventListener('click', (event) => {
  ctaH1.textContent = "Dom is RLY awesome!";
  console.log(nav.childNodes);
});
