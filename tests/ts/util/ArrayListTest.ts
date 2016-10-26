import { AbstractUnitTestCase } from "ts-x-unit";
import { ArrayList, IndexOutOfBoundsException } from "../../../src/ts/util";

export class ArrayListTest extends AbstractUnitTestCase {

    public testGet() {
        let list = new ArrayList();
        let expected = {};
        list.add(expected);
        this.assertEquals(expected, list.get(0));
    }

    public testGetIndexOutOfBoundsException() {
        let list = new ArrayList();
        let expected = {};
        this.expectException(IndexOutOfBoundsException);
        this.assertEquals(expected, list.get(0));
    }

    public testIndexOf() {
        let list = new ArrayList();
        let expected = {};
        this.assertSame(-1, list.indexOf(expected));
        list.add(expected);
        this.assertSame(0, list.indexOf(expected));
    }

    public testLastIndexOf() {
        let list = new ArrayList();
        let expected = {};
        this.assertSame(-1, list.lastIndexOf(expected));
        list.add(expected);
        list.add(expected);
        this.assertEquals(1, list.lastIndexOf(expected));
    }
}
