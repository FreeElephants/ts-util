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
}
