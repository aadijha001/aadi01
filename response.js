function getBotResponse(input)
{

    var know ={
        "hi":"hello! How are you doing.",
        "what is going on":"final review for IWP poject",
        "what is your title":"It's Real Time Coding",
        "group members":"Aaditya Jha, Aniket Singh ,Saima shahnawaz, Masetty Preetham and Badhan Paul",
        "members":"Aaditya Jha, Aniket Singh ,Saima shahnawaz, Masetty Preetham and Badhan Paul",
        "capital of india":"Delhi",
        "capital of nepal":"Kathmandu",
        "when will fat start":" 13th of December 2021",
        "who are you":" I am a chatbot for Real Time coding",
        "programming languages":"python,c++,java,etc.",
        "haha":"It seems you are happy. Hope to have a wonderful time",
        "bye":"bye! Have a nice day",
        "Thank you":"My Pleasure!",
        "see you tomorrow":"See you soon. Have a nice day",
        "ai":"It Stands for Artificial Intelligence",
        "albert einstein":"If you can't explain it well enough you haven't understood it well enough",
        "god":"god is great",
        "make a wish":"Hope to be in college soon",
        "wish":"Hope to be in college soon",
        "i":"Hope to be in college soon",
        "hello":"hello! How are you doing.",
        "how are you doing":"Great! How about you",
        "fine":"Good to hear",
        "how are you":"Good! Thanks for asking",
        "good":"Nice to hear",
        "title":"Real Time Coding",
        "can you tell me a joke":"I told my physical therapist that I broke my arm in two places. He told me to stop going to those places.",
        "joke":"They all laughed when I said I wanted to be a comedian. Well, they're not laughing now! Wait…",
        "motivation":"It's Never too late to start. To make Best thing happen from now give your best from now. Nothing else is better",
        "how about you":"good! thanks for asking",
        "good how about you":"good! thanks for asking",
        "what are you doing":"chatting with you",
        "no of continents":"There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia (listed from largest to smallest in size).",
        "no of continents in world":"There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia (listed from largest to smallest in size).",
        "continents":"There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia (listed from largest to smallest in size).",
        "no of oceans":"According to NOAA, there are five ocean basins in the world - Arctic, Atlantic, Indian, Pacific, and Southern. However, there is only one Global Ocean.",
        "no of oceans in world":"According to NOAA, there are five ocean basins in the world - Arctic, Atlantic, Indian, Pacific, and Southern. However, there is only one Global Ocean.",
        "oceans":"According to NOAA, there are five ocean basins in the world - Arctic, Atlantic, Indian, Pacific, and Southern. However, there is only one Global Ocean.",
        "world population":"7.753 billion (2020)",
    }
    //common responses
    input = input.toLowerCase();
    if (input in know){
        return know[input];
    }
    else{
        return "Sorry! I didn't get it";
    }
}