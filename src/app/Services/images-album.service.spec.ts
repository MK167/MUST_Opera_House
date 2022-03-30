import { TestBed } from '@angular/core/testing';

import { ImagesAlbumService } from './images-album.service';

describe('ImagesAlbumService', () => {
  let service: ImagesAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
