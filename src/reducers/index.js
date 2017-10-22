// Let's make importing multiple reducers a little nicer by importing them all into this file and exporting them as an object
import scoring from './scoring';
import gameplay from './gameplay';

export {
    scoring,
    gameplay
}