document.addEventListener('DOMContentLoaded', function() {
  const courses = [
    { id: 1, title: 'Introduction to HTML', description: 'Learn the basics of HTML.' },
    { id: 2, title: 'Introduction to CSS', description: 'Learn the basics of CSS.' },
    { id: 3, title: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript.' }
  ];

  const courseList = document.getElementById('course-list');

  // Populate course listings
  courses.forEach(course => {
    const listItem = document.createElement('li');
    listItem.classList.add('course-item');
    listItem.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;
    listItem.addEventListener('click', function() {
      // Redirect to course detail page
      window.location.href = `course.html?id=${course.id}`;
    });
    courseList.appendChild(listItem);
  });
});
