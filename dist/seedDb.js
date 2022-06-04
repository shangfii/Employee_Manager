// Calling dbConnect module
const dbConnect = require('./dbConnect');

// Function for seeding my_company_db
const seedDB = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
     // Connect to database
    const db = await dbConnect();
    
    // Setting up mysql query
    var sql = "INSERT INTO department (name) VALUES ?";
    // Establishing var values content
    var values = [
        ['Engineering'],
        ['Sales'],
        ['Finance'],
        ['Production'],
        ['Legal']
    ];
    // running mysql query
    db.query(sql, [values], function (err, result) {
        if (err) throw err});

    // Setting up mysql query
    sql = "INSERT INTO role (title, salary, department_id) VALUES ?";
    // Establishing var values content
    values = [
        ["Sales Lead", 100000, 2],
        ["Salesperson", 80000, 2],
        ["Lead Engineer", 150000, 1],
        ["Software Engineer", 120000, 1],
        ["R&D Technician", 80000, 1],
        ["Account Manager", 160000, 3],
        ["Accountant", 125000, 3],
        ["Legal Team Lead", 250000, 5],
        ["Lawyer", 190000, 5],
        ["Production Manager", 150000, 4]
    ]
    // running mysql query
    db.query(sql, [values], function (err, result) {
        if (err) throw err});

    // Setting up mysql query
    sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?";
    // Establishing var values content
    values = [
        ["John", "Ross", 1, null],
        ["Mike", "Thomas", 2, 1],
        ["Asley", "Chan", 3, null],
        ["Kevin", "Rodriguez", 4, 3],
        ["Sunny", "Lee", 5, 3],
        ["Kunal", "Tupik", 6, null],
        ["Malia", "Singh", 7, 6],
        ["Sarah", "Brown", 8, null],
        ["Tom", "Lourd", 9, 8],
        ["Shang", "Celsius", 10, null]
    ]
    // running mysql query
    db.query(sql, [values], function (err, result) {
        if (err) throw err});
    
    // running navigate function
    navigate();
}
// Exporting seed function
module.exports = seedDB