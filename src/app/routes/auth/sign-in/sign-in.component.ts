import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,
    InputGroupModule,
  InputGroupAddonModule,
  DialogModule,
  ToolbarModule,
  ConfirmDialogModule,],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{

  ngOnInit(): void {

  }

}
