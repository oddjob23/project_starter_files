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