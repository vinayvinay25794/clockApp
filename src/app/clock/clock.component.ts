import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
now:any;
utctime:any;
london:any;
d:any;
d1:any;
d2:any;
hrs:any;
h:any;
h2:any;
ntt:any;
htw:any;
hts:any;

  constructor() { }

  ngOnInit() {
     this.d = new Date();
    var x = document.getElementById("demo");
    var asd = this.d.getHours()+15;
   if(asd<25){
     this.h=asd;
   }else{
      this.h=asd-24;
   }
    
    var m = (this.d.getUTCMinutes());
    var s = (this.d.getUTCSeconds());
    x.innerHTML ="Unites States:"+ this.h + ":" + m + ":" + s;
     this.now = new Date();
      this.d1 = new Date();
     var x1 = document.getElementById("demo1");
     var h1 = this.d1.getHours();
     var m1 = (this.d1.getUTCMinutes());
     var s1 = (this.d1.getUTCSeconds());
     x1.innerHTML ="India:"+ h1 + ":" + m1 + ":" + s1;

     this.d2 = new Date();
     var x2 = document.getElementById("demo2");
     var astc = 6-this.h;
     if(this.h>6){
       this.h2=this.h-6;
     }else{
this.h2=24-astc;
     }
     var m2 = (this.d2.getUTCMinutes());
     var s2 = (this.d2.getUTCSeconds());
     x2.innerHTML ="London:"+ this.h2 + ":" + m2 + ":" + s2;
   
  //   var d = new Date();
  //  d.setUTCHours(15, 35, 1);
  
    var localtime = this.now.getTime.toLocaleString();
 //this.utctime = this.now.toUTCString();


 var d = new Date();
d.setUTCHours(15, 35, 1);

// document.write("<p><strong>Local time:</strong> " + localtime +
// "</p>");
// document.write("<p><strong>UTC time:</strong> " + utctime +
// "</p>");

// function to calculate local time
// in a different city
// given the city's UTC offset


// get Bombay time
// var b=calcTime('Bombay', '+5.5');
// document.write('<p>Bombay :'+b+'</p>');

// // get Singapore time
// var s=calcTime('Singapore', '+8');
// document.write('<p>singapore :'+s+'</p>')
// // get London time
//  this.london=this.calcTime('London', '+1');
 // this.london=new Date().toLocaleString('en-GB')
// document.write('<p>London :'+l+'</p>')
  }
  update(myform){
    this.utctime=myform.form.value.utc;
    var n = document.getElementById('demo'); 
   // var s12=n.split(':')
   // console.log(s12);
   // this.utctime=this.utctime;
   n.innerText ="Unites States:"+ this.utctime;
   console.log(n.innerText.split(':')[1]);
   this.d1 = new Date();
   this.d1.setUTCHours(parseInt(n.innerText.split(':')[1]));
   var x1 = document.getElementById("demo1");
   if(parseInt(n.innerText.split(':')[1])<15){   
     var h1 = parseInt(n.innerText.split(':')[1])+9;
    }else{
     var as=parseInt(n.innerText.split(':')[1])-15;
     var h1 = 0+as;
   }

   var m1 = (this.d1.getUTCMinutes());
   var s1 = (this.d1.getUTCSeconds());
   x1.innerHTML ="India:"+ h1 + ":" + n.innerText.split(':')[2] + ":" + n.innerText.split(':')[3]; 
  // this.now=this.utctime.toLocaleString();
   // this.london=this.calcTime('London', '+1')
   this.d2 = new Date();
   this.d2.setUTCHours(parseInt(n.innerText.split(':')[1]));
    var x2 = document.getElementById("demo2");
   
   if(parseInt(n.innerText.split(':')[1])>6){   
    var h2 = parseInt(n.innerText.split(':')[1])-6;
   }else{
    var as=6-parseInt(n.innerText.split(':')[1]);
    var h2 = 24-as;
  }
   var m2 = (this.d2.getUTCMinutes());
   var s2 = (this.d2.getUTCSeconds());
   x2.innerHTML ="London:"+ h2 + ":" + n.innerText.split(':')[2] + ":" + n.innerText.split(':')[3];
  }


  updateLondon(myform1){
    //this.hrs=parseInt(myform1.form.value.london);
    var sw=document.getElementById("london");
    // this.ntt=parseInt(sw.innerText);
    this.ntt=myform1.form.value.london;
    console.log(this.ntt)

     this.d2 = new Date();
     var x2 = document.getElementById("demo2");
     var astc = this.ntt-this.h;
     if(this.h>this.ntt){
       this.h2=this.h-this.ntt;
     }else{
this.h2=24-astc;
     }
  //   var h2 = this.d2.getUTCHours()-this.hrs;
     var m2 = (this.d2.getUTCMinutes());
     var s2 = (this.d2.getUTCSeconds());
     x2.innerHTML ="London:"+ this.h2 + ":" + m2 + ":" + s2;
  }

  updateIndia(myform2){
    var sw=document.getElementById("india");
    // this.ntt=parseInt(sw.innerText);
    this.ntt=myform2.form.value.india;
    console.log(this.ntt)

     this.d2 = new Date();
     var x2 = document.getElementById("demo1");
     var astc = this.ntt-this.h;
     if(this.h>this.ntt){
       this.h2=this.h-this.ntt;
     }else{
this.h2=24-astc;
     }
  //   var h2 = this.d2.getUTCHours()-this.hrs;
     var m2 = (this.d2.getUTCMinutes());
     var s2 = (this.d2.getUTCSeconds());
     x2.innerHTML ="India:"+ this.h2 + ":" + m2 + ":" + s2;
  }
  

}
