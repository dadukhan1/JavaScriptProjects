const data = [
    {
        id: '1',
        question: 'What is the capital of France?',
        answer: "The capital of France is Paris.",
    },
    {
        id: '2',
        question: 'How many continents are there?',
        answer: "There are seven continents on Earth: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
    },
    {
        id: '3',
        question: 'What is the tallest mountain in the world?',
        answer: "Mount Everest is the tallest mountain in the world, standing at 8,848.86 meters (29,031.7 feet) above sea level.",
    },
    {
        id: '4',
        question: 'Who invented the light bulb?',
        answer: "Thomas Edison is credited with inventing the light bulb, although several inventors contributed to its development.",
    },
    {
        id: '5',
        question: 'What is the boiling point of water?',
        answer: "The boiling point of water is 100°C (212°F) at sea level under normal atmospheric pressure.",
    },
    {
        id: '6',
        question: 'How far is the Earth from the Sun?',
        answer: "The Earth is about 93 million miles (150 million kilometers) away from the Sun, a distance referred to as 1 Astronomical Unit (AU).",
    },
];


const accordionWrapper = document.querySelector(".accordion")

const accordionWritter = () => {
    accordionWrapper.innerHTML = data.map((textt) =>
        `
        <div class="accordion_item">

        <div class="accordion_title">
        <h2>${textt.question}</h2>
        <i class="ri-arrow-down-line"></i>
        </div>

        <div class="accordion_content">
        <p>${textt.answer}</p>
        </div>

        </div>
        `
    ).join(' ')
}

accordionWritter();

let accordionTitle = document.querySelectorAll(".accordion_title")

accordionTitle.forEach(currentItem =>
    currentItem.addEventListener('click', () => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active')
        }
        else {
            let currentlyActive = document.querySelectorAll(".active")
            currentlyActive.forEach(currentItemActive => {
                currentItemActive.classList.remove('active')
            })
            currentItem.classList.add('active')
        }
    })
)
