async function callstack() {
    try {
        let a = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Changed URL
        
        // Check if response is OK (status 200-299)
        if (!a.ok) {
            throw new Error(`HTTP error! status: ${a.status}`);
        }

        let data = await a.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

callstack();
