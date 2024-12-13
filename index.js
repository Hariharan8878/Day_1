let testimonial_data = [
    {
        name : "Ramesh",
        image : "https://picsum.photos/200/300?random=1",
        text_content :"Hello! This is Ramesh"
    },
    {
        name : "Vyshak Vijaykumar",
        image : "https://picsum.photos/200/300?random=2",
        text_content :"Im an frontend developer"
    },
    {
        name : "John Victor",
        image : "https://picsum.photos/200/300?random=3",
        text_content :"This is Captain John Victor reporting"
    },
    {
        name : "Preethi",
        image : "https://picsum.photos/200/300?random=4",
        text_content :"Hi! im Preethi Im working as an Fashion Designer in UK"
    }
    
]

let data = 0;

let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text = document.querySelector(".container_text")

function testimonial(){
    let current = testimonial_data[data];
    name.innerHTML = current.name;
    image.src = current.image;
    text.innerHTML = current.text;
    data++;

    if(data===testimonial_data.length){
        data = 0 
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()

