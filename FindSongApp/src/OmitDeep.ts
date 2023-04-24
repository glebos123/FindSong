// @ts-ignore
export function OmitDeep(value : any, key : string = "__typename") {
    if (Array.isArray(value)) {
        return value.map(i => OmitDeep(i, key))
    }
    else if (typeof value === 'object' && value !== null) {
        return Object.keys(value)
            .reduce(
                (newObject, k) => {
                    if (k == key) return newObject
                  
                    return Object.assign(
                        { [k]: OmitDeep(value[k], key) },
                        newObject
                    )
                },
                {}
            )
    }
    return value
}