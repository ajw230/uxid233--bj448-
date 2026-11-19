const zodiac_signs = [
    {
        start_month: 12,
        start_day: 22,
        name: "Pansy",
        end_month: 1,
        end_day: 19,
        sound: "audio/capricorn.mp3",
        image: "flowers/capricorn.jpg",
        description: "Strong, determined and resilient."
    },
    {
        start_month: 1,
        start_day: 20,
        name: "Orchid",
        end_month: 2,
        end_day: 18,
        sound: "audio/aquarius.mp3",
        image: "flowers/aquarius.jpg",
        description: "Independent, distinctive, and unconventional."
    },
    {
        start_month: 2,
        start_day: 19,
        name: "Water Lily",
        end_month: 3,
        end_day: 20,
        sound: "audio/pisces.mp3",
        image: "flowers/pisces.jpg",
        description: "Compassionate, artistic, and intuitive."
    },
    {
        start_month: 3,
        start_day: 21,
        name: "Honeysuckle",
        end_month: 4,
        end_day: 19,
        sound: "audio/aries.mp3",
        image: "flowers/aries.jpg",
        description: "Energetic, confident, and bold."
    },
    {
        start_month: 4,
        start_day: 20,
        name: "Rose",
        end_month: 5,
        end_day: 20,
        sound: "audio/taurus.mp3",
        image: "flowers/taurus.jpg",
        description: "Beautiful, luxurious, and sensual."

    },
    {
        start_month: 5,
        start_day: 21,
        name: "Lavender",
        end_month: 6,
        end_day: 20,
        sound: "audio/gemini.mp3",
        image: "flowers/gemini.jpg",
        description: "Adaptable, versatile, and expressive."
    },
    {
        start_month: 6,
        start_day: 21,
        name: "White Rose",
        end_month: 7,
        end_day: 22,
        sound: "audio/cancer.mp3",
        image: "flowers/cancer.jpg",
        description: "Caring, soft, and protective."
    },
    {
        start_month: 7,
        start_day: 23,
        name: "Sunflower",
        end_month: 8,
        end_day: 22,
        sound: "audio/leo.mp3",
        image: "flowers/leo.jpg",
        description: "Confident, generous, and enthusiastic."
    },
    {
        start_month: 8,
        start_day: 23,
        name: "Chrysanthemum",
        end_month: 9,
        end_day: 22,
        sound: "audio/virgo.mp3",
        image: "flowers/virgo.jpg",
        description: "Practical, detailed, and analytical."
    },
    {
        start_month: 9,
        start_day: 23,
        name: "Pink Rose",
        end_month: 10,
        end_day: 22,
        sound: "audio/libra.mp3",
        image: "flowers/libra.jpg",
        description: "Elegant, beautiful, and balanced."
    },
    {
        start_month: 10,
        start_day: 23,
        name: "Dark Red Geranium",
        end_month: 11,
        end_day: 21,
        sound: "audio/scorpio.mp3",
        image: "flowers/scorpio.jpg",
        description: "Passionate, intense, and mysterious."
    },
    {
        start_month: 11,
        start_day: 22,
        name: "Carnation",
        end_month: 12,
        end_day: 21,
        sound: "audio/sagittarius.mp3",
        image: "flowers/sagittarius.jpg",
        description: "Adventurous, optimistic, and energetic."
    }
];

const output = document.querySelector('#output')
const sign_display = document.querySelector('#sign-display')
const button = document.querySelector('#search')
const date_input = document.querySelector('#birth-date')
const flower_image = document.querySelector('#flower-image')
const flower_description = document.querySelector('#flower-description')
function show_zodiac_flower() {
   
    console.log(`Showing zodiac flower for clicked zodiac sign`);
}
function open_help_screen() {
    console.log(`Opening help screen`);
}
function save_last_sign() {
    console.log(`Saving last clicked zodiac sign`);
}
function show_result(zodiac_flower) {
    output.textContent =
        "Your Zodiac flower is: " +
        zodiac_flower.name;

    flower_image.src =
        zodiac_flower.image;
    flower_image.alt = zodiac_flower.name;

    flower_description.textContent =
        zodiac_flower.description;

    play_zodiac_sound(zodiac_flower);
}

open_help_screen();
save_last_sign();

for (let i = 0; i < zodiac_signs.length; i++) {
    console.log(`${i+1}. ${zodiac_signs[i].name}`)
};

function get_zodiac_flower(month_get, date_get) {
    for (const zodiac_sign of zodiac_signs) {
    const start_m_d = month_get === zodiac_sign.start_month && date_get >= zodiac_sign.start_day;
    const end_m_d = month_get === zodiac_sign.end_month && date_get <= zodiac_sign.end_day;
    if (start_m_d || end_m_d) {
        return zodiac_sign;
    }
    }
    return null;
}

button.addEventListener('click', function() {
    const selected_date = new Date(date_input.value);
    const date_get = selected_date.getDate();
    const month_get = selected_date.getMonth() + 1; 
    const zodiac_flower = get_zodiac_flower(month_get, date_get);
    output.textContent = zodiac_flower ? `Your zodiac flower is: ${zodiac_flower.name}` : 'No zodiac flower found for this date.';
    if (zodiac_flower) {
        flower_image.src = zodiac_flower.image;
        flower_image.alt = zodiac_flower.name;
        flower_description.textContent = zodiac_flower.description;
        play_zodiac_sound(zodiac_flower);
    } else {
        flower_image.src = '';
        flower_image.alt = '';
        flower_description.textContent = 'No zodiac flower found for this date.';
    }
});

console.log(get_zodiac_flower(12, 25)); // Output: Pansy
console.log(get_zodiac_flower(1, 15)); // Output: Pansy




zodiac_signs.forEach(zodiac_sign => {
    const button = document.createElement('button');

    button.textContent = zodiac_sign.name;
    button.classList.add('zodiac-button');

    button.addEventListener('click', () => {
        show_result(zodiac_sign);
    });

    sign_display.appendChild(button);
});

const all_sounds = [];
for (const zodiac_sign of zodiac_signs) {
    const audio = new Audio(zodiac_sign.sound);

    zodiac_sign.audio = audio;
    all_sounds.push(audio);
}

function stop_all_sounds() {
    for (const audio of all_sounds) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function play_zodiac_sound(zodiac_flower) {
    stop_all_sounds();
    zodiac_flower.audio.play();
}
