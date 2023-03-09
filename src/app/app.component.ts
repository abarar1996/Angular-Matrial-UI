import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DailogComponent } from './components/dailog/dailog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular13Crud';
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DailogComponent, {
      width: '30%',
      // height: '50%'
    });
  }
}
