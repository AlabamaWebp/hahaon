import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {} from "@angular/router";
import { CrudService } from "./shared/serves/crud.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatButtonToggleModule,
  ],
})
export class AppComponent implements OnInit {
  constructor(public crud: CrudService) {}
  ngOnInit(): void {}
  woman = false;
  file?: File;
  src?: string;
  data?: data
  clickPhoto() {
    (
      document.documentElement.querySelector("#f1") as HTMLInputElement
    )?.click();
  }
  getPhoto(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.src = URL.createObjectURL(file);
    this.file = file;
    this.uploPhoto(file);
  }
  uploPhoto(file: File) {
    if (!file) return;
    const formData = new FormData();
    const blob = new Blob([file], { type: file.type });
    formData.append("photo", blob, file.name);
  }
}
interface data {
  weight: number
  height: number
}