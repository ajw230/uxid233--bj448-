console.log("Hello, World, welcome to a new day!");

const zodiac_signs = [
    {
        start_month: 12,
        start_day: 22,
        name: "Pansy",
        end_month: 1,
        end_day: 19,
        sound: "audio/capricorn.mp3",
        image: "images/capricorn.png",
        Description: "Strong, determined and resilient."
    },
    {
        start_month: 1,
        start_day: 20,
        name: "Orchid",
        end_month: 2,
        end_day: 18,
        sound: "audio/aquarius.mp3",
        image: "images/aquarius.png",
        Description: "Independent, distinctive, and unconventional."
    },
    {
        start_month: 2,
        start_day: 19,
        name: "Water Lily",
        end_month: 3,
        end_day: 20,
        sound: "audio/pisces.mp3",
        image: "images/pisces.png",
        Description: "Compassionate, artistic, and intuitive."
    },
    {
        start_month: 3,
        start_day: 21,
        name: "Honeysuckle",
        end_month: 4,
        end_day: 19,
        sound: "audio/aries.mp3",
        image: "images/aries.png",
        Description: "Energetic, confident, and bold."
    },
    {
        start_month: 4,
        start_day: 20,
        name: "Rose",
        end_month: 5,
        end_day: 20,
        sound: "audio/taurus.mp3",
        image: "images/taurus.png",
        Description: "Beautiful, luxurious, and sensual."

    },
    {
        start_month: 5,
        start_day: 21,
        name: "Lavender",
        end_month: 6,
        end_day: 20,
        sound: "audio/gemini.mp3",
        image: "images/gemini.png",
        Description: "Adaptable, versatile, and expressive."
    },
    {
        start_month: 6,
        start_day: 21,
        name: "White Rose",
        end_month: 7,
        end_day: 22,
        sound: "audio/cancer.mp3",
        image: "images/cancer.png",
        Description: "Protective, soft, and protective."
    },
    {
        start_month: 7,
        start_day: 23,
        name: "Sunflower",
        end_month: 8,
        end_day: 22,
        sound: "audio/leo.mp3",
        image: "images/leo.png",
        Description: "Confident, generous, and enthusiastic."
    },
    {
        start_month: 8,
        start_day: 23,
        name: "Chrysanthemum",
        end_month: 9,
        end_day: 22,
        sound: "audio/virgo.mp3",
        image: "images/virgo.png",
        Description: "Practical, detailed, and analytical."
    },
    {
        start_month: 9,
        start_day: 23,
        name: "Pink Rose",
        end_month: 10,
        end_day: 22,
        sound: "audio/libra.mp3",
        image: "images/libra.png",
        Description: "Elegant, beautiful, and balanced."
    },
    {
        start_month: 10,
        start_day: 23,
        name: "Dark Red Geranium",
        end_month: 11,
        end_day: 21,
        sound: "audio/scorpio.mp3",
        image: "images/scorpio.png",
        Description: "Passionate, intense, and mysterious."
    },
    {
        start_month: 11,
        start_day: 22,
        name: "Carnation",
        end_month: 12,
        end_day: 21,
        sound: "audio/sagittarius.mp3",
        image: "images/sagittarius.png",
        Description: "Adventurous, optimistic, and energetic."
    }
];
function find_zodiac_sign() {
    console.log(`Finding zodiac flower based on birthday`);
}
function show_zodiac_flower() {
    console.log(`Showing zodiac flower for clicked zodiac sign`);
}
function play_zodiac_sound() {
    console.log(`Playing zodiac sound for clicked zodiac sign`);
}
function show_zodiac_description() {
    console.log(`Showing zodiac description for clicked zodiac sign`);
}
function open_help_screen() {
    console.log(`Opening help screen`);
}
function save_last_sign() {
    console.log(`Saving last clicked zodiac sign`);
}

find_zodiac_sign();
show_zodiac_flower();
play_zodiac_sound();
show_zodiac_description();
open_help_screen();
save_last_sign();