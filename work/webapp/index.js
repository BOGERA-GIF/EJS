import express from "express";

const app = express();
const port = 3000;


app.get("/", (req ,res) => {
    const today = new Date("June 24 , 2023 11:13:00");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard ";

    if  (day == 0 || day == 6) {
        type = "the weekend";
        adv = "it's time to play " ;
    }

   // console.log(day);
    res.render("index.ejs" , 
    {dataType: type,
    advice: adv,
});
});
app.listen(port, () => {
    console.log("server running on port 3000.")
});