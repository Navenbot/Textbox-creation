import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
inp2: any;
output1: any='';
number: any=[];
//   MySelect1:any=[];
// moreIndex1:any=1;
// doc_name:any=[];
// doc_add:any=[]; 
// doc_cont:any=[];


public anArray:any=[];
// data: any;
inp: any;
  number1: any;
  // i: any;
  constructor(private router: Router) {
    // this.i=0;
  }

  // selectNo1(val1){
  //   if(val1==1)
  //   {
  //    this.MySelect1.push(this.moreIndex1);
  //    this.moreIndex1++;
  //   }
  //   else{
  //     this.MySelect1.pop(this.moreIndex1);
  //     this.moreIndex1--;
  //   }    
  // }



  // goTo(){
  //   console.log('this.anArray',this.anArray);
  //   this.data=false;
  //   }
  // Add(){
  //   this.anArray.push({'value':''});
  //   }

  //   remove(){
  //     this.anArray.pop({'value':''});
  //   }

  add(){
    
// if(this.anArray=[]){
 if(this.anArray=[]){
   document.getElementById('but').style.display="block";
    for(var i=1; i<=this.inp; i++){
        this.anArray.push({});
    } 
  }else {
      this.anArray=[];
      document.getElementById('but').style.display="none";

  }
}

output(){
  console.log(this.inp2);
  let navigationExtras: NavigationExtras = {
    state: {
      user: this.inp2
    }
  };
  this.router.navigate(['second'], navigationExtras);

}

see(){
  var totalNumberofRows = 5;
  for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
          this.output1 += j + '  ';
      }
    this.number.push(this.output1);
      console.log(this.output1);
      this.output1 = '';
  }


 var totalNumberofRows = 5;
   for (var i = 1; i <= totalNumberofRows; i++) {

    for(var j=(totalNumberofRows-i); j>=1; j--) {
      this.output1 +=j+ ' ';
    }
     this.number.push(this.output1);
       console.log(this.output1);
       this.output1 = '';
   }
  //  this.i++;
  //  console.log(this.i);

  //    if(this.i=1){
  //      console.log ('a');
  //    } 
  //     else if(this.i=2){
  //      console.log('b');
  //    }  
  //    else if(this.i=3){
  //      console.log('c');
  //    } else { 
  //      this.i=1;
  //      console.log('error');
  //    }
}
  }