const eventBasicsForm = $('#eventBasic');
const severityForm = $('#eventSeverity');
const eventPlacement = $('#eventPlacement');
const iconForm = $('#iconForm');
const formsList = [eventBasicsForm, severityForm, eventPlacement, iconForm];
let events = [];
let draftEvents = [];
let draftEventBasics;
let draftEventSeverity;
let event = {
    basic: draftEventBasics,
    severity: draftEventSeverity
}
let interfaces = [IEventBasic, IEventSeverity, IEventPlacement]
const grid = $('.grid')[0];
// brojevi - placeholder za broj ikonica
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];



let current = 0;

function IEventBasic(...values) {
    this.name = values[0];
    this.alias = values[1];
    this.type = values[2];
    this.parentEvent = values[3];
    this.description = values[4];

    return {
        name: this.name,
        alias: this.alias,
        type: this.type,
        parentEvent: this.parentEvent,
        description: this.description
    };
}
function IEventSeverity(levelOfSupport, userGroup, severity, automaticEscalation, criticalTimeHours, impact, autoCloseAfter) {
    this.levelOfSupport = levelOfSupport;
    this.userGroup = userGroup;
    this.severity = severity;
    this.automaticEscalation = automaticEscalation;
    this.criticalTimeHours = criticalTimeHours;
    this.impact = impact;
    this.autoCloseAfter = autoCloseAfter;

    return {
        levelOfSupport: this.levelOfSupport,
        userGroup: this.userGroup,
        severity: this.severity,
        automaticEscalation: this.automaticEscalation,
        criticalTimeHours: this.criticalTimeHours,
        impact: this.impact,
        autoCloseAfter: this.autoCloseAfter
    }

}
function IEventPlacement(...values) {
    this.area = values[0];
    this.frequency = values[1];
    this.checkpoint = values[2];

    return {
        area: this.area,
        frequency: this.frequency,
        checkpoint: this.checkpoint
    }
}
// function that dynamically fills in the grid on the page
function fillGrid(arr, element) {

    // loop through each element of the array and extract the value of it into new array 
    // set the innerHTML od unetog elementa kroz template string
    element.innerHTML = `
        ${arr.map((el, i) => {
        let img_path = `../assets/icons/Icons-1_05-${el}.png`;
        return `
                <label for="${el}" class="label_icons">
                <input type="checkbox" id="${el}" name="icon" value="${img_path}">
                
                    <img src="${img_path}" alt="icon"/>
                </label>
            `
    }).join('')}
    `;
}

function submitForm(form, obj) {
        // result - type Array - contains all the field elements inside of the form tag 
    let results = $(form).serializeArray();
    let values = [];
    // values - extracted values from result array
    results.forEach((el) => {
        values.push(el.value);
    });


    // adding new event by using constructor defined previously

    draftEvents.push(new obj(...values));
    console.log(draftEvents);
}
function selectButton(button, selector) {
    
    // $(`#${selector} label.active`).not(this).removeClass('active');
    $("#" + selector + "label.active").not(this).removeClass('active');
    $(`#${selector} label.btn-primary`).not(this).removeClass('btn-primary');
    $(button).addClass('btn-primary');
    $(button).addClass('active');
    $(button).children().prop('checked', true);
    console.log($(button).children());
}

// getting the values from form - event_basics
/******* CLICK EVENTS ******/
$('.save-draft-btn').click((e) => {
    e.preventDefault();
    submitForm(formsList[counter], interfaces[counter]);
});

$(".draft-btn").click((e) => {
    console.log(counter);
    submitForm(formsList[counter], interfaces[counter]);
    counter += 1;
    if (counter > 3) {
        counter = 3;
    }
    e.preventDefault();
});
// toggling active class on selected elements in button group fields

$('.type_event_buttons > label').click(function (e) {
    e.preventDefault();
    selectButton($(this), e.target.parentElement.id);
});
$('.support-buttons label').click(function (e) {
    e.preventDefault();
    selectButton($(this), e.target.parentElement.id);
});
$('.severity-buttons label').click(function (e) {
    e.preventDefault();
    selectButton($(this), e.target.parentElement.id);
});
$('.productivity-buttons label').click(function (e) {
    e.preventDefault();
    selectButton($(this), e.target.parentElement.id);
});
$('.frequency-buttons label').click(function (e) {
    selectButton($(this), e.target.parentElement.id)
})
$('.grid').on('click', 'label.label_icons', function (e) {
    $('label.label_icons').toggleClass('selected_element').siblings().removeClass('selected_element');
    console.log($(this))
});

// creating draft Event
let counter = 0;

$('.prev-button').click((e) => {
    counter -= 1;
    if (counter <= 0) {
        counter = 0;
    }
    console.log('counter: ', counter);
});




// $('.label_icons').click(function (e) {  
//     $(this).toggleClass('selected_element').siblings().removeClass('selected_element');
// });
// disabling auto slide from bootstrap carousel

/******* CLICK EVENTS END ******/

$('.carousel').carousel({
    interval: false,
    wrap: false,
    ride: false,
});



// calling the functions
fillGrid(brojevi, grid);


