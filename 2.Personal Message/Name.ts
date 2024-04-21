// Store the person's name in a variable
const personName: string = "Kamran Sahab";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));

// Function to convert a string to titlecase
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
