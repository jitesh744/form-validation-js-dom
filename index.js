function createElementValue(element,value){
    var tag = document.createElement(element);
    tag.innerHTML = value;
    return tag
}

function createElement(element){
    var tag = document.createElement(element);
    return tag
}


function validateForm(event){
    formIds = ["first-name","last-name","address","pincode","state","country"]
    errorExists = false;
    formIds.forEach(element => {
        if(document.getElementById(element).value == ""){
            event.preventDefault();
            errorExists = true;
            errorId = element+"-error";
            document.getElementById(errorId).innerHTML = element + " is mandatory";
        }
    });

    let options = document.getElementById("food").options,count = 0;
    foodChoices = []
    for(let i = 0; i < options.length; i++){
        if(options[i].selected){
            foodChoices.push(options[i].value);
            count++;
        }
    }
    if(count < 2){
        event.preventDefault();
        errorExists = true;
        document.getElementById("food-error").innerHTML ="Please choose at least 2 items";
    }

    if(!errorExists){
        tableDiv = createElement('div');
        tableDiv.className = 'add-table-borders';
        table = createElement('table');
        table.className = 'table table-striped';
        theading = createElement('theading');
        tr = createElement('tr');
        headings = []
        formIds.forEach(element => {
            tr.append(createElementValue('th',element));
        });
        tr.append(createElementValue('th',"food"));
        headings.forEach(element => {
            tr.append(element);
        });
        table.append(tr);
        
        tr = createElement('tr');
        headings = []
        formIds.forEach(element => {
            tr.append(createElementValue('td',document.getElementById(element).value));
        });
        tr.append(createElementValue('td',foodChoices.join(",")));
        headings.forEach(element => {
            tr.append(element);
        });
        table.append(tr);
        tableDiv.appendChild(table);
        document.body.append(tableDiv);
    }

}