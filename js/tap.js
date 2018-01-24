class Tap{
    constructor(){
        this.init();
        addEventListener
    }
    init(){
        this.creatTap()
    }
    createtag(tag){
        const lis = document.createElement(tag)
        for(let i=0;i<5;i++){
            let li = document.createElement('li')
            lis.append(li)
        }
        return lis;
    }
    createText(lsit){
        let lise = document.querySelectorAll(lsit)[0];
        let li = lise.getElementsByTagName('li');
        return li;
    }
    createArr(){
        let arr = ['首页','分类','购物车','我的','商家']
        return arr
    }
    creatTap(){
        let text = this.createArr();
        let ul =  this.createtag('ul')
        let ol =  this.createtag('ol');
        ul.className = 'ulist';
        ol.className ='olist'
        document.body.append(ul)
        document.body.append(ol)
        let lis = this.createText('.ulist')
        let ois = this.createText('.olist')
        for(var j=0;j<lis.length;j++){
            lis[j].style.background = '#eee'
            lis[j].innerHTML = text[j];
            ois[j].innerHTML = text[j];
            lis[j].index = j;
            lis[j].addEventListener('click',function(even){
                for(var l=0;l<ois.length;l++){
                    ois[l].style.display = 'none'
                    lis[l].style.background = '#eee'
                }
                 ois[this.index].style.display='block';
                 lis[this.index].style.background= 'orange'
                 
            })
           
        }
    }
}
const tap = new Tap()
 