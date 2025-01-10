const footer_links = `
<div class="footer">
    <div class="rows">
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading" style="display: flex; gap: .3rem;">
                    My Pages
                </font>
                <a href="https://github.com/rtzg">ReTrn - Developer</a>
                <a href="https://chutm-sdl.web.app/">SDL Journals</a>
                <a onclick="pujs.alert('Not available now.')">Music Portfolio</a>
            </div>
        </div>
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading">
                    Learn More
                </font>
                <a href="/about/contact.html">Contact</a>
                <a href="/about/profile/knowledge.html">Knowledge</a>
                <a href="/about/profile/interests.html">Interests</a>
            </div>
        </div>
        <div class="cols">
            <div class="col">
                <span class="click-holder"></span>
                <font class="footer-heading">
                    Social Accounts
                </font>
                <a href="https://instagram.com/retrnp">Instagram</a>
                <a href="https://github.com/rtzg">GitHub</a>
                <a href="https://linkedin.com/in/retrn">LinkedIn</a>
            </div>
        </div>
    </div>
    <div class="space-break" data-height="2"></div>
</div>`

const copyright_info = `<p class="color-gray small">Copyright &copy; ${new Date().getFullYear()} Ming's. All rights reserved.</p>`;

const nav_links = `<a href="/about/">About</a>
<a  onclick="pujs.alert('Not available now.')">Music Portfolio</a>
<a href="https://chutm-sdl.web.app/">SDL Journals</a>
<a href="/about/contact.html">Contact</a>`;

document.querySelector('.nav-bar .nav-links').innerHTML = nav_links || '';

const drop_down_links = `
<span class="drop-down-module">
    <span class="title">About Me</span>
    <span class="links">${nav_links}</span>
</span>
<span class="drop-down-module">
    <span class="title">My Profile</span>
    <span class="links">
        <a href="/about/profile/knowledge.html">Knowledge</a>
        <a href="/about/profile/interests.html">Interests</a>
        <a href="/about/profile/achievements.html">Achievements</a>
    </span>
</span>
`;

pujs.setup.icons_path = '/assets/icons/';
pujs.setup.init();

const sheetViewContent = {
    'YouthMusicCamp2024': `
    <div class="sheet-body">
        <h1 style="transform: translateX(5rem);">Youth Music Camp 2024</h1>
        <img src="assets/photos/4-Aug-2024-mscampconcert.webp" alt="Youth Music Camp 2024">
        <p>
            The Youth Music Camp 2024 is a music camp for young 
            <br>musicians to learn and perform music together. 
            <br>
            <br>A week of music, fun, friendship,
            <br>and most importantly, feeling the joy of music.
            <br>
            <br>We practiced and performed 7 songs in 6 days.
            <br>
            <br>I personally love the song "Cantique de Jean Racine"
            <br>by Gabriel Fauré. It is a beautiful piece
            <br>that I have never sung before.
            <br>
            <br>I presented the gift to the conductor with another 
            <br>member at the end of the camp as shown in the photo.
        </p>
    </div>
    `,
    'MOeOrchConcert2024': `
    <div class="sheet-body">
        <h1 style="transform: translateX(5rem);">MO x e-Orch Concert 2024</h1>
        <img src="assets/photos/7-jul-2024-eorhconcert.webp" alt="MO x e-Orch Concert 2024"> 
        <p>
            The MO x e-Orch Concert 2024 is a collaboration 
            between the Music Office and the e-Orchestra by 
            different schools in Hong Kong.
            <br>
            <br>This is a project directed by the EdUHK.
            <br>
            <br>Although those e-Orch members are not professional
            but students with no music background, they have
            worked hard with passion to perform the music.
            <br>
            <br>It is a great experience to work with them. As
            a singer, it's my first time to sing with an
            "orchestra" like this. It's memorable to collaborate with other singers and the conductor.
    `,
    'certABRSM': `
    <div class="sheet-body left">
        <h1>Certifying Organisation: ABRSM</h1>
        <p class="no-pushing">
            ABRSM is the most taken music examination in the world.
        </p>
        <div class="button-group">
            <a class="no-decoration" href="https://gb.abrsm.org/en/">
                <button class="arrow-btn small">ABRSM Website</button>
            </a>
            <a class="no-decoration" href="https://en.wikipedia.org/wiki/Associated_Board_of_the_Royal_Schools_of_Music">
                <button class="arrow-btn small">Wikipedia</button>
            </a>
        </div>
    </div>
    `,
    'certHKSMSA': `
    <div class="sheet-body left">
        <h1>Certifying Organisation: Hong Kong Schools Music Festival</h1>
        <p class="no-pushing">
            The Hong Kong Schools Music Festival is the largest competition for students in Hong Kong.
        </p>
        <div class="button-group">
            <a class="no-decoration" href="https://www.hksmsa.org.hk/en/">
                <button class="arrow-btn small">HKSMSA Website</button>
            </a>
        </div>
    </div>`
};

let btn_element;

function sheetView(id, e = void 0, replacers = {}) {
    if (e != void 0) {
        btn_element = e.querySelector('button');

        btn_element.classList.add('active');
        pujs.setup.todo.pullOut.ending = () => {
            btn_element.classList.remove('active');
        };
    }
    let content = sheetViewContent[id];
    if (replacers) {
        for (const key in replacers) {
            content = content.replaceAll(`{${key}}`, replacers[key]);
        }
    }
    pujs.pullOut(content, false, { closeButton: true, });
}