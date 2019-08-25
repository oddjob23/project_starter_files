
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
let events = [];
let draftEvent = {};
$('#draft').click((e) => {
    let result = [];
    $('form').submit(function (event) {
        result = $(this).serializeArray();
        let values = []
        result.forEach((el) => {
            values.push(el.value);
        });
        events.push(new IEvent(values[0], values[1], values[2], values[3], values[4]));
        draftEvent = new IEvent(values[0], values[1], values[2], values[3], values[4]);
        console.log(draftEvent);
        event.preventDefault();
    });
    console.log(events);
});

$('.btn-group label').click(function (e) {
    e.preventDefault();
    $('.btn-group label.active').not(this).removeClass('active');
    $('.btn-group label.btn-primary').not(this).removeClass('btn-primary');
    $(this).addClass('btn-primary');
    $(this).addClass('active');
});


$('.carousel').carousel({
    interval: false
});
const grid = $('.grid')[0];
console.log(grid);
function fillGrid(arr, element) {
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

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];


fillGrid(brojevi, grid);
$('.label_icons').click(function (e) {  
    $(this).toggleClass('selected_element').siblings().removeClass('selected_element');
})
