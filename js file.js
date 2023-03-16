const getData = async () => {
    var result = await
        fetch("https://jsonplaceholder.typicode.com/users");
    var data = await result.json();
    console.log(data);
};

getData();