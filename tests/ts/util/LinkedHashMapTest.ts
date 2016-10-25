import { LinkedHashMap } from "../../../src/ts/util/LinkedHashMap";
import { AbstractUnitTestCase } from "ts-x-unit";

export class LinkedHashMapTest extends AbstractUnitTestCase {

    public testClear() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        map.put(key, value);
        map.clear();
        this.assertSame(0, map.size());
    }

    public testIsEmpty() {
        let map = new LinkedHashMap();
        this.assertTrue(map.isEmpty());
    }

    public testPutOnExistsKey() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        map.put(key, value);
        let oldValue = map.put(key, new Bar());
        this.assertSame(value, oldValue);
    }

    public testContainsKey() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        this.assertFalse(map.containsKey(key));
        map.put(key, value);
        this.assertTrue(map.containsKey(key));
    }

    public testContainsValue() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        this.assertFalse(map.containsValue(1));
        this.assertFalse(map.containsValue(value));
        map.put(key, value);
        this.assertTrue(map.containsValue(value));
    }

    public testEquals() {
        // TODO
        // let map: LinkedHashMap<Number, String> = new LinkedHashMap<Number, String>();
        // let anotherMap: LinkedHashMap<Number, String> = new LinkedHashMap<Number, String>();
        // this.assertTrue(map.equals(anotherMap));
        //
        // map.put(1, "1");
        // this.assertFalse(map.equals(anotherMap));
        //
        // anotherMap.put(2, "2");
        // this.assertFalse(map.equals(anotherMap));
        //
        // map.put(2, "2");
        // anotherMap.put(1, "1");
        // this.assertTrue(map.equals(anotherMap));
    }

    public testGet() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        map.put(key, value);
        this.assertSame(value, map.get(key));
    }

    public testSize() {
        let map: LinkedHashMap<Foo, Bar> = new LinkedHashMap();
        let key: Foo = new Foo();
        let value: Bar = new Bar();

        this.assertEquals(0, map.size());
        map.put(key, value);
        this.assertEquals(1, map.size());
    }

}

class Foo {

}

class Bar {

}

