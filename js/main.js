// Defining counters as global variables, because they must be updated each time a function is called
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
// Defining arrays to store users times, each one is seeded with 2 elements b/c the leveltimes function needs an array of atleast 2 elements
var level1array = [1000, 1000];
var level2array = [1000, 1000];
var level3array = [1000, 1000];
var level4array = [1000, 1000];
var level5array = [1000, 1000];

// calls the leveltimes function upon the loading of the window
window.onload = leveltimes


// this function solves the smallest element in each array and sends it to the html
// dyanimcally updating the fastest completion time of each level
function leveltimes() {
    // length of array minus 1
    var len1 = level1array.length - 1;
    // initializing variable to store fastest time for level 1
    var level1Fastest = 0
    // for loop to go through each element in array, notice that array must have 2 elemenets
    for(var i = 0; i < len1; i = i + 1) {
        // if statement to determine which element is smallest in array
        if(level1array[i] < level1array[i + 1]) {
            level1Fastest = level1array[i];
        } else {
            level1Fastest = level1array[i + 1]
        }
    }
    // sending the fastest time to the html to be displayed on the leaderboard
    $("#level1leader").text("Fastest Level 1 Time: " + level1Fastest + "s");

    // similar logic below for the array of each level
    
    var len2 = level2array.length - 1;
    var level2Fastest = 0
    for(var i = 0; i < len2; i = i + 1) {
        if(level2array[i] < level2array[i + 1]) {
            level2Fastest = level2array[i];
        } else {
            level2Fastest = level2array[i + 1];
        }
    }
    $("#level2leader").text("Fastest Level 2 Time: " + level2Fastest + "s");

    var len3 = level3array.length - 1;
    var level3Fastest = 0
    for(var i = 0; i < len3; i = i + 1) {
        if(level3array[i] < level3array[i + 1]) {
            level3Fastest = level3array[i];
        } else {
            level3Fastest = level3array[i + 1];
        }
    }
    $("#level3leader").text("Fastest Level 3 Time: " + level3Fastest + "s");

    var len4 = level4array.length - 1;
    var level4Fastest = 0
    for(var i = 0; i < len4; i = i + 1) {
        if(level4array[i] < level4array[i + 1]) {
            level4Fastest = level4array[i];
        } else {
            level4Fastest = level4array[i + 1];
        }
    }
    $("#level4leader").text("Fastest Level 4 Time: " + level4Fastest + "s");

    var len5 = level5array.length - 1;
    var level5Fastest = 0
    for(var i = 0; i < len5; i = i + 1) {
        if(level5array[i] < level5array[i + 1]) {
            level5Fastest = level5array[i];
        } else {
            level5Fastest = level5array[i + 1];
        }
    }
    $("#level5leader").text("Fastest Level 5 Time: " + level5Fastest + "s");
}

// random number generator for number between 0 and 88
function num0to88() {
    var num = ((Math.random()*88) + 1);
    return num;
}

// random number generator for number between 0 and 78
function num0to78() {
    var num = ((Math.random()*78) + 1);
    return num;
}

//function that is calle when the level button is clicked
function level1() {
    // initializing date variable to begin timer with
    start = new Date();
    // changing the gradient that is displayed on the background in the css
    $("body").css("background-image", "linear-gradient(to right, goldenrod, chartreuse)");
    // hidiing the game instructions
    $("#instructions").hide();
    // hidiing the level buttons 
    $(".buttons").hide();
    $("#sqaure").css("display", "inline");
    // making the sqaure from level 1 visible 
    $("#timer").css("display", "inline");
    // making the timer visible
    $("#leaderboard").css("display", "none");
    // hiding the leaderboard
    setInterval(function(){$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
    // beginning the timer 
}

//similar logic for the next levels below

function level2() {
    start = new Date();
    $("body").css("background-image", "linear-gradient(to left, rebeccapurple, mediumslateblue");
    $("#instructions").hide();
    $(".buttons").hide();
    $("#sqaure2").css("display", "inline");
    $("#timer").css("display", "inline");
    $("#leaderboard").css("display", "none");
    setInterval(function(){$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);

}

function level3() {
    start = new Date();
    $("body").css("background-image", "linear-gradient(to right, red, tomato");
    $("#instructions").hide();
    $(".buttons").hide();
    $("#sqaure3").css("display", "inline");
    $("#timer").css("display", "inline");
    $("#leaderboard").css("display", "none");
    setInterval(function(){$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
}

function level4() {
    start = new Date();
    $("body").css("background-image", "linear-gradient(to right, turquoise, violet");
    $("#instructions").hide();
    $(".buttons").hide();
    $("#sqaure4").css("display", "inline");
    $("#timer").css("display", "inline");
    $("#leaderboard").css("display", "none");
    setInterval(function(){$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
}

function level5() {
    start = new Date();
    $("body").css("background-image", "radial-gradient(circle, cornflowerblue, darkseagreen, crimson");
    $("#instructions").hide();
    $(".buttons").hide();
    $("#sqaure5").css("display", "inline");
    $("#timer").css("display", "inline");
    $("#leaderboard").css("display", "none");
    setInterval(function(){$("#timer").text(parseInt((new Date() - start) / 1000) + "s");}, 1000);
}

// function for the sqaure button in level 1
function button() {
    // incrementing the counter each time the sqaure is clicked
    counter = counter + 1;
    // if statement to ensure the level ends after 100 clicks
    if (counter < 101) {
        // uses random number generators to shift button around the screen as veiwport percentages each time it is clicked
        $("#sqaure").css("left", num0to88() + "vw");
        $("#sqaure").css("top", num0to78() + "vh");
        // else statement below ends the level
    } else {
        // hides the sqaure button
        $("#sqaure").css("display", "none");
        // hides the timer
        $("#timer").css("display", "none");
        // calcualtes and displays the time the user took
        $("#time").text(parseInt((new Date() - start) / 1000) + "s");
        // makes the output div visible
        $("#output").css("display", "inline");
        // makes leaderboard visible
        $("#leaderboard").css("display", "inline");
        // stores the time taken in a variable
        var timeTaken = $("#time").text();
        // sends the time taken to the level 1 array
        level1array.push(parseInt((new Date() - start) / 1000));
        // calls the leveltimes function to update the fastest time for each level with new level time from user
        leveltimes();
        // resets the counter variable to 0
        counter = 0;
    }
}


// similar logic below for the button on each level
function button2() {
    counter2 = counter2 + 1;
    if (counter2 < 101) {
        $("#sqaure2").css("left", num0to88() + "vw");
        $("#sqaure2").css("top", num0to78() + "vh");
    } else {
        $("#sqaure2").css("display", "none");
        $("#timer").css("display", "none");
        $("#time").text(parseInt((new Date() - start) / 1000) + "s");
        $("#output").css("display", "inline");
        $("#leaderboard").css("display", "inline");
        var timeTaken = $("#time").text();
        level2array.push(parseInt((new Date() - start) / 1000));
        leveltimes();
        counter2 = 0;
    }
}

function button3() {
    counter3 = counter3 + 1;
    if (counter3 < 101) {
        $("#sqaure3").css("left", num0to88() + "vw");
        $("#sqaure3").css("top", num0to78() + "vh");
    } else {
        $("#sqaure3").css("display", "none");
        $("#timer").css("display", "none");
        $("#time").text(parseInt((new Date() - start) / 1000) + "s");
        $("#output").css("display", "inline");
        $("#leaderboard").css("display", "inline");
        var timeTaken = $("#time").text();
        level3array.push(parseInt((new Date() - start) / 1000));
        leveltimes();
        counter3 = 0;
    }
}

function button4() {
    counter4 = counter4 + 1;
    if (counter4 < 101) {
        $("#sqaure4").css("left", num0to88() + "vw");
        $("#sqaure4").css("top", num0to78() + "vh");
    } else {
        $("#sqaure4").css("display", "none");
        $("#timer").css("display", "none");
        $("#time").text(parseInt((new Date() - start) / 1000) + "s");
        $("#output").css("display", "inline");
        $("#leaderboard").css("display", "inline");
        var timeTaken = $("#time").text();
        level4array.push(parseInt((new Date() - start) / 1000));
        leveltimes();
        counter4 = 0;
    }
}

function button5() {
    counter5 = counter5 + 1;
    if (counter5 < 101) {
        $("#sqaure5").css("left", num0to88() + "vw");
        $("#sqaure5").css("top", num0to78() + "vh");
    } else {
        $("#sqaure5").css("display", "none");
        $("#timer").css("display", "none");
        $("#time").text(parseInt((new Date() - start) / 1000) + "s");
        $("#output").css("display", "inline");
        $("#leaderboard").css("display", "inline");
        var timeTaken = $("#time").text();
        level5array.push(parseInt((new Date() - start) / 1000));
        leveltimes();
        counter5 = 0;
    }
}

// functiom to be called when user clicks continue after finishing a level
function next() {
    // resets the background of the homepage to what it originally was
    $("body").css("background-image", "linear-gradient(to right, springgreen, steelblue)")
    // makes the level buttons visible again
    $(".buttons").show();
    // makes instructions visible again
    $("#instructions").show();
    // hides the output that is displayed after completing a level
    $("#output").css("display", "none");
}
