var count=0;/* ye dot use hua he to us hisab se function(equal function dekho)konsa use karna he ye btata he */

var j;      /* ye sabse kaam ka he isse apn values ko continious me print kar pa rahe he(look at 
             the else statement)or isse apn symbol ke baadvali value(before decimal if used after sym)*/

var i=0;    /*it help us to display symbols*/

var t=0;    /*it help us to retrive the number before sym(float)*/

var k=0;    /*it help us to disply no's with dot*/

var q=0;    /*it help us to retrive the no. after sym && before decimal */

var opt=0;  /*it tells us which opration will be performed(+*-/) */

var u=0;    /* it counts that how many times no. button is pressed so that 
            we can use it to display no. accordingly(look at equal function)*/

function display(x,a)
{
    if(count==0)
    {
        j=parseInt(a.getAttribute("id"));
        x.innerHTML=j;
        count++;    
    }
    else if(a.id=="sym1")
    {
        i= k+j+a.innerHTML;
        x.innerHTML=i;
        j=0;
        k=0;
        t=parseFloat(i);
        count=count+5;
        opt=1;
    }
    else if(a.id=="sym2")
    {
        i= k+j+a.innerHTML;
        x.innerHTML=i;
        j=0;
        k=0;
        t=parseFloat(i);
        count=count+5;
        opt=2;
    }
    else if(a.id=="sym3")
    {
        i= k+j+a.innerHTML;
        x.innerHTML=i;
        j=0;
        k=0;
        t=parseFloat(i);
        count=count+5;
        opt=3;
    }
    else if(a.id=="sym4")
    {
        i= k+j+a.innerHTML;
        x.innerHTML=i;
        j=0;
        k=0;
        t=parseFloat(i);
        count=count+5;
        opt=4;
    }
    else if(a.id=="dot")
    {
        k=i+j+a.innerHTML;
        x.innerHTML=k
        q=j;
        j=0;
        i=0;
        count=count*2;
        u=0;
    }
    else if(a.id=="cb")
    {
        count=0;
        j=0;
        i=0;
        t=0;
        k=0;
        q=0;
        opt=0;
        u=0;
        x.innerHTML=00;
    }
    else
    {
        var v=parseInt(a.getAttribute("id"));
        j=10*j+v;
        x.innerHTML=i+k+j;
        u++;
    }
}

function fgh(v,b)
{
    if(opt==1)
        return v+b;
    else if(opt==2)
        return v-b;
    else if(opt==3)
        return v*b;
    else if(opt==4)
        return v/b;
}

function equal(g)
{
    if(count<10)
        g.innerHTML=fgh(t,j);
    else
    {
        var p=j/(10*u);
        g.innerHTML=fgh(t,q+p);
    }
}