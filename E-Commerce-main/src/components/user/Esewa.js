export function Esewa({path,parms}){
    var form=document.createElement("form");
    form.setAttribute("method","POST");
    form.setAttribute("action",path);
    
        for(var key in parms){
            var hiddenField=document.createElement("input");
            hiddenField.setAttribute("type","hidden");
            hiddenField.setAttribute("name",key);
            hiddenField.setAttribute("value",parms[key]);
            form.appendChild(hiddenField);
        }

        document.body.appendChild(form);
        form.submit();
}