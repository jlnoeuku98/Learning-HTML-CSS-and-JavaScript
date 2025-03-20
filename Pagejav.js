// Course constructor function
function Course(department, number, title) {
    this.department = department;
    this.number = number;
    this.title = title;
}

// Get references to form elements
const departmentInput = document.getElementById('department');
const numberInput = document.getElementById('number');
const titleInput = document.getElementById('title');
const addCourseButton = document.getElementById('addCourseButton');
const courseContainer = document.getElementById('courseContainer');

// Add event listener to button
addCourseButton.addEventListener('click', () => {
    // Get input values
    const department = departmentInput.value.trim();
    const number = numberInput.value.trim();
    const title = titleInput.value.trim();

    // Validate inputs
    if (!department || !number || !title) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new course object
    const newCourse = new Course(department, number, title);

    // Create a div to display course information
    const courseDiv = document.createElement('div');
    courseDiv.style.marginBottom = '10px';
    courseDiv.textContent = `${newCourse.department} ${newCourse.number} - ${newCourse.title}`;
    
    // Append the course info to the container
    courseContainer.appendChild(courseDiv);

    // Clear inputs
    departmentInput.value = '';
    numberInput.value = '';
    titleInput.value = '';
});

//objects in javascript
var morehouse = {
    name: "Morehouse college",
    Location: "Atlanta",
    president: "David A. Thomas",
    year: 1867,
    //nested obsjects within an object
    colors:["Maroon","White"],
    course:{
        name: "Computer Science",
        department: "Science",
        duration: 4,
        level: "Undergraduate",
        courseCode: "HCSC 330",
        courseUnit: 3,
        courseLecturer: "David Brickler",
        courseDescription: "Web Programming and Development",
    },

    
};

console.log(morehouse);
console.log(morehouse.course.duration);
