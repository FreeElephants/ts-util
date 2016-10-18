/**
 * https://docs.oracle.com/javase/7/docs/api/java/util/Map.html
 Modifier and Type    Method and Description

 int    hashCode()
 Returns the hash code value for this map.

 Set<K>    keySet()
 Returns a Set view of the keys contained in this map.

 void    putAll(Map<? extends K,? extends V> m)
 Copies all of the mappings from the specified map to this map (optional operation).

 V    remove(Object key)
 Removes the mapping for a key from this map if it is present (optional operation).

 Collection<V>    values()
 Returns a Collection view of the values contained in this map.
 */

/**
 *     K - the type of keys maintained by this map
 *     V - the type of mapped values
 */
export interface Map<K, V> {

    /**
     * Removes all of the mappings from this map.
     */
    clear(): void;

    /**
     * Returns true if this map contains a mapping for the specified key.
     */
    containsKey(key: K): boolean;

    /**
     * Returns true if this map maps one or more keys to the specified value.
     */
    containsValue(value: V): boolean;

    /**
     * Returns a Set view of the mappings contained in this map.
     */
    // entrySet(): Set<Entry<K,V>>;

    /**
     * Compares the specified object with this map for equality.
     */
    // equals(o: any): boolean;

    /**
     * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     */
    get(key: K): V;

    /**
     * Returns true if this map contains no key-value mappings.
     */
    isEmpty(): boolean;

    /**
     * Associates the specified value with the specified key in this map.
     */
    put(key: K, value: V): V;

    /**
     * Returns the number of key-value mappings in this map.
     */
    size(): number;

}

export interface Entry<K, V> {

}
