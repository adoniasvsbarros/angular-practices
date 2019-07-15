import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverNameInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
/*     this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent
    }); */
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
/*     this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.newServerContent
    }); */
  }

}
