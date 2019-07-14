import { TestBed } from '@angular/core/testing';
import { GridService } from './grid.service';
import { HttpClientModule } from '@angular/common/http';



describe('GridService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: GridService = TestBed.get(GridService);
    expect(service).toBeTruthy();
  });
});
