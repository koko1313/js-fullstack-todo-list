const request = (type, success) => {
    $.ajax({
        url: "http://localhost:3000",
        type: type,
        dataType: "json",
        headers: {
            "Access-Control-Allow-Origin": "*" // enable cross requests
        },
        success: success,
        error: () => {
            console.log("Something went wrong");
        }
    });
}

const makeRequest = () => {
    request("GET", (res) => {
        document.getElementById("myDiv").innerHTML = res.message;
    });
};