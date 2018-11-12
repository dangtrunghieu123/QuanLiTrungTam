import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public stutus: boolean = true;
  public getName: any;
  public name: any;
  constructor() { }

  ngOnInit() {
     this.change();
     this.Remove();
   
  }
  change() {
    this.getName = JSON.parse(localStorage.getItem("user"));
    console.log(this.getName);
    if (this.getName != null && this.getName != undefined) {
      console.log("chào, " + this.getName.TaiKhoan);
      this.name = this.getName;
      this.stutus = false;
    }
    else {
      this.stutus = true;
    }
  }

  Remove(){
    localStorage.removeItem("user");
    // this.stutus= true;
  }
}
