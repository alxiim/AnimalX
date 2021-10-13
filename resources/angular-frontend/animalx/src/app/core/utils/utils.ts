export function objectKeysToSnakeCase(
    camel: {[key: string]: any} | undefined
): {[key: string]: any} | undefined {
    // Return if the given object is undefined
    // Or given object is not an object
    if (camel === undefined || typeof(camel) != 'object') return camel;

    // Create a placeholder variable for the new object
    const snake: {[key: string]: any} = {};

    // Loop over the camel cased object
    for (const key in camel) {
        // Recursively run the function if there is a child object
        // Array is also seen as an object, but should not trigger the statement
        if (typeof(camel[key]) == "object" && !(camel[key] instanceof Array)) {
            snake[camelToSnake(key)] = objectKeysToSnakeCase(camel[key]);
        } else {
            snake[camelToSnake(key)] = camel[key];
        }
    }

    // Return the snake cased object
    return snake;
}

export function camelToSnake(camel: string): string {
    return camel.replace( /([A-Z])/g, "_$1" ).toLowerCase();
}
