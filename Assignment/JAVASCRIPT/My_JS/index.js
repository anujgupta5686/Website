const circular_slider = document.querySelector('.wrapper'),
         chacater_name= document.querySelector('.chacater-name'),
            slides = document.querySelectorAll('.slides'),
            description_items = document.querySelectorAll('.description_item'),
            images = document.querySelectorAll('.slides img');
        slides.forEach((slide, i) => {

            slide.onclick = () => {
                circular_slider.style.transform = `rotateZ(-${360 / 5 * (i+4)}deg)`;
                chacater_name.classList.remove('active');
                
                setTimeout(()=>{
                    chacater_name.textContent=description_items[i].querySelector('h2').textContent;
                    chacater_name.classList.add('active');
                },800)
                


                images.forEach((img,i)=>{
                    img.style.setProperty('--img-no',2);
                    img.classList.remove('active');
                    description_items[i].classList.remove('active');
                })


                description_items[i].classList.add('active');
                slide.querySelector('img').classList.add('active');
            }
        })