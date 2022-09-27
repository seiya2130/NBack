import { Shape } from './shape';
import { Place } from './place';

export interface Question {
  letter: string,
  audio: string,
  place: Place,
  color: string,
  shape: Shape
}
