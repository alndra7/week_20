const content = document.getElementById('content');
const input = document.getElementById('input');
const form = document.getElementById('form');  
const button = document.getElementById('button');
const select = document.getElementById('select');


button.onclick = async function (e) {
    e.preventDefault();

    try {
        const response = await fetch(`https:swapi.dev/api/${select.value}/${input.value}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json()

        let newPost = '';
        newPost += `<h2>Name:</h2>
        <div>${data.name}</div>`
        
        content.innerHTML = newPost;

    } catch (err) {
        console.log(err);
        content.innerHTML = `<h2 style="color: red;">Error 404</h2>`
    }
    finally {
        form.reset()
    }
};
