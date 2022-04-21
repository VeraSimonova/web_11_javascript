export default class Server{
     href = '';
    init(){
        let request = new XMLHttpRequest();
        request.open('GET', this.href);
        request.addEventListener('load', ()=>{ 
            if(request.status == 200){
                let contents = JSON.parse(request.response);
                console.log(contents);
            }
            else{
                console.log("error");
            }
        });
        request.send();
    }  
}