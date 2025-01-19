"use strict";
//I did my lab just like Lewis because I don't quite understand JS yet. I turned this in for a grade. I will do more studying up when I answer the lab questions. If not I will ask for help.
const ul = document.getElementById("ul-all-numbers");
const numbers = [100, 456, 98, 45, 43, 73];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  ul.innerHTML += `<li>${number}</li>`;
}

const div = document.getElementById("even-numbers");
const newUl = document.createElement("ul");
div.appendChild(newUl);
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {
    div.innerHTML += `<li>${number} is even</li>`;
  }
}

function renderCard(dataArray) {
  const main = document.getElementById("main");
  for (let i = 0; i < dataArray.length; i++) {
    const blogPost = dataArray[i];
    let card = `
<div class="card">
  <div class="card-body">
    <h3 class="card-title">${blogPost.title}</h3>
    <p class="card-text">${blogPost.author}</p>
    <p class="card-text">${blogPost.date}</p>
  </div>
</div>
    `;

    main.innerHTML += card;
  }
}

let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
];

renderCard(blogPosts);

renderCard([blogPosts[0]]);

let fiveBlogPosts = [
  { id: 3, title: "Blog Post 3", author: "Author C", date: "2024-01-01" },
  { id: 4, title: "Blog Post 4", author: "Author D", date: "2024-02-01" },
  { id: 5, title: "Blog Post 5", author: "Author E", date: "2024-03-01" },
  { id: 6, title: "Blog Post 6", author: "Author F", date: "2024-04-01" },
  { id: 7, title: "Blog Post 7", author: "Author G", date: "2024-05-01" },
];

renderCard(fiveBlogPosts);

//AI helped with alot of this!
