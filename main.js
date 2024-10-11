
const menu = document.getElementById('menu');
const intro_container = document.getElementById('intro-container');
const message = document.getElementById('message');
const contentDiv = document.getElementById('content');
let menuMoved = false;
const imageBox = document.getElementById('imageBox');
const textBox = document.getElementById('textBox');
const contentImage = document.getElementById('contentImage');
const contentText = document.getElementById('contentText');
const iconBox = document.getElementById('iconBox');
const education = document.getElementById('education');


function showContent(content) {

    intro_container.style.animation = "fadeOut 0.1s forwards";
    message.style.animation = "fadeOut 0.1s forwards";
    setTimeout(() => {
        intro_container.style.display = "none";
        message.style.display = "none";
    }, 500);

   
    if (!menuMoved) {
        menu.style.position = "relative";
        menu.style.marginTop = '10vh';
        menuMoved = true;
    }

    const sectionHeading = document.getElementById("section-heading");
    const iconBox = document.getElementById("icon-box");
    const text_education = `
    <p id="welcome" style = "text-align: center;">History of education</p>

    <p>First Language School, Varna - English and German</p>
    <div class="progress-bar-container">
        <h2>English C1</h2>
        <div class="progress-bar">
            <span class="percentage c"></span>
        </div>
    </div>
    <p>Currently learning German</p>
    
    <p>2018 - 2019 Sofia University - Informatics</p>
    <p>2019 - 2022 NBU - Informatics</p>
 
    <div>
        <h2 id="section-heading">Programming Languages:</h2>
        <ul>
            <li><b>C/C++, Java, Python</b>  Core development and problem-solving\n</li>
            <li><b>C#, PHP</b>  Backend, web, and desktop applications\n</li>
            <li><b>JavaScript, HTML, CSS</b>  Frontend web development\n</li>
            <li><b>SQL</b>  Database design and management\n</li>
            <li><b>Android Development</b>  Mobile application creation\n</li>
        </ul>
    
        <h2 id="section-heading">Core Competencies :</h2>
        <ul>
            <li><b>Data Structures and Algorithms</b> Building efficient, scalable solutions</li>
            <li><b>Object-Oriented Programming</b>  Designing robust systems using OOP principles</li>
            <li><b>UML</b>  Visualizing and structuring system designs</li>
            <li><b>Version Control</b> Git for collaborative development</li>
        </ul>
    
        <h2 id="section-heading">Development Practices:</h2>
        <ul>
            <li><b>UI/UX Design</b> Creating intuitive and user-friendly interfaces</li>
            <li><b>Testing & Debugging</b>  Ensuring code quality and performance</li>
            <li><b>Agile Methodologies</b> Experience working in iterative, flexible environments</li>
        </ul>
    
        <h2 id="section-heading">Mathematics & Logic:</h2>
        <ul>
            <li><b>Strong foundation</b> in discrete math, linear algebra, and problem-solving techniques</li>
        </ul>
    </div>`

    const paragraphs_skills = [
        "Collaborated with cross-functional teams to design and implement continuous integration and continuous delivery <b><span style='color: #c7c1c2! important;'> (CI/CD) pipelines using Jenkins,</span></b> enabling automated builds.",
        "Collaborated with development teams to establish effective branching and merging strategies in <b><span style='color: #c7c1c2! important;'> GitLab.</span></b>",
        "Developed <b><span style='color: #c7c1c2! important;'>Python scripts</span></b> to automate various processes.",
        "Developed test scripts using CAPL language, which is based on the popular <b><span style='color: #c7c1c2! important;'> C programming language</span></b>, to automate tests and validate communication protocols in CAN networks.",
        "Executed manual and automated test cases across various phases, including <b><span style='color: #c7c1c2! important;'>functional, regression, and performance testing.</span></b>",
        "Ensuring <b><span style='color: #c7c1c2! important;'>compliance with technical requirements.</span></b>",
        "Analyzing test results and generated comprehensive <b><span style='color: #c7c1c2! important;'> test execution reports.</span></b>",
        "Knowledge of some <b><span style='color: #c7c1c2! important;'> Java, Bash, Groovy and other languages.</span></b>",
        "Experience with ticketing systems such as <b><span style='color: #c7c1c2! important;'> Jira.</span></b>",
        "Familiarity with <b><span style='color: #c7c1c2! important;'>networking concepts and protocols.</span></b>",
        "Strong verbal and written communication skills.",
        "Effective time management and multitasking.",
        "Ability to work well in a team environment.",
        "Passion for problem-solving and finding creative solutions to complex issues."
    ];

    const paragraphs_about_me = [
        "I bring enthusiasm and positivity to the team, fostering a collaborative environment where everyone feels valued.",
        "Always ready to help, I enjoy sharing knowledge and supporting my teammates in overcoming challenges.",
        "With integrity and dedication, I strive for high-quality results while maintaining a positive attitude, even in tough situations.",
        "I embrace a growth mindset, constantly seeking to learn and improve, contributing to a dynamic team culture.",
        "Open communication is key for me, and I value constructive feedback to enhance teamwork.",
        "I love problem-solving and turning challenges into opportunities for growth and innovation.",
        "My adaptability allows me to fit into various roles, ensuring everyone's strengths are utilized effectively.",
        "Above all, I aim to create a positive work environment that boosts productivity and job satisfaction."
    ];


    // Join the paragraphs using a dot and a line break after each dot
    const formattedText_skills = paragraphs_skills.map(paragraph => `<p id = "textStyle">${paragraph}</p>`).join(' <img id ="icon2" src="static/code.png" alt="Tool 2" class="tool-icon">');
    
    const formattedText_about_me = paragraphs_about_me.map(paragraph => `<p id = "textStyle">${paragraph}</p>`).join(' <img id ="icon2" src="static/star.png" alt="Tool 2" class="tool-icon">');
    
    setTimeout(() => {

        contentDiv.style.display = 'flex';
        contentDiv.offsetHeight;
        contentDiv.classList.add('active');
        canvas.style.display = 'none';

        if (content === 'About Me') {
            sectionHeading.innerText = 'About Me: Why should I be your colleague?';
            contentImage.src = 'static/my_photo.jpg';
            iconBox.innerHTML = "";
            education.innerHTML = "";
            textBox.innerHTML = formattedText_about_me;
        } else if (content === 'Skills') {
         
            sectionHeading.innerText = 'Professional Skills';

            iconBox.innerHTML = `   <img id ="icon1" src="static/python.png" alt="Tool 1" class="tool-icon">
    <img id ="icon2" src="static/devops.png" alt="Tool 2" class="tool-icon">
    <img id ="icon3" src="static/gitlab.png" alt="Tool 3" class="tool-icon">
    <img id ="icon4" src="static/jira.png" alt="Tool 4" class="tool-icon">
    <img id ="icon5" src="static/c-.png" alt="Tool 4" class="tool-icon">`;
            education.innerHTML = "";

            contentImage.src = 'static/skills_coding.jpg';
            textBox.innerHTML = formattedText_skills;
        } else if (content === 'Passions') {
            sectionHeading.innerText = 'Passions';
            iconBox.innerHTML = `   <img id ="icon1" src="static/paint.png" alt="Tool 1" class="tool-icon">
    <img id ="icon2" src="static/knowledge.png" alt="Tool 2" class="tool-icon">
    <img id ="icon3" src="static/telescope.png" alt="Tool 3" class="tool-icon">
    <img id ="icon4" src="static/programming.png" alt="Tool 4" class="tool-icon">
    <img id ="icon5" src="static/cooking.png" alt="Tool 4" class="tool-icon">`;
            education.innerHTML = "";
            contentImage.src = 'static/passions.webp';
            textBox.innerHTML = '';
        } else if (content === 'Education') {
            sectionHeading.innerText = 'Education';
            iconBox.innerHTML = "";
            education.innerHTML = text_education;
            contentImage.src = 'static/education.webp';
            contentText.innerHTML = '';
            textBox.innerHTML = '';
        }
        
        contentDiv.style.opacity = 1;
    }, 500); 
}


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 170 + 170;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, this.size / 4, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 255, 0.05)');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(0, 0, 255, 0.1)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 6; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

window.onload = () => {
    init();
    animate();
};