

let events = [];
let draftEventBasics;
let draftEventSeverity;
let event = {
    basic: draftEventBasics,
    severity: draftEventSeverity
}
let interfaces = [IEventBasic, IEventSeverity]
const grid = $('.grid')[0];
// brojevi - placeholder za broj ikonica
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const eventBasicsForm = $('#eventBasic');
const severityForm = $('#eventSeverity');
const eventPlacement = $('#eventPlacement');
const iconForm = $('#iconForm');
const formsList = [eventBasicsForm, severityForm, eventPlacement, iconForm];
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

function submitForm(form, e, obj) {

    /*
     - call the function on submit event 
     - funkcija treba da uzme vrednosti za svako polje u formi
     - funkcija treba da extract samo values od input elemenata iz forme
     - funkcija treba da kreira novi objekat i da ga doda u listu vec kreiranih objekata
    */

    // result - type Array - contains all the field elements inside of the form tag 
    let results = form.serializeArray();
    let values = [];

    // values - extracted values from result array (each individual value field for form element (name, alias, type, parentEvent, description))
    results.forEach((el) => {

        values.push(el.value);
    });
    console.log(`results: `, results);
    console.log(`values: `, values);
    //     if (values[0] === "" || values[0] === undefined) {
    //         return -1;
    //    }
    // adding new event by using constructor defined previously
    //events.push(new obj(...values));

    // saving the draft event because this is under the draft button event click
    // draftEventBasics = new obj(...values);
    // event.basic = draftEventBasics;
    // event.severity = draftEventSeverity;
    e.preventDefault();
}
// getting the values from form - event_basics
/******* CLICK EVENTS ******/

// creating draft Event
let counter = 0;
$('.save-draft-btn').click((e) => {
    submitForm(formsList[counter], e, interfaces[counter]);
    console.log(event.basic);
})
$(".draft-btn").click((e) => {
    e.preventDefault();
    submitForm(formsList[counter], e, interfaces[counter]);
    counter++
    if (counter > 3) {
        counter = 0;
    }
    console.log(events);
});
$('.prev-button').click((e) => {
    counter--;
    if (counter <= 0) {
        counter = 0;
    }
    console.log('counter: ', counter);
});

// toggling active class on selected elements in button group fields
$('.type_event_buttons label').click(function (e) {
    e.preventDefault();
    $('.btn-group label.active').not(this).removeClass('active');
    $('.btn-group label.btn-primary').not(this).removeClass('btn-primary');
    $(this).addClass('btn-primary');
    $(this).addClass('active');
    $(this).children().prop('checked', true);
});


$('.label_icons').click(function (e) {  
    $(this).toggleClass('selected_element').siblings().removeClass('selected_element');
});
// disabling auto slide from bootstrap carousel

/******* CLICK EVENTS END ******/

$('.carousel').carousel({
    interval: false,
    wrap: false,
    ride: false,
});



// calling the functions
fillGrid(brojevi, grid);


