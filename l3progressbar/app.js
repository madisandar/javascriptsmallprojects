var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = `https://linked.com`;

getdownloadbtn.addEventListener('click',function(){
    // console.log('i am working');
     getdownloadbtn.setAttribute('disabled',true);
     
     var setwidth = 0;
     
     var setinv = setInterval(progressinc,100);

     function progressinc(){
        if(setwidth >= 100){
            clearInterval(setinv);
            window.location.href=seturl;
            setwidth = 0;
        }else{
            setwidth++;

            getprogressbar.style.width=`${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
        }
     }

    
     
});
