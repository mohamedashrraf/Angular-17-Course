import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-download',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './upload-download.component.html',
  styleUrl: './upload-download.component.scss'
})
export class UploadDownloadComponent {

  inputData: any;
  uploadFileNames: string[] = [];
  FileUrl='https://api.escuelajs.co/api/v1/files/'; // موقع fakeapi.platzi.com بيتيح لينك اقدر ارفع عليه فايلات واعرضها منه بعد ما رفعتها بس مش بتتخزن في داتا بيز بتروح

  constructor(private http : HttpClient){}
  uploadImage(event: any) {
    const file=event.target.files[0];
    const formObj = new FormData(); //ببعت بيه الداتا اللي هدخلها للسيرفر
    formObj.append('file', file);
    if(file.type === 'image/png' && file.size < 5000000){ //size smaller than 5 mb
      this.http.post('https://api.escuelajs.co/api/v1/files/upload',formObj).subscribe((res : any)=>{
        console.log(res);
        this.uploadFileNames.push(res.filename); //بعرض داتا الصور اللي خزنتها في اللينك
        console.log(this.FileUrl + res.filename);
      })
      this.inputData = "";
    }
    else{
      if(file.size > 2000000){
        alert("file size must be less than 2 MB");
      }
      else{
        alert("only files with png extension");
      }
    }
  }

  downloadFile(fileName:string) {
    const downloadUrl = this.FileUrl + fileName;
    this.http.get(downloadUrl, {responseType: 'blob'}).subscribe((response:Blob)=>{ //blob نوع ريبسونس optional
      const blob = new Blob([response], {type : response.type});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
  }

}
