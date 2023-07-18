//task1
    $('.con-item').click(function() {
      let newImageSrc = $(this).attr('src');
      $('.first-img').attr('src', newImageSrc);
    });


    //task2
    let source = [`images/img1.jpg`, `images/img2.jpg`, `images/img3.jpg`]
    console.log(source)
    let currentIndex = 0

    $(`.next`).click(function(){
      // for(let i=0; i< source.length; i++ ){
        // $(`.second-img`).attr(`src`,source[i])
      // }

      currentIndex ++;

      if(currentIndex >= source.length){
        currentIndex = 0
      }
    $(`.second-img`).attr(`src`,source[currentIndex])

    })

    $(`.pre`).click(function(){
      currentIndex --;
      if(currentIndex < 0){
        currentIndex = source.length -1;
      }
    $(`.second-img`).attr(`src`,source[currentIndex])

    })

    //task3
    function updateImage(){
    $(`.third-img`).attr(`src`,source[currentIndex])
    currentIndex ++

    //infinit loop  
    if (currentIndex >= source.length) {
      currentIndex = 0; 
    }
    //
  
    setTimeout(updateImage, 2000)
    }

    updateImage()

  