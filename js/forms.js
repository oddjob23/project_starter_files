export default function submitEventBasicForm(form, event) {

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
    //     if (values[0] === "" || values[0] === undefined) {
    //         return -1;
    //    }
    // adding new event by using constructor defined previously
    events.push(new obj(...arguments));

    // saving the draft event because this is under the draft button event click
    draftEventBasics = new ojb(...arguments);
    event.preventDefault();
}

function submitForm(form, obj) {

    /*
     - call the function on submit event 
     - funkcija treba da uzme vrednosti za svako polje u formi
     - funkcija treba da extract samo values od input elemenata iz forme
     - funkcija treba da kreira novi objekat i da ga doda u listu vec kreiranih objekata
    */


    $(form).submit(function (e) {
        // result - type Array - contains all the field elements inside of the form tag 
        let results = form.serializeArray();
        let values = [];

        // values - extracted values from result array (each individual value field for form element (name, alias, type, parentEvent, description))
        results.forEach((el) => {

            values.push(el.value);
        });

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
    })



    console.log(`results: `, results);
    console.log(`values: `, values);

}


//    $(form).submit(function (e) {

        // result - type Array - contains all the field elements inside of the form tag 
        // let results = $(this).serializeArray();
        // let values = [];
        // values - extracted values from result array (each individual value field for form element (name, alias, type, parentEvent, description))
        // results.forEach((el) => {

        //     values.push(el.value);
        // });
        //     if (values[0] === "" || values[0] === undefined) {
        //         return -1;
        //    }

        //events.push(new obj(...values));

        // saving the draft event because this is under the draft button event click
       
        // e.preventDefault();
//    });