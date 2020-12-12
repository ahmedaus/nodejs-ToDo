const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
var newItem=[];

app.get("/", function(req,res){
    var today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        // year: "numeric",
        day: "numeric"
    };
    var day2 = today.toLocaleDateString("en-us", options);
    // console.log(currentDate)
    // day="";


    // switch (currentDate) {
    //     case 0: 
    //     day="Sunday";
    //         break;

    //     case 1:
    //     day="Monday";
    //     break;

    //     case 2:
    //     day="Tuesday";
    //     break;
  
    //     case 3:
    //     day="Wednesday";
    //     break;

    //     case 4:
    //     day="Thursday";
    //     break;

    //     case 5:
    //     day="Friday";
    //     break;
        
    //     case 6:
    //     day="Saturday";
    //     break;
    // }
    
    // if (currentDate === 4 || currentDate === 1){
    //     day="Weekend";
    //     // res.write("<p>Hu huuuuuuu....</p>");
    //     // res.write("<h1>It's Weekend Lets do some Fun!!!</h1>");
    //     // res.send();
    // } else {
    //     day="Weekday";
    //     // res.write("<p>Oh No....</p>");
    //     // res.write("<h1>It's a Weekdays!! Ihave to Work!!!!</h1>");
    //     // res.send();
    // }
    res.render("lists", {myvar: day2, additem:newItem});
    // console.log(currentDate);
    // res.send("<h1>The Server is Running!!!</h1>");
});


app.post("/", function(req, res){
    newItem.push(req.body.item1);
    res.redirect("/");
    console.log(req.body.item1);
});

app.listen(3000, function(){
    console.log("Server is Connected to Port 3000.");
})