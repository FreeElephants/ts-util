import {AbstractUnitTestCase} from "ts-x-unit";
import {HashSet} from "../../../src/ts/util/HashSet";

export class HashSetTest extends AbstractUnitTestCase {

    public testAdd() {
        let set: HashSet<Number> = new HashSet<Number>();
        this.assertTrue(set.add(2));
        this.assertFalse(set.add(2));
    }

    public testAddAll() {
        let set: HashSet<Number> = new HashSet<Number>();
        let emptyCollection: HashSet<Number> = new HashSet<Number>();
        this.assertFalse(set.addAll(emptyCollection), "when nothing added `false` is returned");

        let anotherCollection: HashSet<Number> = new HashSet<Number>();
        anotherCollection.add(2);
        this.assertTrue(set.addAll(anotherCollection), "when something added `true` is returned");
        this.assertFalse(set.addAll(anotherCollection), "when some entry already exists in original collection `false` is returned");
    }

    public testClearAndEmpty() {
        let set: HashSet<Number> = new HashSet<Number>();
        this.assertTrue(set.isEmpty());
        set.add(2);
        this.assertFalse(set.isEmpty());
        set.clear();
        this.assertTrue(set.isEmpty());
    }

    public testContains() {
        let set: HashSet<Number> = new HashSet<Number>();
        this.assertFalse(set.contains(2));
        set.add(2);
        this.assertTrue(set.contains(2));
    }

    public testContainsAll(){
        let set: HashSet<Number> = new HashSet<Number>();
        set.add(1);
        set.add(2);
        set.add(3);

        this.assertTrue(set.containsAll(set));

        let anotherCollection: HashSet<Number> = new HashSet<Number>();
        anotherCollection.add(2);
        anotherCollection.add(3);

        this.assertFalse(anotherCollection.containsAll(set));
        this.assertTrue(set.containsAll(anotherCollection));
    }

    public testEquals() {
        let set: HashSet<Number> = new HashSet<Number>();
        let anotherCollection: HashSet<Number> = new HashSet<Number>();
        this.assertTrue(set.equals(anotherCollection));

        set.add(1);
        this.assertFalse(set.equals(anotherCollection));

        anotherCollection.add(1);
        this.assertTrue(set.equals(anotherCollection));
    }

    public testIterator() {
        let set: HashSet<Number> = new HashSet<Number>();
        let iterator1 = set.iterator();
        let iterator2 = set.iterator();

        this.assertFalse(iterator1 == iterator2);
    }

    public testRemoveAndSize() {
        let set: HashSet<Number> = new HashSet<Number>();
        set.add(1);
        set.add(2);
        set.add(3);

        this.assertTrue(set.remove(1));
        this.assertSame(2, set.size());
        this.assertFalse(set.remove(100));
    }

    public testRemoveAll() {
        let set: HashSet<Number> = new HashSet<Number>();
        let anotherSet: HashSet<Number> = new HashSet<Number>();

        this.assertFalse(set.removeAll(anotherSet));

        anotherSet.add(2);
        anotherSet.add(3);

        this.assertFalse(set.removeAll(anotherSet));

        set.add(1);
        set.add(2);
        set.add(3);

        this.assertTrue(set.removeAll(anotherSet));
    }

    public testRetainAll() {
        let set: HashSet<Number> = new HashSet<Number>();
        let anotherSet: HashSet<Number> = new HashSet<Number>();

        this.assertFalse(set.retainAll(anotherSet));

        set.add(1);
        this.assertTrue(set.retainAll(anotherSet));

        anotherSet.add(2);
        anotherSet.add(3);

        this.assertFalse(set.retainAll(anotherSet));

        set.add(1);
        set.add(2);
        set.add(3);

        this.assertTrue(set.retainAll(anotherSet));
    }
}
