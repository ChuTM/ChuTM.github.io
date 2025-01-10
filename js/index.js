
try {
    document.querySelector('.ham-menu').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.drop-down').classList.toggle('show');
        
        // if don't have active class
        if (e.currentTarget.classList.contains('active')) {
            resetNav();
        }
    });
} catch { }

function resetNav(reset = false) {

    document.querySelector('.drop-down').innerHTML = drop_down_links;

    if (reset) {

        document.querySelectorAll('.drop-down-module').forEach((element) => {
            element.style.opacity = 0;
        });

        setTimeout(() => {
            document.querySelectorAll('.drop-down-module').forEach((element) => {
                element.style.opacity = 1;
            });
        }, 200);
    }

    document.querySelector('.drop-down').querySelectorAll('.links').forEach((element) => {
        let back = document.createElement('a');
        back.classList.add('back');
        back.innerHTML = 'Back';
        element.prepend(back);
    });

    document.querySelectorAll('.drop-down-module>.title').forEach((e) => {
        e.addEventListener('click', (e) => {
            // others hidden
            const parent = e.currentTarget.parentElement;

            document.querySelectorAll('.drop-down-module').forEach((element) => {
                // skip parent
                if (element != parent) {
                    // opacity 0 then display none for all
                    element.animate([
                        { opacity: 1 },
                        { opacity: 0 }
                    ], {
                        duration: 300,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    });
                } else {
                    // opacity 1 for parent>.title
                    e.currentTarget.animate([
                        { opacity: 1 },
                        { opacity: 0 }
                    ], {
                        duration: 300,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    });
                }

                setTimeout(() => {
                    element.style.display = 'none';

                    parent.style.display = 'block';

                    parent.querySelector('.title').style.display = 'none';

                    // display flex .links
                    parent.querySelector('.links').style.display = 'flex';
                    parent.querySelector('.links').style.opacity = 1;

                    // a tags inside it, animate, with delay, from top to bottom opacity 1
                    let links = parent.querySelectorAll('.links>a');
                    links.forEach((element, index) => {
                        element.animate([
                            { opacity: 0, transform: 'translateY(-10px)' },
                            { opacity: 1, transform: 'translateY(0)' }
                        ], {
                            duration: 300,
                            easing: 'ease-in-out',
                            delay: index * 75,
                            fill: 'forwards'
                        });
                    });
                }, 300);
            });


        });
    });

    document.querySelectorAll('.drop-down-module .links>a.back').forEach((back) => {
        back.addEventListener('click', () => {
            back.parentElement.style.opacity = 0;
            back.parentElement.addEventListener('transitionend', () => {
                back.parentElement.style.display = 'none';
                resetNav(true);
            });
        });
    });
}

resetNav();


function spaceBreak() {
    try {
        let spaces = document.querySelectorAll('.space-break');
        spaces.forEach((element) => {
            element.style.marginBottom = element.getAttribute('data-height') + (element.getAttribute('data-unit') || 'rem');
        });
    } catch { }
}

window.onload = () => {

    try {
        document.querySelector('.nav-bar>a').href = '../'
    } catch { }

    try {
        document.getElementById('footer-links').innerHTML = footer_links
        document.getElementById('copyright').innerHTML = copyright_info
    } catch { }

    try {
        document.querySelector('.top.section.shorter').classList.add('pwa')
    } catch { }

    spaceBreak();

    try {
        document.querySelectorAll('.footer>.rows>.cols>.col>.click-holder').forEach((element) => {
            element.addEventListener('click', () => {
                if (isOnMobile) {
                    element.parentElement.classList.toggle('show');
                }
            });
        });

        document.querySelectorAll('.footer>.rows>.cols>.col>.footer-heading').forEach((element) => {
            element.addEventListener('click', () => {
                if (isOnMobile) {
                    element.parentElement.classList.toggle('show');
                }
            });
        });

        document.querySelectorAll('.footer>.rows>.cols>.col').forEach((element) => {
            // get height
            const height = element.clientHeight;
            // set --height to height
            element.style.setProperty('--height', height - 24 + 'px');
            // set height to 0
            element.classList.add('collapsed');
        });
    } catch { }

    try {
        let controls = document.querySelectorAll('.controls');

        controls.forEach((element) => {
            let target = document.querySelector(element.getAttribute('data-target'));
            let left = element.querySelector('.left');
            let right = element.querySelector('.right');

            const scrollValue = 100;

            // scroll target horizontally
            left.addEventListener('click', () => {
                target.scrollLeft -= scrollValue;
            });

            right.addEventListener('click', () => {
                target.scrollLeft += scrollValue;
            });
        });
    } catch { }
}

var user_prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    user_prefers = e.matches ? 'dark' : 'light';
    scroll_function();
});

var scroll_function = () => {
    try {
        if (window.scrollY > 0) {
            document.querySelector('.nav-bar').classList.add('scrolled');
        } else {
            document.querySelector('.nav-bar').classList.remove('scrolled');
        }
    } catch { }
}

scroll_function();

window.addEventListener('scroll', scroll_function);

try {
    var ios_only = document.querySelectorAll('.ios-only');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (!isIOS) {
        ios_only.forEach((element) => {
            element.style.display = 'none';
        })
    }
} catch { }

const isOnPC = window.innerWidth > 1024;

if (isOnPC) {
    document.body.classList.add('pc');
}

const isOnMobile = window.innerWidth < 630;

let frosted = document.querySelectorAll('.frosted');

frosted.forEach((element) => {
    // if position is static or unset set it to relative
    if (element.style.position == '' || element.style.position == 'static') {
        element.style.position = 'relative';
    }
});

spaceBreak();

if (document.querySelector('img[data-src]')) {
    document.querySelectorAll('img[data-src]').forEach((element) => {
        element.src = element.getAttribute('data-src');

        element.addEventListener('load', () => {
            element.removeAttribute('data-src');
        });
    });
}

function toHex(color) {
    if (color.includes('rgb')) {
        let [r, g, b] = color.match(/\d+/g);
        return `#${(+r).toString(16).padStart(2, '0')}${(+g).toString(16).padStart(2, '0')}${(+b).toString(16).padStart(2, '0')}`;
    } else {
        return color;
    }
}

// Theme color as background color
const theme_color = toHex(getComputedStyle(document.body).backgroundColor);

// create theme color meta tag if not exists

if (!document.querySelector('meta[name="theme-color"]')) {
    let meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme_color;
    document.head.appendChild(meta);
} else {
    document.querySelector('meta[name="theme-color"]').content = theme_color;
}

function removeClasses(element, class_name) {
    element.classList.forEach((class_) => {
        if (class_.includes(class_name)) {
            element.classList.remove(class_);
        }
    });
}