var getdownloadbtn = document.querySelector('.download-btn');
var progressbar = document.querySelector('.progress-bar');
var seturl = `https://google.com`;

getdownloadbtn.addEventListener('click',function(){
    // console.log('i am working');

    getdownloadbtn.setAttribute('disabled',true);

    var setwidth = 0;

    var setinv = setInterval(progressinc,100);

   function progressinc(){
    if(setwidth >= 100){
        clearInterval(setinv);
        setwidth = 0;
        window.location.href = seturl;
    }else{
        setwidth++;
    }

    // console.log(setwidth);
      progressbar.style.width = `${setwidth}%`;
      progressbar.setAttribute('data-inc',`${setwidth}%`);
   }
})