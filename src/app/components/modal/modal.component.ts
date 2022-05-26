import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  tecnologia:String = this.message;

  constructor( 
    public dialogRef : MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public message : String
  ) { }
  
  ngOnInit(): void {
  }

}
