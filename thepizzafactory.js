let arr=[];
document.getElementById("submit").addEventListener('click',(e)=>{
    e.preventDefault();
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message=  document.getElementById("message").value;
    let data={
        name: name,
        email: email,
        message: message
    }
    fetch("http://localhost:4000/feedback1.pizzafac",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
});

document.getElementById("submit").addEventListener('click',()=>{

    alert('Thank you for your feedback!');
    document.getElementById("feedbackform").reset();
   });
// document.getElementById("submit").addEventListener('click',()=>{
//     document.getElementById("feedbackform").reset();
// });