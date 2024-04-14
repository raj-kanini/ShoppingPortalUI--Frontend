import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  isAddProductModalOpen: boolean = false;
  formData: any = {};

  openProductModal() {
    this.isAddProductModalOpen = true;
  }

  closeProductModal() {
    this.isAddProductModalOpen = false;
  }

  addProduct(){
    console.log("Form Data: ", this.formData);
    this.closeProductModal();
  }
}
