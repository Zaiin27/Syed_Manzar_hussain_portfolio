import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappComponent } from './whatsapp.component';

describe('WhatsappComponent', () => {
  let component: WhatsappComponent;
  let fixture: ComponentFixture<WhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
