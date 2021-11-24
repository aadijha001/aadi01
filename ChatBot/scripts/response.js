function getBotResponse(input)
{

    var know ={
        "hi":"hello! How are you doing.",
        "what is going on":"final review for IWP poject",
        "what is your title":"It's Real Time Coding",
        "group members":"Aaditya Jha, Aniket Singh ,Saima shahnawaz, Masetty Preetham and Badhan Paul",
        "capital of India":"Delhi",
        "capital of Nepal":"Kathmandu",
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
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
    }
    //common responses
    if (input in know){
        return know[input];
    }
    else{
        return "Sorry! I didn't get it";
    }
}