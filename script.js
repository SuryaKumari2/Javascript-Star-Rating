const stars=document.querySelectorAll('.star');
const emojis=document.querySelectorAll('.emoji');
const feedbacks=document.querySelectorAll('.feedback');

// stars.forEach((star,index)=>{
//     star.addEventListener('click',()=>{
//         const rating=index+1;

//         stars.forEach((s,i)=>{
//             s.style.color=i<rating?'yellow':'grey'
//         });
//         emojis.forEach((emoji,j)=>{
//             emoji.style.display=j===index?'inline':'none'
//         });
//         feedbacks.forEach((feedback,k)=>{
//             feedback.style.display=k===index?'inline':'none'
//         })
//     })
// })


stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        const rating=index+1;

        stars.forEach((s,i)=>{
            s.style.color=i<rating?'yellow':'grey'
        })
        emojis.forEach((e,j)=>{
            e.style.display=j===index?'inline':'none'
        })
        feedbacks.forEach((f,k)=>{
            f.style.display=k===index?'inline':'none'
        })
    });
    
})