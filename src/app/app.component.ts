import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
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
  constructor(
    public crud: CrudService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}
  ngOnInit(): void {  }
  woman = false;
  file?: File;
  src?: string;
  data?: data;
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
    this.cdr.detectChanges();
    this.uploPhoto(file);
  }
  uploPhoto(file: File) {
    if (!file) return;
    const formData = new FormData();
    const blob = new Blob([file], { type: file.type });
    formData.append("image", blob, file.name);
    this.http
      .post("http://0.0.0.0:8000/neuro", formData, {responseType: "arraybuffer"})
      .subscribe({next: (e: any) => {
        this.data = {
          weight: e[0],
          height: e[1],
        };
      }, error: (e: any ) => {
        e.status === 510 ? alert('На фото не обнаружено силуета'): 0;
      }},
      );
  }

  checkError(){
    
  }
}
interface data {
  weight: number;
  height: number;
}
