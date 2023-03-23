import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputModule } from '../input/input.module';
import { FormGroupModule } from '../form-group/form-group.module';
import { ButtonModule } from '../button/button.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputModule,
    FormGroupModule,
    ButtonModule,
    CardModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
