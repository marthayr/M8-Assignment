// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [123456,'Clark Kent',1234,'ckent@jla.com','Administrative'],
    [789999,'Kara Danvers',5678,'kdanvers@jla.com','Marketing'],
    [654321,'Diana Prince',4321,'dprince@jla.com','Executive'],
    [369121,'Bruce Wayne',8765,'bwayne@jla.com','Engineering'],
    [246810,'Barry Allen',1987,'ballen@jla.com','Sales']
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null){
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
let form  = document.getElementById('addForm');
let table = document.getElementById('empTable');
let empCount = document.getElementById('empCount');


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ =(id) => document.getElementById(id);

    let id          = $('id').value;
    let name        = $('name').value;
    let extension   = $('extension').value;
    let email       = $('email').value;
    let department  = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id,name,extension,email,department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(confirm('Are you sure you want to delete this employee?')){
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let row = e.target.parentNode.parentNode.row;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(row -1, 1);
        // BUILD THE GRID
        buildGrid();
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for(let info of employees){
        tbody.innerHTML += `<tr>
            <td>${info[0]}</td>
            <td>${info[1]}</td>
            <td>${info[2]}</td>
            <td>${info[3]}</td>
            <td>${info[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>`
    }

    // REBUILDING THE ROW STRUCTURE
    

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};





