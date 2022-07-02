let users = {
    "users": []
}

fetch('http://localhost:8000/users')
  .then(response => response.json())
  .then(data => {
    users.users = data.users
    console.log(users)
  });

  const userForm = document.getElementById('user')
  const userName = document.getElementById('username')
  const userPassword = document.getElementById('password')

  userForm.addEventListener('submit',(e)=>{
    
    const userNameValue = userName.value
    const passwordValue = userPassword.value
    for (let user of users.users){
        if(user.adminoruser = 1){
            if(user.username === userNameValue && passwordValue === user.password){
                console.log(user.username + " success")
                document.getElementById('user').action="http://localhost:3000/web.html"
                
             
                break
            }else{
                console.log("failed")
            }
        }
    }
    
  })


  const adminForm = document.getElementById('admin')
  const adminName = document.getElementById('adminname')
  const adminPassword = document.getElementById('adminpassword')

  adminForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const adminNameValue = adminName.value
    const adminpasswordValue = adminPassword.value
    for (let user of users.users){
        if(user.adminoruser = 0){
            if(user.username === adminNameValue && adminpasswordValue === user.password){
                console.log(user.username + " success")
                break
            }
        }
    }
    
  })

  



  let x = document.getElementById("user");
  let y = document.getElementById("admin");
  let z = document.getElementById("btn");

 function admin(){
  x.style.left = "-400px";
  y.style.left ="50px";
  z.style.left ="110px";
}
function user(){
  x.style.left = "50px";
  y.style.left ="450px";
  z.style.left ="0px";
}


            