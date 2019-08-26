let events = [];
let draftEventBasics = {};
const grid = $('.grid')[0];
// brojevi - placeholder za broj ikonica
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const eventBasicsForm = $('#eventBasic');
const severityForm = $('#severityForm');
const eventPlacement = $('#eventPlacement');
const iconForm = $('#iconForm');
const formsList = [eventBasicsForm, severityForm, eventPlacement, iconForm];
let current = 0;

function IEvent(name, alias, type, parentEvent, description) {
    this.name = name;
    this.alias = alias;
    this.type = type;
    this.parentEvent = parentEvent;
    this.description = description;

    return {
        name: this.name,
        alias: this.alias,
        type: this.type,
        parentEvent: this.parentEvent,
        description: this.description
    };
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
// getting the values from form - event_basics
function submitForm(form, event) {
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

    // adding new event by using constructor defined previously
    events.push(new IEvent(values[0], values[1], values[2], values[3], values[4]));

    // saving the draft event because this is under the draft button event click
    draftEventBasics = new IEvent(values[0], values[1], values[2], values[3], values[4]);
   event.preventDefault();
}
/******* CLICK EVENTS ******/

// creating draft Event

$('.draft-btn').click((e) => {
    e.preventDefault();

    // submitForm(formsList[index], e);
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


