import {Map, Entry} from "./Map";

export class LinkedHashMap<K, V> implements Map<K, V> {

    private keys: K[] = [];
    private values: V[] = [];

    public clear(): void {
        this.keys = [];
        this.values = [];
    }

    public containsKey(key: K): boolean {
        return this.keys.indexOf(key) > -1;
    }

    public containsValue(value: V): boolean {
        return this.values.indexOf(value) > -1;
    }

    public get(key: K): V {
        let index = this.keys.indexOf(key);
        return this.values[index];
    }

    public isEmpty() {
        return this.keys.length === 0;
    }

    public put(key: K, value: V): V {
        let index = this.keys.indexOf(key);
        let oldValue: V = null;
        if (index > 0) {
            oldValue = this.values[index];
        } else {
            this.keys.push(key);
            this.values.push(value);
        }

        return oldValue;
    }

    public size(): number {
        return this.keys.length;
    }
}
