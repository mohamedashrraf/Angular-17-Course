import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDownloadComponent } from './upload-download.component';

describe('UploadDownloadComponent', () => {
  let component: UploadDownloadComponent;
  let fixture: ComponentFixture<UploadDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
