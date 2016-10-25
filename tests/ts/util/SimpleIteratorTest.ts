import { AbstractUnitTestCase } from "ts-x-unit";
import { SimpleIterator } from "../../../src/ts/util/SimpleIterator";

export class SimpleIteratorTest extends AbstractUnitTestCase {

    public testHasNext() {
        let iterator: SimpleIterator<Number> = new SimpleIterator([2, 3]);
        this.assertTrue(iterator.hasNext());
    }

    public testHasNextWithEmptyArray() {
        let iterator: SimpleIterator<Number> = new SimpleIterator([]);
        this.assertFalse(iterator.hasNext());
    }

    public testNext() {
        let iterator: SimpleIterator<Number> = new SimpleIterator([2, 3]);
        this.assertSame(2, iterator.next());
        this.assertSame(3, iterator.next());
        this.assertFalse(iterator.hasNext());
    }
}
