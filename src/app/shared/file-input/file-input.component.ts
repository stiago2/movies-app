import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "file-input",
  templateUrl: "./file-input.component.html",
  styleUrls: ["./file-input.component.scss"]
})
export class FileInputComponent {
  imageSource: any;
  @Output() onLoad = new EventEmitter<any>();
  constructor() {}

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSource = reader.result;
        this.onLoad.emit(reader.result);
      };
    }
  }
}
