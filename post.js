
var pos;
var a_post;
var a_comm=[ ];
var a_users=[ ];

/* //var log=[
    {
       : a_post,
     u : a_comm,
      u :  a_users
    }
 ]; */

//var storep=[];
var storep = new Object()
var users;



jQuery(document).on('click', 'button[id=getpost]', function ()
       
        {
            funpost();
            funcomm();
            funusers();
            //post_display();
            //load();
            
        });


function funpost()
    {
        
            /* $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
               //console.log("Data: " + data + "\nStatus: " + status);
               localStorage.post = JSON.stringify(data);
               a_post = JSON.parse(localStorage.post); */   //----- Easier
     
         jQuery.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                             
                    success: function (datap) //callback function and stores it as s_data"
                                    {
                                       localStorage.setItem('post',JSON.stringify(datap));
                                        // localStorage.post = JSON.stringify(data);
                                        a_post=datap;
                                       post_display();
                                       

                                        // a_post = JSON.parse(localStorage.post);
                                        // console.log(a_post);
                                        // console.log((a_post).length);
                                    },
                                    error: function (p_err)
                                    {
                                        console.log(p_err);
                                    }
                    });                
 
        }


function funcomm()
        {                                   
             jQuery.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: 'https://jsonplaceholder.typicode.com/comments',
                                 
                        success: function (datac) //callback function and stores it as s_data"
                                        {
                                            localStorage.post = JSON.stringify(datac);
                                            //a_comm = JSON.parse(localStorage.post);
                                            a_comm = datac;
                                            // console.log(a_comm);
                                            // console.log((a_comm).length);
                                        },
                                        error: function (c_err)
                                        {
                                            console.log(c_err);
                                        }
                        });                
     
            }

function funusers()
            {
            
                 jQuery.ajax({
                            type: 'GET',
                            dataType: 'json',
                            url: 'https://jsonplaceholder.typicode.com/users',
                                     
                            success: function (datau) //callback function and stores it as s_data"
                                            {
                                                localStorage.post = JSON.stringify(datau);
                                                //a_users = JSON.parse(localStorage.post);
                                                a_users = datau;
                                                // console.log(a_users);
                                                // console.log((a_users).length);
                                            },
                                            error: function (u_err)
                                            {
                                                console.log(u_err);
                                            }
                            });                
         
                }       

        function post_display()        
        {
            //console.log(a_post);
        //    if(a_post.id === a_comm.id)
        //    {
        //        alert("done");
           
        //    if(a_comm.id === a_users.id)
        //    {
        //     alert("done na");
        //    }
           
        
        if(a_post)
        {
            alert("here");
  
                var len =a_post.length ;
           
                var viewp = '';
            
                for (var i = 0; i < len; i++) 
                {   
                    
                    //console.log(a_users[i]);
                    viewp += `
                                <p id="p_${[i]}">
                                    <p id="box">
                                    
                                       USER:${a_post[i].userId} <br> 
                                       POST ID:${a_post[i].id} 
                                       <h2>${a_post[i].title}</h2>      
                                       <h3>${a_post[i].body}</h3>
                                    
                                    <p>
                                        <button id="btnv_${[i]}">More Details</button>
                                        <button id="btne_${[i]}">Edit</button>
                                        <button id="btnd_${[i]}">Delete</button>
                                        

                                    </p>
                                </p>

                            `;
                }
                // viewp += '</p>';
                jQuery('div#postview').html(viewp);


        }}

        function load()
        {

            console.log(log);
                    

        }
