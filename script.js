var models = [
    {
        name: '1997-jeep-wrangler-suv-02',
        image: 'img/1997-jeep-wrangler-suv-02.jpg',
        link: 'http://www.arabalar.com.tr/jeep/wrangler/2001/2-5-sport',
    },
    {
        name: '1997-jeep-wrangler-suv-03',
        image: 'img/1997-jeep-wrangler-suv-03.jpg',
        link: 'http://www.arabalar.com.tr/jeep/wrangler/2001/2-5-sport',
    },
    {
        name: '1997-jeep-wrangler-suv-04',
        image: 'img/1997-jeep-wrangler-suv-04.jpg',
        link: 'http://www.arabalar.com.tr/jeep/wrangler/2001/2-5-sport',
    },
    {
        name: '1997-jeep-wrangler-suv-05',
        image: 'img/1997-jeep-wrangler-suv-05.jpg',
        link: 'http://www.arabalar.com.tr/jeep/wrangler/2001/2-5-sport',
    },
    {
        name: '1997-jeep-wrangler-suv-111',
        image: 'img/1997-jeep-wrangler-suv-111.jpg',
        link: 'http://www.arabalar.com.tr/jeep/wrangler/2001/2-5-sport',
    }
]

var index = 1;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '3000',
    random : true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    showSlide(index)
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    var prev;
   interval =  setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index==prev)
            prev=index;
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index)
    },settings.duration)
}




function showSlide(i){
    index = i;
    if(i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index=0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
}