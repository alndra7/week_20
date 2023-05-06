# week_20

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//       data.forEach(element => {
//         const newPost = document.createElement('div');

//         newPost.innerHTML = (`<h2>${element.title}</h2>
//         <div>${element.body}</div>`);
        
//         content.appendChild(newPost);
//       }); 
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Use the data as needed
  } catch (error) {
    console.error(error);
  }
}