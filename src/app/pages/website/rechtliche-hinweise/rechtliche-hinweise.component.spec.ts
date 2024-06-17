import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtlicheHinweiseComponent } from './rechtliche-hinweise.component';

describe('RechtlicheHinweiseComponent', () => {
  let component: RechtlicheHinweiseComponent;
  let fixture: ComponentFixture<RechtlicheHinweiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechtlicheHinweiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechtlicheHinweiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
