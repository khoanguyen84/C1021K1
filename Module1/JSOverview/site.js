function showPW(){
    // get element which id is btn
    let btn = document.getElementById('btn');
    if(btn.innerText == 'Show'){
        document.getElementsByTagName('input')[0].type='text';
        btn.innerText = "Hide";
    }
    else{
        document.getElementsByTagName('input')[0].type='password';
        btn.innerText = "Show";
    }
}